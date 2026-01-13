import Feature from "./Feature";
import { FEATURES } from "@/constants/index";

const Features = () => {
  return (
    <div className={`relative mt-48 `}>
      <div className={`grid grid-cols-3 grid-rows-3 md:grid-cols-2 w-full gap-4`}>
        <div
          className={`col-span-3 row-span-1 flex flex-col justify-center items-center`}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient`}>
            Powerfull Features
          </h2>
          <p className={`text-gray-400 max-w-2xl mx-auto text-center`}>
            CryptoFlow gives you the edge with advanced tools designed for both beginners and professional traders.
          </p>
        </div>
        {FEATURES.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
