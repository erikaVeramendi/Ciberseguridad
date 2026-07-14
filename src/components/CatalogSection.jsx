const PRODUCTS = [
  {
    id: 1,
    name: 'Fernet Branca',
    category: 'Amargo',
    origin: '🇮🇹 Italia',
    price: 'Bs. 85',
    abv: '39%',
    description: 'El amargo italiano por excelencia. Hierbas, menta y especias que lo hacen irresistible con Coca-Cola.',
    img: 'https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?w=400&q=80',
    tags: ['Amargo', 'Clásico'],
  },
  {
    id: 2,
    name: 'Jägermeister',
    category: 'Licor de Hierbas',
    origin: '🇩🇪 Alemania',
    price: 'Bs. 90',
    abv: '35%',
    description: 'Licor de 56 hierbas y especias. Frío directo del freezer o en shot. Rico y legendario.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
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
    img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80',
    tags: ['Puro', 'Versátil'],
  },
  {
    id: 4,
    name: 'Tequila José Cuervo',
    category: 'Tequila',
    origin: '🇲🇽 México',
    price: 'Bs. 80',
    abv: '38%',
    description: 'El tequila más vendido del mundo. Agave azul 100%, perfecto para margaritas o en shot con limón y sal.',
    img: 'https://images.unsplash.com/photo-1623330188912-95b7fc8e1b00?w=400&q=80',
    tags: ['Shot', 'Mexicano'],
  },
  {
    id: 5,
    name: 'Cerveza Paceña',
    category: 'Cerveza',
    origin: '🇧🇴 Bolivia',
    price: 'Bs. 18',
    abv: '5%',
    description: 'La cerveza orgullo boliviano. Rubia, refrescante y perfecta para cualquier ocasión. La favorita de todos.',
    img: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=400&q=80',
    tags: ['Rubia', 'Bolivia'],
  },
  {
    id: 6,
    name: 'Ron Havana Club 3',
    category: 'Ron',
    origin: '🇨🇺 Cuba',
    price: 'Bs. 65',
    abv: '40%',
    description: 'Ron blanco cubano añejado 3 años. Ligero y aromático, ideal para mojitos y daikiris.',
    img: 'https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?w=400&q=80',
    tags: ['Cubano', 'Cóctel'],
  },
  {
    id: 7,
    name: 'Whisky Jack Daniel\'s',
    category: 'Whisky',
    origin: '🇺🇸 EE.UU.',
    price: 'Bs. 120',
    abv: '40%',
    description: 'Tennessee whiskey filtrado en carbón de arce. Caramelo, vainilla y roble. El más reconocido del mundo.',
    img: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80',
    tags: ['Premium', 'Tennessee'],
  },
  {
    id: 8,
    name: 'Gin Beefeater',
    category: 'Gin',
    origin: '🇬🇧 Inglaterra',
    price: 'Bs. 95',
    abv: '40%',
    description: 'Gin London Dry con enebro, cilantro y piel de naranja. El G&T perfecto con hielo y rodaja de limón.',
    img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80',
    tags: ['London Dry', 'G&T'],
  },
  {
    id: 9,
    name: 'Vino Casillero del Diablo',
    category: 'Vino',
    origin: '🇨🇱 Chile',
    price: 'Bs. 70',
    abv: '13.5%',
    description: 'Cabernet Sauvignon chileno con notas de frutos negros, especias y un final suave y persistente.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80',
    tags: ['Tinto', 'Chileno'],
  },
]

const TAG_COLORS = {
  Amargo: '#a3440e',
  Clásico: '#7c3aed',
  Shot: '#dc2626',
  Party: '#db2777',
  Puro: '#0369a1',
  Versátil: '#2d8a4e',
  Mexicano: '#ca8a04',
  Rubia: '#D4AF37',
  Bolivia: '#16a34a',
  Cubano: '#0891b2',
  Cóctel: '#9333ea',
  Premium: '#D4AF37',
  Tennessee: '#92400e',
  'London Dry': '#0f766e',
  'G&T': '#059669',
  Tinto: '#be123c',
  Chileno: '#7c3aed',
}

export default function CatalogSection() {
  return (
    <section id="catalogo" className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0800 50%, #0a0a0a 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#D4AF37' }}>
              🍾 Nuestro Catálogo
            </span>
          </div>
          <h2 className="section-title text-white mb-4">
            Bebidas <span className="gold-gradient">Selectas</span>
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: '#777' }}>
            Las marcas más reconocidas del mundo, disponibles para ti. Precios en Bolivianos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map(p => (
            <div key={p.id} className="card-dark flex flex-col group">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: '220px' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(transparent 50%, rgba(0,0,0,0.85))' }} />
                {/* Tags */}
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                  {p.tags.map(tag => (
                    <span key={tag}
                      className="text-xs font-semibold px-2 py-1 rounded-full"
                      style={{
                        background: 'rgba(0,0,0,0.7)',
                        border: `1px solid ${TAG_COLORS[tag] || '#666'}`,
                        color: TAG_COLORS[tag] || '#aaa',
                      }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {/* ABV badge */}
                <div className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(0,0,0,0.85)', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)' }}>
                  {p.abv} ABV
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold tracking-wide mb-1" style={{ color: '#D4AF37' }}>{p.category}</p>
                    <h3 className="text-lg font-bold text-white">{p.name}</h3>
                  </div>
                  <span className="text-xl font-black shrink-0" style={{ color: '#D4AF37', fontFamily: "'Playfair Display', serif" }}>
                    {p.price}
                  </span>
                </div>

                <p className="text-sm flex-1" style={{ color: '#888', lineHeight: '1.6' }}>{p.description}</p>

                <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid #2a2a2a' }}>
                  <span className="text-xs" style={{ color: '#555' }}>{p.origin}</span>
                  <button className="btn-gold text-xs py-2 px-4">Agregar 🛒</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
