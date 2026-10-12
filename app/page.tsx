```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thunder Cargo Corridor (TCC) | Enterprise Last-Mile Logistics Infrastructure Framework</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>

  <style>
    :root {
      --bg-dark: #050810;
      --card-bg: rgba(13, 20, 36, 0.78);
      --card-border: rgba(30, 58, 138, 0.4);
      --accent-cyan: #06b6d4;
      --accent-teal: #14b8a6;
      --accent-amber: #f59e0b;
      --accent-green: #10b981;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --font-main: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-main);
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    }

    /* Falling Crystal Droplet Canvas */
    #droplet-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      opacity: 0.75;
    }

    .content-wrapper {
      position: relative;
      z-index: 10;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px 16px 60px;
    }

    .glass-panel {
      background: var(--card-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--card-border);
      border-radius: 18px;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Custom range slider */
    input[type=range] {
      -webkit-appearance: none;
      width: 100%;
      background: transparent;
    }
    input[type=range]:focus {
      outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
      width: 100%;
      height: 6px;
      cursor: pointer;
      background: rgba(30, 58, 138, 0.5);
      border-radius: 3px;
      border: 1px solid rgba(6, 182, 212, 0.3);
    }
    input[type=range]::-webkit-slider-thumb {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: var(--accent-cyan);
      box-shadow: 0 0 10px var(--accent-cyan);
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -7px;
    }

    .service-card {
      background: rgba(13, 22, 42, 0.65);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 18px 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .service-card:hover {
      border-color: rgba(6, 182, 212, 0.5);
      transform: translateY(-2px);
    }
    .service-card.active-24h {
      border-color: var(--accent-cyan);
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(13, 22, 42, 0.85));
      box-shadow: 0 0 25px rgba(6, 182, 212, 0.25);
    }
    .service-card.active-12h {
      border-color: var(--accent-amber);
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(13, 22, 42, 0.85));
      box-shadow: 0 0 25px rgba(245, 158, 11, 0.25);
    }

    .pulse-dot {
      width: 8px;
      height: 8px;
      background-color: var(--accent-green);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--accent-green);
      animation: pulse 1.8s infinite;
    }
    @keyframes pulse {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
      70% { transform: scale(1.1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(5, 8, 16, 0.8);
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(6, 182, 212, 0.3);
      border-radius: 4px;
    }
  </style>
</head>
<body>

  <!-- Interactive Falling Crystal Droplets Canvas Background -->
  <canvas id="droplet-canvas"></canvas>

  <div class="content-wrapper">

    <!-- TOP HEADER SECTION -->
    <header class="glass-panel p-6 mb-6">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <span class="pulse-dot"></span> NATIONWIDE B2B LAST-MILE LOGISTICS
          </span>
          <span class="bg-blue-950/60 border border-blue-500/40 text-blue-300 text-xs font-bold px-3 py-1 rounded-full tracking-wider">
            UDYAM-TS-02-0359997
          </span>
        </div>
        <!-- Live Ticking Clock Pill -->
        <div class="bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono font-bold text-xs px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-emerald-950/50">
          <svg class="w-3.5 h-3.5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span id="live-ist-clock">IST --:--:-- --</span>
        </div>
      </div>

      <div class="mb-4">
        <h1 class="text-3xl md:text-5xl font-black tracking-tight text-white mb-2 uppercase">
          THUNDER CARGO <span class="text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">CORRIDOR</span>
        </h1>
        <p class="text-slate-400 text-sm md:text-base font-medium">
          Enterprise Last-Mile Integration & Digital Terminal Dispatch Network (Secunderabad SCR Division)
        </p>
      </div>

      <!-- Live System Status Bar -->
      <div class="bg-slate-900/80 border border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
        <div class="flex items-center gap-2">
          <span class="text-cyan-400 font-bold">LIVE SYSTEM STATUS:</span>
          <span class="bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">3 Primary Nodes</span>
          <span class="text-slate-500">•</span>
          <span class="text-slate-300">175+ District Hubs</span>
        </div>
        <div>
          Master Tariff Schedule Status: <span class="text-emerald-400 font-bold">Verified 08-10-2026</span>
        </div>
      </div>
    </header>

    <!-- NETWORK STAT CARDS -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="glass-panel p-5 flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7m4 0v10"></path></svg>
        </div>
        <div>
          <div class="text-slate-400 text-xs font-bold uppercase tracking-wider">CONSOLIDATION TERMINALS</div>
          <div class="text-2xl font-black text-white font-mono">3 <span class="text-cyan-400 text-base font-sans">Primary</span></div>
          <div class="text-slate-500 text-xs">Strategic high-capacity SCR processing centers</div>
        </div>
      </div>

      <div class="glass-panel p-5 flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </div>
        <div>
          <div class="text-slate-400 text-xs font-bold uppercase tracking-wider">DISTRICT LOGISTICS HUBS</div>
          <div class="text-2xl font-black text-white font-mono">175<span class="text-emerald-400">+</span></div>
          <div class="text-slate-500 text-xs">Authorized last-mile delivery touchpoints</div>
        </div>
      </div>

      <div class="glass-panel p-5 flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-teal-950/80 border border-teal-500/40 flex items-center justify-center text-teal-400">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
        </div>
        <div>
          <div class="text-slate-400 text-xs font-bold uppercase tracking-wider">EXPRESS COLLECTION NODES</div>
          <div class="text-2xl font-black text-white font-mono">355<span class="text-teal-400">+</span></div>
          <div class="text-slate-500 text-xs">Micro-fulfillment and merchant intake points</div>
        </div>
      </div>
    </div>

    <!-- DUAL SERVICE SELECTION SUBHEADS (24H SAME DAY vs 12H THUNDER SERVICE) -->
    <div class="mb-6">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-xs font-bold text-cyan-400 uppercase tracking-widest">SELECT DISPATCH SERVICE ENGINE</h2>
        <span class="text-xs text-slate-400">Click card to switch SLA mode</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- SUBHEAD 1: 24H SAME-DAY EXPRESS -->
        <div id="card-24h" class="service-card active-24h" onclick="switchServiceMode('24H')">
          <div class="flex items-center justify-between mb-2">
            <span class="text-lg font-extrabold text-white">24H SAME-DAY EXPRESS</span>
            <span class="bg-cyan-950 text-cyan-400 border border-cyan-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">STANDARD B2B RATE</span>
          </div>
          <p class="text-slate-300 font-semibold text-xs mb-2">"4-Hour Local SLA & 24-Hour Regional Terminal Evacuation"</p>
          <div class="text-slate-400 text-xs leading-relaxed">
            Standard baseline tariff structured for daily commercial freight, batch intra-city transfers, and scheduled corridor dispatches.
          </div>
        </div>

        <!-- SUBHEAD 2: ⚡ 12H THUNDER SERVICE -->
        <div id="card-12h" class="service-card" onclick="switchServiceMode('12H')">
          <div class="flex items-center justify-between mb-2">
            <span class="text-lg font-extrabold text-amber-400 flex items-center gap-1.5">
              <span>⚡</span> 12H THUNDER SERVICE
            </span>
            <span class="bg-amber-950 text-amber-400 border border-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">+25% VELOCITY PREMIUM</span>
          </div>
          <p class="text-amber-200/90 font-semibold text-xs mb-2">"Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn"</p>
          <div class="text-slate-400 text-xs leading-relaxed">
            Direct express bus/rail dock priority clearance. Guaranteed 12-hour turnaround time across all regional nodes avoiding plant downtime.
          </div>
        </div>
      </div>
    </div>

    <!-- SLA BANNER WITH MOTTO LINES -->
    <div class="glass-panel p-4 mb-6 border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900/80 to-indigo-950/40 flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
        <div class="text-xs md:text-sm font-bold text-white tracking-wide" id="motto-banner-text">
          🟢 <span class="text-cyan-400">ACTIVE SLA:</span> 4-HOUR INTRA-CITY CLEARANCE | GUARANTEED 24-HR REGIONAL DISPATCH
        </div>
      </div>
      <button onclick="openTariffModal()" class="bg-cyan-900/60 hover:bg-cyan-800/80 text-cyan-300 border border-cyan-500/40 text-xs font-bold px-4 py-2 rounded-xl transition flex items-center gap-1.5">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        VIEW FULL TARIFF MATRIX
      </button>
    </div>

    <!-- NAVIGATION PILLS -->
    <div class="flex flex-wrap items-center gap-2 mb-6">
      <button class="bg-cyan-500 text-slate-950 font-extrabold text-xs px-4 py-2 rounded-xl shadow-lg shadow-cyan-500/20 flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
        Master Tariff Engine
      </button>
      <div class="bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2">
        <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        90-Min Evacuation SLA
      </div>
      <div class="bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        Voluntary ESG Pledge
      </div>
    </div>

    <!-- MASTER B2B FREIGHT RATE ENGINE -->
    <div class="glass-panel p-6 mb-8">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <h2 class="text-xl font-bold text-white flex items-center gap-2">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"></path></svg>
            Master B2B Freight Rate Engine
          </h2>
          <p class="text-xs text-slate-400 mt-1">Instant contract quote calculation based on distance corridor & weight slab rules.</p>
        </div>
        <span class="bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
          SAC 9965 RCM Compliant
        </span>
      </div>

      <!-- Corridor Dropdown -->
      <div class="mb-5">
        <label class="block text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">CORRIDOR / ROUTE MATRIX</label>
        <select id="corridor-select" onchange="recalculateQuote()" class="w-full bg-slate-950 border border-slate-700 text-white font-medium rounded-xl p-3.5 focus:border-cyan-500 focus:outline-none transition">
          <option value="INTRA_1">INTRA-CITY 1 (4 – 5 KM)</option>
          <option value="INTRA_2">INTRA-CITY 2 (6 – 15 KM)</option>
          <option value="INTRA_3">INTRA-CITY 3 (16 – 30 KM)</option>
          <option value="REG_1A">REGIONAL 1A (31 – 50 KM)</option>
          <option value="REG_1B">REGIONAL 1B (51 – 100 KM)</option>
          <option value="REG_2A" selected>REGIONAL 2A (101 – 150 KM)</option>
          <option value="REG_2B">REGIONAL 2B (151 – 200 KM)</option>
          <option value="REG_3A">REGIONAL 3A (201 – 250 KM)</option>
          <option value="REG_3B">REGIONAL 3B (251 – 300 KM)</option>
          <option value="REG_4A">REGIONAL 4A (301 – 350 KM)</option>
          <option value="REG_4B">REGIONAL 4B (351 – 400 KM)</option>
          <option value="REG_5A">REGIONAL 5A (401 – 450 KM)</option>
          <option value="REG_5B">REGIONAL 5B (451 – 500 KM)</option>
          <option value="REG_6A">REGIONAL 6A (501 – 550 KM)</option>
          <option value="REG_6B">REGIONAL 6B (551 – 600 KM)</option>
        </select>
      </div>

      <!-- Weight Inputs & Slider -->
      <div class="mb-5">
        <div class="flex items-center justify-between mb-2">
          <label class="text-xs font-bold text-cyan-400 uppercase tracking-wider">CONSIGNMENT GROSS WEIGHT (KG)</label>
          <span class="text-xs text-slate-500 font-mono">Min 1 KG</span>
        </div>
        <div class="relative mb-3">
          <input type="number" id="weight-input" value="100" min="1" max="10000" oninput="syncSliderFromInput(); recalculateQuote();" class="w-full bg-slate-950 border border-slate-700 text-white font-mono font-bold text-xl rounded-xl p-3.5 pr-14 focus:border-cyan-500 focus:outline-none transition">
          <span class="absolute right-4 top-4 text-slate-400 font-mono font-bold text-sm">KG</span>
        </div>

        <!-- Slider -->
        <input type="range" id="weight-slider" min="1" max="750" value="100" oninput="syncInputFromSlider(); recalculateQuote();" class="mb-3">

        <!-- Weight Quick Presets -->
        <div class="flex flex-wrap gap-2">
          <button onclick="setWeightPreset(10)" class="preset-btn bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 font-mono text-xs px-3 py-1.5 rounded-lg transition">10kg</button>
          <button onclick="setWeightPreset(25)" class="preset-btn bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 font-mono text-xs px-3 py-1.5 rounded-lg transition">25kg</button>
          <button onclick="setWeightPreset(50)" class="preset-btn bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 font-mono text-xs px-3 py-1.5 rounded-lg transition">50kg</button>
          <button onclick="setWeightPreset(100)" class="preset-btn bg-cyan-950 border border-cyan-500 text-cyan-300 font-mono text-xs px-3 py-1.5 rounded-lg transition">100kg</button>
          <button onclick="setWeightPreset(250)" class="preset-btn bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 font-mono text-xs px-3 py-1.5 rounded-lg transition">250kg</button>
          <button onclick="setWeightPreset(500)" class="preset-btn bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 font-mono text-xs px-3 py-1.5 rounded-lg transition">500kg</button>
          <button onclick="setWeightPreset(750)" class="preset-btn bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500 font-mono text-xs px-3 py-1.5 rounded-lg transition">750kg</button>
        </div>
      </div>

      <!-- Dynamic Weight Slab Rules Description Box -->
      <div class="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5 mb-6 text-xs text-slate-400">
        <div class="flex items-center gap-2 text-cyan-400 font-bold mb-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Dynamic Weight Slab Rules
        </div>
        <p id="slab-rule-description">
          Slabs covered: 1-10kg, 11-25kg, 26-50kg, 51-100kg, 101-250kg, 251-500kg. Consignments exceeding 500kg are billed at the 500kg base slab rate plus an incremental per-kg surcharge based on corridor rules.
        </p>
      </div>

      <!-- EXACT TARIFF QUOTE BOX -->
      <div id="quote-display-card" class="glass-panel p-6 border-cyan-500/50 bg-gradient-to-b from-slate-900/90 to-slate-950/95 relative overflow-hidden">
        <div class="text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-1" id="quote-card-header">
          EXACT TARIFF QUOTE (24H BASELINE RATE)
        </div>

        <div class="flex flex-wrap items-baseline gap-3 mb-2">
          <span class="text-4xl md:text-5xl font-black text-white font-mono" id="final-price-text">₹980</span>
          <span class="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded-md flex items-center gap-1" id="quote-status-badge">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Guaranteed Commercial Rate (All Inclusive)
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 mt-2 border-t border-slate-800 text-xs">
          <div>
            <span class="text-slate-500 block">Selected Corridor:</span>
            <span class="text-white font-bold" id="quote-corridor-name">REGIONAL 2A (101 – 150 KM)</span>
          </div>
          <div>
            <span class="text-slate-500 block">Weight Bracket:</span>
            <span class="text-cyan-400 font-mono font-bold" id="quote-weight-bracket">51 – 100 KG</span>
          </div>
          <div>
            <span class="text-slate-500 block">Excess Tariff Rate:</span>
            <span class="text-slate-300 font-mono font-bold" id="quote-excess-rate">₹6.00 / excess kg</span>
          </div>
        </div>

        <button onclick="copyQuoteSummary()" class="w-full mt-5 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-cyan-950 hover:to-slate-900 border border-cyan-500/40 text-cyan-300 font-bold text-xs uppercase py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-lg">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
          COPY QUOTE SUMMARY
        </button>
      </div>
    </div>

    <!-- CORPORATE PROFILE & FLEET VANGUARD SECTION -->
    <div class="glass-panel p-6 mb-8">
      <div class="mb-5 pb-3 border-b border-slate-800">
        <h3 class="text-lg font-bold text-white flex items-center gap-2">
          <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7m4 0v10"></path></svg>
          Corporate Profile & Fleet Vanguard
        </h3>
        <p class="text-xs text-slate-400 mt-0.5">High Command Strategic Operations & Secunderabad SCR Division Logistics Infrastructure</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Card 1: Strategic Guardianship -->
        <div class="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-bold">
              🏛️
            </div>
            <div>
              <h4 class="text-sm font-bold text-white">Strategic Terminal Guardianship</h4>
              <span class="text-[10px] text-cyan-400 font-mono">Secunderabad SCR Division</span>
            </div>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed mb-3">
            Operating under the High Command Strategic Operations Division, Thunder Cargo Corridor (TCC) acts as an enterprise digital interface for last-mile terminal evacuation across South Central Railway (SCR) networks.
          </p>
          <div class="flex flex-wrap gap-2 text-[11px] font-mono">
            <span class="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded">2-Hour Evacuation SLA</span>
            <span class="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded">SAC 9965 Compliant</span>
          </div>
        </div>

        <!-- Card 2: Charminar Fleet Vanguard -->
        <div class="bg-slate-950/60 border border-slate-800 rounded-xl p-5">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 rounded-lg bg-amber-950 border border-amber-800 flex items-center justify-center text-amber-400 font-bold">
              ⚡
            </div>
            <div>
              <h4 class="text-sm font-bold text-white">The Charminar Fleet Vanguard</h4>
              <span class="text-[10px] text-amber-400 font-mono">Old City Last-Mile Drivers Network</span>
            </div>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed mb-3">
            Integrating Old City Hyderabad's veteran auto-rickshaw drivers and delivery fleet operators into a modernized digital dispatch network, TCC delivers unmatched 2-hour intra-city penetration up to a 30 KM radius.
          </p>
          <div class="flex flex-wrap gap-2 text-[11px] font-mono">
            <span class="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded">355+ Collection Touchpoints</span>
            <span class="bg-slate-900 border border-slate-800 text-slate-300 px-2 py-1 rounded">Hyper-Local Intra-City</span>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="glass-panel p-5 text-center text-xs text-slate-400">
      <div class="flex flex-wrap items-center justify-center gap-6 mb-3 font-mono">
        <a href="tel:+918340085989" class="hover:text-cyan-400 transition flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          +91 8340085989
        </a>
        <span>•</span>
        <a href="mailto:tcc.cargodesk@gmail.com" class="hover:text-cyan-400 transition flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          tcc.cargodesk@gmail.com
        </a>
        <span>•</span>
        <span class="text-amber-400 font-bold">MSME Registered: UDYAM-TS-02-0359997</span>
      </div>
      <p class="text-slate-500">Thunder Cargo Corridor (TCC) • Enterprise Last-Mile Logistics Infrastructure Framework</p>
    </footer>

  </div>

  <!-- FULL MASTER TARIFF MATRIX MODAL -->
  <div id="tariff-modal" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md hidden items-center justify-center p-4">
    <div class="bg-slate-950 border border-cyan-500/40 rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
      
      <!-- Modal Header -->
      <div class="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
        <div>
          <h3 class="text-lg font-bold text-white">MASTER B2B TARIFF MATRIX SCHEDULE</h3>
          <p class="text-xs text-slate-400">Comparing 24H Baseline Rates vs 12H Thunder Velocity Surcharge (+25%)</p>
        </div>
        <button onclick="closeTariffModal()" class="text-slate-400 hover:text-white text-2xl font-bold px-2">✕</button>
      </div>

      <!-- Modal Body (Table) -->
      <div class="p-5 overflow-y-auto custom-scrollbar flex-1">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="border-b border-slate-800 bg-slate-900/60 text-cyan-400 font-mono">
              <th class="p-3">Corridor Matrix</th>
              <th class="p-3">51-100 kg (24H)</th>
              <th class="p-3">51-100 kg (12H Thunder)</th>
              <th class="p-3">101-250 kg (24H)</th>
              <th class="p-3">101-250 kg (12H Thunder)</th>
              <th class="p-3">Excess / kg</th>
            </tr>
          </thead>
          <tbody id="modal-matrix-body" class="divide-y divide-slate-800/60 font-mono text-slate-300">
            <!-- Populated via Javascript -->
          </tbody>
        </table>
      </div>

      <!-- Modal Footer -->
      <div class="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between text-xs text-slate-400">
        <span>Verified Master Schedule: 08-10-2026</span>
        <button onclick="closeTariffModal()" class="bg-cyan-500 text-slate-950 font-bold px-4 py-2 rounded-lg hover:bg-cyan-400 transition">
          Close Matrix
        </button>
      </div>
    </div>
  </div>

  <!-- SCRIPT LOGIC -->
  <script>
    // Master Tariff Dataset (Verified Master Card 08-10-2026)
    const TARIFF_DATA = {
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

    let activeServiceMode = '24H'; // '24H' or '12H'

    // Live Ticking Clock (IST)
    function updateClock() {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      document.getElementById('live-ist-clock').innerText = 'IST ' + now.toLocaleTimeString('en-US', options);
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Service Mode Switcher
    function switchServiceMode(mode) {
      activeServiceMode = mode;
      const card24 = document.getElementById('card-24h');
      const card12 = document.getElementById('card-12h');
      const bannerText = document.getElementById('motto-banner-text');

      if (mode === '24H') {
        card24.className = 'service-card active-24h';
        card12.className = 'service-card';
        bannerText.innerHTML = '🟢 <span class="text-cyan-400">ACTIVE SLA:</span> 4-HOUR INTRA-CITY CLEARANCE | GUARANTEED 24-HR REGIONAL DISPATCH';
      } else {
        card24.className = 'service-card';
        card12.className = 'service-card active-12h';
        bannerText.innerHTML = '⚡ <span class="text-amber-400">THUNDER SLA:</span> LOADED AT DAWN, LANDED BY DUSK • SHIPPED BY DUSK, DELIVERED BY DAWN';
      }
      recalculateQuote();
    }

    // Weight Inputs Sync
    function syncSliderFromInput() {
      document.getElementById('weight-slider').value = document.getElementById('weight-input').value;
    }
    function syncInputFromSlider() {
      document.getElementById('weight-input').value = document.getElementById('weight-slider').value;
    }
    function setWeightPreset(weight) {
      document.getElementById('weight-input').value = weight;
      document.getElementById('weight-slider').value = weight;
      recalculateQuote();
    }

    // Main Calculator Function
    function recalculateQuote() {
      const key = document.getElementById('corridor-select').value;
      const weight = parseFloat(document.getElementById('weight-input').value) || 1;
      const data = TARIFF_DATA[key];

      let basePrice = 0;
      let weightBracket = '';

      if (weight <= 10) { basePrice = data.base[0]; weightBracket = '1 – 10 KG'; }
      else if (weight <= 25) { basePrice = data.base[1]; weightBracket = '11 – 25 KG'; }
      else if (weight <= 50) { basePrice = data.base[2]; weightBracket = '26 – 50 KG'; }
      else if (weight <= 100) { basePrice = data.base[3]; weightBracket = '51 – 100 KG'; }
      else if (weight <= 250) { basePrice = data.base[4]; weightBracket = '101 – 250 KG'; }
      else if (weight <= 500) { basePrice = data.base[5]; weightBracket = '251 – 500 KG'; }
      else {
        const excessWeight = weight - 500;
        basePrice = data.base[5] + (excessWeight * data.excess);
        weightBracket = 'EXCESS > 500 KG';
      }

      let finalPrice = basePrice;
      const cardHeader = document.getElementById('quote-card-header');
      const statusBadge = document.getElementById('quote-status-badge');

      if (activeServiceMode === '12H') {
        finalPrice = Math.round(basePrice * 1.25); // +25% Thunder Velocity Surcharge
        cardHeader.innerText = '⚡ EXACT TARIFF QUOTE (12H THUNDER ULTRA-EXPRESS +25%)';
        cardHeader.className = 'text-[11px] font-bold text-amber-400 uppercase tracking-widest mb-1';
        statusBadge.className = 'text-xs font-bold text-amber-400 bg-amber-950/80 border border-amber-800 px-2.5 py-1 rounded-md flex items-center gap-1';
        statusBadge.innerHTML = '⚡ 12-HR Guaranteed Direct Terminal Evacuation (+25%)';
      } else {
        cardHeader.innerText = 'EXACT TARIFF QUOTE (24H BASELINE RATE)';
        cardHeader.className = 'text-[11px] font-bold text-cyan-400 uppercase tracking-widest mb-1';
        statusBadge.className = 'text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded-md flex items-center gap-1';
        statusBadge.innerHTML = '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Guaranteed Commercial Rate (All Inclusive)';
      }

      document.getElementById('final-price-text').innerText = '₹' + finalPrice.toLocaleString('en-IN');
      document.getElementById('quote-corridor-name').innerText = data.name;
      document.getElementById('quote-weight-bracket').innerText = weightBracket;
      document.getElementById('quote-excess-rate').innerText = '₹' + data.excess.toFixed(2) + ' / excess kg';

      // Update slab description text dynamically
      document.getElementById('slab-rule-description').innerText = 
        `Slabs covered: 1-10kg, 11-25kg, 26-50kg, 51-100kg, 101-250kg, 251-500kg. Consignments exceeding 500kg are billed at the 500kg base rate plus an incremental per-kg surcharge (₹${data.excess.toFixed(2)}/kg) for ${data.name}.`;
    }

    function copyQuoteSummary() {
      const price = document.getElementById('final-price-text').innerText;
      const corridor = document.getElementById('quote-corridor-name').innerText;
      const bracket = document.getElementById('quote-weight-bracket').innerText;
      const mode = activeServiceMode === '12H' ? '12H Thunder Ultra-Express (+25%)' : '24H Same-Day Express';

      const summary = `[THUNDER CARGO CORRIDOR DISPATCH QUOTE]\nMode: ${mode}\nCorridor: ${corridor}\nWeight Bracket: ${bracket}\nTotal Quote: ${price}\nSLA Commitment: Guaranteed Terminal Clearance (SAC 9965 Compliant)`;

      navigator.clipboard.writeText(summary);
      alert('Official Dispatch Quote Summary copied to clipboard!');
    }

    // Modal Matrix Population
    function openTariffModal() {
      const tbody = document.getElementById('modal-matrix-body');
      tbody.innerHTML = '';

      for (let k in TARIFF_DATA) {
        const item = TARIFF_DATA[k];
        const base100 = item.base[3];
        const thunder100 = Math.round(base100 * 1.25);
        const base250 = item.base[4];
        const thunder250 = Math.round(base250 * 1.25);

        tbody.innerHTML += `
          <tr class="hover:bg-slate-900/40 transition">
            <td class="p-3 text-white font-bold">${item.name}</td>
            <td class="p-3">₹${base100}</td>
            <td class="p-3 text-amber-400 font-bold">₹${thunder100}</td>
            <td class="p-3">₹${base250}</td>
            <td class="p-3 text-amber-400 font-bold">₹${thunder250}</td>
            <td class="p-3 text-slate-400">₹${item.excess.toFixed(2)}</td>
          </tr>
        `;
      }
      document.getElementById('tariff-modal').classList.remove('hidden');
      document.getElementById('tariff-modal').classList.add('flex');
    }

    function closeTariffModal() {
      document.getElementById('tariff-modal').classList.add('hidden');
      document.getElementById('tariff-modal').classList.remove('flex');
    }

    // INTERACTIVE FALLING CRYSTAL DROPLETS / METEOR RAIN CANVAS
    const canvas = document.getElementById('droplet-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const droplets = [];
    const dropletCount = 65;

    for (let i = 0; i < dropletCount; i++) {
      droplets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 40 + 15,
        speed: Math.random() * 4 + 1.5,
        opacity: Math.random() * 0.7 + 0.2,
        width: Math.random() * 1.8 + 0.8
      });
    }

    function animateDroplets() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      droplets.forEach(d => {
        const grad = ctx.createLinearGradient(d.x, d.y, d.x, d.y + d.length);
        grad.addColorStop(0, 'rgba(6, 182, 212, 0)');
        grad.addColorStop(0.7, `rgba(6, 182, 212, ${d.opacity})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${d.opacity + 0.2})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = d.width;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.length);
        ctx.stroke();

        // Glowing crystal tip
        ctx.fillStyle = `rgba(255, 255, 255, ${d.opacity})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y + d.length, d.width, 0, Math.PI * 2);
        ctx.fill();

        d.y += d.speed;
        if (d.y > canvas.height) {
          d.y = -d.length;
          d.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animateDroplets);
    }
    animateDroplets();

    // Initial Trigger
    recalculateQuote();
  </script>
</body>
</html>
```
