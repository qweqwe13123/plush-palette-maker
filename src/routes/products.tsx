import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import euroImg from "@/assets/product-euro.jpg";
import finImg from "@/assets/product-fin.jpg";
import plasticImg from "@/assets/product-plastic.jpg";
import bananaImg from "@/assets/product-banana.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Продукция — Поддоны.dp" },
      {
        name: "description",
        content:
          "Деревянные поддоны 1200×800 и 1200×1000, пластиковые ящики, банановые ящики. Полный ассортимент.",
      },
      { property: "og:title", content: "Продукция — Поддоны.dp" },
      {
        property: "og:description",
        content: "Полный ассортимент поддонов и ящиков для логистики, торговли и частных заказов.",
      },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    img: euroImg,
    tag: "EUR · EPAL",
    title: (
      <>
        Деревянный поддон <span className="italic-display">1200 × 800</span>
      </>
    ),
    desc: "Стандарт европейского образца. Идеален для логистики, складов и торговых сетей.",
    features: ["Грузоподъёмность до 1500 кг", "Сорт 1, 2 и 3", "Новые и б/у в наличии"],
  },
  {
    img: finImg,
    tag: "FIN · промышленный",
    title: (
      <>
        Деревянный поддон <span className="italic-display">1200 × 1000</span>
      </>
    ),
    desc: "Финский формат для крупногабаритных грузов и нестандартной упаковки.",
    features: ["Усиленная конструкция", "До 2000 кг нагрузки", "Сухая, обработанная древесина"],
  },
  {
    img: plasticImg,
    tag: "Гигиена · Долговечность",
    title: (
      <>
        Пластиковые <span className="italic-display">ящики</span>
      </>
    ),
    desc: "Прочные пластиковые ящики для пищевых, фармацевтических и складских задач.",
    features: ["Многоразовое использование", "Лёгкая мойка", "Различные размеры"],
  },
  {
    img: bananaImg,
    tag: "Лёгкие · Вместительные",
    title: (
      <>
        Банановые <span className="italic-display">ящики</span>
      </>
    ),
    desc: "Картонные ящики из-под бананов — экономичное решение для переезда и хранения.",
    features: ["Прочный двойной картон", "Удобные ручки", "Большой объём"],
  },
];

function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Каталог продукции"
        title={
          <>
            Поддоны и ящики <span className="italic-display">премиум-уровня</span>
          </>
        }
        description="Полный ассортимент для логистики, торговли и частных заказов. Розница и опт."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {products.map((p, i) => (
            <article
              key={i}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-square overflow-hidden bg-card">
                <img
                  src={p.img}
                  alt={typeof p.title === "string" ? p.title : "Продукт"}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[var(--gold)]/20" />
              </div>

              <div>
                <div className="eyebrow mb-5">{p.tag}</div>
                <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">{p.title}</h2>
                <div className="gold-divider mb-8" />
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">{p.desc}</p>
                <ul className="space-y-3 mb-10">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        size={18}
                        className="text-[var(--gold)] mt-0.5 shrink-0"
                        strokeWidth={1.5}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-6">
                  <span className="text-sm text-muted-foreground">Цена по запросу</span>
                  <Link
                    to="/contacts"
                    className="inline-flex items-center px-7 py-3 border border-[var(--gold)]/60 text-[var(--gold)] text-xs tracking-[0.3em] uppercase hover:bg-[var(--gold)] hover:text-primary-foreground transition-all"
                  >
                    Узнать цену
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
