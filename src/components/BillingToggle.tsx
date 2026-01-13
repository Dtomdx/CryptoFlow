import type { BillingCycle } from "@/types";

interface BillingToggleProps {
  cycle: BillingCycle;
  onChange: (cycle: BillingCycle) => void;
  showDiscount?: boolean;
}

const BillingToggle = ({
  cycle,
  onChange,
  showDiscount = true,
}: BillingToggleProps) => {
  return (
    <div className={`flex p-1 bg-gray-900 border border-gray-800 rounded-full h-14`}>
      <button
        onClick={() => onChange("monthly")}
        className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
          cycle === "monthly"
            ? "bg-white text-gray-900 shadow-lg"
            : "text-gray-400 hover:text-gray-300"
        }`}
      >
        Monthly
      </button>
      <button
        type="button"
        onClick={() => onChange("annual")}
        className={`px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 ${cycle === 'annual'
            ? 'bg-white text-gray-900 shadow-lg'
            : 'text-gray-400 hover:text-gray-300'
        }`}
      >
        Annual
        {
            showDiscount && (
                <span className={`bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full`}>
                    Save 20%
                </span>
            )
        }
      </button>
    </div>
  );
};

export default BillingToggle;
