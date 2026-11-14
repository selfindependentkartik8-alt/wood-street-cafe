
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Menu as MenuIcon,
  X,
  Coffee,
  Leaf,
  Heart,
  Star,
} from "lucide-react";

const menuGroups = [
  {
    name: "Breakfast & Brunch",
    note: "For slow mornings and long conversations.",
    items: [
      ["Choco-chip pancakes", "Fluffy, golden and generously chocolatey"],
      ["French toast", "A sweet, comforting café classic"],
      ["Eggs Kejriwal", "A much-loved savoury breakfast favourite"],
    ],
  },
  {
    name: "From the Hills & Beyond",
    note: "Local comfort meets flavours from around the world.",
    items: [
      ["Himachali Siddu", "A taste of the mountains"],
      ["Pan-fried tandoori momos", "Smoky, crisp and full of flavour"],
      ["Chicken momos", "A comforting favourite"],
    ],
  },
  {
    name: "Pizza, Pasta & More",
    note: "A little Italian, Asian and Middle Eastern inspiration.",
    items: [
      ["Fresh pizza", "Made for sharing"],
      ["Pasta favourites", "A comforting plate for any time"],
      ["Global comfort food", "A varied selection with vegetarian choices"],
    ],
  },
  {
    name: "Coffee, Tea & Chocolate",
    note: "Warm cups for cool Shimla days.",
    items: [
      ["Specialty coffee", "For your everyday coffee ritual"],
      ["Mocha fudge", "Rich, chocolatey and indulgent"],
      ["Hot chocolate", "A cosy classic"],
      ["Tea selection", "Take a moment and choose your favourite"],
    ],
  },
];

const photos = [
  {
    src: "/images/cafe-mural.jpg",
    alt: "Wood Street Cafe's hand-painted Shimla mural",
    label: "A little Shimla on the walls",
  },
  {
    src: "/images/noodles.jpg",
    alt: "A noodle dish served at Wood Street Cafe",
    label: "Flavours worth coming back for",
  },
  {
    src: "/images/french-toast.jpg",
    alt: "French toast at Wood Street Cafe",
    label: "Something sweet",
  },
  {
    src: "/images/cafe-counter.jpg",
    alt: "Wood Street Cafe's warm wooden counter",
    label: "Made for lingering",
  },
];

const favourites = [
  {
    title: "Choco-chip pancakes",
    sub: "A sweet start",
    src: "/images/french-toast.jpg",
    alt: "A sweet breakfast dish",
  },
  {
    title: "Himachali comfort",
    sub: "A taste of the hills",
    src: "/images/noodles.jpg",
    alt: "A savoury cafe dish",
  },
  {
    title: "Coffee & conversations",
    sub: "Your everyday ritual",
    src: "/images/cafe-counter.jpg",
    alt: "Wood Street Cafe counter",
  },
  {
    title: "A cosy corner",
    sub: "Make yourself at home",
    src: "/images/cafe-front-day.jpg",
    alt: "Wood Street Cafe exterior",
  },
];

const reviews = [
  {
    name: "Malachi W",
    date: "November 2024",
    text: "A memorable little café with a great choice of food and drinks. The guest particularly appreciated the hardworking team and excellent service.",
  },
  {
    name: "Ankita152014",
    date: "May 2024",
    text: "A lovely vibe, enjoyable food, good coffee and a soothing ambience. The pizzas and churros were among the recommended choices.",
  },
  {
    name: "PATOUDULUB",
    date: "October 2023",
    text: "A pleasant café in Lakkar Bazaar, appreciated for its décor, music, coffee and welcoming atmosphere.",
  },
];

const experiences = [
  { Icon: Coffee, label: "Coffee, tea and cosy conversations" },
  { Icon: Leaf, label: "A laid-back, welcoming space" },
  { Icon: Heart, label: "A women-led café with a story" },
];

