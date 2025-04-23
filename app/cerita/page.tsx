import Image from "next/image"

export default function CeritaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Plot dan Cerita</h1>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-64">
          <Image
            src="/images/game/plot_cerita.webp"
            alt="Doraemon Story of Seasons - Cerita"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-green-500">Kisah Petualangan di Natura</h2>

          <div className="prose max-w-none">
            <p className="text-lg">
              Kisah dimulai ketika Nobita menemukan biji misterius dan menanamnya, yang kemudian menciptakan pusaran
              waktu yang membawa dia, Doraemon, dan teman-temannya ke dunia baru bernama Natura.
            </p>

            <p>
              Dalam dunia ini, mereka bertemu penduduk lokal yang menyambut mereka. Sayangnya, alat-alat ajaib Doraemon
              tersebar dan hilang. Mereka pun memutuskan untuk tinggal sementara dan membantu penduduk dengan mengelola
              pertanian serta membangun kehidupan di sana sambil mencari cara kembali ke dunia asal mereka.
            </p>

            <div className="my-8 bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Tema Utama</h3>
              <p>
                Cerita berfokus pada pertumbuhan karakter, hubungan sosial, dan kerja sama tim antara Nobita, Doraemon,
                dan penduduk desa. Sepanjang perjalanan, para karakter belajar banyak tentang kerja keras, persahabatan,
                dan tanggung jawab.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Alur Cerita</h3>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-500 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Penemuan Biji Misterius</h4>
                  <p>Nobita menemukan biji aneh dan menanamnya di halaman belakang rumahnya.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-500 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Transportasi ke Dunia Baru</h4>
                  <p>Biji tersebut menciptakan pusaran waktu yang menghisap Nobita, Doraemon, dan teman-temannya.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-500 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Kedatangan di Natura</h4>
                  <p>Mereka tiba di dunia Natura dan bertemu dengan penduduk lokal yang ramah.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-500 font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Kehilangan Alat Ajaib</h4>
                  <p>Alat-alat ajaib Doraemon tersebar dan hilang di berbagai lokasi di Natura.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-500 font-bold">5</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Memulai Kehidupan Baru</h4>
                  <p>Mereka memutuskan untuk tinggal sementara dan membantu penduduk dengan mengelola pertanian.</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-500 font-bold">6</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Pencarian Jalan Pulang</h4>
                  <p>
                    Sambil beradaptasi dengan kehidupan baru, mereka mencari cara untuk kembali ke dunia asal mereka.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold mb-3 text-yellow-600">Perkembangan Karakter</h3>
              <p>Sepanjang cerita, karakter-karakter utama mengalami perkembangan:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  <strong>Nobita</strong> belajar tentang tanggung jawab dan kerja keras melalui pertanian.
                </li>
                <li>
                  <strong>Doraemon</strong> menemukan cara untuk membantu tanpa bergantung pada alat-alat ajaibnya.
                </li>
                <li>
                  <strong>Shizuka</strong> mengembangkan keterampilan merawat dan mengobati.
                </li>
                <li>
                  <strong>Gian</strong> belajar menggunakan kekuatannya untuk membantu, bukan menindas.
                </li>
                <li>
                  <strong>Suneo</strong> belajar nilai persahabatan di atas kekayaan material.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
