import BillingToggle from "@/components/BillingToggle";
import PlanCard from "@/components/PlanCard";
import { PRICINGPLANS } from "@/constants";
import { usePricing } from "@/hooks/usePricing";

const Pricing = () => {
  const { billingCycle, setBillingCycle, plans, formatPrice, isAnnual } =
    usePricing({
      plans: PRICINGPLANS,
      defaultCycle: "monthly",
      currency: "USD",
    });

  return (
    <section className={``}>
      <div className={`grid grid-cols-3 grid-rows-2`}>
        <div
          className={`relative col-span-3 row-span-1  flex flex-col justify-center items-center  w-full h-48 mb-10`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient`}>
            Simple, Transparent Pricing
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto mb-8`}>
            Choose the plan that best fits your trading needs.All plans include
            our core platform features.
          </p>
        </div>
        <div className={`col-span-3 row-span-1 flex justify-center`}>
          <BillingToggle
            cycle={billingCycle}
            onChange={setBillingCycle}
            showDiscount
          />
        </div>

        {plans.map((plan, index) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            billingCycle={billingCycle}
            formatPrice={formatPrice}
            className={`col-span-1  flex flex-col  w-96 `}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
