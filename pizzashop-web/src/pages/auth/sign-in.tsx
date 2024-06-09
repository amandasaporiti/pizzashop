import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Pizza } from 'lucide-react'
import { Link } from 'react-router-dom'

export function SignIn() {
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

      <div className="flex flex-col w-[500px] m-auto">
        <h1 className="font-bold text-4xl text-center">Acessar Dashboard</h1>
        <p className="text-center text-zinc-400 mt-2">
          Acompanhe suas vendas pelo painel do parceiro!
        </p>

        <div className="flex flex-col w-full space-y-1.5 mt-12 mb-4">
          <Label>E-mail</Label>
          <Input type="text" />
        </div>
        <Button type="submit">Acessar Painel</Button>
      </div>
    </div>
  )
}
