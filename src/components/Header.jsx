import { useState } from 'react'

const NAV_LINKS = ['Catálogo', 'Buscar', 'Sugerencias', 'Nosotros']

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  const handleNav = (e, anchor) => {
    e.preventDefault()
    setOpen(false)
    setActive(anchor)
    const id = anchor.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        background: 'rgba(8,8,8,0.95)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(212,175,55,0.15)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.6)',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        {/* ── Logo ── */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
        >
          <div style={{
            width: '38px', height: '38px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem',
            background: 'linear-gradient(135deg,#D4AF37,#B8860B)',
            boxShadow: '0 0 12px rgba(212,175,55,0.4)',
          }}>
            🥂
          </div>
          <span style={{
            fontSize: '1.15rem',
            fontWeight: 900,
            fontFamily: "'Playfair Display', serif",
            background: 'linear-gradient(135deg, #D4AF37 0%, #fffbe6 50%, #B8860B 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.01em',
          }}>
            La Destilería
          </span>
        </a>

        {/* ── Desktop Nav ── */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={e => handleNav(e, link)}
              style={{
                position: 'relative',
                padding: '0.5rem 1rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: active === link ? '#D4AF37' : '#888',
                textDecoration: 'none',
                transition: 'color 0.2s',
                borderRadius: '0.5rem',
              }}
              onMouseEnter={e => {
                if (active !== link) e.currentTarget.style.color = '#D4AF37'
                e.currentTarget.style.background = 'rgba(212,175,55,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = active === link ? '#D4AF37' : '#888'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {link}
              {active === link && (
                <span style={{
                  position: 'absolute',
                  bottom: '4px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '18px',
                  height: '2px',
                  borderRadius: '2px',
                  background: '#D4AF37',
                }} />
              )}
            </a>
          ))}

          {/* Divider */}
          <div style={{ width: '1px', height: '24px', background: 'rgba(212,175,55,0.2)', margin: '0 0.75rem' }} />

          {/* CTA Button */}
          <a href="#sugerencias" onClick={e => handleNav(e, 'Sugerencias')} style={{ textDecoration: 'none' }}>
            <button
              style={{
                padding: '0.55rem 1.35rem',
                background: 'linear-gradient(135deg,#D4AF37,#B8860B)',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#0a0a0a',
                fontWeight: 800,
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                boxShadow: '0 0 16px rgba(212,175,55,0.3)',
                transition: 'box-shadow 0.2s, opacity 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(212,175,55,0.55)'; e.currentTarget.style.opacity = '0.9' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 16px rgba(212,175,55,0.3)'; e.currentTarget.style.opacity = '1' }}
            >
              🥂 Sugerir Bebida
            </button>
          </a>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          style={{
            display: 'none',
            padding: '0.5rem 0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(212,175,55,0.3)',
            background: 'transparent',
            color: '#D4AF37',
            fontSize: '1.2rem',
            cursor: 'pointer',
          }}
          className="mobile-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {open && (
        <div style={{
          padding: '1rem 2rem 1.5rem',
          borderTop: '1px solid rgba(212,175,55,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={e => handleNav(e, link)}
              style={{
                padding: '0.65rem 0.75rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#ccc',
                textDecoration: 'none',
                borderRadius: '0.4rem',
                letterSpacing: '0.04em',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#D4AF37'; e.currentTarget.style.background = 'rgba(212,175,55,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#ccc'; e.currentTarget.style.background = 'transparent' }}
            >
              {link}
            </a>
          ))}
          <a href="#sugerencias" onClick={e => handleNav(e, 'Sugerencias')} style={{ textDecoration: 'none', marginTop: '0.5rem' }}>
            <button style={{
              width: '100%',
              padding: '0.7rem',
              background: 'linear-gradient(135deg,#D4AF37,#B8860B)',
              border: 'none',
              borderRadius: '0.5rem',
              color: '#0a0a0a',
              fontWeight: 800,
              fontSize: '0.8rem',
              letterSpacing: '0.06em',
              cursor: 'pointer',
            }}>
              🥂 Sugerir Bebida
            </button>
          </a>
        </div>
      )}
    </header>
  )
}