const links = [
  ["Our story", "#story"],
  ["Menu", "#menu"],
  ["The space", "#space"],
  ["Reviews", "#reviews"],
  ["Visit", "#visit"],
];

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#263D32] text-[#F4EFE6] selection:bg-[#B58A5A] selection:text-white">

      {/* NAVIGATION */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/15 bg-[#1D3027]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="text-[#F4EFE6]">
            <span className="block font-serif text-2xl tracking-wide">
              Wood Street Café<span className="text-[#D4AD78]">.</span>
            </span>
            <span className="mt-1 block text-[9px] uppercase tracking-[.34em] text-white/60">
              Shimla · Est. 2019
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs text-white/75 transition hover:text-[#D4AD78]"
              >
                {label}
              </a>
            ))}

            <a
              href="#visit"
              className="border border-[#D4AD78]/70 px-5 py-3 text-[10px] uppercase tracking-[.18em] text-[#F4EFE6] transition hover:bg-[#D4AD78] hover:text-[#263D32]"
            >
              Find us <ArrowUpRight className="ml-2 inline h-3 w-3" />
            </a>
          </nav>

          <button
            className="text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X /> : <MenuIcon />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#1D3027] px-6 py-4 lg:hidden">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-white/10 py-4 text-sm text-white/85"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-[720px] items-end bg-[#263D32] sm:min-h-[820px]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(15,30,22,.83),rgba(15,30,22,.40) 65%,rgba(15,30,22,.20)),url('/images/cafe-front-evening.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#263D32] via-transparent to-black/20" />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-44 sm:px-8 lg:px-12 lg:pb-20">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B58A5A]" />
              <span className="text-[10px] uppercase tracking-[.35em] text-[#E1C69F]">
                A cosy corner in the hills
              </span>
            </div>

            <h1 className="font-serif text-6xl leading-[.98] tracking-tight text-[#F4EFE6] sm:text-7xl md:text-8xl lg:text-[108px]">
              Good food.
              <br />
              <span className="italic text-[#D4AD78]">
                Warm stories.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/75 sm:text-base">
              A little rustic, a little worldly, and always welcoming.
              Step into Wood Street Café for comforting food, thoughtful
              coffee and the unmistakable charm of Shimla.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="bg-[#B58A5A] px-7 py-4 text-[10px] font-semibold uppercase tracking-[.2em] text-[#1D3027] transition hover:bg-[#D4B68E]"
              >
                Explore the menu
                <ArrowRight className="ml-3 inline h-4 w-4" />
              </a>

              <a
                href="#story"
                className="border border-white/40 px-7 py-4 text-[10px] uppercase tracking-[.2em] text-white transition hover:bg-white/10"
              >
                Our story
              </a>
            </div>
          </div>

          <div className="mt-24 flex items-center justify-between border-t border-white/20 pt-5">
            <p className="text-[9px] uppercase tracking-[.3em] text-white/55">
              Shimla · Good food · Good company
            </p>
            <a href="#story" aria-label="Scroll to story" className="text-white/75 hover:text-[#D4AD78]">
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="scroll-mt-10 bg-[#263D32] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#D4AD78]">
              A story rooted in Shimla
            </p>

            <h2 className="font-serif text-5xl leading-[1.08] text-[#F4EFE6] sm:text-6xl">
              A place to pause.
              <br />
              <span className="italic text-[#D4AD78]">A place to belong.</span>
            </h2>

            <div className="mt-8 h-px w-16 bg-[#B58A5A]" />

            <p className="mt-8 max-w-xl text-sm leading-8 text-white/70">
              Women-led and full of character, Wood Street Café brings
              together warm wooden details, deep green walls and
              hand-painted scenes inspired by Shimla. It is a space for
              unhurried breakfasts, solo coffee dates, catching up with
              friends or simply finding a quiet corner with a book.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/70">
              The menu takes inspiration from local Himachali comfort food
              and flavours from across the world, with plenty of
              vegetarian choices alongside café favourites.
            </p>

            <a
              href="#space"
              className="mt-8 inline-flex items-center border-b border-[#D4AD78] pb-2 text-[10px] uppercase tracking-[.2em] text-[#F4EFE6] transition hover:text-[#D4AD78]"
            >
              Take a look around
              <ArrowUpRight className="ml-3 h-4 w-4" />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#B58A5A]/70" />
            <img
              src="/images/cafe-mural.jpg"
              alt="Hand-painted Shimla scene inside Wood Street Cafe"
              className="relative h-[440px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute -bottom-6 -left-4 bg-[#1D3027] px-7 py-5 text-[#F4EFE6] shadow-xl">
              <p className="font-serif text-3xl italic">Stay a little.</p>
              <p className="mt-1 text-[9px] uppercase tracking-[.25em] text-white/60">
                There's no rush here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAVOURITES */}
      <section className="bg-[#263D32] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#D4AD78]">
                A few café favourites
              </p>
              <h2 className="font-serif text-5xl text-[#F4EFE6] sm:text-6xl">
                Little things to <span className="italic text-[#D4AD78]">love.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/65">
              From slow brunches to comforting local bites and a cup
              of something warm.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {favourites.map((item) => (
              <article key={item.title} className="group">
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[9px] uppercase tracking-[.25em] text-[#D4AD78]">
                  {item.sub}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-[#F4EFE6]">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="scroll-mt-10 bg-[#263D32] px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#D4AD78]">
              Something for every craving
            </p>
            <h2 className="font-serif text-5xl text-[#F4EFE6] sm:text-6xl">
              The <span className="italic text-[#D4AD78]">menu.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65">
              Local comfort, global inspiration and familiar favourites.
              Explore a few highlights from the Wood Street Café table.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-2">
            {menuGroups.map((group, i) => (
              <button
                key={group.name}
                onClick={() => setActiveMenu(i)}
                className={`border px-4 py-3 text-[9px] uppercase tracking-[.14em] transition duration-300 sm:px-5 sm:text-[10px] ${
                  activeMenu === i
                    ? "border-[#D4AD78] bg-[#D4AD78] text-[#263D32]"
                    : "border-white/20 bg-transparent text-white/75 hover:border-[#D4AD78] hover:text-[#D4AD78]"
                }`}
              >
                {group.name}
              </button>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-3xl border-y border-white/20">
            <div className="py-8 text-center">
              <h3 className="font-serif text-3xl text-[#F4EFE6]">
                {menuGroups[activeMenu].name}
              </h3>
              <p className="mt-2 text-xs text-[#D4AD78]">
                {menuGroups[activeMenu].note}
              </p>
            </div>

            {menuGroups[activeMenu].items.map(([name, description]) => (
              <div key={name} className="flex items-start justify-between gap-6 border-t border-white/10 py-6">
                <div>
                  <h4 className="font-serif text-xl text-[#F4EFE6]">{name}</h4>
                  <p className="mt-2 text-xs leading-6 text-white/60">{description}</p>
                </div>
                <span className="mt-1 text-[#D4AD78]">✳</span>
              </div>
            ))}
          </div>

          <p className="mt-7 text-center text-[9px] uppercase tracking-[.17em] text-white/50">
            Menu highlights · Please ask the café for current prices and availability
          </p>
        </div>
      </section>

      {/* SPACE */}
      <section id="space" className="scroll-mt-10 bg-[#263D32] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/images/cafe-counter.jpg"
              alt="Wooden counter and warm lighting at Wood Street Cafe"
              className="h-64 w-full object-cover sm:h-80"
            />
            <img
              src="/images/cafe-front-day.jpg"
              alt="Wood Street Cafe exterior"
              className="mt-10 h-64 w-full object-cover sm:h-80"
            />
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#D4AD78]">
              The Wood Street feeling
            </p>
            <h2 className="font-serif text-5xl leading-tight text-[#F4EFE6] sm:text-6xl">
              Come for the food.
              <br />
              <span className="italic text-[#D4AD78]">Stay for the atmosphere.</span>
            </h2>
            <p className="mt-7 text-sm leading-8 text-white/70">
              Look up at the woven ceiling, settle beneath the warm pendant
              lights and take in the hand-painted Shimla streetscape. Every
              corner has its own little character — whether you are here to
              read, talk or enjoy a meal.
            </p>

            <div className="mt-9 space-y-5">
              {experiences.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <Icon className="h-5 w-5 text-[#D4AD78]" />
                  <span className="text-sm text-white/75">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-[#263D32] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#D4AD78]">
                A glimpse inside
              </p>
              <h2 className="font-serif text-5xl text-[#F4EFE6] sm:text-6xl">
                Real corners.
                <br className="sm:hidden" /> <span className="italic">Real cravings.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/65">
              A peek at the place, the plates and the little details
              that make it Wood Street.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {photos.map((photo) => (
              <figure key={photo.src} className="group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72"
                  />
                </div>
                <figcaption className="mt-3 text-[9px] uppercase tracking-[.18em] text-[#D4AD78]">
                  {photo.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GUEST REVIEWS */}
      <section id="reviews" className="scroll-mt-10 bg-[#263D32] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#D4AD78]">
              Kind words from our guests
            </p>
            <h2 className="font-serif text-5xl text-[#F4EFE6] sm:text-6xl">
              Stories worth <span className="italic text-[#D4AD78]">sharing.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/65">
              A few impressions shared by guests who have visited
              Wood Street Café.
            </p>

            <div className="mt-7 flex items-center justify-center gap-1 text-[#D4AD78]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-2 text-sm text-[#F4EFE6]">
              <strong>4.7 / 5</strong>
              <span className="text-white/60"> · 15 Tripadvisor reviews</span>
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-col border border-white/15 bg-[#1D3027]/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-[#D4AD78]/70"
              >
                <span className="font-serif text-5xl text-[#D4AD78]">“</span>
                <p className="mt-2 flex-1 font-serif text-xl leading-8 text-[#F4EFE6]">
                  {review.text}
                </p>
                <div className="mt-8 border-t border-white/15 pt-5">
                  <p className="text-sm font-semibold text-[#F4EFE6]">{review.name}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-[#D4AD78]">
                    Tripadvisor · {review.date}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.tripadvisor.in/Restaurant_Review-g304552-d21315387-Reviews-Woodstreet_Cafe-Shimla_Shimla_District_Himachal_Pradesh.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center border border-[#D4AD78] px-7 py-4 text-[10px] uppercase tracking-[.18em] text-[#F4EFE6] transition hover:bg-[#D4AD78] hover:text-[#263D32]"
            >
              Read all reviews
              <ArrowUpRight className="ml-3 h-4 w-4" />
            </a>
          </div>

          <p className="mt-6 text-center text-[10px] leading-5 text-white/45">
            Review summaries are paraphrased from guest feedback on Tripadvisor.
            They are not direct quotations.
          </p>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="scroll-mt-10 bg-[#263D32] px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[.35em] text-[#D4AD78]">
              Your table is waiting
            </p>
            <h2 className="font-serif text-6xl leading-[1.02] text-[#F4EFE6] sm:text-7xl">
              Meet us
              <br />
              <span className="italic text-[#D4AD78]">in Shimla.</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-8 text-white/65">
              Drop by for a relaxed meal, a coffee break or a little
              time away from the rush. We look forward to welcoming you.
            </p>
          </div>

          <div className="space-y-9 border-t border-white/20 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
            <div className="flex gap-5">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#D4AD78]" />
              <div>
                <h3 className="font-serif text-2xl text-[#F4EFE6]">Find the café</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  Wood Street Café, Lakkar Bazaar, Shimla, Himachal Pradesh
                </p>
                <a
                  className="mt-3 inline-flex items-center text-[10px] uppercase tracking-[.18em] text-[#D4AD78] transition hover:text-white"
                  href="https://www.google.com/maps/search/?api=1&query=Wood+Street+Cafe+Lakkar+Bazaar+Shimla"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open map
                  <ArrowUpRight className="ml-2 h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <Coffee className="mt-1 h-5 w-5 shrink-0 text-[#D4AD78]" />
              <div>
                <h3 className="font-serif text-2xl text-[#F4EFE6]">A little note</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">
                  For the latest opening hours and table availability,
                  please check directly with the café.
                </p>
              </div>
            </div>

            <div className="border-t border-white/15 pt-7">
              <p className="text-[9px] uppercase tracking-[.25em] text-[#D4AD78]">
                Come as you are
              </p>
              <p className="mt-3 font-serif text-2xl italic text-[#F4EFE6]">
                Good food. Good company. Good memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#263D32] px-6 py-12 text-[#F4EFE6]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-9 sm:flex-row sm:items-center">
            <div>
              <a href="#top" className="font-serif text-3xl">
                Wood Street Café<span className="text-[#D4AD78]">.</span>
              </a>
              <p className="mt-2 text-[9px] uppercase tracking-[.3em] text-white/45">
                A cosy corner in the hills
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs text-white/60 transition hover:text-[#D4AD78]"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 pt-7 text-[10px] text-white/40 sm:flex-row">
            <p>© 2026 Wood Street Café. All rights reserved.</p>
            <p>
              Website concept by{" "}
              <span className="font-medium text-[#D4AD78]">KrishAIWorks</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}