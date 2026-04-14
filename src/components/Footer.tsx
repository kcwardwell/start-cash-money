export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer >
      <div >
        <p >
          &copy; {year} Your name here. All rights reserved.
        </p>
        <p >Built with TanStack Start</p>
      </div>
      
    </footer>
  )
}
