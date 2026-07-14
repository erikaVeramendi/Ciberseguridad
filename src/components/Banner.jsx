export default function Banner() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f00 50%, #0a0a0a 100%)',
      }}
    >
      {/* Decorative blurred blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #D4AF37, transparent)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #8B4513, transparent)', filter: 'blur(80px)' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}>
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#D4AF37' }}>
              🥃 Experiencia Premium
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="shimmer-text">La</span><br />
            <span className="text-white">Destilería</span>
          </h1>

          <p className="text-lg mb-8 max-w-md" style={{ color: '#888', lineHeight: '1.8' }}>
            Descubre nuestra colección curada de los mejores licores del mundo. 
            Whisky, ron, vino, tequila y más — para cada paladar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#catalogo">
              <button className="btn-gold text-sm px-8 py-3">Ver Catálogo</button>
            </a>
            <a href="#sugerencias"
              className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                border: '1px solid rgba(212,175,55,0.4)',
                color: '#D4AF37',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.1)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              Sugerir Bebida ✍️
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center md:justify-start">
            {[['50+', 'Marcas'], ['Bs. 18', 'Desde'], ['★ 4.9', 'Rating']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold" style={{ color: '#D4AF37', fontFamily: "'Playfair Display', serif" }}>{num}</div>
                <div className="text-xs mt-1" style={{ color: '#666' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo grid */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          {[
            {
              src: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?w=400&q=80',
              label: 'Bar Premium'
            },
            {
              src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
              label: 'Licores Importados'
            },
            {
              src: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=400&q=80',
              label: 'Cervezas Artesanales'
            },
            {
              src: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&q=80',
              label: 'Whisky Importado'
            },
          ].map(({ src, label }, i) => (

            <div key={i} className="card-dark relative overflow-hidden group" style={{ aspectRatio: '4/3' }}>
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3"
                style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                <p className="text-xs font-semibold" style={{ color: '#D4AF37' }}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest" style={{ color: '#555' }}>SCROLL</span>
        <div className="w-px h-8" style={{ background: 'linear-gradient(#D4AF37, transparent)' }} />
      </div>
    </section>
  )
}
