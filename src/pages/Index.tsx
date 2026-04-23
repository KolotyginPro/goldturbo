import { ArrowRight, Bot, Zap, ShieldCheck, LineChart, Clock, Smartphone, Activity, Target, Layers, Sparkles, Send, MessageCircle, ChevronRight, BadgeCheck, TrendingUp, Wallet, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroRobot from "@/assets/hero-robot.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const SUPPORT_URL = "https://t.me/GoldTurboSupport";
const CHANNEL_URL = "https://t.me/GoldTurboForex";

const Index = () => {
  const { t } = useLanguage();

  const problemIcons = [Activity, Clock, ShieldCheck, Target];
  const solutionIcons = [Activity, Zap, Layers, LineChart];
  const howIcons = [Activity, Target, Zap, ShieldCheck, BadgeCheck];
  const advIcons = [Clock, TrendingUp, Wallet, Layers, LineChart, Smartphone];
  const copyIcons = [Lock, ShieldCheck, LineChart, Wallet];
  const whyIcons = [ShieldCheck, TrendingUp, Clock];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container flex h-16 items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-2 font-display font-extrabold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold-gradient text-primary-foreground shadow-gold">
              <Bot className="h-5 w-5" />
            </span>
            <span className="text-lg">
              GOLD<span className="text-gold-gradient">TURBO</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            <a href="#problem" className="transition-colors hover:text-primary">{t.nav.problem}</a>
            <a href="#solution" className="transition-colors hover:text-primary">{t.nav.solution}</a>
            <a href="#how" className="transition-colors hover:text-primary">{t.nav.how}</a>
            <a href="#copy" className="transition-colors hover:text-primary">{t.nav.copy}</a>
            <a href="#start" className="transition-colors hover:text-primary">{t.nav.start}</a>
            <a href="#instructions" className="transition-colors hover:text-primary">{t.nav.instructions}</a>
            <a href="#faq" className="transition-colors hover:text-primary">{t.nav.faq}</a>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button asChild variant="hero" size="sm">
              <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                <Send className="h-4 w-4" /> {t.nav.channelShort}
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold bg-card/50 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t.hero.badge}
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              {t.hero.title1}{" "}
              <span className="text-gold-gradient">{t.hero.titleGold}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                  {t.hero.ctaConnect} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={SUPPORT_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> {t.hero.ctaSupport}
                </a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/50 pt-8">
              {[
                { v: t.hero.stat1, l: t.hero.stat1l },
                { v: t.hero.stat2, l: t.hero.stat2l },
                { v: t.hero.stat3, l: t.hero.stat3l },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-extrabold text-gold-gradient md:text-3xl">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute inset-0 -z-10 animate-glow-pulse rounded-full bg-primary/20 blur-3xl" />
            <div className="relative animate-float overflow-hidden rounded-3xl border border-gold shadow-gold">
              <img
                src={heroRobot}
                alt="Gold Turbo Forex"
                width={1536}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl glass p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient">
                    <TrendingUp className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">XAUUSD · М1</div>
                    <div className="font-display font-bold">XAUUSD</div>
                  </div>
                </div>
                <BadgeCheck className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <section className="border-y border-border/50 bg-card/30 py-5">
        <div className="flex overflow-hidden">
          <div className="flex animate-ticker shrink-0 items-center gap-12 whitespace-nowrap pr-12 font-display text-sm uppercase tracking-widest text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                {t.ticker.map((s, j) => <span key={j}>{s}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.problem.tag}</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            {t.problem.titleRest.split(" ")[0]} <span className="text-gold-gradient">{t.problem.titleGold}</span> {t.problem.titleRest.split(" ").slice(1).join(" ")}
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.problem.items.map((c, idx) => {
            const Icon = problemIcons[idx];
            return (
              <div key={c.t} className="group relative rounded-2xl bg-card-gradient p-6 transition-smooth hover:border-gold border border-border/50 hover:-translate-y-1">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-gold bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="relative py-24">
        <div className="container">
          <div className="rounded-3xl border border-gold bg-card-gradient p-8 md:p-14 shadow-soft">
            <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr] items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.solution.tag}</p>
                <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
                  {t.solution.titleStart} <span className="text-gold-gradient">{t.solution.titleGold}</span>
                </h2>
                <p className="mt-4 max-w-lg text-muted-foreground">{t.solution.subtitle}</p>
                <div className="mt-8 space-y-4">
                  {t.solution.items.map((c, idx) => {
                    const Icon = solutionIcons[idx];
                    return (
                      <div key={c.t} className="flex gap-4 rounded-xl border border-border/40 bg-background/40 p-4">
                        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold-gradient text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-display font-bold">{c.t}</div>
                          <div className="text-sm text-muted-foreground">{c.d}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 animate-glow-pulse rounded-full bg-primary/20 blur-3xl" />
                <div className="relative rounded-3xl border border-gold p-8 bg-background/50">
                  <div className="grid gap-4">
                    {t.solution.paramsLabels.map((l, i) => (
                      <div key={l} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0">
                        <span className="text-sm text-muted-foreground">{l}</span>
                        <span className="font-display font-bold text-foreground">{t.solution.paramsValues[i]}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="hero" size="lg" className="mt-6 w-full">
                    <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                      {t.solution.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.how.tag}</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            {t.how.title1} <span className="text-gold-gradient">{t.how.titleGold}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t.how.subtitle}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {t.how.items.map((c, idx) => {
            const Icon = howIcons[idx];
            return (
              <div key={c.t} className="relative rounded-2xl border border-border/50 bg-card-gradient p-6 transition-smooth hover:border-gold">
                <div className="absolute -top-3 left-6 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold text-primary-foreground">
                  0{idx + 1}
                </div>
                <Icon className="mt-2 h-7 w-7 text-primary" />
                <h3 className="mt-4 font-display text-lg font-bold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="container py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.advantages.tag}</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
              {t.advantages.title1} <span className="text-gold-gradient">{t.advantages.titleGold}</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">{t.advantages.subtitle}</p>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                {t.advantages.cta} <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {t.advantages.items.map((c, idx) => {
              const Icon = advIcons[idx];
              return (
                <div key={c.t} className="rounded-2xl border border-border/50 bg-card-gradient p-5 transition-smooth hover:border-gold hover:-translate-y-1">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary border border-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold">{c.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COPY TRADING */}
      <section id="copy" className="relative py-24">
        <div className="container">
          <div className="overflow-hidden rounded-3xl border border-gold bg-card-gradient">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-10 md:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.copy.tag}</p>
                <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
                  {t.copy.title1} <span className="text-gold-gradient">{t.copy.titleGold}</span>
                </h2>
                <p className="mt-4 text-muted-foreground">{t.copy.subtitle}</p>
                <div className="mt-8 space-y-3">
                  {t.copy.items.map((c, idx) => {
                    const Icon = copyIcons[idx];
                    return (
                      <div key={c.t} className="flex items-start gap-4">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-gradient text-primary-foreground">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-display font-bold">{c.t}</div>
                          <div className="text-sm text-muted-foreground">{c.d}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative bg-background/40 p-10 md:p-14">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-gold">
                    <Sparkles className="h-3 w-3" /> {t.copy.paramsTag}
                  </div>
                  <div className="mt-6 space-y-1">
                    {t.copy.paramsLabels.map((l, i) => (
                      <div key={l} className="flex items-center justify-between rounded-lg px-4 py-3 transition-smooth hover:bg-card">
                        <span className="text-sm text-muted-foreground">{l}</span>
                        <span className="font-display font-bold">{t.copy.paramsValues[i]}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="hero" size="lg" className="mt-8 w-full">
                    <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                      {t.copy.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <p className="mt-4 text-center text-xs text-muted-foreground">{t.copy.note}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section id="start" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.start.tag}</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            {t.start.title1} <span className="text-gold-gradient">{t.start.titleGold}</span> {t.start.title2}
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.start.items.map((s, i) => (
            <div key={s.t} className="relative rounded-2xl border border-border/50 bg-card-gradient p-6 transition-smooth hover:border-gold">
              <div className="font-display text-5xl font-extrabold text-gold-gradient">0{i + 1}</div>
              <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BENEFICIAL */}
      <section className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.why.tag}</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            {t.why.title1} <span className="text-gold-gradient">{t.why.titleGold}</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.why.cards.map((c, idx) => {
            const Icon = whyIcons[idx];
            return (
              <div key={c.t} className="rounded-2xl border border-border/50 bg-card-gradient p-7">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-extrabold">{c.t}</h3>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                      <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* INSTRUCTIONS */}
      <section id="instructions" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.instructions.tag}</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            {t.instructions.title1} <span className="text-gold-gradient">{t.instructions.titleGold}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{t.instructions.subtitle}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.instructions.steps.map((s) => (
            <div key={s.t} className="relative rounded-2xl border border-border/50 bg-card-gradient p-6 transition-smooth hover:border-gold">
              <div className="absolute -top-3 left-6 rounded-full bg-gold-gradient px-4 py-1 text-xs font-bold text-primary-foreground">
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button asChild variant="hero" size="lg">
            <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
              <Send className="h-4 w-4" /> {t.instructions.ctaChannel}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={SUPPORT_URL} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" /> {t.instructions.ctaSupport}
            </a>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.5fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{t.faq.tag}</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
              {t.faq.title1} <span className="text-gold-gradient">{t.faq.titleGold}</span>
            </h2>
            <p className="mt-4 text-muted-foreground">{t.faq.subtitle}</p>
            <Button asChild variant="outline" size="lg" className="mt-6">
              <a href={SUPPORT_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" /> {t.faq.cta}
              </a>
            </Button>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {t.faq.items.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-display font-bold hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="relative overflow-hidden rounded-3xl border border-gold bg-card-gradient p-10 text-center md:p-16 shadow-gold">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 animate-glow-pulse rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <Users className="mx-auto h-12 w-12 text-primary" />
            <h2 className="mt-6 font-display text-4xl font-extrabold md:text-6xl">
              {t.cta.title1} <span className="text-gold-gradient">{t.cta.titleGold}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{t.cta.subtitle}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                  <Send className="h-4 w-4" /> {t.cta.ctaChannel}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={SUPPORT_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> {t.cta.ctaSupport}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/50 bg-card/30 py-12">
        <div className="container grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display font-extrabold">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold-gradient text-primary-foreground">
                <Bot className="h-5 w-5" />
              </span>
              <span>GOLD<span className="text-gold-gradient">TURBO</span></span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <div>
            <div className="font-display font-bold">{t.footer.contacts}</div>
            <div className="mt-4 space-y-3">
              <a href={SUPPORT_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                <MessageCircle className="h-4 w-4" /> @GoldTurboSupport
              </a>
              <a href={CHANNEL_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Send className="h-4 w-4" /> @GoldTurboForex
              </a>
            </div>
          </div>
          <div>
            <div className="font-display font-bold">{t.footer.important}</div>
            <p className="mt-4 text-xs text-muted-foreground">{t.footer.importantText}</p>
          </div>
        </div>
        <div className="container mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gold Turbo Forex. {t.footer.rights}
        </div>
      </footer>
    </div>
  );
};

export default Index;
