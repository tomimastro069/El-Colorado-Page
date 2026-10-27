import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import elColoradoLogo from "../imports/WhatsApp_Image_2026-10-27_at_13.13.29.jpeg";
import {
  ArrowDown,
  ArrowRight,
  BedDouble,
  Bird,
  Bus,
  CalendarDays,
  Car,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Compass,
  Droplets,
  Fish,
  Fuel,
  Heart,
  Hospital,
  Landmark,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Play,
  ShieldCheck,
  Sparkles,
  Sun,
  TentTree,
  ThermometerSun,
  Trees,
  UtensilsCrossed,
  Waves,
  X,
} from "lucide-react";

const navItems = [
  ["Descubrir", "descubrir"],
  ["Atractivos", "atractivos"],
  ["Agenda", "agenda"],
  ["Cómo llegar", "llegar"],
  ["Datos útiles", "datos"],
];

const attractions = [
  {
    number: "01",
    title: "Parque Acuático",
    copy: "Siete piletas, toboganes de hasta 7 metros, juegos acuáticos y beach vóley. El gran imán del verano formoseño.",
    tag: "Ideal en familia",
    icon: Droplets,
    image:
      "https://res.cloudinary.com/dwkdclfwe/image/upload/v1793119942/WhatsApp_Image_2026-10-27_at_13.52.03_s75jvx.jpg",
  },
  {
    number: "02",
    title: "Camping Municipal",
    copy: "Acceso libre, parrillas, quinchos, sanitarios, Wi-Fi, bungalows y un sector preparado para casas rodantes.",
    tag: "Dormir junto al río",
    icon: TentTree,
    image:
      "https://res.cloudinary.com/dwkdclfwe/image/upload/v1793119335/WhatsApp_Image_2026-10-27_at_13.15.53_qrolcs.jpg",
  },
  {
    number: "03",
    title: "Puente Libertad",
    copy: "La postal de la ciudad. Sus tres pilares celebran a los pueblos originarios, inmigrantes y criollos.",
    tag: "Historia & paisaje",
    icon: Landmark,
    image:
      "https://res.cloudinary.com/dwkdclfwe/image/upload/v1793119334/WhatsApp_Image_2026-10-27_at_13.15.53_1_olyz87.jpg",
  },
  {
    number: "04",
    title: "Río, aves y pesca",
    copy: "Tucanes, martines pescadores y garzas conviven con dorados, surubíes y pacúes en el Bermejo.",
    tag: "Naturaleza activa",
    icon: Bird,
    image:
      "https://res.cloudinary.com/dwkdclfwe/image/upload/v1793119928/WhatsApp_Image_2026-10-27_at_13.47.41_tb0hpp.jpg",
  },
  {
    number: "05",
    title: "Plaza & ferias",
    copy: "La Plaza San Martín reúne a productores, artesanos y vecinos todos los miércoles y sábados.",
    tag: "Cultura local",
    icon: Sparkles,
    image:
      "https://res.cloudinary.com/dwkdclfwe/image/upload/v1793120097/WhatsApp_Image_2026-10-27_at_13.50.51_nizkj9.jpg",
  },
  {
    number: "06",
    title: "Rio Bermejo ",
    copy: "Un espacio para disfrutar de la naturaleza y el aire libre.",
    tag: "Saberes del monte",
    icon: Trees,
    image:
      "https://res.cloudinary.com/dwkdclfwe/image/upload/v1793119347/WhatsApp_Image_2026-10-27_at_13.15.54_1_ihbr2t.jpg",
  },
];

const profiles = [
  {
    name: "En familia",
    icon: Heart,
    text: "Parque acuático, picnic bajo los árboles y una tarde de costanera.",
    route: "1 día · verano",
  },
  {
    name: "Con la caña",
    icon: Fish,
    text: "Amanecer sobre el Bermejo, pesca deportiva y pescado a las brasas.",
    route: "2 días · otoño",
  },
  {
    name: "Naturaleza",
    icon: Bird,
    text: "Avistaje temprano, senderos ribereños y atardecer desde el mirador.",
    route: "2 días · todo el año",
  },
  {
    name: "Cultura viva",
    icon: Sparkles,
    text: "Feria, artesanía en chaguar, sabores regionales y memoria del puente.",
    route: "1 día · mié/sáb",
  },
];

