import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { User, Phone, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — Поддоны.dp" },
      {
        name: "description",
        content: "Свяжитесь с нами: +380 97 492 2539, poddony.dp@gmail.com. Днепр, Украина.",
      },
      { property: "og:title", content: "Контакты — Поддоны.dp" },
      {
        property: "og:description",
        content: "Мы всегда на связи и готовы рассчитать стоимость и подготовить отгрузку.",
      },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Спасибо! Мы свяжемся с вами в течение дня.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <PageHeader
        eyebrow="Контакты"
        title={
          <>
            Свяжитесь <span className="italic-display">с нами</span>
          </>
        }
        description="Мы всегда на связи и готовы рассчитать стоимость, согласовать сроки и подготовить отгрузку."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
          {/* Info column */}
          <div className="space-y-6">
            <ContactCard eyebrow="Руководитель">
              <div className="flex items-center gap-3 text-lg">
                <User size={18} className="text-[var(--gold)]" />
                Мавлюд Исаев
              </div>
              <a
                href="tel:+380974922539"
                className="flex items-center gap-3 text-foreground hover:text-[var(--gold)] mt-3"
              >
                <Phone size={16} className="text-[var(--gold)]" />
                +380 97 492 2539
              </a>
            </ContactCard>

            <ContactCard eyebrow="Электронная почта">
              <a
                href="mailto:poddony.dp@gmail.com"
                className="flex items-center gap-3 hover:text-[var(--gold)]"
              >
                <Mail size={16} className="text-[var(--gold)]" />
                poddony.dp@gmail.com
              </a>
              <a
                href="mailto:mavlud.isaev@ukr.net"
                className="flex items-center gap-3 hover:text-[var(--gold)] mt-3"
              >
                <Mail size={16} className="text-[var(--gold)]" />
                mavlud.isaev@ukr.net
              </a>
            </ContactCard>

            <ContactCard eyebrow="Местоположение">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--gold)] mt-1" />
                <div>
                  <div className="text-lg font-display">Днепр</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Днепропетровская область, Украина
                  </div>
                </div>
              </div>
            </ContactCard>
          </div>

          {/* Form */}
          <div className="bg-card border border-border/60 p-8 md:p-10">
            <div className="eyebrow mb-4">Оставить заявку</div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-8">
              Напишите нам — <span className="italic-display">ответим в течение дня</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Имя" name="name" type="text" required />
                <Field label="Телефон" name="phone" type="tel" required />
              </div>
              <Field
                label="Сообщение"
                name="message"
                textarea
                placeholder="Какие поддоны или ящики вас интересуют, объём, сроки..."
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-primary-foreground text-xs tracking-[0.3em] uppercase shadow-[var(--shadow-gold)] disabled:opacity-60"
              >
                {sending ? "Отправка..." : "Отправить"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border/60 p-7">
      <div className="eyebrow mb-4">{eyebrow}</div>
      <div className="text-foreground">{children}</div>
    </div>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  placeholder?: string;
};

function Field({ label, name, type = "text", textarea, required, placeholder }: FieldProps) {
  const baseClass =
    "w-full bg-transparent border-0 border-b border-border focus:border-[var(--gold)] outline-none py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors";
  return (
    <label className="block">
      <span className="eyebrow block mb-2">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          required={required}
          placeholder={placeholder}
          className={baseClass + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
    </label>
  );
}
