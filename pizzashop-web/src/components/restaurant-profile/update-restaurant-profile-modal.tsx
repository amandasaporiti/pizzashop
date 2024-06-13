import { useGetManagedRestaurant } from '@/hooks/useGetManagedRestaurant'
import { useUpdateRestaurantProfile } from '@/hooks/useUpdateRestaurantProfile'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

const UpdateRestaurantProfileSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  description: z.string().min(1, 'Campo obrigatório'),
})

type UpdateRestaurantFormType = z.infer<typeof UpdateRestaurantProfileSchema>

interface UpdateRestaurantProfileModalProps {
  open: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
}

export function UpdateRestaurantProfileModal({
  onOpenChange,
}: UpdateRestaurantProfileModalProps) {
  const { restaurant } = useGetManagedRestaurant()
  const { updateRestaurantProfile } = useUpdateRestaurantProfile()
  const { register, handleSubmit } = useForm<UpdateRestaurantFormType>({
    resolver: zodResolver(UpdateRestaurantProfileSchema),
    values: {
      name: restaurant?.name ?? '',
      description: restaurant?.description ?? '',
    },
  })

  async function handleUpdateRestaurantProfile({
    name,
    description,
  }: UpdateRestaurantFormType) {
    try {
      await updateRestaurantProfile({
        name,
        description,
      })
      onOpenChange(false)
    } catch (error) {
      toast.error('Não foi possível atualizar os dados')
    }
  }
  return (
    <DialogContent>
      <div className="space-y-1.5">
        <DialogTitle>Editar Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento
        </DialogDescription>
      </div>

      <form
        onSubmit={handleSubmit(handleUpdateRestaurantProfile)}
        className="mt-2 space-y-2"
      >
        <div className="space-y-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" {...register('name')} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="description">Descrição</Label>
          <Textarea id="description" {...register('description')} />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
