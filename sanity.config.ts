import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';

const config = defineConfig({
  title: 'Trigona CMS',

  projectId: 'c5f8ymr4',
  dataset: 'production',

  apiVersion: "2024-05-29",

  basePath: '/admin',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

});

export default config;