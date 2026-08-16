export interface CapabilityItem {
  id: string;
  title: string;
  category: 'commercial' | 'digital' | 'stationery' | 'direct_mail' | 'finishing';
  description: string;
  typicalUseCases: string[];
  confirmed: boolean;
  routingFactors: string[];
}

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'commercial-docs',
    title: 'Commercial Documents & Booklets',
    category: 'commercial',
    description:
      'Multi-page reports, saddle-stitched booklets, brochures, and technical documents routed to suitable sheetfed or high-capacity print partners.',
    typicalUseCases: [
      'Corporate annual reports & financial statements',
      'Instruction manuals and multi-page user guides',
      'Exhibition programmes and event booklets',
      'Presentation collaterals and catalog supplements'
    ],
    confirmed: true,
    routingFactors: ['Page count', 'Paper weight / stock', 'Binding preference', 'Quantity batch']
  },
  {
    id: 'business-stationery',
    title: 'Business Stationery & Brand Collateral',
    category: 'stationery',
    description:
      'Standard corporate stationery and presentation collateral matched with print partners based on brand consistency, paper stock requirements, and volume.',
    typicalUseCases: [
      'Letterheads, compliment slips, and correspondence stock',
      'Corporate folders and presentation pockets',
      'Business cards and identity suites',
      'Invoicing and administrative stationery'
    ],
    confirmed: true,
    routingFactors: ['Paper stock weight', 'Brand colour consistency', 'Run size', 'Dispatch point']
  },
  {
    id: 'marketing-print',
    title: 'Flyers, Leaflets & Promotional Collateral',
    category: 'commercial',
    description:
      'Flat and folded promotional print work routed according to required turnaround time, sheet size, folding specification, and volume requirements.',
    typicalUseCases: [
      'A5/A4 marketing flyers and point-of-sale inserts',
      'Z-fold, roll-fold, and gatefold informational leaflets',
      'Promotional handouts and seasonal menus',
      'Event and trade exhibition marketing materials'
    ],
    confirmed: true,
    routingFactors: ['Fold geometry', 'Turnaround urgency', 'Coated/uncoated stock', 'Batch size']
  },
  {
    id: 'direct-mail-components',
    title: 'Direct Mail & Personalised Components',
    category: 'direct_mail',
    description:
      'Print components for direct-mail workflows, including variable-data document production, postcards, and mailing enclosures routed to capable partners.',
    typicalUseCases: [
      'Personalised customer notification letters',
      'Direct-mail postcards and single-piece mailers',
      'Survey forms and response envelopes',
      'Promotional campaign inserts'
    ],
    confirmed: true,
    routingFactors: ['Variable data handling', 'Mailing compliance', 'Envelope compatibility', 'Turnaround']
  },
  {
    id: 'digital-short-run',
    title: 'Digital Short-Run Print',
    category: 'digital',
    description:
      'Low to mid-volume print requirements matched with digital print partners capable of rapid job turnaround and short batch efficiency.',
    typicalUseCases: [
      'Time-sensitive event collateral and schedules',
      'Short-run pilot batches and test distributions',
      'Low-volume departmental documentation',
      'On-demand reprints and updates'
    ],
    confirmed: true,
    routingFactors: ['Run quantity threshold', 'Turnaround window', 'Proof turnaround', 'Sheet size']
  },
  {
    id: 'standard-finishing',
    title: 'Finishing & Post-Print Coordination',
    category: 'finishing',
    description:
      'Standard finishing options coordinated across partners with suitable machinery, including cutting, scoring, folding, laminating, and stitching.',
    typicalUseCases: [
      'Matt, gloss, or soft-touch film lamination',
      'Saddle stitching and staple binding',
      'Precision die-creasing and custom perforation',
      'Drilling and shrink-wrapping for distribution'
    ],
    confirmed: true,
    routingFactors: ['Equipment availability', 'Curing times', 'Substrate compatibility', 'Packaging specs']
  }
];

export const CAPABILITY_CATEGORIES = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'commercial', label: 'Commercial & Booklets' },
  { id: 'digital', label: 'Digital Short-Run' },
  { id: 'stationery', label: 'Stationery' },
  { id: 'direct_mail', label: 'Direct Mail' },
  { id: 'finishing', label: 'Finishing Options' }
] as const;
