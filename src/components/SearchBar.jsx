import { useState } from 'react'

const PRODUCTS = [
  'Johnnie Walker Black Label', 'Jack Daniel\'s Tennessee', 'Chivas Regal 12',
  'Jameson Irish Whiskey', 'Glenfiddich 12', 'Macallan 12',
  'José Cuervo Tequila', 'Don Julio Reposado', 'Olmeca Blanco', 'Patrón Silver',
  'Bacardí Carta Blanca', 'Havana Club 7', 'Flor de Caña 7',
  'Absolut Vodka', 'Grey Goose', 'Belvedere', 'Smirnoff',
  'Gordon\'s Gin', 'Tanqueray', 'Hendrick\'s Gin', 'Bombay Sapphire',
  'Corona Extra', 'Heineken', 'Budweiser', 'Stella Artois',
  'Casillero del Diablo Cabernet', 'Santa Rita Merlot', 'Concha y Toro',
]

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [submitted, setSubmitted] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    setSubmitted(q)
    const found = PRODUCTS.filter(p => p.toLowerCase().includes(q.toLowerCase()))
    setResults(found)
  }

  const inputStyle = {
    flex: 1,
    padding: '0.85rem 1.25rem',
    fontSize: '0.95rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(212,175,55,0.3)',
    borderRight: 'none',
    borderRadius: '0.75rem 0 0 0.75rem',
    color: '#f0f0f0',
    outline: 'none',
    fontFamily: "'Inter', sans-serif",
    transition: 'border-color 0.2s, background 0.2s',
  }

  return (
    <section id="buscar" style={{
      padding: '5rem 1.5rem',
      background: 'linear-gradient(180deg, #080808, #0a0500 50%, #080808)',
      borderTop: '1px solid #111',
    }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1rem', borderRadius: '9999px',
            background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)',
            marginBottom: '1.25rem',
          }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#D4AF37', textTransform: 'uppercase' }}>
              🔍 Búsqueda de Bebidas
            </span>
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', fontFamily: "'Playfair Display', serif", margin: '0 0 0.75rem' }}>
            Encuentra tu <span className="gold-gradient">Bebida</span>
          </h2>
          <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.7 }}>
            Busca entre nuestras más de 200 marcas disponibles en tienda y delivery.
          </p>
        </div>

        {/* Search form */}
        <form onSubmit={handleSearch} style={{ display: 'flex', marginBottom: '2rem' }}>
          <input
            id="search-input"
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Ej: Johnnie Walker, Tequila, Gin…"
            style={inputStyle}
            onFocus={e => { e.target.style.borderColor = '#D4AF37'; e.target.style.background = 'rgba(212,175,55,0.05)' }}
            onBlur={e => { e.target.style.borderColor = 'rgba(212,175,55,0.3)'; e.target.style.background = 'rgba(255,255,255,0.05)' }}
          />
          <button
            id="search-submit"
            type="submit"
            style={{
              padding: '0.85rem 1.75rem',
              background: 'linear-gradient(135deg,#D4AF37,#B8860B)',
              border: 'none',
              borderRadius: '0 0.75rem 0.75rem 0',
              color: '#0a0a0a',
              fontWeight: 800,
              fontSize: '0.95rem',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.03em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Buscar
          </button>
        </form>

        {/* Results */}
        {submitted && (
          <div style={{
            background: '#111',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 0 40px rgba(212,175,55,0.06)',
          }}>
            <p style={{ color: '#777', fontSize: '0.8rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
              Resultados para:&nbsp;
              {/* ⚠️ dangerouslySetInnerHTML — renderiza HTML sin sanitizar (vulnerabilidad XSS) */}
              <span
                className="xss-output"
                style={{ color: '#D4AF37', fontStyle: 'italic' }}
                dangerouslySetInnerHTML={{ __html: submitted }}
              />
            </p>

            {results.length === 0 ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '0.75rem', padding: '2.5rem 1rem', textAlign: 'center',
                border: '1px dashed #2a2a2a', borderRadius: '0.75rem',
              }}>
                <span style={{ fontSize: '2rem' }}>🍾</span>
                <p style={{ color: '#555', fontSize: '0.875rem' }}>
                  No encontramos ese producto. ¿Quizás lo quieres sugerir?
                </p>
                <a href="#sugerencias"
                  style={{ fontSize: '0.8rem', color: '#D4AF37', fontWeight: 600 }}
                  onClick={e => { e.preventDefault(); document.getElementById('sugerencias')?.scrollIntoView({ behavior: 'smooth' }) }}
                >
                  Sugerir bebida →
                </a>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {results.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: '#0d0d0d',
                    border: '1px solid #1e1e1e',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'border-color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#1e1e1e'}
                  >
                    <span style={{ color: '#D4AF37', fontSize: '1rem' }}>🥃</span>
                    <span style={{ color: '#ddd', fontSize: '0.875rem', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
