/**
 * Njoku International Content Repository
 * 
 * Client-supplied copy is verbatim.
 * Any supporting line not supplied directly by the client is marked with:
 * // DRAFT: client to approve
 */

export const siteContent = {
  brand: {
    name: 'NJOKU INTERNATIONAL',
    tagline: 'International Business Consulting & Strategic Facilitation',
    shortName: 'Njoku International',
  },

  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
  ],

  hero: {
    eyebrow: 'INTERNATIONAL BUSINESS & ADVISORY',
    name: 'NJOKU INTERNATIONAL',
    headline: 'Connecting Businesses. Creating Opportunities.',
    subline: 'International Business Consulting & Strategic Facilitation',
    ctaPrimary: {
      label: 'Discuss an Opportunity', // DRAFT: client to approve
      href: 'mailto:info@njokuinternational.com?subject=Business%20Enquiry%20-%20Njoku%20International',
    },
    ctaSecondary: {
      label: 'Explore Our Services', // DRAFT: client to approve
      href: '#services',
    },
    image: {
      src: '/images/hero-globe.jpg',
      alt: 'Global commercial connections representation', // DRAFT: client to approve
      width: 600,
      height: 450,
    },
  },

  about: {
    eyebrow: 'ABOUT NJOKU INTERNATIONAL', // DRAFT: client to approve
    heading: 'Strategic Connection & Facilitation', // DRAFT: client to approve
    // Verbatim client copy:
    statement:
      'Njoku International is an international business consulting and facilitation initiative focused on connecting businesses, fostering professional relationships, and supporting cross-border commercial opportunities.',
    // Supporting editorial line:
    supportingLine:
      'Built around relationships. Guided by integrity. Focused on opportunity.', // DRAFT: client to approve
  },

  services: {
    eyebrow: 'OUR CAPABILITIES', // DRAFT: client to approve
    heading: 'Our Services',
    intro:
      'Providing discreet, high-trust facilitation to bridge commercial goals across international borders.', // DRAFT: client to approve
    items: [
      {
        number: '01',
        title: 'International Business Introductions',
        description:
          'Connecting organizations with vetted counterparties to explore mutually beneficial commercial pathways.', // DRAFT: client to approve
      },
      {
        number: '02',
        title: 'Strategic Business Facilitation',
        description:
          'Supporting cross-border engagements through structured dialogue, strategic alignment, and commercial coordination.', // DRAFT: client to approve
      },
      {
        number: '03',
        CrossBorder: true,
        title: 'Cross-Border Trade Connections',
        description:
          'Assisting businesses in bridging geographic boundaries to build resilient international trade links.', // DRAFT: client to approve
      },
      {
        number: '04',
        title: 'Commercial Relationship Development',
        description:
          'Cultivating enduring, trust-based partnerships that underpin sustained international ventures.', // DRAFT: client to approve
      },
    ],
  },

  approach: {
    eyebrow: 'HOW WE WORK', // DRAFT: client to approve
    heading: 'A Measured, Structured Process', // DRAFT: client to approve
    intro:
      'We bring methodical focus and professional clarity to each international commercial engagement.', // DRAFT: client to approve
    stages: [
      {
        number: '01',
        name: 'Understand', // DRAFT: client to approve
        description:
          'We begin by listening closely to your strategic objectives and cross-border commercial vision.', // DRAFT: client to approve
      },
      {
        number: '02',
        name: 'Connect', // DRAFT: client to approve
        description:
          'We identify and introduce aligned counterparties with mutual interest in commercial collaboration.', // DRAFT: client to approve
      },
      {
        number: '03',
        name: 'Facilitate', // DRAFT: client to approve
        description:
          'We support discussions with structured facilitation, ensuring clear communication and shared expectations.', // DRAFT: client to approve
      },
      {
        number: '04',
        name: 'Develop', // DRAFT: client to approve
        description:
          'We help nurture ongoing commercial relationships to support durable and responsible engagement.', // DRAFT: client to approve
      },
    ],
    note: 'Every engagement is different; this reflects a typical approach.', // DRAFT: client to approve
  },

  industries: {
    eyebrow: 'AREAS OF FOCUS', // DRAFT: client to approve
    heading: 'Industries of Interest',
    intro:
      'Engaging across key commercial sectors where strategic facilitation and cross-border connectivity drive meaningful progress.', // DRAFT: client to approve
    items: [
      {
        number: '01',
        title: 'International Trade',
        description:
          'Facilitating connections across global supply chains and cross-border commercial corridors.', // DRAFT: client to approve
        icon: 'Globe',
      },
      {
        number: '02',
        title: 'Commodities and Precious Metals',
        description:
          'Connecting buyers, sellers, and strategic partners in physical commodities and precious metals.', // DRAFT: client to approve
        icon: 'Coins',
      },
      {
        number: '03',
        title: 'General Business Development',
        description:
          'Supporting market exploration, organizational expansion, and commercial relationship building.', // DRAFT: client to approve
        icon: 'Briefcase',
      },
      {
        number: '04',
        title: 'Emerging Commercial Opportunities',
        description:
          'Identifying and exploring nascent commercial prospects across dynamic growth regions.', // DRAFT: client to approve
        icon: 'TrendingUp',
      },
    ],
  },

  commitment: {
    eyebrow: 'OUR PRINCIPLES', // DRAFT: client to approve
    heading: 'Our Commitment',
    intro:
      'Professionalism, integrity, transparency, confidentiality, and responsible international business engagement.',
    values: [
      {
        number: '01',
        title: 'Professionalism',
        description:
          'Upholding rigorous standards of conduct, diligence, and courtesy across every international interaction.', // DRAFT: client to approve
      },
      {
        number: '02',
        title: 'Integrity',
        description:
          'Operating with unyielding ethical principles, absolute honesty, and steadfast dedication to our word.', // DRAFT: client to approve
      },
      {
        number: '03',
        title: 'Transparency',
        description:
          'Fostering open, straightforward communication with clear boundaries, responsibilities, and expectations.', // DRAFT: client to approve
      },
      {
        number: '04',
        title: 'Confidentiality',
        description:
          'Safeguarding sensitive commercial discussions and proprietary interests with the utmost discretion.', // DRAFT: client to approve
      },
      {
        number: '05',
        title: 'Responsible Engagement',
        description:
          'Promoting ethical, sustainable, and conscientious cross-border commercial cooperation.', // DRAFT: client to approve
      },
    ],
  },

  contact: {
    eyebrow: 'GET IN TOUCH', // DRAFT: client to approve
    heading: 'Have a business opportunity to discuss?', // DRAFT: client to approve
    intro:
      'We welcome direct inquiries regarding potential commercial collaborations and strategic facilitation.', // DRAFT: client to approve
    channels: [
      {
        label: 'General Enquiries', // DRAFT: client to approve
        email: 'info@njokuinternational.com',
        mailto:
          'mailto:info@njokuinternational.com?subject=Business%20Enquiry%20-%20Njoku%20International',
        description: 'For general consulting and business introduction inquiries.', // DRAFT: client to approve
      },
      {
        label: 'Precious Metals Enquiries', // DRAFT: client to approve
        email: 'preciousmetals@njokuinternational.com',
        mailto:
          'mailto:preciousmetals@njokuinternational.com?subject=Precious%20Metals%20Enquiry%20-%20Njoku%20International',
        description: 'For inquiries concerning commodities and precious metals connections.', // DRAFT: client to approve
      },
    ],
  },

  footer: {
    disclaimer:
      'Njoku International provides introductions and facilitation. Nothing on this site is investment, legal or financial advice.', // DRAFT: client to approve
    copyright: `© ${new Date().getFullYear()} Njoku International. All rights reserved.`,
  },
};
