import { useState, useEffect, useRef } from 'react'

// ── Icons ────────────────────────────────────────────────────────────────────

function IconDroplet() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  )
}

function IconFlame() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

function IconHeatPump() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <circle cx="12" cy="14" r="3" />
      <path d="M12 11v-1M12 17v1M9 14H8M16 14h-1M10 12l-.5-.5M14 16l.5.5M10 16l-.5.5M14 12l.5-.5" />
    </svg>
  )
}

function IconSun() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function IconRadiator() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="4" height="12" rx="1" />
      <rect x="7" y="6" width="4" height="12" rx="1" />
      <rect x="13" y="6" width="4" height="12" rx="1" />
      <rect x="18" y="6" width="4" height="12" rx="1" />
      <path d="M2 9h20M2 15h20" />
    </svg>
  )
}

function IconWrench() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function IconBeaker() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M9 3v7L4.5 17A2 2 0 0 0 6.31 20h11.38A2 2 0 0 0 19.5 17L15 10V3" />
      <path d="M8 20h8" />
    </svg>
  )
}

function IconPipe() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h6M16 12h6M8 8v8M16 8v8M8 8a4 4 0 0 1 8 0M8 16a4 4 0 0 0 8 0" />
    </svg>
  )
}

function IconBrick() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="4" rx="1" />
      <rect x="2" y="10" width="9" height="4" rx="1" />
      <rect x="13" y="10" width="9" height="4" rx="1" />
      <rect x="2" y="16" width="20" height="4" rx="1" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

// ── Eyebrow label ────────────────────────────────────────────────────────────

function Eyebrow({ children, color = 'copper' }: { children: string; color?: 'copper' | 'teal' }) {
  const c = color === 'copper' ? '#C97A3E' : '#3E8A6B'
  return (
    <p style={{ color: c, fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '16px' }}>
      {children}
    </p>
  )
}

