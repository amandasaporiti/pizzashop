import { registerRestaurant } from '@/api/register-restaurant'
import { useMutation } from '@tanstack/react-query'

export function useRegisterRestaurant() {
  const { mutateAsync } = useMutation({
    mutationFn: registerRestaurant,
  })

  return {
    signUp: mutateAsync,
  }
}
