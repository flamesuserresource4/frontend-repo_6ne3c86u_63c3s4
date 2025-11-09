export default function Footer() {
  return (
    <footer className="mt-16 bg-[#232F3E] text-gray-200">
      <a href="#" className="block w-full bg-[#37475A] text-center py-3 hover:brightness-110">Back to top</a>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-white font-semibold mb-3">Get to Know Us</h4>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">Careers</a></li>
            <li><a className="hover:underline" href="#">Blog</a></li>
            <li><a className="hover:underline" href="#">About Amazon</a></li>
            <li><a className="hover:underline" href="#">Investor Relations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Make Money with Us</h4>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">Sell products</a></li>
            <li><a className="hover:underline" href="#">Affiliate program</a></li>
            <li><a className="hover:underline" href="#">Advertise your products</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Amazon Payment Products</h4>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">Business Card</a></li>
            <li><a className="hover:underline" href="#">Shop with Points</a></li>
            <li><a className="hover:underline" href="#">Reload Balance</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Let Us Help You</h4>
          <ul className="space-y-2">
            <li><a className="hover:underline" href="#">Your Account</a></li>
            <li><a className="hover:underline" href="#">Shipping Rates</a></li>
            <li><a className="hover:underline" href="#">Returns & Replacements</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#3A4553]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-gray-400 flex flex-wrap items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Amazn Clone</div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Conditions of Use</a>
            <a href="#" className="hover:underline">Privacy Notice</a>
            <a href="#" className="hover:underline">Your Ads Privacy Choices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
