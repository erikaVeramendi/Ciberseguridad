import { useState } from 'react'

export default function SuggestionsForm() {
  const [input, setInput] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [name, setName] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    setSuggestions(prev => [{
      id: Date.now(),
      author: name.trim() || 'Cliente Anónimo',
      text: input,
      time: new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' }),
    }, ...prev])
    setInput('')
    setName('')
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    fontSize: '0.875rem',
    outline: 'none',
    background: '#1a1a1a',
    border: '1px solid #333',
    color: '#f0f0f0',
    fontFamily: "'Inter', sans-serif",
    transition: 'border-color 0.2s',
  }

  return (
    <section
      id="sugerencias"
      style={{
        padding: '6rem 1.5rem',
        background: 'linear-gradient(180deg, #0a0a0a, #0d0500 50%, #0a0a0a)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.3)',
            marginBottom: '1.25rem',
          }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#D4AF37', textTransform: 'uppercase' }}>
              💬 Tu Opinión Importa
            </span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff', fontFamily: "'Playfair Display', serif", margin: '0 0 1rem' }}>
            Sugerencias de <span className="gold-gradient">Bebidas</span>
          </h2>
          <p style={{ color: '#777', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto' }}>
            ¿Conoces una bebida que debería estar en nuestro catálogo? ¡Cuéntanos y la añadiremos!
          </p>
        </div>

        {/* ── Two columns ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
          alignItems: 'start',
        }}>

          {/* ── Left: Form card ── */}
          <div style={{
            background: '#111',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '1.25rem',
            padding: '2rem',
            boxShadow: '0 0 40px rgba(212,175,55,0.06)',
          }}>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#D4AF37' }}>📝</span> Deja tu Sugerencia
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: '#777', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  Tu nombre (opcional)
                </label>
                <input
                  id="suggestion-name"
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Ej: Carlos Mamani"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#D4AF37'}
                  onBlur={e => e.target.style.borderColor = '#333'}
                />
              </div>

              {/* Suggestion textarea */}
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: '#777', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                  Sugerencia de bebida
                </label>
                <textarea
                  id="suggestion-text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ej: Me gustaría ver Aperol Spritz en el menú..."
                  rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => e.target.style.borderColor = '#D4AF37'}
                  onBlur={e => e.target.style.borderColor = '#333'}
                />
              </div>

              <button id="suggestion-submit" type="submit" className="btn-gold" style={{ width: '100%' }}>
                Enviar Sugerencia 🥂
              </button>
            </form>

            {showAlert && (
              <div style={{
                marginTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.3)',
              }}>
                <span>✅</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#4ade80' }}>
                  ¡Gracias! Tu sugerencia fue enviada.
                </span>
              </div>
            )}
          </div>

          {/* ── Right: Feed card ── */}
          <div style={{
            background: '#111',
            border: '1px solid rgba(212,175,55,0.2)',
            borderRadius: '1.25rem',
            padding: '2rem',
            boxShadow: '0 0 40px rgba(212,175,55,0.06)',
            minHeight: '300px',
          }}>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#D4AF37' }}>🌟</span>
              Sugerencias de Clientes
              {suggestions.length > 0 && (
                <span style={{
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  padding: '0.15rem 0.6rem',
                  borderRadius: '9999px',
                  background: 'rgba(212,175,55,0.15)',
                  color: '#D4AF37',
                  marginLeft: '0.25rem',
                }}>
                  {suggestions.length}
                </span>
              )}
            </h3>

            {suggestions.length === 0 ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '3rem 1rem',
                textAlign: 'center',
                border: '1px dashed #2a2a2a',
                borderRadius: '0.75rem',
              }}>
                <span style={{ fontSize: '2.5rem' }}>🍷</span>
                <p style={{ color: '#555', fontSize: '0.875rem' }}>
                  Aún no hay sugerencias. ¡Sé el primero en dejar la tuya!
                </p>
              </div>
            ) : (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxHeight: '420px',
                overflowY: 'auto',
                paddingRight: '0.25rem',
              }}>
                {suggestions.map(s => (
                  <div key={s.id} style={{
                    background: '#0d0d0d',
                    border: '1px solid #1e1e1e',
                    borderRadius: '0.875rem',
                    padding: '1rem 1.25rem',
                  }}>
                    {/* Author row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          background: 'linear-gradient(135deg,#D4AF37,#B8860B)',
                          color: '#0a0a0a',
                          flexShrink: 0,
                        }}>
                          {s.author.charAt(0).toUpperCase()}
                        </div>
                        <span style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>{s.author}</span>
                      </div>
                      <span style={{ color: '#555', fontSize: '0.75rem' }}>{s.time}</span>
                    </div>

                    {/* ⚠️ dangerouslySetInnerHTML — renderiza HTML sin sanitizar (vulnerabilidad XSS) */}
                    <div
                      className="xss-output"
                      style={{ fontSize: '0.875rem' }}
                      dangerouslySetInnerHTML={{ __html: s.text }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
