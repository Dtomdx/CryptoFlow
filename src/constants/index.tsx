import type { NavigationConfig } from '@/types';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Activity, Lock, Zap, Compass, LineChart, Shield } from 'lucide-react';
import { Download, Wallet, BarChart4 } from "lucide-react";

export const NAVIGATION: NavigationConfig = {
  main: [
    { id: 'features', label: 'Features', href: '#features' },
    { id: 'how-it-works', label: 'How it works', href: '#how-it-works' },
    { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
  ],
  auth: {
    loggedOut: [
      { id: 'login', label: 'Login', href: '/login', isCTA: false },
      { id: 'signup', label: 'Get Started', href: '/signup', isCTA: true },
    ],
    loggedIn: [
      { id: 'dashboard', label: 'Dashboard', href: '/dashboard' },
      { id: 'account', label: 'Account', href: '/account' },
      { id: 'logout', label: 'Logout', href: '/logout' },
    ],
  },
  mobile: [
    // Pueden ser diferentes items para mobile
  ],
}

export const RESULTADOS = [
    {id: "1", metrica: "$2.5B+", descripcion: "Trading Volume"},
    {id: "2", metrica: "120K", descripcion: "Active Traders"},
    {id: "3", metrica: "50+", descripcion: "Global Markets"},
]

export const FEATURES = [
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Real-time Analytics",
    description: "Monitor market movements with advanced charts and indicators updated in real-time."
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Bank-level Security",
    description: "Your assets are protected with military-grade encryption and multi-factor authentication."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Execution",
    description: "Execute trades in milliseconds with our high-performance trading engine."
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Smart Portfolio",
    description: "Optimize your crypto holdings with AI-powered portfolio suggestions."
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Price Alerts",
    description: "Never miss an opportunity with customizable price alerts and notifications."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Cold Storage",
    description: "Majority of assets stored in offline cold wallets for maximum security."
  }
];

export const STEPS = [
  {
    number: "01",
    icon: <Download className="h-6 w-6" />,
    title: "Create Your Account",
    description: "Sign up in minutes with our streamlined onboarding process. No complicated forms or lengthy verification."
  },
  {
    number: "02",
    icon: <Wallet className="h-6 w-6" />,
    title: "Fund Your Wallet",
    description: "Easily deposit crypto or fiat through multiple payment options with zero deposit fees."
  },
  {
    number: "03",
    icon: <BarChart4 className="h-6 w-6" />,
    title: "Start Trading",
    description: "Access 50+ cryptocurrencies and start trading immediately with intuitive tools and real-time data."
  }
]

export const TESTIMONIALS = [
  {
    quote: "CryptoFlow has completely transformed my crypto trading experience. The real-time analytics and AI recommendations have significantly improved my returns.",
    author: "Michael Chen",
    role: "Full-time Trader",
    avatar: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop"
  },
  {
    quote: "As a beginner, I was intimidated by crypto trading until I found CryptoFlow. Their intuitive interface and educational resources made it easy to start investing confidently.",
    author: "Sarah Johnson",
    role: "Tech Entrepreneur",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop"
  },
  {
    quote: "The security features on CryptoFlow are unmatched. I feel confident keeping my assets on their platform, and the trading fees are the most competitive I've found.",
    author: "David Rodriguez",
    role: "Cybersecurity Specialist",
    avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop"
  },
  {
    quote: "Their customer support is phenomenal. Any time I've had a question or issue, the team has resolved it quickly. The platform itself is lightning fast and reliable.",
    author: "Emma Thompson",
    role: "Investment Advisor",
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop"
  }
]

