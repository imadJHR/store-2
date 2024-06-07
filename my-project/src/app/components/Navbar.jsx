import Link from "next/link"


const Navbar = () => {
  return (
    <header className="bg-white shadow-">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <a className="block text-orange-600 text-3xl font-bold" href="#">
            <span className="sr-only">Home</span>
            JHR STORE
          </a>
        </div>
  
        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-10 text-sm font-bold uppercase text-black">
              <li>
                <Link className=" transition hover:text-gray-500/75" href="/"> Home </Link>
              </li>
  
              <li>
                <Link className=" transition hover:text-gray-500/75" href="/about"> About </Link>
              </li>
  
              <li>
                <Link className=" transition hover:text-gray-500/75" href="/product"> Products </Link>
              </li>
  
              <li>
                <Link className=" transition hover:text-gray-500/75" href="/contact"> Contact </Link>
              </li>
  
              
            </ul>
          </nav>
        </div>
  
        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="#"
            >
              Login
            </a>
  
            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-orange-600"
                href="#"
              >
                Register
              </a>
              
            </div>
            <a
              className="rounded-md bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              href="#"
            >
              Cart (0)
            </a>
          </div>
  
          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar