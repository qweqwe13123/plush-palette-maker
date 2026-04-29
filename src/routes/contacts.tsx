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
  role: string;
  phone: string;
  phoneDisplay: string;
  whatsapp?: string; // digits only, no +
  telegram?: string; // digits only, no +
  viber?: string; // digits with +
};

const people: ContactPerson[] = [
  {
    role: "Керівник",
    phone: "+380974922539",
    phoneDisplay: "+380 97 492 25 39",
    whatsapp: "380974922539",
    telegram: "380974922539",
    viber: "+380974922539",
  },
  {
    role: "Менеджер",
    phone: "+380668022091",
    phoneDisplay: "+380 66 802 20 91",
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
              <a
                href={`tel:${p.phone}`}
                className="flex items-center gap-3 text-foreground hover:text-[var(--gold)]"
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
                    aria-label="WhatsApp"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border/60 hover:border-[var(--gold)]/60 text-xs tracking-[0.25em] uppercase transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                    WhatsApp
                  </a>
                )}
                {p.viber && (
                  <a
                    href={`viber://chat?number=${encodeURIComponent(p.viber)}`}
                    aria-label="Viber"
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
                    aria-label="Telegram"
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

function ViberIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.4 0C9.473.028 5.333.344 3.018 2.467 1.297 4.187.693 6.7.63 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602 1.17c.79.25 1.24-.5 1.99-1.3l1.4-1.58c3.85.32 6.81-.42 7.15-.53.78-.25 5.2-.82 5.92-6.69.74-6.05-.36-9.87-2.34-11.6l-.01-.01C20.24 1.66 17.27.04 10.61 0M3.5 14.62c-.45-1.27-.65-2.79-.7-4.21-.05-3.1.5-5.13 1.83-6.5 1.93-1.78 5.49-2.05 7.1-2.07 5.6.02 8.06 1.36 9.31 2.5 1.7 1.43 2.55 4.85 1.93 9.83-.59 4.9-4.18 5.21-4.84 5.42-.28.09-2.86.74-6.13.52 0 0-2.43 2.94-3.19 3.71-.12.12-.26.17-.35.15-.13-.04-.16-.19-.16-.41l.02-4.04C2.92 18.18 3.5 14.62 3.5 14.62m9.74-9.65c-.34-.01-.34.51 0 .52 2.6.02 4.74 1.79 4.76 5.04 0 .35.52.35.52 0v-.01c-.03-3.5-2.36-5.53-5.28-5.55m3.42 4.6c-.01.34.51.36.52.01.04-1.96-1.19-3.57-3.5-3.74-.34-.02-.38.5-.04.52 2 .14 3.06 1.49 3.02 3.21M16 12.4c-.45-.25-.91-.09-1.1.16l-.4.51c-.2.25-.58.22-.58.22-2.78-.71-3.52-3.52-3.52-3.52s-.03-.39.22-.58l.51-.4c.25-.19.41-.65.16-1.1-.66-1.16-1.11-1.56-1.34-1.87-.24-.3-.6-.36-.97-.16h-.01c-.77.43-1.62 1.27-1.34 2.13.46 1.45 1.16 4.49 4.04 6.79 1.35 1.08 3.5 2.19 4.41 2.45h.01c.85.28 1.69-.57 2.12-1.34v-.01c.2-.37.14-.73-.16-.97-.31-.23-.71-.68-1.87-1.34M14.7 7.66c1.1.06 1.62.62 1.67 1.77.02.34.55.32.53-.02-.06-1.5-.85-2.34-2.19-2.41-.34-.03-.36.49-.01.51"/>
    </svg>
  );
}
