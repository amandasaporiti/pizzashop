import { signIn } from '@/api/authenticate'
import { useMutation } from '@tanstack/react-query'

export function useAuth() {
  const { mutateAsync } = useMutation({
    mutationFn: signIn,
  })

  return {
    authenticate: mutateAsync,
  }
}
