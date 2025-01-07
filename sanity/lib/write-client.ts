import "server-only";   // This is the only difference between the two files

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
})

if(!writeClient.config().token) {
  throw new Error('The token is required to perform write operations')
}