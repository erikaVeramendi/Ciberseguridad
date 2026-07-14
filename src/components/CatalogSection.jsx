const PRODUCTS = [
  {
    id: 1,
    name: 'Fernet Branca',
    category: 'Amargo Italiano',
    origin: '🇮🇹 Italia',
    price: 'Bs. 85',
    abv: '39%',
    description: 'El amargo italiano por excelencia. Hierbas, menta y especias. Perfecto con Coca-Cola sobre hielo.',
    img: '/images/fernet.png',
    tags: ['Amargo', 'Clásico'],
  },
  {
    id: 2,
    name: 'Jägermeister',
    category: 'Licor de Hierbas',
    origin: '🇩🇪 Alemania',
    price: 'Bs. 90',
    abv: '35%',
    description: 'Licor de 56 hierbas y especias. Frío directo del freezer en shot. Rico, oscuro y legendario.',
    img: '/images/jager.png',
    tags: ['Shot', 'Party'],
  },
  {
    id: 3,
    name: 'Vodka Absolut',
    category: 'Vodka',
    origin: '🇸🇪 Suecia',
    price: 'Bs. 75',
    abv: '40%',
    description: 'Vodka limpio y suave elaborado con trigo de invierno sueco. Base perfecta para cualquier cóctel.',
    img: '/images/vodka.png',
    tags: ['Puro', 'Versátil'],
  },
  {
    id: 4,
    name: 'Tequila José Cuervo',
    category: 'Tequila',
    origin: '🇲🇽 México',
    price: 'Bs. 80',
    abv: '38%',
    description: 'El tequila más vendido del mundo. Agave azul 100%, perfecto en shot con limón y sal o en margarita.',
    img: '/images/tequila.png',
    tags: ['Shot', 'Mexicano'],
  },
  {
    id: 5,
    name: 'Cerveza Paceña',
    category: 'Cerveza',
    origin: '🇧🇴 Bolivia',
    price: 'Bs. 18',
    abv: '5%',
    description: 'La cerveza orgullo boliviano. Rubia, refrescante y perfecta para cualquier ocasión social.',
    img: '/images/cerveza.png',
    tags: ['Rubia', 'Bolivia'],
  },
  {
    id: 6,
    name: 'Ron Havana Club 3',
    category: 'Ron Cubano',
    origin: '🇨🇺 Cuba',
    price: 'Bs. 65',
    abv: '40%',
    description: 'Ron blanco cubano añejado 3 años. Ligero y aromático, ideal para mojitos y daikiris.',
    img: '/images/ron.png',
    tags: ['Cubano', 'Cóctel'],
  },
  {
    id: 7,
    name: "Jack Daniel's",
    category: 'Whisky',
    origin: '🇺🇸 EE.UU.',
    price: 'Bs. 120',
    abv: '40%',
    description: 'Tennessee whiskey filtrado en carbón de arce. Caramelo, vainilla y roble tostado. El más famoso del mundo.',
    img: '/images/whisky.png',
    tags: ['Premium', 'Tennessee'],
  },
  {
    id: 8,
    name: 'Gin Beefeater',
    category: 'Gin London Dry',
    origin: '🇬🇧 Inglaterra',
    price: 'Bs. 95',
    abv: '40%',
    description: 'Gin London Dry con enebro, cilantro y piel de naranja. El G&T perfecto con hielo y rodaja de limón.',
    img: 'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=500&q=85',
    tags: ['London Dry', 'G&T'],
  },
  {
    id: 9,
    name: 'Casillero del Diablo',
    category: 'Vino Cabernet',
    origin: '🇨🇱 Chile',
    price: 'Bs. 70',
    abv: '13.5%',
    description: 'Cabernet Sauvignon chileno con notas de frutos negros, cerezas, especias y un final suave y persistente.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=500&q=85',
    tags: ['Tinto', 'Chileno'],
  },
]

const TAG_COLORS = {
  Amargo: '#f97316', Clásico: '#8b5cf6', Shot: '#ef4444', Party: '#ec4899',
  Puro: '#3b82f6', Versátil: '#22c55e', Mexicano: '#eab308', Rubia: '#D4AF37',
  Bolivia: '#16a34a', Cubano: '#0891b2', Cóctel: '#9333ea', Premium: '#D4AF37',
  Tennessee: '#92400e', 'London Dry': '#0d9488', 'G&T': '#059669', Tinto: '#be123c', Chileno: '#7c3aed',
}

export default function CatalogSection() {
  return (
    <section id="catalogo" style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0800 50%, #0a0a0a 100%)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1rem', borderRadius: '9999px',
            background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)',
            marginBottom: '1.25rem',
          }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: '#D4AF37', textTransform: 'uppercase' }}>
              🍾 Nuestro Catálogo
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 900,
            color: '#fff',
            fontFamily: "'Playfair Display', serif",
            margin: '0 0 1rem',
            lineHeight: 1.2,
          }}>
            Bebidas <span className="gold-gradient">Selectas</span>
          </h2>
          <p style={{ color: '#777', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
            Las marcas más reconocidas del mundo, disponibles para ti. Precios en Bolivianos.
          </p>
        </div>

        {/* ── Product Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.75rem',
        }}>
          {PRODUCTS.map(p => (
            <div key={p.id} style={{
              background: '#141414',
              border: '1px solid #2a2a2a',
              borderRadius: '1rem',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(212,175,55,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#1a1a1a' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.5s ease' }}
                  loading="lazy"
                  onMouseEnter={e => e.target.style.transform = 'scale(1.07)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.75) 100%)',
                }} />
                {/* Tags top-left */}
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {p.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.55rem',
                      borderRadius: '9999px',
                      background: 'rgba(0,0,0,0.75)',
                      border: `1px solid ${TAG_COLORS[tag] || '#666'}`,
                      color: TAG_COLORS[tag] || '#aaa',
                    }}>{tag}</span>
                  ))}
                </div>
                {/* ABV top-right */}
                <div style={{
                  position: 'absolute', top: '0.75rem', right: '0.75rem',
                  fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.55rem',
                  borderRadius: '0.4rem',
                  background: 'rgba(0,0,0,0.85)',
                  border: '1px solid rgba(212,175,55,0.35)',
                  color: '#D4AF37',
                }}>{p.abv} ABV</div>
              </div>

              {/* Body */}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '1.25rem', gap: '0.75rem' }}>
                {/* Title row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                  <div>
                    <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                      {p.category}
                    </p>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff', margin: 0 }}>{p.name}</h3>
                  </div>
                  <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#D4AF37', fontFamily: "'Playfair Display', serif", whiteSpace: 'nowrap', flexShrink: 0 }}>
                    {p.price}
                  </span>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.82rem', color: '#888', lineHeight: 1.65, flex: 1, margin: 0 }}>{p.description}</p>

                {/* Footer row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.85rem', borderTop: '1px solid #2a2a2a' }}>
                  <span style={{ fontSize: '0.75rem', color: '#555' }}>{p.origin}</span>
                  <button className="btn-gold" style={{ fontSize: '0.75rem', padding: '0.45rem 1rem' }}>
                    Agregar 🛒
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
