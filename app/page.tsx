```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thunder Cargo Corridor (TCC) | B2B Logistics Framework</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        cyber: {
                            bg: '#060911',
                            card: '#0d1322',
                            cardHover: '#131b2e',
                            border: '#1e293b',
                            cyan: '#06b6d4',
                            cyanGlow: '#22d3ee',
                            teal: '#14b8a6',
                            emerald: '#10b981',
                            amber: '#f59e0b',
                        }
                    },
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        mono: ['"JetBrains Mono"', 'monospace'],
                    }
                }
            }
        }
    </script>

    <style>
        body {
            background-color: #060911;
            color: #f1f5f9;
            font-family: 'Plus Jakarta Sans', sans-serif;
            overflow-x: hidden;
        }

        /* Glassmorphism containers */
        .glass-panel {
            background: rgba(13, 19, 34, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 12px 32px 0 rgba(0, 0, 0, 0.5);
        }

        .glass-panel-glow {
            background: rgba(13, 19, 34, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(34, 211, 238, 0.25);
            box-shadow: 0 0 25px rgba(6, 182, 212, 0.15);
        }

        .glass-card-interactive {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card-interactive:hover {
            border-color: rgba(34, 211, 238, 0.4);
            transform: translateY(-2px);
            box-shadow: 0 10px 25px -5px rgba(6, 182, 212, 0.2);
        }

        /* Rain Canvas Background */
        #particleCanvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 0;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #060911;
        }
        ::-webkit-scrollbar-thumb {
            background: #1e293b;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #06b6d4;
        }

        /* Animated Pulsing Glow */
        @keyframes cyanPulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
        }
        .glow-effect {
            animation: cyanPulse 4s infinite ease-in-out;
        }

        /* Toast notification */
        #toast {
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform: translateY(100px);
            opacity: 0;
        }
        #toast.show {
            transform: translateY(0);
            opacity: 1;
        }
    </style>
</head>
<body class="min-h-screen relative flex flex-col justify-between selection:bg-cyber-cyan selection:text-black">

    <!-- Falling Droplet Light Beam Canvas -->
    <canvas id="particleCanvas"></canvas>

    <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

        <!-- Header & Real-Time IST Clock Header -->
        <header class="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div class="absolute -right-16 -top-16 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div class="flex flex-wrap items-center gap-2 mb-3">
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wider uppercase">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-2"></span>
                            NATIONWIDE B2B LAST-MILE LOGISTICS
                        </span>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            UDYAM-TS-02-0359997
                        </span>
                        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                            <i class="fa-solid fa-shield-halved text-xs mr-1.5"></i> SAC 9965 RCM COMPLIANT
                        </span>
                    </div>

                    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
                        THUNDER CARGO <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-teal">CORRIDOR</span>
                    </h1>
                    <p class="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
                        Enterprise Last-Mile Integration & Digital Terminal Dispatch Network
                    </p>
                </div>

                <!-- Live IST Clock Box -->
                <div class="flex flex-col items-start md:items-end w-full md:w-auto">
                    <div class="glass-panel px-4 py-3 rounded-xl border border-cyan-500/30 flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
                        <div class="flex items-center space-x-2">
                            <i class="fa-regular fa-clock text-cyber-cyan text-lg animate-pulse"></i>
                            <span class="text-xs uppercase tracking-widest text-slate-400 font-mono">LIVE IST CLOCK</span>
                        </div>
                        <div id="istClock" class="font-mono text-xl font-bold text-cyber-cyan tracking-wider">
                            00:00:00 AM IST
                        </div>
                    </div>
                    <div class="mt-2 text-xs text-slate-400 flex items-center gap-2">
                        <span class="w-2 h-2 rounded-full bg-cyber-cyan"></span>
                        Master Tariff Schedule: <span class="font-mono text-slate-200">2026-Q4 ACTIVE</span>
                    </div>
                </div>
            </div>

            <!-- Option 1: Dynamic Live System Status Pill Bar -->
            <div id="slaStatusPill" class="mt-6 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-300 gap-3">
                <div class="flex items-center space-x-3 w-full sm:w-auto">
                    <span class="flex h-3 w-3 relative">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span id="slaStatusText" class="font-medium text-emerald-300">
                        🟢 LIVE SLA: 4-HR INTRA-CITY / 24-HR REGIONAL DISPATCH
                    </span>
                </div>
                <div class="flex items-center space-x-4 text-xs font-mono text-slate-400 w-full sm:w-auto justify-between sm:justify-end">
                    <span><strong class="text-white">3</strong> Primary Nodes</span>
                    <span>•</span>
                    <span><strong class="text-white">175+</strong> District Hubs</span>
                    <span>•</span>
                    <span class="text-cyber-cyan font-semibold">100% Fleet Readiness</span>
                </div>
            </div>
        </header>

        <!-- Key Logistics Stat Bar -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="glass-panel glass-card-interactive p-5 rounded-xl flex items-center justify-between">
                <div>
                    <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">CONSOLIDATION TERMINALS</div>
                    <div class="text-3xl font-extrabold text-white font-mono flex items-baseline gap-2">
                        3 <span class="text-sm font-sans font-medium text-cyber-cyan">Primary</span>
                    </div>
                    <p class="text-xs text-slate-400 mt-1">Strategic high-capacity processing centers</p>
                </div>
                <div class="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-cyber-cyan">
                    <i class="fa-solid fa-warehouse text-2xl"></i>
                </div>
            </div>

            <div class="glass-panel glass-card-interactive p-5 rounded-xl flex items-center justify-between">
                <div>
                    <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">DISTRICT LOGISTICS HUBS</div>
                    <div class="text-3xl font-extrabold text-white font-mono flex items-baseline gap-2">
                        175+ <span class="text-xs font-sans font-medium text-emerald-400">Active</span>
                    </div>
                    <p class="text-xs text-slate-400 mt-1">Authorized last-mile delivery touchpoints</p>
                </div>
                <div class="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400">
                    <i class="fa-solid fa-map-location-dot text-2xl"></i>
                </div>
            </div>

            <div class="glass-panel glass-card-interactive p-5 rounded-xl flex items-center justify-between">
                <div>
                    <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">EXPRESS COLLECTION NODES</div>
                    <div class="text-3xl font-extrabold text-white font-mono flex items-baseline gap-2">
                        355+ <span class="text-xs font-sans font-medium text-amber-400">Integrated</span>
                    </div>
                    <p class="text-xs text-slate-400 mt-1">Micro-fulfillment and merchant intake points</p>
                </div>
                <div class="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                    <i class="fa-solid fa-cubes text-2xl"></i>
                </div>
            </div>
        </div>

        <!-- Quick Nav Actions & Dual-Engine Mode Selection (Option 2) -->
        <div class="flex flex-col space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-2 rounded-2xl border border-slate-800">
                <div class="flex flex-wrap gap-2 w-full sm:w-auto">
                    <button class="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyber-cyan to-cyber-teal text-black shadow-lg shadow-cyan-500/20 flex items-center space-x-2">
                        <i class="fa-solid fa-calculator"></i>
                        <span>Master Tariff Engine</span>
                    </button>
                    <button onclick="scrollToVanguard()" class="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center space-x-2">
                        <i class="fa-solid fa-truck-fast"></i>
                        <span>90-Min Evacuation SLA</span>
                    </button>
                    <button onclick="openTariffModal()" class="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition flex items-center space-x-2">
                        <i class="fa-solid fa-table-list"></i>
                        <span>Full Rate Matrix Chart</span>
                    </button>
                </div>
                <button onclick="scrollToVanguard()" class="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 hover:border-cyan-500 flex items-center justify-center space-x-2">
                    <i class="fa-solid fa-leaf text-emerald-400"></i>
                    <span>Voluntary ESG Pledge Active</span>
                </button>
            </div>

            <!-- Option 2: Dual Engine Service Selector Card -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div id="service24h" onclick="selectServiceMode('24H')" 
                     class="glass-panel p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 border-cyan-500 bg-cyan-950/20 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-bl-full pointer-events-none"></div>
                    <div class="flex justify-between items-start mb-2">
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-truck-moving text-cyber-cyan text-xl"></i>
                            <h3 class="font-bold text-white text-lg">24H SAME-DAY EXPRESS</h3>
                        </div>
                        <span class="px-2.5 py-1 rounded text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">STANDARD RATE</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3">
                        Reliable standard enterprise SLA with full consolidation node routing and guaranteed same-day pickup.
                    </p>
                    <div class="flex items-center justify-between text-xs text-slate-400 font-mono pt-2 border-t border-slate-800">
                        <span>EVACUATION: 90 MINS</span>
                        <span class="text-cyan-400 font-bold">100% BASE TARIFF</span>
                    </div>
                </div>

                <div id="service12h" onclick="selectServiceMode('12H')" 
                     class="glass-panel p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 border-slate-800 hover:border-amber-500/50 bg-slate-900/40 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-full pointer-events-none"></div>
                    <div class="flex justify-between items-start mb-2">
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-bolt text-amber-400 text-xl animate-bounce"></i>
                            <h3 class="font-bold text-white text-lg">⚡ THUNDER SERVICE 12H</h3>
                        </div>
                        <span class="px-2.5 py-1 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">+30% VELOCITY</span>
                    </div>
                    <p class="text-xs text-slate-300 mb-3">
                        Ultra-express direct corridor routing. Guaranteed dawn/dusk landing for time-critical industrial freight.
                    </p>
                    <div class="flex items-center justify-between text-xs text-slate-400 font-mono pt-2 border-t border-slate-800">
                        <span>PRIORITY CORRIDOR</span>
                        <span class="text-amber-400 font-bold">SUNRISE/SUNSET SLA</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Freight Calculator Panel -->
        <main class="glass-panel rounded-2xl p-6 sm:p-8 relative">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center pb-6 border-b border-slate-800 gap-4">
                <div>
                    <div class="flex items-center space-x-3">
                        <div class="p-2 bg-cyan-500/10 rounded-lg text-cyber-cyan">
                            <i class="fa-solid fa-chart-line text-xl"></i>
                        </div>
                        <div>
                            <h2 class="text-xl sm:text-2xl font-bold text-white tracking-tight">Master B2B Freight Rate Engine</h2>
                            <p class="text-xs sm:text-sm text-slate-400">Instant contract quote calculation based on distance corridor & weight slab rules.</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center space-x-2">
                    <span class="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-semibold bg-slate-800 text-emerald-400 border border-emerald-500/30">
                        <i class="fa-solid fa-circle-check text-xs mr-1.5"></i> SAC 9965 RCM COMPLIANT
                    </span>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                <!-- Inputs Column -->
                <div class="lg:col-span-7 space-y-6">
                    
                    <!-- Corridor Matrix Dropdown -->
                    <div>
                        <label class="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex justify-between">
                            <span>Corridor / Route Matrix</span>
                            <span class="text-cyber-cyan font-mono text-xs">Select applicable distance range</span>
                        </label>
                        <div class="relative">
                            <select id="corridorSelect" onchange="calculateFreight()" 
                                    class="w-full bg-slate-900/90 border border-slate-700 focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan rounded-xl px-4 py-3.5 text-slate-100 font-sans text-sm sm:text-base appearance-none cursor-pointer outline-none transition">
                                <option value="intra1">INTRA-CITY 1 (4 – 5 KM)</option>
                                <option value="intra2">INTRA-CITY 2 (6 – 15 KM)</option>
                                <option value="intra3">INTRA-CITY 3 (16 – 30 KM)</option>
                                <option value="reg1a">REGIONAL 1A (31 – 45 KM)</option>
                                <option value="reg1b">REGIONAL 1B (46 – 60 KM)</option>
                                <option value="reg2a">REGIONAL 2A (61 – 80 KM)</option>
                                <option value="reg2b">REGIONAL 2B (81 – 100 KM)</option>
                                <option value="reg3a">REGIONAL 3A (101 – 150 KM)</option>
                                <option value="reg3b">REGIONAL 3B (151 – 200 KM)</option>
                                <option value="reg4a">REGIONAL 4A (201 – 250 KM)</option>
                                <option value="reg4b">REGIONAL 4B (251 – 300 KM)</option>
                                <option value="reg5a">REGIONAL 5A (301 – 400 KM)</option>
                                <option value="reg5b">REGIONAL 5B (401 – 500 KM)</option>
                                <option value="reg6a">REGIONAL 6A (501 – 600 KM)</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400">
                                <i class="fa-solid fa-chevron-down text-sm"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Gross Weight Section -->
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <label class="text-xs font-bold text-slate-300 uppercase tracking-wider">
                                Consignment Gross Weight (KG)
                            </label>
                            <span class="text-xs font-mono text-slate-400">Min: <strong class="text-white">1 KG</strong></span>
                        </div>

                        <!-- Numeric Input & Units -->
                        <div class="relative mb-3">
                            <input type="number" id="weightInput" value="100" min="1" max="10000" oninput="syncWeightFromInput()" 
                                   class="w-full bg-slate-900/90 border border-slate-700 focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan rounded-xl px-4 py-3.5 text-xl font-bold font-mono text-white outline-none transition pr-16" placeholder="Enter weight">
                            <div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-400 font-bold font-mono text-sm">
                                KG
                            </div>
                        </div>

                        <!-- Interactive Range Slider -->
                        <div class="space-y-1 mb-4">
                            <input type="range" id="weightSlider" min="1" max="1000" value="100" step="1" oninput="syncWeightFromSlider()" 
                                   class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyber-cyan">
                            <div class="flex justify-between text-[10px] font-mono text-slate-500">
                                <span>1 KG</span>
                                <span>250 KG</span>
                                <span>500 KG</span>
                                <span>750 KG</span>
                                <span>1000+ KG</span>
                            </div>
                        </div>

                        <!-- Quick Presets -->
                        <div class="flex flex-wrap gap-2">
                            <button onclick="setWeightPreset(10)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition">10kg</button>
                            <button onclick="setWeightPreset(25)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition">25kg</button>
                            <button onclick="setWeightPreset(50)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition">50kg</button>
                            <button onclick="setWeightPreset(100)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-950 text-cyber-cyan border border-cyan-700/50 transition">100kg</button>
                            <button onclick="setWeightPreset(250)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition">250kg</button>
                            <button onclick="setWeightPreset(500)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition">500kg</button>
                            <button onclick="setWeightPreset(750)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition">750kg</button>
                        </div>
                    </div>

                    <!-- Dynamic Slab Explanation Box -->
                    <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                        <div class="flex items-center space-x-2 text-xs font-bold text-cyber-cyan">
                            <i class="fa-solid fa-network-wired"></i>
                            <span>Dynamic Weight Slab Rules</span>
                        </div>
                        <p id="slabRuleDescription" class="text-xs text-slate-400 leading-relaxed font-sans">
                            Slabs covered: 1-10kg, 11-25kg, 26-50kg, 51-100kg, 101-250kg, 251-500kg. Conspiracies exceeding 500kg are billed at the 500kg base slab rate plus an incremental per-kg surcharge based on corridor bracket.
                        </p>
                    </div>

                    <!-- Green Levy Toggle -->
                    <div class="flex items-center justify-between p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
                        <div class="flex items-center space-x-3">
                            <input type="checkbox" id="esgCheck" onchange="calculateFreight()" class="w-4 h-4 rounded text-emerald-500 focus:ring-emerald-400 bg-slate-900 border-slate-700">
                            <div>
                                <label for="esgCheck" class="text-xs font-bold text-emerald-300 cursor-pointer">Include Voluntary ESG Clean Transit Levy (+2%)</label>
                                <p class="text-[11px] text-slate-400">Funds electric vehicle last-mile fleet expansion across district nodes.</p>
                            </div>
                        </div>
                        <i class="fa-solid fa-leaf text-emerald-400 text-lg"></i>
                    </div>

                </div>

                <!-- Output & Tradeoff Column -->
                <div class="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div id="quoteDisplayBox" class="glass-panel-glow rounded-2xl p-6 space-y-5 relative overflow-hidden flex-1 flex flex-col justify-between">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 rounded-bl-full pointer-events-none"></div>

                        <div class="space-y-4">
                            <div class="flex justify-between items-center border-b border-slate-800 pb-3">
                                <span class="text-xs font-mono uppercase tracking-widest text-slate-400">EXACT TARIFF QUOTE</span>
                                <span id="quoteBadgeMode" class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                    24H EXPRESS
                                </span>
                            </div>

                            <!-- Main Price Display -->
                            <div>
                                <div class="flex items-baseline space-x-1">
                                    <span class="text-2xl font-bold text-cyber-cyan font-mono">₹</span>
                                    <span id="finalPriceDisplay" class="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">550</span>
                                </div>
                                <div class="flex items-center space-x-2 mt-1">
                                    <i class="fa-solid fa-circle-check text-emerald-400 text-xs"></i>
                                    <span class="text-xs text-emerald-400 font-medium">Guaranteed Commercial Rate (All inclusive)</span>
                                </div>
                            </div>

                            <!-- Details Breakdown -->
                            <div class="space-y-2 text-xs font-mono pt-2 border-t border-slate-800/80">
                                <div class="flex justify-between text-slate-400">
                                    <span>Selected Corridor:</span>
                                    <span id="summaryCorridor" class="text-slate-200 font-bold">INTRA-CITY 1 (4 – 5 KM)</span>
                                </div>
                                <div class="flex justify-between text-slate-400">
                                    <span>Weight Bracket:</span>
                                    <span id="summaryBracket" class="text-slate-200 font-bold">51 – 100 KG</span>
                                </div>
                                <div id="excessRateRow" class="flex justify-between text-slate-400">
                                    <span>Excess Tariff Rate:</span>
                                    <span id="summaryExcessRate" class="text-cyber-cyan">₹3.50 / excess kg</span>
                                </div>
                            </div>

                            <!-- Option 4: Velocity vs Cost Impact Badge -->
                            <div id="impactBadgeBox" class="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/50 flex items-start space-x-3">
                                <i class="fa-solid fa-clock-rotate-left text-cyber-cyan text-base mt-0.5"></i>
                                <div>
                                    <div id="impactBadgeTitle" class="text-xs font-bold text-cyan-300">
                                        Standard Dispatch Schedule
                                    </div>
                                    <p id="impactBadgeText" class="text-[11px] text-slate-300 mt-0.5">
                                        Saves 12 to 24 Hours of Industrial Supply-Chain Downtime via guaranteed same-day collection.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="pt-4 space-y-2">
                            <button onclick="copyQuoteSummary()" 
                                    class="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition flex items-center justify-center space-x-2 shadow-lg">
                                <i class="fa-regular fa-copy text-sm"></i>
                                <span id="copyBtnText">COPY QUOTE SUMMARY</span>
                            </button>
                            <button onclick="openTariffModal()" 
                                    class="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-400 hover:text-white transition flex items-center justify-center space-x-2">
                                <i class="fa-solid fa-table"></i>
                                <span>View Full Rates Matrix</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Corporate Profile & Old City Fleet Vanguard Section -->
        <section id="vanguardSection" class="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden space-y-6">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-6 gap-4">
                <div>
                    <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        STRATEGIC GUARDIANSHIP & FLEET INTEGRATION
                    </span>
                    <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                        Corporate Profile & Old City Fleet Vanguard
                    </h2>
                    <p class="text-sm text-slate-400 mt-1 max-w-3xl">
                        Synthesizing enterprise last-mile technology with deep local logistics heritage across the Charminar and Old City corridors.
                    </p>
                </div>
                <div class="flex items-center space-x-3">
                    <div class="text-right font-mono text-xs text-slate-400">
                        <div>OPERATIONAL SITES</div>
                        <div class="text-cyber-cyan font-bold text-sm">HYDERABAD / TELANGANA HUB</div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Strategic Command Profile -->
                <div class="bg-slate-900/60 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyber-cyan mb-4">
                            <i class="fa-solid fa-building-columns text-lg"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-2">High Command Governance</h3>
                        <p class="text-xs text-slate-300 leading-relaxed">
                            Engineered under Master Logistics Framework guidelines with full RCM compliance (SAC 9965). Built to service heavy enterprise manufacturing, industrial spare dispatch, and high-frequency B2B corridor trades.
                        </p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                        REGISTRATION: UDYAM-TS-02-0359997
                    </div>
                </div>

                <!-- Old City Fleet Vanguard -->
                <div class="bg-slate-900/60 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                            <i class="fa-solid fa-motorcycle text-lg"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-2">Charminar Auto & Fleet Vanguard</h3>
                        <p class="text-xs text-slate-300 leading-relaxed">
                            Empowering 350+ traditional auto driver veterans and micro-fleet operators from Hyderabad's Old City districts. Integrated via real-time digital nodes to execute rapid 90-minute terminal evacuations.
                        </p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-emerald-400 flex justify-between">
                        <span>2-HR EVACUATION SLA</span>
                        <span>350+ ACTIVE VEHICLES</span>
                    </div>
                </div>

                <!-- Environmental Pledge -->
                <div class="bg-slate-900/60 p-5 rounded-xl border border-slate-800 flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                            <i class="fa-solid fa-bolt text-lg"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-2">Green Transit Initiative</h3>
                        <p class="text-xs text-slate-300 leading-relaxed">
                            Accelerating transition toward 100% electric 3-wheeler and 4-wheeler last-mile cargo units. Supported by user-contributed voluntary ESG levies to deploy fast-charging stations across regional hubs.
                        </p>
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-amber-300 flex justify-between">
                        <span>TARGET: 2028 NET-ZERO</span>
                        <span>EV FLEET 40%</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="glass-panel rounded-2xl p-6 text-center text-xs text-slate-400 space-y-3">
            <div class="flex flex-wrap items-center justify-center gap-6 text-slate-300">
                <span class="flex items-center space-x-2">
                    <i class="fa-solid fa-phone text-cyber-cyan"></i>
                    <span>+91 8340085989</span>
                </span>
                <span>•</span>
                <span class="flex items-center space-x-2">
                    <i class="fa-solid fa-envelope text-cyber-cyan"></i>
                    <span>tcc.cargodesk@gmail.com</span>
                </span>
                <span>•</span>
                <span class="flex items-center space-x-2">
                    <i class="fa-solid fa-id-card text-emerald-400"></i>
                    <span>MSME Registered: UDYAM-TS-02-0359997</span>
                </span>
            </div>
            <p class="text-slate-500 text-[11px]">
                Thunder Cargo Corridor (TCC) • Enterprise Last-Mile Logistics Infrastructure Framework
            </p>
        </footer>

    </div>

    <!-- Full Tariff Matrix Modal -->
    <div id="tariffModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md hidden">
        <div class="glass-panel w-full max-w-5xl max-h-[90vh] rounded-2xl flex flex-col overflow-hidden border border-cyan-500/30">
            <!-- Modal Header -->
            <div class="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
                <div>
                    <h3 class="text-xl font-bold text-white">Master B2B Freight Rate Chart Matrix</h3>
                    <p class="text-xs text-slate-400 mt-1">Official SAC 9965 Commercial Tariff Schedule (24H vs 12H Thunder Rates)</p>
                </div>
                <button onclick="closeTariffModal()" class="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>

            <!-- Modal Content Table -->
            <div class="p-6 overflow-y-auto space-y-4">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-xs">
                        <thead>
                            <tr class="border-b border-slate-700 bg-slate-900/90 text-slate-300 font-mono">
                                <th class="p-3">CORRIDOR / ROUTE</th>
                                <th class="p-3">1-10 KG</th>
                                <th class="p-3">11-25 KG</th>
                                <th class="p-3">26-50 KG</th>
                                <th class="p-3">51-100 KG</th>
                                <th class="p-3">101-250 KG</th>
                                <th class="p-3">251-500 KG</th>
                                <th class="p-3 text-cyber-cyan">EXCESS / KG (>500)</th>
                            </tr>
                        </thead>
                        <tbody id="modalTableBody" class="divide-y divide-slate-800 font-mono text-slate-300">
                            <!-- Populated dynamically via JS -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 border-t border-slate-800 bg-slate-900/80 flex justify-end">
                <button onclick="closeTariffModal()" class="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold">
                    Close Window
                </button>
            </div>
        </div>
    </div>

    <!-- Toast Feedback Banner -->
    <div id="toast" class="fixed bottom-6 right-6 z-50 glass-panel border border-cyber-cyan px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 text-sm text-white">
        <i class="fa-solid fa-circle-check text-emerald-400 text-lg"></i>
        <span id="toastMessage">Quote Summary Copied to Clipboard!</span>
    </div>

    <script>
        // Comprehensive B2B Master Tariff Matrix Data (24H Base Rates)
        const tariffMatrix = {
            intra1: { name: "INTRA-CITY 1 (4 – 5 KM)", slabs: [100, 175, 300, 550, 950, 1500], excess: 3.50 },
            intra2: { name: "INTRA-CITY 2 (6 – 15 KM)", slabs: [130, 225, 390, 715, 1235, 1950], excess: 4.55 },
            intra3: { name: "INTRA-CITY 3 (16 – 30 KM)", slabs: [160, 280, 480, 880, 1520, 2400], excess: 5.60 },
            reg1a:  { name: "REGIONAL 1A (31 – 45 KM)", slabs: [200, 350, 600, 1100, 1900, 3000], excess: 7.00 },
            reg1b:  { name: "REGIONAL 1B (46 – 60 KM)", slabs: [240, 420, 720, 1320, 2280, 3600], excess: 8.40 },
            reg2a:  { name: "REGIONAL 2A (61 – 80 KM)", slabs: [280, 490, 840, 1540, 2660, 4200], excess: 9.80 },
            reg2b:  { name: "REGIONAL 2B (81 – 100 KM)", slabs: [320, 560, 960, 1760, 3040, 4800], excess: 11.20 },
            reg3a:  { name: "REGIONAL 3A (101 – 150 KM)", slabs: [380, 665, 1140, 2090, 3610, 5700], excess: 13.30 },
            reg3b:  { name: "REGIONAL 3B (151 – 200 KM)", slabs: [440, 770, 1320, 2420, 4180, 6600], excess: 15.40 },
            reg4a:  { name: "REGIONAL 4A (201 – 250 KM)", slabs: [500, 875, 1500, 2750, 4750, 7500], excess: 17.50 },
            reg4b:  { name: "REGIONAL 4B (251 – 300 KM)", slabs: [560, 980, 1680, 3080, 5320, 8400], excess: 19.60 },
            reg5a:  { name: "REGIONAL 5A (301 – 400 KM)", slabs: [650, 1135, 1950, 3575, 6175, 9750], excess: 22.75 },
            reg5b:  { name: "REGIONAL 5B (401 – 500 KM)", slabs: [750, 1310, 2250, 4125, 7125, 11250], excess: 26.25 },
            reg6a:  { name: "REGIONAL 6A (501 – 600 KM)", slabs: [850, 1485, 2550, 4675, 8075, 12750], excess: 29.75 }
        };

        // Current Active Service Mode ('24H' or '12H')
        let currentMode = '24H';

        function updateISTClock() {
            const now = new Date();
            // Convert to IST (UTC+5:30)
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const istTime = new Date(utc + (3600000 * 5.5));

            let hours = istTime.getHours();
            const minutes = String(istTime.getMinutes()).padStart(2, '0');
            const seconds = String(istTime.getSeconds()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';

            hours = hours % 12;
            hours = hours ? hours : 12; // hour 0 is 12
            const strHours = String(hours).padStart(2, '0');

            document.getElementById('istClock').textContent = `${strHours}:${minutes}:${seconds} ${ampm} IST`;
        }
        setInterval(updateISTClock, 1000);
        updateISTClock();

        function selectServiceMode(mode) {
            currentMode = mode;
            const btn24 = document.getElementById('service24h');
            const btn12 = document.getElementById('service12h');
            const badgeMode = document.getElementById('quoteBadgeMode');
            const slaText = document.getElementById('slaStatusText');

            if (mode === '24H') {
                btn24.className = "glass-panel p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 border-cyan-500 bg-cyan-950/20 relative overflow-hidden group";
                btn12.className = "glass-panel p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 border-slate-800 hover:border-amber-500/50 bg-slate-900/40 relative overflow-hidden group";
                badgeMode.textContent = "24H EXPRESS";
                badgeMode.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30";
                
                slaText.innerHTML = "🟢 LIVE SLA: 4-HR INTRA-CITY / 24-HR REGIONAL DISPATCH";
                slaText.className = "font-medium text-emerald-300";
            } else {
                btn12.className = "glass-panel p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 border-amber-500 bg-amber-950/20 relative overflow-hidden group";
                btn24.className = "glass-panel p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 border-slate-800 hover:border-cyan-500/50 bg-slate-900/40 relative overflow-hidden group";
                badgeMode.textContent = "⚡ 12H THUNDER";
                badgeMode.className = "px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30";
                
                slaText.innerHTML = "⚡ THUNDER SLA: NEXT SUNRISE DEPARTURE IN 03:42:15 • GUARANTEED DUSK LANDING";
                slaText.className = "font-medium text-amber-300";
            }

            calculateFreight();
        }

        function syncWeightFromInput() {
            const val = document.getElementById('weightInput').value;
            document.getElementById('weightSlider').value = val || 1;
            calculateFreight();
        }

        function syncWeightFromSlider() {
            const val = document.getElementById('weightSlider').value;
            document.getElementById('weightInput').value = val;
            calculateFreight();
        }

        function setWeightPreset(kg) {
            document.getElementById('weightInput').value = kg;
            document.getElementById('weightSlider').value = kg;
            calculateFreight();
        }

        function calculateFreight() {
            const corridorKey = document.getElementById('corridorSelect').value;
            const weight = parseFloat(document.getElementById('weightInput').value) || 1;
            const esgChecked = document.getElementById('esgCheck').checked;
            const corridor = tariffMatrix[corridorKey];

            let baseCost = 0;
            let bracketText = "";

            if (weight <= 10) {
                baseCost = corridor.slabs[0];
                bracketText = "1 – 10 KG";
            } else if (weight <= 25) {
                baseCost = corridor.slabs[1];
                bracketText = "11 – 25 KG";
            } else if (weight <= 50) {
                baseCost = corridor.slabs[2];
                bracketText = "26 – 50 KG";
            } else if (weight <= 100) {
                baseCost = corridor.slabs[3];
                bracketText = "51 – 100 KG";
            } else if (weight <= 250) {
                baseCost = corridor.slabs[4];
                bracketText = "101 – 250 KG";
            } else if (weight <= 500) {
                baseCost = corridor.slabs[5];
                bracketText = "251 – 500 KG";
            } else {
                const excessKg = weight - 500;
                baseCost = corridor.slabs[5] + (excessKg * corridor.excess);
                bracketText = `>500 KG (${weight} KG Total)`;
            }

            // Apply 12H Thunder Premium (+30%) if active
            let totalCost = baseCost;
            if (currentMode === '12H') {
                totalCost = totalCost * 1.30;
            }

            // Apply Voluntary ESG Levy (+2%)
            if (esgChecked) {
                totalCost = totalCost * 1.02;
            }

            // Update UI
            document.getElementById('finalPriceDisplay').textContent = Math.round(totalCost).toLocaleString('en-IN');
            document.getElementById('summaryCorridor').textContent = corridor.name;
            document.getElementById('summaryBracket').textContent = bracketText;
            document.getElementById('summaryExcessRate').textContent = `₹${corridor.excess.toFixed(2)} / excess kg`;

            // Update Dynamic Downtime Saved Badge (Option 4)
            const titleEl = document.getElementById('impactBadgeTitle');
            const textEl = document.getElementById('impactBadgeText');

            if (currentMode === '12H') {
                titleEl.textContent = "⚡ Thunder Velocity Optimization Active";
                titleEl.className = "text-xs font-bold text-amber-300";
                textEl.textContent = `Saves 12 to 36 Hours of Critical Supply-Chain Downtime compared to standard regional routing.`;
            } else {
                titleEl.textContent = "Standard Express Dispatch Schedule";
                titleEl.className = "text-xs font-bold text-cyan-300";
                textEl.textContent = `Saves 12 to 24 Hours of Industrial Downtime via guaranteed terminal consolidation.`;
            }
        }

        function copyQuoteSummary() {
            const price = document.getElementById('finalPriceDisplay').textContent;
            const corridor = document.getElementById('summaryCorridor').textContent;
            const weight = document.getElementById('weightInput').value;
            const mode = currentMode === '12H' ? '12H Thunder Ultra-Express' : '24H Standard Express';

            const summaryText = `[TCC FREIGHT QUOTE]\nCorridor: ${corridor}\nMode: ${mode}\nGross Weight: ${weight} KG\nTotal Estimated Rate: ₹${price} (Incl. SAC 9965 Taxes)\nMaster Dispatch Desk: +91 8340085989`;

            // Copy to clipboard fallback
            const dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = summaryText;
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);

            showToast("Quote Summary Copied to Clipboard!");
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toastMessage').textContent = msg;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        function openTariffModal() {
            const tbody = document.getElementById('modalTableBody');
            tbody.innerHTML = "";

            Object.keys(tariffMatrix).forEach(key => {
                const item = tariffMatrix[key];
                const tr = document.createElement('tr');
                tr.className = "hover:bg-slate-800/50 transition";
                
                let modeMultiplier = currentMode === '12H' ? 1.30 : 1.0;
                
                tr.innerHTML = `
                    <td class="p-3 font-bold text-white">${item.name}</td>
                    <td class="p-3">₹${Math.round(item.slabs[0] * modeMultiplier)}</td>
                    <td class="p-3">₹${Math.round(item.slabs[1] * modeMultiplier)}</td>
                    <td class="p-3">₹${Math.round(item.slabs[2] * modeMultiplier)}</td>
                    <td class="p-3">₹${Math.round(item.slabs[3] * modeMultiplier)}</td>
                    <td class="p-3">₹${Math.round(item.slabs[4] * modeMultiplier)}</td>
                    <td class="p-3">₹${Math.round(item.slabs[5] * modeMultiplier)}</td>
                    <td class="p-3 text-cyber-cyan font-bold">₹${(item.excess * modeMultiplier).toFixed(2)}</td>
                `;
                tbody.appendChild(tr);
            });

            document.getElementById('tariffModal').classList.remove('hidden');
        }

        function closeTariffModal() {
            document.getElementById('tariffModal').classList.add('hidden');
        }

        function scrollToVanguard() {
            document.getElementById('vanguardSection').scrollIntoView({ behavior: 'smooth' });
        }

        // Falling Droplet Light-Beam Particle System
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');

        let particles = [];
        const particleCount = 45;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Droplet {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * -canvas.height;
                this.length = Math.random() * 40 + 15;
                this.speed = Math.random() * 3 + 2;
                this.opacity = Math.random() * 0.4 + 0.1;
                this.width = Math.random() * 1.5 + 0.5;
                this.color = Math.random() > 0.3 ? '#06b6d4' : '#10b981';
            }

            update() {
                this.y += this.speed;
                if (this.y > canvas.height + this.length) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y - this.length);
                gradient.addColorStop(0, this.color);
                gradient.addColorStop(1, 'transparent');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = this.width;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y - this.length);
                ctx.stroke();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Droplet());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        window.onload = function() {
            animateParticles();
            calculateFreight();
        };
    </script>
</body>
</html>
```
