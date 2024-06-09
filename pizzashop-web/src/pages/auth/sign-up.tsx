import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Pizza } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <div className="flex flex-col px-8 py-6 max-w-7xl m-auto min-h-screen">
      <header className="flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <Pizza className="size-9 text-rose-500" />
          <h2 className="text-xl font-bold">pizza.shop</h2>
        </div>

        <Link
          to="/entrar"
          className="bg-rose-700 text-foreground text-sm font-semibold rounded-md px-4 py-2 hover:bg-rose-600"
        >
          Acessar painel
        </Link>
      </header>
      <div className="flex flex-col w-[400px] m-auto">
        <h1 className="font-bold text-4xl text-center">Criar conta</h1>
        <p className="text-center text-zinc-400 mt-2">
          Seja um parceiro e comece sua vendas hoje mesmo!
        </p>

        <form className="flex flex-col w-full space-y-4 mt-12 mb-4">
          <div className="space-y-1">
            <Label>Nome do Estabelecimento</Label>
            <Input type="text" />
          </div>
          <div className="space-y-1">
            <Label>Nome do Administrador</Label>
            <Input type="text" />
          </div>
          <div className="space-y-1">
            <Label>E-mail</Label>
            <Input type="email" />
          </div>
          <div className="space-y-1">
            <Label>Celular(com DDD)</Label>
            <Input type="tel" placeholder="(99) 99999-9999" />
          </div>
          <Button type="submit">Finalizar cadastro</Button>
        </form>
        <footer className="mt-auto w-full flex px-3">
          <p className="text-zinc-400 text-sm text-center leading-relaxed">
            Ao continuar você concorda com os nossos{' '}
            <span className="underline underline-offset-4">
              termos de serviço
            </span>{' '}
            e{' '}
            <span className="underline underline-offset-4">
              políticas de privacidade.
            </span>
          </p>
        </footer>
      </div>
    </div>
  )
}
