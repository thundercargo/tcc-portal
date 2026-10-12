<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thunder Cargo Corridor (TCC) | Master B2B Freight Portal</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-dark: #080b12;
      --card-bg: rgba(15, 23, 42, 0.75);
      --card-border: rgba(30, 58, 138, 0.35);
      --card-border-glow: rgba(6, 182, 212, 0.5);
      --accent-cyan: #06b6d4;
      --accent-teal: #14b8a6;
      --accent-amber: #f59e0b;
      --accent-green: #10b981;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
      --font-main: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-main);
      min-height: 100vh;
      overflow-x: hidden;
      position: relative;
    }

    /* Falling Rain / Light Beam Canvas */
    #particle-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      opacity: 0.6;
    }

    .app-container {
      position: relative;
      z-index: 1;
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 16px 60px;
    }

    /* Glass Container Styling */
    .glass-card {
      background: var(--card-bg);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      padding: 24px;
      margin-bottom: 24px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }

    /* Header Section */
    .header-pill-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
      margin-bottom: 16px;
    }
    .badge-pill {
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.3);
      color: var(--accent-cyan);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.5px;
      padding: 6px 14px;
      border-radius: 20px;
      text-transform: uppercase;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .badge-pill.amber {
      background: rgba(245, 158, 11, 0.1);
      border-color: rgba(245, 158, 11, 0.3);
      color: var(--accent-amber);
    }
    .badge-pill.clock {
      background: rgba(16, 185, 129, 0.1);
      border-color: rgba(16, 185, 129, 0.3);
      color: var(--accent-green);
      font-family: var(--font-mono);
      font-size: 13px;
      margin-left: auto;
    }

    .main-title {
      font-size: 32px;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #ffffff;
      margin-bottom: 6px;
    }
    .main-title span { color: var(--accent-cyan); }
    .subtitle { color: var(--text-muted); font-size: 14px; margin-bottom: 20px; }

    /* Live SLA Banner */
    .sla-banner {
      background: linear-gradient(90deg, rgba(6, 182, 212, 0.15), rgba(20, 184, 166, 0.05));
      border: 1px solid var(--accent-cyan);
      border-radius: 12px;
      padding: 12px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 24px;
    }
    .sla-banner-text { font-size: 13px; font-weight: 600; color: #fff; }
    .sla-banner-text strong { color: var(--accent-amber); }

    /* Network Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }
    @media (max-width: 768px) { .stats-grid { grid-template-columns: 1fr; } }
    .stat-card {
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      padding: 16px;
    }
    .stat-num { font-size: 26px; font-weight: 800; color: #fff; font-family: var(--font-mono); }
    .stat-num span { color: var(--accent-cyan); }
    .stat-label { font-size: 12px; font-weight: 700; color: var(--text-muted); margin-top: 4px; }
    .stat-desc { font-size: 11px; color: var(--text-dim); margin-top: 2px; }

    /* Dual Engine Mode Cards (Option 2) */
    .mode-selector-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
    @media (max-width: 640px) { .mode-selector-grid { grid-template-columns: 1fr; } }
    .mode-card {
      background: rgba(15, 23, 42, 0.8);
      border: 2px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
      padding: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
    }
    .mode-card.active-24h {
      border-color: var(--accent-cyan);
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.25);
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(15, 23, 42, 0.9));
    }
    .mode-card.active-12h {
      border-color: var(--accent-amber);
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.25);
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(15, 23, 42, 0.9));
    }
    .mode-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
    .mode-title { font-size: 16px; font-weight: 800; color: #fff; }
    .mode-badge { font-size: 10px; font-weight: 800; padding: 4px 8px; border-radius: 6px; text-transform: uppercase; }
    .mode-badge.cyan { background: rgba(6, 182, 212, 0.2); color: var(--accent-cyan); }
    .mode-badge.amber { background: rgba(245, 158, 11, 0.2); color: var(--accent-amber); }
    .mode-slogan { font-size: 12px; font-weight: 600; color: var(--text-muted); margin-bottom: 12px; }

    /* Freight Engine Controls */
    .form-group { margin-bottom: 20px; }
    .form-label { font-size: 12px; font-weight: 700; color: var(--accent-cyan); letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 8px; display: block; }
    .select-input, .number-input {
      width: 100%;
      background: rgba(8, 11, 18, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      padding: 14px;
      color: #fff;
      font-size: 15px;
      font-weight: 600;
      outline: none;
      transition: border-color 0.2s ease;
    }
    .select-input:focus, .number-input:focus { border-color: var(--accent-cyan); }

    /* Weight Chips */
    .chip-container { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
    .weight-chip {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-muted);
      font-size: 12px;
      font-weight: 700;
      padding: 8px 14px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .weight-chip.active {
      background: rgba(6, 182, 212, 0.2);
      border-color: var(--accent-cyan);
      color: #fff;
    }

    /* Slider (Option 4) */
    .slider-range {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      outline: none;
      margin: 16px 0;
      accent-color: var(--accent-cyan);
    }

    /* Quote Display Box */
    .quote-box {
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.9), rgba(8, 11, 18, 0.95));
      border: 1px solid var(--accent-cyan);
      border-radius: 16px;
      padding: 24px;
      margin-top: 24px;
      position: relative;
      overflow: hidden;
    }
    .quote-box.thunder-theme { border-color: var(--accent-amber); }
    .quote-price { font-size: 42px; font-weight: 800; font-family: var(--font-mono); color: #fff; }
    .savings-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.4);
      color: var(--accent-green);
      font-size: 12px;
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 8px;
      margin-top: 10px;
    }

    /* Action Buttons */
    .btn-primary {
      width: 100%;
      background: linear-gradient(90deg, var(--accent-cyan), var(--accent-teal));
      border: none;
      color: #000;
      font-weight: 800;
      font-size: 14px;
      letter-spacing: 0.5px;
      padding: 16px;
      border-radius: 12px;
      cursor: pointer;
      text-transform: uppercase;
      transition: opacity 0.2s ease;
      margin-top: 16px;
    }
    .btn-primary:hover { opacity: 0.9; }

    /* Corporate Profile Section */
    .corp-section {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 32px;
      margin-top: 40px;
    }
    .corp-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
    @media (max-width: 768px) { .corp-grid { grid-template-columns: 1fr; } }
    .corp-card {
      background: rgba(15, 23, 42, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 16px;
      padding: 20px;
    }
    .corp-title { font-size: 16px; font-weight: 800; color: #fff; margin-bottom: 8px; display: flex; align-items: center; gap: 8px; }
    .corp-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; }

    /* Modal Matrix */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(8px);
      z-index: 1000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal-content {
      background: var(--bg-dark);
      border: 1px solid var(--accent-cyan);
      border-radius: 20px;
      width: 100%;
      max-width: 900px;
      max-height: 85vh;
      overflow-y: auto;
      padding: 24px;
    }
    .modal-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
      font-size: 12px;
    }
    .modal-table th, .modal-table td {
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 10px;
      text-align: left;
    }
    .modal-table th { background: rgba(6, 182, 212, 0.15); color: var(--accent-cyan); font-weight: 700; }
  </style>
