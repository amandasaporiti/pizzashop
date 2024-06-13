import { api } from '@/lib/axios'
import { GetManagedRestaurantResponse } from '@/types'

export async function getManagedRestaurant() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await api.get<GetManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
