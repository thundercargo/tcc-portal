```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thunder Cargo Corridor (TCC) - Regional Terminal Operations & Facilitation Division</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts: Inter & JetBrains Mono -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        obsidian: '#090D14',
                        slateDark: '#121824',
                        cardBg: 'rgba(18, 24, 36, 0.75)',
                        cyanGlow: '#00F0FF',
                        thunderGold: '#FFD700',
                        emeraldNeon: '#00FF87',
                        amberGlow: '#FF9900'
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    }
                }
            }
        }
    </script>

    <style>
        body {
            background-color: #06090F;
            color: #E2E8F0;
            font-family: 'Inter', sans-serif;
            background-image: 
                radial-gradient(circle at 15% 15%, rgba(0, 240, 255, 0.05) 0%, transparent 40%),
                radial-gradient(circle at 85% 60%, rgba(255, 215, 0, 0.04) 0%, transparent 45%),
                radial-gradient(circle at 50% 90%, rgba(0, 255, 135, 0.03) 0%, transparent 50%);
            background-attachment: fixed;
        }

        .glass-panel {
            background: rgba(15, 23, 42, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }

        .glass-card-active-cyan {
            background: rgba(0, 240, 255, 0.06);
            border: 2px solid #00F0FF;
            box-shadow: 0 0 25px rgba(0, 240, 255, 0.25);
        }

        .glass-card-active-gold {
            background: rgba(255, 215, 0, 0.08);
            border: 2px solid #FFD700;
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.3);
        }

        .text-glow-cyan {
            text-shadow: 0 0 12px rgba(0, 240, 255, 0.6);
        }

        .text-glow-gold {
            text-shadow: 0 0 12px rgba(255, 215, 0, 0.6);
        }

        .pulse-slow {
            animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #090D14;
        }
        ::-webkit-scrollbar-thumb {
            background: #1E293B;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #00F0FF;
        }

        /* Custom Range Slider */
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
            background: #1E293B;
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        input[type=range]::-webkit-slider-thumb {
            height: 22px;
            width: 22px;
            border-radius: 50%;
            background: #00F0FF;
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -7px;
            box-shadow: 0 0 15px #00F0FF;
        }
        .thunder-mode input[type=range]::-webkit-slider-thumb {
            background: #FFD700;
            box-shadow: 0 0 15px #FFD700;
        }
    </style>
</head>
<body class="min-h-screen flex flex-col justify-between selection:bg-cyan-500 selection:text-black">

    <!-- TOP COMMAND HEADER -->
    <header class="sticky top-0 z-40 border-b border-slate-800/80 glass-panel bg-obsidian/90">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
            
            <!-- Logo & Division Title -->
            <div class="flex items-center space-x-4">
                <div class="relative">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-yellow-400 p-0.5 shadow-lg shadow-cyan-500/20">
                        <div class="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                            <i class="fa-solid fa-bolt text-yellow-400 text-2xl animate-pulse"></i>
                        </div>
                    </div>
                    <span class="absolute -top-1 -right-1 flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                </div>
                <div>
                    <div class="flex items-center space-x-2">
                        <h1 class="font-extrabold text-xl tracking-wider text-white font-mono">TCC<span class="text-cyan-400">.OPS</span></h1>
                        <span class="bg-slate-800 text-slate-300 text-[10px] uppercase font-mono px-2 py-0.5 rounded border border-slate-700 tracking-widest">DIV-01</span>
                    </div>
                    <p class="text-xs text-slate-400 font-medium">Thunder Cargo Corridor • Regional Terminal Operations & Facilitation</p>
                </div>
            </div>

            <!-- Real-Time Clock & SLA Status Pill Engine (Option 1) -->
            <div class="flex flex-wrap items-center gap-3">
                <!-- Clock Badge -->
                <div class="hidden lg:flex items-center space-x-2 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg font-mono text-xs text-slate-300">
                    <i class="fa-regular fa-clock text-cyan-400"></i>
                    <span id="istClock" class="font-bold">IST 00:00:00</span>
                </div>

                <!-- SLA Status Banner -->
                <div id="slaPill" class="px-4 py-2 rounded-xl border font-mono text-xs font-semibold flex items-center space-x-2.5 transition-all duration-300 bg-emerald-950/40 border-emerald-500/40 text-emerald-300 shadow-lg shadow-emerald-900/20">
                    <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span id="slaPillText">🟢 LIVE SLA: 4-HR LOCAL / 24-HR REGIONAL DISPATCH ACTIVE</span>
                </div>

                <!-- Matrix Button -->
                <button onclick="toggleTariffModal()" class="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-cyan-400/50 px-3 py-2 rounded-xl text-xs font-mono transition-all flex items-center space-x-2">
                    <i class="fa-solid fa-table-cells text-cyan-400"></i>
                    <span>TARIFF MATRIX</span>
                </button>
            </div>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 flex-grow w-full">

        <!-- OPTION 2: ENTERPRISE DUAL-ENGINE CONTROL BAR -->
        <section>
            <div class="flex flex-col md:flex-row items-center justify-between mb-4">
                <div>
                    <h2 class="text-sm font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
                        <i class="fa-solid fa-sliders"></i> Dual-Engine Dispatch Mode
                    </h2>
                    <p class="text-xs text-slate-400 mt-1">Select dispatch priority velocity line-haul tier for freight calculation.</p>
                </div>
                <div class="text-xs font-mono text-slate-400 mt-2 md:mt-0">
                    <span class="text-emerald-400 font-bold">100% Guaranteed</span> Clearance at Consolidation Terminals
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <!-- Card A: Standard 24H Express -->
                <div id="card24H" onclick="setServiceMode('24H')" class="glass-panel p-5 rounded-2xl cursor-pointer transition-all duration-300 glass-card-active-cyan relative overflow-hidden group">
                    <div class="absolute -right-8 -bottom-8 text-slate-800/20 group-hover:text-cyan-500/10 text-8xl transition-all pointer-events-none">
                        <i class="fa-solid fa-truck-ramp-box"></i>
                    </div>
                    <div class="flex items-start justify-between">
                        <div class="flex items-center space-x-3">
                            <div class="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl text-cyan-400">
                                <i class="fa-solid fa-truck-fast text-xl"></i>
                            </div>
                            <div>
                                <div class="flex items-center space-x-2">
                                    <h3 class="text-base font-bold text-white tracking-wide">STANDARD 24H EXPRESS</h3>
                                    <span class="bg-cyan-950 text-cyan-300 border border-cyan-800 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">STANDARD SLA</span>
                                </div>
                                <p class="text-xs text-slate-400 mt-1">Regular Freight • 4-Hour Station Clearance • Baseline Commercial Tariff</p>
                            </div>
                        </div>
                        <input type="radio" name="serviceEngine" id="radio24H" checked class="mt-1 accent-cyan-400 h-4 w-4">
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                        <span class="text-slate-400">Guaranteed Clearance: <strong class="text-white">Under 120 Mins</strong></span>
                        <span class="text-cyan-400 font-semibold">Baseline Rate Index (1.0x)</span>
                    </div>
                </div>

                <!-- Card B: 12H Thunder Ultra-Express -->
                <div id="card12H" onclick="setServiceMode('12H')" class="glass-panel p-5 rounded-2xl cursor-pointer transition-all duration-300 border border-slate-800 hover:border-yellow-500/50 relative overflow-hidden group">
                    <div class="absolute -right-8 -bottom-8 text-slate-800/20 group-hover:text-yellow-500/10 text-8xl transition-all pointer-events-none">
                        <i class="fa-solid fa-bolt-lightning"></i>
                    </div>
                    <div class="flex items-start justify-between">
                        <div class="flex items-center space-x-3">
                            <div class="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400">
                                <i class="fa-solid fa-bolt text-xl"></i>
                            </div>
                            <div>
                                <div class="flex items-center space-x-2">
                                    <h3 class="text-base font-bold text-white tracking-wide">⚡ THUNDER 12H ULTRA-EXPRESS</h3>
                                    <span class="bg-yellow-950 text-yellow-300 border border-yellow-700 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">PRIORITY HIGH-VELOCITY</span>
                                </div>
                                <p class="text-xs text-slate-400 mt-1">Priority Industrial Line-haul • Loaded at Dawn, Landed by Dusk • 30% Velocity Premium</p>
                            </div>
                        </div>
                        <input type="radio" name="serviceEngine" id="radio12H" class="mt-1 accent-yellow-400 h-4 w-4">
                    </div>
                    <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                        <span class="text-slate-400">Guaranteed Clearance: <strong class="text-yellow-400">Immediate Sunrise Dock Pass</strong></span>
                        <span class="text-yellow-400 font-semibold">+30% Velocity Index (Priority Train/Bus)</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- OPTION 4 & CALCULATOR ENGINE: VELOCITY VS COST COMPARISON & TARIFF QUOTE -->
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <!-- Left Controls: Route & Consignment Specifications -->
            <div class="lg:col-span-7 space-y-6">
                <div class="glass-panel p-6 rounded-2xl border border-slate-800 relative">
                    <div class="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                        <h3 class="text-base font-bold text-white flex items-center gap-2">
                            <i class="fa-solid fa-calculator text-cyan-400"></i> Dispatch Parameters & Corridor Selection
                        </h3>
                        <span id="activeTierBadge" class="text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">MODE: STANDARD 24H</span>
                    </div>

                    <div class="space-y-5">
                        <!-- Sector Type Selector -->
                        <div>
                            <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Freight Sector Type</label>
                            <div class="grid grid-cols-2 gap-3">
                                <button type="button" id="btnIntra" onclick="setSector('INTRA')" class="py-2.5 px-4 rounded-xl border text-xs font-mono font-semibold transition-all bg-cyan-500/20 border-cyan-500 text-cyan-300">
                                    <i class="fa-solid fa-city mr-1.5"></i> INTRA-CITY (1 - 3)
                                </button>
                                <button type="button" id="btnRegional" onclick="setSector('REGIONAL')" class="py-2.5 px-4 rounded-xl border text-xs font-mono font-semibold transition-all bg-slate-900 border-slate-700 text-slate-400 hover:text-white">
                                    <i class="fa-solid fa-route mr-1.5"></i> REGIONAL CORRIDORS (1A - 6B)
                                </button>
                            </div>
                        </div>

                        <!-- Specific Corridor Dropdown -->
                        <div>
                            <label class="block text-xs font-mono uppercase text-slate-400 mb-2">Select Corridor Node</label>
                            <select id="corridorSelect" onchange="calculateTariff()" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 font-mono focus:border-cyan-400 focus:outline-none transition-all">
                                <!-- Populated dynamically by JS -->
                            </select>
                            <p id="corridorDesc" class="text-[11px] text-slate-500 mt-1 font-mono">Distance-rated rail & express highway route.</p>
                        </div>

                        <!-- Consignment Gross Weight Selector -->
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <label class="block text-xs font-mono uppercase text-slate-400">Consignment Gross Weight (KG)</label>
                                <span class="text-xs font-mono text-cyan-400 font-bold" id="weightDisplay">100 KG</span>
                            </div>

                            <!-- Preset Buttons -->
                            <div class="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-4">
                                <button type="button" onclick="setWeight(10)" class="weight-btn py-1.5 px-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 transition-all">10kg</button>
                                <button type="button" onclick="setWeight(25)" class="weight-btn py-1.5 px-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 transition-all">25kg</button>
                                <button type="button" onclick="setWeight(50)" class="weight-btn py-1.5 px-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 transition-all">50kg</button>
                                <button type="button" onclick="setWeight(100)" class="weight-btn py-1.5 px-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded-lg text-xs font-mono font-bold transition-all">100kg</button>
                                <button type="button" onclick="setWeight(250)" class="weight-btn py-1.5 px-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 transition-all">250kg</button>
                                <button type="button" onclick="setWeight(500)" class="weight-btn py-1.5 px-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 transition-all">500kg</button>
                                <button type="button" onclick="setWeight(750)" class="weight-btn py-1.5 px-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 transition-all">750kg</button>
                            </div>

                            <!-- Interactive Weight Range Slider (Option 4 Slider Core) -->
                            <input type="range" id="weightSlider" min="5" max="1000" step="5" value="100" oninput="onSliderChange(this.value)" class="w-full">
                            
                            <!-- Manual Input Fallback -->
                            <div class="mt-3 flex items-center justify-between bg-slate-950/80 border border-slate-800 rounded-xl px-3 py-2">
                                <span class="text-xs text-slate-400 font-mono">Custom Gross Payload Input:</span>
                                <div class="flex items-center space-x-1">
                                    <input type="number" id="manualWeight" value="100" min="1" max="5000" oninput="onManualWeight(this.value)" class="w-20 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs text-right font-mono text-white focus:outline-none focus:border-cyan-400">
                                    <span class="text-xs text-slate-400 font-mono">KG</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Right Live Quote Box & Side-by-Side Comparison (Option 4) -->
            <div class="lg:col-span-5 flex flex-col justify-between">
                <div class="glass-panel p-6 rounded-2xl border border-slate-800 relative h-full flex flex-col justify-between">
                    
                    <div>
                        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
                            <span class="text-xs font-mono text-slate-400 uppercase tracking-widest">OFFICIAL TARIFF QUOTE</span>
                            <span class="bg-emerald-950/80 text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-800/80">SAC 9965 COMPLIANT</span>
                        </div>

                        <!-- Big Dynamic Price Display -->
                        <div class="my-5 text-center py-4 bg-slate-950/60 rounded-xl border border-slate-800/80 relative">
                            <div class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1" id="selectedModeLabel">Active Rate: Standard 24H SLA</div>
                            <div class="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white" id="mainQuoteAmount">₹ 1,420</div>
                            <div class="text-[11px] font-mono text-cyan-400 mt-1" id="ratePerKgSub flex items-center justify-center gap-1">
                                <span id="unitRateText">₹ 14.20 per kg</span> • Ground Terminal Clearance Included
                            </div>
                        </div>

                        <!-- Side-By-Side Rate Comparison Table (Option 4 Core) -->
                        <div class="space-y-2 text-xs font-mono mb-4">
                            <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                                <div class="flex items-center space-x-2">
                                    <i class="fa-solid fa-clock-rotate-left text-cyan-400"></i>
                                    <span class="text-slate-300">Standard 24H Tariff:</span>
                                </div>
                                <span class="font-bold text-white" id="rate24HDisplay">₹ 1,420</span>
                            </div>

                            <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                                <div class="flex items-center space-x-2">
                                    <i class="fa-solid fa-bolt text-yellow-400"></i>
                                    <span class="text-slate-300">⚡ Thunder 12H Priority:</span>
                                </div>
                                <span class="font-bold text-yellow-400" id="rate12HDisplay">₹ 1,846</span>
                            </div>
                        </div>

                        <!-- Time Saved Industrial Downtime Badge (Option 4 Requirement) -->
                        <div class="p-3 rounded-xl bg-gradient-to-r from-yellow-950/30 to-amber-950/30 border border-yellow-500/30 text-yellow-300 text-xs font-mono mb-4 flex items-center space-x-3">
                            <i class="fa-solid fa-shield-halved text-yellow-400 text-base"></i>
                            <div>
                                <div class="font-bold uppercase tracking-wider text-[11px]">Downtime Avoidance Index</div>
                                <div class="text-slate-300 text-[11px]" id="downtimeText">Saves 12 to 36 Hours of Industrial Line Stoppage</div>
                            </div>
                        </div>

                        <!-- Green Offset & RCM Compliance -->
                        <div class="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-400">
                            <div class="bg-slate-900/60 p-2 rounded border border-slate-800 flex items-center gap-1.5">
                                <i class="fa-solid fa-leaf text-emerald-400"></i>
                                <span>CO2 Offset: <strong class="text-slate-200" id="co2Val">14.2 kg</strong></span>
                            </div>
                            <div class="bg-slate-900/60 p-2 rounded border border-slate-800 flex items-center gap-1.5">
                                <i class="fa-solid fa-file-invoice text-cyan-400"></i>
                                <span>RCM / MSME Udyam Active</span>
                            </div>
                        </div>
                    </div>

                    <!-- Copy Quote CTA -->
                    <button onclick="copyQuoteSummary()" class="mt-5 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black font-mono text-xs rounded-xl uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 active:scale-95">
                        <i class="fa-regular fa-copy"></i>
                        <span>Copy Official Dispatch Quote</span>
                    </button>

                </div>
            </div>

        </section>

        <!-- CORPORATE PROFILE: THE GUARDIANSHIP & NETWORK VANGUARD -->
        <section class="glass-panel p-8 rounded-3xl border border-slate-800 relative overflow-hidden">
            <!-- Subtle Overlay Graphics -->
            <div class="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div class="relative z-10 space-y-8">
                
                <!-- Section Header -->
                <div class="border-b border-slate-800/80 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div class="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold tracking-widest uppercase mb-2">
                            <i class="fa-solid fa-shield-cat"></i>
                            <span>CORPORATE CHARTER & LAST-MILE GUARDIANSHIP</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">THE TCC GUARDIANSHIP & NETWORK VANGUARD</h2>
                        <p class="text-sm text-slate-400 mt-1 max-w-3xl">Commanding regional cargo lines with ancient tactical discipline and agile urban ground fleets.</p>
                    </div>
                    <div class="flex items-center space-x-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl font-mono text-xs text-yellow-400">
                        <i class="fa-solid fa-crown"></i>
                        <span>CHIEF COMMAND & LAST-MILE ALLIANCE</span>
                    </div>
                </div>

                <!-- Strategic Guardianship & Old City Fleet Dual Column -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <!-- Strategic Command Pillar -->
                    <div class="space-y-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800/80">
                        <div class="flex items-center space-x-3 text-cyan-400">
                            <div class="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
                                <i class="fa-solid fa-chess-knight text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg text-white">Chief Strategic Council & Guardianship</h3>
                        </div>
                        <p class="text-xs text-slate-300 leading-relaxed">
                            Under the strategic guardianship of our Chief Commanders, Thunder Cargo Corridor integrates timeless doctrines of strategy into modern supply chain operations:
                        </p>
                        <ul class="space-y-2.5 text-xs text-slate-400 font-mono">
                            <li class="flex items-start space-x-2">
                                <span class="text-cyan-400 font-bold">1.</span>
                                <span><strong class="text-slate-200">Chanakya (Arthashastra):</strong> Zero-leakage tariff economics, strict fiscal auditing, and state-grade freight security.</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-cyan-400 font-bold">2.</span>
                                <span><strong class="text-slate-200">Sun Tzu (Art of War):</strong> Rapid positioning, line-haul velocity, and defeating delays before they manifest.</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-cyan-400 font-bold">3.</span>
                                <span><strong class="text-slate-200">Genghis Khan:</strong> Relentless courier mobility, decentralized relay hubs, and all-weather operational continuity.</span>
                            </li>
                            <li class="flex items-start space-x-2">
                                <span class="text-cyan-400 font-bold">4.</span>
                                <span><strong class="text-slate-200">Marcus Aurelius:</strong> Stoic SLA commitment, immutable public trust, and operational integrity under crisis.</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Old City Fleet Vanguard Pillar -->
                    <div class="space-y-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800/80">
                        <div class="flex items-center space-x-3 text-yellow-400">
                            <div class="p-2.5 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                                <i class="fa-solid fa-motorcycle text-xl"></i>
                            </div>
                            <h3 class="font-bold text-lg text-white">The Old City (Charminar) Network Fleet</h3>
                        </div>
                        <p class="text-xs text-slate-300 leading-relaxed">
                            The true backbone of TCC's rapid last-mile clearance rests upon the veteran auto drivers, cargo captains, and delivery boys of Hyderabad's historic Old City corridor:
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
                                <div class="text-yellow-400 font-bold mb-0.5"><i class="fa-solid fa-map-location-dot"></i> Unrivaled Terrain Mastery</div>
                                <div class="text-slate-400 text-[11px]">Navigating dense urban arterial lanes around Charminar, Mozamjahi, and Secunderabad with precision timing.</div>
                            </div>
                            <div class="p-3 bg-slate-950 rounded-xl border border-slate-800">
                                <div class="text-emerald-400 font-bold mb-0.5"><i class="fa-solid fa-stopwatch"></i> 2-Hour Dock Clearance</div>
                                <div class="text-slate-400 text-[11px]">Immediate platform evacuation ensuring cargo never stalls at regional rail or bus terminals.</div>
                            </div>
                        </div>
                        <p class="text-xs text-slate-400 italic bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/50">
                            "Empowering local transport guilds with technology while maintaining 100% SLA reliability across South Regional Corridors."
                        </p>
                    </div>

                </div>

                <!-- Live Regional Metrics Counters -->
                <div class="pt-4 border-t border-slate-800/80">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono">
                        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                            <div class="text-2xl sm:text-3xl font-black text-cyan-400">03</div>
                            <div class="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Primary Terminals</div>
                            <div class="text-[9px] text-slate-500">HYD • TPT • VJA</div>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                            <div class="text-2xl sm:text-3xl font-black text-yellow-400">175+</div>
                            <div class="text-[11px] text-slate-400 uppercase tracking-wider mt-1">District Hubs</div>
                            <div class="text-[9px] text-slate-500">AP & Telangana Grid</div>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                            <div class="text-2xl sm:text-3xl font-black text-emerald-400">355+</div>
                            <div class="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Express Nodes</div>
                            <div class="text-[9px] text-slate-500">Auto & Fleet Relay</div>
                        </div>
                        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                            <div class="text-2xl sm:text-3xl font-black text-white">&lt; 120m</div>
                            <div class="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Platform Evacuation</div>
                            <div class="text-[9px] text-slate-500">Guaranteed SLA</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <!-- MASTER TARIFF MATRIX MODAL -->
    <div id="tariffModal" class="fixed inset-0 z-50 hidden bg-obsidian/80 backdrop-blur-md flex items-center justify-center p-4">
        <div class="glass-panel w-full max-w-4xl max-h-[90vh] rounded-3xl border border-slate-700 flex flex-col overflow-hidden shadow-2xl">
            
            <!-- Modal Header -->
            <div class="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/90">
                <div class="flex items-center space-x-3">
                    <i class="fa-solid fa-table-list text-cyan-400 text-xl"></i>
                    <div>
                        <h3 class="font-bold text-base text-white font-mono">MASTER B2B TARIFF MATRIX (SLA 24H vs 12H THUNDER)</h3>
                        <p class="text-xs text-slate-400">Official Facilitation Rates across Intra-City and Regional Lines</p>
                    </div>
                </div>
                <button onclick="toggleTariffModal()" class="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800 border border-slate-700">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>

            <!-- Modal Content Table -->
            <div class="p-6 overflow-y-auto space-y-6 text-xs font-mono">
                <div>
                    <h4 class="text-cyan-400 font-bold mb-3 uppercase tracking-wider text-xs">Sector 1: Intra-City Operations</h4>
                    <div class="overflow-x-auto rounded-xl border border-slate-800">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-900 text-slate-300 border-b border-slate-800">
                                    <th class="p-3">Zone Code</th>
                                    <th class="p-3">Route Corridor</th>
                                    <th class="p-3">Standard 24H (/kg)</th>
                                    <th class="p-3 text-yellow-400">⚡ Thunder 12H (/kg)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800 text-slate-300">
                                <tr><td class="p-3">INTRA-1</td><td class="p-3">Primary Consolidation Terminal Loop</td><td class="p-3">₹ 6.50</td><td class="p-3 text-yellow-400 font-bold">₹ 8.45</td></tr>
                                <tr><td class="p-3">INTRA-2</td><td class="p-3">Metropolitan Outer Ring Feeder</td><td class="p-3">₹ 8.20</td><td class="p-3 text-yellow-400 font-bold">₹ 10.66</td></tr>
                                <tr><td class="p-3">INTRA-3</td><td class="p-3">Extended Industrial Suburb Belt</td><td class="p-3">₹ 10.50</td><td class="p-3 text-yellow-400 font-bold">₹ 13.65</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h4 class="text-cyan-400 font-bold mb-3 uppercase tracking-wider text-xs">Sector 2: Regional Express Corridors (Up to 600 KM)</h4>
                    <div class="overflow-x-auto rounded-xl border border-slate-800">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-900 text-slate-300 border-b border-slate-800">
                                    <th class="p-3">Code</th>
                                    <th class="p-3">Corridor Line</th>
                                    <th class="p-3">Distance</th>
                                    <th class="p-3">Standard 24H (/kg)</th>
                                    <th class="p-3 text-yellow-400">⚡ Thunder 12H (/kg)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-800 text-slate-300">
                                <tr><td class="p-3">REG-1A</td><td class="p-3">Hyderabad ➔ Vijayawada Express</td><td class="p-3">275 KM</td><td class="p-3">₹ 12.50</td><td class="p-3 text-yellow-400 font-bold">₹ 16.25</td></tr>
                                <tr><td class="p-3">REG-2B</td><td class="p-3">Hyderabad ➔ Tirupati Line-haul</td><td class="p-3">550 KM</td><td class="p-3">₹ 18.00</td><td class="p-3 text-yellow-400 font-bold">₹ 23.40</td></tr>
                                <tr><td class="p-3">REG-3B</td><td class="p-3">Secunderabad ➔ Warangal Industrial</td><td class="p-3">150 KM</td><td class="p-3">₹ 14.20</td><td class="p-3 text-yellow-400 font-bold">₹ 18.46</td></tr>
                                <tr><td class="p-3">REG-4A</td><td class="p-3">Vijayawada ➔ Visakhapatnam Port Line</td><td class="p-3">350 KM</td><td class="p-3">₹ 15.80</td><td class="p-3 text-yellow-400 font-bold">₹ 20.54</td></tr>
                                <tr><td class="p-3">REG-5B</td><td class="p-3">Tirupati ➔ Bengaluru Border Node</td><td class="p-3">250 KM</td><td class="p-3">₹ 16.50</td><td class="p-3 text-yellow-400 font-bold">₹ 21.45</td></tr>
                                <tr><td class="p-3">REG-6B</td><td class="p-3">Hyderabad ➔ Kurnool / Rayalaseema</td><td class="p-3">210 KM</td><td class="p-3">₹ 13.90</td><td class="p-3 text-yellow-400 font-bold">₹ 18.07</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="p-4 border-t border-slate-800 bg-slate-900/90 text-right">
                <button onclick="toggleTariffModal()" class="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-mono">Close Table</button>
            </div>
        </div>
    </div>

    <!-- FOOTER -->
    <footer class="border-t border-slate-800/80 bg-obsidian py-6 mt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
            <div class="flex items-center space-x-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Thunder Cargo Corridor (TCC) • Guardianship Strategic Command</span>
            </div>
            <div>
                <span>All Railway & Express Terminal Facilitation Terms SAC 9965 Active</span>
            </div>
        </div>
    </footer>

    <!-- CORE APPLICATION JAVASCRIPT LOGIC -->
    <script>
        // --- DATA STRUCTURE: CORRIDOR TARIFF MATRIX ---
        const CORRIDORS = {
            INTRA: [
                { id: 'INTRA-1', name: 'Primary Consolidation Terminal Loop', distance: '15 KM Local', rate24H: 6.50 },
                { id: 'INTRA-2', name: 'Metropolitan Outer Ring Feeder', distance: '45 KM Local', rate24H: 8.20 },
                { id: 'INTRA-3', name: 'Extended Industrial Suburb Belt', distance: '75 KM Outer', rate24H: 10.50 }
            ],
            REGIONAL: [
                { id: 'REG-1A', name: 'Hyderabad ➔ Vijayawada Express', distance: '275 KM', rate24H: 12.50 },
                { id: 'REG-2B', name: 'Hyderabad ➔ Tirupati Line-haul', distance: '550 KM', rate24H: 18.00 },
                { id: 'REG-3B', name: 'Secunderabad ➔ Warangal Industrial', distance: '150 KM', rate24H: 14.20 },
                { id: 'REG-4A', name: 'Vijayawada ➔ Visakhapatnam Port Line', distance: '350 KM', rate24H: 15.80 },
                { id: 'REG-5B', name: 'Tirupati ➔ Bengaluru Border Node', distance: '250 KM', rate24H: 16.50 },
                { id: 'REG-6B', name: 'Hyderabad ➔ Kurnool / Rayalaseema', distance: '210 KM', rate24H: 13.90 }
            ]
        };

        // --- APP STATE VARIABLES ---
        let currentServiceMode = '24H'; // '24H' or '12H'
        let currentSector = 'REGIONAL'; // 'INTRA' or 'REGIONAL'
        let currentWeight = 100; // in KG
        let selectedCorridorId = 'REG-3B';

        // --- INITIALIZATION ---
        window.onload = function() {
            startISTClock();
            populateCorridorDropdown();
            calculateTariff();
        };

        // --- REAL-TIME IST CLOCK ---
        function startISTClock() {
            function updateClock() {
                const now = new Date();
                const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
                const istTimeString = now.toLocaleTimeString('en-US', options);
                document.getElementById('istClock').innerText = `IST ${istTimeString}`;
            }
            updateClock();
            setInterval(updateClock, 1000);
        }

        // --- OPTION 1 & 2: SERVICE MODE SWITCHER ---
        function setServiceMode(mode) {
            currentServiceMode = mode;
            const card24 = document.getElementById('card24H');
            const card12 = document.getElementById('card12H');
            const radio24 = document.getElementById('radio24H');
            const radio12 = document.getElementById('radio12H');
            const slaPill = document.getElementById('slaPill');
            const slaPillText = document.getElementById('slaPillText');
            const activeTierBadge = document.getElementById('activeTierBadge');
            const selectedModeLabel = document.getElementById('selectedModeLabel');

            if (mode === '24H') {
                // Style Active Card 24H
                card24.className = "glass-panel p-5 rounded-2xl cursor-pointer transition-all duration-300 glass-card-active-cyan relative overflow-hidden group";
                card12.className = "glass-panel p-5 rounded-2xl cursor-pointer transition-all duration-300 border border-slate-800 hover:border-yellow-500/50 relative overflow-hidden group";
                radio24.checked = true;
                radio12.checked = false;

                // Update SLA Status Pill Engine (Option 1)
                slaPill.className = "px-4 py-2 rounded-xl border font-mono text-xs font-semibold flex items-center space-x-2.5 transition-all duration-300 bg-emerald-950/40 border-emerald-500/40 text-emerald-300 shadow-lg shadow-emerald-900/20";
                slaPillText.innerText = "🟢 LIVE SLA: 4-HR LOCAL / 24-HR REGIONAL DISPATCH ACTIVE";

                // Update Labels
                activeTierBadge.innerText = "MODE: STANDARD 24H";
                activeTierBadge.className = "text-xs font-mono px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800";
                selectedModeLabel.innerText = "Active Rate: Standard 24H SLA";

                document.body.classList.remove('thunder-mode');
            } else {
                // Style Active Card 12H Thunder
                card12.className = "glass-panel p-5 rounded-2xl cursor-pointer transition-all duration-300 glass-card-active-gold relative overflow-hidden group";
                card24.className = "glass-panel p-5 rounded-2xl cursor-pointer transition-all duration-300 border border-slate-800 hover:border-cyan-500/50 relative overflow-hidden group";
                radio12.checked = true;
                radio24.checked = false;

                // Update SLA Status Pill Engine (Option 1 - Thunder Mode)
                slaPill.className = "px-4 py-2 rounded-xl border font-mono text-xs font-semibold flex items-center space-x-2.5 transition-all duration-300 bg-yellow-950/50 border-yellow-500/50 text-yellow-300 shadow-lg shadow-yellow-900/30";
                slaPillText.innerText = "⚡ THUNDER SLA: NEXT SUNRISE DEPARTURE IN 03:42:15 • GUARANTEED DUSK LANDING";

                // Update Labels
                activeTierBadge.innerText = "MODE: ⚡ THUNDER 12H ULTRA-EXPRESS";
                activeTierBadge.className = "text-xs font-mono px-2.5 py-1 rounded bg-yellow-950 text-yellow-300 border border-yellow-700";
                selectedModeLabel.innerText = "Active Rate: ⚡ Thunder 12H Ultra-Express";

                document.body.classList.add('thunder-mode');
            }

            calculateTariff();
        }

        // --- SECTOR SWITCHER ---
        function setSector(sector) {
            currentSector = sector;
            const btnIntra = document.getElementById('btnIntra');
            const btnRegional = document.getElementById('btnRegional');

            if (sector === 'INTRA') {
                btnIntra.className = "py-2.5 px-4 rounded-xl border text-xs font-mono font-semibold transition-all bg-cyan-500/20 border-cyan-500 text-cyan-300";
                btnRegional.className = "py-2.5 px-4 rounded-xl border text-xs font-mono font-semibold transition-all bg-slate-900 border-slate-700 text-slate-400 hover:text-white";
                selectedCorridorId = CORRIDORS.INTRA[0].id;
            } else {
                btnRegional.className = "py-2.5 px-4 rounded-xl border text-xs font-mono font-semibold transition-all bg-cyan-500/20 border-cyan-500 text-cyan-300";
                btnIntra.className = "py-2.5 px-4 rounded-xl border text-xs font-mono font-semibold transition-all bg-slate-900 border-slate-700 text-slate-400 hover:text-white";
                selectedCorridorId = CORRIDORS.REGIONAL[2].id; // Default REG-3B
            }

            populateCorridorDropdown();
            calculateTariff();
        }

        // --- POPULATE CORRIDOR DROPDOWN ---
        function populateCorridorDropdown() {
            const select = document.getElementById('corridorSelect');
            select.innerHTML = '';

            const list = CORRIDORS[currentSector];
            list.forEach(item => {
                const opt = document.createElement('option');
                opt.value = item.id;
                opt.innerText = `[${item.id}] ${item.name} (${item.distance})`;
                if (item.id === selectedCorridorId) opt.selected = true;
                select.appendChild(opt);
            });
        }

        // --- WEIGHT INPUT HANDLERS ---
        function setWeight(val) {
            currentWeight = val;
            document.getElementById('weightSlider').value = val;
            document.getElementById('manualWeight').value = val;
            document.getElementById('weightDisplay').innerText = `${val} KG`;
            updateWeightBtnStyles(val);
            calculateTariff();
        }

        function onSliderChange(val) {
            currentWeight = parseInt(val);
            document.getElementById('manualWeight').value = val;
            document.getElementById('weightDisplay').innerText = `${val} KG`;
            updateWeightBtnStyles(val);
            calculateTariff();
        }

        function onManualWeight(val) {
            let num = parseInt(val) || 1;
            if (num > 5000) num = 5000;
            currentWeight = num;
            document.getElementById('weightSlider').value = num;
            document.getElementById('weightDisplay').innerText = `${num} KG`;
            updateWeightBtnStyles(num);
            calculateTariff();
        }

        function updateWeightBtnStyles(val) {
            const btns = document.querySelectorAll('.weight-btn');
            btns.forEach(btn => {
                const btnVal = parseInt(btn.innerText);
                if (btnVal === val) {
                    btn.className = "weight-btn py-1.5 px-2 bg-cyan-500/20 border border-cyan-500 text-cyan-300 rounded-lg text-xs font-mono font-bold transition-all";
                } else {
                    btn.className = "weight-btn py-1.5 px-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 transition-all";
                }
            });
        }

        // --- CORE CALCULATOR & COMPARISON ENGINE (Option 4) ---
        function calculateTariff() {
            const selectVal = document.getElementById('corridorSelect').value;
            const corridorList = CORRIDORS[currentSector];
            const activeCorridor = corridorList.find(c => c.id === selectVal) || corridorList[0];
            
            document.getElementById('corridorDesc').innerText = `Distance Rating: ${activeCorridor.distance} • Corridor ID: ${activeCorridor.id}`;

            const baseRate24HPerKg = activeCorridor.rate24H;
            const rate12HPerKg = baseRate24HPerKg * 1.30; // 30% Premium for 12H Thunder

            const total24H = Math.round(baseRate24HPerKg * currentWeight);
            const total12H = Math.round(rate12HPerKg * currentWeight);

            // Side-by-Side Comparison UI Updates
            document.getElementById('rate24HDisplay').innerText = `₹ ${total24H.toLocaleString('en-IN')}`;
            document.getElementById('rate12HDisplay').innerText = `₹ ${total12H.toLocaleString('en-IN')}`;

            // Main Active Quote Display
            let activeTotal = (currentServiceMode === '24H') ? total24H : total12H;
            let activePerKg = (currentServiceMode === '24H') ? baseRate24HPerKg : rate12HPerKg;

            document.getElementById('mainQuoteAmount').innerText = `₹ ${activeTotal.toLocaleString('en-IN')}`;
            document.getElementById('unitRateText').innerText = `₹ ${activePerKg.toFixed(2)} per kg`;

            // Downtime & Green Offset Updates
            if (currentServiceMode === '12H') {
                document.getElementById('downtimeText').innerText = `SAVED 24 TO 36 HOURS • Guaranteed Sunset Landing`;
            } else {
                document.getElementById('downtimeText').innerText = `Saves 12 to 24 Hours of Industrial Stoppage`;
            }

            // Carbon offset approx (0.142 kg CO2 per kg freight rail/road optimized)
            const co2 = (currentWeight * 0.142).toFixed(1);
            document.getElementById('co2Val').innerText = `${co2} kg CO2e`;
        }

        // --- TARIFF MODAL TOGGLE ---
        function toggleTariffModal() {
            const modal = document.getElementById('tariffModal');
            modal.classList.toggle('hidden');
        }

        // --- COPY QUOTE SUMMARY TO CLIPBOARD ---
        function copyQuoteSummary() {
            const selectVal = document.getElementById('corridorSelect').value;
            const quoteAmt = document.getElementById('mainQuoteAmount').innerText;
            const mode = (currentServiceMode === '24H') ? 'STANDARD 24H EXPRESS' : '⚡ THUNDER 12H ULTRA-EXPRESS';
            
            const summaryText = `[TCC OFFICIAL FREIGHT QUOTE]\n` +
                                `Service Tier: ${mode}\n` +
                                `Corridor: ${selectVal}\n` +
                                `Payload Gross Weight: ${currentWeight} KG\n` +
                                `Total Estimated Tariff: ${quoteAmt}\n` +
                                `Clearance Guarantee: < 120 Mins Terminal Evacuation\n` +
                                `SAC Code: 9965 (RCM/Udyam Compliant)\n` +
                                `Generated via Thunder Cargo Corridor Regional Division.`;

            navigator.clipboard.writeText(summaryText).then(() => {
                showToast("Quote copied to clipboard!");
            }).catch(() => {
                // Fallback for clipboard
                const textArea = document.createElement("textarea");
                textArea.value = summaryText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast("Quote copied to clipboard!");
            });
        }

        // Custom Notification Toast
        function showToast(msg) {
            const toast = document.createElement('div');
            toast.className = "fixed bottom-5 right-5 bg-cyan-400 text-slate-950 font-mono text-xs font-bold px-4 py-3 rounded-xl shadow-2xl z-50 transition-all duration-300";
            toast.innerText = msg;
            document.body.appendChild(toast);
            setTimeout(() => {
                toast.remove();
            }, 3000);
        }
    </script>
</body>
</html>
```
