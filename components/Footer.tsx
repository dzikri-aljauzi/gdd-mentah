export default function Footer() {
  return (
    <footer className="bg-white shadow-inner py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-green-500">Doraemon Story of Seasons</h3>
            <p className="text-sm text-gray-600">Game Design Document - Dibuat dengan Next.js dan Sanity</p>
          </div>
          <div className="text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Brownies Inc., Marvelous Inc.</p>
            <p>Publisher: Bandai Namco Entertainment</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
