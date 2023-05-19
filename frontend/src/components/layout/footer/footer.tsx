import { Icon } from '@/components/ui/icon'
import { Link } from 'react-router-dom'

const socials = [
  { href: 'https://twitter.com/gear_techs', icon: 'twitter' },
  { href: 'https://github.com/gear-tech', icon: 'github' },
  { href: 'https://discord.com/invite/7BQznC9uD9', icon: 'discord' },
  { href: 'https://medium.com/@gear_techs', icon: 'medium' },
]

export const Footer = () => (
  <footer className="relative z-1 container flex items-center gap-4 justify-between py-7.5">
    <ul className="flex gap-5">
      {socials.map(({ href, icon }) => (
        <li key={icon}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-[#BCBCBC] hover:text-white transition-colors"
          >
            <Icon name={icon} className="w-6 h-6" />
          </a>
        </li>
      ))}
    </ul>
    <ul>
      <li>
        <Link to="/">Home</Link>
        <Link to="/levels">Levels</Link>
      </li>
    </ul>
    <p className="text-white text-opacity-60 text-xs">
      &copy; {new Date().getFullYear()} Gear Technologies, Inc. All Rights
      Reserved.
    </p>
  </footer>
)