import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import euroImg from "@/assets/product-pallet-luxury.png";
import finImg from "@/assets/product-fin.jpg";
import plasticImg from "@/assets/product-plastic.jpg";
import bananaImg from "@/assets/product-banana-luxury.png";
import { usePageMeta } from "@/hooks/use-page-meta";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
});

const pageMeta = [
  { title: "Продукція — Піддони.dp" },
  {
    name: "description",
    content:
      "Дерев'яні піддони 1200×800 та 1200×1000, пластикові ящики, бананові ящики. Повний асортимент.",
  },
  { property: "og:title", content: "Продукція — Піддони.dp" },
  {
    property: "og:description",
    content: "Повний асортимент піддонів і ящиків для логістики, торгівлі та приватних замовлень.",
  },
  { property: "og:image", content: "/og-image.jpg" },
  { name: "twitter:image", content: "/og-image.jpg" },
];

const products = [
  {
    img: euroImg,
    tag: "EUR · EPAL",
    title: (
      <>
        Дерев'яний піддон <span className="italic-display">1200 × 800</span>
      </>
    ),
    desc: "Стандарт європейського зразка. Ідеальний для логістики, складів і торговельних мереж.",
    features: ["Вантажопідйомність до 1500 кг", "Сорт 1, 2 і 3", "Нові та б/в в наявності"],
  },
  {
    img: finImg,
    tag: "FIN · промисловий",
    title: (
      <>
        Дерев'яний піддон <span className="italic-display">1200 × 1000</span>
      </>
    ),
    desc: "Фінський формат для великогабаритних вантажів і нестандартної упаковки.",
    features: ["Посилена конструкція", "До 2000 кг навантаження", "Суха, оброблена деревина"],
  },
  {
    img: plasticImg,
    tag: "Гігієна · Довговічність",
    title: (
      <>
        Пластикові <span className="italic-display">ящики</span>
      </>
    ),
    desc: "Міцні пластикові ящики для харчових, фармацевтичних і складських задач.",
    features: ["Багаторазове використання", "Легке миття", "Різні розміри"],
  },
  {
    img: bananaImg,
    tag: "Легкі · Місткі",
    title: (
      <>
        Бананові <span className="italic-display">ящики</span>
      </>
    ),
    desc: "Картонні ящики з-під бананів — економічне рішення для переїзду та зберігання.",
    features: ["Міцний подвійний картон", "Зручні ручки", "Великий об'єм"],
  },
];

function ProductsPage() {
  usePageMeta(pageMeta);
  return (
    <>
      <PageHeader
        eyebrow="Каталог продукції"
        title={
          <>
            Піддони та ящики <span className="italic-display">преміум-рівня</span>
          </>
        }
        description="Повний асортимент для логістики, торгівлі та приватних замовлень. Роздріб і опт."
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
                  <span className="text-sm text-muted-foreground">Ціна за запитом</span>
                  <Link
                    to="/contacts"
                    className="inline-flex items-center px-7 py-3 border border-[var(--gold)]/60 text-[var(--gold)] text-xs tracking-[0.3em] uppercase hover:bg-[var(--gold)] hover:text-primary-foreground transition-all"
                  >
                    Дізнатися ціну
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
