'use client';

import React, { useState, useEffect } from 'react';

const TARIFFS: Record<string, { name: string; base: number[]; excess: number }> = {
  INTRA_1: { name: "INTRA-CITY 1 (4 – 5 KM)", base: [150, 250, 380, 550, 1100, 1800], excess: 3.50 },
  INTRA_2: { name: "INTRA-CITY 2 (6 – 15 KM)", base: [200, 320, 480, 750, 1500, 2400], excess: 4.50 },
  INTRA_3: { name: "INTRA-CITY 3 (16 – 30 KM)", base: [280, 420, 650, 1050, 2000, 3200], excess: 6.00 },
  REG_1A:  { name: "REGIONAL 1A (31 – 50 KM)", base: [240, 340, 520, 720, 1400, 2400], excess: 4.50 },
  REG_1B:  { name: "REGIONAL 1B (51 – 100 KM)", base: [280, 390, 600, 820, 1600, 2750], excess: 5.20 },
  REG_2A:  { name: "REGIONAL 2A (101 – 150 KM)", base: [320, 450, 700, 980, 1900, 3100], excess: 6.00 },
  REG_2B:  { name: "REGIONAL 2B (151 – 200 KM)", base: [350, 490, 780, 1100, 2200, 3500], excess: 6.80 },
  REG_3A:  { name: "REGIONAL 3A (201 – 250 KM)", base: [380, 540, 880, 1280, 2480, 3750], excess: 7.30 },
  REG_3B:  { name: "REGIONAL 3B (251 – 300 KM)", base: [410, 590, 1020, 1420, 2680, 3920], excess: 7.80 },
  REG_4A:  { name: "REGIONAL 4A (301 – 350 KM)", base: [440, 640, 1120, 1580, 2950, 4400], excess: 8.60 },
  REG_4B:  { name: "REGIONAL 4B (351 – 400 KM)", base: [470, 690, 1220, 1720, 3220, 4920], excess: 9.50 },
  REG_5A:  { name: "REGIONAL 5A (401 – 450 KM)", base: [500, 740, 1320, 1880, 3550, 5400], excess: 10.50 },
  REG_5B:  { name: "REGIONAL 5B (451 – 500 KM)", base: [530, 790, 1420, 2020, 3820, 5920], excess: 11.50 },
  REG_6A:  { name: "REGIONAL 6A (501 – 550 KM)", base: [560, 840, 1520, 2180, 4150, 6400], excess: 12.50 },
  REG_6B:  { name: "REGIONAL 6B (551 – 600 KM)", base: [590, 890, 1620, 2320, 4420, 6920], excess: 13.50 }
};

