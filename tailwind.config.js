/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import animate from 'tailwindcss-animate'
import plugin from 'tailwindcss/plugin'
import tailwindScrollbar from 'tailwind-scrollbar'
import { colors } from './config/tailwind/colors.ts'
import { keyframes, animations } from './config/tailwind/animation.ts'
import { textStylesComponents } from './config/tailwind/custom-components.ts'
import { pastelLight, pastelDark } from './config/tailwind/daisy-plugins.ts'
import {
  fontSize,
  fontWeight,
  fontFamily,
  spacing,
  borderRadius,
  size
} from './config/tailwind/custom-theme.ts'

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
      colors: { ...colors },
      keyframes: { ...keyframes },
      animations: { ...animations }
    }
  },
  plugins: [
    animate,
    daisyui,
    tailwindScrollbar,
    plugin(function ({ addComponents }) {
      addComponents({ ...textStylesComponents })
    })
  ]
}
