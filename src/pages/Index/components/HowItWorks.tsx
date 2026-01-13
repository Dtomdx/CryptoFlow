import { STEPS } from "@/constants";
import Step from "./Step";

const HowItWorks = () => {
  return (
    <section className={`py-24`}>
      <div className={`grid grid-cols-3 grid-rows-3 gap-8`}>
        <div
          className={`col-span-3 flex flex-col justify-center items-center mb-10`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient`}>
            How It Works
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto text-center`}>
            Getting started with CryptoFlow is easy. Follow these simple steps
            to begin your crypto journey
          </p>
        </div>
        {
            STEPS.map((step, index) => (
                <Step
                    key={index}
                    number={step.number}
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                />
        ))
        }
        <div className={`flex justify-center items-center  text-center  col-span-3 w-full h-20`}>
            <button className={`bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 w-56 h-10 rounded-md cursor-pointer`}>
                Create Free Account
            </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
