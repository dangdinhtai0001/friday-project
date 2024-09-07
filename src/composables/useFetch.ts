import { useQuery, type UseQueryReturnType } from '@tanstack/vue-query'
import { ref, type Ref } from 'vue'

// Hàm fetcher trả về cả dữ liệu và headers
const fetcher = async <T>(
  url: string,
  options: RequestInit
): Promise<{ data: T; headers: Headers }> => {
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const headers = response.headers
  const data = await response.json()

  for (const [key, value] of headers.entries()) {
    console.log(`${key}: ${value}`)
  }

  return { data, headers }
}

// Hàm useFetch
export function useFetch<TData, TError>(
  key: any[],
  url: string,
  options: RequestInit
): UseQueryReturnType<TData, TError> & { headers: Ref<Headers | null> } {
  const headers = ref<Headers | null>(null)

  // Thực hiện query và lưu headers từ response
  const query = useQuery<TData, TError>({
    queryKey: key,
    queryFn: async () => {
      const { data, headers: responseHeaders } = await fetcher<TData>(url, options)
      headers.value = responseHeaders
      return data
    }
  })

  // Trả về query cùng với headers
  return { ...query, headers }
}
