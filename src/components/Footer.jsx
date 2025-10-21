export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold">Infinity Hub</h3>
          <p className="mt-2 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry...
          </p>
        </div>
        <div>
          <h4 className="font-semibold">About</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Menu</li>
            <li>Features</li>
            <li>News & Blogs</li>
            <li>Help & Supports</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>How we work</li>
            <li>Terms of service</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact Us</h4>
          <ul className="mt-3 space-y-2 text-gray-600">
            <li>Akshya Nagar 1st Block 1st Cross, Bangalore-560016</li>
            <li>+1 202-918-2132</li>
            <li>beanscene@mail.com</li>
            <li>www.beanscene.com</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-8 text-xs text-gray-500 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Shoes Landing.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/erme07/shoesLandingPage"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
          <a
            href="https://shoes-landing.pages.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        </div>
      </div>
    </footer>
  );
}
