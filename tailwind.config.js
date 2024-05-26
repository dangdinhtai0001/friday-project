/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import plugin from 'tailwindcss/plugin'
import { textStylesComponents } from './tailwind.config/custom-components.ts'
import { pastelLight, pastelDark } from './tailwind.config/daisy-plugins.ts'
import {
  fontSize,
  fontWeight,
  fontFamily,
  spacing,
  borderRadius,
  size
} from './tailwind.config/custom-theme.ts'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  // https://daisyui.com/blog/most-common-mistake-when-using-tailwind-css/
  safelist: [
    {
      pattern: /(bg|border|text)-(black|white|blue)-(100|80|40|20|10|5)/
    },
    {
      pattern: /(bg|border|text)-primary-(brand|blue|purple|purple-50|light|background)/
    },
    {
      pattern: /(bg|border|text)-secondary-(indigo|purple|cyan|blue|green|mint|yellow|orange|red)/
    },
    {
      pattern: /f-(text)-.*/
    }
  ],
  daisyui: {
    themes: [{ ...pastelLight }, { ...pastelDark }]
  },
  theme: {
    extend: {
      spacing: { ...spacing },
      borderRadius: { ...borderRadius },
      size: { ...size },
      fontSize: { ...fontSize },
      fontWeight: { ...fontWeight },
      fontFamily: { ...fontFamily },
      colors: {
        // black
        'black-100': 'var(--black-100)',
        'black-80': 'var(--black-80)',
        'black-40': 'var(--black-40)',
        'black-20': 'var(--black-20)',
        'black-10': 'var(--black-10)',
        'black-5': 'var(--black-5)',
        // white
        'white-100': 'var(--white-100)',
        'white-80': 'var(--white-80)',
        'white-40': 'var(--white-40)',
        'white-20': 'var(--white-20)',
        'white-10': 'var(--white-10)',
        'white-5': 'var(--white-5)',
        // primary
        'primary-brand': 'var(--primary-brand)',
        'primary-blue': 'var(--primary-blue)',
        'primary-purple': 'var(--primary-purple)',
        'primary-purple-50': 'var(--primary-purple-50)',
        'primary-light': 'var(--primary-light)',
        'primary-background': 'var(--primary-background)',
        // secondary
        'secondary-indigo': 'var(--secondary-indigo)',
        'secondary-purple': 'var(--secondary-purple)',
        'secondary-cyan': 'var(--secondary-cyan)',
        'secondary-blue': 'var(--secondary-blue)',
        'secondary-green': 'var(--secondary-green)',
        'secondary-mint': 'var(--secondary-mint)',
        'secondary-yellow': 'var(--secondary-yellow)',
        'secondary-orange': 'var(--secondary-orange)',
        'secondary-red': 'var(--secondary-red)'
      }
    }
  },
  plugins: [
    daisyui,
    plugin(function ({ addComponents }) {
      addComponents({ ...textStylesComponents })
    })
  ]
}
