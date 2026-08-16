'use client';

import React from 'react';

// Common SVG Filter for Paper Depth
export function VectorPaperShadowDef() {
  return (
    <defs>
      <filter id="paper-drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#101525" floodOpacity="0.09" />
        <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#101525" floodOpacity="0.04" />
      </filter>
      <filter id="card-drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#101525" floodOpacity="0.08" />
      </filter>
    </defs>
  );
}

// 1. REPORT DOCUMENT VECTOR (Multi-page commercial document with stack & crop marks)
export function ReportDocumentVector({ className = 'w-full h-auto max-w-[340px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 340 440" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <VectorPaperShadowDef />
      {/* Underlying Sheet 3 */}
      <rect x="24" y="32" width="280" height="380" rx="4" fill="#EAEAF0" stroke="#DCDCE6" strokeWidth="1.25" transform="rotate(-3 164 222)" />
      {/* Underlying Sheet 2 */}
      <rect x="16" y="20" width="280" height="380" rx="4" fill="#F4F4F8" stroke="#E2E2EA" strokeWidth="1.25" transform="rotate(2 156 210)" />
      {/* Main Top Sheet */}
      <g filter="url(#paper-drop-shadow)">
        <rect x="10" y="10" width="280" height="380" rx="4" fill="#FFFFFF" stroke="#E2E4EB" strokeWidth="1.25" />
        
        {/* Spine Stitch / Saddle Stitch detail */}
        <line x1="10" y1="10" x2="10" y2="390" stroke="#5747E8" strokeWidth="3" />
        <circle cx="10" cy="80" r="2.5" fill="#FFFFFF" stroke="#5747E8" strokeWidth="1.25" />
        <circle cx="10" cy="320" r="2.5" fill="#FFFFFF" stroke="#5747E8" strokeWidth="1.25" />

        {/* Corner Crop Marks */}
        <path d="M 22 18 L 22 26 M 18 22 L 26 22" stroke="#8B92A3" strokeWidth="1" />
        <path d="M 278 18 L 278 26 M 274 22 L 282 22" stroke="#8B92A3" strokeWidth="1" />
        <path d="M 22 374 L 22 382 M 18 378 L 26 378" stroke="#8B92A3" strokeWidth="1" />
        <path d="M 278 374 L 278 382 M 274 378 L 282 378" stroke="#8B92A3" strokeWidth="1" />

        {/* CMYK Registration Mark */}
        <circle cx="260" cy="35" r="5" stroke="#101525" strokeWidth="0.75" />
        <line x1="252" y1="35" x2="268" y2="35" stroke="#101525" strokeWidth="0.75" />
        <line x1="260" y1="27" x2="260" y2="43" stroke="#101525" strokeWidth="0.75" />
        <circle cx="258.5" cy="33.5" r="1.2" fill="#00B4D8" />
        <circle cx="261.5" cy="33.5" r="1.2" fill="#F72585" />
        <circle cx="258.5" cy="36.5" r="1.2" fill="#FFB703" />
        <circle cx="261.5" cy="36.5" r="1.2" fill="#101525" />

        {/* Cover Content Artwork */}
        <rect x="36" y="70" width="36" height="4" rx="2" fill="#5747E8" />
        <text x="36" y="118" fill="#101525" fontSize="28" fontWeight="800" fontFamily="var(--font-sans)">Annual</text>
        <text x="36" y="148" fill="#101525" fontSize="28" fontWeight="800" fontFamily="var(--font-sans)">Report</text>
        <text x="36" y="174" fill="#5F6574" fontSize="12" fontWeight="600" fontFamily="var(--font-sans)">32 pages • 170gsm Silk</text>

        {/* Document Text Line Visuals */}
        <rect x="36" y="240" width="228" height="6" rx="2" fill="#F0F1F5" />
        <rect x="36" y="254" width="200" height="6" rx="2" fill="#F0F1F5" />
        <rect x="36" y="268" width="215" height="6" rx="2" fill="#F0F1F5" />
        <rect x="36" y="282" width="160" height="6" rx="2" fill="#F0F1F5" />

        <rect x="36" y="320" width="70" height="24" rx="3" fill="#F7F7FA" stroke="#E2E4EB" strokeWidth="1" />
        <text x="44" y="336" fill="#5747E8" fontSize="9" fontWeight="700" fontFamily="var(--font-mono)">RP / 2026</text>
      </g>
    </svg>
  );
}