export const PRICINGPLANS = [
  {
    id: 'plan_starter',
    slug: 'starter',
    name: 'Starter',
    tagline: 'Perfect for beginners',
    description: 'Start your trading journey with essential tools and basic market insights.',
    buttonText: 'Get Started',
    price: {
      monthly: 29,
      annual: 290, // $29 * 12 * 0.17 ≈ $290 (17% descuento)
      currency: 'USD',
    },
    
    discount: {
      percentage: 17,
      amount: 58, // $348 - $290 = $58 ahorro anual
    },
    
    features: [
      {
        id: 'feat_1',
        text: 'Real-time market data for top 50 cryptocurrencies',
        included: true,
      },
      {
        id: 'feat_2',
        text: 'Basic technical indicators (RSI, MACD, Moving Averages)',
        included: true,
      },
      {
        id: 'feat_3', 
        text: 'Email support (48h response time)',
        included: true,
      },
      {
        id: 'feat_4',
        text: 'Portfolio tracking (up to 5 assets)',
        included: true,
      },
      {
        id: 'feat_5',
        text: 'Advanced charting tools',
        included: false,
        tooltip: 'Available in Pro and Enterprise plans',
      },
      {
        id: 'feat_6',
        text: 'Automated trading bots',
        included: false,
        tooltip: 'Available in Pro and Enterprise plans',
      },
      {
        id: 'feat_7',
        text: 'API access',
        included: false,
        tooltip: 'Available in Pro and Enterprise plans',
      },
    ],
    
    highlighted: false,
    popular: false,
    
    cta: {
      text: 'Start Free Trial',
      variant: 'outline' as const,
      href: '/signup?plan=starter',
    },
    
    limits: {
      users: 1,
      apiCalls: 1000, // por día
      alerts: 10,
    },
    
    trialDays: 7,
    recommendedFor: ['Beginners', 'Hobby traders', 'Students'],
  },
  
  {
    id: 'plan_pro',
    slug: 'pro',
    name: 'Pro Trader',
    tagline: 'For serious traders',
    description: 'Advanced tools and analytics for professional cryptocurrency trading.',
    buttonText: 'Get Started',
    price: {
      monthly: 99,
      annual: 950, // $99 * 12 * 0.20 ≈ $950 (20% descuento)
      currency: 'USD',
    },
    
    discount: {
      percentage: 20,
      amount: 238, // $1,188 - $950 = $238 ahorro anual
    },
    
    features: [
      {
        id: 'feat_1',
        text: 'Everything in Starter, plus:',
        included: true,
        highlight: true,
      },
      {
        id: 'feat_8',
        text: 'Real-time data for ALL cryptocurrencies',
        included: true,
      },
      {
        id: 'feat_9',
        text: 'Advanced technical indicators (50+ tools)',
        included: true,
      },
      {
        id: 'feat_10',
        text: 'Priority email & chat support (24h response)',
        included: true,
      },
      {
        id: 'feat_11',
        text: 'Portfolio tracking (unlimited assets)',
        included: true,
      },
      {
        id: 'feat_12',
        text: 'Advanced charting with drawing tools',
        included: true,
      },
      {
        id: 'feat_13',
        text: '3 customizable trading bots',
        included: true,
      },
      {
        id: 'feat_14',
        text: 'Basic API access (10,000 calls/day)',
        included: true,
      },
      {
        id: 'feat_15',
        text: 'Market sentiment analysis',
        included: true,
      },
      {
        id: 'feat_16',
        text: 'Custom alerts & notifications',
        included: true,
      },
      {
        id: 'feat_17',
        text: 'Whale movement tracking',
        included: false,
        tooltip: 'Available in Enterprise plan',
      },
      {
        id: 'feat_18',
        text: 'Dedicated account manager',
        included: false,
        tooltip: 'Available in Enterprise plan',
      },
    ],
    
    highlighted: true,
    popular: true,
    
    cta: {
      text: 'Try Pro Free for 14 Days',
      variant: 'primary' as const,
      href: '/signup?plan=pro',
      onClick: () => {
        // Analytics tracking
        console.log('Clicked Pro CTA');
      },
    },
    
    limits: {
      users: 3,
      apiCalls: 10000,
      alerts: 100,
      bots: 3,
    },
    
    trialDays: 14,
    recommendedFor: ['Active traders', 'Day traders', 'Portfolio managers'],
  },
  
  {
    id: 'plan_enterprise',
    slug: 'enterprise',
    name: 'Enterprise',
    tagline: 'For institutions & teams',
    description: 'Complete trading suite with white-label solutions and enterprise-grade security.',
    buttonText: 'Get Started',
    price: {
      monthly: 299,
      annual: 2868, // $299 * 12 * 0.20 ≈ $2,868 (20% descuento)
      currency: 'USD',
    },
    
    discount: {
      percentage: 20,
      amount: 720, // $3,588 - $2,868 = $720 ahorro anual
    },
    
    features: [
      {
        id: 'feat_1',
        text: 'Everything in Pro, plus:',
        included: true,
        highlight: true,
      },
      {
        id: 'feat_19',
        text: 'Unlimited API access',
        included: true,
      },
      {
        id: 'feat_20',
        text: 'Whale movement & institutional flow tracking',
        included: true,
      },
      {
        id: 'feat_21',
        text: 'Dedicated 24/7 support & account manager',
        included: true,
      },
      {
        id: 'feat_22',
        text: 'Custom trading bots (unlimited)',
        included: true,
      },
      {
        id: 'feat_23',
        text: 'White-label platform option',
        included: true,
      },
      {
        id: 'feat_24',
        text: 'SOC 2 Type II compliance',
        included: true,
      },
      {
        id: 'feat_25',
        text: 'Team management & role-based access',
        included: true,
      },
      {
        id: 'feat_26',
        text: 'Custom data exports & reporting',
        included: true,
      },
      {
        id: 'feat_27',
        text: 'On-premise deployment option',
        included: true,
      },
      {
        id: 'feat_28',
        text: 'Custom integrations (Slack, Telegram, etc.)',
        included: true,
      },
    ],
    
    highlighted: false,
    popular: false,
    
    cta: {
      text: 'Contact Sales',
      variant: 'secondary' as const,
      href: '/contact/enterprise',
      onClick: () => {
        // Analytics tracking
        console.log('Clicked Enterprise CTA');
      },
    },
    
    limits: {
      users: 50,
      apiCalls: Infinity,
      alerts: Infinity,
      storage: '1TB',
    },
    
    trialDays: 30,
    recommendedFor: ['Hedge funds', 'Trading firms', 'Financial institutions'],
  },
]

