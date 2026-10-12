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
  '#a855f7', // Violet
  '#6366f1', // Indigo
  '#3b82f6', // Blue
  '#10b981', // Green
  '#eab308', // Yellow
  '#f97316', // Orange
  '#ef4444'  // Red
];

export default function TCCPortal() {
  const [clock, setClock] = useState('--:--:-- am');
  const [currentHour, setCurrentHour] = useState(12);
  const [serviceMode, setServiceMode] = useState<'24H' | 'THUNDER'>('24H');
  const [corridor, setCorridor] = useState('REG_2A');
  const [weight, setWeight] = useState<number>(100);
  const [activeModal, setActiveModal] = useState<'TARIFF' | 'SLA' | 'ESG' | null>(null);

  // Live IST Clock & Hour Telemetry
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentHour(now.getHours());
      setClock(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }).toLowerCase());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine active solar window based on IST hour (Dawn: 6 AM - 6 PM, Dusk: 6 PM - 6 AM)
  const isDawnWindow = currentHour >= 6 && currentHour < 18;

  // Biophilic Carbon-Balance Dual-Vector Canvas Background Animation
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

    // Downward Cargo Streams & Upward Eco-Pulses
    const particles: { x: number; y: number; len: number; speed: number; alpha: number; color: string; type: 'cargo' | 'eco' }[] = [];
    
    for (let i = 0; i < 150; i++) {
      const isEco = i % 3 === 0; // 33% upward eco-pulses representing carbon balance
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: Math.random() * 90 + 30,
        speed: isEco ? -(Math.random() * 2 + 0.8) : Math.random() * 3.5 + 1.2,
        alpha: Math.random() * 0.6 + 0.2,
        color: isEco ? '#10b981' : VIBGYOR_COLORS[Math.floor(Math.random() * VIBGYOR_COLORS.length)],
        type: isEco ? 'eco' : 'cargo'
      });
    }

    let animId: number;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + (p.type === 'eco' ? -p.len : p.len));
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(0.7, p.color);
        grad.addColorStop(1, '#ffffff');

        ctx.strokeStyle = grad;
        ctx.lineWidth = p.type === 'eco' ? 2.2 : 1.6;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + (p.type === 'eco' ? -p.len : p.len));
        ctx.stroke();

        p.y += p.speed;
        
        // Loop boundaries
        if (p.type === 'cargo' && p.y > canvas.height) {
          p.y = -p.len;
          p.x = Math.random() * canvas.width;
        } else if (p.type === 'eco' && p.y < -p.len) {
          p.y = canvas.height + p.len;
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

  // Rate Calculation Logic
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
      
      {/* Biophilic Carbon-Balance Dual-Vector Canvas Background */}
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
          <div onClick={() => setActiveModal('ESG')} style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.25), rgba(15,23,42,0.85))', border: '1px solid #10b981', borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 700, color: '#10b981', cursor: 'pointer', backdropFilter: 'blur(10px)', boxShadow: '0 0 15px rgba(16,185,129,0.2)' }}>🌱 ESG & CSR Green Pledge</div>
        </div>

        {/* OPTION B: DYNAMIC SHIFT-BADGE INTEGRATION SUBHEADS */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          
          {/* Same-Day Card */}
          <div 
            onClick={() => setServiceMode('24H')}
            style={{ 
              background: serviceMode === '24H' ? 'linear-gradient(135deg, rgba(6,182,212,0.22), rgba(15,23,42,0.95))' : 'rgba(15,23,42,0.75)', 
              border: serviceMode === '24H' ? '2px solid #06b6d4' : '1px solid rgba(255,255,255,0.08)', 
              borderRadius: '16px', padding: '18px', cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: serviceMode === '24H' ? '0 0 22px rgba(6,182,212,0.3)' : 'none',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.5px', color: '#fff' }}>24H STANDARD EXPRESS</span>
              <span style={{ fontSize: '10px', color: '#06b6d4', background: 'rgba(6,182,212,0.2)', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>STANDARD</span>
            </div>
            
            {/* Dynamic Shift Telemetry Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', padding: '3px 8px', borderRadius: '6px', fontSize: '10px', color: '#38bdf8', fontWeight: 700, marginBottom: '8px' }}>
              {isDawnWindow ? '☀️ Dawn-to-Dusk Active Window' : '🌙 Dusk-to-Dawn Night Corridor'}
            </div>

            <div style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>"Delivered by Us, Secured by Us • 4H Intra & 24H Regional Station Clearance"</div>
          </div>

          {/* Thunder Service Card */}
          <div 
            onClick={() => setServiceMode('THUNDER')}
            style={{ 
              background: serviceMode === 'THUNDER' ? 'linear-gradient(135deg, rgba(245,158,11,0.22), rgba(15,23,42,0.95))' : 'rgba(15,23,42,0.75)', 
              border: serviceMode === 'THUNDER' ? '2px solid #f59e0b' : '1px solid rgba(255,255,255,0.08)', 
              borderRadius: '16px', padding: '18px', cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: serviceMode === 'THUNDER' ? '0 0 22px rgba(245,158,11,0.3)' : 'none',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.5px', color: '#fff' }}>⚡ 12H THUNDER EXPRESS</span>
              <span style={{ fontSize: '10px', color: '#f59e0b', background: 'rgba(245,158,11,0.2)', padding: '2px 8px', borderRadius: '6px', fontWeight: 700 }}>+25% PREMIUM</span>
            </div>
            
            {/* Dynamic Shift Telemetry Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', padding: '3px 8px', borderRadius: '6px', fontSize: '10px', color: '#fcd34d', fontWeight: 700, marginBottom: '8px' }}>
              {isDawnWindow ? '⚡ Solar-Sync: Loaded at Dawn, Landed by Dusk' : '⚡ Lunar-Sync: Shipped by Dusk, Delivered by Dawn'}
            </div>

            <div style={{ fontSize: '11px', color: '#cbd5e1', fontStyle: 'italic' }}>"Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn"</div>
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
                  {serviceMode === 'THUNDER' ? '⚡ Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn' : '🟢 Includes ₹20.00 Green Logistics & Social Welfare Offset (Click to view breakdown)'}
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
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', fontFamily: 'monospace' }}>175+</div>
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

      {/* ULTRA-MODERN JAW-DROPPING MODAL POPUPS */}
      {activeModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(3, 5, 12, 0.88)', backdropFilter: 'blur(20px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'linear-gradient(145deg, #0f172a, #080b12)', border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '24px', maxWidth: '720px', width: '100%', padding: '32px', position: 'relative', boxShadow: '0 25px 60px rgba(0,0,0,0.9)' }}>
            
            <button onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>✕</button>

            {/* ESG & CSR GREEN PLEDGE MODAL */}
            {activeModal === 'ESG' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '14px', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🌱</div>
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff' }}>Voluntary ESG & CSR Green Logistics Pledge</h3>
                    <p style={{ fontSize: '12px', color: '#10b981', fontWeight: 700 }}>Mandatory ₹20.00 Automated Allocation Per Commercial Waybill</p>
                  </div>
                </div>

                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '24px' }}>
                  Every dispatch processed across the Thunder Cargo Corridor strictly earmarks a dedicated ₹20.00 social and environmental impact fund, ensuring absolute net-zero urban footprints and dignified worker welfare.
                </p>

                {/* THREE SEPARATE JAW-DROPPING BOXES WITH LOGOS */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                  
                  {/* Box 1 */}
                  <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.35)', borderRadius: '18px', padding: '18px 14px', textAlign: 'center', boxShadow: '0 10px 25px rgba(16, 185, 129, 0.1)' }}>
                    <div style={{ background: 'rgba(16, 185, 129, 0.15)', borderRadius: '12px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '20px' }}>🛡️</div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#10b981', fontFamily: 'monospace' }}>₹10.00</div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#fff', marginTop: '6px' }}>Hub Welfare Fund</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px', lineHeight: '1.4' }}>Platform porter health cover, safety gear & rest facilities</div>
                  </div>

                  {/* Box 2 */}
                  <div style={{ background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.35)', borderRadius: '18px', padding: '18px 14px', textAlign: 'center', boxShadow: '0 10px 25px rgba(6, 182, 212, 0.1)' }}>
                    <div style={{ background: 'rgba(6, 182, 212, 0.15)', borderRadius: '12px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '20px' }}>🌳</div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#06b6d4', fontFamily: 'monospace' }}>₹5.00</div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#fff', marginTop: '6px' }}>Afforestation</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px', lineHeight: '1.4' }}>Urban green belts along railway freight corridors</div>
                  </div>

                  {/* Box 3 */}
                  <div style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.35)', borderRadius: '18px', padding: '18px 14px', textAlign: 'center', boxShadow: '0 10px 25px rgba(245, 158, 11, 0.1)' }}>
                    <div style={{ background: 'rgba(245, 158, 11, 0.15)', borderRadius: '12px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontSize: '20px' }}>⚡</div>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: '#f59e0b', fontFamily: 'monospace' }}>₹5.00</div>
                    <div style={{ fontSize: '12px', fontWeight: 800, color: '#fff', marginTop: '6px' }}>Climate Change</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '6px', lineHeight: '1.4' }}>Carbon offset & EV last-mile transition auditing</div>
                  </div>

                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '14px', borderRadius: '14px', fontSize: '12px', color: '#10b981', textAlign: 'center', fontWeight: 700 }}>
                  ✓ Certified Net-Zero Last-Mile Infrastructure Framework (SAC 9965 Compliant)
                </div>
              </div>
            )}

            {/* TARIFF & DEMURRAGE MODAL */}
            {activeModal === 'TARIFF' && (
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>Master Tariff & Demurrage Schedule</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
                  SAC 9965 RCM Compliant contract pricing matrix. Includes 24 hours free storage at primary consolidation terminals, followed by a regulated demurrage structure of ₹1.50 per KG per day.
                </p>
                <div style={{ background: '#080b12', padding: '14px', borderRadius: '12px', fontSize: '12px', color: '#06b6d4', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                  ✓ Instant automated rate calculation across all 15 regional distance corridors.
                </div>
              </div>
            )}

            {/* SLA MODAL */}
            {activeModal === 'SLA' && (
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>90-Minute Evacuation SLA Protocol</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
                  Secunderabad SCR station evacuation framework: Cargo un-docking, barcode scanning, and direct feeder dispatch executed within 90 minutes of train arrival.
                </p>
                <div style={{ background: '#080b12', padding: '14px', borderRadius: '12px', fontSize: '12px', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  ✓ Zero platform bottlenecks • Direct terminal-to-hub express transfer.
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </main>
  );
}
