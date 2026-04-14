import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header >
      <nav >
        <h2 >
          <Link
            to="/"
          >
            <span  />
            TanStack Start
          </Link>
        </h2>

        <div >
        
            
          
           

          <ThemeToggle />
       

        </div>
      </nav>
    </header>
  )
}
