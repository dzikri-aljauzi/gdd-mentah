import Image from "next/image"

export default function GameplayPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Gameplay</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="relative w-full h-64">
            <Image
              src="/images/game/gameplay.jpg"
              alt="Doraemon Story of Seasons - Gameplay"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <p className="text-lg mb-6">
              Game ini menggabungkan elemen dari Story of Seasons (simulasi kehidupan pertanian) dengan dunia dan
              karakter dari Doraemon. Aktivitas harian seperti bercocok tanam, merawat ternak, menjelajah, dan
              bersosialisasi menjadi inti dari permainan.
            </p>
          </div>
        </div>

        {/* Fitur Utama */}
        <section className="mb-12">
          <h2 className="section-title">Fitur Utama</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/game/pertanian.jpeg"
                  alt="Bercocok Tanam"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Bercocok Tanam</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Menanam berbagai jenis tanaman seperti wortel, stroberi, kentang, dan lainnya.</li>
                  <li>Harus menyiram tanaman setiap hari dan memanen saat sudah matang.</li>
                  <li>Menggunakan pupuk untuk meningkatkan kualitas tanaman.</li>
                  <li>Tanaman musiman yang hanya bisa ditanam pada musim tertentu.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/game/peternakan.jpg"
                  alt="Peternakan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Peternakan</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Memelihara sapi, ayam, dan domba.</li>
                  <li>Memberi makan, membersihkan kandang, dan mengambil hasil seperti susu dan telur.</li>
                  <li>Meningkatkan kualitas ternak melalui perawatan yang baik.</li>
                  <li>Mengikuti kontes ternak untuk mendapatkan hadiah.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/game/mining.webp"
                  alt="Eksplorasi dan Penambangan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Eksplorasi dan Penambangan</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Menjelajah area sekitar seperti hutan, sungai, dan tambang.</li>
                  <li>Mengumpulkan material seperti kayu, batu, dan bijih untuk crafting.</li>
                  <li>Menemukan item langka dan harta karun tersembunyi.</li>
                  <li>Menambang di gua untuk mendapatkan mineral berharga.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/game/gadget.jpg"
                  alt="Alat Doraemon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Alat Doraemon</h3>
                <p className="mb-3">Beberapa alat ajaib yang bisa ditemukan dan digunakan:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Anywhere Door:</strong> Untuk berpindah lokasi dengan cepat.
                  </li>
                  <li>
                    <strong>Small Light:</strong> Mengecilkan objek agar bisa dibawa.
                  </li>
                  <li>
                    <strong>Weather Box:</strong> Mengatur cuaca.
                  </li>
                  <li>
                    <strong>Time Wrapping Cloth:</strong> Mempercepat pertumbuhan tanaman.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Festival dan Interaksi Sosial */}
        <section className="mb-12">
          <h2 className="section-title">Festival dan Interaksi Sosial</h2>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Festival</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Lomba memasak dengan bahan-bahan dari pertanian.</li>
                    <li>Festival musim panas dengan permainan dan hadiah.</li>
                    <li>Kontes ternak untuk menunjukkan kualitas hewan peliharaan.</li>
                    <li>Festival panen untuk merayakan hasil pertanian.</li>
                    <li>Festival bunga dengan dekorasi bunga di seluruh desa.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Interaksi Sosial</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Membangun hubungan dengan penduduk desa melalui percakapan.</li>
                    <li>Memberikan hadiah sesuai preferensi masing-masing karakter.</li>
                    <li>Menyelesaikan quest dan membantu penduduk desa.</li>
                    <li>Menghadiri event khusus dengan karakter tertentu.</li>
                    <li>Meningkatkan level pertemanan untuk membuka dialog dan event baru.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold mb-2">Catatan:</h4>
                <p>Tidak ada sistem pernikahan atau romansa dalam game ini (berbeda dari Story of Seasons lainnya).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unsur-Unsur Khusus */}
        <section>
          <h2 className="section-title">Unsur-Unsur Khusus</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Visual Unik</h3>
              <p className="text-center">
                Visual menyerupai buku cerita anak-anak, dengan grafis 2.5D dan gaya lukisan tangan.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Musik Menenangkan</h3>
              <p className="text-center">
                Musik dan atmosfer game sangat tenang, cocok untuk pemain yang ingin menikmati gameplay santai.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Siklus Waktu</h3>
              <p className="text-center">
                Game memiliki siklus hari/malam dan empat musim yang mempengaruhi gameplay dan aktivitas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
