import { api } from '@/lib/axios'
import { RegisterRestaurantParams } from '@/types'

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantParams): Promise<void> {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