// ── Header ───────────────────────────────────────────────────────────────────

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Služby', href: '#sluzby' },
    { label: 'O nás', href: '#o-nas' },
    { label: 'Tepelná čerpadla', href: '#moderna' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? 'rgba(31,40,48,0.97)' : 'rgba(31,40,48,0)',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,122,62,0.15)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', height: '72px', gap: '32px' }}>
        {/* Wordmark */}
        <a href="#" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px', color: '#EFEDE6', letterSpacing: '-0.02em' }}>
            Veselý <span style={{ color: '#C97A3E' }}>&</span> Šebesta
          </span>
        </a>

        {/* Nav — desktop */}
        <nav style={{ display: 'flex', gap: '8px', flex: 1 }} className="hidden-mobile">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 500,
                color: 'rgba(239,237,230,0.75)', textDecoration: 'none',
                padding: '6px 14px', borderRadius: '6px',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#EFEDE6'; (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.06)' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(239,237,230,0.75)'; (e.target as HTMLElement).style.background = 'transparent' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone numbers — desktop */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'flex-end', flexShrink: 0 }} className="hidden-mobile">
          <a href="tel:+420774545455" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: '#EFEDE6', textDecoration: 'none' }}>+420 774 545 455</a>
          <a href="tel:+420606078178" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: '#EFEDE6', textDecoration: 'none' }}>+420 606 078 178</a>
        </div>

        {/* CTA — desktop */}
        <a
          href="#kontakt"
          className="hidden-mobile"
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px',
            backgroundColor: '#C97A3E', color: '#fff', textDecoration: 'none',
            padding: '10px 20px', borderRadius: '8px', flexShrink: 0,
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b5692e')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C97A3E')}
        >
          Nezávazná poptávka
        </a>

        {/* Hamburger — mobile */}
        <button
          className="show-mobile"
          style={{ marginLeft: 'auto', background: 'none', border: 'none', color: '#EFEDE6', cursor: 'pointer', padding: '4px' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <IconX /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: '#1F2830', borderTop: '1px solid rgba(201,122,62,0.2)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '12px 0', fontFamily: 'var(--font-body)',
                fontSize: '16px', fontWeight: 500, color: '#EFEDE6', textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {l.label}
            </a>
          ))}
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="tel:+420774545455" style={{ color: '#C97A3E', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>+420 774 545 455</a>
            <a href="tel:+420606078178" style={{ color: '#C97A3E', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>+420 606 078 178</a>
          </div>
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'inline-block', marginTop: '16px',
              backgroundColor: '#C97A3E', color: '#fff', textDecoration: 'none',
              padding: '12px 24px', borderRadius: '8px', fontFamily: 'var(--font-display)',
              fontWeight: 700, fontSize: '14px',
            }}
          >
            Nezávazná poptávka
          </a>
        </div>
      )}
    </header>
  )
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=1600&h=1000&fit=crop&auto=format)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundColor: '#1a2830',
        }}
      />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(31,40,48,0.92) 55%, rgba(31,40,48,0.6) 100%)' }} />
      {/* Copper accent line */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'linear-gradient(to bottom, transparent, #C97A3E 30%, #C97A3E 70%, transparent)' }} />

      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '120px 24px 80px', width: '100%' }}>
        <div style={{ maxWidth: '660px' }}>
          <Eyebrow>Jižní Morava · Od roku 2010</Eyebrow>
          <h1
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 800,
              fontSize: 'clamp(36px, 5vw, 62px)', lineHeight: 1.1,
              color: '#EFEDE6', letterSpacing: '-0.03em', marginBottom: '24px',
            }}
          >
            Instalatérství a topenářství,{' '}
            <span style={{ color: '#C97A3E' }}>na které se spoléhá</span>{' '}
            už 15 let
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: 1.65,
              color: 'rgba(239,237,230,0.82)', marginBottom: '40px', maxWidth: '560px',
            }}
          >
            Voda, odpady, tepelná čerpadla, plynové kotle a solární systémy na jižní Moravě — od dvou zkušených řemeslníků.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="#kontakt"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#C97A3E', color: '#fff',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px',
                padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#b5692e'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#C97A3E'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Nezávazná poptávka <IconArrowRight />
            </a>
            <a
              href="tel:+420774545455"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                border: '1.5px solid rgba(239,237,230,0.35)', color: '#EFEDE6',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px',
                padding: '14px 28px', borderRadius: '8px', textDecoration: 'none',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C97A3E'; e.currentTarget.style.backgroundColor = 'rgba(201,122,62,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(239,237,230,0.35)'; e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              <IconPhone /> Zavolat
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.5 }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, #C97A3E)' }} />
      </div>
    </section>
  )
}

// ── Trust strip ───────────────────────────────────────────────────────────────

function TrustStrip() {
  const items = [
    { icon: <IconShield />, label: 'Spolehlivá firma', sub: 'Certifikovaná kvalita' },
    { icon: <IconWrench />, label: 'Téměř 20 let praxe', sub: 'V oboru instalací a topenářství' },
    { icon: null, label: '15 let', sub: 'Společné spolupráce partnerů' },
    { icon: <IconMapPin />, label: 'Jižní Morava', sub: 'Regionální pokrytí' },
    { icon: <IconClock />, label: 'Po–Pá 7:30–19:00', sub: 'Provozní hodiny' },
  ]

  return (
    <section style={{ backgroundColor: '#F4F3EC', padding: '64px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '32px 24px',
            alignItems: 'start',
          }}
        >
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ color: '#C97A3E', marginBottom: '2px' }}>
                {item.icon || (
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '32px', color: '#C97A3E', lineHeight: 1 }}>15</span>
                )}
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px', color: '#1C242B', margin: 0 }}>
                {item.icon ? item.label : 'let spolupráce'}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#5a6875', margin: 0, lineHeight: 1.5 }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Partnership ───────────────────────────────────────────────────────────────

