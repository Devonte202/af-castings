import CircularProgress from '@mui/material/CircularProgress'

import CompCard from '~/components/CompCard'
import Layout from '~/components/Layout'
import SortFilterLayout from '~/components/SortFilterLayout'
import useModels from '~/hooks/useModels'

import styles from './styles.module.css'

function Models () {
  const { filteredModels, searchModelsByName, filterModels, isLoading } = useModels()

  return (
    <Layout>
      <SortFilterLayout search={searchModelsByName} filterModels={filterModels}>
        <div className={styles.models}>
          {!isLoading && filteredModels.map((model, index) => (
            <CompCard key={index} model={model} />
          ))}
          {isLoading && <div className={styles.loading_container}><CircularProgress /></div>}
        </div>
      </SortFilterLayout>
    </Layout>
  )
}

export default Models
