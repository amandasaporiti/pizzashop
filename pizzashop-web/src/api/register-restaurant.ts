import { api } from '@/lib/axios'

interface RegisterRestaurantParams {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

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
