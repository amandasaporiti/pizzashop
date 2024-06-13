import { getProfile } from '@/api/get-profile'
import { useQuery } from '@tanstack/react-query'

export function useGetProfile() {
  const { data, isLoading } = useQuery({
    queryKey: ['user-profile'],
    queryFn: getProfile,
  })
  return {
    user: data,
    isLoadingUser: isLoading,
  }
}
