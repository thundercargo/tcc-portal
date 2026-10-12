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

const VIBGYOR_COLORS = [
  '#8b00ff', // Violet
  '#4b0082', // Indigo
  '#0000ff', // Blue
  '#00ff00', // Green
  '#ffff00', // Yellow
  '#ff7f00', // Orange
  '#ff0000'  // Red
];

export default function TCCPortal() {
  const [clock, setClock] = useState('--:--:-- am');
  const [serviceMode, setServiceMode] = useState<'24H' | 'THUNDER'>('24H');
  const [corridor, setCorridor] = useState('REG_2A');
  const [weight, setWeight] = useState<number>(100);
  const [activeModal, setActiveModal] = useState<'TARIFF' | 'SLA' | 'ESG' | null>(null);

  // Ticking IST Clock
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setClock(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }).toLowerCase());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Multi-Color VIBGYOR Falling Crystal Particles Canvas
  useEffect(() => {
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const particles: { x: number; y: number; len: number; speed: number; alpha: number; color: string }[] = [];
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: Math.random() * 100 + 30,
        speed: Math.random() * 3 + 1.2,
        alpha: Math.random() * 0.6 + 0.2,
        color: VIBGYOR_COLORS[Math.floor(Math.random() * VIBGYOR_COLORS.length)]
      });
    }

    let animId: number;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.len);
        grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
        grad.addColorStop(0.7, p.color);
        grad.addColorStop(1, '#ffffff');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.len);
        ctx.stroke();

        p.y += p.speed;
        if (p.y > canvas.height) {
          p.y = -p.len;
          p.x = Math.random() * canvas.width;
        }
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Calculation Logic
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
    <main style={{ backgroundColor: '#060911', color: '#f8fafc', minHeight: '100vh', padding: '24px 16px 80px', fontFamily: 'sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      {/* VIBGYOR Crystal Rain Background Canvas */}
      <canvas id="particle-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Top Badges Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.35)', color: '#06b6d4', fontSize: '10px', fontWeight: 700, padding: '5px 12px', borderRadius: '20px' }}>ENTERPRISE B2B LOGISTICS NETWORK</span>
          <span style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', color: '#f59e0b', fontSize: '10px', fontWeight: 700, padding: '5px 12px', borderRadius: '20px' }}>24H SAME-DAY EXPRESS TRANSIT</span>
          <span style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.35)', color: '#06b6d4', fontSize: '10px', fontWeight: 700, padding: '5px 12px', borderRadius: '20px' }}>UDYAM-TS-02-0359997</span>
          <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', color: '#10b981', fontSize: '12px', fontWeight: 700, padding: '5px 12px', borderRadius: '20px', marginLeft: 'auto', fontFamily: 'monospace', boxShadow: '0 0 12px rgba(16,185,129,0.25)' }}>IST • {clock}</span>
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#fff' }}>THUNDER CARGO <span style={{ color: '#06b6d4' }}>CORRIDOR</span></h1>
        <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px', marginBottom: '16px' }}>Automated Terminal Dispatch & Sustainable Freight Infrastructure</p>

        {/* Action Toggles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
          <div onClick={() => setActiveModal('TARIFF')} style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(15,23,42,0.85))', border: '1px solid #06b6d4', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#06b6d4', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>📋 Master Tariff Engine</div>
          <div onClick={() => setActiveModal('SLA')} style={{ background: 'rgba(15,23,42,0.75)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#94a3b8', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>⚡ 90-Min Evacuation SLA</div>
          <div onClick={() => setActiveModal('ESG')} style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(15,23,42,0.85))', border: '1px solid #10b981', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#10b981', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>🌱 ESG & CSR Green Pledge</div>
        </div>

        {/* Side-by-side Subheads */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          <div 
            onClick={() => setServiceMode('24H')}
            style={{ 
              background: serviceMode === '24H' ? 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(15,23,42,0.95))' : 'rgba(15,23,42,0.75)', 
              border: serviceMode === '24H' ? '2px solid #06b6d4' : '1px solid rgba(255,255,255,0.08)', 
              borderRadius: '16px', padding: '18px', cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: serviceMode === '24H' ? '0 0 20px rgba(6,182,212,0.25)' : 'none',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span>SAME-DAY DELIVERY (24 HOURS)</span>
              <span style={{ fontSize: '10px', color: '#06b6d4', background: 'rgba(6,182,212,0.2)', padding: '2px 6px', borderRadius: '4px' }}>STANDARD</span>
            </div>
            <div style={{ fontSize: '12px', color: '#06b6d4', fontWeight: 700, marginBottom: '4px' }}>"Delivered by Us, Secured by Us"</div>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>4-Hour Intra-City & 24-Hour Regional Station Evacuation</div>
          </div>

          <div 
            onClick={() => setServiceMode('THUNDER')}
            style={{ 
              background: serviceMode === 'THUNDER' ? 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(15,23,42,0.95))' : 'rgba(15,23,42,0.75)', 
              border: serviceMode === 'THUNDER' ? '2px solid #f59e0b' : '1px solid rgba(255,255,255,0.08)', 
              borderRadius: '16px', padding: '18px', cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: serviceMode === 'THUNDER' ? '0 0 20px rgba(245,158,11,0.25)' : 'none',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span>⚡ THUNDER SERVICE (12 HOURS)</span>
              <span style={{ fontSize: '10px', color: '#f59e0b', background: 'rgba(245,158,11,0.2)', padding: '2px 6px', borderRadius: '4px' }}>+25% PREMIUM</span>
            </div>
            <div style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 700, marginBottom: '4px' }}>"Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn"</div>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Ultra-express 12-hour corridor dispatch with zero terminal friction.</div>
          </div>
        </div>

        {/* Master Calculator Box */}
        <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '20px', padding: '24px', marginBottom: '24px', backdropFilter: 'blur(16px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <h2 style={{ fontSize: '16px', fontWeight: 800, color: '#fff' }}>Master B2B Freight Rate Engine</h2>
              <p style={{ fontSize: '12px', color: '#94a3b8' }}>Instant contract quote calculation with integrated ESG Green Logistics contribution.</p>
            </div>
            <span style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.3)', color: '#06b6d4', fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '12px' }}>SAC 9965 RCM Compliant</span>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '11px', fontWeight: 800, color: '#06b6d4', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>Corridor / Route Matrix</label>
            <select value={corridor} onChange={(e) => setCorridor(e.target.value)} style={{ width: '100%', background: '#080b12', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px', color: '#fff', fontSize: '14px', fontWeight: 700, outline: 'none' }}>
              {Object.keys(TARIFFS).map(k => (
                <option key={k} value={k}>{TARIFFS[k].name}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: 800, color: '#06b6d4', textTransform: 'uppercase' }}>Consignment Gross Weight (KG)</label>
              <span style={{ fontSize: '11px', color: '#64748b' }}>Min: 1 KG</span>
            </div>
            <input type="number" value={weight} min={1} onChange={(e) => setWeight(Math.max(1, parseFloat(e.target.value) || 1))} style={{ width: '100%', background: '#080b12', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px', color: '#fff', fontSize: '15px', fontWeight: 700, outline: 'none' }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
              {[10, 25, 50, 100, 250, 500, 750].map(w => (
                <button key={w} onClick={() => setWeight(w)} style={{ background: weight === w ? 'rgba(6,182,212,0.2)' : 'rgba(255,255,255,0.05)', border: weight === w ? '1px solid #06b6d4' : '1px solid rgba(255,255,255,0.1)', color: weight === w ? '#fff' : '#94a3b8', fontSize: '11px', fontWeight: 700, padding: '6px 12px', borderRadius: '8px', cursor: 'pointer' }}>{w}kg</button>
              ))}
            </div>
          </div>

          {/* EXACT TARIFF QUOTE CARD */}
          <div style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(8,11,18,0.98))', border: `2px solid ${serviceMode === 'THUNDER' ? '#f59e0b' : '#06b6d4'}`, borderRadius: '16px', padding: '20px', marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: serviceMode === 'THUNDER' ? '#f59e0b' : '#06b6d4', letterSpacing: '0.5px' }}>
                  {serviceMode === 'THUNDER' ? '⚡ THUNDER SERVICE QUOTE (12H ULTRA-EXPRESS)' : 'EXACT TARIFF QUOTE (24H SAME-DAY)'}
                </div>
                <div style={{ fontSize: '38px', fontWeight: 800, fontFamily: 'monospace', color: '#fff', margin: '4px 0' }}>₹{finalPrice.toLocaleString('en-IN')}</div>
                <div style={{ fontSize: '11px', color: serviceMode === 'THUNDER' ? '#f59e0b' : '#10b981', fontWeight: 700, cursor: 'pointer' }} onClick={() => setActiveModal('ESG')}>
                  {serviceMode === 'THUNDER' ? '⚡ Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn' : '🟢 Includes ₹20.00 Green Logistics & Social Welfare Offset (Click to view)'}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.08)', padding: '4px 8px', borderRadius: '6px', color: '#94a3b8' }}>{serviceMode === 'THUNDER' ? '12H THUNDER READY' : '24H TRANSIT READY'}</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px', fontSize: '11px' }}>
              <div>
                <span style={{ color: '#64748b', display: 'block' }}>Selected Corridor:</span>
                <strong style={{ color: '#fff' }}>{data.name}</strong>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: '#64748b', display: 'block' }}>Weight Bracket:</span>
                <strong style={{ color: '#06b6d4' }}>{slabText}</strong>
              </div>
            </div>

            <button 
              onClick={() => {
                navigator.clipboard.writeText(`[TCC QUOTE] Mode: ${serviceMode} | Corridor: ${data.name} | Weight: ${weight}kg | Quote: ₹${finalPrice}`);
                alert('Official Quote Copied!');
              }}
              style={{ width: '100%', background: 'linear-gradient(90deg, #06b6d4, #14b8a6)', border: 'none', color: '#000', fontWeight: 800, fontSize: '12px', padding: '14px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase', marginTop: '16px' }}
            >
              Copy Green Quote Summary
            </button>
          </div>
        </div>

        {/* Network Metrics Counters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
          <div style={{ background: 'rgba(15,23,42,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', fontFamily: 'monospace' }}>3 <span style={{ color: '#06b6d4' }}>Primary</span></div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', marginTop: '4px' }}>CONSOLIDATION TERMINALS</div>
          </div>
          <div style={{ background: 'rgba(15,23,42,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '22px', fontWeight 800, color: '#fff', fontFamily: 'monospace' }}>175+</div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', marginTop: '4px' }}>DISTRICT LOGISTICS HUBS</div>
          </div>
          <div style={{ background: 'rgba(15,23,42,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px', backdropFilter: 'blur(10px)' }}>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', fontFamily: 'monospace' }}>355+</div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', marginTop: '4px' }}>EXPRESS COLLECTION NODES</div>
          </div>
        </div>

        {/* CORPORATE PROFILE & WORKFORCE VANGUARD */}
        <div style={{ background: 'rgba(15,23,42,0.75)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', marginBottom: '24px', backdropFilter: 'blur(12px)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>Corporate Profile & Fleet Vanguard</h3>
          <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '16px' }}>Secunderabad SCR Division | High Command Guardianship</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ background: 'rgba(8,11,18,0.65)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>🏛️ Strategic Terminal Guardianship</div>
              <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: '1.5' }}>Elite last-mile integration platform clearing Secunderabad railway platform backlogs via a rigid 2-hour platform clearance SLA. SAC 9965 RCM & MSME Udyam standards.</p>
            </div>
            <div style={{ background: 'rgba(8,11,18,0.65)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>⚡ Fleet Vanguard & Youth Empowerment</div>
              <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: '1.5' }}>Empowering local delivery partners, gig workforce, and micro-entrepreneurs into an agile 2-hour transit force, bypassing urban bottlenecks up to 30 KM.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', fontSize: '11px', color: '#64748b', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
          📞 +91 8340085989 &nbsp;|&nbsp; ✉️ tcc.cargodesk@gmail.com &nbsp;|&nbsp; 🛡️ MSME Registered: UDYAM-TS-02-0359997[span_0](start_span)[span_0](end_span)
          <div style={{ marginTop: '6px' }}>Thunder Cargo Corridor (TCC) • South India B2B Last-Mile Logistics Infrastructure Framework[span_1](start_span)[span_1](end_span)</div>
        </div>

      </div>

      {/* ADVANCED JAW-DROPPING MODAL POPUPS */}
      {activeModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(3, 5, 12, 0.9)', backdropFilter: 'blur(16px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'linear-gradient(145deg, #0f172a, #080b12)', border: '1px solid rgba(6, 182, 212, 0.4)', borderRadius: '24px', maxWidth: '680px', width: '100%', padding: '28px', position: 'relative', boxShadow: '0 25px 60px rgba(0,0,0,0.8)' }}>
            
            <button onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>✕</button>

            {/* HIGH-IMPACT ESG & CSR MODAL */}
            {activeModal === 'ESG' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '24px' }}>🌱</span>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff' }}>Voluntary ESG & CSR Green Logistics Pledge</h3>
                    <p style={{ fontSize: '11px', color: '#10b981', fontWeight: 700 }}>₹20.00 Automated Carbon & Social Impact Contribution Per Waybill</p>
                  </div>
                </div>

                <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.5', marginBottom: '20px' }}>
                  Every dispatch processed across the Thunder Cargo Corridor automatically routes a dedicated ₹20.00 offset to support station workers, local ecology, and net-zero LAST-MILE standards.
                </p>

                {/* Visual Allocation Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '20px' }}>
                  
                  {/* Card 1 */}
                  <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '16px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', marginBottom: '4px' }}>🛠️</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#10b981', fontFamily: 'monospace' }}>₹10.00</div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', marginTop: '4px' }}>Platform Welfare</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px', lineHeight: '1.3' }}>Hub coolies, porter health cover & sanitation kits</div>
                  </div>

                  {/* Card 2 */}
                  <div style={{ background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '16px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', marginBottom: '4px' }}>🌳</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#06b6d4', fontFamily: 'monospace' }}>₹5.00</div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', marginTop: '4px' }}>Afforestation Belts</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px', lineHeight: '1.3' }}>Urban afforestation along terminal rail corridors</div>
                  </div>

                  {/* Card 3 */}
                  <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '16px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontSize: '22px', marginBottom: '4px' }}>⚡</div>
                    <div style={{ fontSize: '18px', fontWeight 800, color: '#f59e0b', fontFamily: 'monospace' }}>₹5.00</div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#fff', marginTop: '4px' }}>Carbon Audit</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px', lineHeight: '1.3' }}>Climate offset & EV last-mile fleet transition</div>
                  </div>

                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '12px', borderRadius: '12px', fontSize: '11px', color: '#10b981', textAlign: 'center', fontWeight: 700 }}>
                  ✓ Audited & Certified Net-Zero Last-Mile Logistics Infrastructure
                </div>
              </div>
            )}

            {/* TARIFF & DEMURRAGE MODAL */}
            {activeModal === 'TARIFF' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>Master Tariff & Demurrage Schedule</h3>
                <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '16px' }}>
                  SAC 9965 RCM Compliant. Free storage is granted up to 24 hours at primary hubs. Late platform evacuation incur a regulated demurrage fee of ₹1.50 per KG per 24-hour cycle.
                </p>
                <div style={{ background: '#080b12', padding: '12px', borderRadius: '12px', fontSize: '12px', color: '#06b6d4', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                  ✓ Instant contract rate computation across all 15 regional corridors.
                </div>
              </div>
            )}

            {/* SLA MODAL */}
            {activeModal === 'SLA' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fff', marginBottom: '10px' }}>90-Minute Evacuation SLA Protocol</h3>
                <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '16px' }}>
                  Secunderabad SCR station evacuation framework: Cargo is un-docked, scanned, and cleared onto last-mile feeder vehicles within 90 minutes of train arrival.
                </p>
                <div style={{ background: '#080b12', padding: '12px', borderRadius: '12px', fontSize: '12px', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  ✓ Zero platform backlog • Direct terminal dispatch.
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </main>
  );
}
