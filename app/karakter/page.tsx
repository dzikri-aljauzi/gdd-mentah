"use client";

import Image from "next/image";
import { useState } from "react";

// Data karakter utama
const mainCharacters = [
  {
    id: "nobita",
    name: "Noby",
    description:
      "Anak laki-laki yang canggung dan malas, namun berhati baik. Dalam game ini, Noby bertugas mengelola pertanian yang rusak.",
    location: "Rumah pertanian di Natura",
    favoriteItem: "Dorayaki",
    likedItems: ["Sunflower", "Watermelon", "Udon", "Napa Cabbage"],
    imagePath: "/images/characters/noby.jpg",
  },
  {
    id: "doraemon",
    name: "Doraemon",
    description: "Robot kucing dari abad ke-22 yang membantu Noby dengan alat-alat ajaibnya.",
    location: "Rumah Wali Kota, membantu administrasi desa",
    favoriteItem: "Dorayaki",
    likedItems: ["Sunflower", "Watermelon", "Udon", "Napa Cabbage"],
    imagePath: "/images/characters/doraemon.jpg",
  },
  {
    id: "shizuka",
    name: "Sue",
    description: "Teman sekelas Noby yang cerdas dan baik hati. Ia membantu di klinik desa.",
    location: "Klinik di Natura",
    favoriteItem: "Baked Sweet Potato",
    likedItems: ["Cheesecake", "P. Daisy", "Sweet Potato", "Yam"],
    imagePath: "/images/characters/sue.jpg",
  },
  {
    id: "gian",
    name: "Big G",
    description:
      "Teman sekelas Noby yang kuat dan sering galak, namun memiliki sisi lembut. Ia menjadi magang di toko tukang kayu.",
    location: "Toko tukang kayu di hutan",
    favoriteItem: "Curry",
    likedItems: ["Stew", "Normal Wood", "Migratory Locust", "Green Pepper"],
    imagePath: "/images/characters/gian.jpg",
  },
  {
    id: "suneo",
    name: "Sneech",
    description: "Teman sekelas Noby yang sombong namun cerdas. Ia membantu di restoran desa.",
    location: "Restoran di Natura",
    favoriteItem: "Marlin Stew",
    likedItems: ["Truffled Egg", "Melon", "Truffle", "Diamond"],
    imagePath: "/images/characters/sneech.jpg",
  },
];

// Data kategori NPC
const npcCategories = [
  { id: "officials", name: "Pejabat Desa", color: "blue" },
  { id: "farmers", name: "Peternak", color: "green" },
  { id: "merchants", name: "Pedagang", color: "yellow" },
  { id: "services", name: "Penyedia Jasa", color: "purple" },
  { id: "blacksmiths", name: "Pandai Besi", color: "gray" },
  { id: "carpenters", name: "Tukang Kayu", color: "orange" },
];

