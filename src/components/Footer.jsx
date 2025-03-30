function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <p className="mb-2">© {currentYear} Dhanvin Vadlamudi. All rights reserved.</p>
        <p className="text-gray-400 text-sm">.</p>
      </div>
    </footer>
  )
}

export default Footer

