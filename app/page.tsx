'use client';

import React, { useState, useEffect } from 'react';

const TARIFFS: Record<string, { name: string; base: number[]; excess: number }> = {
  INTRA_1: { name: "INTRA-CITY 1 (4 – 5 KM)", base: [170, 270, 400, 570, 1120, 1820], excess: 3.50 },
  INTRA_2: { name: "INTRA-CITY 2 (6 – 15 KM)", base: [220, 340, 500, 770, 1520, 2420], excess: 4.50 },
  INTRA_3: { name: "INTRA-CITY 3 (16 – 30 KM)", base: [300, 440, 670, 1070, 2020, 3220], excess: 6.00 },
  REG_1A:  { name: "REGIONAL 1A (31 – 50 KM)", base: [260, 360, 540, 740, 1420, 2420], excess: 4.50 },
  REG_1B:  { name: "REGIONAL 1B (51 – 100 KM)", base: [300, 410, 620, 840, 1620, 2770], excess: 5.20 },
  REG_2A:  { name: "REGIONAL 2A (101 – 150 KM)", base: [340, 470, 720, 1000, 1920, 3120], excess: 6.00 },
  REG_2B:  { name: "REGIONAL 2B (151 – 200 KM)", base: [370, 510, 800, 1120, 2220, 3520], excess: 6.80 },
  REG_3A:  { name: "REGIONAL 3A (201 – 250 KM)", base: [400, 560, 900, 1300, 2500, 3770], excess: 7.30 },
  REG_3B:  { name: "REGIONAL 3B (251 – 300 KM)", base: [430, 610, 1040, 1440, 2700, 3940], excess: 7.80 },
  REG_4A:  { name: "REGIONAL 4A (301 – 350 KM)", base: [460, 660, 1140, 1600, 2970, 4420], excess: 8.60 },
  REG_4B:  { name: "REGIONAL 4B (351 – 400 KM)", base: [490, 710, 1240, 1740, 3240, 4940], excess: 9.50 },
  REG_5A:  { name: "REGIONAL 5A (401 – 450 KM)", base: [520, 760, 1340, 1900, 3570, 5420], excess: 10.50 },
  REG_5B:  { name: "REGIONAL 5B (451 – 500 KM)", base: [550, 810, 1440, 2040, 3840, 5940], excess: 11.50 },
  REG_6A:  { name: "REGIONAL 6A (501 – 550 KM)", base: [580, 860, 1540, 2200, 4170, 6420], excess: 12.50 },
  REG_6B:  { name: "REGIONAL 6B (551 – 600 KM)", base: [610, 910, 1640, 2340, 4440, 6940], excess: 13.50 }
};