// Data NPC
const npcs = [
  {
    id: "harmo",
    name: "Harmon",
    description: "Wali kota Natura yang bijaksana dan ramah.",
    location: "Rumah Wali Kota di Natura",
    category: "officials",
    favoriteItem: "Sashimi Boat",
    likedItems: ["Daikon", "Matsutake", "Truffled Egg", "Ruby"],
    imagePath: "/images/characters/harmo.jpg",
  },
  {
    id: "ravi",
    name: "Ravi",
    description: "Bibi dari Harmon yang bijak dan penuh kasih sayang.",
    location: "Rumah Wali Kota di Natura",
    category: "officials",
    favoriteItem: "Namasu",
    likedItems: ["Fertilizer", "Burdock", "Autumn Salad", "Pink"],
    imagePath: "/images/characters/ravi.jpg",
  },
  {
    id: "vera",
    name: "Vera",
    description:
      "Dikenal sebagai dewi oleh penduduk desa, sebenarnya adalah ilmuwan dari masa depan yang terdampar di Natura.",
    location: "Akar Pohon Besar di Natura",
    category: "officials",
    favoriteItem: "Compote",
    likedItems: ["Cabbage", "Yogurt", "Red Rose", "Strange Food"],
    imagePath: "/images/characters/vera.jpg",
  },
  {
    id: "cooper",
    name: "Cooper",
    description: "Pemilik peternakan ayam yang rajin dan berdedikasi.",
    location: "Peternakan ayam di Natura",
    category: "farmers",
    favoriteItem: "Horned Atlas",
    likedItems: ["Strawberry Milk", "Mantis", "Mayonnaise", "Honeybee"],
    imagePath: "/images/characters/cooper.jpg",
  },
  {
    id: "helen",
    name: "Helen",
    description: "Ibu dari Cooper yang membantu mengelola peternakan ayam.",
    location: "Peternakan ayam di Natura",
    category: "farmers",
    favoriteItem: "Walnut Bread",
    likedItems: ["Caramel Almonds", "Strawberry", "Goldfish", "Egg"],
    imagePath: "/images/characters/helen.jpg",
  },
  {
    id: "henson",
    name: "Henson",
    description: "Ayah dari Cooper yang juga terlibat dalam pengelolaan peternakan ayam.",
    location: "Peternakan ayam di Natura",
    category: "farmers",
    favoriteItem: "Fritter",
    likedItems: ["Gratin", "Horse Mackerel", "Crab", "Cheese"],
    imagePath: "/images/characters/henson.jpg",
  },
  {
    id: "rem",
    name: "Rem",
    description: "Pemilik peternakan sapi yang berdedikasi dalam merawat hewan ternaknya.",
    location: "Peternakan sapi di Natura",
    category: "farmers",
    favoriteItem: "Pudding",
    likedItems: ["Dandelion", "Morning Glory", "Chili Shrimps", "Wool"],
    imagePath: "/images/characters/rem.jpg",
  },
  {
    id: "aries",
    name: "Aries",
    description: "Pemilik peternakan domba yang penuh perhatian terhadap hewan-hewan peliharaannya.",
    location: "Peternakan domba di Natura",
    category: "farmers",
    favoriteItem: "Boiled Carp",
    likedItems: ["Peas", "Iris", "Palbochae", "Yarn"],
    imagePath: "/images/characters/aries.jpg",
  },
  {
    id: "taurus",
    name: "Taurus",
    description: "Pemilik peternakan sapi yang berpengalaman dalam beternak.",
    location: "Peternakan sapi di Natura",
    category: "farmers",
    favoriteItem: "Amberjack Daikon",
    likedItems: ["Plum", "Milk", "Pumpkin", "Baked Beans"],
    imagePath: "/images/characters/taurus.jpg",
  },
  {
    id: "blake",
    name: "Blake",
    description: "Pemilik toko pandai besi yang ahli dalam kerajinan logam.",
    location: "Toko pandai besi di Natura",
    category: "blacksmiths",
    favoriteItem: "Ajillo",
    likedItems: ["Carpaccio", "Lily", "Iron Ore", "Cucumber"],
    imagePath: "/images/characters/blake.jpg",
  },
  {
    id: "smitty",
    name: "Smitty",
    description: "Ayah dari Blake yang juga seorang pandai besi berpengalaman.",
    location: "Toko pandai besi di Natura",
    category: "blacksmiths",
    favoriteItem: "Seared Bonito",
    likedItems: ["Copper Ore", "Namasu", "Daikon", "Ginger"],
    imagePath: "/images/characters/smitty.jpg",
  },
  {
    id: "cafet",
    name: "Cafet",
    description: "Koki dan pemilik restoran yang terkenal dengan masakannya yang lezat.",
    location: "Restoran di Natura",
    category: "merchants",
    favoriteItem: "Sandwich",
    likedItems: ["Strange Food", "Pumpkin", "Bean Paste", "Apple"],
    imagePath: "/images/characters/cafet.jpg",
  },
  {
    id: "eria",
    name: "Eria",
    description: "Istri dari Cafet yang membantu mengelola restoran.",
    location: "Restoran di Natura",
    category: "merchants",
    favoriteItem: "Spring Salad",
    likedItems: ["Sauteed Salad", "Lily", "Wheat Flour", "Melon"],
    imagePath: "/images/characters/eria.jpg",
  },
  {
    id: "gennie",
    name: "Gennie",
    description: "Pemilik toko umum yang menyediakan berbagai kebutuhan sehari-hari.",
    location: "Toko umum di Natura",
    category: "merchants",
    favoriteItem: "Carpaccio",
    likedItems: ["Spring Salad", "Wheat", "Carnation", "Red Saxifrage"],
    imagePath: "/images/characters/gennie.jpg",
  },
  {
    id: "jemma",
    name: "Jemma",
    description: "Putri dari Gennie yang membantu di toko umum.",
    location: "Toko umum di Natura",
    category: "merchants",
    favoriteItem: "Apple Tart",
    likedItems: ["Bagna Cauda", "Pudding", "Carrots", "P. Daisy"],
    imagePath: "/images/characters/jemma.jpg",
  },
  {
    id: "mark",
    name: "Mark",
    description: "Suami dari Gennie dan ayah dari Jemma, turut membantu mengelola toko umum.",
    location: "Toko umum di Natura",
    category: "merchants",
    favoriteItem: "Pot-au-feu",
    likedItems: ["Gratin", "Firefly", "Cauliflower Ant"],
    imagePath: "/images/characters/mark.jpg",
  },
  {
    id: "pent",
    name: "Pent",
    description: "Tukang kayu yang ahli dalam membangun dan memperbaiki bangunan.",
    location: "Toko tukang kayu di hutan",
    category: "carpenters",
    favoriteItem: "Udon",
    likedItems: ["Royal Fern", "Hard Wood"],
    imagePath: "/images/characters/pent.jpg",
  },
  {
    id: "regis",
    name: "Regis",
    description: "Dokter desa yang bertanggung jawab atas kesehatan penduduk.",
    location: "Klinik di Natura",
    category: "services",
    favoriteItem: "Strange Food",
    likedItems: ["Stir-fry", "Shepherd’s Purse", "Lily", "Spice"],
    imagePath: "/images/characters/regis.jpg",
  },
  {
    id: "serena",
    name: "Serena",
    description: "Perawat yang membantu Regis dalam merawat pasien.",
    location: "Klinik di Natura",
    category: "services",
    favoriteItem: "Shortcake",
    likedItems: ["Red Rose", "Terrine", "Shepherd’s Purse", "Aloe"],
    imagePath: "/images/characters/serena.jpg",
  },
  {
    id: "sandy",
    name: "Sandy",
    description: "Pemilik toko alat pancing yang menyediakan perlengkapan memancing.",
    location: "Toko pancing di Zazan Cape",
    category: "merchants",
    favoriteItem: "Marlin",
    likedItems: ["Fried Cheese", "Hibiscus", "Ground Bait", "Firewood", "Squid"],
    imagePath: "/images/characters/sandy.jpg",
  },
];