export const FAQITEMS = [
  {
    question: "How secure is CryptoFlow?",
    answer: "CryptoFlow employs bank-level security measures including 256-bit encryption, cold storage for 95% of assets, two-factor authentication, and regular security audits. Our platform has never been compromised and we maintain a comprehensive insurance policy to protect user funds."
  },
  {
    question: "What cryptocurrencies can I trade on CryptoFlow?",
    answer: "CryptoFlow supports trading of over 50 cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Cardano (ADA), Ripple (XRP), and many more. We regularly add new cryptocurrencies based on market trends and user demand."
  },
  {
    question: "What are the fees for using CryptoFlow?",
    answer: "Our fee structure is transparent and competitive. Basic accounts pay 0.25% per trade, Pro accounts pay 0.1%, and Enterprise accounts pay no trading fees. There are no hidden fees, and we don't charge for deposits. Withdrawal fees vary by cryptocurrency to cover network costs."
  },
  {
    question: "How do I deposit funds into my CryptoFlow account?",
    answer: "You can deposit funds via bank transfer, credit/debit card, or by transferring cryptocurrency from another wallet. Bank transfers typically process within 1-3 business days, while card payments and crypto transfers are nearly instant."
  },
  {
    question: "Is CryptoFlow available in my country?",
    answer: "CryptoFlow is available in over 140 countries worldwide. However, due to regulatory constraints, we cannot serve users from certain jurisdictions. Please check our Terms of Service or contact our support team to verify availability in your specific location."
  },
  {
    question: "How do I get started with CryptoFlow?",
    answer: "Getting started is simple. Create an account, complete the verification process (which typically takes less than 10 minutes), deposit funds using your preferred method, and you're ready to start trading. Our intuitive interface is designed to make cryptocurrency trading accessible for beginners while offering powerful tools for experienced traders."
  }
]

export const SOCIALNETWORKS = [
  {
    icon: <Facebook className="h-6 w-6" />,
    title: "Facebook",
    description: "."
  },
  {
    icon: <Twitter className="h-6 w-6" />,
    title: "Twitter",
    description: "."
  },
  {
    icon: <Instagram className="h-6 w-6" />,
    title: "Instagram",
    description: "."
  },
]

export const FOOTERLINKS = [
  {
    name: "Products",
    links: [
      {title: "Exchange"},
      {title: "Wallet"},
      {title: "API"},
      {title: "Institutional"},
      {title: "DeFI Platform"},
    ],
  },
  {
    name: "Resources",
    links: [
      {title: "Blog"},
      {title: "Tutorials"},
      {title: "Market Data"},
      {title: "Documentation"},
      {title: "Help Center"},
    ],
  },
  {
    name: "Company",
    links: [
      {title: "About"},
      {title: "Careers"},
      {title: "Press"},
      {title: "Legal & Privacy"},
      {title: "Contact Us"},
    ]
  }
]


