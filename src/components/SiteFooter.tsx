import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-[oklch(0.14_0.03_155)]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-sm bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-primary-foreground font-display">
              P
            </div>
            <div>
              <div className="font-display text-base">
                Поддоны<span className="italic-display">.dp</span>
              </div>
              <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                Premium · Dnipro
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Деревянные и пластиковые поддоны, банановые ящики. Розница и опт по всей Украине с 2015
            года.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4">Навигация</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-[var(--gold)]">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-muted-foreground hover:text-[var(--gold)]">
                Продукция
              </Link>
            </li>
            <li>
              <Link to="/cooperation" className="text-muted-foreground hover:text-[var(--gold)]">
                Сотрудничество
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-muted-foreground hover:text-[var(--gold)]">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4">Контакты</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Днепр, Украина</li>
            <li>
              <a href="tel:+380974922539" className="hover:text-[var(--gold)]">
                +380 97 492 2539
              </a>
            </li>
            <li>
              <a href="mailto:poddony.dp@gmail.com" className="hover:text-[var(--gold)]">
                poddony.dp@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Поддоны.dp. Все права защищены.</div>
          <div className="tracking-[0.2em] uppercase">Premium quality since 2015</div>
        </div>
      </div>
    </footer>
  );
}
