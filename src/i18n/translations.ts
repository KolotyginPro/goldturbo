import { ReactNode } from "react";

export type Lang = "ru" | "en";

export type Translation = {
  nav: {
    problem: string; solution: string; how: string; copy: string;
    start: string; instructions: string; faq: string; channelShort: string;
  };
  hero: {
    badge: string; title1: string; titleGold: string; subtitle: string;
    ctaConnect: string; ctaSupport: string;
    stat1: string; stat1l: string; stat2: string; stat2l: string; stat3: string; stat3l: string;
  };
  ticker: string[];
  problem: {
    tag: string; titleGold: string; titleRest: string;
    items: { t: string; d: string }[];
  };
  solution: {
    tag: string; titleStart: string; titleGold: string;
    subtitle: string;
    items: { t: string; d: string }[];
    paramsLabels: string[]; paramsValues: string[];
    cta: string;
  };
  how: {
    tag: string; title1: string; titleGold: string; subtitle: string;
    items: { t: string; d: string }[];
  };
  advantages: {
    tag: string; title1: string; titleGold: string; subtitle: string; cta: string;
    items: { t: string; d: string }[];
  };
  copy: {
    tag: string; title1: string; titleGold: string; subtitle: string;
    items: { t: string; d: string }[];
    paramsTag: string;
    paramsLabels: string[]; paramsValues: string[];
    cta: string; note: string;
  };
  start: {
    tag: string; title1: string; titleGold: string; title2: string;
    items: { t: string; d: string }[];
  };
  why: {
    tag: string; title1: string; titleGold: string;
    cards: { t: string; items: string[] }[];
  };
  instructions: {
    tag: string; title1: string; titleGold: string; subtitle: string;
    important: string;
    steps: { n: string; t: string; d: ReactNode }[];
    ctaChannel: string; ctaSupport: string;
  };
  faq: {
    tag: string; title1: string; titleGold: string; subtitle: string;
    cta: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title1: string; titleGold: string; subtitle: string;
    ctaChannel: string; ctaSupport: string;
  };
  footer: {
    tagline: string; contacts: string; important: string; importantText: string; rights: string;
  };
};

const SUPPORT_URL = "https://t.me/GoldTurboSupport";

import { createElement } from "react";

