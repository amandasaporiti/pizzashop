import { api } from '@/lib/axios'
import { UpdateProfileParams } from '@/types'

export async function updateProfile({
  name,
  description,
}: UpdateProfileParams) {
  await api.put('/profile', {
    name,
    description,
  })
}
