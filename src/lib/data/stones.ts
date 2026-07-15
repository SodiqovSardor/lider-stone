import type { Stone } from "@/src/types/stone";

const img = (seed: string, w = 1200, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const stones: Stone[] = [
  {
    slug: "calacatta-viola",
    name: "Calacatta Viola",
    material: "marble",
    origin: "Italy",
    finish: ["Polished", "Honed"],
    dimensions: "320 x 180 cm",
    thickness: "2 cm / 3 cm",
    description:
      "A rare Italian marble with a deep charcoal background and bold violet-grey veining. Each slab is a dramatic composition of organic movement \u2014 ideal for statement kitchen islands, feature walls, and luxury hospitality interiors.",
    descriptionRu:
      "Редкий итальянский мрамор с глубоким угольным фоном и смелыми фиолетово-серыми прожилками. Каждый слэб \u2014 драматическая композиция из органических движений, идеально подходящая для кухонных островов, акцентных стен и интерьеров класса люкс.",
    descriptionUz:
      "Italianing noyob marmari \u2014 chuqur ko'mir fon va binafsha-kulrang tomirlar. Har bir slab \u2014 organik harakatlarning dramatik kompozitsiyasi bo'lib, oshxona orollari, devor qoplamalari va hashamatli interyerlar uchun ideal.",
    images: [img("calacatta-viola-1"), img("calacatta-viola-2"), img("marble-texture-1")],
    featured: true,
  },
  {
    slug: "statuario-venato",
    name: "Statuario Venato",
    material: "marble",
    origin: "Italy",
    finish: ["Polished", "Honed"],
    dimensions: "310 x 190 cm",
    thickness: "2 cm / 3 cm",
    description:
      "The quintessential white marble with soft grey veining on a bright white ground. Sourced from the Apuan Alps, this stone brings timeless elegance to bathrooms, floorings, and retail spaces.",
    descriptionRu:
      "Эталонный белый мрамор с мягкими серыми прожилками на ярко-белом фоне. Добытый в Апуанских Альпах, этот камень придает вневременную элегантность ванным комнатам, полам и торговым помещениям.",
    descriptionUz:
      "Yorqin oq fonda yumshoq kulrang tomirlarga ega klassik oq marmar. Apuan Alp tog'laridan qazib olingan bu tosh hammomlar, pollar va savdo maydonlariga abadiy nafislik baxsh etadi.",
    images: [img("statuario-venato-1"), img("statuario-venato-2"), img("marble-texture-2")],
    featured: true,
  },
  {
    slug: "nero-marquina",
    name: "Nero Marquina",
    material: "marble",
    origin: "Spain",
    finish: ["Polished"],
    dimensions: "280 x 160 cm",
    thickness: "2 cm",
    description:
      "A deep black marble with stark white fossilized veins. Its dramatic contrast makes it a favorite for contemporary fireplaces, bar tops, and sculptural elements.",
    descriptionRu:
      "Глубокий черный мрамор с резкими белыми ископаемыми прожилками. Его драматический контраст делает его фаворитом для современных каминов, барных стоек и скульптурных элементов.",
    descriptionUz:
      "Oq qazilma tomirlari bo'lgan chuqur qora marmar. Uning dramatik kontrasti uni zamonaviy kaminlar, bar stollari va haykaltaroshlik elementlari uchun sevimli toshga aylantiradi.",
    images: [img("nero-marquina-1"), img("nero-marquina-2"), img("dark-stone-1")],
  },
  {
    slug: "taj-mahal-quartzite",
    name: "Taj Mahal Quartzite",
    material: "quartzite",
    origin: "Brazil",
    finish: ["Polished", "Leathered"],
    dimensions: "330 x 190 cm",
    thickness: "2 cm / 3 cm",
    description:
      "A creamy quartzite with subtle caramel and gold veining. One of the hardest natural stones, it combines the look of marble with superior durability \u2014 perfect for high-traffic kitchens and commercial counters.",
    descriptionRu:
      "Кремовый кварцит с тонкими карамельными и золотыми прожилками. Один из самых твердых природных камней, он сочетает внешний вид мрамора с превосходной долговечностью \u2014 идеален для интенсивно используемых кухонь и коммерческих стоек.",
    descriptionUz:
      "Yumshoq karamel va oltin tomirlari bo'lgan krem kvartsit. Eng qattiq tabiiy toshlardan biri bo'lib, marmar ko'rinishini yuqori chidamlilik bilan birlashtiradi \u2014 oshxonalar va tijorat peshtaxtalari uchun mukammal.",
    images: [img("taj-mahal-1"), img("taj-mahal-2"), img("quartzite-texture-1")],
    featured: true,
  },
  {
    slug: "fantasy-brown",
    name: "Fantasy Brown",
    material: "quartzite",
    origin: "India",
    finish: ["Polished", "Honed"],
    dimensions: "300 x 175 cm",
    thickness: "2 cm / 3 cm",
    description:
      "A dense quartzite with swirling earth tones \u2014 creams, browns, and soft greys. Its movement mimics abstract watercolour, bringing warmth to residential kitchens and vanities.",
    descriptionRu:
      "Плотный кварцит с завихренными земляными тонами \u2014 кремовыми, коричневыми и мягко-серыми. Его движение имитирует абстрактную акварель, привнося тепло в жилые кухни и ванные комнаты.",
    descriptionUz:
      "Tuproq ranglari \u2014 krem, jigarrang va yumshoq kulrang \u2014 bilan aylanadigan zich kvartsit. Uning harakati mavhum akvarelni taqlid qiladi, oshxona va hammomlarga iliqlik olib keladi.",
    images: [img("fantasy-brown-1"), img("fantasy-brown-2"), img("quartzite-texture-2")],
  },
  {
    slug: "super-white",
    name: "Super White",
    material: "quartzite",
    origin: "Brazil",
    finish: ["Polished", "Leathered"],
    dimensions: "320 x 180 cm",
    thickness: "2 cm / 3 cm",
    description:
      "A striking quartzite with a clean white base and dramatic charcoal-grey veining. Exceptionally hard and stain-resistant \u2014 an ideal work surface for busy kitchens.",
    descriptionRu:
      "Эффектный кварцит с чистым белым основанием и драматическими угольно-серыми прожилками. Исключительно твердый и устойчивый к пятнам \u2014 идеальная рабочая поверхность для загруженных кухонь.",
    descriptionUz:
      "Toza oq asos va dramatik ko'mir-kulrang tomirlari bilan ajoyib kvartsit. Juda qattiq va dog'larga chidamli \u2014 gavjum oshxonalar uchun ideal ish yuzasi.",
    images: [img("super-white-1"), img("super-white-2"), img("quartzite-texture-3")],
  },
  {
    slug: "black-galaxy",
    name: "Black Galaxy",
    material: "granite",
    origin: "India",
    finish: ["Polished"],
    dimensions: "290 x 170 cm",
    thickness: "2 cm / 3 cm",
    description:
      "A deep black granite speckled with golden-brown metallic crystals that catch light like stars. Unmatched durability makes it ideal for outdoor kitchens, flooring, and commercial fa\u00e7ades.",
    descriptionRu:
      "Глубокий черный гранит с золотисто-коричневыми металлическими кристаллами, которые ловят свет, как звезды. Непревзойденная долговечность делает его идеальным для уличных кухонь, полов и коммерческих фасадов.",
    descriptionUz:
      "Yulduzlar kabi yorug'likni tutadigan oltin-jigarrang metall kristallari bilan qoplangan chuqur qora granit. Beqiyos chidamlilik uni tashqi oshxonalar, pollar va tijorat fasadlari uchun ideal qiladi.",
    images: [img("black-galaxy-1"), img("black-galaxy-2"), img("granite-texture-1")],
    featured: true,
  },
  {
    slug: "absolute-black",
    name: "Absolute Black",
    material: "granite",
    origin: "India",
    finish: ["Polished", "Flamed"],
    dimensions: "280 x 160 cm",
    thickness: "2 cm / 3 cm",
    description:
      "The truest black granite available \u2014 uniform, dense, and virtually impervious. A staple for modern minimalist designs, from kitchen worktops to exterior cladding.",
    descriptionRu:
      "Самый настоящий черный гранит \u2014 однородный, плотный и практически непроницаемый. Основной материал для современных минималистичных проектов, от кухонных столешниц до наружной облицовки.",
    descriptionUz:
      "Mavjud eng haqiqiy qora granit \u2014 bir xil, zich va deyarli o'tkazmaydigan. Zamonaviy minimalist dizaynlar uchun asosiy material, oshxona stollari va tashqi qoplamalar uchun.",
    images: [img("absolute-black-1"), img("absolute-black-2"), img("granite-texture-2")],
  },
  {
    slug: "verde-alpi",
    name: "Verde Alpi",
    material: "granite",
    origin: "Italy",
    finish: ["Polished"],
    dimensions: "300 x 175 cm",
    thickness: "2 cm",
    description:
      "A deep forest-green granite with subtle black speckling. Its rich colour and extreme hardness make it a distinctive choice for bar tops, conference tables, and feature walls.",
    descriptionRu:
      "Глубокий лесной зеленый гранит с тонкими черными вкраплениями. Его насыщенный цвет и чрезвычайная твердость делают его отличительным выбором для барных стоек, конференц-столов и акцентных стен.",
    descriptionUz:
      "Yashil o'rmon rangidagi granit, nozik qora dog'lar bilan. Boy rangi va o'ta qattiqligi uni bar stollari, konferentsiya stollari va devor qoplamalari uchun ajoyib tanlovga aylantiradi.",
    images: [img("verde-alpi-1"), img("verde-alpi-2"), img("granite-texture-3")],
  },
  {
    slug: "patagonia-onyx",
    name: "Patagonia Onyx",
    material: "onyx",
    origin: "Argentina",
    finish: ["Polished"],
    dimensions: "270 x 160 cm",
    thickness: "2 cm",
    description:
      "A translucent onyx with layered bands of honey, amber, and cream. Backlit, it glows like liquid gold \u2014 a spectacular choice for bar fronts, reception desks, and illuminated walls.",
    descriptionRu:
      "Полупрозрачный оникс с слоистыми полосами медового, янтарного и кремового цветов. Подсвеченный, он светится как жидкое золото \u2014 эффектный выбор для барных стоек, ресепшенов и подсвеченных стен.",
    descriptionUz:
      "Asal, amber va krem rangli qatlamli chiziqlarga ega shaffof oniks. Orqa yorug'likda u suyuq oltindek yonadi \u2014 bar peshtaxtalari, qabul stollari va yoritilgan devorlar uchun ajoyib tanlov.",
    images: [img("patagonia-onyx-1"), img("patagonia-onyx-2"), img("onyx-texture-1")],
    featured: true,
  },
  {
    slug: "honey-onyx",
    name: "Honey Onyx",
    material: "onyx",
    origin: "Iran",
    finish: ["Polished"],
    dimensions: "260 x 150 cm",
    thickness: "2 cm",
    description:
      "Warm golden-orange onyx with flowing banded patterns. When backlit it transforms into a luminous honeycomb \u2014 stunning for bar counters, decorative screens, and spiritual spaces.",
    descriptionRu:
      "Теплый золотисто-оранжевый оникс с текучими полосатыми узорами. При подсветке он превращается в светящиеся соты \u2014 потрясающе для барных стоек, декоративных перегородок и духовных пространств.",
    descriptionUz:
      "Oqimli chiziqli naqshli issiq oltin-to'q sariq oniks. Orqa yorug'likda u yorqin asal uyasiga aylanadi \u2014 bar peshtaxtalari, dekorativ ekranlar va ruhiy makonlar uchun ajoyib.",
    images: [img("honey-onyx-1"), img("honey-onyx-2"), img("onyx-texture-2")],
  },
  {
    slug: "silver-wave-onyx",
    name: "Silver Wave Onyx",
    material: "onyx",
    origin: "Mexico",
    finish: ["Polished"],
    dimensions: "260 x 150 cm",
    thickness: "2 cm",
    description:
      "A delicate white-grey onyx with soft wave-like banding. Its ethereal translucency works beautifully in light-well installations and spa interiors.",
    descriptionRu:
      "Нежный бело-серый оникс с мягкими волнообразными полосами. Его эфирная полупрозрачность прекрасно работает в световых колодцах и спа-интерьерах.",
    descriptionUz:
      "Yumshoq to'lqinsimon chiziqli nozik oq-kulrang oniks. Uning nozik shaffofligi yorug'lik quduqlari va spa interyerlarida chiroyli ko'rinadi.",
    images: [img("silver-wave-onyx-1"), img("silver-wave-onyx-2"), img("onyx-texture-3")],
  },
  {
    slug: "travertino-nocetto",
    name: "Travertino Nocetto",
    material: "travertine",
    origin: "Italy",
    finish: ["Honed", "Brushed"],
    dimensions: "290 x 170 cm",
    thickness: "2 cm / 3 cm",
    description:
      "A warm beige travertine with natural pits and fissures. Its earthy texture brings Mediterranean warmth to fa\u00e7ades, pool surrounds, and rustic interior floors.",
    descriptionRu:
      "Теплый бежевый травертин с природными ямками и трещинами. Его землистая текстура приносит средиземноморское тепло фасадам, бассейнам и деревенским интерьерным полам.",
    descriptionUz:
      "Tabiiy chuqurchalar va yoriqlar bilan iliq bej travertin. Uning tuproq tuzilishi fasadlar, hovuz atrofi va rustikal interyer pollariga O'rta yer dengizi iliqligini olib keladi.",
    images: [img("travertino-1"), img("travertino-2"), img("travertine-texture-1")],
  },
  {
    slug: "silver-travertine",
    name: "Silver Travertine",
    material: "travertine",
    origin: "Turkey",
    finish: ["Honed", "Tumbled"],
    dimensions: "280 x 160 cm",
    thickness: "2 cm / 3 cm",
    description:
      "A cool silver-grey travertine with subtle veining and a refined patina. Its understated elegance suits contemporary bathrooms, cladding, and commercial lobbies.",
    descriptionRu:
      "Холодный серебристо-серый травертин с тонкими прожилками и изысканной патиной. Его сдержанная элегантность подходит для современных ванных комнат, облицовки и коммерческих вестибюлей.",
    descriptionUz:
      "Yumshoq tomirlari va nafis patinasi bilan sovuq kumush-kulrang travertin. Uning oddiy nafisligi zamonaviy hammomlar, qoplamalar va tijorat lobbilari uchun mos keladi.",
    images: [img("silver-travertine-1"), img("silver-travertine-2"), img("travertine-texture-2")],
  },
  {
    slug: "navona-travertine",
    name: "Navona Travertine",
    material: "travertine",
    origin: "Italy",
    finish: ["Honed", "Brushed", "Polished"],
    dimensions: "300 x 175 cm",
    thickness: "2 cm / 3 cm",
    description:
      "A classic ivory travertine with a uniform, warm tone and light porosity. A go-to material for large-format flooring, column cladding, and timeless European interiors.",
    descriptionRu:
      "Классический слоновой кости травертин с равномерным теплым тоном и легкой пористостью. Предпочтительный материал для крупноформатных полов, облицовки колонн и вневременных европейских интерьеров.",
    descriptionUz:
      "Bir xil iliq ton va engil g'ovaklikka ega klassik fil suyagi travertin. Katta formatli pollar, ustun qoplamalari va abadiy Yevropa interyerlari uchun eng yaxshi material.",
    images: [img("navona-1"), img("navona-2"), img("travertine-texture-3")],
    featured: true,
  },
];

export default stones;
export const materials = [
  { slug: "marble", label: "Marble" },
  { slug: "quartzite", label: "Quartzite" },
  { slug: "granite", label: "Granite" },
  { slug: "onyx", label: "Onyx" },
  { slug: "travertine", label: "Travertine" },
] as const;

export function getStonesByMaterial(material: string) {
  return stones.filter((s) => s.material === material);
}

export function getStoneBySlug(slug: string) {
  return stones.find((s) => s.slug === slug) ?? null;
}

export function getRelatedStones(slug: string, count = 4) {
  const stone = getStoneBySlug(slug);
  if (!stone) return [];
  return stones
    .filter((s) => s.slug !== slug && s.material === stone.material)
    .slice(0, count);
}

export function getFeaturedStones() {
  return stones.filter((s) => s.featured);
}
