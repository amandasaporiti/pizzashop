import { updateProfile } from '@/api/update-profile'
import { GetManagedRestaurantResponse } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useUpdateRestaurantProfile() {
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationFn: updateProfile,
    onSuccess(_, { name, description }) {
      const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
        'managed-restaurant',
      ])

      if (cached) {
        queryClient.setQueryData(['managed-restaurant'], {
          ...cached,
          name,
          description,
        })
      }
    },
  })

  return {
    updateRestaurantProfile: mutateAsync,
  }
}
