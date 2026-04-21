import { createFileRoute, Link } from "@tanstack/react-router";
import { Wallet, Clock, Users, Hammer, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/cooperation")({
  head: () => ({
    meta: [
      { title: "Сотрудничество — Поддоны.dp" },
      {
        name: "description",
        content:
          "Открытые вакансии и B2B-партнёрство. Ремонт деревянных поддонов в Днепре, оптовые поставки.",
      },
      { property: "og:title", content: "Сотрудничество — Поддоны.dp" },
      {
        property: "og:description",
        content: "Присоединяйтесь к нашей команде или станьте оптовым партнёром.",
      },
    ],
  }),
  component: CooperationPage,
});

const perks = [
  {
    icon: Wallet,
    title: "Достойная оплата",
    text: "Сдельная и стабильная оплата труда — еженедельно или по согласованию.",
  },
  {
    icon: Clock,
    title: "Гибкий график",
    text: "Удобное рабочее время, возможна полная или частичная занятость.",
  },
  {
    icon: Users,
    title: "Дружный коллектив",
    text: "Опытные мастера, поддержка и обучение для новичков.",
  },
  {
    icon: Hammer,
    title: "Все инструменты",
    text: "Оборудование и расходники предоставляем — приходите и работайте.",
  },
];

function CooperationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Сотрудничество"
        title={
          <>
            Присоединяйтесь к <span className="italic-display">нашей команде</span>
          </>
        }
        description="Мы расширяем производство и приглашаем мастеров, которым близка работа с деревом."
      />

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          {/* Vacancy */}
          <div>
            <div className="eyebrow mb-5">Открытая вакансия</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              Мастера по ремонту <span className="italic-display">поддонов</span>
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-5">
              Производственный участок в Днепре приглашает на постоянную работу рабочих по ремонту и
              восстановлению деревянных поддонов. Мы ценим аккуратность, ответственность и
              стремление к качеству.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Опыт приветствуется, но не обязателен — обучим всему необходимому. Главное — желание
              работать руками и быть частью стабильной команды.
            </p>

            <div className="bg-card border border-border/60 p-8 mb-8">
              <h3 className="font-display text-xl mb-5">Обязанности</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Сортировка поступающих поддонов",
                  "Замена повреждённых досок и блоков",
                  "Сборка и укрепление конструкции",
                  "Поддержание порядка на рабочем месте",
                ].map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="text-[var(--gold)]">·</span> {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+380974922539"
                className="inline-flex items-center gap-3 px-7 py-3 bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-primary-foreground text-xs tracking-[0.3em] uppercase"
              >
                <Phone size={14} /> Позвонить
              </a>
              <Link
                to="/contacts"
                className="inline-flex items-center px-7 py-3 border border-[var(--gold)]/60 text-[var(--gold)] text-xs tracking-[0.3em] uppercase hover:bg-[var(--gold)]/10 transition-all"
              >
                Все контакты
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
          <div className="eyebrow mb-5">Партнёрам</div>
          <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
            Оптовые поставки и <span className="italic-display">B2B-партнёрство</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Регулярные отгрузки, индивидуальные условия и приоритетная логистика для торговых сетей,
            складов и производственных компаний. Свяжитесь с нами — обсудим формат сотрудничества.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center px-9 py-4 bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-primary-foreground text-xs tracking-[0.3em] uppercase shadow-[var(--shadow-gold)]"
          >
            Обсудить партнёрство
          </Link>
        </div>
      </section>
    </>
  );
}
