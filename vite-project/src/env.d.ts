/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LWJ: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare const __APP_VERSION__: string