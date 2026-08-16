export interface FaqItem {
  id: string;
  category: 'general' | 'partners' | 'manufacturers';
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'manufacture-in-house',
    category: 'general',
    question: 'Does RelayPrint manufacture products itself?',
    answer:
      'No. RelayPrint does not operate physical printing machinery or in-house manufacturing facilities. Instead, RelayPrint operates as a B2B print reseller and production coordination company that routes print jobs to suitable manufacturing partners based on job requirements and available partner capability.'
  },
  {
    id: 'place-order-online',
    category: 'general',
    question: 'Can I place a direct print order or upload artwork on this website?',
    answer:
      'No. This public website is purely informational and does not feature an ecommerce store, instant quote generator, shopping cart, or direct ordering system. We work with print platforms, brokers, and commercial organisations through agreed business channels.'
  },
  {
    id: 'how-routing-works',
    category: 'general',
    question: 'How does RelayPrint select a manufacturing partner for a job?',
    answer:
      'Routing is determined by matching specific job requirements—such as sheet size, stock weight, binding, finishing, run volume, required delivery date, and geographic destination—against the capabilities and available capacity of our manufacturing partners.'
  },
  {
    id: 'platform-integration',
    category: 'partners',
    question: 'Does RelayPrint work with print platforms and brokers?',
    answer:
      'Yes. Working with print platforms, web-to-print software providers, brokers, and commercial buyers is a central part of our business model. We provide a single point of coordination to access diverse manufacturing routes.'
  },
  {
    id: 'manufacturer-participation',
    category: 'manufacturers',
    question: 'Can print manufacturers work with RelayPrint?',
    answer:
      'Yes. We are interested in building professional relationships with reliable commercial print and finishing businesses. Inclusion in our partner network is subject to commercial discussions, technical capability review, and agreed operational standards.'
  },
  {
    id: 'guaranteed-volumes',
    category: 'manufacturers',
    question: 'Are manufacturing partners guaranteed specific job volumes?',
    answer:
      'No. RelayPrint does not provide volume or revenue guarantees. Production work is routed based on actual commercial demand, job specification matching, partner capacity, and agreed pricing arrangements.'
  },
  {
    id: 'single-factory-comparison',
    category: 'general',
    question: 'How does RelayPrint’s model compare to working directly with a single printer?',
    answer:
      'Individual print facilities excel in specific equipment setups, formats, or finishing specialisms. RelayPrint acts as a coordination layer that directs different types of work to appropriate production resources where suitable, rather than forcing all specifications onto a single factory setup.'
  }
];
