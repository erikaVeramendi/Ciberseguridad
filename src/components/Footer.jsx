const LINKS = {
  'Nuestras Bebidas': ['Whisky', 'Tequila & Mezcal', 'Ron & Caña', 'Vodka', 'Gin', 'Cervezas', 'Vinos'],
  'La Destilería': ['Quiénes Somos', 'Cómo Comprar', 'Delivery', 'Horarios', 'Contacto'],
  Legal: ['Términos de Uso', 'Política de Privacidad', 'Venta Solo +18'],
}

export default function Footer() {
  return (
    <footer id="nosotros" style={{ background: '#050505', borderTop: '1px solid #1a1a1a' }}>
      <div className="px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{ background: 'linear-gradient(135deg,#D4AF37,#B8860B)' }}>
              🥂
            </div>
            <span className="text-xl font-black shimmer-text" style={{ fontFamily: "'Playfair Display', serif" }}>
              La Destilería
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: '#555' }}>
            Tu licorería de confianza en Bolivia. Las mejores marcas del mundo con entrega a domicilio en toda la ciudad.
          </p>
          <div className="flex gap-3">
            {['𝕏', 'in', 'fb', 'ig'].map(icon => (
              <div key={icon}
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-200"
                style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#555' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.color = '#D4AF37' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#555' }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#D4AF37' }}>
              {title}
            </h4>
            <ul className="flex flex-col gap-3">
              {items.map(item => (
                <li key={item}>
                  <a href="#"
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#555' }}
                    onMouseEnter={e => e.target.style.color = '#D4AF37'}
                    onMouseLeave={e => e.target.style.color = '#555'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Delivery strip */}
      <div className="px-6 py-4 max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 text-xs"
        style={{ borderTop: '1px solid #111', borderBottom: '1px solid #111', color: '#555' }}>
        {['🚚 Delivery en 30 min', '💳 Pago con QR', '📦 Envío gratis +Bs. 300', '🕐 Lun–Dom 10:00–23:00'].map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="px-6 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs" style={{ color: '#333' }}>
          © 2026 La Destilería Bolivia — Todos los derechos reservados.
        </p>
        <p className="text-xs font-bold tracking-widest" style={{ color: '#D4AF37' }}>
          🔞 Solo para mayores de 18 años
        </p>
      </div>
    </footer>
  )
}
