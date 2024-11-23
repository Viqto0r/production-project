export type BuildMode = 'development' | 'production'
export type Project = 'storybook' | 'jest' | 'frontend'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
  locales: string
  buildLocales: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  apiUrl: string
  project: Project
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string
}
