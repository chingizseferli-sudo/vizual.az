import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Bell,
  Bot,
  Building2,
  Check,
  ChevronRight,
  Contact,
  Gauge,
  LayoutDashboard,
  Megaphone,
  MessageCircle,
  Newspaper,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'
import './styles.css'

const monitors = [
  { name: 'Təhsil xəbərləri', status: 'Aktiv', matches: 204, keywords: 74 },
  { name: 'Bank və iqtisadiyyat', status: 'Aktiv', matches: 88, keywords: 31 },
  { name: 'Tender izləmə', status: 'Sınaq', matches: 16, keywords: 12 },
]

const results = [
  {
    title: 'Yeni tədris proqramları üzrə ictimai müzakirələr başladı',
    source: 'Report.az',
    time: '12 dəq əvvəl',
    keyword: 'təhsil proqramı',
  },
  {
    title: 'Universitetlər üçün beynəlxalq əməkdaşlıq memorandumu imzalandı',
    source: 'Azertac',
    time: '28 dəq əvvəl',
    keyword: 'universitet',
  },
  {
    title: 'Dövlət qurumları üçün rəqəmsal kommunikasiya monitorinqi genişlənir',
    source: 'APA',
    time: '44 dəq əvvəl',
    keyword: 'kommunikasiya',
  },
]

const plans = [
  { name: 'Start', price: '29 AZN', detail: 'Kiçik komanda və şəxsi izləmə' },
  { name: 'Pro', price: '79 AZN', detail: 'Şirkət və qurumlar üçün gündəlik monitorinq' },
  { name: 'Enterprise', price: 'Razılaşma', detail: 'Fərdi mənbələr, API və hesabatlar' },
]

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <DashboardPreview />
      <Features />
      <Pricing />
      <ContactBlock />
    </main>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#">
        <span className="brand-mark">
          <Radar size={22} />
        </span>
        <span>Visual Monitor</span>
      </a>
      <nav>
        <a href="#platform">Platforma</a>
        <a href="#pricing">Qiymətlər</a>
        <a href="#contact">Əlaqə</a>
      </nav>
      <div className="header-actions">
        <button className="ghost-button">Daxil ol</button>
        <button className="primary-button">Qeydiyyat</button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">
          <Sparkles size={16} />
          Yerli media üçün ağıllı monitorinq
        </span>
        <h1>Visual Monitor</h1>
        <p>
          Azərbaycan mediasını, rəsmi saytları və xəbər mənbələrini açar sözlərinizə görə izləyin.
          Uyğun xəbərlər bazaya yazılır və Telegram bildirişi kimi istifadəçiyə göndərilir.
        </p>
        <div className="hero-actions">
          <button className="primary-button large">
            Monitor yarat
            <ChevronRight size={18} />
          </button>
          <button className="secondary-button large">Demo panelə bax</button>
        </div>
      </div>
      <div className="hero-visual" aria-label="Visual Monitor product preview">
        <div className="signal-grid">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="live-card main-live-card">
          <div>
            <p>Canlı uyğunluq</p>
            <strong>1 saat</strong>
          </div>
          <Gauge size={44} />
        </div>
        <div className="media-list">
          {results.map((item) => (
            <article key={item.title}>
              <span>{item.source}</span>
              <strong>{item.title}</strong>
              <small>{item.keyword} · {item.time}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function DashboardPreview() {
  return (
    <section className="section dashboard-section" id="platform">
      <div className="section-heading">
        <span className="eyebrow">
          <LayoutDashboard size={16} />
          İstifadəçi paneli
        </span>
        <h2>Monitorlar, açar sözlər və nəticələr bir ekranda</h2>
      </div>

      <div className="dashboard-shell">
        <aside>
          <a className="active"><LayoutDashboard size={18} /> Panel</a>
          <a><Search size={18} /> Monitorlar</a>
          <a><Newspaper size={18} /> Nəticələr</a>
          <a><Bell size={18} /> Bildirişlər</a>
          <a><MessageCircle size={18} /> Telegram</a>
        </aside>
        <div className="dashboard-content">
          <div className="metric-row">
            <Metric icon={<Bot size={22} />} label="Aktiv monitor" value="3" />
            <Metric icon={<Zap size={22} />} label="Bugünkü uyğunluq" value="42" />
            <Metric icon={<ShieldCheck size={22} />} label="Dublikat bloklandı" value="118" />
          </div>

          <div className="monitor-grid">
            {monitors.map((monitor) => (
              <article className="monitor-card" key={monitor.name}>
                <div>
                  <span>{monitor.status}</span>
                  <h3>{monitor.name}</h3>
                </div>
                <p>{monitor.keywords} açar söz · {monitor.matches} nəticə</p>
                <button className="icon-text-button">
                  Aç
                  <ChevronRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="metric">
      {icon}
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </div>
  )
}

function Features() {
  const items = [
    { icon: <Search />, title: 'Açar söz monitorinqi', text: 'Hər istifadəçi öz monitorunu və açar söz siyahısını idarə edir.' },
    { icon: <MessageCircle />, title: 'Telegram bildirişləri', text: 'Uyğun xəbər tapılanda bildiriş istifadəçinin Telegram hesabına gedir.' },
    { icon: <Building2 />, title: 'Admin nəzarəti', text: 'Mənbələr, statuslar, loglar və sistem sağlamlığı super admin panelində qalır.' },
    { icon: <Megaphone />, title: 'Geniş istifadə sahəsi', text: 'Təhsil, PR, dövlət qurumları, biznes və media komandaları üçün uyğundur.' },
  ]

  return (
    <section className="section feature-section">
      <div className="feature-grid">
        {items.map((item) => (
          <article className="feature-card" key={item.title}>
            <div className="feature-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading">
        <span className="eyebrow">
          <Contact size={16} />
          Paketlər
        </span>
        <h2>Başlamaq üçün sadə, böyümək üçün çevik</h2>
      </div>
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article className="price-card" key={plan.name}>
            <h3>{plan.name}</h3>
            <strong>{plan.price}</strong>
            <p>{plan.detail}</p>
            <ul>
              <li><Check size={16} /> İstifadəçi monitorları</li>
              <li><Check size={16} /> Telegram bildirişləri</li>
              <li><Check size={16} /> Nəticə tarixçəsi</li>
            </ul>
            <button className="secondary-button">Seç</button>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactBlock() {
  return (
    <section className="contact-band" id="contact">
      <div>
        <span className="eyebrow">
          <Bell size={16} />
          Növbəti addım
        </span>
        <h2>Admin panel hazır qalır, istifadəçi tərəfi ayrıca məhsul kimi böyüyür.</h2>
      </div>
      <button className="primary-button large">Əlaqə yarat</button>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
