import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Slider from '@mui/material/Slider'
import React, {useEffect, useState} from 'react'

import cities from '~/constants/cities'

import styles from './styles.module.css'

interface SortFilterLayoutProps {
  children: React.ReactNode
  search: (name: string) => void
  filterModels: (age: number[], height: number[], eyeColor: string[], hairColor: string[], ethnicity: string[], gender: string[], location: string) => void
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
  const [gender, setGender] = useState<string[]>([])
  const [location, setLocation] = useState<string>('')

  const [showFilters, setShowFilters] = useState(true)

  const handleAgeSlider = (event: Event, newValue: number | number[]) => {
    setAgeValue(newValue as number[])
    filterModels(newValue as number[], heightValue, eyeColor, hairColor, ethnicity, gender, location)
  }

  const handleHeightSlider = (event: Event, newValue: number | number[]) => {
    setHeightValue(newValue as number[])
    filterModels(ageValue, newValue as number[], eyeColor, hairColor, ethnicity, gender, location)
  }

  const handleEyeColor = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newValue = checked
      ? [...eyeColor, event.target.name]
      : eyeColor.filter(color => color !== event.target.name);
    setEyeColor(newValue);
    filterModels(ageValue, heightValue, newValue, hairColor, ethnicity, gender, location);
  }

  const handleHairColor = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newValue = checked
      ? [...hairColor, event.target.name]
      : hairColor.filter(color => color !== event.target.name);
    setHairColor(newValue);
    filterModels(ageValue, heightValue, eyeColor, newValue, ethnicity, gender, location)
  }

  const handleEthnicity = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newValue = checked
      ? [...ethnicity, event.target.name]
      : ethnicity.filter(eth => eth !== event.target.name);
    setEthnicity(newValue);
    filterModels(ageValue, heightValue, eyeColor, hairColor, newValue, gender, location)
  }

  const handleGender = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const newValue = checked
      ? [...gender, event.target.name]
      : gender.filter(gen => gen !== event.target.name);
    setGender(newValue);
    filterModels(ageValue, heightValue, eyeColor, hairColor, ethnicity, newValue, location)
  }
  
  const handleLocation = (event: SelectChangeEvent<string>) => {
    setLocation(event.target.value);
    filterModels(ageValue, heightValue, eyeColor, hairColor, ethnicity, gender, event.target.value)
  }

  const handleOnSearch = (e: any) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    search(searchTerm)

    if (searchTerm === '') {
      filterModels(ageValue, heightValue, eyeColor, hairColor, ethnicity, gender, location)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {!showFilters && <button onClick={() => setShowFilters(true)} className={styles.page_cta}>Show Filters</button>}
        {showFilters && <button onClick={() => setShowFilters(false)} className={styles.page_cta}>Hide Filters</button>}
      </div>
      <div className={styles.main_content}>
       { showFilters && (
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
          <label htmlFor='gender'>Location:</label>
          <Select
            id="location"
            value={location}
            label="Location"
            onChange={handleLocation}
          >
            <MenuItem value='All'>All</MenuItem>
            {cities.map((city, index) => (<MenuItem key={index} value={city.value}>{city.title}</MenuItem>))}
          </Select>
          <Divider />
          <div>
            <label htmlFor='gender'>Gender:</label>
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={handleGender} name='male' />} label="Male" />
              <FormControlLabel control={<Checkbox onChange={handleGender} name='female' />} label="Female" />
              <FormControlLabel control={<Checkbox onChange={handleGender} name='non-binary' />} label="Non-Binary" />
            </FormGroup>
          </div>
          <Divider />
          <div>
            <label htmlFor='eyeColor'>Eye Color:</label>
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={handleEyeColor} name='Brown' />} label="Brown" />
              <FormControlLabel control={<Checkbox onChange={handleEyeColor} name='Hazel' />} label="Hazel" />
              <FormControlLabel control={<Checkbox onChange={handleEyeColor} name='Green' />} label="Green" />
              <FormControlLabel control={<Checkbox onChange={handleEyeColor} name='Blue' />} label="Blue" />
              <FormControlLabel control={<Checkbox onChange={handleEyeColor} name='Gray' />} label="Gray" />
            </FormGroup>
          </div>
          <Divider />
          <div>
            <label htmlFor='hairColor'>Hair Color:</label>
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={handleHairColor} name='Brown' />} label="Brown" />
              <FormControlLabel control={<Checkbox onChange={handleHairColor} name='Black' />} label="Black" />
              <FormControlLabel control={<Checkbox onChange={handleHairColor} name='Blonde' />} label="Blonde" />
              <FormControlLabel control={<Checkbox onChange={handleHairColor} name='Red' />} label="Red" />
              <FormControlLabel control={<Checkbox onChange={handleHairColor} name='Gray' />} label="Gray" />
            </FormGroup>
          </div>
          <Divider />
          <div>
            <label htmlFor='ethnicity'>Ethnicity:</label>
            <FormGroup>
              <FormControlLabel control={<Checkbox onChange={handleEthnicity} name='Caucasian'/>} label="Caucasian" />
              <FormControlLabel control={<Checkbox onChange={handleEthnicity} name='African American' />} label="Black" />
              <FormControlLabel control={<Checkbox onChange={handleEthnicity} name='Asian American' />} label="Asian" />
              <FormControlLabel control={<Checkbox onChange={handleEthnicity} name='Hispanic or Latino' />} label="Hispanic" />
              <FormControlLabel control={<Checkbox onChange={handleEthnicity} name='Middle Eastern' />} label="Middle Eastern" />
              <FormControlLabel control={<Checkbox onChange={handleEthnicity} name='Pacific Islander' />} label="Pacific Islander" />
              <FormControlLabel control={<Checkbox onChange={handleEthnicity} name='Native American' />} label="Native American" />
              <FormControlLabel control={<Checkbox onChange={handleEthnicity} name='Multiracial' />} label="Mixed Race" />
              <FormControlLabel control={<Checkbox onChange={handleEthnicity} name='Other' />} label="Other" />
            </FormGroup>
          </div>
        </aside>
      )}
        <div>{children}</div>
      </div>
    </div>
  )
}

export default SortFilterLayout
