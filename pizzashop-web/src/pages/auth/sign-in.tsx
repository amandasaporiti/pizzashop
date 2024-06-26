import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/useAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Pizza } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email().min(1, 'E-mail obrigatório'),
})

type SignInFormType = z.infer<typeof signInSchema>

export function SignIn() {
  const { authenticate } = useAuth()

  const [searchParams] = useSearchParams()
  const urlEmailParams = searchParams.get('email') ?? ''

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: urlEmailParams,
    },
  })

  async function signIn({ email }: SignInFormType) {
    try {
      await authenticate({ email })

      toast.success(
        'E-mail de verificação enviado para sua caixa de entrada!',
        {
          action: {
            label: 'Reenviar',
            onClick: () => {
              authenticate({ email })
            },
          },
        },
      )
    } catch (error) {
      toast.error('E-mail inválido, ou incorreto')
    }
  }

  return (
    <div className="flex flex-col px-8 py-6 max-w-7xl m-auto min-h-screen">
      <header className="flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <Pizza className="size-9 text-rose-500" />
          <h2 className="text-xl font-bold">pizza.shop</h2>
        </div>

        <Link
          to="/criar-conta"
          className="bg-rose-700 text-foreground text-sm font-semibold rounded-md px-4 py-2 hover:bg-rose-600"
        >
          Novo estabelecimento
        </Link>
      </header>

      <form
        onSubmit={handleSubmit(signIn)}
        className="flex flex-col w-[500px] m-auto"
      >
        <h1 className="font-bold text-4xl text-center">Acessar Dashboard</h1>
        <p className="text-center text-zinc-400 mt-2">
          Acompanhe suas vendas pelo painel do parceiro!
        </p>

        <div className="flex flex-col w-full space-y-1.5 mt-12 mb-4">
          <Label htmlFor="email">E-mail</Label>
          <Input type="text" id="email" {...register('email')} />
        </div>
        <Button type="submit" disabled={isSubmitting}>
          Acessar Painel
        </Button>
      </form>
    </div>
  )
}
