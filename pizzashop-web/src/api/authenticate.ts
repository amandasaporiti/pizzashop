import { api } from '@/lib/axios'
import { AuthParams } from '@/types'

export async function signIn({ email }: AuthParams): Promise<void> {
  await api.post('/authenticate', {
    email,
  })
}
