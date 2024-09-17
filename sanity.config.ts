import { defineConfig } from 'sanity'
import {structureTool} from 'sanity/structure'
import { visionTool } from '@sanity/vision';
import {RobotIcon, RocketIcon} from '@sanity/icons'
import { schemaTypes } from './sanity/schemaTypes';
import { title } from './sanity/environment';
import { projectId } from './sanity/environment';


const config = defineConfig([
  {
    name: "production-workspace",
    title: `${title} [production]`,
    icon: RocketIcon,
    projectId,
    dataset: "production",

    basePath: '/admin',

    plugins: [structureTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: "develop-workspace",
    title: `${title} [development]`,
    icon: RobotIcon,
    projectId,
    dataset: "develop",

    basePath: '/develop',

    plugins: [structureTool(), visionTool()],

    schema: {
      types: schemaTypes,
    },
  }
]);

export default config;