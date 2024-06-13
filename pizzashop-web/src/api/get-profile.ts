import { api } from '@/lib/axios'
import { GetManagerProfileResponse } from '@/types'

export async function getProfile() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await api.get<GetManagerProfileResponse>('/me')

  return response.data
}
