export interface WorkflowStage {
  step: string;
  number: string;
  title: string;
  shortDesc: string;
  detail: string;
  actions: string[];
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    step: 'Stage 01',
    number: '01',
    title: 'Receive',
    shortDesc: 'Print requirements enter through approved platforms and business channels.',
    detail:
      'Jobs arrive from integrated software platforms, print brokers, and commercial partners. Each requirement enters with technical specifications, delivery targets, and quantity parameters.',
    actions: [
      'Inbound payload capture from commercial partners',
      'Extraction of product attributes and quantity needs',
      'Validation of turnaround targets and destination requirements'
    ]
  },
  {
    step: 'Stage 02',
    number: '02',
    title: 'Review',
    shortDesc: 'Job specifications and production requirements are assessed.',
    detail:
      'Technical specifications—such as substrate weight, sheet geometry, colour reproduction, and post-press finishing—are evaluated against manufacturing partner capabilities.',
    actions: [
      'Evaluation of stock, finishing, and binding requirements',
      'Review of turnaround feasibility and run lengths',
      'Identification of specific manufacturing requirements'
    ]
  },
  {
    step: 'Stage 03',
    number: '03',
    title: 'Route',
    shortDesc: 'The work is matched with suitable manufacturing capability.',
    detail:
      'The requirement is matched to an appropriate manufacturing partner based on equipment fit, available capacity, geographic proximity, and commercial terms.',
    actions: [
      'Matching specs to compatible production lines',
      'Verification of partner turnaround capacity',
      'Dispatch of technical instructions to the chosen partner'
    ]
  },
  {
    step: 'Stage 04',
    number: '04',
    title: 'Produce',
    shortDesc: 'Manufacturing partners fulfil the print requirement.',
    detail:
      'The designated production partner prints, finishes, and packs the job in accordance with the provided job ticket and agreed production parameters.',
    actions: [
      'Pre-flight verification and production setup',
      'Printing and secondary finishing execution',
      'Packing and preparing for courier dispatch'
    ]
  },
  {
    step: 'Stage 05',
    number: '05',
    title: 'Coordinate',
    shortDesc: 'PrintExchange helps keep the workflow moving between the relevant parties.',
    detail:
      'Throughout manufacturing and final delivery, PrintExchange acts as the central coordination layer, monitoring milestone progression and handling partner communication.',
    actions: [
      'Production milestone monitoring',
      'Handling exceptions, queries, or schedule updates',
      'Delivery confirmation back to originating partner'
    ]
  }
];

export const ROUTING_FACTORS = [
  {
    title: 'Equipment & Technology Fit',
    desc: 'Matching requirements to appropriate digital or sheetfed presses depending on run size, sheet dimensions, and colour reproduction.'
  },
  {
    title: 'Finishing Capabilities',
    desc: 'Ensuring the partner has verified in-house finishing machinery for specific folds, laminations, saddle stitching, or binding.'
  },
  {
    title: 'Turnaround & Capacity',
    desc: 'Assessing whether a partner has current production availability to meet the required delivery schedule without compromise.'
  },
  {
    title: 'Location & Dispatch',
    desc: 'Considering geographic proximity to the destination point to reduce transit times and streamline distribution logistics.'
  }
];
