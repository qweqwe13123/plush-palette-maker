import { createFileRoute } from "@tanstack/react-router";
import { User, Phone, Mail, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { usePageMeta } from "@/hooks/use-page-meta";

export const Route = createFileRoute("/contacts")({
  component: ContactsPage,
});

const pageMeta = [
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
];

function ContactsPage() {
  usePageMeta(pageMeta);
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
        <div className="mx-auto max-w-3xl px-6 space-y-6">
          <ContactCard eyebrow="Керівник">
            <div className="flex items-center gap-3 text-lg">
              <User size={18} className="text-[var(--gold)]" />
              Мавлуд Ісаєв
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