function Partnership() {
  return (
    <section id="o-nas" style={{ backgroundColor: '#1F2830', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px 80px', alignItems: 'center' }}>

          {/* Image block */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '12px', overflow: 'hidden',
                backgroundImage: 'url(https://images.unsplash.com/photo-1659353588615-daca46eab6cf?w=720&h=580&fit=crop&auto=format)',
                backgroundSize: 'cover', backgroundPosition: 'center',
                backgroundColor: '#2a3540',
                aspectRatio: '4/3.2',
              }}
            />
            {/* Copper accent frame */}
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '120px', height: '120px', border: '3px solid #C97A3E', borderRadius: '8px', zIndex: -1 }} />
            {/* Years badge */}
            <div style={{
              position: 'absolute', top: '-20px', left: '-20px',
              backgroundColor: '#C97A3E', borderRadius: '10px',
              padding: '16px 20px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '36px', color: '#fff', margin: 0, lineHeight: 1 }}>15+</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.85)', margin: 0, marginTop: '4px' }}>let partnerství</p>
            </div>
          </div>

          {/* Text block */}
          <div>
            <Eyebrow>Kdo jsme</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#EFEDE6', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '24px' }}>
              Dva instalatéři,<br />
              <span style={{ color: '#C97A3E' }}>jeden standard kvality</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.7, color: 'rgba(239,237,230,0.78)', marginBottom: '32px' }}>
              Miroslav Veselý a Lukáš Šebesta jsou dva nezávislí řemeslníci, kteří spolu pracují přes 15 let. Každý přináší téměř 20 let individuálních zkušeností — a jejich zákazníci profitují z obou.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.7, color: 'rgba(239,237,230,0.78)', marginBottom: '40px' }}>
              Spolu se specializují na precizní provedení, individuální přístup ke každé zakázce a sledování moderních, energeticky úsporných technologií. Není to anonymní firma — jsou to dva konkrétní lidé, kteří za svou prací stojí.
            </p>

            {/* Partner cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {[
                {
                  name: 'Miroslav Veselý',
                  phone: '+420 774 545 455',
                  location: 'Pohořelice',
                },
                {
                  name: 'Lukáš Šebesta',
                  phone: '+420 606 078 178',
                  location: 'Kyjovice',
                },
              ].map(p => (
                <div
                  key={p.name}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,122,62,0.2)',
                    borderRadius: '10px', padding: '20px',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: '#EFEDE6', margin: '0 0 8px' }}>{p.name}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#C97A3E', margin: '0 0 4px' }}>{p.phone}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(239,237,230,0.5)', margin: 0 }}>{p.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <IconDroplet />,
    title: 'Instalace vody a odpadů',
    desc: 'Komplexní instalace vodovodních a odpadních systémů pro domácnosti i firmy.',
    accent: 'copper',
  },
  {
    icon: <IconHeatPump />,
    title: 'Tepelná čerpadla',
    desc: 'Montáž moderních tepelných čerpadel pro efektivní a úsporné vytápění.',
    accent: 'teal',
  },
  {
    icon: <IconFlame />,
    title: 'Plynové kotle',
    desc: 'Výměna a montáž plynových kotlů včetně servisu a uvedení do provozu.',
    accent: 'copper',
  },
  {
    icon: <IconSun />,
    title: 'Solární systémy',
    desc: 'Montáž solárních systémů pro ohřev vody a rozvodů topení.',
    accent: 'teal',
  },
  {
    icon: <IconRadiator />,
    title: 'Rozvody topení',
    desc: 'Kompletní rozvody topné soustavy, modernizace a rekonstrukce.',
    accent: 'copper',
  },
  {
    icon: <IconBeaker />,
    title: 'Proplachy topných systémů',
    desc: 'Proplachy topných systémů a chemická úprava topné vody pro optimální výkon.',
    accent: 'copper',
  },
  {
    icon: <IconPipe />,
    title: 'Rozvody ZTI',
    desc: 'Veškeré rozvody zdravotně technické instalace — voda, kanalizace, plyn.',
    accent: 'copper',
  },
  {
    icon: <IconBrick />,
    title: 'Zednické a izolatérské práce',
    desc: 'Drobné zednické a izolatérské práce v souvislosti s instalacemi.',
    accent: 'copper',
  },
]

function Services() {
  return (
    <section id="sluzby" style={{ backgroundColor: '#F4F3EC', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <Eyebrow>Co nabízíme</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 46px)', color: '#1C242B', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Kompletní instalatérské<br />a topenářské služby
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {services.map((s, i) => {
            const isTeal = s.accent === 'teal'
            const accentColor = isTeal ? '#3E8A6B' : '#C97A3E'
            return (
              <div
                key={i}
                style={{
                  backgroundColor: '#fff', borderRadius: '10px',
                  border: `1px solid ${accentColor}22`,
                  borderTop: `3px solid ${accentColor}`,
                  padding: '28px 24px',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ color: accentColor, marginBottom: '16px' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '17px', color: '#1C242B', margin: '0 0 10px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: 1.6, color: '#5a6875', margin: 0 }}>{s.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ── Modern heating spotlight ──────────────────────────────────────────────────

function ModernHeating() {
  return (
    <section id="moderna" style={{ backgroundColor: '#1a2e26', padding: '120px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle teal gradient wash */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 50%, rgba(62,138,107,0.18) 0%, transparent 60%)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px 80px', alignItems: 'center' }}>

          <div>
            <Eyebrow color="teal">Moderní technologie</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 44px)', color: '#EFEDE6', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '24px' }}>
              Sledujeme trendy,<br />
              <span style={{ color: '#3E8A6B' }}>aby vaše topení šetřilo</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: 1.7, color: 'rgba(239,237,230,0.78)', marginBottom: '32px' }}>
              Tepelná čerpadla a solární systémy pro ohřev vody jsou budoucností efektivního vytápění. Jsme specializováni na moderní, energeticky úsporná řešení, která snižují vaše náklady na provoz dlouhodobě.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
              {[
                'Tepelná čerpadla vzduch/voda, země/voda',
                'Solární kolektory pro ohřev teplé vody',
                'Integrace s existujícím topným systémem',
                'Výpočet návratnosti a úspora energie',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ color: '#3E8A6B', marginTop: '1px', flexShrink: 0 }}><IconCheck /></div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(239,237,230,0.85)', margin: 0, lineHeight: 1.5 }}>{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                backgroundColor: '#3E8A6B', color: '#fff',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '14px',
                padding: '12px 24px', borderRadius: '8px', textDecoration: 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#317a5d')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3E8A6B')}
            >
              Nezávazná konzultace <IconArrowRight />
            </a>
          </div>

          {/* Images */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                style={{
                  borderRadius: '10px', overflow: 'hidden',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1776860150305-108ed577d7d4?w=500&h=360&fit=crop&auto=format)',
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  backgroundColor: '#1d3a30', aspectRatio: '4/3',
                  border: '1px solid rgba(62,138,107,0.2)',
                }}
              />
              <div
                style={{
                  borderRadius: '10px', overflow: 'hidden',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1724041875334-0a6397111c7e?w=500&h=260&fit=crop&auto=format)',
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  backgroundColor: '#1d3a30', aspectRatio: '4/2.5',
                  border: '1px solid rgba(62,138,107,0.2)',
                }}
              />
            </div>
            <div style={{ paddingTop: '32px' }}>
              <div
                style={{
                  borderRadius: '10px', overflow: 'hidden',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1650551182956-47efa0f90b64?w=500&h=560&fit=crop&auto=format)',
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  backgroundColor: '#1d3a30', height: '100%', minHeight: '280px',
                  border: '1px solid rgba(62,138,107,0.2)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Why choose us ─────────────────────────────────────────────────────────────

const pillars = [
  {
    number: '01',
    title: 'Téměř 20 let zkušeností v oboru',
    desc: 'Každý z nás přináší téměř dvě dekády praxe v instalatérství a topenářství.',
  },
  {
    number: '02',
    title: 'Individuální přístup ke každé zakázce',
    desc: 'Žádná zakázka není pro nás jen číslo. Každému zákazníkovi věnujeme plnou pozornost a přizpůsobujeme řešení jeho potřebám.',
  },
  {
    number: '03',
    title: 'Precizní provedení a kvalitní zpracování',
    desc: 'Preciznost je naše vizitka. Dbáme na kvalitu každého detailu a svou práci odevzdáváme teprve tehdy, kdy je skutečně hotová.',
  },
  {
    number: '04',
    title: 'Moderní energeticky úsporná řešení',
    desc: 'Sledujeme trendy v oboru, aby vaše instalace splňovala dnešní nároky na efektivitu a ekologii.',
  },
]

function WhyUs() {
  return (
    <section style={{ backgroundColor: '#1F2830', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          <div style={{ position: 'sticky', top: '100px' }}>
            <Eyebrow>Proč my</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3vw, 42px)', color: '#EFEDE6', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
              Čtyři důvody, proč nám zákazníci důvěřují
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {pillars.map((p, i) => (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid rgba(239,237,230,0.08)',
                  padding: '32px 0',
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: '24px',
                  alignItems: 'start',
                }}
              >
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '13px', color: '#C97A3E', letterSpacing: '0.05em', paddingTop: '4px' }}>
                  {p.number}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '19px', color: '#EFEDE6', margin: '0 0 10px', lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: 1.7, color: 'rgba(239,237,230,0.65)', margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Service area ──────────────────────────────────────────────────────────────

function ServiceArea() {
  return (
    <section style={{ backgroundColor: '#F4F3EC', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <Eyebrow>Kde působíme</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 46px)', color: '#1C242B', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '16px' }}>
            Oblast Jižní Morava
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: '#5a6875', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            Pokrýváme celý Jihomoravský kraj — Brno, Znojmo, Pohořelice, Hustopeče, Mikulov a okolí.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          {/* Map placeholder — styled regional representation */}
          <div
            style={{
              backgroundColor: '#1F2830', borderRadius: '12px',
              padding: '48px 32px', display: 'flex', flexDirection: 'column',
              gap: '24px', gridColumn: 'span 1',
            }}
          >
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px', color: '#C97A3E', margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Lokality
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {['Pohořelice', 'Brno', 'Znojmo', 'Hustopeče', 'Mikulov', 'Kyjovice', 'Moravský Krumlov', 'Ivančice'].map(city => (
                <div
                  key={city}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(239,237,230,0.8)',
                  }}
                >
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#C97A3E', flexShrink: 0 }} />
                  {city}
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid rgba(239,237,230,0.1)', paddingTop: '20px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(239,237,230,0.5)', margin: 0, lineHeight: 1.6 }}>
                Pokud vaše obec není v seznamu, kontaktujte nás. Zakázky přijímáme v celém Jihomoravském kraji dle dohody.
              </p>
            </div>
          </div>

          {/* Map visual */}
          <div
            style={{
              position: 'relative', borderRadius: '12px', overflow: 'hidden',
              backgroundImage: 'url(https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=720&h=480&fit=crop&auto=format)',
              backgroundSize: 'cover', backgroundPosition: 'center',
              backgroundColor: '#2a3540',
              aspectRatio: '3/2',
              border: '1px solid rgba(201,122,62,0.2)',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(31,40,48,0.55)' }} />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div style={{ color: '#C97A3E' }}><IconMapPin /></div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: '#EFEDE6', margin: 0, textAlign: 'center' }}>Jižní Morava</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(239,237,230,0.7)', margin: 0 }}>Jihomoravský kraj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Gallery ───────────────────────────────────────────────────────────────────

const galleryPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1650551182991-b07558247564?w=600&h=500&fit=crop&auto=format',
    caption: 'Rozvod topení',
  },
  {
    url: 'https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?w=600&h=500&fit=crop&auto=format',
    caption: 'Montáž plynového kotle',
  },
  {
    url: 'https://images.unsplash.com/photo-1710829558360-6f8f5e49fedd?w=600&h=500&fit=crop&auto=format',
    caption: 'Instalace tepelného čerpadla',
  },
  {
    url: 'https://images.unsplash.com/photo-1660330589257-813305a4a383?w=600&h=500&fit=crop&auto=format',
    caption: 'Montáž solárního systému',
  },
  {
    url: 'https://images.unsplash.com/photo-1639600993675-2281b2c939f0?w=600&h=500&fit=crop&auto=format',
    caption: 'Venkovní rozvody',
  },
  {
    url: 'https://images.unsplash.com/photo-1620653713380-7a34b773fef8?w=600&h=500&fit=crop&auto=format',
    caption: 'Instalatérské práce',
  },
]

function Gallery() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: '#1F2830', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <Eyebrow>Realizace</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 46px)', color: '#EFEDE6', letterSpacing: '-0.03em', lineHeight: 1.15, margin: 0 }}>
              Naše dokončené projekty
            </h2>
          </div>
          <a
            href="#kontakt"
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '13px',
              color: '#C97A3E', textDecoration: 'none', border: '1.5px solid #C97A3E',
              padding: '10px 20px', borderRadius: '7px',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#C97A3E'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#C97A3E' }}
          >
            Zobrazit realizace →
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
          {galleryPhotos.map((photo, i) => (
            <div
              key={i}
              style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', aspectRatio: '4/3' }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div
                style={{
                  width: '100%', height: '100%',
                  backgroundImage: `url(${photo.url})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  backgroundColor: '#2a3540',
                  transition: 'transform 0.4s ease',
                  transform: hoveredIdx === i ? 'scale(1.04)' : 'scale(1)',
                }}
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(31,40,48,0.85) 0%, transparent 50%)',
                  opacity: hoveredIdx === i ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex', alignItems: 'flex-end', padding: '20px',
                }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '15px', color: '#EFEDE6', margin: 0 }}>{photo.caption}</p>
              </div>
              {/* Always-visible subtle label */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(31,40,48,0.7) 0%, transparent 60%)',
                padding: '16px', opacity: hoveredIdx === i ? 0 : 1, transition: 'opacity 0.3s',
              }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(239,237,230,0.8)', margin: 0 }}>{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(239,237,230,0.15)', borderRadius: '8px',
    padding: '13px 16px', fontFamily: 'var(--font-body)', fontSize: '15px',
    color: '#EFEDE6', outline: 'none', transition: 'border-color 0.2s',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600,
    color: 'rgba(239,237,230,0.6)', display: 'block', marginBottom: '8px',
    textTransform: 'uppercase', letterSpacing: '0.06em',
  }

  return (
    <section id="kontakt" style={{ backgroundColor: '#1F2830', padding: '120px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <Eyebrow>Kontakt</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 52px)', color: '#EFEDE6', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px' }}>
            Potřebujete instalatéra<br />nebo topenáře?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'rgba(239,237,230,0.65)', maxWidth: '440px', margin: '0 auto' }}>
            Napište nám nebo zavolejte — ozveme se zpravidla do 24 hodin.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
          {/* Form */}
          <div>
            {sent ? (
              <div style={{ backgroundColor: 'rgba(62,138,107,0.12)', border: '1px solid rgba(62,138,107,0.35)', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
                <div style={{ color: '#3E8A6B', marginBottom: '16px' }}><IconCheck /></div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', color: '#EFEDE6', margin: '0 0 12px' }}>Odesláno!</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(239,237,230,0.7)', margin: 0, lineHeight: 1.6 }}>
                  Vaše poptávka byla odeslána. Ozveme se vám co nejdříve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Jméno *</label>
                  <input
                    required style={inputStyle} placeholder="Jan Novák"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = '#C97A3E')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(239,237,230,0.15)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Telefon *</label>
                  <input
                    required style={inputStyle} placeholder="+420 ··· ··· ···" type="tel"
                    value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = '#C97A3E')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(239,237,230,0.15)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>E-mail</label>
                  <input
                    style={inputStyle} placeholder="vas@email.cz" type="email"
                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = '#C97A3E')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(239,237,230,0.15)')}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Popis zakázky *</label>
                  <textarea
                    required rows={4}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Popište, co potřebujete…"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = '#C97A3E')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(239,237,230,0.15)')}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#C97A3E', color: '#fff',
                    fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '15px',
                    padding: '14px 28px', borderRadius: '8px', border: 'none',
                    cursor: 'pointer', transition: 'background 0.2s',
                    display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b5692e')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C97A3E')}
                >
                  Odeslat poptávku <IconArrowRight />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {/* Partner 1 */}
            <div style={{ borderLeft: '3px solid #C97A3E', paddingLeft: '24px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#EFEDE6', margin: '0 0 16px' }}>Miroslav Veselý</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:+420774545455" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(239,237,230,0.78)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '15px' }}>
                  <span style={{ color: '#C97A3E' }}><IconPhone /></span> +420 774 545 455
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(239,237,230,0.78)', fontFamily: 'var(--font-body)', fontSize: '15px' }}>
                  <span style={{ color: '#C97A3E', marginTop: '1px' }}><IconMapPin /></span> Znojemská 513, 691 23 Pohořelice
                </div>
              </div>
            </div>

            {/* Partner 2 */}
            <div style={{ borderLeft: '3px solid #C97A3E', paddingLeft: '24px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '18px', color: '#EFEDE6', margin: '0 0 16px' }}>Lukáš Šebesta</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:+420606078178" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(239,237,230,0.78)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '15px' }}>
                  <span style={{ color: '#C97A3E' }}><IconPhone /></span> +420 606 078 178
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(239,237,230,0.78)', fontFamily: 'var(--font-body)', fontSize: '15px' }}>
                  <span style={{ color: '#C97A3E', marginTop: '1px' }}><IconMapPin /></span> Kyjovice 43
                </div>
              </div>
            </div>

            {/* Shared */}
            <div style={{ borderLeft: '3px solid rgba(201,122,62,0.3)', paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="mailto:vesely-sebesta@seznam.cz" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(239,237,230,0.78)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '15px' }}>
                <span style={{ color: '#C97A3E' }}><IconMail /></span> vesely-sebesta@seznam.cz
              </a>
              <a href="https://instagram.com/vesely_sebesta" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(239,237,230,0.78)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: '15px' }}>
                <span style={{ color: '#C97A3E' }}><IconInstagram /></span> @vesely_sebesta
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(239,237,230,0.78)', fontFamily: 'var(--font-body)', fontSize: '15px' }}>
                <span style={{ color: '#C97A3E' }}><IconClock /></span> Po–Pá 7:30–19:00
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ backgroundColor: '#151d24', borderTop: '1px solid rgba(201,122,62,0.12)', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px', color: '#EFEDE6' }}>
          Veselý <span style={{ color: '#C97A3E' }}>&</span> Šebesta
        </span>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(239,237,230,0.4)', margin: 0 }}>
          © 2026 Veselý & Šebesta · Instalatérství a topenářství · Jižní Morava
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['IČO: 14385996', 'IČO: 14385317'].map(ico => (
            <span key={ico} style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(239,237,230,0.3)' }}>{ico}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <>
      <style>{`
        .hidden-mobile { display: flex !important; }
        .show-mobile { display: none !important; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Partnership />
        <Services />
        <ModernHeating />
        <WhyUs />
        <ServiceArea />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
