import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'e6fi137e', // you can find this in sanity.json
  dataset: 'thebetter', // or the name you chose in step 1
  apiVersion: '2021-08-31',
  useCdn: false // `false` if you want to ensure fresh data
})