import ky from 'ky'

const kyInstance = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL,
  timeout: 10000
})

export default kyInstance
