'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Calculator,
  Zap,
  Leaf,
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  Mail,
  Award,
  Layers,
  BarChart3,
  CheckCircle2,
  PackageCheck,
  Building2,
  Sparkles
} from 'lucide-react';

const TARIFF_MATRIX: Record<string, { name: string; slabs: number[]; excess: number }> = {
  'intra-1': { name: 'INTRA-CITY 1 (4 – 5 KM)', slabs: [150, 250, 380, 550, 1100, 1800], excess: 3.50 },
  'intra-2': { name: 'INTRA-CITY 2 (6 – 15 KM)', slabs: [200, 320, 480, 750, 1500, 2400], excess: 4.50 },
  'intra-3': { name: 'INTRA-CITY 3 (16 – 30 KM)', slabs: [280, 420, 650, 1050, 2000, 3200], excess: 6.00 },
  'reg-1a': { name: 'REGIONAL 1A (31 – 50 KM)', slabs: [240, 340, 520, 720, 1400, 2400], excess: 4.50 },
  'reg-1b': { name: 'REGIONAL 1B (51 – 100 KM)', slabs: [280, 390, 600, 820, 1600, 2750], excess: 5.20 },
  'reg-2a': { name: 'REGIONAL 2A (101 – 150 KM)', slabs: [320, 450, 700, 980, 1900, 3100], excess: 6.00 },
  'reg-2b': { name: 'REGIONAL 2B (151 – 200 KM)', slabs: [350, 490, 780, 1100, 2200, 3500], excess: 6.80 },
  'reg-3a': { name: 'REGIONAL 3A (201 – 250 KM)', slabs: [380, 540, 880, 1280, 2480, 3750], excess: 7.30 },
  'reg-3b': { name: 'REGIONAL 3B (251 – 300 KM)', slabs: [410, 590, 1020, 1420, 2680, 3920], excess: 7.80 },
  'reg-4a': { name: 'REGIONAL 4A (301 – 350 KM)', slabs: [440, 640, 1120, 1580, 2950, 4400], excess: 8.60 },
  'reg-4b': { name: 'REGIONAL 4B (351 – 400 KM)', slabs: [470, 690, 1220, 1720, 3220, 4920], excess: 9.50 },
  'reg-5a': { name: 'REGIONAL 5A (401 – 450 KM)', slabs: [500, 740, 1320, 1880, 3550, 5400], excess: 10.50 },
  'reg-5b': { name: 'REGIONAL 5B (451 – 500 KM)', slabs: [530, 790, 1420, 2020, 3820, 5920], excess: 11.50 },
  'reg-6a': { name: 'REGIONAL 6A (501 – 550 KM)', slabs: [560, 840, 1520, 2180, 4150, 6400], excess: 12.50 },
  'reg-6b': { name: 'REGIONAL 6B (551 – 600 KM)', slabs: [590, 890, 1620, 2320, 4420, 6920], excess: 13.50 },
};

function LiveBackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const colors = ['#22d3ee', '#34d399', '#38bdf8', '#facc15', '#a855f7'];
    const meteors = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: (Math.random() - 0.5) * height,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 4 + 2,
      opacity: Math.random() * 0.7 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: Math.random() * 1.5 + 0.8
    }));

    const render = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.25)';
      ctx.fillRect(0, 0, width, height);

      meteors.forEach((m) => {
        m.y += m.speed;
        if (m.y > height + m.length) {
          m.y = -m.length;
          m.x = Math.random() * width;
          m.speed = Math.random() * 4 + 2;
        }

        const gradient = ctx.createLinearGradient(m.x, m.y - m.length, m.x, m.y);
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(1, m.color);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = m.width;
        ctx.moveTo(m.x, m.y - m.length);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(m.x, m.y, m.width * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 12;
        ctx.shadowColor = m.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75
      }}
    />
  );
}

