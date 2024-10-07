import { useCallback, useEffect, useState } from 'react'

import { getClient } from '~/lib/sanity.client'
import { getModels, type Model } from '~/lib/sanity.queries'

const heightMap = {
  "4'10": 58,
  "5'0": 60,
  "5'2": 62,
  "5'4": 64,
  "5'6": 66,
  "5'8": 68,
  "5'10": 70,
  "6'0": 72,
  "6'2": 74,
  "6'4": 76,
  "6'6": 78,
  "6'8": 80,
  "6'10": 82,
  "7'0": 84,
}

const useModels = () => {
  const [models, setModels] = useState<Model[]>([])
  const [filteredModels, setFilteredModels] = useState<Model[]>(models)

  const fetchModels = async () => {
    const client = getClient()
    const models = await getModels(client)
    setModels(models)
  }

  const filterModels = (age: number[], height: number[], eyeColor: string[], hairColor: string[], ethnicity: string[]) => {
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

  useEffect(() => {
    if (models.length === 0) {
      fetchModels()
    }
  }, [models])

  return {
    models,
    filterModels,
    filteredModels,
    searchModelsByName,
    sortModels,
  }
}

export default useModels