</head>
<body>

  <canvas id="particle-canvas"></canvas>

  <div class="app-container">

    <!-- Header & Live Clock -->
    <div class="header-pill-row">
      <div class="badge-pill">NATIONWIDE B2B LAST-MILE LOGISTICS</div>
      <div class="badge-pill amber">UDYAM-TS-02-0359997</div>
      <div class="badge-pill clock" id="live-clock">--:--:-- IST</div>
    </div>

    <h1 class="main-title">THUNDER CARGO <span>CORRIDOR</span></h1>
    <p class="subtitle">Enterprise Last-Mile Integration & Digital Terminal Dispatch Network (Secunderabad SCR)</p>

    <!-- SLA Banner -->
    <div class="sla-banner">
      <div class="sla-banner-text" id="sla-text-line">
        🟢 <strong>LIVE SLA STATUS:</strong> 4-HOUR INTRA-CITY CLEARANCE | GUARANTEED 24-HR REGIONAL DISPATCH ACTIVE
      </div>
      <button onclick="openModal()" style="background: transparent; border: 1px solid var(--accent-cyan); color: var(--accent-cyan); border-radius: 6px; padding: 6px 12px; font-size: 11px; font-weight: 700; cursor: pointer;">
        VIEW RATE MATRIX
      </button>
    </div>

    <!-- Network Counters -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-num">3 <span>Primary</span></div>
        <div class="stat-label">CONSOLIDATION TERMINALS</div>
        <div class="stat-desc">High-capacity railway terminal processing nodes</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">175+</div>
        <div class="stat-label">DISTRICT LOGISTICS HUBS</div>
        <div class="stat-desc">Authorized last-mile delivery touchpoints</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">355+</div>
        <div class="stat-label">EXPRESS COLLECTION NODES</div>
        <div class="stat-desc">Micro-fulfillment merchant intake points</div>
      </div>
    </div>

    <!-- Dual Service Engine Selector (Option 2) -->
    <div class="mode-selector-grid">
      <div class="mode-card active-24h" id="card-24h" onclick="setServiceMode('24H')">
        <div class="mode-header">
          <div class="mode-title">24H SAME-DAY EXPRESS</div>
          <div class="mode-badge cyan">STANDARD TARIFF</div>
        </div>
        <div class="mode-slogan">"4-Hour Intra-City SLA & 24H Regional Terminal Evacuation"</div>
        <p style="font-size: 12px; color: var(--text-dim);">Ideal for daily inventory, standard factory stock, and regular B2B trade lines.</p>
      </div>

      <div class="mode-card" id="card-12h" onclick="setServiceMode('12H')">
        <div class="mode-header">
          <div class="mode-title">⚡ 12H THUNDER SERVICE</div>
          <div class="mode-badge amber">+30% VELOCITY PREMIUM</div>
        </div>
        <div class="mode-slogan">"Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn"</div>
        <p style="font-size: 12px; color: var(--text-dim);">Priority bus-docking & direct terminal clearance for critical industrial stock.</p>
      </div>
    </div>

    <!-- Main Freight Calculator Box -->
    <div class="glass-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 style="font-size: 18px; font-weight: 800; color: #fff;">Master B2B Freight Rate Engine</h2>
        <span class="badge-pill" style="margin: 0;">SAC 9965 RCM COMPLIANT</span>
      </div>

      <!-- Corridor Selection -->
      <div class="form-group">
        <label class="form-label">Corridor / Route Matrix</label>
        <select class="select-input" id="corridor-select" onchange="calculateTariff()">
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

      <!-- Weight Inputs & Quick Chips -->
      <div class="form-group">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <label class="form-label">Consignment Gross Weight (KG)</label>
          <span style="font-size: 11px; color: var(--text-dim);">Min: 1 KG</span>
        </div>
        <input type="number" class="number-input" id="weight-input" value="100" min="1" max="10000" oninput="syncSliderFromInput(); calculateTariff();">

        <!-- Interactive Slider (Option 4) -->
        <input type="range" class="slider-range" id="weight-slider" min="1" max="750" value="100" oninput="syncInputFromSlider(); calculateTariff();">

        <div class="chip-container">
          <div class="weight-chip" onclick="setWeight(10)">10 kg</div>
          <div class="weight-chip" onclick="setWeight(25)">25 kg</div>
          <div class="weight-chip" onclick="setWeight(50)">50 kg</div>
          <div class="weight-chip active" id="chip-100" onclick="setWeight(100)">100 kg</div>
          <div class="weight-chip" onclick="setWeight(250)">250 kg</div>
          <div class="weight-chip" onclick="setWeight(500)">500 kg</div>
          <div class="weight-chip" onclick="setWeight(750)">750 kg</div>
        </div>
      </div>

      <!-- Quote Summary Display Box -->
      <div class="quote-box" id="quote-box">
        <div style="font-size: 11px; font-weight: 800; color: var(--accent-cyan); letter-spacing: 1px; text-transform: uppercase;" id="quote-service-title">EXACT TARIFF QUOTE (24H BASELINE)</div>
        <div class="quote-price" id="quote-price-display">₹980</div>
        
        <div id="savings-badge-container">
          <div class="savings-badge">
            ⚡ GUARANTEED COMMERCIAL RATE (ALL INCLUSIVE)
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 18px; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 14px; font-size: 12px;">
          <div>
            <span style="color: var(--text-dim); display: block;">Selected Corridor:</span>
            <strong id="summary-corridor" style="color: #fff;">REGIONAL 2A (101 – 150 KM)</strong>
          </div>
          <div style="text-align: right;">
            <span style="color: var(--text-dim); display: block;">Weight Slab Bracket:</span>
            <strong id="summary-slab" style="color: var(--accent-cyan);">51 – 100 KG</strong>
          </div>
        </div>

        <button class="btn-primary" onclick="copyQuoteSummary()">COPY OFFICIAL DISPATCH QUOTE</button>
      </div>
    </div>

    <!-- Corporate Profile & Fleet Vanguard Section -->
    <div class="corp-section">
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 20px; font-weight: 800; color: #fff;">CORPORATE PROFILE & FLEET VANGUARD</h3>
        <p style="font-size: 13px; color: var(--text-muted);">Under the High Command Strategic Operations Division | Secunderabad (SCR)</p>
      </div>

      <div class="corp-grid">
        <div class="corp-card">
          <div class="corp-title">🏛️ Strategic Terminal Guardianship</div>
          <p class="corp-desc">
            Operating as an integrated last-mile modernization partner for Secunderabad terminal logistics, TCC eliminates platform bottlenecks with an aggressive 90-minute evacuation SLA. Compliant with SAC 9965 RCM and MSME Udyam standards.
          </p>
        </div>

        <div class="corp-card">
          <div class="corp-title">⚡ The Charminar Fleet Vanguard</div>
          <p class="corp-desc">
            Forged with the veteran auto-drivers and last-mile logistics workforce of Old City (Charminar), TCC deploys a hyper-agile 2-hour intra-city dispatch fleet capable of bypassing urban congestion up to a 30 KM radius.
          </p>
        </div>
      </div>
    </div>

  </div>

  <!-- Master Tariff Modal -->
  <div class="modal-overlay" id="modal-overlay" onclick="closeModal()">
    <div class="modal-content" onclick="event.stopPropagation()">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <h3 style="font-size: 18px; font-weight: 800; color: #fff;">MASTER B2B TARIFF SCHEDULE (24H VS 12H THUNDER)</h3>
        <button onclick="closeModal()" style="background: transparent; border: none; color: #fff; font-size: 20px; cursor: pointer;">✕</button>
      </div>
      <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">Verified Master Rates as of October 2026. 12H Thunder applies a 30% velocity premium.</p>

      <table class="modal-table">
        <thead>
          <tr>
            <th>Distance Slab</th>
            <th>51-100 kg (24H)</th>
            <th>51-100 kg (12H)</th>
            <th>101-250 kg (24H)</th>
            <th>101-250 kg (12H)</th>
          </tr>
        </thead>
        <tbody id="modal-table-body">
          <!-- Populated via Javascript -->
        </tbody>
      </table>
    </div>
  </div>

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

    let currentMode = '24H';

    // Live IST Ticking Clock
    function updateClock() {
      const now = new Date();
      const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' };
      document.getElementById('live-clock').innerText = now.toLocaleTimeString('en-US', options) + ' IST';
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Mode Switcher
    function setServiceMode(mode) {
      currentMode = mode;
      const card24 = document.getElementById('card-24h');
      const card12 = document.getElementById('card-12h');
      const slaText = document.getElementById('sla-text-line');
      const quoteBox = document.getElementById('quote-box');

      if (mode === '24H') {
        card24.className = 'mode-card active-24h';
        card12.className = 'mode-card';
        slaText.innerHTML = '🟢 <strong>LIVE SLA STATUS:</strong> 4-HOUR INTRA-CITY CLEARANCE | GUARANTEED 24-HR REGIONAL DISPATCH ACTIVE';
        quoteBox.className = 'quote-box';
      } else {
        card24.className = 'mode-card';
        card12.className = 'mode-card active-12h';
        slaText.innerHTML = '⚡ <strong>THUNDER SLA ACTIVE:</strong> LOADED AT DAWN, LANDED BY DUSK • SHIPPED BY DUSK, DELIVERED BY DAWN';
        quoteBox.className = 'quote-box thunder-theme';
      }
      calculateTariff();
    }

    // Input & Slider Sync
    function setWeight(w) {
      document.getElementById('weight-input').value = w;
      document.getElementById('weight-slider').value = w;
      document.querySelectorAll('.weight-chip').forEach(c => c.classList.remove('active'));
      calculateTariff();
    }
    function syncSliderFromInput() {
      document.getElementById('weight-slider').value = document.getElementById('weight-input').value;
    }
    function syncInputFromSlider() {
      document.getElementById('weight-input').value = document.getElementById('weight-slider').value;
    }

    // Calculation Engine
    function calculateTariff() {
      const key = document.getElementById('corridor-select').value;
      const weight = parseFloat(document.getElementById('weight-input').value) || 1;
      const data = TARIFF_DATA[key];

      let basePrice = 0;
      let slabText = '';

      if (weight <= 10) { basePrice = data.base[0]; slabText = '1 – 10 KG'; }
      else if (weight <= 25) { basePrice = data.base[1]; slabText = '11 – 25 KG'; }
      else if (weight <= 50) { basePrice = data.base[2]; slabText = '26 – 50 KG'; }
      else if (weight <= 100) { basePrice = data.base[3]; slabText = '51 – 100 KG'; }
      else if (weight <= 250) { basePrice = data.base[4]; slabText = '101 – 250 KG'; }
      else if (weight <= 500) { basePrice = data.base[5]; slabText = '251 – 500 KG'; }
      else {
        const excessWeight = weight - 500;
        basePrice = data.base[5] + (excessWeight * data.excess);
        slabText = 'EXCESS > 500 KG';
      }

      let finalPrice = basePrice;
      if (currentMode === '12H') {
        finalPrice = Math.round(basePrice * 1.30); // 30% Premium
      }

      // UI Rendering
      document.getElementById('quote-price-display').innerText = '₹' + finalPrice.toLocaleString('en-IN');
      document.getElementById('summary-corridor').innerText = data.name;
      document.getElementById('summary-slab').innerText = slabText;

      const titleEl = document.getElementById('quote-service-title');
      const savingsContainer = document.getElementById('savings-badge-container');

      if (currentMode === '12H') {
        titleEl.innerText = '⚡ EXACT TARIFF QUOTE (12H THUNDER ULTRA-EXPRESS)';
        savingsContainer.innerHTML = `
          <div class="savings-badge" style="background: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.4); color: var(--accent-amber);">
            ⚡ 12 TO 36 HOURS OF INDUSTRIAL DOWNTIME AVOIDED
          </div>
        `;
      } else {
        titleEl.innerText = 'EXACT TARIFF QUOTE (24H BASELINE EXPRESS)';
        savingsContainer.innerHTML = `
          <div class="savings-badge">
            🟢 GUARANTEED COMMERCIAL RATE (ALL INCLUSIVE)
          </div>
        `;
      }
    }

    function copyQuoteSummary() {
      const price = document.getElementById('quote-price-display').innerText;
      const corridor = document.getElementById('summary-corridor').innerText;
      const slab = document.getElementById('summary-slab').innerText;
      const mode = currentMode === '12H' ? '12H Thunder Ultra-Express' : '24H Same-Day Express';

      const summaryText = `[TCC DISPATCH QUOTE]\nService Mode: ${mode}\nCorridor: ${corridor}\nWeight Bracket: ${slab}\nTotal Quote: ${price}\nSLA Commitment: Guaranteed Terminal Clearance (SAC 9965 Compliant)`;

      navigator.clipboard.writeText(summaryText);
      alert('Official Dispatch Quote copied to clipboard!');
    }

    // Modal Table Builder
    function openModal() {
      const tbody = document.getElementById('modal-table-body');
      tbody.innerHTML = '';
      for (let k in TARIFF_DATA) {
        const row = TARIFF_DATA[k];
        const base100 = row.base[3];
        const thunder100 = Math.round(base100 * 1.30);
        const base250 = row.base[4];
        const thunder250 = Math.round(base250 * 1.30);

        tbody.innerHTML += `
          <tr>
            <td style="color:#fff; font-weight:700;">${row.name}</td>
            <td>₹${base100}</td>
            <td style="color:var(--accent-amber); font-weight:700;">₹${thunder100}</td>
            <td>₹${base250}</td>
            <td style="color:var(--accent-amber); font-weight:700;">₹${thunder250}</td>
          </tr>
        `;
      }
      document.getElementById('modal-overlay').style.display = 'flex';
    }
    function closeModal() {
      document.getElementById('modal-overlay').style.display = 'none';
    }

    // Canvas Falling Particle Light-Beam Animation
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.length);
        grad.addColorStop(0, 'rgba(6, 182, 212, 0)');
        grad.addColorStop(1, `rgba(6, 182, 212, ${p.opacity})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x, p.y + p.length);
        ctx.stroke();

        p.y += p.speed;
        if (p.y > canvas.height) {
          p.y = -p.length;
          p.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();

    // Initial Trigger
    calculateTariff();
  </script>
</body>
</html>
