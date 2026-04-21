import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { User, Phone, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакти — Піддони.dp" },
      {
        name: "description",
        content: "Зв'яжіться з нами: +380 97 492 2539, poddony.dp@gmail.com. Дніпро, Україна.",
      },
      { property: "og:title", content: "Контакти — Піддони.dp" },
      {
        property: "og:description",
        content: "Ми завжди на зв'язку та готові розрахувати вартість і підготувати відвантаження.",
      },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
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
      toast.success("Дякуємо! Ми зв'яжемося з вами протягом дня.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <PageHeader
        eyebrow="Контакти"
        title={
          <>
            Зв'яжіться <span className="italic-display">з нами</span>
          </>
        }
        description="Ми завжди на зв'язку та готові розрахувати вартість, узгодити терміни і підготувати відвантаження."
      />

      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
          {/* Info column */}
          <div className="space-y-6">
            <ContactCard eyebrow="Керівник">
              <div className="flex items-center gap-3 text-lg">
                <User size={18} className="text-[var(--gold)]" />
                Мавлюд Ісаєв
              </div>
              <a
                href="tel:+380974922539"
                className="flex items-center gap-3 text-foreground hover:text-[var(--gold)] mt-3"
              >
                <Phone size={16} className="text-[var(--gold)]" />
                +380 97 492 2539
              </a>
            </ContactCard>

            <ContactCard eyebrow="Електронна пошта">
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

            <ContactCard eyebrow="Місцезнаходження">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--gold)] mt-1" />
                <div>
                  <div className="text-lg font-display">Дніпро</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Дніпропетровська область, Україна
                  </div>
                </div>
              </div>
            </ContactCard>
          </div>

          {/* Form */}
          <div className="bg-card border border-border/60 p-8 md:p-10">
            <div className="eyebrow mb-4">Залишити заявку</div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-8">
              Напишіть нам — <span className="italic-display">відповімо протягом дня</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Ім'я" name="name" type="text" required />
                <Field label="Телефон" name="phone" type="tel" required />
              </div>
              <Field
                label="Повідомлення"
                name="message"
                textarea
                placeholder="Які піддони чи ящики вас цікавлять, обсяг, терміни..."
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-primary-foreground text-xs tracking-[0.3em] uppercase shadow-[var(--shadow-gold)] disabled:opacity-60"
              >
                {sending ? "Надсилання..." : "Надіслати"}
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
