import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Wrench, Package } from "lucide-react";
import heroImg from "@/assets/hero-pallets.jpg";
import euroImg from "@/assets/product-euro.jpg";
import plasticImg from "@/assets/product-plastic.jpg";
import bananaImg from "@/assets/product-banana.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Поддоны.dp — Премиум поддоны в Днепре" },
      {
        name: "description",
        content:
          "Деревянные поддоны 1200×800 и 1200×1000, пластиковые и банановые ящики. Безупречная репутация с 2015 года.",
      },
      { property: "og:title", content: "Поддоны.dp — Премиум поддоны в Днепре" },
      {
        property: "og:description",
        content: "Розничные и оптовые поставки поддонов и ящиков по всей Украине.",
      },
    ],
  }),
  component: HomePage,
});

const advantages = [
  {
    icon: ShieldCheck,
    title: "Гарантия качества",
    text: "Строгий отбор и сортировка перед каждой отгрузкой.",
  },
  {
    icon: Truck,
    title: "Доставка по Украине",
    text: "Работаем по Днепру и всей стране, оперативные сроки.",
  },
  {
    icon: Wrench,
    title: "Ремонт и переработка",
    text: "Восстанавливаем поддоны, продлеваем срок службы.",
  },
  {
    icon: Package,
    title: "Розница и опт",
    text: "Гибкие условия для бизнеса и частных заказов.",
  },
];

const products = [
  { img: euroImg, tag: "EUR / EPAL", title: "Поддон 1200×800" },
  { img: plasticImg, tag: "Прочные · Гигиеничные", title: "Пластиковые ящики" },
  { img: bananaImg, tag: "Лёгкие · Вместительные", title: "Банановые ящики" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Премиум склад деревянных поддонов в Днепре"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
          <div className="max-w-2xl">
            <div className="eyebrow mb-8">· Поддоны · Днепр · с 2015 ·</div>
            <h1 className="font-display text-6xl md:text-8xl leading-[1.02] mb-8">
              Поддоны
              <br />
              премиум <span className="italic-display">класса</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Деревянные поддоны 1200×800 и 1200×1000, пластиковые и банановые ящики. Розничные и
              оптовые поставки с безупречной репутацией.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-primary-foreground text-xs tracking-[0.3em] uppercase shadow-[var(--shadow-gold)] hover:shadow-lg transition-all"
              >
                Каталог
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contacts"
                className="inline-flex items-center px-8 py-4 border border-[var(--gold)]/50 text-[var(--gold)] text-xs tracking-[0.3em] uppercase hover:bg-[var(--gold)]/10 transition-all"
              >
                Связаться
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[var(--gold)]/60 to-transparent" />
      </section>

      {/* WHY US */}
      <section className="py-28 bg-[var(--gradient-section)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-6">Почему мы</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Стабильность, <span className="italic-display">отточенная</span> годами
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Мы строим долгосрочные отношения с клиентами через качество, точность и внимание к
                каждой детали поставки.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/30">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="bg-background p-8 group hover:bg-card transition-colors"
              >
                <a.icon
                  size={28}
                  className="text-[var(--gold)] mb-6 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-display text-xl mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <div className="eyebrow mb-6">Каталог</div>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Избранная <span className="italic-display">продукция</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Главные позиции, которые ежедневно выбирают наши клиенты по всей Украине.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.title}
                to="/products"
                className="group block bg-card border border-border/60 overflow-hidden hover:border-[var(--gold)]/50 transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs tracking-[0.25em] uppercase text-[var(--gold)] mb-3">
                    {p.tag}
                  </div>
                  <h3 className="font-display text-2xl">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 text-[var(--gold)] text-xs tracking-[0.3em] uppercase border-b border-[var(--gold)]/50 pb-2 hover:border-[var(--gold)]"
            >
              Смотреть всю продукцию
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[oklch(0.15_0.03_155)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="eyebrow mb-6">Начнём сотрудничество</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
            Нужны поддоны или ящики <span className="italic-display">уже сегодня?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Оставьте заявку — рассчитаем стоимость и подготовим отгрузку оперативно.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-primary-foreground text-xs tracking-[0.3em] uppercase shadow-[var(--shadow-gold)] hover:shadow-lg transition-all"
          >
            Получить предложение
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
