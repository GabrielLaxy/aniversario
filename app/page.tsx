'use client';

import { useState } from 'react';

const sparkles = Array.from({ length: 24 }, (_, index) => ({
  id: index, x: (index * 43 + 9) % 100, y: (index * 67 + 11) % 100,
  delay: (index % 8) * 0.28, size: 2 + (index % 3),
}));

const confetti = Array.from({ length: 20 }, (_, index) => ({
  id: index, angle: (360 / 20) * index, distance: 120 + (index % 5) * 24,
  delay: (index % 4) * 0.035,
  color: ['#ff4f9a', '#ffd369', '#8c72ff', '#ffffff'][index % 4],
}));

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={`surprise-scene ${isOpen ? 'is-open' : ''}`}>
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="stars" aria-hidden="true">
        {sparkles.map((star) => (
          <span className="star" key={star.id} style={{ left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size, animationDelay: `${star.delay}s` }} />
        ))}
      </div>

      <header className="intro">
        <p className="eyebrow">PARA UMA PESSOA MUITO ESPECIAL</p>
        <h1>{isOpen ? 'Surpresa!' : 'Tem um presente para você'}</h1>
        <p className="subtitle" aria-live="polite">
          {isOpen ? 'Prepare o coração. Esse momento é todinho seu.' : 'Toque na caixa para descobrir o que tem dentro.'}
        </p>
      </header>

      <section className="stage" aria-label="Presente surpresa">
        <div className="halo" aria-hidden="true" />
        <div className="confetti" aria-hidden="true">
          {confetti.map((piece) => (
            <span key={piece.id} style={{ '--angle': `${piece.angle}deg`, '--distance': `${piece.distance}px`, '--delay': `${piece.delay}s`, '--confetti-color': piece.color } as React.CSSProperties} />
          ))}
        </div>

        <div className="ticket-wrap">
          <div className="ticket-glow" aria-hidden="true" />
          <img src="/bts-ticket.png" alt="Ingresso BTS World Tour 2026, live in concert" className="ticket" />
        </div>

        <button className="gift" type="button" aria-label={isOpen ? 'Presente aberto' : 'Abrir o presente'} aria-expanded={isOpen} onClick={() => setIsOpen(true)} disabled={isOpen}>
          <span className="gift-lid" aria-hidden="true">
            <span className="lid-ribbon" /><span className="bow bow-left" /><span className="bow bow-right" /><span className="bow-knot" />
          </span>
          <span className="gift-box" aria-hidden="true"><span className="box-ribbon" /></span>
          {!isOpen && <span className="tap-hint">CLIQUE PARA ABRIR</span>}
        </button>
        <div className="ground-shadow" aria-hidden="true" />
      </section>

      <p className="footer-note">Feito com amor <span aria-hidden="true">♥</span></p>
    </main>
  );
}
