import CompCard from '~/components/CompCard'
import Layout from '~/components/Layout'
import SortFilterLayout from '~/components/SortFilterLayout'
import useModels from '~/hooks/useModels'

import styles from './styles.module.css'

function Models () {
  const { models, filteredModels, searchModelsByName, filterModels } = useModels()

  return (
    <Layout>
      <SortFilterLayout search={searchModelsByName} filterModels={filterModels}>
        <div className={styles.models}>
          {filteredModels.map((model, index) => (
            <CompCard key={index} {...model} />
          ))}
        </div>
      </SortFilterLayout>
    </Layout>
  )
}

export default Models
