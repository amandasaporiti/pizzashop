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

export function UpdateProfileStoreModal() {
  return (
    <DialogContent>
      <div className="space-y-1.5">
        <DialogTitle>Editar Perfil da Loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento
        </DialogDescription>
      </div>

      <div className="mt-2 space-y-2">
        <div className="space-y-1.5">
          <Label>Nome</Label>
          <Input />
        </div>
        <div className="space-y-1.5">
          <Label>Descrição</Label>
          <Textarea />
        </div>
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="ghost">
            Cancelar
          </Button>
        </DialogClose>
        <Button type="submit">Salvar</Button>
      </DialogFooter>
    </DialogContent>
  )
}
