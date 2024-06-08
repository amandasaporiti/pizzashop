import { Link, LinkProps, useLocation } from 'react-router-dom'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()
  return (
    <Link
      {...props}
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-zinc-400 font-medium text-sm data-[current=true]:text-white"
    />
  )
}
