import { createFileRoute, Link } from "@tanstack/react-router";
import { Wallet, Clock, Users, Hammer, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { usePageMeta } from "@/hooks/use-page-meta";

export const Route = createFileRoute("/cooperation")({
  component: CooperationPage,
});

const pageMeta = [
  { title: "Співпраця — Піддони.dp" },
  {
    name: "description",
    content:
      "Відкриті вакансії та B2B-партнерство. Ремонт дерев'яних піддонів у Дніпрі, оптові постачання.",
  },
  { property: "og:title", content: "Співпраця — Піддони.dp" },
  {
    property: "og:description",
    content: "Приєднуйтесь до нашої команди або станьте оптовим партнером.",
  },
  { property: "og:image", content: "/og-image.jpg" },
  { name: "twitter:image", content: "/og-image.jpg" },
];

const perks = [
  {
    icon: Wallet,
    title: "Гідна оплата",
    text: "Відрядна та стабільна оплата праці — щотижня або за домовленістю.",
  },
  {
    icon: Clock,
    title: "Гнучкий графік",
    text: "Зручний робочий час, можлива повна або часткова зайнятість.",
  },
  {
    icon: Users,
    title: "Дружний колектив",
    text: "Досвідчені майстри, підтримка та навчання для новачків.",
  },
  {
    icon: Hammer,
    title: "Усі інструменти",
    text: "Обладнання та витратні матеріали надаємо — приходьте і працюйте.",
  },
];

function CooperationPage() {
  usePageMeta(pageMeta);
  return (
    <>
      <PageHeader
        eyebrow="Співпраця"
        title={
          <>
            Приєднуйтесь до <span className="italic-display">нашої команди</span>
          </>
        }
        description="Ми розширюємо виробництво і запрошуємо майстрів, яким близька робота з деревом."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          {/* Vacancy */}
          <div>
            <div className="eyebrow mb-5">Відкрита вакансія</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              Майстри з ремонту <span className="italic-display">піддонів</span>
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              Виробнича дільниця у Дніпрі запрошує на постійну роботу робітників з ремонту та
              відновлення дерев'яних піддонів. Ми цінуємо акуратність, відповідальність та
              прагнення до якості.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Досвід вітається, але не обов'язковий — навчимо всьому необхідному. Головне — бажання
              працювати руками і бути частиною стабільної команди.
            </p>

            <div className="bg-card border border-border/60 p-8 mb-8">
              <h3 className="font-display text-xl mb-5">Обов'язки</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Сортування піддонів, що надходять",
                  "Заміна пошкоджених дощок і блоків",
                  "Збірка та укріплення конструкції",
                  "Підтримання порядку на робочому місці",
                ].map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="text-[var(--gold)]">·</span> {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+380686692168"
                className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-primary-foreground text-xs tracking-[0.3em] uppercase"
              >
                <Phone size={14} /> Зателефонувати
              </a>
              <Link
                to="/contacts"
                className="inline-flex items-center px-7 py-3 border border-[var(--gold)]/60 text-[var(--gold)] text-xs tracking-[0.3em] uppercase hover:bg-[var(--gold)]/10 transition-all"
              >
                Усі контакти
              </Link>
            </div>
          </div>

          {/* Perks */}
          <div className="grid sm:grid-cols-2 gap-6 content-start lg:pt-20">
            {perks.map((p) => (
              <div
                key={p.title}
                className="bg-card border border-border/50 p-7 hover:border-[var(--gold)]/40 transition-colors"
              >
                <div className="w-11 h-11 mb-5 flex items-center justify-center border border-[var(--gold)]/40 text-[var(--gold)]">
                  <p.icon size={18} />
                </div>
                <h3 className="font-display text-lg mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B */}
      <section className="py-24 bg-[var(--gradient-section)] border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="eyebrow mb-5">Партнерам</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            Оптові постачання та <span className="italic-display">B2B-партнерство</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Регулярні відвантаження, індивідуальні умови та пріоритетна логістика для торговельних
            мереж, складів і виробничих компаній. Зв'яжіться з нами — обговоримо формат співпраці.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center px-9 py-4 bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-primary-foreground text-xs tracking-[0.3em] uppercase shadow-[var(--shadow-gold)]"
          >
            Обговорити партнерство
          </Link>
        </div>
      </section>
    </>
  );
}