export default function TCCPortal() {
  const [clock, setClock] = useState('--:--:-- am');
  const [serviceMode, setServiceMode] = useState<'24H' | 'THUNDER'>('24H');
  const [corridor, setCorridor] = useState('REG_2A');
  const [weight, setWeight] = useState<number>(100);
  const [activeModal, setActiveModal] = useState<'TARIFF' | 'SLA' | 'ESG' | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setClock(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }).toLowerCase());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Luminous Solar-Dawn Background Canvas Animation
  useEffect(() => {
    const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const particles: { x: number; y: number; r: number; speedY: number; speedX: number; color: string; alpha: number }[] = [];
    const colors = ['#22d3ee', '#34d399', '#fbbf24', '#818cf8'];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.5 + 1,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    let step = 0;
    let animId: number;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Rich Luminous Background Gradient
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#040b1a');
      grad.addColorStop(0.5, '#0a1733');
      grad.addColorStop(1, '#020610');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Glowing Ambient Aurora Orbs
      const orb1 = ctx.createRadialGradient(canvas.width * 0.2, canvas.height * 0.3 + Math.sin(step) * 40, 10, canvas.width * 0.2, canvas.height * 0.3, canvas.width * 0.6);
      orb1.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
      orb1.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = orb1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const orb2 = ctx.createRadialGradient(canvas.width * 0.8, canvas.height * 0.7 + Math.cos(step) * 40, 10, canvas.width * 0.8, canvas.height * 0.7, canvas.width * 0.6);
      orb2.addColorStop(0, 'rgba(16, 185, 129, 0.1)');
      orb2.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = orb2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Floating Luminous Particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;

        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
      });

      step += 0.01;
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const data = TARIFFS[corridor] || TARIFFS.REG_2A;
  let basePrice = 0;
  let slabText = '';

  if (weight <= 10) { basePrice = data.base[0]; slabText = '1 – 10 KG'; }
  else if (weight <= 25) { basePrice = data.base[1]; slabText = '11 – 25 KG'; }
  else if (weight <= 50) { basePrice = data.base[2]; slabText = '26 – 50 KG'; }
  else if (weight <= 100) { basePrice = data.base[3]; slabText = '51 – 100 KG'; }
  else if (weight <= 250) { basePrice = data.base[4]; slabText = '101 – 250 KG'; }
  else if (weight <= 500) { basePrice = data.base[5]; slabText = '251 – 500 KG'; }
  else {
    basePrice = data.base[5] + ((weight - 500) * data.excess);
    slabText = 'EXCESS > 500 KG';
  }

  const finalPrice = serviceMode === 'THUNDER' ? Math.round(basePrice * 1.25) : basePrice;

  return (
    <main style={{ color: '#f8fafc', minHeight: '100vh', padding: '24px 16px 80px', fontFamily: 'sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      <canvas id="bg-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Top Badges Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.4)', color: '#22d3ee', fontSize: '10px', fontWeight: 700, padding: '6px 14px', borderRadius: '20px', backdropFilter: 'blur(8px)' }}>ENTERPRISE B2B LOGISTICS NETWORK</span>
          <span style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.4)', color: '#fbbf24', fontSize: '10px', fontWeight: 700, padding: '6px 14px', borderRadius: '20px', backdropFilter: 'blur(8px)' }}>24H SAME-DAY EXPRESS TRANSIT</span>
          <span style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.4)', color: '#22d3ee', fontSize: '10px', fontWeight: 700, padding: '6px 14px', borderRadius: '20px', backdropFilter: 'blur(8px)' }}>UDYAM-TS-02-0359997</span>
          <span style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.5)', color: '#34d399', fontSize: '12px', fontWeight: 700, padding: '6px 14px', borderRadius: '20px', marginLeft: 'auto', fontFamily: 'monospace', boxShadow: '0 0 15px rgba(16,185,129,0.3)', backdropFilter: 'blur(8px)' }}>IST • {clock}</span>
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>THUNDER CARGO <span style={{ color: '#22d3ee' }}>CORRIDOR</span></h1>
        <p style={{ color: '#cbd5e1', fontSize: '13px', marginTop: '4px', marginBottom: '20px', fontWeight: 500 }}>Automated Inward Office & Station-Gate Express Logistics Infrastructure</p>

        {/* Action Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
          <div onClick={() => setActiveModal('TARIFF')} style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.85), rgba(8,14,28,0.9))', border: '1px solid rgba(6,182,212,0.5)', borderRadius: '14px', padding: '14px 10px', textAlign: 'center', fontSize: '12px', fontWeight: 800, color: '#22d3ee', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>📋 Master Tariff Engine</div>
          <div onClick={() => setActiveModal('SLA')} style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.85), rgba(8,14,28,0.9))', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '14px', padding: '14px 10px', textAlign: 'center', fontSize: '12px', fontWeight: 800, color: '#94a3b8', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>⚡ Gate-to-Feeder SLA</div>
          <div onClick={() => setActiveModal('ESG')} style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.85), rgba(8,14,28,0.9))', border: '1px solid rgba(16,185,129,0.5)', borderRadius: '14px', padding: '14px 10px', textAlign: 'center', fontSize: '12px', fontWeight: 800, color: '#34d399', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>🌱 ESG & CSR Pledge</div>
        </div>

        {/* HIGH-END SERVICE CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          
          <div 
            onClick={() => setServiceMode('24H')}
            style={{ 
              background: serviceMode === '24H' ? 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(15,23,42,0.95))' : 'linear-gradient(135deg, rgba(15,23,42,0.75), rgba(8,14,28,0.85))', 
              border: serviceMode === '24H' ? '2px solid #22d3ee' : '1px solid rgba(255,255,255,0.12)', 
              borderRadius: '18px', padding: '20px', cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: serviceMode === '24H' ? '0 0 25px rgba(6,182,212,0.35)' : '0 10px 30px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 900, color: '#fff', letterSpacing: '0.5px' }}>24H SAME-DAY EXPRESS</span>
              <span style={{ fontSize: '9px', color: '#22d3ee', background: 'rgba(6,182,212,0.25)', padding: '3px 8px', borderRadius: '6px', fontWeight: 800 }}>STANDARD</span>
            </div>
            <div style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: '1.5', fontWeight: 500 }}>"Station-Gate Intake & Immediate Feeder Dispatch"</div>
          </div>

          <div 
            onClick={() => setServiceMode('THUNDER')}
            style={{ 
              background: serviceMode === 'THUNDER' ? 'linear-gradient(135deg, rgba(245,158,11,0.25), rgba(15,23,42,0.95))' : 'linear-gradient(135deg, rgba(15,23,42,0.75), rgba(8,14,28,0.85))', 
              border: serviceMode === 'THUNDER' ? '2px solid #fbbf24' : '1px solid rgba(255,255,255,0.12)', 
              borderRadius: '18px', padding: '20px', cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: serviceMode === 'THUNDER' ? '0 0 25px rgba(245,158,11,0.35)' : '0 10px 30px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 900, color: '#fff', letterSpacing: '0.5px' }}>⚡ 12H THUNDER SERVICE</span>
            </div>
            <div style={{ fontSize: '12px', color: '#fde047', lineHeight: '1.4', fontWeight: 600 }}>"Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn"</div>
          </div>

        </div>

        {/* Master Calculator Box */}
        <div style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.85), rgba(6,10,20,0.9))', border: '1px solid rgba(6, 182, 212, 0.4)', borderRadius: '24px', padding: '28px', marginBottom: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.7)', backdropFilter: 'blur(16px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#fff' }}>Master B2B Freight Rate Engine</h2>
              <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>Instant contract quote calculation with integrated ESG Green Logistics contribution.</p>
            </div>
            <span style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.4)', color: '#22d3ee', fontSize: '10px', fontWeight: 800, padding: '5px 12px', borderRadius: '14px' }}>SAC 9965 Compliant</span>
          </div>

          <div style={{ marginBottom: '18px' }}>
            <label style={{ fontSize: '11px', fontWeight: 900, color: '#22d3ee', textTransform: 'uppercase', display: 'block', marginBottom: '8px', letterSpacing: '0.5px' }}>Corridor / Route Matrix</label>
            <select value={corridor} onChange={(e) => setCorridor(e.target.value)} style={{ width: '100%', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '14px', padding: '14px', color: '#fff', fontSize: '14px', fontWeight: 700, outline: 'none', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.6)' }}>
              {Object.keys(TARIFFS).map(k => (
                <option key={k} value={k}>{TARIFFS[k].name}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <label style={{ fontSize: '11px', fontWeight: 900, color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Consignment Gross Weight (KG)</label>
              <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>Min: 1 KG</span>
            </div>
            <input type="number" value={weight} min={1} onChange={(e) => setWeight(Math.max(1, parseFloat(e.target.value) || 1))} style={{ width: '100%', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '14px', padding: '14px', color: '#fff', fontSize: '16px', fontWeight: 800, outline: 'none', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.6)' }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
              {[10, 25, 50, 100, 250, 500, 750].map(w => (
                <button key={w} onClick={() => setWeight(w)} style={{ background: weight === w ? 'rgba(6,182,212,0.3)' : 'rgba(255,255,255,0.06)', border: weight === w ? '1px solid #22d3ee' : '1px solid rgba(255,255,255,0.12)', color: weight === w ? '#fff' : '#cbd5e1', fontSize: '11px', fontWeight: 800, padding: '8px 14px', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s' }}>{w}kg</button>
              ))}
            </div>
          </div>

          {/* EXACT TARIFF QUOTE CARD */}
          <div style={{ background: 'linear-gradient(135deg, rgba(8,14,28,0.98), rgba(4,8,16,0.99))', border: `2px solid ${serviceMode === 'THUNDER' ? '#fbbf24' : '#22d3ee'}`, borderRadius: '18px', padding: '22px', marginTop: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.6)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 900, color: serviceMode === 'THUNDER' ? '#fbbf24' : '#22d3ee', letterSpacing: '0.8px' }}>
                  {serviceMode === 'THUNDER' ? '⚡ THUNDER SERVICE QUOTE (12H ULTRA-EXPRESS)' : 'EXACT TARIFF QUOTE (24H SAME-DAY)'}
                </div>
                <div style={{ fontSize: '42px', fontWeight: 900, fontFamily: 'monospace', color: '#fff', margin: '4px 0', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>₹{finalPrice.toLocaleString('en-IN')}</div>
                <div style={{ fontSize: '11px', color: serviceMode === 'THUNDER' ? '#fde047' : '#34d399', fontWeight: 700, cursor: 'pointer' }} onClick={() => setActiveModal('ESG')}>
                  {serviceMode === 'THUNDER' ? '⚡ Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn' : '🟢 Includes ₹20.00 Green Logistics & Social Welfare Offset (Click to view)'}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.08)', padding: '6px 10px', borderRadius: '8px', color: '#cbd5e1', fontWeight: 700 }}>{serviceMode === 'THUNDER' ? '12H THUNDER READY' : '24H TRANSIT READY'}</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '18px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '14px', fontSize: '11px' }}>
              <div>
                <span style={{ color: '#94a3b8', display: 'block', fontWeight: 600 }}>Selected Corridor:</span>
                <strong style={{ color: '#fff' }}>{data.name}</strong>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: '#94a3b8', display: 'block', fontWeight: 600 }}>Weight Bracket:</span>
                <strong style={{ color: '#22d3ee' }}>{slabText}</strong>
              </div>
            </div>

            <button 
              onClick={() => {
                navigator.clipboard.writeText(`[TCC QUOTE] Mode: ${serviceMode} | Corridor: ${data.name} | Weight: ${weight}kg | Quote: ₹${finalPrice}`);
                alert('Official Quote Summary Copied!');
              }}
              style={{ width: '100%', background: 'linear-gradient(90deg, #22d3ee, #34d399)', border: 'none', color: '#020617', fontWeight: 900, fontSize: '12px', padding: '16px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase', marginTop: '18px', boxShadow: '0 8px 25px rgba(6,182,212,0.4)', transition: 'all 0.2s' }}
            >
              Copy Green Quote Summary
            </button>
          </div>
        </div>

        {/* Network Metrics Counters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '24px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.85), rgba(8,14,28,0.9))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '18px 12px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', fontFamily: 'monospace' }}>3 <span style={{ color: '#22d3ee' }}>Primary</span></div>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', marginTop: '6px' }}>CONSOLIDATION TERMINALS</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.85), rgba(8,14,28,0.9))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '18px 12px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', fontFamily: 'monospace' }}>175+</div>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', marginTop: '6px' }}>DISTRICT LOGISTICS HUBS</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.85), rgba(8,14,28,0.9))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '18px 12px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', fontFamily: 'monospace' }}>355+</div>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', marginTop: '6px' }}>EXPRESS COLLECTION NODES</div>
          </div>
        </div>

        {/* CORPORATE PROFILE & WORKFORCE VANGUARD */}
        <div style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.85), rgba(6,10,20,0.9))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '24px', padding: '24px', marginBottom: '24px', boxShadow: '0 15px 40px rgba(0,0,0,0.5)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#fff', marginBottom: '4px' }}>Corporate Profile & Fleet Vanguard</h3>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '18px', fontWeight: 600 }}>Secunderabad SCR Division | High Command Guardianship</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ background: 'rgba(4,8,16,0.7)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>🏛️ Station-Gate Coordination</div>
              <p style={{ fontSize: '11px', color: '#cbd5e1', lineHeight: '1.5' }}>Seamless cargo intake at station gates and inward offices, synchronizing with official station operations for rapid last-mile feeder dispatch. SAC 9965 RCM & MSME compliant.</p>
            </div>
            <div style={{ background: 'rgba(4,8,16,0.7)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>⚡ Fleet Vanguard & Youth Empowerment</div>
              <p style={{ fontSize: '11px', color: '#cbd5e1', lineHeight: '1.5' }}>Empowering local delivery partners, gig workforce, and micro-entrepreneurs into an agile 2-hour transit force, bypassing urban bottlenecks up to 30 KM.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', fontSize: '11px', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', fontWeight: 500 }}>
          📞 +91 8340085989 &nbsp;|&nbsp; ✉️ tcc.cargodesk@gmail.com &nbsp;|&nbsp; 🛡️ MSME Registered: UDYAM-TS-02-0359997
          <div style={{ marginTop: '6px' }}>Thunder Cargo Corridor (TCC) • South India B2B Last-Mile Logistics Infrastructure Framework</div>
        </div>

      </div>

      {/* ULTRA-MODERN JAW-DROPPING MODAL POPUPS */}
      {activeModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(2, 6, 23, 0.9)', backdropFilter: 'blur(20px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'linear-gradient(145deg, #0f172a, #040711)', border: '1px solid rgba(16, 185, 129, 0.5)', borderRadius: '24px', maxWidth: '720px', width: '100%', padding: '32px', position: 'relative', boxShadow: '0 30px 80px rgba(0,0,0,0.95)' }}>
            
            <button onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '50%', width: '38px', height: '38px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>✕</button>

            {activeModal === 'ESG' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                  <div style={{ background: 'rgba(16,185,129,0.2)', border: '1px solid rgba(16,185,129,0.5)', borderRadius: '16px', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🌱</div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#fff' }}>Voluntary ESG & CSR Green Logistics Pledge</h3>
                    <p style={{ fontSize: '12px', color: '#34d399', fontWeight: 800 }}>Mandatory ₹20.00 Automated Allocation Per Commercial Waybill</p>
                  </div>
                </div>

                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '22px' }}>
                  Every dispatch processed across the Thunder Cargo Corridor earmarks a dedicated ₹20.00 social and environmental impact fund for station workers, local ecology, and carbon auditing.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '22px' }}>
                  
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '18px', padding: '18px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>🛡️</div>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: '#34d399', fontFamily: 'monospace' }}>₹10.00</div>
                    <div style={{ fontSize: '12px', fontWeight: 900, color: '#fff', marginTop: '6px' }}>Hub Welfare Fund</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px', lineHeight: '1.4' }}>Porter health cover, safety gear & rest facilities</div>
                  </div>

                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.4)', borderRadius: '18px', padding: '18px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>🌳</div>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: '#22d3ee', fontFamily: 'monospace' }}>₹5.00</div>
                    <div style={{ fontSize: '12px', fontWeight: 900, color: '#fff', marginTop: '6px' }}>Afforestation</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px', lineHeight: '1.4' }}>Urban green belts along railway freight corridors</div>
                  </div>

                  <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.4)', borderRadius: '18px', padding: '18px 12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>⚡</div>
                    <div style={{ fontSize: '22px', fontWeight: 900, color: '#fbbf24', fontFamily: 'monospace' }}>₹5.00</div>
                    <div style={{ fontSize: '12px', fontWeight: 900, color: '#fff', marginTop: '6px' }}>Climate Change</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px', lineHeight: '1.4' }}>Carbon offset & EV last-mile fleet auditing</div>
                  </div>

                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.5)', padding: '14px', borderRadius: '14px', fontSize: '12px', color: '#34d399', textAlign: 'center', fontWeight: 800 }}>
                  ✓ Certified Net-Zero Last-Mile Infrastructure Framework (SAC 9965 Compliant)
                </div>
              </div>
            )}

            {activeModal === 'TARIFF' && (
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>Master Tariff & Demurrage Schedule</h3>
                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
                  SAC 9965 RCM Compliant contract pricing matrix. Storage is free for 24 hours at primary terminals, followed by ₹1.50 per KG per day demurrage.
                </p>
                <div style={{ background: '#020617', padding: '14px', borderRadius: '12px', fontSize: '12px', color: '#22d3ee', border: '1px solid rgba(6, 182, 212, 0.4)' }}>
                  ✓ Automated calculation across all 15 regional distance corridors.
                </div>
              </div>
            )}

            {activeModal === 'SLA' && (
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>Gate-to-Feeder SLA Protocol</h3>
                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
                  Seamless cargo intake at station gates and inward offices, synchronizing with official station operations for rapid last-mile feeder dispatch at Secunderabad SCR terminals.
                </p>
                <div style={{ background: '#020617', padding: '14px', borderRadius: '12px', fontSize: '12px', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.4)' }}>
                  ✓ Rapid gate-to-feeder coordination • Express dispatch.
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </main>
  );
}