export default function KarakterPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Filter NPC berdasarkan kategori yang dipilih
  const filteredNpcs =
    selectedCategory === "all" ? npcs : npcs.filter((npc) => npc.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Karakter</h1>

      {/* Karakter Utama */}
      <section className="mb-12">
        <h2 className="section-title">Karakter Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {mainCharacters.map((character) => (
            <div key={character.id} className="character-card">
              <div className="relative h-48 bg-blue-50">
                <Image
                  src={character.imagePath}
                  alt={character.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{character.name}</h3>
                <p className="text-gray-600 mb-4">{character.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-500">Lokasi:</span>
                  <p>{character.location}</p>
                </div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-500">Item Favorit:</span>
                  <p className="font-medium text-green-600">{character.favoriteItem}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-500">Item yang Disukai:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {character.likedItems.map((item, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NPC */}
      <section>
        <h2 className="section-title">Penduduk Desa (NPC)</h2>
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            className={`px-4 py-2 rounded-full font-medium ${
              selectedCategory === "all"
                ? "bg-gray-300 text-gray-800"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
            onClick={() => setSelectedCategory("all")}
          >
            Semua
          </button>
          {npcCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full font-medium ${
                selectedCategory === category.id
                  ? `bg-${category.color}-200 text-${category.color}-800`
                  : `bg-${category.color}-100 hover:bg-${category.color}-200 text-${category.color}-800`
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNpcs.map((npc) => (
            <div
              key={npc.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 border border-gray-100"
            >
              <div className="relative h-32 bg-blue-50 mb-3">
                <Image
                  src={npc.imagePath}
                  alt={npc.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg mb-1">{npc.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{npc.description}</p>
              <div className="text-xs text-gray-500 mb-1">Lokasi:</div>
              <p className="text-sm mb-3">{npc.location}</p>
              {npc.favoriteItem && (
                <>
                  <div className="text-xs text-gray-500 mb-1">Item Favorit:</div>
                  <p className="text-sm font-medium text-green-600 mb-2">{npc.favoriteItem}</p>
                </>
              )}
              {npc.likedItems && (
                <>
                  <div className="text-xs text-gray-500 mb-1">Item yang Disukai:</div>
                  <div className="flex flex-wrap gap-1">
                    {npc.likedItems.map((item, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}