// 2. FOLDED BROCHURE VECTOR (Tri-fold / Bi-fold marketing leaflet)
export function FoldedBrochureVector({ className = 'w-full h-auto max-w-[300px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <VectorPaperShadowDef />
      <g filter="url(#paper-drop-shadow)">
        {/* Left Panel */}
        <path d="M 20 50 L 110 35 L 110 335 L 20 350 Z" fill="#F7F7FA" stroke="#DCDCE6" strokeWidth="1.25" />
        {/* Middle Panel */}
        <path d="M 110 35 L 205 35 L 205 335 L 110 335 Z" fill="#FFFFFF" stroke="#E2E4EB" strokeWidth="1.25" />
        {/* Right Panel (Front) */}
        <path d="M 205 35 L 295 50 L 295 350 L 205 335 Z" fill="#FFFFFF" stroke="#E2E4EB" strokeWidth="1.25" />

        {/* Fold Crease Shadow Lines */}
        <line x1="110" y1="35" x2="110" y2="335" stroke="#00B4D8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        <line x1="205" y1="35" x2="205" y2="335" stroke="#00B4D8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

        {/* Front Panel Artwork */}
        <rect x="220" y="80" width="30" height="4" rx="2" fill="#00B4D8" />
        <text x="220" y="112" fill="#101525" fontSize="16" fontWeight="800" fontFamily="var(--font-sans)">Product</text>
        <text x="220" y="130" fill="#101525" fontSize="16" fontWeight="800" fontFamily="var(--font-sans)">Brochure</text>
        <text x="220" y="148" fill="#5F6574" fontSize="10" fontWeight="600" fontFamily="var(--font-sans)">6pp Z-Fold</text>

        <rect x="220" y="175" width="60" height="4" rx="2" fill="#EAEAF0" />
        <rect x="220" y="185" width="50" height="4" rx="2" fill="#EAEAF0" />
        <rect x="220" y="195" width="55" height="4" rx="2" fill="#EAEAF0" />

        {/* Middle Panel Artwork */}
        <rect x="125" y="70" width="65" height="30" rx="3" fill="#EBF9FC" stroke="#C5EEF7" strokeWidth="1" />
        <text x="133" y="88" fill="#0096B4" fontSize="10" fontWeight="700" fontFamily="var(--font-sans)">Leaflet A5</text>
        <rect x="125" y="120" width="65" height="4" rx="2" fill="#EAEAF0" />
        <rect x="125" y="130" width="55" height="4" rx="2" fill="#EAEAF0" />
        <rect x="125" y="140" width="60" height="4" rx="2" fill="#EAEAF0" />
      </g>
    </svg>
  );
}

