import type { Config } from 'tailwindcss'
import baseConfig from 'pliny/config/tailwind.config' // ← import konfiguracji z Pliny

const config: Config = {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      colors: {
        ...baseConfig.theme?.extend?.colors,
        primary: '#206444',
      },
    },
  },
}

export default config
