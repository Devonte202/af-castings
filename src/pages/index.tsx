import type { GetStaticProps, InferGetStaticPropsType } from 'next'

import CompCard from '~/components/CompCard.tsx'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getModels, type Model } from '~/lib/sanity.queries'
import type { SharedPageProps } from '~/pages/_app'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    models: Model[]
  }
> = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const models = await getModels(client)

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      models,
    },
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const { models } = props
console.log(models)
  return (
    <div>
        {models.map((model) => (
          <div key={model._id}>
            <CompCard
              name={model.fullName}
              age={model.age}
              race={model.race}
              height={model.height}
              bust={model.bust}
              waist={model.waist}
              hips={model.hips}
              shoeSize={model.shoeSize}
              hairColor={model.hairColor}
              eyeColor={model.eyeColor}
              images={model.images}
              location={model.location}
            />
          </div>
        ))}
    </div>
  )
}