// 3. STATIONERY SUITE VECTOR (Letterhead + Envelope + Business Card)
export function StationerySuiteVector({ className = 'w-full h-auto max-w-[340px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <VectorPaperShadowDef />
      {/* Background Letterhead Sheet */}
      <g filter="url(#paper-drop-shadow)">
        <rect x="20" y="20" width="240" height="320" rx="3" fill="#FFFFFF" stroke="#E2E4EB" strokeWidth="1.25" />
        {/* Letterhead Header Line */}
        <rect x="40" y="45" width="40" height="4" rx="2" fill="#F72585" />
        <text x="40" y="68" fill="#101525" fontSize="12" fontWeight="800" fontFamily="var(--font-sans)">RelayPrint</text>
        <rect x="40" y="100" width="200" height="4" rx="2" fill="#F0F1F5" />
        <rect x="40" y="112" width="180" height="4" rx="2" fill="#F0F1F5" />
        <rect x="40" y="124" width="190" height="4" rx="2" fill="#F0F1F5" />
        <rect x="40" y="136" width="140" height="4" rx="2" fill="#F0F1F5" />

        <rect x="40" y="165" width="200" height="4" rx="2" fill="#F0F1F5" />
        <rect x="40" y="177" width="170" height="4" rx="2" fill="#F0F1F5" />
        <rect x="40" y="189" width="185" height="4" rx="2" fill="#F0F1F5" />
      </g>

      {/* Compliment Slip (Offset Left) */}
      <g filter="url(#card-drop-shadow)">
        <rect x="50" y="220" width="180" height="90" rx="3" fill="#FAFAFC" stroke="#E2E4EB" strokeWidth="1.25" />
        <rect x="65" y="238" width="24" height="3" rx="1.5" fill="#F72585" />
        <text x="65" y="256" fill="#101525" fontSize="10" fontWeight="700" fontFamily="var(--font-sans)">With Compliments</text>
        <line x1="65" y1="272" x2="160" y2="272" stroke="#E2E4EB" strokeWidth="1" />
        <line x1="65" y1="282" x2="140" y2="282" stroke="#E2E4EB" strokeWidth="1" />
      </g>

      {/* Business Card (Forefront Right) */}
      <g filter="url(#card-drop-shadow)">
        <rect x="180" y="210" width="160" height="100" rx="4" fill="#080D1D" stroke="#252D42" strokeWidth="1.25" transform="rotate(-4 260 260)" />
        <rect x="200" y="235" width="18" height="3" rx="1.5" fill="#5747E8" transform="rotate(-4 200 235)" />
        <text x="200" y="258" fill="#FFFFFF" fontSize="12" fontWeight="800" fontFamily="var(--font-sans)" transform="rotate(-4 200 258)">Executive Suite</text>
        <text x="200" y="274" fill="#8B92A3" fontSize="8" fontWeight="600" fontFamily="var(--font-sans)" transform="rotate(-4 200 274)">350gsm Silk Board</text>
      </g>
    </svg>
  );
}

// 4. SPECIALIST FINISHING VECTOR (Layered Sheets, Foil Stamping & Die-Cut Tabs)
export function FinishingLayersVector({ className = 'w-full h-auto max-w-[340px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <VectorPaperShadowDef />
      {/* Base Layer */}
      <rect x="30" y="30" width="280" height="280" rx="4" fill="#F4F4F8" stroke="#E2E2EA" strokeWidth="1.25" />
      
      {/* Mid Layer with Die-Cut Window */}
      <g filter="url(#paper-drop-shadow)">
        <rect x="45" y="45" width="260" height="270" rx="4" fill="#FFFFFF" stroke="#E2E4EB" strokeWidth="1.25" />
        
        {/* Die Cut Tab / Curve */}
        <path d="M 45 120 C 75 120 75 180 45 180" stroke="#FFB703" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        <text x="80" y="154" fill="#B38000" fontSize="9" fontWeight="700" fontFamily="var(--font-mono)">DIE-CUT POCKET</text>

        {/* Embossed / Gold Foil Block */}
        <rect x="100" y="80" width="160" height="80" rx="3" fill="#FFFBF0" stroke="#FFD875" strokeWidth="1.25" />
        <rect x="120" y="100" width="30" height="3" rx="1.5" fill="#FFB703" />
        <text x="120" y="122" fill="#8A6100" fontSize="14" fontWeight="800" fontFamily="var(--font-sans)">Foil Stamp</text>
        <text x="120" y="138" fill="#B38000" fontSize="9" fontWeight="600" fontFamily="var(--font-sans)">Soft-Touch Matt Lamination</text>

        {/* Creasing Matrix Indicator */}
        <line x1="45" y1="220" x2="305" y2="220" stroke="#FFB703" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="100" y="240" fill="#8B92A3" fontSize="9" fontWeight="600" fontFamily="var(--font-mono)">PRECISION CREASE MATRIX</text>
      </g>
    </svg>
  );
}