export const translations: Record<Lang, Translation> = {
  ru: {
    nav: {
      problem: "Проблема", solution: "Решение", how: "Как работает",
      copy: "Копитрейдинг", start: "Старт", instructions: "Инструкции",
      faq: "FAQ", channelShort: "Канал",
    },
    hero: {
      badge: "Робот в работе 24/7",
      title1: "Скальпинговый робот для торговли",
      titleGold: "золотом",
      subtitle: "Gold Turbo Forex — автоматический алгоритм для XAUUSD. Подключайте копитрейдинг от $100, ваши средства остаются на вашем счёте у брокера.",
      ctaConnect: "Подключить копирование",
      ctaSupport: "Связаться с поддержкой",
      stat1: "24/7", stat1l: "Анализ рынка",
      stat2: "от $100", stat2l: "Минимальный депозит",
      stat3: "2009", stat3l: "Брокер с года",
    },
    ticker: ["● Автоматизация","● Трейлинг-стоп","● Фильтр спреда","● Тайм-менеджмент","● XAUUSD","● Копитрейдинг","● RoboForex","● Прозрачная статистика","● 24/7"],
    problem: {
      tag: "Проблема", titleGold: "95% трейдеров", titleRest: "Почему  теряют деньги",
      items: [
        { t: "Торгуют на эмоциях", d: "Страх, жадность и надежда мешают принимать верные решения" },
        { t: "Заходят не в то время", d: "Торговля при низкой ликвидности и расширенном спреде" },
        { t: "Не контролируют риски", d: "Отсутствие риск-менеджмента приводит к убыткам" },
        { t: "Нет дисциплины", d: "Без системы не бывает стабильного результата" },
      ],
    },
    solution: {
      tag: "Решение", titleStart: "Подключайся —", titleGold: "робот делает всё остальное",
      subtitle: "Автоматический скальпинговый робот, торгующий через подключение к мастер-счёту GoldTurbo. Никаких эмоций — только алгоритмы.",
      items: [
        { t: "Анализирует рынок 24/7", d: "Постоянный поиск торговых возможностей" },
        { t: "Открывает и закрывает сделки", d: "Молниеносное исполнение без эмоций" },
        { t: "Подключение к мастер-счёту", d: "Простое подключение к счёту GoldTurbo" },
        { t: "Прозрачная статистика", d: "Результаты в реальном времени" },
      ],
      paramsLabels: ["Стратегия","Распределение средств","Доходность в месяц","Минимальный депозит"],
      paramsValues: ["Скальпинг XAUUSD","Пропорционально","от 10% до 30%","$100"],
      cta: "Начать копирование",
    },
    how: {
      tag: "Как работает робот", title1: "Технологии. Скорость.", titleGold: "Точность.",
      subtitle: "Алгоритм принимает решения за миллисекунды и исполняет сделки с высокой точностью.",
      items: [
        { t: "Анализ рынка", d: "Сканирование данных в реальном времени" },
        { t: "Точки входа", d: "Оптимальные точки с высокой вероятностью" },
        { t: "Быстрое исполнение", d: "Открытие сделок без задержек" },
        { t: "Управление сделкой", d: "Трейлинг-стоп и фильтры рисков" },
        { t: "Фиксация результата", d: "Автоматическое закрытие при цели" },
      ],
    },
    advantages: {
      tag: "Преимущества", title1: "Стабильность. Адаптивность.", titleGold: "Результат.",
      subtitle: "Технологии работают — вы получаете прибыль. Полный контроль с любого устройства.",
      cta: "Получить доступ",
      items: [
        { t: "Тайм-менеджмент", d: "Торговля только в часы оптимальной ликвидности" },
        { t: "Трейлинг-стоп", d: "Перевод в безубыток и максимум из движения цены" },
        { t: "Масштабируемость", d: "От $100 до крупных счетов" },
        { t: "Без выделенного сервера", d: "Не требуется покупка отдельного сервера и настройка под торговлю" },
        { t: "Онлайн-мониторинг", d: "Состояние счёта в реальном времени" },
        { t: "Управление с телефона", d: "Полный контроль со смартфона" },
      ],
    },
    copy: {
      tag: "Копитрейдинг", title1: "Простой. Прозрачный.", titleGold: "Автоматический.",
      subtitle: "Копируйте сделки профессионалов и получайте результат без сложных настроек и технических знаний.",
      items: [
        { t: "Сервер не нужен", d: "Робот работает 24/7 на вашем устройстве" },
        { t: "Брокер на рынке с 2009 года", d: "Надёжный партнёр с отличной репутацией" },
        { t: "Прозрачная статистика", d: "Результаты в реальном времени" },
        { t: "Капитал под вашим контролем", d: "Средства всегда на вашем счёте" },
      ],
      paramsTag: "Параметры копирования",
      paramsLabels: ["Стратегия","Инструмент","Распределение средств","Мин. депозит"],
      paramsValues: ["GoldTurbo Scalper","XAUUSD","Пропорционально","$100"],
      cta: "Начать копирование",
      note: "Вы управляете рисками — робот делает остальное.",
    },
    start: {
      tag: "С чего начать", title1: "Всего", titleGold: "4 шага", title2: "до автоматического дохода",
      items: [
        { t: "Регистрация на RoboForex", d: "Откройте счёт у надёжного брокера через нашу реферальную ссылку" },
        { t: "Пополнение счёта", d: "Минимальный депозит для копитрейдинга — от $100" },
        { t: "Подключение копирования", d: "Настройте сумму, распределение и лимиты риска" },
        { t: "Копирование и контроль", d: "Сделки копируются автоматически, статистика в реальном времени" },
      ],
    },
    why: {
      tag: "Для инвесторов", title1: "Почему это", titleGold: "выгодно",
      cards: [
        { t: "Безопасность", items: ["Средства на вашем счёте у брокера","Полный контроль над своими средствами","Можно остановить копирование в любой момент","Никаких передач средств третьим лицам"] },
        { t: "Доходность", items: ["Профессиональные торговые алгоритмы","Проверенные стратегии","Лучшие точки входа и выхода","Потенциал стабильной прибыли"] },
        { t: "Экономия времени", items: ["Не нужно анализировать рынок","Копирование происходит автоматически","Подходит новичкам и опытным","Вы экономите время и силы"] },
      ],
    },
    instructions: {
      tag: "Инструкции", title1: "Подробное", titleGold: "руководство",
      subtitle: "Следуйте инструкциям шаг за шагом для успешного подключения",
      important: "Важно!",
      steps: [
        { n: "01", t: "Регистрация на RoboForex", d: createElement("span", null,
          "Перейдите по реферальной ссылке: ",
          createElement("a", { href: "https://my28.roboforex.org/en/?a=goldturbo", target: "_blank", rel: "noreferrer", className: "text-primary underline hover:text-gold-gradient" }, "https://my28.roboforex.org/en/?a=goldturbo"),
          ". Заполните регистрационную форму: имя, email, телефон. ",
          createElement("strong", { className: "text-foreground" }, "Важно!"),
          " При открытии счёта выберите ",
          createElement("strong", { className: "text-foreground" }, "MT4 ProCent с плечом 1:1000"),
          ". Подтвердите email и завершите верификацию (загрузите фото паспорта в профиле).") },
        { n: "02", t: "Пополнение счёта", d: createElement("span", null,
          "В личном кабинете выберите раздел Пополнение счёта. Доступные способы: банковская карта (Visa/MasterCard), банковский перевод, криптовалюта, электронные кошельки (WebMoney, Skrill и др.). Минимум для копитрейдинга — $100.",
          createElement("br"), createElement("br"),
          "Рекомендуем пополнение в USDT") },
        { n: "03", t: "Запрос на подключение", d: createElement("span", null,
          "После пополнения счёта отправьте в ",
          createElement("a", { href: SUPPORT_URL, target: "_blank", rel: "noreferrer", className: "text-primary underline hover:text-gold-gradient" }, "службу поддержки"),
          " информацию с указанием номера счёта и просьбой выдачи ссылки на копитрейдинг.") },
        { n: "04", t: "Настройка копирования", d: "После получения ссылки от тех поддержки, переходите по ней и нажимаете кнопку, менять параметры не нужно" },
        { n: "05", t: "Запуск копирования", d: "Запуск копирования происходит автоматически, торговля осуществляется с 08:00 - 22:00 по мск, будние дни." },
        { n: "06", t: "Мониторинг и управление", d: "Следите за статистикой в личном кабинете RoboForex или через мобильное приложение. Вы можете остановить копирование в любой момент." },
      ],
      ctaChannel: "Перейти в канал", ctaSupport: "Написать в поддержку",
    },
    faq: {
      tag: "FAQ", title1: "Часто задаваемые", titleGold: "вопросы",
      subtitle: "Не нашли ответ? Напишите нам в Telegram-поддержку.",
      cta: "Задать вопрос",
      items: [
        { q: "Гарантирует ли робот прибыль?", a: "Нет. Рынок — это риск. Робот минимизирует ошибки человека и работает по чёткой системе, но важно соблюдать риск-менеджмент." },
        { q: "Где хранятся мои деньги?", a: "Ваши средства всегда находятся на вашем счёте у брокера RoboForex. Мы не получаем доступа к вашим деньгам." },
        { q: "Какой минимальный депозит?", a: "Для подключения копитрейдинга достаточно $100. Робот масштабируется и под крупные счета." },
        { q: "Нужен ли мне VPS-сервер?", a: "Нет. При копитрейдинге сервер не требуется — все сделки исполняются автоматически на стороне брокера." },
        { q: "Можно ли остановить копирование?", a: "Да, в любой момент. Вы полностью контролируете подключение и параметры рисков." },
        { q: "На каком инструменте торгует робот?", a: "Основной инструмент — XAUUSD (золото). Алгоритм оптимизирован под скальпинговую торговлю на этом активе." },
      ],
    },
    cta: {
      title1: "Действуйте сейчас —", titleGold: "будущее создаётся сегодня",
      subtitle: "Gold Turbo Forex — ваш надёжный помощник в мире автоматизированного трейдинга.",
      ctaChannel: "Перейти в канал", ctaSupport: "Поддержка в Telegram",
    },
    footer: {
      tagline: "Скальпинговый робот и копитрейдинг для торговли золотом. Технологии работают — вы получаете результат.",
      contacts: "Контакты", important: "Важно",
      importantText: "Робот не гарантирует прибыль. Торговля на финансовых рынках связана с риском. Соблюдайте риск-менеджмент. Прошлые результаты не гарантируют будущих.",
      rights: "Все права защищены.",
    },
  },
  en: {
    nav: {
      problem: "Problem", solution: "Solution", how: "How it works",
      copy: "Copy trading", start: "Start", instructions: "Instructions",
      faq: "FAQ", channelShort: "Channel",
    },
    hero: {
      badge: "Robot working 24/7",
      title1: "Scalping robot for trading",
      titleGold: "gold",
      subtitle: "Gold Turbo Forex — automated algorithm for XAUUSD. Connect copy trading from $100, your funds stay on your broker account.",
      ctaConnect: "Connect copying",
      ctaSupport: "Contact support",
      stat1: "24/7", stat1l: "Market analysis",
      stat2: "from $100", stat2l: "Minimum deposit",
      stat3: "2009", stat3l: "Broker since",
    },
    ticker: ["● Automation","● Trailing stop","● Spread filter","● Time management","● XAUUSD","● Copy trading","● RoboForex","● Transparent stats","● 24/7"],
    problem: {
      tag: "Problem", titleGold: "95% of traders", titleRest: "Why  lose money",
      items: [
        { t: "Trade on emotions", d: "Fear, greed and hope prevent making the right decisions" },
        { t: "Enter at the wrong time", d: "Trading during low liquidity and wide spread" },
        { t: "Don't control risks", d: "Lack of risk management leads to losses" },
        { t: "No discipline", d: "Without a system there is no stable result" },
      ],
    },
    solution: {
      tag: "Solution", titleStart: "Connect —", titleGold: "the robot does the rest",
      subtitle: "Automated scalping robot trading via connection to the GoldTurbo master account. No emotions — only algorithms.",
      items: [
        { t: "Analyzes the market 24/7", d: "Constant search for trading opportunities" },
        { t: "Opens and closes trades", d: "Lightning-fast execution without emotions" },
        { t: "Master account connection", d: "Easy connection to the GoldTurbo account" },
        { t: "Transparent statistics", d: "Real-time results" },
      ],
      paramsLabels: ["Strategy","Fund allocation","Monthly yield","Minimum deposit"],
      paramsValues: ["XAUUSD scalping","Proportional","from 10% to 30%","$100"],
      cta: "Start copying",
    },
    how: {
      tag: "How the robot works", title1: "Technology. Speed.", titleGold: "Precision.",
      subtitle: "The algorithm makes decisions in milliseconds and executes trades with high precision.",
      items: [
        { t: "Market analysis", d: "Real-time data scanning" },
        { t: "Entry points", d: "Optimal points with high probability" },
        { t: "Fast execution", d: "Opening trades without delay" },
        { t: "Trade management", d: "Trailing stop and risk filters" },
        { t: "Result fixation", d: "Automatic close at target" },
      ],
    },
    advantages: {
      tag: "Advantages", title1: "Stability. Adaptability.", titleGold: "Result.",
      subtitle: "Technology works — you get the profit. Full control from any device.",
      cta: "Get access",
      items: [
        { t: "Time management", d: "Trading only during optimal liquidity hours" },
        { t: "Trailing stop", d: "Move to break-even and maximize price moves" },
        { t: "Scalability", d: "From $100 to large accounts" },
        { t: "No dedicated server", d: "No need to buy a separate server or configure it for trading" },
        { t: "Online monitoring", d: "Account status in real time" },
        { t: "Phone management", d: "Full control from your smartphone" },
      ],
    },
    copy: {
      tag: "Copy trading", title1: "Simple. Transparent.", titleGold: "Automated.",
      subtitle: "Copy professional trades and get results without complex settings or technical knowledge.",
      items: [
        { t: "No server needed", d: "Robot works 24/7 on your device" },
        { t: "Broker since 2009", d: "Reliable partner with great reputation" },
        { t: "Transparent statistics", d: "Real-time results" },
        { t: "Capital under your control", d: "Funds always on your account" },
      ],
      paramsTag: "Copying parameters",
      paramsLabels: ["Strategy","Instrument","Fund allocation","Min. deposit"],
      paramsValues: ["GoldTurbo Scalper","XAUUSD","Proportional","$100"],
      cta: "Start copying",
      note: "You control the risk — the robot does the rest.",
    },
    start: {
      tag: "How to start", title1: "Just", titleGold: "4 steps", title2: "to automated income",
      items: [
        { t: "Register on RoboForex", d: "Open an account with a reliable broker via our referral link" },
        { t: "Fund your account", d: "Minimum deposit for copy trading — from $100" },
        { t: "Connect copying", d: "Set the amount, allocation and risk limits" },
        { t: "Copy and control", d: "Trades are copied automatically, real-time statistics" },
      ],
    },
    why: {
      tag: "For investors", title1: "Why it's", titleGold: "beneficial",
      cards: [
        { t: "Security", items: ["Funds on your broker account","Full control over your funds","You can stop copying anytime","No transfer of funds to third parties"] },
        { t: "Profitability", items: ["Professional trading algorithms","Proven strategies","Best entry and exit points","Potential for stable profit"] },
        { t: "Time saving", items: ["No need to analyze the market","Copying happens automatically","Suitable for beginners and pros","Saves your time and effort"] },
      ],
    },
    instructions: {
      tag: "Instructions", title1: "Detailed", titleGold: "guide",
      subtitle: "Follow the instructions step by step for a successful connection",
      important: "Important!",
      steps: [
        { n: "01", t: "Register on RoboForex", d: createElement("span", null,
          "Follow the referral link: ",
          createElement("a", { href: "https://my28.roboforex.org/en/?a=goldturbo", target: "_blank", rel: "noreferrer", className: "text-primary underline hover:text-gold-gradient" }, "https://my28.roboforex.org/en/?a=goldturbo"),
          ". Fill out the registration form: name, email, phone. ",
          createElement("strong", { className: "text-foreground" }, "Important!"),
          " When opening an account, choose ",
          createElement("strong", { className: "text-foreground" }, "MT4 ProCent with leverage 1:1000"),
          ". Confirm your email and complete verification (upload a passport photo in your profile).") },
        { n: "02", t: "Fund your account", d: createElement("span", null,
          "In your personal account, choose the Deposit section. Available methods: bank card (Visa/MasterCard), bank transfer, crypto, e-wallets (WebMoney, Skrill, etc.). Minimum for copy trading — $100.",
          createElement("br"), createElement("br"),
          "We recommend depositing in USDT") },
        { n: "03", t: "Connection request", d: createElement("span", null,
          "After funding your account, send to ",
          createElement("a", { href: SUPPORT_URL, target: "_blank", rel: "noreferrer", className: "text-primary underline hover:text-gold-gradient" }, "support"),
          " your account number with a request to issue a copy trading link.") },
        { n: "04", t: "Copying setup", d: "After receiving the link from support, click it and press the button — no need to change parameters" },
        { n: "05", t: "Start copying", d: "Copying starts automatically, trading runs from 08:00 to 22:00 Moscow time, weekdays." },
        { n: "06", t: "Monitoring and control", d: "Track stats in your RoboForex account or via the mobile app. You can stop copying at any moment." },
      ],
      ctaChannel: "Go to channel", ctaSupport: "Contact support",
    },
    faq: {
      tag: "FAQ", title1: "Frequently asked", titleGold: "questions",
      subtitle: "Didn't find an answer? Message us on Telegram support.",
      cta: "Ask a question",
      items: [
        { q: "Does the robot guarantee profit?", a: "No. The market is risky. The robot minimizes human errors and follows a clear system, but risk management is important." },
        { q: "Where is my money stored?", a: "Your funds are always on your account with the RoboForex broker. We do not access your money." },
        { q: "What is the minimum deposit?", a: "$100 is enough to connect copy trading. The robot also scales for larger accounts." },
        { q: "Do I need a VPS server?", a: "No. With copy trading no server is needed — all trades are executed automatically on the broker side." },
        { q: "Can I stop copying?", a: "Yes, anytime. You fully control the connection and risk parameters." },
        { q: "What instrument does the robot trade?", a: "The main instrument is XAUUSD (gold). The algorithm is optimized for scalping on this asset." },
      ],
    },
    cta: {
      title1: "Act now —", titleGold: "the future is built today",
      subtitle: "Gold Turbo Forex — your reliable assistant in the world of automated trading.",
      ctaChannel: "Go to channel", ctaSupport: "Telegram support",
    },
    footer: {
      tagline: "Scalping robot and copy trading for gold. Technology works — you get results.",
      contacts: "Contacts", important: "Important",
      importantText: "The robot does not guarantee profit. Trading financial markets carries risk. Follow risk management. Past results do not guarantee future ones.",
      rights: "All rights reserved.",
    },
  },
};
