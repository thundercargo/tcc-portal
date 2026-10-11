import React, { useState } from 'react';
import {
  Calculator,
  Zap,
  Leaf,
  ShieldCheck,
  Truck,
  MapPin,
  TrendingUp,
  Clock,
  Phone,
  Mail,
  Award,
  ChevronRight,
  Globe,
  Layers,
  BarChart3,
  CheckCircle2,
  PackageCheck,
  Building2,
  Sparkles
} from 'lucide-react';

// Master Tariff Slab Matrix Data (Dated 08-10-2026)
const TARIFF_MATRIX = {
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

export default function App() {
  const [weight, setWeight] = useState(100);
  const [corridor, setCorridor] = useState('intra-1');
  const [activeTab, setActiveTab] = useState('calculator');
  const [copied, setCopied] = useState(false);

  const selectedTariff = TARIFF_MATRIX[corridor] || TARIFF_MATRIX['intra-1'];

  const calculateRate = (w) => {
    if (!w || w <= 0) return 0;
    if (w <= 10) return selectedTariff.slabs[0];
    if (w <= 25) return selectedTariff.slabs[1];
    if (w <= 50) return selectedTariff.slabs[2];
    if (w <= 100) return selectedTariff.slabs[3];
    if (w <= 250) return selectedTariff.slabs[4];
    if (w <= 500) return selectedTariff.slabs[5];

    // Excess weight over 500 KG calculation
    const baseCost = selectedTariff.slabs[5];
    const excessWeight = w - 500;
    return baseCost + excessWeight * selectedTariff.excess;
  };

  const estimatedCost = calculateRate(weight);

  const getSlabLabel = (w) => {
    if (w <= 10) return '1 – 10 KG';
    if (w <= 25) return '11 – 25 KG';
    if (w <= 50) return '26 – 50 KG';
    if (w <= 100) return '51 – 100 KG';
    if (w <= 250) return '101 – 250 KG';
    if (w <= 500) return '251 – 500 KG';
    return `Excess >500 KG (+₹${selectedTariff.excess.toFixed(2)}/kg)`;
  };

  const handleShareQuote = () => {
    const text = `TCC B2B Freight Quote\nCorridor: ${selectedTariff.name}\nWeight: ${weight} KG\nEst. Tariff: ₹${estimatedCost.toLocaleString('en-IN')}\nSAC: 9965 RCM Compliant`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Background Cyber Ambient Lights */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-10" 
      />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">

        {}
        <header className="relative bg-slate-900/60 border border-slate-800/80 backdrop-blur-2xl rounded-3xl p-6 md:p-8 mb-8 shadow-2xl shadow-cyan-950/20 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  NATIONWIDE B2B LAST-MILE LOGISTICS
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                  UDYAM-TS-02-0359997
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white flex items-center gap-3">
                THUNDER CARGO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">CORRIDOR</span>
              </h1>
              <p className="text-slate-400 text-sm md:text-base mt-2 font-medium max-w-2xl">
                Enterprise Last-Mile Integration & Digital Terminal Dispatch Network
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 border-t lg:border-t-0 border-slate-800 pt-4 lg:pt-0">
              <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Live System Status</div>
              <div className="flex items-center gap-2 bg-slate-950/80 px-4 py-2 rounded-2xl border border-cyan-500/30 text-cyan-300 font-mono text-xs">
                <Globe className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
                <span>3 Primary Nodes • 175+ District Hubs</span>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">Master Tariff Schedule: 08-10-2026</div>
            </div>
          </div>
        </header>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="group relative bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-xl p-5 rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/15 transition-all" />
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Consolidation Terminals</div>
                <div className="text-3xl font-extrabold text-white mt-1 font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
                  3 <span className="text-cyan-400 text-lg">Primary</span>
                </div>
              </div>
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                <Building2 className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">Strategic high-capacity processing centers</p>
          </div>

          <div className="group relative bg-slate-900/50 border border-slate-800/90 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-xl p-5 rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/15 transition-all" />
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">District Logistics Hubs</div>
                <div className="text-3xl font-extrabold text-white mt-1 font-mono tracking-tight group-hover:text-emerald-400 transition-colors">
                  175<span className="text-emerald-400">+</span>
                </div>
              </div>
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">Authorized last-mile delivery touchpoints</p>
          </div>

          <div className="group relative bg-slate-900/50 border border-slate-800/90 hover:border-teal-500/50 transition-all duration-300 backdrop-blur-xl p-5 rounded-2xl overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl group-hover:bg-teal-500/15 transition-all" />
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Express Collection Nodes</div>
                <div className="text-3xl font-extrabold text-white mt-1 font-mono tracking-tight group-hover:text-teal-300 transition-colors">
                  355<span className="text-teal-300">+</span>
                </div>
              </div>
              <div className="p-3 bg-teal-500/10 rounded-xl border border-teal-500/20 text-teal-300">
                <PackageCheck className="w-6 h-6" />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2">Micro-fulfillment and merchant intake points</p>
          </div>
        </div>

        {}
        <div className="flex p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl mb-8 gap-2 overflow-x-auto backdrop-blur-xl">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap flex-1 justify-center ${
              activeTab === 'calculator'
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Master Tariff Engine</span>
          </button>

          <button
            onClick={() => setActiveTab('sla')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap flex-1 justify-center ${
              activeTab === 'sla'
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>90-Min Evacuation SLA</span>
          </button>

          <button
            onClick={() => setActiveTab('esg')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap flex-1 justify-center ${
              activeTab === 'esg'
                ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Leaf className="w-4 h-4" />
            <span>Voluntary ESG Pledge</span>
          </button>
        </div>

        {}
        <div className="bg-slate-900/40 border border-slate-800/90 rounded-3xl p-6 md:p-8 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          
          {/* TAB 1: MASTER TARIFF CALCULATOR */}
          {activeTab === 'calculator' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-cyan-400" />
                    Master B2B Freight Rate Engine
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    Instant contract quote calculation based on distance corridor & weight slab rules.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  SAC 9965 RCM Compliant
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Input Controls */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase tracking-wider text-cyan-400 font-bold flex items-center justify-between">
                      <span>Corridor / Route Matrix</span>
                      <span className="text-slate-500 text-[11px] font-normal">Select applicable distance range</span>
                    </label>
                    <div className="relative">
                      <select
                        value={corridor}
                        onChange={(e) => setCorridor(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 hover:border-cyan-500/50 focus:border-cyan-500 rounded-2xl px-5 py-4 text-white font-medium text-sm focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        {Object.entries(TARIFF_MATRIX).map(([key, item]) => (
                          <option key={key} value={key} className="bg-slate-900 text-white py-2">
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="block text-xs uppercase tracking-wider text-cyan-400 font-bold">
                        Consignment Gross Weight (KG)
                      </label>
                      <span className="text-xs text-slate-400 font-mono">Min 1 KG</span>
                    </div>
                    
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        max="10000"
                        value={weight}
                        onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                        className="w-full bg-slate-950 border border-slate-800 hover:border-cyan-500/50 focus:border-cyan-500 rounded-2xl px-5 py-4 text-white font-mono text-xl focus:outline-none transition-all"
                        placeholder="Enter weight in kg..."
                      />
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                        KG
                      </span>
                    </div>

                    {/* Quick Preset Buttons */}
                    <div className="flex gap-2 pt-2 overflow-x-auto">
                      {[10, 25, 50, 100, 250, 500, 750].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setWeight(preset)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                            weight === preset
                              ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {preset}kg
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 space-y-2">
                    <div className="flex items-center gap-2 font-semibold text-slate-300">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      Dynamic Weight Slab Rules
                    </div>
                    <p className="leading-relaxed">
                      Slabs covered: 1-10kg, 11-25kg, 26-50kg, 51-100kg, 101-250kg, 251-500kg.
                      Consignments exceeding 500kg are billed at the 500kg base slab rate plus an incremental per-kg surcharge (₹{selectedTariff.excess.toFixed(2)}/kg for {selectedTariff.name}).
                    </p>
                  </div>
                </div>

                {/* Tariff Display Card */}
                <div className="lg:col-span-5">
                  <div className="relative bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/30 rounded-3xl p-6 md:p-8 shadow-2xl shadow-cyan-950/40 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                      Exact Tariff Quote
                    </div>
                    
                    <div className="my-4">
                      <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 font-mono tracking-tight">
                        ₹{estimatedCost.toLocaleString('en-IN')}
                      </div>
                      <div className="text-xs text-emerald-400 flex items-center gap-1.5 mt-2 font-semibold">
                        <CheckCircle2 className="w-4 h-4" />
                        Guaranteed Commercial Rate (All Inclusive)
                      </div>
                    </div>

                    <div className="space-y-3 border-t border-slate-800/80 pt-5 my-5 text-xs">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Selected Corridor:</span>
                        <span className="font-semibold text-white text-right max-w-[200px]">
                          {selectedTariff.name}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Weight Bracket:</span>
                        <span className="font-mono text-cyan-300 font-bold">
                          {getSlabLabel(weight)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Excess Tariff Rate:</span>
                        <span className="font-mono text-slate-300">
                          ₹{selectedTariff.excess.toFixed(2)} / excess kg
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={handleShareQuote}
                      className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all flex items-center justify-center gap-2"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Quote Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Layers className="w-4 h-4 text-cyan-400" />
                          <span>Copy Quote Summary</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 90-MIN EVACUATION SLA */}
          {activeTab === 'sla' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="border-b border-slate-800/80 pb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  Terminal Evacuation & SLA Telemetry
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Automated dispatch protocol guaranteeing swift clearance across all 175+ hubs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Average Clear Time</div>
                  <div className="text-4xl font-black text-emerald-400 font-mono my-2">42 Mins</div>
                  <div className="text-xs text-slate-500">Guaranteed SLA Target: Under 90 Mins</div>
                  <div className="w-full bg-slate-900 h-2 rounded-full mt-4 overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[46%]" />
                  </div>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Dwell Reduction</div>
                  <div className="text-4xl font-black text-cyan-400 font-mono my-2">-78%</div>
                  <div className="text-xs text-slate-500">Versus conventional legacy freight handling</div>
                  <div className="w-full bg-slate-900 h-2 rounded-full mt-4 overflow-hidden">
                    <div className="bg-cyan-400 h-full w-[78%]" />
                  </div>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl relative overflow-hidden">
                  <div className="text-xs text-slate-400 uppercase font-bold tracking-wider">Demurrage Risk</div>
                  <div className="text-4xl font-black text-teal-300 font-mono my-2">0.00%</div>
                  <div className="text-xs text-slate-500">Zero wharfage accumulation recorded</div>
                  <div className="w-full bg-slate-900 h-2 rounded-full mt-4 overflow-hidden">
                    <div className="bg-teal-300 h-full w-[100%]" />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-800/40 flex items-start gap-4">
                <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Digital Manifesting Protocol</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    All consignment notes generated under TCC master tariffs feature real-time digital pre-manifesting. Packages are assigned priority dispatch lanes immediately upon arrival at any primary consolidation node.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: VOLUNTARY ESG PLEDGE */}
          {activeTab === 'esg' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="border-b border-slate-800/80 pb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Leaf className="w-6 h-6 text-emerald-400" />
                  ESG & Green Last-Mile Pledge
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Voluntary sustainability contributions built into TCC's commercial framework (₹20 per consignment note).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Hub Welfare Fund</div>
                  <div className="text-3xl font-black text-white font-mono my-2">₹10 <span className="text-xs text-slate-500 font-normal">/ consignment</span></div>
                  <p className="text-xs text-slate-400">Directly funds ground crew amenities and safety gear across hubs.</p>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Urban Afforestation</div>
                  <div className="text-3xl font-black text-white font-mono my-2">₹5 <span className="text-xs text-slate-500 font-normal">/ consignment</span></div>
                  <p className="text-xs text-slate-400">Supports green belt creation around high-density transit corridors.</p>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Climate Auditing</div>
                  <div className="text-3xl font-black text-white font-mono my-2">₹5 <span className="text-xs text-slate-500 font-normal">/ consignment</span></div>
                  <p className="text-xs text-slate-400">Covers carbon footprint auditing and third-party green verification.</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {}
        <footer className="mt-12 bg-slate-900/60 border border-slate-800/80 backdrop-blur-2xl rounded-3xl p-6 md:p-8 text-center text-xs text-slate-400 space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-6 font-medium text-slate-300">
            <a href="tel:+918340085989" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+91 8340085989</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <a href="mailto:tcc.cargodesk@gmail.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>tcc.cargodesk@gmail.com</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2 text-slate-400">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>MSME Registered: UDYAM-TS-02-0359997</span>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/60 text-slate-500 text-[11px]">
            Thunder Cargo Corridor (TCC) • Enterprise Last-Mile Logistics Infrastructure Framework
          </div>
        </footer>

      </div>
    </div>
  );
}
