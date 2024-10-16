import { useCallback, useEffect, useState } from 'react'

import { getClient } from '~/lib/sanity.client'
import { getModels, type Model } from '~/lib/sanity.queries'

const heightMap = {
  "4'10": 58,
  "4'11": 59,
  "5'0": 60,
  "5'1": 61,
  "5'2": 62,
  "5'3": 63,
  "5'4": 64,
  "5'5": 65,
  "5'6": 66,
  "5'7": 67,
  "5'8": 68,
  "5'9": 69,
  "5'10": 70,
  "5'11": 71,
  "6'0": 72,
  "6'1": 73,
  "6'2": 74,
  "6'3": 75,
  "6'4": 76,
  "6'5": 77,
  "6'6": 78,
  "6'7": 79,
  "6'8": 80,
  "6'9": 81,
  "6'10": 82,
  "6'11": 83,
  "7'0": 84,
}

const useModels = () => {
  const [models, setModels] = useState<Model[]>([])
  const [filteredModels, setFilteredModels] = useState<Model[]>(models)
  const [isLoading, setIsLoading] = useState(true)

  const fetchModels = async () => {
    const client = getClient()
    const models = await getModels(client)
    setModels(models)
    setIsLoading(false)
  }

  const filterModels = (age: number[], height: number[], eyeColor: string[], hairColor: string[], ethnicity: string[], gender: string[], location: string) => {
    let filtered = models

    if (age.length > 0) {
      filtered = filtered.filter(model => model.age >= age[0] && model.age <= age[1])
    }
    if (height.length > 0) {
      filtered = filtered.filter(model => heightMap[model.height] >= height[0] && heightMap[model.height] <= height[1])
    }
    if (eyeColor.length > 0) {
      filtered = filtered.filter(model => eyeColor.includes(model.eyeColor))
    }
    if (hairColor.length > 0) {
      filtered = filtered.filter(model => hairColor.includes(model.hairColor))
    }
    if (ethnicity.length > 0) {
      filtered = filtered.filter(model => ethnicity.includes(model.race))
    }
    if (gender.length > 0) {
      filtered = filtered.filter(model => gender.includes(model.gender))
    }
    if (location && location !== 'All') {
      filtered = filtered.filter(model => model.location === location)
    }

    setFilteredModels(filtered)
  }

  const sortModels = (key: keyof Model) => {
    return [...models].sort((a, b) => (a[key] > b[key] ? 1 : -1))
  }

  const searchModelsByName = useCallback((name: string) => {
    setFilteredModels(models.filter(model => model.fullName.toLowerCase().includes(name.toLowerCase())))
  }, [models])

  useEffect(() => {
    fetchModels()
  }, [])

  return {
    models,
    filterModels,
    filteredModels,
    searchModelsByName,
    sortModels,
    isLoading,
  }
}

export default useModels