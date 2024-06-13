import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { useQuery } from '@tanstack/react-query'

export function useGetManagedRestaurant() {
  const { data, isLoading } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    refetchOnWindowFocus: false,
  })

  return {
    restaurant: data,
    isLoadingRestaurantData: isLoading,
  }
}
