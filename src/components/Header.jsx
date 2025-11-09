import { Menu, Search, ShoppingCart, MapPin, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#131921] text-white">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="bg-[#FF9900] text-[#131921] font-black px-2 py-1 rounded">a</div>
            <span className="hidden sm:block font-semibold tracking-tight">amazn</span>
          </a>

          {/* Deliver to */}
          <button className="hidden md:flex items-center gap-1 text-sm text-gray-200 hover:text-white">
            <MapPin size={18} />
            <span className="leading-none">
              <span className="block text-xs text-gray-400">Deliver to</span>
              <span className="block -mt-0.5">Your Location</span>
            </span>
          </button>

          {/* Search */}
          <div className="flex-1">
            <div className="flex rounded-md overflow-hidden">
              <select className="hidden sm:block bg-gray-100 text-gray-700 text-sm px-2 border-r border-gray-200 focus:outline-none">
                <option>All</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Fashion</option>
                <option>Home</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon"
                className="w-full px-3 py-2 text-gray-900 focus:outline-none"
              />
              <button className="bg-[#FF9900] hover:bg-[#f59f0b] px-3 flex items-center justify-center">
                <Search className="text-black" size={20} />
              </button>
            </div>
          </div>

          {/* Account */}
          <button className="hidden sm:flex items-center gap-2 text-sm">
            <User size={18} />
            <span>
              <span className="block text-xs text-gray-300">Hello, sign in</span>
              <span className="block -mt-0.5 font-medium">Account & Lists</span>
            </span>
          </button>

          {/* Returns */}
          <button className="hidden lg:flex flex-col text-sm">
            <span className="text-xs text-gray-300">Returns</span>
            <span className="-mt-0.5 font-medium">& Orders</span>
          </button>

          {/* Cart */}
          <button className="relative flex items-center gap-2">
            <ShoppingCart size={24} />
            <span className="hidden sm:block text-sm font-medium">Cart</span>
            <span className="absolute -top-2 -right-2 bg-[#FF9900] text-black text-xs font-bold rounded-full w-5 h-5 grid place-items-center">2</span>
          </button>
        </div>
      </div>

      {/* Subnav */}
      <div className="bg-[#232F3E] text-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-6 py-2 text-sm overflow-x-auto whitespace-nowrap">
            <a href="#" className="flex items-center gap-1 hover:text-white">
              <Menu size={18} />
              All
            </a>
            <a href="#" className="hover:text-white">Today's Deals</a>
            <a href="#" className="hover:text-white">Customer Service</a>
            <a href="#" className="hover:text-white">Registry</a>
            <a href="#" className="hover:text-white">Gift Cards</a>
            <a href="#" className="hover:text-white">Sell</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