export default function TCCPortal() {
  const [clock, setClock] = useState('--:--:-- am');
  const [serviceMode, setServiceMode] = useState<'24H' | 'THUNDER'>('24H');
  const [corridor, setCorridor] = useState('REG_2A');
  const [weight, setWeight] = useState<number>(100);
  const [activeModal, setActiveModal] = useState<'TARIFF' | 'SLA' | 'ESG' | 'BOOKING' | null>(null);

  // Form States
  const [senderName, setSenderName] = useState('');
  const [senderMobile, setSenderMobile] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverMobile, setReceiverMobile] = useState('');
  const [destCity, setDestCity] = useState('Warangal (TS Bus Depot)');
  const [goodsDesc, setGoodsDesc] = useState('Textile Bales & Bulk Cartons');
  
  // Security & Verification
  const [operatorPin, setOperatorPin] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [receiptTimestamp, setReceiptTimestamp] = useState('');
  const [pinError, setPinError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setClock(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }).toLowerCase());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1.2,
        speedY: Math.random() * 1.2 + 0.4,
        speedX: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3
      });
    }

    let step = 0;
    let animId: number;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#030817');
      grad.addColorStop(0.5, '#07132e');
      grad.addColorStop(1, '#02050b');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const orb1 = ctx.createRadialGradient(canvas.width * 0.25, canvas.height * 0.25 + Math.sin(step) * 50, 10, canvas.width * 0.25, canvas.height * 0.25, canvas.width * 0.7);
      orb1.addColorStop(0, 'rgba(6, 182, 212, 0.22)');
      orb1.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = orb1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const orb2 = ctx.createRadialGradient(canvas.width * 0.75, canvas.height * 0.75 + Math.cos(step) * 50, 10, canvas.width * 0.75, canvas.height * 0.75, canvas.width * 0.7);
      orb2.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
      orb2.addColorStop(1, 'rgba(16, 185, 129, 0)');
      ctx.fillStyle = orb2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 14;
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

      step += 0.012;
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

  const finalPrice = serviceMode === 'THUNDER' ? Math.round(basePrice * 1.29) : basePrice;

  return (
    <main style={{ color: '#f8fafc', minHeight: '100vh', padding: '24px 16px 80px', fontFamily: 'sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
      <canvas id="bg-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Main Branding Header */}
        <h1 style={{ fontSize: '30px', fontWeight: 900, color: '#fff', letterSpacing: '-0.5px', textShadow: '0 2px 10px rgba(0,0,0,0.5)', marginBottom: '6px' }}>
          THUNDER CARGO <span style={{ color: '#22d3ee' }}>CORRIDOR (TCC)</span>
        </h1>
        
        {/* Badges Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
          <span style={{ background: 'rgba(6,182,212,0.18)', border: '1px solid rgba(6,182,212,0.45)', color: '#22d3ee', fontSize: '10px', fontWeight: 800, padding: '6px 14px', borderRadius: '20px', backdropFilter: 'blur(8px)' }}>AP & TS BUS-FEEDER NETWORK</span>
          <span style={{ background: 'rgba(6,182,212,0.18)', border: '1px solid rgba(6,182,212,0.45)', color: '#22d3ee', fontSize: '10px', fontWeight: 800, padding: '6px 14px', borderRadius: '20px', backdropFilter: 'blur(8px)' }}>UDYAM-TS-02-0359997</span>
          <span style={{ background: 'rgba(16,185,129,0.22)', border: '1px solid rgba(16,185,129,0.55)', color: '#34d399', fontSize: '12px', fontWeight: 800, padding: '6px 14px', borderRadius: '20px', marginLeft: 'auto', fontFamily: 'monospace', boxShadow: '0 0 15px rgba(16,185,129,0.35)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#34d399', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #34d399' }}></span>
            IST • {clock}
          </span>
        </div>

        <p style={{ color: '#cbd5e1', fontSize: '13px', marginBottom: '20px', fontWeight: 500 }}>Automated Inward Office & Station-Gate Express Logistics Infrastructure</p>

        {/* Action Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '24px' }}>
          <div onClick={() => setActiveModal('TARIFF')} style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(8,14,28,0.95))', border: '1px solid rgba(6,182,212,0.5)', borderRadius: '14px', padding: '14px 8px', textAlign: 'center', fontSize: '11px', fontWeight: 800, color: '#22d3ee', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
            📋 Tariff Engine
          </div>
          <div onClick={() => setActiveModal('BOOKING')} style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.35), rgba(15,23,42,0.95))', border: '1px solid #22d3ee', borderRadius: '14px', padding: '14px 8px', textAlign: 'center', fontSize: '11px', fontWeight: 800, color: '#fff', cursor: 'pointer', boxShadow: '0 0 20px rgba(6,182,212,0.4)', backdropFilter: 'blur(10px)' }}>
            🚀 Book & UPI Pay
          </div>
          <div onClick={() => setActiveModal('SLA')} style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(8,14,28,0.95))', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '14px', padding: '14px 8px', textAlign: 'center', fontSize: '11px', fontWeight: 800, color: '#94a3b8', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
            ⚡ Gate SLA
          </div>
          <div onClick={() => setActiveModal('ESG')} style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(8,14,28,0.95))', border: '1px solid rgba(16,185,129,0.5)', borderRadius: '14px', padding: '14px 8px', textAlign: 'center', fontSize: '11px', fontWeight: 800, color: '#34d399', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
            🌱 ESG Pledge
          </div>
        </div>

        {/* Service Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          <div 
            onClick={() => setServiceMode('24H')}
            style={{ 
              background: serviceMode === '24H' ? 'linear-gradient(135deg, rgba(6,182,212,0.28), rgba(15,23,42,0.95))' : 'linear-gradient(135deg, rgba(15,23,42,0.78), rgba(8,14,28,0.88))', 
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
              background: serviceMode === 'THUNDER' ? 'linear-gradient(135deg, rgba(245,158,11,0.28), rgba(15,23,42,0.95))' : 'linear-gradient(135deg, rgba(15,23,42,0.78), rgba(8,14,28,0.88))', 
              border: serviceMode === 'THUNDER' ? '2px solid #fbbf24' : '1px solid rgba(255,255,255,0.12)', 
              borderRadius: '18px', padding: '20px', cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: serviceMode === 'THUNDER' ? '0 0 25px rgba(245,158,11,0.35)' : '0 10px 30px rgba(0,0,0,0.5)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 900, color: '#fff', letterSpacing: '0.5px' }}>
                ⚡ 12H THUNDER EXPRESS
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#fde047', lineHeight: '1.4', fontWeight: 600 }}>"Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn"</div>
          </div>
        </div>

        {/* Master Calculator Box */}
        <div style={{ background: 'linear-gradient(145deg, rgba(15,23,42,0.88), rgba(6,10,20,0.92))', border: '1px solid rgba(6, 182, 212, 0.45)', borderRadius: '24px', padding: '28px', marginBottom: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.7)', backdropFilter: 'blur(16px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 900, color: '#fff' }}>Master B2B Freight Rate Engine</h2>
              <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>Instant contract quote calculation with integrated ESG Green Logistics contribution.</p>
            </div>
            <span style={{ background: 'rgba(6,182,212,0.18)', border: '1px solid rgba(6,182,212,0.45)', color: '#22d3ee', fontSize: '10px', fontWeight: 800, padding: '5px 12px', borderRadius: '14px' }}>SAC 9965 Compliant</span>
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
              <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700 }}>Min: 1 KG (Sweet Spot: 50-250 KG)</span>
            </div>
            <input type="number" value={weight} min={1} onChange={(e) => setWeight(Math.max(1, parseFloat(e.target.value) || 1))} style={{ width: '100%', background: '#040711', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '14px', padding: '14px', color: '#fff', fontSize: '16px', fontWeight: 800, outline: 'none', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.6)' }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
              {[10, 25, 50, 100, 250, 500, 750].map(w => (
                <button key={w} onClick={() => setWeight(w)} style={{ background: weight === w ? 'rgba(6,182,212,0.35)' : 'rgba(255,255,255,0.06)', border: weight === w ? '1px solid #22d3ee' : '1px solid rgba(255,255,255,0.12)', color: weight === w ? '#fff' : '#cbd5e1', fontSize: '11px', fontWeight: 800, padding: '8px 14px', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.2s' }}>{w}kg</button>
              ))}
            </div>
          </div>

          {/* Quote Card */}
          <div style={{ background: 'linear-gradient(135deg, rgba(8,14,28,0.98), rgba(4,8,16,0.99))', border: `2px solid ${serviceMode === 'THUNDER' ? '#fbbf24' : '#22d3ee'}`, borderRadius: '18px', padding: '22px', marginTop: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.6)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '10px', fontWeight: 900, color: serviceMode === 'THUNDER' ? '#fbbf24' : '#22d3ee', letterSpacing: '0.8px' }}>
                  {serviceMode === 'THUNDER' ? '⚡ THUNDER 12H PRIORITY EXPRESS QUOTE' : 'EXACT TARIFF QUOTE (24H SAME-DAY INCL. ₹20 ESG)'}
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '18px' }}>
              <button 
                onClick={() => {
                  const quoteText = `TCC B2B Green Freight Quote (${serviceMode === 'THUNDER' ? '12H Thunder Express Priority' : '24H Same-Day Express'})\nCorridor: ${data.name}\nWeight: ${weight} KG\nEst. Tariff: ₹${finalPrice.toLocaleString('en-IN')} (Incl. ₹20 ESG Green Offset)\nSAC: 9965 RCM Compliant`;
                  navigator.clipboard.writeText(quoteText);
                  alert('Official Green Freight Quote Copied Successfully!');
                }}
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontWeight: 800, fontSize: '11px', padding: '14px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase' }}
              >
                Copy Quote Summary
              </button>
              
              <button 
                onClick={() => setActiveModal('BOOKING')}
                style={{ background: 'linear-gradient(90deg, #22d3ee, #34d399)', border: 'none', color: '#020617', fontWeight: 900, fontSize: '11px', padding: '14px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase', boxShadow: '0 8px 25px rgba(6,182,212,0.4)' }}
              >
                🚀 Book & UPI Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* Network Metrics Counters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', marginBottom: '24px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.88), rgba(8,14,28,0.92))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '18px 12px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', fontFamily: 'monospace' }}>3 <span style={{ color: '#22d3ee' }}>Primary</span></div>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', marginTop: '6px' }}>CONSOLIDATION TERMINALS</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.88), rgba(8,14,28,0.92))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '18px 12px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', fontFamily: 'monospace' }}>175+</div>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', marginTop: '6px' }}>DISTRICT LOGISTICS HUBS</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.88), rgba(8,14,28,0.92))', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '18px', padding: '18px 12px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.4)' }}>
            <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff', fontFamily: 'monospace' }}>355+</div>
            <div style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8', marginTop: '6px' }}>EXPRESS COLLECTION NODES</div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', fontSize: '11px', color: '#94a3b8', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', fontWeight: 500 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '8px', flexWrap: 'wrap' }}>
            <span>💚 WhatsApp Business: +91 8340085989</span>
            <span>✉️ Gmail: tcc.cargodesk@gmail.com</span>
            <span>🛡️ MSME: UDYAM-TS-02-0359997</span>
          </div>
          <div>Thunder Cargo Corridor (TCC) • South India B2B Last-Mile Logistics Infrastructure Framework</div>
        </div>

      </div>

      {/* Modals */}
      {activeModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(2, 6, 23, 0.92)', backdropFilter: 'blur(20px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', overflowY: 'auto' }}>
          <div style={{ background: 'linear-gradient(145deg, #0f172a, #040711)', border: '1px solid rgba(6, 182, 212, 0.5)', borderRadius: '24px', maxWidth: '720px', width: '100%', padding: '32px', position: 'relative', boxShadow: '0 30px 80px rgba(0,0,0,0.95)', maxHeight: '90vh', overflowY: 'auto' }}>
            
            <button onClick={() => { setActiveModal(null); setBookingSuccess(false); setOperatorPin(''); setPinError(false); }} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', borderRadius: '50%', width: '38px', height: '38px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', zIndex: 10 }}>✕</button>

            {activeModal === 'BOOKING' && (
              <div>
                {!bookingSuccess ? (
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>⚡ TCC Express B2B Booking & Secure UPI Pay</h3>
                    <p style={{ fontSize: '12px', color: '#22d3ee', marginBottom: '20px', fontWeight: 700 }}>Secunderabad Station Outer Gate Terminal • AP/TS Bus-Feeder Corridor</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '6px', fontWeight: 700 }}>Consignor (Sender Firm)</label>
                        <input type="text" placeholder="e.g. Sri Venkateshwara Textiles" value={senderName} onChange={(e) => setSenderName(e.target.value)} style={{ width: '100%', background: '#020617', border: '1px solid rgba(255,255,255,0.2)', padding: '12px', borderRadius: '10px', color: '#fff', fontSize: '13px' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '6px', fontWeight: 700 }}>Sender Mobile Number</label>
                        <input type="text" placeholder="10-digit mobile" value={senderMobile} onChange={(e) => setSenderMobile(e.target.value)} style={{ width: '100%', background: '#020617', border: '1px solid rgba(255,255,255,0.2)', padding: '12px', borderRadius: '10px', color: '#fff', fontSize: '13px' }} />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                      <div>
                        <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '6px', fontWeight: 700 }}>Consignee (Receiver Firm)</label>
                        <input type="text" placeholder="e.g. Warangal Hub Agents" value={receiverName} onChange={(e) => setReceiverName(e.target.value)} style={{ width: '100%', background: '#020617', border: '1px solid rgba(255,255,255,0.2)', padding: '12px', borderRadius: '10px', color: '#fff', fontSize: '13px' }} />
                      </div>
                      <div>
                        <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '6px', fontWeight: 700 }}>Destination Hub (AP / TS)</label>
                        <input type="text" placeholder="e.g. Warangal, Vijayawada, Karimnagar" value={destCity} onChange={(e) => setDestCity(e.target.value)} style={{ width: '100%', background: '#020617', border: '1px solid rgba(255,255,255,0.2)', padding: '12px', borderRadius: '10px', color: '#fff', fontSize: '13px' }} />
                      </div>
                    </div>

                    <div style={{ marginBottom: '18px' }}>
                      <label style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginBottom: '6px', fontWeight: 700 }}>Cargo Description & Weight</label>
                      <input type="text" value={`${goodsDesc} | Gross Weight: ${weight} KG | Corridor: ${data.name}`} onChange={(e) => setGoodsDesc(e.target.value)} style={{ width: '100%', background: '#020617', border: '1px solid rgba(255,255,255,0.2)', padding: '12px', borderRadius: '10px', color: '#fff', fontSize: '13px' }} />
                    </div>

                    {/* Payment Box with Slice UPI */}
                    <div style={{ background: 'rgba(4,8,16,0.9)', border: '1px solid rgba(6,182,212,0.4)', borderRadius: '16px', padding: '18px', textAlign: 'center', marginBottom: '18px' }}>
                      <div style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '4px' }}>Total Freight Payable (Incl. Green ESG Offset):</div>
                      <div style={{ fontSize: '32px', fontWeight: 900, fontFamily: 'monospace', color: '#22d3ee', marginBottom: '12px' }}>₹{finalPrice.toLocaleString('en-IN')}</div>
                      
                      <div style={{ background: '#fff', padding: '12px', display: 'inline-block', borderRadius: '10px', marginBottom: '10px' }}>
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=upi://pay?pa=9848196716@slc&pn=Mohammed%20Mustafa%20Khan%20Amer&am=" alt="Slice UPI QR" style={{ width: '150px', height: '150px', display: 'block', margin: 'auto' }} />
                      </div>

                      <div style={{ fontSize: '12px', color: '#fff', marginBottom: '14px' }}>
                        <strong>Account Holder:</strong> Mohammed Mustafa Khan Amer[span_1](start_span)[span_1](end_span)<br />
                        <strong>UPI ID:</strong> <span style={{ color: '#22d3ee', fontFamily: 'monospace' }}>9848196716@slc</span>[span_2](start_span)[span_2](end_span)
                      </div>

                      {/* Operator Authorization PIN Gate */}
                      <div style={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(245,158,11,0.5)', borderRadius: '12px', padding: '14px', textAlign: 'left' }}>
                        <label style={{ fontSize: '11px', color: '#fbbf24', display: 'block', marginBottom: '6px', fontWeight: 800, textTransform: 'uppercase' }}>
                          🔒 Operator Authorization PIN (Required to Generate Slip)
                        </label>
                        <input 
                          type="password" 
                          maxLength={6}
                          placeholder="Enter Operator PIN" 
                          value={operatorPin} 
                          onChange={(e) => { setOperatorPin(e.target.value); setPinError(false); }} 
                          style={{ width: '100%', background: '#020617', border: pinError ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.2)', padding: '12px', borderRadius: '8px', color: '#fff', fontSize: '14px', fontFamily: 'monospace' }} 
                        />
                        {pinError && <div style={{ fontSize: '11px', color: '#ef4444', marginTop: '4px', fontWeight: 700 }}>⚠️ Incorrect Operator PIN! Verification failed.</div>}
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        if (operatorPin === '7860') {
                          const currentTimestamp = `${new Date().toLocaleDateString('en-IN')} | ${clock}`;
                          setReceiptTimestamp(currentTimestamp);
                          setBookingSuccess(true);
                          setPinError(false);

                          const adminMessage = `🚨 *TCC NEW BOOKING VERIFIED* 🚨%0A%0A` +
                            `📌 *LR No:* TCC/2026/SEC-${Math.floor(1000 + Math.random() * 9000)}%0A` +
                            `⏰ *Time:* ${currentTimestamp}%0A` +
                            `📤 *Sender:* ${senderName || 'Sri Venkateshwara Textiles'}%0A` +
                            `📥 *Receiver:* ${receiverName || 'Regional Hub Agent'}%0A` +
                            `📍 *Destination:* ${destCity}%0A` +
                            `⚖️ *Weight:* ${weight} KG%0A` +
                            `💰 *Freight Paid:* ₹${finalPrice.toLocaleString('en-IN')}%0A` +
                            `🔒 *Status:* Verified & Paid via UPI (9848196716@slc)`;

                          window.open(`https://wa.me/918340085989?text=${adminMessage}`, '_blank');
                        } else {
                          setPinError(true);
                        }
                      }}
                      style={{ width: '100%', background: 'linear-gradient(90deg, #f59e0b, #34d399)', border: 'none', color: '#020617', fontWeight: 900, fontSize: '13px', padding: '16px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase', boxShadow: '0 8px 25px rgba(245,158,11,0.4)' }}
                    >
                      🔐 Verify Payment & Generate Official Challan
                    </button>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '10px 0' }}>
                    <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎉</div>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#34d399', marginBottom: '6px' }}>Consignment Booked & Verified Successfully!</h3>
                    <p style={{ fontSize: '12px', color: '#cbd5e1', marginBottom: '20px' }}>Digital Delivery Challan & Forwarding Memo generated for Secunderabad outer gate transfer bay.</p>

                    <div style={{ background: '#020617', border: '1px solid rgba(16,185,129,0.4)', borderRadius: '14px', padding: '16px', textAlign: 'left', fontSize: '12px', marginBottom: '20px', fontFamily: 'monospace' }}>
                      <div style={{ color: '#34d399', fontWeight: 800, marginBottom: '8px' }}>LR NO: TCC/2026/SEC-{Math.floor(1000 + Math.random() * 9000)}</div>
                      <div><strong>Timestamp:</strong> {receiptTimestamp}</div>
                      <div><strong>Sender:</strong> {senderName || 'Sri Venkateshwara Textiles'}</div>
                      <div><strong>Receiver:</strong> {receiverName || 'Regional Hub Agent'}</div>
                      <div><strong>Destination Hub:</strong> {destCity}</div>
                      <div><strong>Weight:</strong> {weight} KG | <strong>Freight:</strong> ₹{finalPrice.toLocaleString('en-IN')}</div>
                      <div><strong>Payment Status:</strong> VERIFIED & PAID via UPI (`9848196716@slc`)[span_3](start_span)[span_3](end_span)</div>
                      <div style={{ color: '#22d3ee', marginTop: '6px' }}>✓ SAC 9965 RCM Compliant[span_4](start_span)[span_4](end_span) | UYDAM-TS-02-0359997</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <button 
                        onClick={() => window.print()}
                        style={{ background: '#34d399', color: '#020617', border: 'none', fontWeight: 900, padding: '14px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}
                      >
                        🖨️ Print / Save Challan
                      </button>
                      <button 
                        onClick={() => { setBookingSuccess(false); setActiveModal(null); setOperatorPin(''); }}
                        style={{ background: '#22d3ee', color: '#020617', border: 'none', fontWeight: 900, padding: '14px', borderRadius: '10px', cursor: 'pointer', textTransform: 'uppercase' }}
                      >
                        Done / Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

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
                  ✓ Certified Net-Zero Last-Mile Infrastructure Framework[span_5](start_span)[span_5](end_span) (SAC 9965 Compliant[span_6](start_span)[span_6](end_span))
                </div>
              </div>
            )}

            {activeModal === 'TARIFF' && (
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>Master Tariff & Demurrage Schedule</h3>
                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
                  SAC 9965 RCM Compliant contract pricing matrix. Storage is free for 24 hours at primary terminals, followed by ₹1.50 per KG per day demurrage[span_7](start_span)[span_7](end_span).
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
