import type {PricingPlan}  from "@/types";
import { Check, Info, X } from "lucide-react";

interface PlanCardProps {
  plan: PricingPlan;
  billingCycle: 'monthly' | 'annual';
  formatPrice: (amount: number) => string;
  className?: string
}

const PlanCard = ({plan, billingCycle, formatPrice, className}: PlanCardProps) => {
  const currentPrice = plan.price[billingCycle]
  const isAnnual = billingCycle === 'annual';
  
  return (
    <article className={`relative  from-gray-900/50 to-gray-900/20 
         rounded-2xl p-8 transition-all duration-300 
        hover:scale-[1.02] hover:shadow-2xl
        ${plan.popular ? 'border-purple-500 shadow-lg shadow-purple-500/10' : 'border-gray-800'}
        ${className}`}>
      {/* badge */}
      {
        plan.popular && (
          <div className={`absolute -top-3 left-1/2 -translate-x-1/2`}>
            <span className={`bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1.5 rounded-full`}>
              Most Popular
            </span>
          </div>
        )
      }
      {/* header */}
      <header className={`mb-8`}>
        <h3 className={`text-2xl font-bold text-white mb-2`}>
          {plan.name}
        </h3>
        {
          plan.tagline && (
            <p className={`text-gray-400 text-sm`}>
              {plan.tagline}
            </p>
          )
        }
      </header>
      {/* pricing */}
      <div className={`mb-8`}>
        <div className={`flex items-baseline mb-2`}>
          <span className={`text-4xl md:text-5xl font-bold text-white`}>
            {formatPrice(currentPrice)}
          </span>
          <span className={`text-gray-400 items-baseline ml-2`}>
            {plan.price.monthly > 0 ? '/month':''}
          </span>
        
          {
            isAnnual && plan.discount?.percentage && (
              <div className={`text-green-400 text-sm`}>
                Save {plan.discount.percentage}% annually
              </div>
            )
          }
          {
            plan.trialDays && (
              <div className={`text-gray-400 text-sm mt-1`}>
                {plan.trialDays}-day free trial
              </div>
            )
          }
        </div>
        {/* description */}
        <p className={`text-gray-300 mb-8`}>
          {plan.description}
        </p>
        {/* cta */}
        <button className={`w-full mb-8 ${
          plan.popular 
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
            : 'bg-gray-800 hover:bg-gray-700'
        }`}>
          {plan.buttonText}
        </button>
        {/* features */}
        <div>
          <h4 className={`text-sm font-semibold text-gray-300 mb-4`}>
            What's included:
          </h4>
          <ul className={`space-y-3`}>
            {
              plan.features.map((feature) => (
                <li className={`flex items-start`}>
                  {
                    feature.included ? (
                      <Check className={`h-5 w-5`}/>
                    ) : (
                      <X className={`h-5 w-5`}/>
                    )
                  }
                  <span>
                    {feature.text}
                    {
                      feature.tooltip && (
                        <Info className={`h-4 w-4 text-gray-500 ml-2 inline`}/>
                      )
                    }
                  </span>
                </li>

              ))
            }
          </ul>
        </div>
      </div>
    </article>
  )
}

export default PlanCard