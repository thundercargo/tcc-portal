'client';
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
  const [clock, setClock] = useState('--:--:-- IST');
  const [mode, setMode] = useState<'24H' | '12H'>('24H');
  const [corridor, setCorridor] = useState('REG_2A');
  const [weight, setWeight] = useState<number>(100);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setClock(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' IST');
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calculation Logic
  const item = TARIFFS[corridor] || TARIFFS.REG_2A;
  let baseCost = 0;
  let slabName = '';

  if (weight <= 10) { baseCost = item.base[0]; slabName = '1 – 10 KG'; }
  else if (weight <= 25) { baseCost = item.base[1]; slabName = '11 – 25 KG'; }
  else if (weight <= 50) { baseCost = item.base[2]; slabName = '26 – 50 KG'; }
  else if (weight <= 100) { baseCost = item.base[3]; slabName = '51 – 100 KG'; }
  else if (weight <= 250) { baseCost = item.base[4]; slabName = '101 – 250 KG'; }
  else if (weight <= 500) { baseCost = item.base[5]; slabName = '251 – 500 KG'; }
  else {
    baseCost = item.base[5] + ((weight - 500) * item.excess);
    slabName = 'EXCESS > 500 KG';
  }

  const finalCost = mode === '12H' ? Math.round(baseCost * 1.25) : baseCost;

  return (
    <main style={{ backgroundColor: '#060911', color: '#f8fafc', minHeight: '100vh', padding: '24px 16px 80px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Top Badges & Clock */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.35)', color: '#06b6d4', fontSize: '11px', fontWeight: 700, padding: '6px 14px', borderRadius: '20px' }}>NATIONWIDE B2B LOGISTICS</span>
          <span style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)', color: '#f59e0b', fontSize: '11px', fontWeight: 700, padding: '6px 14px', borderRadius: '20px' }}>UDYAM-TS-02-0359997</span>
          <span style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.4)', color: '#10b981', fontSize: '13px', fontWeight: 800, padding: '6px 14px', borderRadius: '20px', marginLeft: 'auto', fontFamily: 'monospace' }}>{clock}</span>
        </div>

        <h1 style={{ fontSize: '34px', fontWeight: 800, color: '#ffffff' }}>THUNDER CARGO <span style={{ color: '#06b6d4' }}>CORRIDOR</span></h1>
        <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '4px', marginBottom: '24px' }}>Enterprise Last-Mile Integration & Digital Terminal Dispatch Network | Secunderabad (SCR)</p>

        {/* Network Counters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
          <div style={{ background: 'rgba(10,16,30,0.7)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'monospace', color: '#fff' }}>3 <span style={{ color: '#06b6d4' }}>Primary</span></div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', marginTop: '4px' }}>CONSOLIDATION TERMINALS</div>
          </div>
          <div style={{ background: 'rgba(10,16,30,0.7)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'monospace', color: '#fff' }}>175+</div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', marginTop: '4px' }}>DISTRICT LOGISTICS HUBS</div>
          </div>
          <div style={{ background: 'rgba(10,16,30,0.7)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '18px' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, fontFamily: 'monospace', color: '#fff' }}>355+</div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', marginTop: '4px' }}>EXPRESS COLLECTION NODES</div>
          </div>
        </div>

        {/* Dual Subheads / Service Selectors */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
          <div 
            onClick={() => setMode('24H')}
            style={{ 
              background: mode === '24H' ? 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(10,16,30,0.9))' : 'rgba(10,16,30,0.85)', 
              border: mode === '24H' ? '2px solid #06b6d4' : '2px solid rgba(255,255,255,0.1)', 
              borderRadius: '16px', padding: '20px', cursor: 'pointer', boxShadow: mode === '24H' ? '0 0 25px rgba(6,182,212,0.3)' : 'none' 
            }}
          >
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
              <span>24H SAME-DAY EXPRESS</span>
              <span style={{ fontSize: '10px', background: 'rgba(6,182,212,0.2)', color: '#06b6d4', padding: '4px 8px', borderRadius: '4px' }}>STANDARD</span>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#06b6d4', marginTop: '6px' }}>4-Hour Intra-City SLA • 24-Hour Regional Evacuation</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px' }}>Standard B2B commercial rates for scheduled factory dispatches and bulk inventory.</div>
          </div>

          <div 
            onClick={() => setMode('12H')}
            style={{ 
              background: mode === '12H' ? 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(10,16,30,0.9))' : 'rgba(10,16,30,0.85)', 
              border: mode === '12H' ? '2px solid #f59e0b' : '2px solid rgba(255,255,255,0.1)', 
              borderRadius: '16px', padding: '20px', cursor: 'pointer', boxShadow: mode === '12H' ? '0 0 25px rgba(245,158,11,0.3)' : 'none' 
            }}
          >
            <div style={{ fontSize: '16px', fontWeight: 800, color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
              <span>⚡ 12H THUNDER SERVICE</span>
              <span style={{ fontSize: '10px', background: 'rgba(245,158,11,0.2)', color: '#f59e0b', padding: '4px 8px', borderRadius: '4px' }}>PREMIUM +25%</span>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b', marginTop: '6px' }}>"Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn"</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px' }}>12-Hour ultra-express turnaround utilizing top-load regional express lines.</div>
          </div>
        </div>

        {/* Calculator Engine Box */}
        <div style={{ background: 'rgba(13,20,36,0.85)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: '20px', padding: '24px', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>Master B2B Freight Rate Engine</h2>
            <span style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.35)', color: '#06b6d4', fontSize: '11px', fontWeight: 700, padding: '6px 14px', borderRadius: '20px' }}>SAC 9965 RCM COMPLIANT</span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '12px', fontWeight: 800, color: '#06b6d4', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Corridor / Route Matrix</label>
            <select value={corridor} onChange={(e) => setCorridor(e.target.value)} style={{ width: '100%', background: 'rgba(6,9,17,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '14px', color: '#fff', fontSize: '15px', fontWeight: 700 }}>
              {Object.keys(TARIFFS).map(k => (
                <option key={k} value={k}>{TARIFFS[k].name}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '12px', fontWeight: 800, color: '#06b6d4', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>Consignment Gross Weight (KG)</label>
            <input type="number" value={weight} min={1} onChange={(e) => setWeight(Math.max(1, parseFloat(e.target.value) || 1))} style={{ width: '100%', background: 'rgba(6,9,17,0.9)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '12px', padding: '14px', color: '#fff', fontSize: '15px', fontWeight: 700 }} />
          </div>

          {/* Quote Result Box */}
          <div style={{ background: 'linear-gradient(180deg, rgba(13,20,36,0.95), rgba(6,9,17,0.98))', border: `2px solid ${mode === '12H' ? '#f59e0b' : '#06b6d4'}`, borderRadius: '18px', padding: '24px', marginTop: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: mode === '12H' ? '#f59e0b' : '#06b6d4', letterSpacing: '1px' }}>
              {mode === '12H' ? '⚡ EXACT TARIFF QUOTE (12H THUNDER SERVICE)' : 'EXACT TARIFF QUOTE (24H BASELINE)'}
            </div>
            <div style={{ fontSize: '46px', fontWeight: 800, fontFamily: 'monospace', color: '#fff', margin: '8px 0' }}>₹{finalCost.toLocaleString('en-IN')}</div>
            
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: mode === '12H' ? 'rgba(245,158,11,0.15)' : 'rgba(16,185,129,0.15)', border: `1px solid ${mode === '12H' ? 'rgba(245,158,11,0.4)' : 'rgba(16,185,129,0.4'}`, color: mode === '12H' ? '#f59e0b' : '#10b981', fontSize: '12px', fontWeight: 800, padding: '6px 12px', borderRadius: '8px' }}>
              {mode === '12H' ? '⚡ 12 TO 36 HOURS OF INDUSTRIAL DOWNTIME AVOIDED' : '🟢 GUARANTEED COMMERCIAL RATE (ALL INCLUSIVE)'}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '18px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '14px', fontSize: '12px' }}>
              <div>
                <span style={{ color: '#94a3b8', display: 'block' }}>Corridor:</span>
                <strong style={{ color: '#fff' }}>{item.name}</strong>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ color: '#94a3b8', display: 'block' }}>Weight Slab:</span>
                <strong style={{ color: '#06b6d4' }}>{slabName}</strong>
              </div>
            </div>

            <button 
              onClick={() => {
                navigator.clipboard.writeText(`[TCC QUOTE] Mode: ${mode} | Corridor: ${item.name} | Weight: ${weight}kg | Quote: ₹${finalCost}`);
                alert('Dispatch Quote Copied!');
              }}
              style={{ width: '100%', background: 'linear-gradient(90deg, #06b6d4, #0891b2)', border: 'none', color: '#000', fontWeight: 800, fontSize: '14px', padding: '16px', borderRadius: '12px', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '18px' }}
            >
              COPY OFFICIAL DISPATCH QUOTE
            </button>
          </div>
        </div>

        {/* Corporate Profile Section */}
        <div style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px' }}>
          <div style={{ fontSize: '20px', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>CORPORATE PROFILE & FLEET VANGUARD</div>
          <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>High Command Strategic Operations Division | Secunderabad (SCR) Hub</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ background: 'rgba(10,16,30,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>🏛️ Strategic Terminal Guardianship</div>
              <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                Operating as an elite last-mile integration platform for Secunderabad terminal logistics, TCC clears platform backlogs via a rigid 2-hour platform clearance SLA. Compliant with SAC 9965 RCM and MSME Udyam standards.
              </div>
            </div>

            <div style={{ background: 'rgba(10,16,30,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>⚡ The Charminar Last-Mile Vanguard</div>
              <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                Partnering with the experienced auto drivers and last-mile delivery workforce of Old City (Charminar), TCC operates a hyper-agile 2-hour local transit network capable of delivering up to 30 KM without urban bottleneck delays.
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
