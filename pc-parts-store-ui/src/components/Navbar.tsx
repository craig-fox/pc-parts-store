function Navbar() {
    return (
      <nav className="bg-slate-800 text-white shadow-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
  
          {/* Logo */}
          <div className="text-2xl font-bold">
            🖥️ PC Parts Store
          </div>
  
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-sky-400 transition-colors">
              Home
            </a>
  
            <a href="#" className="hover:text-sky-400 transition-colors">
              Products
            </a>
  
            <a href="#" className="hover:text-sky-400 transition-colors">
              Cart
            </a>
  
            <a href="#" className="hover:text-sky-400 transition-colors">
              Orders
            </a>
  
            <a
              href="#"
              className="rounded-md bg-sky-500 px-4 py-2 hover:bg-sky-600 transition-colors"
            >
              Login
            </a>
          </div>
  
        </div>
      </nav>
    );
  }
  
  export default Navbar;