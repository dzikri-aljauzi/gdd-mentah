import Image from "next/image";

// Data lokasi
const locations = [
  {
    id: "farm",
    name: "Pertanian Nobita",
    description:
      "Lokasi utama yang dikelola oleh Nobita. Terdiri dari lahan pertanian, kandang ternak, dan rumah kecil.",
    features: [
      "Lahan pertanian yang bisa diperluas",
      "Kandang untuk ayam, sapi, dan domba",
      "Kolam ikan",
      "Rumah yang bisa ditingkatkan",
    ],
    imagePath: "/images/locations/noby-farm.jpg",
  },
  {
    id: "natura-village",
    name: "Desa Natura",
    description: "Pusat aktivitas penduduk dengan berbagai toko, rumah penduduk, dan fasilitas umum.",
    features: ["Balai Desa", "Toko Umum", "Restoran", "Klinik", "Pandai Besi"],
    imagePath: "/images/locations/natura-vilage.jpg",
  },
  {
    id: "forest",
    name: "Hutan Natura",
    description: "Area hutan yang kaya akan sumber daya alam seperti kayu, tanaman liar, dan hewan.",
    features: ["Berbagai jenis pohon untuk ditebang", "Tanaman liar dan jamur", "Serangga langka", "Gua tersembunyi"],
    imagePath: "/images/locations/forest.webp",
  },
  {
    id: "mountain",
    name: "Gunung Natura",
    description: "Daerah pegunungan dengan tambang yang kaya akan mineral dan batu berharga.",
    features: ["Tambang dengan beberapa level", "Mineral dan batu berharga", "Pemandangan indah", "Air terjun"],
    imagePath: "/images/locations/mountain.jpg",
  },
  {
    id: "beach",
    name: "Pantai Zazan",
    description: "Area pantai yang sempurna untuk memancing dan mengumpulkan kerang.",
    features: ["Spot memancing", "Kerang dan harta karun", "Festival musim panas", "Toko pancing"],
    imagePath: "/images/locations/beach.jpg",
  },
  {
    id: "big-tree",
    name: "Pohon Besar",
    description: "Pohon raksasa yang menjadi landmark Natura dan tempat tinggal Vera.",
    features: [
      "Akar pohon yang bisa dimasuki",
      "Tempat tinggal Vera",
      "Energi misterius",
      "Pemandangan seluruh Natura",
    ],
    imagePath: "/images/locations/big-tree.jpg",
  },
];

export default function LokasiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Lokasi</h1>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="relative w-full h-64">
            <Image
              src="/images/locations/natura.webp"
              alt="Peta Natura"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Dunia Natura</h2>
            <p className="text-lg mb-4">
              Natura adalah dunia yang indah dan damai, tempat Nobita dan teman-temannya terdampar. Dunia ini memiliki
              berbagai lokasi yang bisa dijelajahi, masing-masing dengan keunikan dan sumber daya tersendiri.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={location.imagePath}
                  alt={location.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-gray-600 mb-4">{location.description}</p>

                <h4 className="font-semibold mb-2">Fitur:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {location.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Perubahan Musim</h2>
          <p className="mb-4">
            Natura memiliki empat musim yang mempengaruhi lingkungan dan aktivitas yang bisa dilakukan:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-pink-500 font-bold">🌸</span>
              </div>
              <h3 className="text-center font-semibold mb-2">Musim Semi</h3>
              <ul className="text-sm space-y-1">
                <li>Tanaman: Stroberi, Kubis, Kentang</li>
                <li>Event: Festival Bunga</li>
                <li>Aktivitas: Menanam tanaman baru</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-yellow-500 font-bold">☀️</span>
              </div>
              <h3 className="text-center font-semibold mb-2">Musim Panas</h3>
              <ul className="text-sm space-y-1">
                <li>Tanaman: Jagung, Nanas, Semangka</li>
                <li>Event: Festival Pantai</li>
                <li>Aktivitas: Memancing ikan langka</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-orange-500 font-bold">🍂</span>
              </div>
              <h3 className="text-center font-semibold mb-2">Musim Gugur</h3>
              <ul className="text-sm space-y-1">
                <li>Tanaman: Labu, Terong, Wortel</li>
                <li>Event: Festival Panen</li>
                <li>Aktivitas: Mengumpulkan jamur</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                <span className="text-blue-500 font-bold">❄️</span>
              </div>
              <h3 className="text-center font-semibold mb-2">Musim Dingin</h3>
              <ul className="text-sm space-y-1">
                <li>Tanaman: -</li>
                <li>Event: Festival Salju</li>
                <li>Aktivitas: Menambang, crafting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}