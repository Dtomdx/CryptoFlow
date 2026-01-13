import type { BillingCycle, PricingPlan } from "@/types";
import { useMemo, useState } from "react";


interface UsePricingOptions {
    plans: PricingPlan[];
    defaultCycle?: BillingCycle;
    currency?: string;
}



export const usePricing = ({plans, defaultCycle = 'monthly'}: UsePricingOptions) => {
    const [billingCycle, setBillingCycle] = useState<BillingCycle>(defaultCycle)

    const calculateAnnualSavings = (monthlyPrice: number, annualPrice: number) => {
        const annualFromMonthly = monthlyPrice * 12;
        return {
            percentage: Math.round(((annualFromMonthly - annualPrice) / annualFromMonthly) * 100),
            amount: annualFromMonthly - annualPrice
        }
    }

    //planes con precios calculados
    const processedPlans = useMemo(() => {
        return plans.map((plan) => (
            {
                ...plan,
                currentPrice: plan.price[billingCycle],
                isAnnual: billingCycle === 'annual',
                discount: calculateAnnualSavings(plan.price.monthly, plan.price.annual)
            }
        ))
    }, [plans, billingCycle])

    // helper para formatear precios
    const formatPrice = (amount: number, currency = "USD") => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency,
            minimumFractionDigits: 0,

        }).format(amount);
    }

    return {
        billingCycle,
        setBillingCycle,
        plans: processedPlans,
        formatPrice,
        isAnnual: billingCycle === 'annual',
    }
}