// 5. BESPOKE HERO PRINT ROUTING SCENE
export function HeroRoutingVectorScene() {
  return (
    <div className="relative w-full max-w-[620px] mx-auto h-[480px] sm:h-[560px] flex items-center justify-center select-none">
      <svg viewBox="0 0 620 540" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <VectorPaperShadowDef />

        {/* ELEGANT PURPLE ROUTE PATHWAY */}
        <path
          d="M 40 180 C 140 180 200 270 340 270"
          stroke="#5747E8"
          strokeWidth="2.5"
          strokeDasharray="5 5"
          opacity="0.5"
        />
        {/* Split Routes from RelayPrint to Outputs */}
        <path d="M 340 270 C 430 270 460 140 520 140" stroke="#5747E8" strokeWidth="2" opacity="0.8" />
        <path d="M 340 270 C 440 270 460 270 520 270" stroke="#5747E8" strokeWidth="2" opacity="0.8" />
        <path d="M 340 270 C 430 270 460 400 520 400" stroke="#5747E8" strokeWidth="2" opacity="0.8" />

        {/* OBJECT 1: A4 MULTI-PAGE REPORT (Left-Top) */}
        <g transform="translate(20, 30) rotate(-4 140 180)" filter="url(#paper-drop-shadow)">
          {/* Back Sheets */}
          <rect x="8" y="10" width="220" height="290" rx="3" fill="#EAEAF0" stroke="#DCDCE6" strokeWidth="1" />
          <rect x="4" y="5" width="220" height="290" rx="3" fill="#F4F4F8" stroke="#E2E2EA" strokeWidth="1" />
          {/* Main Top Sheet */}
          <rect x="0" y="0" width="220" height="290" rx="3" fill="#FFFFFF" stroke="#E2E4EB" strokeWidth="1.25" />
          <line x1="0" y1="0" x2="0" y2="290" stroke="#5747E8" strokeWidth="2.5" />
          
          {/* CMYK mark */}
          <circle cx="200" cy="20" r="3.5" stroke="#101525" strokeWidth="0.5" />
          <circle cx="199" cy="19" r="0.9" fill="#00B4D8" />
          <circle cx="201" cy="19" r="0.9" fill="#F72585" />
          <circle cx="199" cy="21" r="0.9" fill="#FFB703" />
          <circle cx="201" cy="21" r="0.9" fill="#101525" />

          <rect x="25" y="55" width="30" height="3.5" rx="1.75" fill="#5747E8" />
          <text x="25" y="90" fill="#101525" fontSize="20" fontWeight="800" fontFamily="var(--font-sans)">Annual</text>
          <text x="25" y="112" fill="#101525" fontSize="20" fontWeight="800" fontFamily="var(--font-sans)">Report</text>
          <text x="25" y="132" fill="#5F6574" fontSize="10" fontWeight="600" fontFamily="var(--font-sans)">32 pages • 170gsm Silk</text>
          
          <rect x="25" y="180" width="170" height="4" rx="2" fill="#F0F1F5" />
          <rect x="25" y="190" width="150" height="4" rx="2" fill="#F0F1F5" />
          <rect x="25" y="200" width="160" height="4" rx="2" fill="#F0F1F5" />
        </g>

        {/* OBJECT 2: FOLDED LEAFLET (Mid-Right Behind Report) */}
        <g transform="translate(190, 40) rotate(7 110 140)" filter="url(#paper-drop-shadow)">
          <rect x="0" y="0" width="150" height="210" rx="3" fill="#FFFFFF" stroke="#E2E4EB" strokeWidth="1.25" />
          <line x1="75" y1="0" x2="75" y2="210" stroke="#00B4D8" strokeWidth="1.25" strokeDasharray="3 3" opacity="0.6" />
          <rect x="15" y="30" width="22" height="3" rx="1.5" fill="#00B4D8" />
          <text x="15" y="54" fill="#101525" fontSize="12" fontWeight="800" fontFamily="var(--font-sans)">Leaflet A5</text>
          <text x="15" y="68" fill="#5F6574" fontSize="8" fontWeight="600" fontFamily="var(--font-sans)">150gsm Gloss</text>
          <rect x="15" y="90" width="45" height="3" rx="1.5" fill="#EAEAF0" />
          <rect x="15" y="98" width="40" height="3" rx="1.5" fill="#EAEAF0" />
        </g>

        {/* OBJECT 3: STATIONERY SUITE (Lower-Right) */}
        <g transform="translate(170, 310) rotate(-2 110 60)" filter="url(#card-drop-shadow)">
          <rect x="0" y="0" width="180" height="120" rx="3" fill="#FFFFFF" stroke="#E2E4EB" strokeWidth="1.25" />
          <rect x="15" y="20" width="20" height="3" rx="1.5" fill="#F72585" />
          <text x="15" y="42" fill="#101525" fontSize="12" fontWeight="800" fontFamily="var(--font-sans)">Stationery Set</text>
          <text x="15" y="56" fill="#5F6574" fontSize="8" fontWeight="600" fontFamily="var(--font-sans)">350gsm Silk Board</text>
          
          {/* Overlapping Business Card */}
          <rect x="80" y="55" width="110" height="65" rx="3" fill="#080D1D" stroke="#252D42" strokeWidth="1" transform="rotate(-3 80 55)" />
          <rect x="95" y="70" width="14" height="2.5" rx="1" fill="#5747E8" />
          <text x="95" y="88" fill="#FFFFFF" fontSize="9" fontWeight="800" fontFamily="var(--font-sans)">RelayPrint</text>
        </g>

        {/* CENTRAL RELAYPRINT NODE (No background box!) */}
        <g transform="translate(340, 270)">
          <circle cx="0" cy="0" r="16" fill="#5747E8" />
          <path d="M -5 -5 L 0 0 M 5 -5 L 0 0 M 0 0 L 0 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <text x="24" y="-3" fill="#101525" fontSize="14" fontWeight="800" fontFamily="var(--font-sans)">RelayPrint</text>
          <text x="24" y="12" fill="#5747E8" fontSize="10" fontWeight="700" fontFamily="var(--font-sans)">Route & coordinate</text>
        </g>

        {/* ROUTE OUTPUT LABELS (Pure clean text labels, NO BOXES!) */}
        <g transform="translate(530, 140)">
          <circle cx="-10" cy="-4" r="3" fill="#5747E8" />
          <text x="0" y="0" fill="#101525" fontSize="13" fontWeight="800" fontFamily="var(--font-sans)">Digital</text>
          <text x="0" y="14" fill="#5F6574" fontSize="9" fontWeight="500" fontFamily="var(--font-sans)">Short-run production</text>
        </g>

        <g transform="translate(530, 270)">
          <circle cx="-10" cy="-4" r="3" fill="#5747E8" />
          <text x="0" y="0" fill="#101525" fontSize="13" fontWeight="800" fontFamily="var(--font-sans)">Volume</text>
          <text x="0" y="14" fill="#5F6574" fontSize="9" fontWeight="500" fontFamily="var(--font-sans)">Sheetfed litho</text>
        </g>

        <g transform="translate(530, 400)">
          <circle cx="-10" cy="-4" r="3" fill="#5747E8" />
          <text x="0" y="0" fill="#101525" fontSize="13" fontWeight="800" fontFamily="var(--font-sans)">Finishing</text>
          <text x="0" y="14" fill="#5F6574" fontSize="9" fontWeight="500" fontFamily="var(--font-sans)">Post-press & binding</text>
        </g>
      </svg>
    </div>
  );
}
