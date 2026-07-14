import { useState } from 'react'

const NAV_LINKS = ['Catálogo', 'Cocktails', 'Sugerencias', 'Nosotros']

export default function Header() {
  const [open, setOpen] = useState(false)

  const handleNav = (e, anchor) => {
    e.preventDefault()
    setOpen(false)
    const id = anchor.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 w-full z-50" style={{
      background: 'rgba(10,10,10,0.92)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(212,175,55,0.2)'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
            style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)' }}>
            🥂
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="shimmer-text">La Destilería</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={e => handleNav(e, link)}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: '#aaa', letterSpacing: '0.05em' }}
              onMouseEnter={e => e.target.style.color = '#D4AF37'}
              onMouseLeave={e => e.target.style.color = '#aaa'}
            >
              {link}
            </a>
          ))}
          <a href="#sugerencias" onClick={e => handleNav(e, 'sugerencias')}>
            <button className="btn-gold text-xs py-2 px-5">Sugerir Bebida</button>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37' }}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={e => handleNav(e, link)}
              className="text-sm font-medium py-2"
              style={{ color: '#ccc' }}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
