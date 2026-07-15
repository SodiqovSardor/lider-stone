import type { Project } from "@/src/types/project";

const img = (seed: string, w = 1200, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const projects: Project[] = [
  {
    slug: "penthouse-terrace",
    title: "Penthouse Terrace",
    roomType: "Facade",
    stonesUsed: ["calacatta-viola", "nero-marquina"],
    description:
      "A sweeping rooftop terrace in the heart of Tashkent, where Calacatta Viola marble forms the central water feature and Nero Marquina frames the outdoor kitchen. The brief called for materials that could withstand temperature extremes while maintaining an uncompromised luxury aesthetic.",
    descriptionRu:
      "Панорамная терраса на крыше в центре Ташкента, где мрамор Calacatta Viola образует центральный водный элемент, а Nero Marquina обрамляет летнюю кухню. Материалы должны были выдерживать экстремальные температуры, сохраняя бескомпромиссную роскошь.",
    descriptionUz:
      "Toshkent markazidagi tom terassasi, unda Calacatta Viola marmari markaziy suv elementini tashkil qiladi va Nero Marquina ochiq oshxonani ramkaga oladi. Materiallar haddan tashqari haroratga bardosh berishi va hashamatli ko'rinishni saqlab qolishi kerak edi.",
    coverImage: img("penthouse-terrace-1", 1200, 630),
    images: [img("penthouse-terrace-1"), img("penthouse-terrace-2"), img("penthouse-terrace-3"), img("penthouse-terrace-4")],
  },
  {
    slug: "city-residence-lobby",
    title: "City Residence Lobby",
    roomType: "Interior",
    stonesUsed: ["statuario-venato", "taj-mahal-quartzite"],
    description:
      "The grand lobby of a new residential tower in Tashkent's business district. Statuario Venato marble clads the reception wall in book-matched panels, while Taj Mahal Quartzite forms the concierge desk and flooring border.",
    descriptionRu:
      "Великолепный вестибюль нового жилого комплекса в деловом районе Ташкента. Мрамор Statuario Venato облицовывает стену ресепшена книжно-сопоставленными панелями, а Taj Mahal Quartzite образует стойку консьержа и бордюр пола.",
    descriptionUz:
      "Toshkentning biznes tumanidagi yangi turar-joy majmuasining katta lobbisi. Statuario Venato marmari kitob-juft panellar bilan qabul devorini qoplaydi, Taj Mahal Kvartsit esa konservant stoli va pol chegarasini tashkil qiladi.",
    coverImage: img("city-residence-1", 1200, 630),
    images: [img("city-residence-1"), img("city-residence-2"), img("city-residence-3")],
  },
  {
    slug: "kitchen-atelier",
    title: "Kitchen Atelier",
    roomType: "Kitchen",
    stonesUsed: ["taj-mahal-quartzite", "fantasy-brown"],
    description:
      "A private chef's kitchen where function meets sculpture. Taj Mahal Quartzite forms a 4-metre island with waterfall edges, chosen for its hardness and resistance to acids and heat. Fantasy Brown Quartzite backsplash creates a watercolour backdrop.",
    descriptionRu:
      "Частная кухня шеф-повара, где функция встречается со скульптурой. Taj Mahal Quartzite образует 4-метровый остров с водопадными краями, выбранный за его твердость и устойчивость к кислотам и теплу. Fantasy Brown Quartzite создает акварельный фон.",
    descriptionUz:
      "Funktsiya haykaltaroshlik bilan uchrashadigan xususiy oshpaz oshxonasi. Taj Mahal Kvartsit 4 metrli orolni tashkil qiladi, qattiqligi va kislota va issiqqa chidamliligi uchun tanlangan. Fantasy Brown Kvartsit akvarel fonini yaratadi.",
    coverImage: img("kitchen-atelier-1", 1200, 630),
    images: [img("kitchen-atelier-1"), img("kitchen-atelier-2")],
  },
  {
    slug: "spiral-staircase",
    title: "Spiral Staircase",
    roomType: "Staircase",
    stonesUsed: ["nero-marquina", "patagonia-onyx"],
    description:
      "A dramatic spiral staircase in a private villa, where Nero Marquina marble treads float within a structure clad in backlit Patagonia Onyx. Each step is precision-cut and honed to a matte finish, while the onyx glowing wall becomes the home's vertical centrepiece.",
    descriptionRu:
      "Драматическая винтовая лестница в частной вилле, где ступени из Nero Marquina парят в конструкции, облицованной подсвеченным Patagonia Onyx. Каждая ступень точно вырезана и отшлифована до матовой поверхности.",
    descriptionUz:
      "Xususiy villadagi dramatik spiral zinapoya, unda Nero Marquina qadamlari Patagonia Onyx bilan qoplangan strukturada suzadi. Har bir qadam aniq kesilgan va mat yuzaga qadar ishlangan.",
    coverImage: img("spiral-staircase-1", 1200, 630),
    images: [img("spiral-staircase-1"), img("spiral-staircase-2"), img("spiral-staircase-3")],
  },
  {
    slug: "facade-renewal",
    title: "Facade Renewal",
    roomType: "Facade",
    stonesUsed: ["travertino-nocetto", "navona-travertine"],
    description:
      "The restoration and modernisation of a Soviet-era building facade in central Tashkent. Travertino Nocetto panels in a staggered layout give the structure a warm, contemporary rhythm, while Navona Travertine frames the entrances.",
    descriptionRu:
      "Реставрация и модернизация фасада здания советской эпохи в центре Ташкента. Панели Travertino Nocetto в шахматном порядке придают зданию теплый современный ритм, а Navona Travertine обрамляет входы.",
    descriptionUz:
      "Toshkent markazidagi Sovet davri binosining fasadini restavratsiya qilish va modernizatsiya qilish. Travertino Nocetto panellari binoga iliq zamonaviy ritm beradi, Navona Travertine esa kirishlarni ramkaga oladi.",
    coverImage: img("facade-renewal-1", 1200, 630),
    images: [img("facade-renewal-1"), img("facade-renewal-2")],
  },
  {
    slug: "bathhouse-suite",
    title: "Bathhouse Suite",
    roomType: "Interior",
    stonesUsed: ["silver-travertine", "honey-onyx"],
    description:
      "A spa-like bathroom suite in a private residence, clad entirely in Silver Travertine with a Honey Onyx backlit vanity wall. The travertine's matte honed finish provides a tactile, warm surface underfoot, while the onyx casts a golden glow.",
    descriptionRu:
      "Спа-ванная комната в частном доме, полностью отделанная Silver Travertine с подсвеченной стеной из Honey Onyx. Матовая шлифованная поверхность травертина обеспечивает тактильно теплую поверхность под ногами, а оникс отливает золотым сиянием.",
    descriptionUz:
      "Xususiy uyidagi spa-hammom, butunlay Silver Travertine bilan qoplangan va Honey Oniksdan yoritilgan devor bilan. Travertinning mat ishlangan yuzasi oyoq ostida iliq sirtni ta'minlaydi, oniks esa oltin nur sochadi.",
    coverImage: img("bathhouse-1", 1200, 630),
    images: [img("bathhouse-1"), img("bathhouse-2"), img("bathhouse-3"), img("bathhouse-4")],
  },
];

export default projects;
export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}
export function getProjectsByRoomType(roomType: string) {
  return projects.filter((p) => p.roomType.toLowerCase() === roomType.toLowerCase());
}
