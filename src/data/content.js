/**
 * Njoku International Content Repository
 * 
 * Client-supplied copy is verbatim.
 * Any supporting line not supplied directly by the client is marked with:
 * // DRAFT: client to approve
 */

const contactEmail = 'info@njokuinternational.com';
const contactSubject = 'Business Enquiry - Njoku International';

export const siteContent = {
  brand: {
    name: 'NJOKU INTERNATIONAL',
    tagline: 'International Business Consulting & Strategic Facilitation',
    shortName: 'Njoku International',
  },

  pageTitles: {
    home: 'Njoku International ΓÇö International Business Consulting & Advisory',
    about: 'About Us ΓÇö Njoku International',
    services: 'Our Services ΓÇö Njoku International',
    approach: 'How We Work ΓÇö Njoku International',
    industries: 'Industries of Interest ΓÇö Njoku International',
    commitment: 'Our Commitment ΓÇö Njoku International',
    contact: 'Contact Us ΓÇö Njoku International',
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
      href: '#contact',
    },
    ctaSecondary: {
      label: 'Explore Our Services', // DRAFT: client to approve
      href: '#services',
    },
    image: {
      src: '/images/heroEkene.png',
      alt: 'Global commercial connections representation', // DRAFT: client to approve
      width: 1280,
      height: 960,
    },
  },

  about: {
    eyebrow: 'ABOUT NJOKU INTERNATIONAL', // DRAFT: client to approve
    heading: 'Strategic Connection & Facilitation', // DRAFT: client to approve
    // Verbatim client copy:
    statement:
      'Njoku International is an international business consulting and facilitation initiative focused on connecting businesses, fostering professional relationships, and supporting cross-border commercial opportunities.',
    // Supporting editorial paragraph:
    supportingText:
      'Built around relationships. Guided by integrity. Focused on opportunity.', // DRAFT: client to approve
    microHeading: 'STRATEGY. CONNECTIONS. GROWTH.', // DRAFT: client to approve
    image: {
      src: '/images/about-architecture.jpg',
      alt: 'Contemporary glass and steel office towers in an international business district', // DRAFT: client to approve
      width: 900,
      height: 1200,
    },
  },

  services: {
    eyebrow: 'OUR CAPABILITIES', // DRAFT: client to approve
    heading: 'Our Services',
    intro:
      'Supporting business introductions and conversations across international borders.', // DRAFT: client to approve
    items: [
      {
        number: '01',
        title: 'International Business Introductions',
        description:
          'Connecting organizations with relevant counterparties to explore mutually beneficial commercial pathways.', // DRAFT: client to approve
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
    heading: 'How We Typically Work', // DRAFT: client to approve
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
          'Exploring introductions and business conversations in commodities and precious metals.', // DRAFT: client to approve
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
          'Clear communication, respectful engagement and professional conduct.', // DRAFT: client to approve
      },
      {
        number: '02',
        title: 'Integrity',
        description:
          'Approaching business relationships honestly and responsibly.', // DRAFT: client to approve
      },
      {
        number: '03',
        title: 'Transparency',
        description:
          'Clarity around expectations, communication and the nature of each engagement.', // DRAFT: client to approve
      },
      {
        number: '04',
        title: 'Confidentiality',
        description:
          'Treating sensitive business information with appropriate care.', // DRAFT: client to approve
      },
      {
        number: '05',
        title: 'Responsible Engagement',
        description:
          'Engaging responsibly in international business conversations.', // DRAFT: client to approve
      },
    ],
  },

  contact: {
    email: contactEmail,
    subject: contactSubject,
    eyebrow: 'GET IN TOUCH', // DRAFT: client to approve
    heading: 'Have a business opportunity to discuss?', // DRAFT: client to approve
    intro:
      'We welcome direct inquiries regarding potential commercial collaborations and strategic facilitation.\n\nWhen you write, please include your company, the market you are exploring, and the type of connection you are looking for.', // DRAFT: client to approve
    card: {
      label: 'General enquiries',
      description:
        'For general consulting, business introductions and commercial collaboration enquiries.', // DRAFT: client to approve
    },
    modal: {
      title: 'Send us a message',
      intro: 'Tell us about the connection you are looking for.', // DRAFT: client to approve
      note: 'Your details are used only to respond to your enquiry.', // DRAFT: client to approve
      successTitle: 'Message Sent',
      successMessage:
        'Thank you. Your message has been sent. We will be in touch if your enquiry is appropriate.',
      errorMessage: 'Your message could not be sent. Please try again.',
      fallbackIntro: 'Or email us directly at',
      closeAction: 'Close',
      sendAction: 'Send Message',
      sendingAction: 'Sending...',
      fields: {
        nameLabel: 'Name',
        emailLabel: 'Email',
        companyLabel: 'Company',
        optionalBadge: '(optional)',
        messageLabel: 'Message',
      },
      validation: {
        nameRequired: 'Please enter your name.',
        emailRequired: 'Please enter your email address.',
        emailInvalid: 'Please enter a valid email address.',
        messageRequired: 'Please enter a message.',
        messageMinLength: 'Message must be at least 20 characters.',
      },
    },
  },

  footer: {
    disclaimer:
      'Njoku International provides introductions and facilitation. Nothing on this site is investment, legal or financial advice.', // DRAFT: client to approve
    copyright: `┬⌐ ${new Date().getFullYear()} Njoku International. All rights reserved.`,
  },
};
