// src > components > Footer > Footer.jsx
const Footer = () => {
  return (
    <footer className="mt-10 text-sm text-gray-200
      bg-gradient-to-r from-indigo-700 via-purple-700 to-violet-800">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {/* ABOUT */}
        <div>
          <h4 className="font-semibold mb-3 text-white">ABOUT</h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Contact Us
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Careers
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Stories
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Press
            </li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h4 className="font-semibold mb-3 text-white">HELP</h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Payments
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Shipping
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Cancellation & Returns
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              FAQ
            </li>
          </ul>
        </div>

        {/* POLICY */}
        <div>
          <h4 className="font-semibold mb-3 text-white">POLICY</h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Return Policy
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Terms Of Use
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Security
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Privacy
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Sitemap
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-3 text-white">SOCIAL</h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Facebook
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Twitter
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Instagram
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              YouTube
            </li>
          </ul>
        </div>

        {/* SELLER */}
        <div>
          <h4 className="font-semibold mb-3 text-white">SELL</h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Become a Seller
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Seller Dashboard
            </li>
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Seller Support
            </li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h4 className="font-semibold mb-3 text-white">CONTACT</h4>
          <p>
            Flipkart Internet Private Limited,<br />
            Bengaluru, Karnataka,<br />
            India - 560103
          </p>
          <p className="mt-2">Phone: +91 98765 43210</p>
          <p>Email: support@flipkart.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-gray-300">
        © 2007–2026 Flipkart Clone | Built for learning purposes
      </div>
    </footer>
  );
};

export default Footer;