const routes = [
  { city: "Formosa", distance: "140 km", time: "2 h aprox.", note: "RP 1 y RP 3" },
  { city: "Resistencia", distance: "155 km", time: "2 h 20 min", note: "Por Puente Libertad" },
  { city: "Buenos Aires", distance: "1.100 km", time: "13 h aprox.", note: "RN 11 hacia Formosa" },
  { city: "Córdoba", distance: "900 km", time: "11 h aprox.", note: "Vía Santiago del Estero" },
  { city: "Mendoza", distance: "1.500 km", time: "18 h aprox.", note: "Conexión centro–NEA" },
];

const gallery = [
  {
    src: "https://res.cloudinary.com/dwkdclfwe/image/upload/v1793121344/Gemini_Generated_Image_buys73buys73buys_npustd.jpg",
    alt: "Paisaje de río y monte",
    label: "Bermejo",
  },
  {
    src: "https://res.cloudinary.com/dwkdclfwe/image/upload/v1793122581/WhatsApp_Image_2026-10-27_at_14.30.22_gxzuay.jpg",
    alt: "Naturaleza ribereña",
    label: "",
  },
  {
    src: "https://res.cloudinary.com/dwkdclfwe/image/upload/v1793122585/WhatsApp_Image_2026-10-27_at_14.33.29_m7dstp.jpg",
    alt: "Experiencias junto al agua",
    label: "",
  },
  {
    src: "https://res.cloudinary.com/dwkdclfwe/image/upload/v1793122587/WhatsApp_Image_2026-10-27_at_14.33.41_z2wvpg.jpg",
    alt: "Flora regional",
    label: "",
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

function SectionHeader({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <motion.div {...reveal} className="mb-10 md:mb-16">
      <div className={`mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] ${light ? "text-orange-200" : "text-[#a13f27]"}`}>
        <span className={`h-px w-8 ${light ? "bg-orange-200" : "bg-[#a13f27]"}`} />
        {eyebrow}
      </div>
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <h2 className={`font-display text-5xl leading-[0.95] tracking-[-0.035em] md:col-span-8 md:text-7xl ${light ? "text-[#fffaf1]" : "text-[#163c32]"}`}>
          {title}
        </h2>
        {intro && (
          <p className={`max-w-md text-base leading-7 md:col-span-4 ${light ? "text-[#dbe7df]" : "text-[#53645f]"}`}>
            {intro}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProfile, setActiveProfile] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const moveGallery = (direction: number) => {
    setGalleryIndex((current) => (current + direction + gallery.length) % gallery.length);
  };

  return (
    <main className="overflow-hidden bg-background text-foreground selection:bg-[#c85535] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-[#102f28]/90 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:h-20 md:px-10">
          <button onClick={() => scrollTo("inicio")} className="group flex items-center gap-3 text-left">
            <span className="grid size-11 place-items-center overflow-hidden rounded-full border-2 border-white bg-white shadow-sm">
              <ImageWithFallback
                src={elColoradoLogo}
                alt="Logo de El Colorado, Formosa"
                className="size-full scale-[1.65] object-contain"
              />
            </span>
            <span>
              <span className="block font-display text-lg leading-none">El Colorado</span>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.22em] text-orange-100/70">
                Formosa · Argentina
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/75 transition hover:text-orange-200"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("contacto")}
            className="hidden items-center gap-2 rounded-full bg-[#f1bf62] px-5 py-2.5 text-sm font-semibold text-[#163c32] transition hover:bg-white lg:flex"
          >
            Planeá tu visita <ArrowRight className="size-4" />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-10 place-items-center rounded-full border border-white/30 lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/10 bg-[#102f28] px-5 py-5 lg:hidden"
          >
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left font-display text-2xl"
              >
                {label} <ArrowRight className="size-4 text-orange-200" />
              </button>
            ))}
          </motion.nav>
        )}
      </header>

      <section id="inicio" className="relative min-h-[760px] bg-[#163c32] pt-16 text-white md:min-h-[900px] md:pt-20">
        <img
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=2000&h=1400&fit=crop&auto=format"
          alt="Paisaje natural del norte argentino"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f28]/95 via-[#102f28]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102f28] via-transparent to-[#102f28]/30" />

        <div className="relative mx-auto grid min-h-[700px] max-w-[1440px] items-end px-5 pb-9 pt-20 md:min-h-[820px] md:grid-cols-12 md:px-10 md:pb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="absolute right-10 top-16 hidden size-44 overflow-hidden rounded-full border-[6px] border-white bg-white shadow-2xl xl:block"
          >
            <ImageWithFallback
              src={elColoradoLogo}
              alt="Identidad visual de El Colorado, Formosa"
              className="size-full scale-[1.08] object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="md:col-span-9"
          >
            <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-orange-100">
              <MapPin className="size-4 text-[#f1bf62]" />
              Sudeste de Formosa · 26°18′32″ S
            </div>
            <p className="mb-3 font-display text-2xl italic text-[#f1bf62] md:text-4xl">La Perla del Sur</p>
            <h1 className="max-w-5xl font-display text-[clamp(5rem,14vw,12rem)] leading-[0.72] tracking-[-0.065em]">
              El Colorado
            </h1>
            <div className="mt-10 grid gap-7 border-t border-white/30 pt-7 md:grid-cols-12">
              <p className="max-w-xl text-lg leading-8 text-white/85 md:col-span-7 md:text-xl">
                Un destino a orillas del Bermejo donde el agua, el monte y la cultura viva invitan a quedarse un poco más.
              </p>
              <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
                <a
                  href="https://www.youtube.com/shorts/3RValTe-nho"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[#163c32]"
                >
                  <Play className="size-4 fill-current" /> Video
                </a>
                <button
                  onClick={() => scrollTo("atractivos")}
                  className="inline-flex items-center gap-3 rounded-full bg-[#c85535] px-6 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b2472d]"
                >
                  Descubrí El Colorado <ArrowDown className="size-4" />
                </button>
                <button
                  onClick={() => scrollTo("llegar")}
                  className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 font-semibold backdrop-blur transition hover:bg-white hover:text-[#163c32]"
                >
                  Cómo llegar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="descubrir" className="border-b border-border bg-[#fffaf1] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <motion.div {...reveal} className="md:col-span-5">
              <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#a13f27]">Una ciudad, muchas formas de vivirla</p>
              <h2 className="font-display text-5xl leading-none tracking-tight text-[#163c32] md:text-7xl">
                El río le dio<br />
                <em className="text-[#c85535]">su nombre.</em>
              </h2>
            </motion.div>
            <motion.div {...reveal} transition={{ duration: 0.65, delay: 0.15 }} className="md:col-span-6 md:col-start-7">
              <p className="font-display text-2xl leading-9 text-[#243e37] md:text-3xl md:leading-[2.75rem]">
                El Bermejo tiñe de rojo la costa y marca el pulso de una ciudad cálida, familiar y orgullosa de su encuentro de culturas.
              </p>
              <p className="mt-6 max-w-xl leading-7 text-[#65716d]">
                Fundada el 11 de febrero de 1936, El Colorado está en el departamento Pirané, a 140 kilómetros de la capital formoseña. Tiene 18.201 habitantes y una energía que se enciende cada verano.
              </p>
            </motion.div>
          </div>

          <motion.div {...reveal} className="mt-16 grid border-y border-[#d8d2c5] sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Droplets, value: "7 piletas", label: "Parque acuático" },
              { icon: Waves, value: "Río Bermejo", label: "Costa & pesca" },
              { icon: Trees, value: "Cultura viva", label: "Chaguar & ferias" },
              { icon: UtensilsCrossed, value: "Sabor litoraleño", label: "Cocina regional" },
            ].map((item, index) => (
              <div key={item.value} className={`flex gap-4 px-5 py-7 ${index < 3 ? "lg:border-r lg:border-[#d8d2c5]" : ""}`}>
                <item.icon className="mt-1 size-6 shrink-0 text-[#c85535]" />
                <div>
                  <p className="font-display text-2xl text-[#163c32]">{item.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#78827e]">{item.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="atractivos" className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <SectionHeader
            eyebrow="Seis imperdibles"
            title="El agua es apenas el comienzo."
            intro="Del parque a la costa, de la plaza al monte: recorré una ciudad que se revela sin apuro."
          />

          <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-[#d7ddd8] md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((item, index) => (
              <motion.article
                key={item.title}
                {...reveal}
                transition={{ duration: 0.55, delay: (index % 3) * 0.08 }}
                className="group relative min-h-[440px] overflow-hidden bg-[#163c32]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-55"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102f28] via-[#102f28]/35 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6 text-white">
                  <span className="font-mono text-xs tracking-widest">{item.number}</span>
                  <span className="grid size-10 place-items-center rounded-full border border-white/40 bg-black/10 backdrop-blur">
                    <item.icon className="size-5" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f1bf62]">{item.tag}</span>
                  <h3 className="mt-3 font-display text-4xl leading-none">{item.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">{item.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#163c32] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <SectionHeader
            eyebrow="Tu viaje, a tu manera"
            title="¿Qué clase de viajero sos?"
            intro="Elegí un perfil para imaginar tu próxima escapada a la Perla del Sur."
            light
          />

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="space-y-px border-y border-white/20 lg:col-span-5">
              {profiles.map((profile, index) => (
                <button
                  key={profile.name}
                  onClick={() => setActiveProfile(index)}
                  className={`flex w-full items-center justify-between border-b border-white/15 px-1 py-5 text-left transition ${activeProfile === index ? "text-[#f1bf62]" : "text-white/65 hover:text-white"}`}
                >
                  <span className="flex items-center gap-4">
                    <profile.icon className="size-5" />
                    <span className="font-display text-3xl">{profile.name}</span>
                  </span>
                  <ArrowRight className={`size-5 transition ${activeProfile === index ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} />
                </button>
              ))}
            </div>
            <motion.div
              key={activeProfile}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative min-h-[330px] overflow-hidden rounded-[1.5rem] bg-[#e6a14c] p-7 text-[#163c32] lg:col-span-7 lg:p-12"
            >
              <div className="absolute -right-10 -top-10 size-48 rounded-full border border-[#163c32]/20" />
              <div className="absolute -right-2 top-8 size-28 rounded-full border border-[#163c32]/20" />
              {(() => {
                const ActiveIcon = profiles[activeProfile].icon;
                return <ActiveIcon className="size-10" />;
              })()}
              <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.2em]">Itinerario sugerido</p>
              <h3 className="mt-3 font-display text-5xl">{profiles[activeProfile].name}</h3>
              <p className="mt-4 max-w-lg text-lg leading-7">{profiles[activeProfile].text}</p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#163c32]/30 px-4 py-2 font-mono text-[10px] uppercase tracking-wider">
                <Clock3 className="size-4" /> {profiles[activeProfile].route}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="agenda" className="bg-[#f3e7d2] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <SectionHeader
            eyebrow="Agenda anual"
            title="Siempre hay un buen momento."
            intro="El verano es protagonista, pero la identidad de El Colorado sucede durante todo el año."
          />
          <div className="grid gap-4 lg:grid-cols-12">
            <motion.article {...reveal} className="relative overflow-hidden rounded-[1.5rem] bg-[#c85535] p-7 text-white lg:col-span-6 lg:min-h-[400px] lg:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange-100">11 · Febrero</p>
              <CalendarDays className="absolute right-8 top-8 size-9 text-orange-100/70" />
              <div className="mt-28 lg:mt-44">
                <h3 className="font-display text-5xl leading-none md:text-6xl">Aniversario de la ciudad</h3>
                <p className="mt-5 max-w-lg leading-7 text-white/80">Actos, música y encuentro comunitario para celebrar la fundación de 1936.</p>
              </div>
            </motion.article>
            <motion.article {...reveal} transition={{ duration: 0.65, delay: 0.1 }} className="rounded-[1.5rem] border border-[#cdbda3] bg-[#fffaf1] p-7 lg:col-span-3 lg:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#a13f27]">Octubre</p>
              <Sparkles className="mt-16 size-9 text-[#c85535]" />
              <h3 className="mt-8 font-display text-4xl text-[#163c32]">Feriarte</h3>
              <p className="mt-4 leading-7 text-[#65716d]">Artesanías, producción local, gastronomía y expresiones culturales.</p>
            </motion.article>
            <motion.article {...reveal} transition={{ duration: 0.65, delay: 0.2 }} className="rounded-[1.5rem] bg-[#f1bf62] p-7 text-[#163c32] lg:col-span-3 lg:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Cada semana</p>
              <CalendarDays className="mt-16 size-9" />
              <h3 className="mt-8 font-display text-4xl">Feria en la plaza</h3>
              <p className="mt-4 leading-7 text-[#294a40]">Miércoles y sábados en Plaza San Martín. Comprá local y conversá con sus hacedores.</p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div {...reveal} className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] bg-[#ddd] lg:col-span-7">
              <img
                src="https://res.cloudinary.com/dwkdclfwe/image/upload/v1793120440/images_xsi1em.jpg"
                alt="Pescado asado, sabor típico del litoral"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-28 text-white">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f1bf62]">A la vera del Bermejo</span>
                <p className="mt-3 font-display text-4xl md:text-5xl">Pescado de río </p>
              </div>
            </motion.div>
            <motion.div {...reveal} transition={{ duration: 0.65, delay: 0.1 }} className="lg:col-span-4 lg:col-start-9">
              <UtensilsCrossed className="size-8 text-[#c85535]" />
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-[#a13f27]">Sabores de encuentro</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-[#163c32] md:text-6xl">La mesa también cuenta historias.</h2>
              <p className="mt-6 leading-7 text-[#65716d]">Parrillas, restaurantes y rotiserías sirven una cocina en diálogo constante con Paraguay y el Litoral.</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Mbejú", "Sopa paraguaya", "Chipá guazú", "Empanadas", "Pacú"].map((food) => (
                  <span key={food} className="rounded-full border border-[#bdc8c2] px-4 py-2 text-sm text-[#294a40]">
                    {food}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#fffaf1] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <SectionHeader
            eyebrow="Quedate un poco más"
            title="Dormir cerca de la naturaleza."
            intro="Alternativas para una noche de paso, una escapada familiar o una travesía en casa rodante."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: BedDouble, name: "Hoteles", note: "Servicios urbanos" },
              { icon: Heart, name: "Hospedajes", note: "Atención familiar" },
              { icon: Landmark, name: "Bungalows", note: "Dentro del camping" },
              { icon: TentTree, name: "Camping", note: "Quinchos y parrillas" },
              { icon: Car, name: "Rodantes", note: "Sector acondicionado" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group min-h-52 rounded-[1.25rem] border border-[#d8d2c5] bg-white p-6 transition hover:-translate-y-1 hover:border-[#c85535]"
              >
                <item.icon className="size-7 text-[#c85535]" />
                <p className="mt-16 font-display text-3xl text-[#163c32]">{item.name}</p>
                <p className="mt-2 text-sm text-[#78827e]">{item.note}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#78827e]">Consultá disponibilidad, tarifas y condiciones directamente con cada prestador antes de viajar.</p>
        </div>
      </section>

      <section id="llegar" className="bg-[#102f28] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <SectionHeader
            eyebrow="Cómo llegar"
            title="El camino también es parte del viaje."
            intro="El Colorado está conectado por las rutas provinciales 1, 3 y 90, y por el Puente Libertad."
            light
          />
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#d9e0d8] lg:col-span-7">
              <iframe
                title="Mapa de El Colorado, Formosa"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-59.47%2C-26.38%2C-59.27%2C-26.23&layer=mapnik&marker=-26.3089%2C-59.3722"
                className="h-[430px] w-full border-0 grayscale-[15%]"
                loading="lazy"
              />
              <a
                href="https://www.openstreetmap.org/?mlat=-26.3089&mlon=-59.3722#map=12/-26.3089/-59.3722"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between bg-[#f1bf62] px-6 py-4 font-semibold text-[#163c32] transition hover:bg-white"
              >
                Abrir mapa completo <Navigation className="size-5" />
              </a>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-x-auto pb-2">
                <div className="min-w-[460px] border-t border-white/20">
                  {routes.map((route) => (
                    <div key={route.city} className="grid grid-cols-[1.3fr_.8fr_1fr] items-center border-b border-white/20 py-4">
                      <div>
                        <p className="font-display text-2xl">{route.city}</p>
                        <p className="mt-1 text-xs text-white/50">{route.note}</p>
                      </div>
                      <p className="font-mono text-xs text-[#f1bf62]">{route.distance}</p>
                      <p className="text-sm text-white/70">{route.time}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-[1.25rem] border border-white/20 bg-white/5 p-6">
                <div className="flex gap-4">
                  <Bus className="mt-1 size-6 shrink-0 text-[#f1bf62]" />
                  <div>
                    <p className="font-display text-2xl">Sin aeropuerto propio</p>
                    <p className="mt-2 text-sm leading-6 text-white/65">Los aeropuertos más cercanos son El Pucú, en Formosa, y Resistencia. Desde la capital formoseña hay colectivos y minibuses.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3e7d2] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <SectionHeader eyebrow="Historia & símbolo" title="Tres pilares, una identidad." />
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="relative border-l border-[#bcae96] pl-8 md:pl-12">
                {[
                  ["1936", "Fundación", "El 11 de febrero comienza formalmente la historia de la ciudad."],
                  ["1958", "Puente Libertad", "La obra conecta territorios y se convierte en emblema de El Colorado."],
                  ["Hoy", "Destino en desarrollo", "El parque acuático impulsa una nueva etapa turística para la región."],
                ].map(([year, title, copy]) => (
                  <motion.div key={year} {...reveal} className="relative pb-12 last:pb-0">
                    <span className="absolute -left-[2.35rem] top-1 size-3 rounded-full bg-[#c85535] ring-8 ring-[#f3e7d2] md:-left-[3.35rem]" />
                    <p className="font-mono text-xs tracking-wider text-[#a13f27]">{year}</p>
                    <h3 className="mt-2 font-display text-4xl text-[#163c32]">{title}</h3>
                    <p className="mt-3 max-w-xl leading-7 text-[#65716d]">{copy}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.aside {...reveal} className="rounded-[1.5rem] bg-[#163c32] p-8 text-white lg:col-span-5 lg:p-10">
              <Landmark className="size-9 text-[#f1bf62]" />
              <p className="mt-12 font-display text-3xl leading-10">Cada pilar del puente representa una raíz de la comunidad.</p>
              <div className="mt-8 space-y-4">
                {["Pueblos originarios · wichí y qom", "Inmigrantes · entre ellos ucranianos", "Criollos · cultura del territorio"].map((item, index) => (
                  <div key={item} className="flex items-center gap-4 border-t border-white/15 pt-4">
                    <span className="font-mono text-xs text-[#f1bf62]">0{index + 1}</span>
                    <span className="text-sm text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section id="datos" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <SectionHeader
            eyebrow="Antes de salir"
            title="Datos útiles para viajar mejor."
            intro="El clima subtropical cálido exige planificar con atención, especialmente durante el verano."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ThermometerSun, title: "Hasta 45 °C", copy: "En verano, llevá agua, protector solar, sombrero y ropa liviana." },
              { icon: Sun, title: "Mejor época", copy: "Otoño y primavera ofrecen temperaturas amables para naturaleza y pesca." },
              { icon: Waves, title: "Lluvias intensas", copy: "Pueden dificultar los accesos. Revisá el estado de rutas antes de salir." },
              { icon: ShieldCheck, title: "Servicios cerca", copy: "Hospital, farmacias, cajeros, estaciones de servicio y terminal." },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                {...reveal}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[1.25rem] border border-border bg-card p-6"
              >
                <item.icon className="size-7 text-[#c85535]" />
                <h3 className="mt-12 font-display text-3xl text-[#163c32]">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-[#65716d]">{item.copy}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Fuel, label: "Estaciones de servicio" },
              { icon: Hospital, label: "Hospital local" },
              { icon: Compass, label: "Terminal de ómnibus" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 rounded-full bg-[#e9efeb] px-5 py-3 text-sm font-medium text-[#294a40]">
                <item.icon className="size-4 text-[#c85535]" /> {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf1] py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#a13f27]">Postales del destino</p>
              <h2 className="mt-4 font-display text-5xl text-[#163c32] md:text-7xl">Mirar. Respirar. Volver.</h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button onClick={() => moveGallery(-1)} className="grid size-12 place-items-center rounded-full border border-[#bfc8c3] transition hover:bg-[#163c32] hover:text-white" aria-label="Imagen anterior">
                <ChevronLeft className="size-5" />
              </button>
              <button onClick={() => moveGallery(1)} className="grid size-12 place-items-center rounded-full border border-[#bfc8c3] transition hover:bg-[#163c32] hover:text-white" aria-label="Imagen siguiente">
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>
          <motion.div key={galleryIndex} initial={{ opacity: 0.4, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative h-[520px] overflow-hidden rounded-[1.5rem] bg-[#d8ddd9] md:h-[680px]">
            <img src={gallery[galleryIndex].src} alt={gallery[galleryIndex].alt} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white md:p-10">
              <p className="font-display text-4xl md:text-6xl">{gallery[galleryIndex].label}</p>
              <p className="font-mono text-xs">0{galleryIndex + 1} / 0{gallery.length}</p>
            </div>
          </motion.div>
          <div className="mt-4 flex gap-2 sm:hidden">
            <button onClick={() => moveGallery(-1)} className="grid size-12 flex-1 place-items-center rounded-full border border-[#bfc8c3]" aria-label="Imagen anterior"><ChevronLeft className="size-5" /></button>
            <button onClick={() => moveGallery(1)} className="grid size-12 flex-1 place-items-center rounded-full border border-[#bfc8c3]" aria-label="Imagen siguiente"><ChevronRight className="size-5" /></button>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative bg-[#c85535] py-20 text-white md:py-28">
        <div className="absolute right-[-8rem] top-[-8rem] size-[30rem] rounded-full border border-white/15" />
        <div className="absolute right-[-2rem] top-[-2rem] size-[18rem] rounded-full border border-white/15" />
        <div className="relative mx-auto max-w-[1280px] px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-orange-100">Tu próxima escapada empieza acá</p>
              <h2 className="mt-5 max-w-4xl font-display text-6xl leading-[0.9] tracking-tight md:text-8xl">
                Descubrí la perla escondida del sur formoseño.
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="leading-7 text-white/80">Para horarios, tarifas y disponibilidad actualizada, consultá los canales oficiales de Cultura y Turismo de la Municipalidad de El Colorado.</p>
              <a
                href="https://wa.me/?text=Hola%2C%20quiero%20informaci%C3%B3n%20tur%C3%ADstica%20sobre%20El%20Colorado%2C%20Formosa"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#f1bf62] px-6 py-3.5 font-semibold text-[#163c32] transition hover:bg-white"
              >
                Consultar por WhatsApp <MessageCircle className="size-5" />
              </a>
              <p className="mt-4 text-xs text-white/55">El canal permite elegir un contacto antes de enviar el mensaje.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#102f28] px-5 py-12 text-white md:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-10 border-b border-white/15 pb-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-4">
                <span className="grid size-16 place-items-center overflow-hidden rounded-full border-2 border-white bg-white">
                  <ImageWithFallback
                    src={elColoradoLogo}
                    alt="Logo de El Colorado, Formosa"
                    className="size-full scale-[1.35] object-contain"
                  />
                </span>
                <div>
                  <p className="font-display text-2xl">El Colorado</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">La Perla del Sur</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#f1bf62]">Ubicación</p>
              <p className="mt-3 text-sm leading-6 text-white/65">Departamento Pirané<br />Formosa, Argentina</p>
            </div>
            <div className="md:col-span-4">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[#f1bf62]">Trabajo académico</p>
              <p className="mt-3 text-sm leading-6 text-white/65">Grupo 20 · Geografía y Destinos Turísticos de Argentina. Sitio informativo con fines académicos.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 font-mono text-[9px] uppercase tracking-wider text-white/40 md:flex-row md:items-center md:justify-between">
            <p>Fuentes: Censo 2022 · Diagnóstico turístico Grupo 20</p>
            <p>Fotos ilustrativas · Verificar datos antes de viajar</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/?text=Hola%2C%20quiero%20informaci%C3%B3n%20tur%C3%ADstica%20sobre%20El%20Colorado%2C%20Formosa"
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar por WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#1f8f5f] text-white shadow-[0_12px_30px_rgba(16,47,40,.28)] transition hover:-translate-y-1 hover:bg-[#18764e]"
      >
        <MessageCircle className="size-6" />
      </a>
    </main>
  );
}