export default function App() {
  const [weight, setWeight] = useState<number>(100);
  const [corridor, setCorridor] = useState<string>('intra-1');
  const [activeTab, setActiveTab] = useState<'calculator' | 'sla' | 'esg'>('calculator');
  const [copied, setCopied] = useState<boolean>(false);
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeString(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const selectedTariff = TARIFF_MATRIX[corridor] || TARIFF_MATRIX['intra-1'];

  const calculateRate = (w: number) => {
    if (!w || w <= 0) return 0;
    let base = 0;
    if (w <= 10) base = selectedTariff.slabs[0];
    else if (w <= 25) base = selectedTariff.slabs[1];
    else if (w <= 50) base = selectedTariff.slabs[2];
    else if (w <= 100) base = selectedTariff.slabs[3];
    else if (w <= 250) base = selectedTariff.slabs[4];
    else if (w <= 500) base = selectedTariff.slabs[5];
    else {
      base = selectedTariff.slabs[5] + (w - 500) * selectedTariff.excess;
    }
    return base + 20;
  };

  const estimatedCost = calculateRate(weight);

  const getSlabLabel = (w: number) => {
    if (w <= 10) return '1 – 10 KG';
    if (w <= 25) return '11 – 25 KG';
    if (w <= 50) return '26 – 50 KG';
    if (w <= 100) return '51 – 100 KG';
    if (w <= 250) return '101 – 250 KG';
    if (w <= 500) return '251 – 500 KG';
    return `Excess >500 KG (+₹${selectedTariff.excess.toFixed(2)}/kg)`;
  };

  const handleShareQuote = () => {
    const text = `TCC B2B Green Freight Quote\nCorridor: ${selectedTariff.name}\nWeight: ${weight} KG\nEst. Tariff: ₹${estimatedCost.toLocaleString('en-IN')} (Incl. ₹20 ESG Green Offset)\nSAC: 9965 RCM Compliant`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#020617',
      color: '#f8fafc',
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '24px 16px',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      <LiveBackgroundCanvas />

      <div style={{ maxWidth: '1150px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Header Section - Title at the Top */}
        <header style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.7) 100%)',
          border: '1px solid rgba(56, 189, 248, 0.3)',
          backdropFilter: 'blur(25px)',
          borderRadius: '24px',
          padding: '28px 32px',
          marginBottom: '28px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.6)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              {/* Primary Title Prominently First */}
              <h1 style={{ fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: 900, margin: '0 0 10px 0', letterSpacing: '-0.02em', color: '#ffffff' }}>
                THUNDER CARGO <span style={{ background: 'linear-gradient(to right, #22d3ee, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>CORRIDOR</span>
              </h1>

              {/* Sub-Tags directly below Title */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px',
                  borderRadius: '50px', fontSize: '11px', fontWeight: 700,
                  backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#34d399', display: 'inline-block' }} />
                  ENTERPRISE B2B LOGISTICS NETWORK
                </span>
                <span style={{
                  padding: '4px 12px', borderRadius: '50px', fontSize: '11px', fontWeight: 700,
                  backgroundColor: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee', border: '1px solid rgba(6, 182, 212, 0.3)', fontFamily: 'monospace'
                }}>
                  UDYAM-TS-02-0359997
                </span>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0, fontWeight: 500 }}>
                Automated Terminal Dispatch & Sustainable Freight Infrastructure
              </p>
            </div>

            {/* Compact Top-Right Live IST Clock */}
            <div style={{
              background: 'rgba(2, 6, 23, 0.85)',
              border: '1px solid rgba(34, 211, 238, 0.4)',
              borderRadius: '12px',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 8px 20px rgba(6, 182, 212, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>
                <Clock size={14} color="#22d3ee" /> IST
              </div>
              <div style={{ color: '#22d3ee', fontFamily: 'monospace', fontSize: '15px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399' }} />
                {timeString || 'IST Loading...'}
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex', gap: '12px', background: 'rgba(15, 23, 42, 0.85)', padding: '8px',
          borderRadius: '18px', border: '1px solid rgba(51, 65, 85, 0.8)', marginBottom: '28px', overflowX: 'auto'
        }}>
          {[
            { id: 'calculator', label: 'Master Tariff Engine', icon: Calculator },
            { id: 'sla', label: '90-Min Evacuation SLA', icon: Zap },
            { id: 'esg', label: 'Voluntary ESG Pledge', icon: Leaf }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  flex: 1, padding: '12px 20px', borderRadius: '12px', border: 'none', cursor: 'pointer',
                  fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: isActive ? 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)' : 'transparent',
                  color: isActive ? '#020617' : '#94a3b8',
                  boxShadow: isActive ? '0 10px 25px rgba(6, 182, 212, 0.3)' : 'none',
                  transition: 'all 0.3s ease', whiteSpace: 'nowrap'
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(51, 65, 85, 0.7)',
          backdropFilter: 'blur(25px)', borderRadius: '24px', padding: '28px', marginBottom: '28px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
        }}>
          {activeTab === 'calculator' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(51, 65, 85, 0.6)', paddingBottom: '20px', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontSize: '20px', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                    <BarChart3 size={20} color="#22d3ee" /> Master B2B Freight Rate Engine
                  </h2>
                  <p style={{ color: '#94a3b8', fontSize: '13px', margin: '4px 0 0 0' }}>Instant contract quote calculation with integrated ESG Green Logistics contribution.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '10px', backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.25)', color: '#34d399', fontSize: '12px', fontWeight: 700 }}>
                  <ShieldCheck size={14} /> SAC 9965 RCM Compliant
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', alignItems: 'start' }}>
                
                {/* Left Controls */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#22d3ee', fontWeight: 800, marginBottom: '8px' }}>
                      Corridor / Route Matrix
                    </label>
                    <select
                      value={corridor}
                      onChange={(e) => setCorridor(e.target.value)}
                      style={{
                        width: '100%', backgroundColor: '#020617', border: '1px solid #334155',
                        borderRadius: '14px', padding: '14px', color: '#ffffff', fontSize: '14px', fontWeight: 600, outline: 'none', cursor: 'pointer'
                      }}
                    >
                      {Object.entries(TARIFF_MATRIX).map(([key, item]) => (
                        <option key={key} value={key} style={{ background: '#0f172a', color: '#fff' }}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#22d3ee', fontWeight: 800 }}>
                        Consignment Gross Weight (KG)
                      </label>
                      <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>Min 1 KG</span>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="number"
                        min="1"
                        max="10000"
                        value={weight}
                        onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                        style={{
                          width: '100%', backgroundColor: '#020617', border: '1px solid #334155',
                          borderRadius: '14px', padding: '14px 50px 14px 16px', color: '#ffffff', fontSize: '18px', fontFamily: 'monospace', fontWeight: 700, outline: 'none', boxSizing: 'border-box'
                        }}
                      />
                      <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b', fontWeight: 700, fontSize: '13px' }}>KG</span>
                    </div>

                    <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
                      {[10, 25, 50, 100, 250, 500, 750].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setWeight(preset)}
                          style={{
                            padding: '6px 12px', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace', fontWeight: 700,
                            border: weight === preset ? '1px solid rgba(34, 211, 238, 0.6)' : '1px solid #334155',
                            backgroundColor: weight === preset ? 'rgba(6, 182, 212, 0.2)' : '#020617',
                            color: weight === preset ? '#22d3ee' : '#94a3b8', cursor: 'pointer'
                          }}
                        >
                          {preset}kg
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={{ padding: '14px', borderRadius: '14px', backgroundColor: 'rgba(16, 185, 129, 0.08)', border: '1px solid rgba(16, 185, 129, 0.3)', fontSize: '12px', color: '#94a3b8' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399', fontWeight: 700, marginBottom: '6px' }}>
                      <Leaf size={14} color="#34d399" /> Integrated Green Logistics & ESG Levy
                    </div>
                    Every quote automatically allocates ₹20.00/waybill (₹10 Hub Welfare, ₹5 Urban Afforestation, ₹5 Climate Auditing) to ensure zero net carbon last-mile compliance.
                  </div>
                </div>

                {/* Right Result Card */}
                <div>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(2, 6, 23, 0.98) 100%)',
                    border: '1px solid rgba(16, 185, 129, 0.4)', borderRadius: '20px', padding: '24px', boxShadow: '0 15px 35px rgba(16, 185, 129, 0.15)'
                  }}>
                    <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#34d399', fontWeight: 700, marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>Exact Tariff Quote</span>
                      <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '2px 8px', borderRadius: '6px', fontSize: '10px' }}>ESG Certified</span>
                    </div>
                    <div style={{ margin: '12px 0' }}>
                      <div style={{ fontSize: 'clamp(32px, 5vw, 44px)', fontWeight: 900, fontFamily: 'monospace', color: '#ffffff', letterSpacing: '-0.02em' }}>
                        ₹{estimatedCost.toLocaleString('en-IN')}
                      </div>
                      <div style={{ fontSize: '12px', color: '#34d399', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', fontWeight: 700 }}>
                        <CheckCircle2 size={14} /> Includes ₹20.00 Green Logistics Offset
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(51, 65, 85, 0.6)', paddingTop: '16px', margin: '16px 0', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#94a3b8' }}>Selected Corridor:</span>
                        <span style={{ fontWeight: 700, color: '#fff', textAlign: 'right', maxWidth: '180px' }}>{selectedTariff.name}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#94a3b8' }}>Weight Bracket:</span>
                        <span style={{ fontFamily: 'monospace', color: '#22d3ee', fontWeight 700 }}>{getSlabLabel(weight)}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px dashed rgba(51, 65, 85, 0.6)', paddingTop: '8px' }}>
                        <span style={{ color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px' }}><Leaf size={12}/> ESG Contribution:</span>
                        <span style={{ fontFamily: 'monospace', color: '#34d399', fontWeight: 700 }}>₹20.00 (Included)</span>
                      </div>
                    </div>

                    <button
                      onClick={handleShareQuote}
                      style={{
                        width: '100%', padding: '14px', borderRadius: '12px', fontWeight: 800, fontSize: '11px',
                        textTransform: 'uppercase', letterSpacing: '0.05em', border: '1px solid rgba(16, 185, 129, 0.4)',
                        backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', cursor: 'pointer', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'all 0.2s'
                      }}
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 size={16} color="#34d399" />
                          <span>Green Quote Copied!</span>
                        </>
                      ) : (
                        <>
                          <Layers size={16} color="#34d399" />
                          <span>Copy Green Quote Summary</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'sla' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                <Zap size={20} color="#22d3ee" /> Terminal Evacuation & SLA Telemetry
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div style={{ backgroundColor: '#020617', border: '1px solid #334155', padding: '20px', borderRadius: '16px' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>Average Clear Time</div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#34d399', fontFamily: 'monospace', margin: '8px 0' }}>42 Mins</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Guaranteed SLA: Under 90 Mins</div>
                </div>
                <div style={{ backgroundColor: '#020617', border: '1px solid #334155', padding: '20px', borderRadius: '16px' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight 700, textTransform: 'uppercase' }}>Dwell Reduction</div>
                  <div style={{ fontSize: '32px', fontWeight 900, color: '#22d3ee', fontFamily: 'monospace', margin: '8px 0' }}>-78%</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Versus legacy freight handling</div>
                </div>
                <div style={{ backgroundColor: '#020617', border: '1px solid #334155', padding: '20px', borderRadius: '16px' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase' }}>Demurrage Risk</div>
                  <div style={{ fontSize: '32px', fontWeight 900, color: '#34d399', fontFamily: 'monospace', margin: '8px 0' }}>0.00%</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Zero wharfage accumulation</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'esg' && (
            <div>
              <h2 style={{ fontSize: '20px', fontWeight 800, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
                <Leaf size={20} color="#34d399" /> ESG & Green Last-Mile Pledge
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                <div style={{ backgroundColor: '#020617', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '20px', borderRadius: '16px' }}>
                  <div style={{ fontSize: '11px', color: '#34d399', fontWeight: 700, textTransform: 'uppercase' }}>Hub Welfare Fund</div>
                  <div style={{ fontSize: '28px', fontWeight 900, color: '#fff', fontFamily: 'monospace', margin: '8px 0' }}>₹10 <span style={{ fontSize: '12px', color: '#34d399' }}>/waybill</span></div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Direct driver & loader medical cover</div>
                </div>
                <div style={{ backgroundColor: '#020617', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '20px', borderRadius: '16px' }}>
                  <div style={{ fontSize: '11px', color: '#34d399', fontWeight: 700, textTransform: 'uppercase' }}>Urban Afforestation</div>
                  <div style={{ fontSize: '28px', fontWeight 900, color: '#fff', fontFamily: 'monospace', margin: '8px 0' }}>₹5 <span style={{ fontSize: '12px', color: '#34d399' }}>/waybill</span></div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Tree plantation near district terminal hubs</div>
                </div>
                <div style={{ backgroundColor: '#020617', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '20px', borderRadius: '16px' }}>
                  <div style={{ fontSize: '11px', color: '#34d399', fontWeight: 700, textTransform: 'uppercase' }}>Climate Auditing</div>
                  <div style={{ fontSize: '28px', fontWeight 900, color: '#fff', fontFamily: 'monospace', margin: '8px 0' }}>₹5 <span style={{ fontSize: '12px', color: '#34d399' }}>/waybill</span></div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Quarterly carbon footprint verification</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Statistics Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '28px' }}>
          <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(51, 65, 85, 0.6)', borderRadius: '20px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700 }}>Consolidation Terminals</div>
              <div style={{ fontSize: '28px', fontWeight 900, color: '#fff', fontFamily: 'monospace', marginTop: '4px' }}>3 Primary</div>
            </div>
            <Building2 size={24} color="#22d3ee" />
          </div>
          <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(51, 65, 85, 0.6)', borderRadius: '20px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700 }}>District Logistics Hubs</div>
              <div style={{ fontSize: '28px', fontWeight 900, color: '#fff', fontFamily: 'monospace', marginTop: '4px' }}>175+</div>
            </div>
            <MapPin size={24} color="#34d399" />
          </div>
          <div style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(51, 65, 85, 0.6)', borderRadius: '20px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 700 }}>Express Collection Nodes</div>
              <div style={{ fontSize: '28px', fontWeight 900, color: '#fff', fontFamily: 'monospace', marginTop: '4px' }}>355+</div>
            </div>
            <PackageCheck size={24} color="#22d3ee" />
          </div>
        </div>

        {/* Footer */}
        <footer style={{ background: 'rgba(15, 23, 42, 0.75)', border: '1px solid rgba(51, 65, 85, 0.6)', borderRadius: '20px', padding: '24px', textAlign: 'center', fontSize: '12px', color: '#94a3b8' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '14px', fontWeight: 600 }}>
            <a href="tel:+918340085989" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Phone size={14} color="#22d3ee" /> +91 8340085989
            </a>
            <a href="mailto:tcc.cargodesk@gmail.com" style={{ color: '#cbd5e1', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={14} color="#22d3ee" /> tcc.cargodesk@gmail.com
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399' }}>
              <Award size={14} /> UDYAM-TS-02-0359997
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(51, 65, 85, 0.4)', paddingTop: '12px', color: '#64748b', fontSize: '11px' }}>
            Thunder Cargo Corridor (TCC) • South India B2B Last-Mile Logistics Infrastructure Framework
          </div>
        </footer>

      </div>
    </div>
  );
}
