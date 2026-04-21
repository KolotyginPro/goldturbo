import { ArrowRight, Bot, Zap, ShieldCheck, LineChart, Clock, Smartphone, Activity, Target, Layers, Sparkles, Send, MessageCircle, ChevronRight, BadgeCheck, TrendingUp, Wallet, Users, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroRobot from "@/assets/hero-robot.jpg";

const SUPPORT_URL = "https://t.me/GoldTurboSupport";
const CHANNEL_URL = "https://t.me/GoldTurboForex";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-display font-extrabold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold-gradient text-primary-foreground shadow-gold">
              <Bot className="h-5 w-5" />
            </span>
            <span className="text-lg">
              GOLD<span className="text-gold-gradient">TURBO</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#problem" className="transition-colors hover:text-primary">Проблема</a>
            <a href="#solution" className="transition-colors hover:text-primary">Решение</a>
            <a href="#how" className="transition-colors hover:text-primary">Как работает</a>
            <a href="#copy" className="transition-colors hover:text-primary">Копитрейдинг</a>
            <a href="#start" className="transition-colors hover:text-primary">Старт</a>
            <a href="#faq" className="transition-colors hover:text-primary">FAQ</a>
          </nav>
          <Button asChild variant="hero" size="sm">
            <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
              <Send className="h-4 w-4" /> Канал
            </a>
          </Button>
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
              Робот в работе 24/7
            </div>
            <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Скальпинговый робот для торговли{" "}
              <span className="text-gold-gradient">золотом</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Gold Turbo Forex — автоматический алгоритм для XAUUSD. Подключайте копитрейдинг от $100,
              ваши средства остаются на вашем счёте у брокера.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg">
                <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                  Подключить копирование <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={SUPPORT_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> Связаться с поддержкой
                </a>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border/50 pt-8">
              {[
                { v: "24/7", l: "Анализ рынка" },
                { v: "от $100", l: "Минимальный депозит" },
                { v: "2009", l: "Брокер с года" },
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
                alt="Золотой робот Gold Turbo Forex для скальпинга на рынке золота"
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
                    <div className="font-display font-bold">Алгоритмическая торговля</div>
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
                <span>● Автоматизация</span>
                <span>● Трейлинг-стоп</span>
                <span>● Фильтр спреда</span>
                <span>● Тайм-менеджмент</span>
                <span>● XAUUSD</span>
                <span>● Копитрейдинг</span>
                <span>● RoboForex</span>
                <span>● Прозрачная статистика</span>
                <span>● 24/7</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Проблема</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            Почему <span className="text-gold-gradient">95% трейдеров</span> теряют деньги
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Activity, t: "Торгуют на эмоциях", d: "Страх, жадность и надежда мешают принимать верные решения" },
            { i: Clock, t: "Заходят не в то время", d: "Торговля при низкой ликвидности и расширенном спреде" },
            { i: ShieldCheck, t: "Не контролируют риски", d: "Отсутствие риск-менеджмента приводит к убыткам" },
            { i: Target, t: "Нет дисциплины", d: "Без системы не бывает стабильного результата" },
          ].map((c) => (
            <div key={c.t} className="group relative rounded-2xl bg-card-gradient p-6 transition-smooth hover:border-gold border border-border/50 hover:-translate-y-1">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-gold bg-primary/10 text-primary">
                <c.i className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="relative py-24">
        <div className="container">
          <div className="rounded-3xl border border-gold bg-card-gradient p-8 md:p-14 shadow-soft">
            <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr] items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Решение</p>
                <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
                  Подключайся — <span className="text-gold-gradient">робот делает всё остальное</span>
                </h2>
                <p className="mt-4 max-w-lg text-muted-foreground">
                  Автоматический скальпинговый робот, торгующий через подключение к мастер-счёту GoldTurbo.
                  Никаких эмоций — только алгоритмы.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    { i: Activity, t: "Анализирует рынок 24/7", d: "Постоянный поиск торговых возможностей" },
                    { i: Zap, t: "Открывает и закрывает сделки", d: "Молниеносное исполнение без эмоций" },
                    { i: Layers, t: "Подключение к мастер-счёту", d: "Простое подключение к счёту GoldTurbo" },
                    { i: LineChart, t: "Прозрачная статистика", d: "Результаты в реальном времени" },
                  ].map((c) => (
                    <div key={c.t} className="flex gap-4 rounded-xl border border-border/40 bg-background/40 p-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold-gradient text-primary-foreground">
                        <c.i className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-display font-bold">{c.t}</div>
                        <div className="text-sm text-muted-foreground">{c.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 animate-glow-pulse rounded-full bg-primary/20 blur-3xl" />
                <div className="relative rounded-3xl border border-gold p-8 bg-background/50">
                  <div className="grid gap-4">
                    {[
                      { l: "Стратегия", v: "Скальпинг XAUUSD" },
                      { l: "Распределение средств", v: "Пропорционально" },
                      { l: "Макс. риск на сделку", v: "2%" },
                      { l: "Стоп при просадке", v: "20%" },
                      { l: "Минимальный депозит", v: "$100" },
                    ].map((r) => (
                      <div key={r.l} className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0">
                        <span className="text-sm text-muted-foreground">{r.l}</span>
                        <span className="font-display font-bold text-foreground">{r.v}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="hero" size="lg" className="mt-6 w-full">
                    <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                      Начать копирование <ArrowRight className="h-4 w-4" />
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Как работает робот</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            Технологии. Скорость. <span className="text-gold-gradient">Точность.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Алгоритм принимает решения за миллисекунды и исполняет сделки с высокой точностью.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {[
            { i: Activity, t: "Анализ рынка", d: "Сканирование данных в реальном времени" },
            { i: Target, t: "Точки входа", d: "Оптимальные точки с высокой вероятностью" },
            { i: Zap, t: "Быстрое исполнение", d: "Открытие сделок без задержек" },
            { i: ShieldCheck, t: "Управление сделкой", d: "Трейлинг-стоп и фильтры рисков" },
            { i: BadgeCheck, t: "Фиксация результата", d: "Автоматическое закрытие при цели" },
          ].map((c, idx) => (
            <div key={c.t} className="relative rounded-2xl border border-border/50 bg-card-gradient p-6 transition-smooth hover:border-gold">
              <div className="absolute -top-3 left-6 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold text-primary-foreground">
                0{idx + 1}
              </div>
              <c.i className="mt-2 h-7 w-7 text-primary" />
              <h3 className="mt-4 font-display text-lg font-bold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="container py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Преимущества</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
              Стабильность. Адаптивность. <span className="text-gold-gradient">Результат.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Технологии работают — вы получаете прибыль. Полный контроль с любого устройства.
            </p>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                Получить доступ <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { i: Clock, t: "Тайм-менеджмент", d: "Торговля только в часы оптимальной ликвидности" },
              { i: TrendingUp, t: "Трейлинг-стоп", d: "Перевод в безубыток и максимум из движения цены" },
              { i: Wallet, t: "Масштабируемость", d: "От $100 до крупных счетов" },
              { i: Layers, t: "Без выделенного сервера", d: "Работает на обычном VPS или ПК" },
              { i: LineChart, t: "Онлайн-мониторинг", d: "Состояние счёта в реальном времени" },
              { i: Smartphone, t: "Управление с телефона", d: "Полный контроль со смартфона" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-border/50 bg-card-gradient p-5 transition-smooth hover:border-gold hover:-translate-y-1">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary border border-gold">
                  <c.i className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold">{c.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COPY TRADING */}
      <section id="copy" className="relative py-24">
        <div className="container">
          <div className="overflow-hidden rounded-3xl border border-gold bg-card-gradient">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-10 md:p-14">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Копитрейдинг</p>
                <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
                  Простой. Прозрачный. <span className="text-gold-gradient">Автоматический.</span>
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Копируйте сделки профессионалов и получайте результат без сложных настроек и технических знаний.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    { i: Lock, t: "Сервер не нужен", d: "Робот работает 24/7 на вашем устройстве" },
                    { i: ShieldCheck, t: "Брокер на рынке с 2009 года", d: "Надёжный партнёр с отличной репутацией" },
                    { i: LineChart, t: "Прозрачная статистика", d: "Результаты в реальном времени" },
                    { i: Wallet, t: "Капитал под вашим контролем", d: "Средства всегда на вашем счёте" },
                  ].map((c) => (
                    <div key={c.t} className="flex items-start gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-gradient text-primary-foreground">
                        <c.i className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-display font-bold">{c.t}</div>
                        <div className="text-sm text-muted-foreground">{c.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative bg-background/40 p-10 md:p-14">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary border border-gold">
                    <Sparkles className="h-3 w-3" /> Параметры копирования
                  </div>
                  <div className="mt-6 space-y-1">
                    {[
                      { l: "Стратегия", v: "GoldTurbo Scalper" },
                      { l: "Инструмент", v: "XAUUSD" },
                      { l: "Распределение средств", v: "Пропорционально" },
                      { l: "Макс. риск на сделку", v: "2%" },
                      { l: "Стоп при просадке", v: "20%" },
                      { l: "Мин. депозит", v: "$100" },
                    ].map((r) => (
                      <div key={r.l} className="flex items-center justify-between rounded-lg px-4 py-3 transition-smooth hover:bg-card">
                        <span className="text-sm text-muted-foreground">{r.l}</span>
                        <span className="font-display font-bold">{r.v}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="hero" size="lg" className="mt-8 w-full">
                    <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                      Начать копирование <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    Вы управляете рисками — робот делает остальное.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section id="start" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">С чего начать</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            Всего <span className="text-gold-gradient">4 шага</span> до автоматического дохода
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Регистрация на RoboForex", d: "Откройте счёт у надёжного брокера через нашу реферальную ссылку" },
            { t: "Пополнение счёта", d: "Минимальный депозит для копитрейдинга — от $100" },
            { t: "Подключение копирования", d: "Настройте сумму, распределение и лимиты риска" },
            { t: "Копирование и контроль", d: "Сделки копируются автоматически, статистика в реальном времени" },
          ].map((s, i) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Для инвесторов</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            Почему это <span className="text-gold-gradient">выгодно</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              i: ShieldCheck, t: "Безопасность", items: [
                "Средства на вашем счёте у брокера",
                "Полный контроль над своими средствами",
                "Можно остановить копирование в любой момент",
                "Никаких передач средств третьим лицам",
              ]
            },
            {
              i: TrendingUp, t: "Доходность", items: [
                "Профессиональные торговые алгоритмы",
                "Проверенные стратегии",
                "Лучшие точки входа и выхода",
                "Потенциал стабильной прибыли",
              ]
            },
            {
              i: Clock, t: "Экономия времени", items: [
                "Не нужно анализировать рынок",
                "Копирование происходит автоматически",
                "Подходит новичкам и опытным",
                "Вы экономите время и силы",
              ]
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border/50 bg-card-gradient p-7">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-primary-foreground">
                <c.i className="h-6 w-6" />
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
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.5fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
              Часто задаваемые <span className="text-gold-gradient">вопросы</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Не нашли ответ? Напишите нам в Telegram-поддержку.</p>
            <Button asChild variant="outline" size="lg" className="mt-6">
              <a href={SUPPORT_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" /> Задать вопрос
              </a>
            </Button>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Гарантирует ли робот прибыль?", a: "Нет. Рынок — это риск. Робот минимизирует ошибки человека и работает по чёткой системе, но важно соблюдать риск-менеджмент." },
              { q: "Где хранятся мои деньги?", a: "Ваши средства всегда находятся на вашем счёте у брокера RoboForex. Мы не получаем доступа к вашим деньгам." },
              { q: "Какой минимальный депозит?", a: "Для подключения копитрейдинга достаточно $100. Робот масштабируется и под крупные счета." },
              { q: "Нужен ли мне VPS-сервер?", a: "Нет. При копитрейдинге сервер не требуется — все сделки исполняются автоматически на стороне брокера." },
              { q: "Можно ли остановить копирование?", a: "Да, в любой момент. Вы полностью контролируете подключение и параметры рисков." },
              { q: "На каком инструменте торгует робот?", a: "Основной инструмент — XAUUSD (золото). Алгоритм оптимизирован под скальпинговую торговлю на этом активе." },
            ].map((f, i) => (
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
              Действуйте сейчас — <span className="text-gold-gradient">будущее создаётся сегодня</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Gold Turbo Forex — ваш надёжный помощник в мире автоматизированного трейдинга.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                  <Send className="h-4 w-4" /> Перейти в канал
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={SUPPORT_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> Поддержка в Telegram
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
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Скальпинговый робот и копитрейдинг для торговли золотом. Технологии работают — вы получаете результат.
            </p>
          </div>
          <div>
            <div className="font-display font-bold">Контакты</div>
            <div className="mt-4 space-y-3">
              <a href={SUPPORT_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                <MessageCircle className="h-4 w-4" /> Поддержка: @GoldTurboSupport
              </a>
              <a href={CHANNEL_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary">
                <Send className="h-4 w-4" /> Канал: @GoldTurboForex
              </a>
            </div>
          </div>
          <div>
            <div className="font-display font-bold">Важно</div>
            <p className="mt-4 text-xs text-muted-foreground">
              Робот не гарантирует прибыль. Торговля на финансовых рынках связана с риском. Соблюдайте риск-менеджмент.
              Прошлые результаты не гарантируют будущих.
            </p>
          </div>
        </div>
        <div className="container mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gold Turbo Forex. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
