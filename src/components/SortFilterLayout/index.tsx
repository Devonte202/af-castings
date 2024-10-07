import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Slider from '@mui/material/Slider'
import React, {useEffect, useState} from 'react'

import styles from './styles.module.css'

interface SortFilterLayoutProps {
  children: React.ReactNode
  search: (name: string) => void
  filterModels: (age: number[], height: number[], eyeColor: string[], hairColor: string[], ethnicity: string[]) => void
}

const heightMarks = [
  {
    value: 58,
  },
  {
    value: 60,
  },
  {
    value: 62,
  },
  {
    value: 64,
  },
  {
    value: 66,
  },
  {
    value: 68,
  },
  {
    value: 70,
  },
  {
    value: 72,
  },
  {
    value: 74,
  },
  {
    value: 76,
  },
  {
    value: 78,
  },
  {
    value: 80,
  },
  {
    value: 82,
  },
  {
    value: 84,
  },
]

const heightLabels = (value: number) => {
  return `${Math.floor(value / 12)}'${value % 12}"`;
}

const SortFilterLayout = ({ children, search, filterModels }: SortFilterLayoutProps) => {

  const [searchTerm, setSearchTerm] = useState('')
  const [ageValue, setAgeValue] = React.useState<number[]>([18, 100]);
  const [heightValue, setHeightValue] = React.useState<number[]>([58, 74]);
  const [eyeColor, setEyeColor] = useState<string[]>([])
  const [hairColor, setHairColor] = useState<string[]>([])
  const [ethnicity, setEthnicity] = useState<string[]>([])

  const handleAgeSlider = (event: Event, newValue: number | number[]) => {
    setAgeValue(newValue as number[])
    filterModels(newValue as number[], heightValue, eyeColor, hairColor, ethnicity)
  }

  const handleHeightSlider = (event: Event, newValue: number | number[]) => {
    setHeightValue(newValue as number[])
    filterModels(ageValue, newValue as number[], eyeColor, hairColor, ethnicity)
  }

  const handleEyeColor = (event: Event, newValue: string[]) => {
    setEyeColor(newValue)
    filterModels(ageValue, heightValue, newValue, hairColor, ethnicity)
  }

  const handleHairColor = (event: Event, newValue: string[]) => {
    setHairColor(newValue)
    filterModels(ageValue, heightValue, eyeColor, newValue, ethnicity)
  }

  const handleEthnicity = (event: Event, newValue: string[]) => {
    setEthnicity(newValue)
    filterModels(ageValue, heightValue, eyeColor, hairColor, newValue)
  }

  const handleOnSearch = (e: any) => {
    setSearchTerm(e.target.value)
  }
  

  useEffect(() => {
    search(searchTerm)
  }, [searchTerm, search])

  return (
    <div className={styles.filter_layout}>
      <div className={styles.top_bar}>
      <h1>AF Castings Talent</h1>
      <div className={styles.search_bar}>
        <label>
          <input onChange={handleOnSearch} type="text" placeholder="Search..." />
        </label>
      </div>
      </div>
      <div className={styles.main_content}>
        <aside className={styles.filter_sidebar}>
          <div className={styles.range_slider}>
            <label htmlFor="ageRange">Age Range:</label>
            <Slider
              getAriaLabel={() => 'Age range'}
              value={ageValue}
              onChange={handleAgeSlider}
              min={18}
              max={100}
              valueLabelDisplay="auto"
            />
          </div>
          <Divider />
          <div className={styles.range_slider}>
            <label htmlFor="heightRange">Height Range:</label>
            <Slider
              getAriaLabel={() => 'Height range'}
              value={heightValue}
              onChange={handleHeightSlider}
              valueLabelFormat={heightLabels}
              valueLabelDisplay="auto"
              min={58}
              max={84}
              step={2}
              marks={heightMarks}
            />
          </div>
          <Divider />
          <div>
            <label htmlFor='eyeColor'>Eye Color:</label>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Brown" />
              <FormControlLabel control={<Checkbox />} label="Hazel" />
              <FormControlLabel control={<Checkbox />} label="Green" />
              <FormControlLabel control={<Checkbox />} label="Blue" />
              <FormControlLabel control={<Checkbox />} label="Gray" />
            </FormGroup>
          </div>
          <Divider />
          <div>
            <label htmlFor='hairColor'>Hair Color:</label>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Brown" />
              <FormControlLabel control={<Checkbox />} label="Black" />
              <FormControlLabel control={<Checkbox />} label="Blonde" />
              <FormControlLabel control={<Checkbox />} label="Red" />
              <FormControlLabel control={<Checkbox />} label="Gray" />
            </FormGroup>
          </div>
          <Divider />
          <div>
            <label htmlFor='ethnicity'>Ethnicity:</label>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Caucasian" />
              <FormControlLabel control={<Checkbox />} label="Black" />
              <FormControlLabel control={<Checkbox />} label="Asian" />
              <FormControlLabel control={<Checkbox />} label="Hispanic" />
              <FormControlLabel control={<Checkbox />} label="Middle Eastern" />
              <FormControlLabel control={<Checkbox />} label="Native American" />
              <FormControlLabel control={<Checkbox />} label="Mixed" />
            </FormGroup>
          </div>
        </aside>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default SortFilterLayout
