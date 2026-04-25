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

type ContactPerson = {
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
  whatsapp?: string; // digits only, no +
  telegram?: string; // digits only, no +
  viber?: string; // digits with +
};

const people: ContactPerson[] = [
  {
    name: "Мавлуд Ісаєв",
    role: "Керівник",
    phone: "+380974922539",
    phoneDisplay: "+380 97 492 25 39",
    whatsapp: "380974922539",
    telegram: "380974922539",
    viber: "+380974922539",
  },
  {
    name: "Севда Ісаєва",
    role: "Менеджер",
    phone: "+380686692168",
    phoneDisplay: "+380 68 669 21 68",
    whatsapp: "380686692168",
    telegram: "380686692168",
    viber: "+380686692168",
  },
  {
    name: "Ільяз Ісаєв",
    role: "Менеджер",
    phone: "+380668022091",
    phoneDisplay: "+380 66 802 20 91",
    whatsapp: "380668022091",
  },
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
          {people.map((p) => (
            <ContactCard key={p.phone} eyebrow={p.role}>
              <div className="flex items-center gap-3 text-lg">
                <User size={18} className="text-[var(--gold)]" />
                {p.name}
              </div>
              <a
                href={`tel:${p.phone}`}
                className="flex items-center gap-3 text-foreground hover:text-[var(--gold)] mt-3"
              >
                <Phone size={16} className="text-[var(--gold)]" />
                {p.phoneDisplay}
              </a>
              <div className="flex flex-wrap gap-3 mt-5">
                {p.whatsapp && (
                  <a
                    href={`https://wa.me/${p.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${p.name}`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border/60 hover:border-[var(--gold)]/60 text-xs tracking-[0.25em] uppercase transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    WhatsApp
                  </a>
                )}
                {p.viber && (
                  <a
                    href={`viber://chat?number=${encodeURIComponent(p.viber)}`}
                    aria-label={`Viber ${p.name}`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border/60 hover:border-[var(--gold)]/60 text-xs tracking-[0.25em] uppercase transition-colors"
                  >
                    <ViberIcon className="w-4 h-4 text-[#7360F2]" />
                    Viber
                  </a>
                )}
                {p.telegram && (
                  <a
                    href={`https://t.me/+${p.telegram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Telegram ${p.name}`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border/60 hover:border-[var(--gold)]/60 text-xs tracking-[0.25em] uppercase transition-colors"
                  >
                    <TelegramIcon className="w-4 h-4 text-[#229ED9]" />
                    Telegram
                  </a>
                )}
              </div>
            </ContactCard>
          ))}

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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}
