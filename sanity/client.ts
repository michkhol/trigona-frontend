import {createClient, type ClientConfig} from '@sanity/client'

const config: ClientConfig = {
    projectId: "c5f8ymr4",
    dataset: "production",
    apiVersion: "2024-05-29",
    useCdn: false, // set to `false` to bypass the edge cache
}

export const sanityClient = createClient(config)
