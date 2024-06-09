import {createClient, type ClientConfig} from '@sanity/client'
import { apiVersion } from './environment';
import { projectId } from './environment';
import { dataset } from './environment';

const config: ClientConfig = {
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // set to `false` to bypass the edge cache
}

export const sanityClient = createClient(config)
