import { defineConfig } from 'sanity'
import {structureTool} from 'sanity/structure'
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { title } from './sanity/environment';
import { apiVersion } from './sanity/environment';
import { projectId } from './sanity/environment';
import { dataset } from './sanity/environment';


const conf = {
  title,

  projectId,
  dataset,

  apiVersion,

  basePath: '/admin',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
}

const config = defineConfig(conf);

export default config;