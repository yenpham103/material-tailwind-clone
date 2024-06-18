function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit text-center font-normal !text-gray-700">
            © 2024 Made with Material Tailwind by Creative Tim.
          </p>
          <ul className="flex gap-8 items-center">
            <li>
              <a
                href="#"
                className="block antialiased font-sans text-sm leading-normal font-normal text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block antialiased font-sans text-sm leading-normal font-normal text-gray-700 hover:text-gray-900 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block antialiased font-sans text-sm leading-normal font-normal text-gray-700 hover:text-gray-900 transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block antialiased font-sans text-sm leading-normal font-normal text-gray-700 hover:text-gray-900 transition-colors"
              >
                Service
              </a>
            </li>
            <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
              subscribe
            </button>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
