```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thunder Cargo Corridor (TCC) | Master B2B Tariff Engine</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        tcc: {
                            bg: '#080b12',
                            card: '#0e1422',
                            border: '#1e293b',
                            accent: '#00f2fe',
                            teal: '#4facfe',
                            gold: '#fbbf24',
                            thunder: '#38bdf8'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            background-color: #080b12;
            color: #f8fafc;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        /* Custom Glowing Glass Effects */
        .glass-panel {
            background: rgba(14, 20, 34, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(0, 242, 254, 0.15);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        .glass-panel-glow {
            background: rgba(14, 20, 34, 0.85);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(0, 242, 254, 0.35);
            box-shadow: 0 0 25px rgba(0, 242, 254, 0.12);
        }
        .neon-border-accent {
            border-color: rgba(0, 242, 254, 0.5);
            box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #080b12;
        }
        ::-webkit-scrollbar-thumb {
            background: #1e293b;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #00f2fe;
        }
        /* Range Slider Styling */
        input[type=range] {
            -webkit-appearance: none;
            background: transparent;
        }
        input[type=range]:focus {
            outline: none;
        }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 8px;
            cursor: pointer;
            background: #1e293b;
            border-radius: 4px;
            border: 1px solid rgba(0, 242, 254, 0.2);
        }
        input[type=range]::-webkit-slider-thumb {
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background: #00f2fe;
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -7px;
            box-shadow: 0 0 12px #00f2fe;
        }
    </style>
</head>
<body class="relative min-h-screen text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-black">

    <canvas id="bgCanvas" class="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-40"></canvas>

    <!-- Main Outer Wrapper -->
    <div class="relative z-10 w-full max-w-5xl mx-auto px-4 py-6 space-y-6">

        <header class="glass-panel rounded-2xl p-5 md:p-6 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                <div class="flex flex-wrap items-center gap-2">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                        NATIONWIDE B2B LAST-MILE LOGISTICS
                    </span>
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-700">
                        UDYAM-TS-02-0359997
                    </span>
                </div>

                <!-- LIVE IST REAL-TIME DIGITAL CLOCK WITH SECONDS -->
                <div class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/90 border border-cyan-500/40 text-cyan-400 font-mono text-sm tracking-wider shadow-lg">
                    <svg class="w-4 h-4 text-cyan-400 animate-spin" style="animation-duration: 8s;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="text-xs text-slate-400 font-sans">LIVE IST:</span>
                    <span id="liveIstClock" class="font-bold text-cyan-300">00:00:00 AM IST</span>
                </div>
            </div>

            <!-- Title Header Block -->
            <div class="pt-2">
                <h1 class="text-2xl sm:text-4xl font-black tracking-tight uppercase">
                    THUNDER CARGO <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">CORRIDOR</span>
                </h1>
                <p class="text-sm sm:text-base text-slate-400 font-medium mt-1">
                    Enterprise Last-Mile Integration & Digital Terminal Dispatch Network
                </p>
                <p class="text-xs text-cyan-400/90 italic font-mono mt-1">
                    "Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn"
                </p>
            </div>

            <!-- Live Status Sub-Bar -->
            <div class="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs font-mono text-slate-400 bg-slate-950/50 p-3 rounded-xl border border-slate-800">
                <div class="flex items-center gap-2">
                    <span class="text-teal-400">🌐 LIVE SYSTEM STATUS:</span>
                    <span class="text-slate-200 font-semibold">3 Primary Nodes • 175+ District Hubs • 355+ Express Nodes</span>
                </div>
                <div>
                    Master Tariff Schedule: <span class="text-cyan-400 font-semibold">08-10-2026</span>
                </div>
            </div>
        </header>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- Node 1 -->
            <div class="glass-panel p-4 rounded-xl flex items-center justify-between hover:border-cyan-500/50 transition-all duration-300">
                <div>
                    <div class="text-xs text-slate-400 font-mono uppercase tracking-wider">CONSOLIDATION TERMINALS</div>
                    <div class="text-2xl font-black text-cyan-400 mt-1">3 <span class="text-sm font-semibold text-slate-300">Primary</span></div>
                    <div class="text-xs text-slate-500 mt-0.5">Strategic high-capacity processing centers</div>
                </div>
                <div class="p-3 bg-cyan-950/50 rounded-xl border border-cyan-500/20 text-cyan-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h5m-5 0V11m0 5h5m-5-5h5m-5-5h5"></path></svg>
                </div>
            </div>

            <!-- Node 2 -->
            <div class="glass-panel p-4 rounded-xl flex items-center justify-between hover:border-teal-500/50 transition-all duration-300">
                <div>
                    <div class="text-xs text-slate-400 font-mono uppercase tracking-wider">DISTRICT LOGISTICS HUBS</div>
                    <div class="text-2xl font-black text-teal-400 mt-1">175+</div>
                    <div class="text-xs text-slate-500 mt-0.5">Authorized last-mile delivery touchpoints</div>
                </div>
                <div class="p-3 bg-teal-950/50 rounded-xl border border-teal-500/20 text-teal-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
            </div>

            <!-- Node 3 -->
            <div class="glass-panel p-4 rounded-xl flex items-center justify-between hover:border-blue-500/50 transition-all duration-300">
                <div>
                    <div class="text-xs text-slate-400 font-mono uppercase tracking-wider">EXPRESS COLLECTION NODES</div>
                    <div class="text-2xl font-black text-blue-400 mt-1">355+</div>
                    <div class="text-xs text-slate-500 mt-0.5">Micro-fulfillment and merchant intake points</div>
                </div>
                <div class="p-3 bg-blue-950/50 rounded-xl border border-blue-500/20 text-blue-400">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                </div>
            </div>
        </section>

        <nav class="flex flex-wrap items-center justify-center gap-2 p-1.5 glass-panel rounded-xl">
            <button onclick="scrollToSection('calculatorSection')" class="flex-1 min-w-[140px] px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition">
                🧮 Master Tariff Engine
            </button>
            <button onclick="openTariffModal()" class="flex-1 min-w-[140px] px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-xs uppercase tracking-wider transition">
                📊 Tariff Chart Modal
            </button>
            <button onclick="scrollToSection('corporateSection')" class="flex-1 min-w-[140px] px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-semibold text-xs uppercase tracking-wider transition">
                🛡️ Fleet Vanguard & Profile
            </button>
        </nav>

        <section class="glass-panel rounded-2xl p-5 md:p-6 space-y-4">
            <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 class="text-lg font-bold text-white flex items-center gap-2">
                    <span class="p-1.5 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400">⚙️</span>
                    Select Dispatch Service Tier
                </h2>
                <span class="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800">
                    SLA Priority Engine Active
                </span>
            </div>

            <!-- Service Mode Selection Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Service 1: 24H Base -->
                <div id="card24H" onclick="setServiceTier('24H')" class="cursor-pointer rounded-xl p-4 border transition-all duration-300 bg-slate-900/90 border-cyan-500 shadow-md">
                    <div class="flex items-start justify-between">
                        <div>
                            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-700 uppercase">
                                Standard Rate
                            </span>
                            <h3 class="text-base font-bold text-white mt-1.5">24H SAME-DAY EXPRESS</h3>
                            <p class="text-xs text-slate-400 mt-1">4-Hour Local Intra-City / 24-Hour Regional SLA</p>
                        </div>
                        <div class="w-5 h-5 rounded-full border-2 border-cyan-400 flex items-center justify-center p-0.5">
                            <div id="radio24H" class="w-full h-full rounded-full bg-cyan-400"></div>
                        </div>
                    </div>
                    <div class="mt-3 pt-2 border-t border-slate-800 text-xs font-mono text-slate-400 flex justify-between">
                        <span>Base Master Tariff</span>
                        <span class="text-emerald-400 font-semibold">100% Base Rate</span>
                    </div>
                </div>

                <!-- Service 2: 12H Thunder Service -->
                <div id="card12H" onclick="setServiceTier('12H')" class="cursor-pointer rounded-xl p-4 border transition-all duration-300 bg-slate-950/50 border-slate-800 hover:border-cyan-500/40 opacity-75">
                    <div class="flex items-start justify-between">
                        <div>
                            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-700 uppercase">
                                ⚡ Thunder Ultra-Express
                            </span>
                            <h3 class="text-base font-bold text-white mt-1.5">12H THUNDER SERVICE</h3>
                            <p class="text-xs text-slate-400 mt-1">Loaded at Dawn, Landed by Dusk • Shipped by Dusk, Delivered by Dawn</p>
                        </div>
                        <div class="w-5 h-5 rounded-full border-2 border-slate-600 flex items-center justify-center p-0.5">
                            <div id="radio12H" class="w-full h-full rounded-full bg-transparent"></div>
                        </div>
                    </div>
                    <div class="mt-3 pt-2 border-t border-slate-800 text-xs font-mono text-slate-400 flex justify-between">
                        <span>Speed Surcharge (+25-30%)</span>
                        <span class="text-amber-400 font-semibold">+30% Thunder Rate</span>
                    </div>
                </div>
            </div>

            <!-- Dynamic Live SLA Status Display Banner -->
            <div id="slaStatusBanner" class="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center justify-between">
                <span class="flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span id="slaText">🟢 LIVE SLA: 4-HR INTRA-CITY / 24-HR REGIONAL DISPATCH ACTIVE</span>
                </span>
                <span id="downtimeSavedBadge" class="hidden sm:inline-block px-2.5 py-0.5 rounded bg-cyan-900/80 text-cyan-200 text-[11px] font-bold border border-cyan-600">
                    Standard Industrial SLA
                </span>
            </div>
        </section>

        <main id="calculatorSection" class="glass-panel-glow rounded-2xl p-5 md:p-6 space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div class="flex items-center gap-3">
                    <div class="p-2.5 bg-cyan-950 rounded-xl border border-cyan-500/30 text-cyan-400">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                        <h2 class="text-xl font-black text-white uppercase tracking-tight">Master B2B Freight Rate Engine</h2>
                        <p class="text-xs text-slate-400">Instant contract quote calculation based on distance corridor & weight slab rules.</p>
                    </div>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                    SAC 9965 RCM Compliant
                </span>
            </div>

            <!-- Inputs Grid -->
            <div class="space-y-5">
                <!-- Corridor Selection -->
                <div class="space-y-2">
                    <label class="flex justify-between text-xs font-mono uppercase tracking-wider text-slate-300">
                        <span class="text-cyan-400 font-bold">CORRIDOR / ROUTE MATRIX</span>
                        <span class="text-slate-400">Select applicable distance range</span>
                    </label>
                    <select id="corridorSelect" onchange="calculateTariff()" class="w-full bg-slate-950 text-slate-100 border border-slate-700 hover:border-cyan-500 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-cyan-400 transition">
                        <!-- Populated dynamically via JavaScript -->
                    </select>
                </div>

                <!-- Weight Input & Presets -->
                <div class="space-y-3">
                    <div class="flex justify-between items-center text-xs font-mono uppercase tracking-wider text-slate-300">
                        <span class="text-cyan-400 font-bold">CONSIGNMENT GROSS WEIGHT (KG)</span>
                        <span class="text-slate-400">Min 1 KG</span>
                    </div>

                    <!-- Input Box -->
                    <div class="relative">
                        <input type="number" id="weightInput" value="100" min="1" max="5000" oninput="syncWeightFromInput(this.value)" class="w-full bg-slate-950 text-cyan-300 text-2xl font-black font-mono border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400 transition pl-5 pr-16" />
                        <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold font-mono">KG</span>
                    </div>

                    <!-- Interactive Slider -->
                    <div class="pt-2">
                        <input type="range" id="weightSlider" min="1" max="1000" value="100" step="1" oninput="syncWeightFromSlider(this.value)" class="w-full" />
                    </div>

                    <!-- Quick Preset Buttons -->
                    <div class="flex flex-wrap gap-2 pt-1">
                        <button onclick="setWeightPreset(10)" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500 transition">10kg</button>
                        <button onclick="setWeightPreset(25)" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500 transition">25kg</button>
                        <button onclick="setWeightPreset(50)" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500 transition">50kg</button>
                        <button onclick="setWeightPreset(100)" class="px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-500/50 text-xs font-mono text-cyan-300 font-bold transition">100kg</button>
                        <button onclick="setWeightPreset(250)" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500 transition">250kg</button>
                        <button onclick="setWeightPreset(500)" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500 transition">500kg</button>
                        <button onclick="setWeightPreset(750)" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500 transition">750kg</button>
                    </div>
                </div>

                <!-- Dynamic Rules Sub-card -->
                <div class="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-400 space-y-1">
                    <div class="font-bold text-cyan-300 font-mono flex items-center gap-1.5">
                        <span>✨ Dynamic Weight Slab Rules</span>
                    </div>
                    <p id="slabRuleDescription">
                        Slabs covered: 1-10kg, 11-25kg, 26-50kg, 51-100kg, 101-250kg, 251-500kg. Consignments exceeding 500kg are billed at the 500kg base slab rate plus an incremental per-kg surcharge.
                    </p>
                </div>
            </div>

            <!-- RESULT QUOTE CARD (Exact Screen Reproduction) -->
            <div class="p-6 rounded-2xl bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950 border border-cyan-500/40 space-y-4 shadow-2xl relative overflow-hidden">
                <div class="absolute -right-12 -top-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div class="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">
                    EXACT TARIFF QUOTE
                </div>

                <div class="flex items-baseline gap-2">
                    <span id="quotePrice" class="text-4xl sm:text-5xl font-black text-cyan-300 font-mono">₹980</span>
                    <span id="thunderBadgeInline" class="hidden text-xs font-bold font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        +30% Thunder Applied
                    </span>
                </div>

                <div class="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span id="rateGuaranteeText">Guaranteed Commercial Rate (All Inclusive)</span>
                </div>

                <hr class="border-slate-800/80 my-2" />

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div class="flex justify-between sm:justify-start sm:gap-4">
                        <span class="text-slate-500">Selected Corridor:</span>
                        <span id="quoteCorridor" class="text-slate-200 font-bold">REGIONAL 2A (101 – 150 KM)</span>
                    </div>
                    <div class="flex justify-between sm:justify-start sm:gap-4">
                        <span class="text-slate-500">Weight Bracket:</span>
                        <span id="quoteBracket" class="text-cyan-300 font-bold">51 – 100 KG</span>
                    </div>
                    <div class="flex justify-between sm:justify-start sm:gap-4">
                        <span class="text-slate-500">Excess Tariff Rate:</span>
                        <span id="quoteExcessRate" class="text-slate-300 font-bold">₹6.00 / excess kg</span>
                    </div>
                    <div class="flex justify-between sm:justify-start sm:gap-4">
                        <span class="text-slate-500">Estimated Delivery SLA:</span>
                        <span id="quoteSla" class="text-emerald-400 font-bold">Within 24 Hours</span>
                    </div>
                </div>

                <!-- COPY BUTTON -->
                <button onclick="copyQuoteSummary()" class="w-full mt-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/30 text-cyan-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition shadow-lg active:scale-95">
                    <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    <span>COPY QUOTE SUMMARY</span>
                </button>
            </div>
        </main>

        <section id="corporateSection" class="glass-panel rounded-2xl p-5 md:p-6 space-y-5">
            <div class="border-b border-slate-800 pb-3">
                <span class="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Enterprise Last-Mile Integration</span>
                <h2 class="text-xl font-black text-white mt-0.5 uppercase">TCC Guardianship & Fleet Vanguard Profile</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-300 leading-relaxed">
                <!-- Profile Block 1 -->
                <div class="space-y-3 p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                    <h3 class="font-bold text-white text-sm flex items-center gap-2">
                        <span class="text-cyan-400">🏛️</span> Railway Terminal Evacuation SLA
                    </h3>
                    <p>
                        Engineered specifically for high-frequency freight offloading at major rail heads (including Secunderabad - SCR Terminal). TCC guarantees a <strong>90-Minute Platform Evacuation SLA</strong>, ensuring break-bulk cargo moves seamlessly from train doors to regional distribution hubs without demurrage overheads.
                    </p>
                </div>

                <!-- Profile Block 2 -->
                <div class="space-y-3 p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                    <h3 class="font-bold text-white text-sm flex items-center gap-2">
                        <span class="text-teal-400">🛺</span> Old City (Charminar) Last-Mile Vanguard
                    </h3>
                    <p>
                        Empowering local auto-drivers and delivery personnel across Hyderabad’s historic core. Our digital dispatch network transforms traditional last-mile logistics into a synchronized grid, executing <strong>2-Hour Intra-City 30KM Clearance</strong> with precision tracking.
                    </p>
                </div>
            </div>

            <!-- Key Corporate Attributes Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-center text-xs">
                <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div class="text-cyan-400 font-bold text-base">90-MIN</div>
                    <div class="text-slate-400 text-[10px] mt-0.5">Rail Evacuation SLA</div>
                </div>
                <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div class="text-teal-400 font-bold text-base">2-HOUR</div>
                    <div class="text-slate-400 text-[10px] mt-0.5">30KM City Clearance</div>
                </div>
                <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div class="text-amber-400 font-bold text-base">+30% MAX</div>
                    <div class="text-slate-400 text-[10px] mt-0.5">12H Thunder Premium</div>
                </div>
                <div class="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <div class="text-emerald-400 font-bold text-base">100%</div>
                    <div class="text-slate-400 text-[10px] mt-0.5">SAC 9965 Compliant</div>
                </div>
            </div>
        </section>

        <footer class="glass-panel rounded-2xl p-5 text-center text-xs space-y-3 font-mono">
            <div class="flex flex-wrap items-center justify-center gap-6 text-slate-300">
                <a href="tel:+918340085989" class="hover:text-cyan-400 transition flex items-center gap-1.5">
                    <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    +91 8340085989
                </a>
                <a href="mailto:tcc.cargodesk@gmail.com" class="hover:text-cyan-400 transition flex items-center gap-1.5">
                    <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    tcc.cargodesk@gmail.com
                </a>
                <span class="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    MSME Registered: UDYAM-TS-02-0359997
                </span>
            </div>
            <div class="text-slate-500 pt-2 border-t border-slate-800/60 text-[11px]">
                Thunder Cargo Corridor (TCC) • Enterprise Last-Mile Logistics Infrastructure Framework
            </div>
        </footer>

    </div>

    <div id="tariffModal" class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 hidden flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <div class="glass-panel-glow w-full max-w-5xl rounded-2xl max-h-[90vh] flex flex-col my-auto border border-cyan-500/50 shadow-2xl">
            <!-- Modal Header -->
            <div class="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
                <div>
                    <h3 class="text-lg font-black text-white uppercase">TCC Master B2B Tariff Matrix Schedule</h3>
                    <p class="text-xs text-slate-400">Complete corridor & weight bracket rate card with 12H Thunder (+30%) comparison.</p>
                </div>
                <button onclick="closeTariffModal()" class="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition">
                    ✕
                </button>
            </div>

            <!-- Modal Content - Table -->
            <div class="p-4 overflow-x-auto">
                <table class="w-full text-left border-collapse text-xs font-mono">
                    <thead>
                        <tr class="border-b border-slate-700 bg-slate-950 text-cyan-300">
                            <th class="p-2.5">Corridor / Distance</th>
                            <th class="p-2.5">1–10 kg</th>
                            <th class="p-2.5">11–25 kg</th>
                            <th class="p-2.5">26–50 kg</th>
                            <th class="p-2.5">51–100 kg</th>
                            <th class="p-2.5">101–250 kg</th>
                            <th class="p-2.5">251–500 kg</th>
                            <th class="p-2.5 text-amber-300">Excess >500kg</th>
                        </tr>
                    </thead>
                    <tbody id="modalTariffTableBody" class="divide-y divide-slate-800/60 text-slate-300">
                        <!-- Populated via JS -->
                    </tbody>
                </table>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
                <span>As of Date: 08-10-2026</span>
                <button onclick="closeTariffModal()" class="px-4 py-2 rounded-lg bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition">
                    Close Schedule
                </button>
            </div>
        </div>
    </div>

    <script>
        /* ==========================================================================
           TCC MASTER TARIFF MATRIX DATA STRUCTURE (Matching Image 1000035365)
           ========================================================================== */
        const TCC_MATRIX = [
            { id: 'INTRA-1', name: 'INTRA-CITY 1 (4 – 5 KM)', s1: 150, s2: 250, s3: 380, s4: 550, s5: 1100, s6: 1800, excess: 3.50 },
            { id: 'INTRA-2', name: 'INTRA-CITY 2 (6 – 15 KM)', s1: 200, s2: 320, s3: 480, s4: 750, s5: 1500, s6: 2400, excess: 4.50 },
            { id: 'INTRA-3', name: 'INTRA-CITY 3 (16 – 30 KM)', s1: 280, s2: 420, s3: 650, s4: 1050, s5: 2000, s6: 3200, excess: 6.00 },
            { id: 'REG-1A', name: 'REGIONAL 1A (31 – 50 KM)', s1: 240, s2: 340, s3: 520, s4: 720, s5: 1400, s6: 2400, excess: 4.50 },
            { id: 'REG-1B', name: 'REGIONAL 1B (51 – 100 KM)', s1: 280, s2: 390, s3: 600, s4: 820, s5: 1600, s6: 2750, excess: 5.20 },
            { id: 'REG-2A', name: 'REGIONAL 2A (101 – 150 KM)', s1: 320, s2: 450, s3: 700, s4: 980, s5: 1900, s6: 3100, excess: 6.00 },
            { id: 'REG-2B', name: 'REGIONAL 2B (151 – 200 KM)', s1: 350, s2: 490, s3: 780, s4: 1100, s5: 2200, s6: 3500, excess: 6.80 },
            { id: 'REG-3A', name: 'REGIONAL 3A (201 – 250 KM)', s1: 380, s2: 540, s3: 880, s4: 1280, s5: 2480, s6: 3750, excess: 7.30 },
            { id: 'REG-3B', name: 'REGIONAL 3B (251 – 300 KM)', s1: 410, s2: 590, s3: 1020, s4: 1420, s5: 2680, s6: 3920, excess: 7.80 },
            { id: 'REG-4A', name: 'REGIONAL 4A (301 – 350 KM)', s1: 440, s2: 640, s3: 1120, s4: 1580, s5: 2950, s6: 4400, excess: 8.60 },
            { id: 'REG-4B', name: 'REGIONAL 4B (351 – 400 KM)', s1: 470, s2: 690, s3: 1220, s4: 1720, s5: 3220, s6: 4920, excess: 9.50 },
            { id: 'REG-5A', name: 'REGIONAL 5A (401 – 450 KM)', s1: 500, s2: 740, s3: 1320, s4: 1880, s5: 3550, s6: 5400, excess: 10.50 },
            { id: 'REG-5B', name: 'REGIONAL 5B (451 – 500 KM)', s1: 530, s2: 790, s3: 1420, s4: 2020, s5: 3820, s6: 5920, excess: 11.50 },
            { id: 'REG-6A', name: 'REGIONAL 6A (501 – 550 KM)', s1: 560, s2: 840, s3: 1520, s4: 2180, s5: 4150, s6: 6400, excess: 12.50 },
            { id: 'REG-6B', name: 'REGIONAL 6B (551 – 600 KM)', s1: 590, s2: 890, s3: 1620, s4: 2320, s5: 4420, s6: 6920, excess: 13.50 }
        ];

        // Global State
        let selectedServiceTier = '24H'; // '24H' or '12H'

        window.onload = function() {
            initLiveClock();
            initCanvasAnimation();
            populateCorridorSelect();
            populateTariffModalTable();
            calculateTariff();
        };

        function initLiveClock() {
            function updateClock() {
                const now = new Date();
                // Format to IST string
                const options = {
                    timeZone: 'Asia/Kolkata',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                };
                const timeString = now.toLocaleTimeString('en-US', options);
                document.getElementById('liveIstClock').textContent = timeString + ' IST';
            }
            updateClock();
            setInterval(updateClock, 1000);
        }

        function populateCorridorSelect() {
            const select = document.getElementById('corridorSelect');
            select.innerHTML = '';
            TCC_MATRIX.forEach((item, index) => {
                const opt = document.createElement('option');
                opt.value = item.id;
                opt.textContent = item.name;
                if (item.id === 'REG-2A') opt.selected = true; // Default matching screenshot
                select.appendChild(opt);
            });
        }

        function populateTariffModalTable() {
            const tbody = document.getElementById('modalTariffTableBody');
            tbody.innerHTML = '';
            TCC_MATRIX.forEach(item => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-slate-900/60 transition';
                tr.innerHTML = `
                    <td class="p-2.5 font-bold text-white">${item.name}</td>
                    <td class="p-2.5">₹${item.s1}</td>
                    <td class="p-2.5">₹${item.s2}</td>
                    <td class="p-2.5">₹${item.s3}</td>
                    <td class="p-2.5 text-cyan-300 font-bold">₹${item.s4}</td>
                    <td class="p-2.5">₹${item.s5}</td>
                    <td class="p-2.5">₹${item.s6}</td>
                    <td class="p-2.5 text-amber-300 font-semibold">+₹${item.excess.toFixed(2)} / kg</td>
                `;
                tbody.appendChild(tr);
            });
        }

        function setServiceTier(tier) {
            selectedServiceTier = tier;
            const card24H = document.getElementById('card24H');
            const card12H = document.getElementById('card12H');
            const radio24H = document.getElementById('radio24H');
            const radio12H = document.getElementById('radio12H');
            const slaText = document.getElementById('slaText');
            const downtimeBadge = document.getElementById('downtimeSavedBadge');

            if (tier === '24H') {
                card24H.className = 'cursor-pointer rounded-xl p-4 border transition-all duration-300 bg-slate-900/90 border-cyan-500 shadow-md';
                card12H.className = 'cursor-pointer rounded-xl p-4 border transition-all duration-300 bg-slate-950/50 border-slate-800 opacity-75';
                radio24H.className = 'w-full h-full rounded-full bg-cyan-400';
                radio12H.className = 'w-full h-full rounded-full bg-transparent';

                slaText.textContent = '🟢 LIVE SLA: 4-HR INTRA-CITY / 24-HR REGIONAL DISPATCH ACTIVE';
                downtimeBadge.textContent = 'Standard Industrial SLA';
                downtimeBadge.className = 'hidden sm:inline-block px-2.5 py-0.5 rounded bg-cyan-900/80 text-cyan-200 text-[11px] font-bold border border-cyan-600';
            } else {
                card12H.className = 'cursor-pointer rounded-xl p-4 border transition-all duration-300 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border-amber-500 shadow-lg';
                card24H.className = 'cursor-pointer rounded-xl p-4 border transition-all duration-300 bg-slate-950/50 border-slate-800 opacity-75';
                radio12H.className = 'w-full h-full rounded-full bg-amber-400';
                radio24H.className = 'w-full h-full rounded-full bg-transparent';

                slaText.textContent = '⚡ THUNDER SLA: NEXT SUNRISE DEPARTURE IN 03:42:15 • GUARANTEED DUSK LANDING';
                downtimeBadge.textContent = '⚡ Saves 12 to 36 Hours of Downtime';
                downtimeBadge.className = 'hidden sm:inline-block px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[11px] font-bold border border-amber-500/40 animate-pulse';
            }

            calculateTariff();
        }

        function syncWeightFromInput(val) {
            let weight = parseFloat(val) || 1;
            document.getElementById('weightSlider').value = Math.min(weight, 1000);
            calculateTariff();
        }

        function syncWeightFromSlider(val) {
            document.getElementById('weightInput').value = val;
            calculateTariff();
        }

        function setWeightPreset(weight) {
            document.getElementById('weightInput').value = weight;
            document.getElementById('weightSlider').value = Math.min(weight, 1000);
            calculateTariff();
        }

        function calculateTariff() {
            const corridorId = document.getElementById('corridorSelect').value;
            const weight = parseFloat(document.getElementById('weightInput').value) || 1;

            const corridor = TCC_MATRIX.find(c => c.id === corridorId) || TCC_MATRIX[5];

            let basePrice = 0;
            let bracketText = '';

            if (weight <= 10) {
                basePrice = corridor.s1;
                bracketText = '1 – 10 KG';
            } else if (weight <= 25) {
                basePrice = corridor.s2;
                bracketText = '11 – 25 KG';
            } else if (weight <= 50) {
                basePrice = corridor.s3;
                bracketText = '26 – 50 KG';
            } else if (weight <= 100) {
                basePrice = corridor.s4;
                bracketText = '51 – 100 KG';
            } else if (weight <= 250) {
                basePrice = corridor.s5;
                bracketText = '101 – 250 KG';
            } else if (weight <= 500) {
                basePrice = corridor.s6;
                bracketText = '251 – 500 KG';
            } else {
                const excessWeight = weight - 500;
                basePrice = corridor.s6 + (excessWeight * corridor.excess);
                bracketText = `> 500 KG (${excessWeight.toFixed(0)}kg excess)`;
            }

            // Apply 12H Thunder Premium multiplier (+30%)
            let finalPrice = basePrice;
            if (selectedServiceTier === '12H') {
                finalPrice = Math.round(basePrice * 1.30);
            } else {
                finalPrice = Math.round(basePrice);
            }

            // UI Updates
            document.getElementById('quotePrice').textContent = `₹${finalPrice.toLocaleString('en-IN')}`;
            document.getElementById('quoteCorridor').textContent = corridor.name;
            document.getElementById('quoteBracket').textContent = bracketText;
            document.getElementById('quoteExcessRate').textContent = `₹${corridor.excess.toFixed(2)} / excess kg`;

            const thunderBadgeInline = document.getElementById('thunderBadgeInline');
            const rateGuaranteeText = document.getElementById('rateGuaranteeText');
            const quoteSla = document.getElementById('quoteSla');

            if (selectedServiceTier === '12H') {
                thunderBadgeInline.classList.remove('hidden');
                rateGuaranteeText.textContent = '⚡ Thunder Service 12H Priority Express Delivery';
                quoteSla.textContent = 'Within 12 Hours (Dawn/Dusk SLA)';
                quoteSla.className = 'text-amber-400 font-bold';
            } else {
                thunderBadgeInline.classList.add('hidden');
                rateGuaranteeText.textContent = 'Guaranteed Commercial Rate (All Inclusive)';
                quoteSla.textContent = corridor.name.includes('INTRA') ? 'Within 4 Hours' : 'Within 24 Hours';
                quoteSla.className = 'text-emerald-400 font-bold';
            }
        }

        function copyQuoteSummary() {
            const corridor = document.getElementById('quoteCorridor').textContent;
            const weight = document.getElementById('weightInput').value;
            const price = document.getElementById('quotePrice').textContent;
            const bracket = document.getElementById('quoteBracket').textContent;
            const tier = selectedServiceTier === '12H' ? '12H THUNDER SERVICE (+30% Priority)' : '24H SAME-DAY EXPRESS';

            const summaryText = `--- THUNDER CARGO CORRIDOR (TCC) OFFICIAL QUOTE ---\n` +
                                `Service Tier: ${tier}\n` +
                                `Corridor: ${corridor}\n` +
                                `Weight: ${weight} KG (Bracket: ${bracket})\n` +
                                `Calculated Tariff Rate: ${price} (All Inclusive)\n` +
                                `SAC Code: 9965 (RCM Compliant)\n` +
                                `Timestamp: ${new Date().toLocaleString('en-IN')} IST\n` +
                                `Support: +91 8340085989 | tcc.cargodesk@gmail.com`;

            // Fallback clipboard method per instructions
            const textArea = document.createElement('textarea');
            textArea.value = summaryText;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                showNotification('Quote Summary copied to clipboard!');
            } catch (err) {
                showNotification('Copy failed. Please try again.');
            }
            document.body.removeChild(textArea);
        }

        function showNotification(msg) {
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-6 right-6 z-50 bg-cyan-500 text-slate-950 font-mono text-xs font-bold px-4 py-3 rounded-xl shadow-2xl transition-all duration-300 transform translate-y-0';
            toast.textContent = msg;
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => document.body.removeChild(toast), 300);
            }, 2500);
        }

        function openTariffModal() {
            document.getElementById('tariffModal').classList.remove('hidden');
        }
        function closeTariffModal() {
            document.getElementById('tariffModal').classList.add('hidden');
        }
        function scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }

        function initCanvasAnimation() {
            const canvas = document.getElementById('bgCanvas');
            const ctx = canvas.getContext('2d');

            function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            resize();
            window.addEventListener('resize', resize);

            const particles = [];
            const particleCount = 45;

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    length: Math.random() * 40 + 20,
                    speed: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.1,
                    width: Math.random() * 1.5 + 0.5
                });
            }

            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                particles.forEach(p => {
                    ctx.beginPath();
                    const gradient = ctx.createLinearGradient(p.x, p.y, p.x, p.y + p.length);
                    gradient.addColorStop(0, `rgba(0, 242, 254, 0)`);
                    gradient.addColorStop(1, `rgba(0, 242, 254, ${p.opacity})`);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = p.width;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p.x, p.y + p.length);
                    ctx.stroke();

                    p.y += p.speed;
                    if (p.y > canvas.height) {
                        p.y = -p.length;
                        p.x = Math.random() * canvas.width;
                    }
                });

                requestAnimationFrame(animate);
            }
            animate();
        }
    </script>
</body>
</html>
```
