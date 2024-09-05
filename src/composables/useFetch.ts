import { useQuery, type UseQueryReturnType } from '@tanstack/vue-query'

const fetcher = async <T>(url: string, options: RequestInit): Promise<T> => {
  const response = await fetch(url, options)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

export function useFetch<TData, TError>(
  key: any[],
  url: string,
  options: RequestInit
): UseQueryReturnType<TData, TError> {
  return useQuery<TData, TError>({
    queryKey: key,
    queryFn: () => {
      return fetcher(url, options)
    }
  })
}
