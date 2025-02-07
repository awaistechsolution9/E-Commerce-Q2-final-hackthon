import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:"mxsrgd7b",
  dataset:"production",
  apiVersion:"2025-02-07",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
 
