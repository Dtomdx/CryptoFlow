// src/types/pricing.ts
export type BillingCycle = 'monthly' | 'annual';  // ✅ Con export

export interface PricingFeature {  // ✅ Esto también necesita export si lo usas
  id: string;
  text: string;
  included: boolean;
  tooltip?: string;
  highlight?: boolean;
}

export interface PricingPlan {  // ✅ Con export
  id: string;
  slug: string;
  name: string;
  tagline?: string;
  description: string;
  buttonText: string;
  price: {
    monthly: number;
    annual: number;
    currency: string;
  };
  
  discount?: {
    percentage: number;
    amount: number;
  };
  
  features: PricingFeature[];  // ← Aquí usas PricingFeature
  highlighted: boolean;
  popular: boolean;
  
  cta?: {
    text: string;
    variant: 'primary' | 'secondary' | 'outline';
    href?: string;
    onClick?: () => void;
  };
  
  limits?: {
    users?: number;
    storage?: string;
    apiCalls?: number;
  };
  
  trialDays?: number;
  recommendedFor?: string[];
}