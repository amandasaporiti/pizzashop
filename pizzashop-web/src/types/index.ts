export interface AuthParams {
  email: string
}

export interface RegisterRestaurantParams {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export interface GetManagedRestaurantResponse {
  name: string
  id: string
  description: string | null
  createdAt: Date | null
  updatedAt: Date | null
  managerId: string | null
}

export type GetManagerProfileResponse = {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export interface UpdateProfileParams {
  name: string
  description: string | null
}
