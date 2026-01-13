import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import {RESULTADOS} from "@/constants/index"  
import Results from "./Results";

const Hero = () => {
  return (
    <section className={`relative h-2/4  `}>
      <div className={`grid justify-center items-center`}>
        <div className={`grid grid-cols-2`}>
          <div className={`col-span-1`}>
            <div className={`inline-flex bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6`}>
              <span className={`text-xs font-medium text-crypto-purple mr-2`}>
                New Feature
                </span>
              <span className={`text-xs text-gray-300`}>
                AI-Powered Trading Signals
              </span>
              <ChevronRight className={`h-4 w-4 text-gray-400 ml-1`}/>
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text6xl font-bold mb-6 leading-tight`}>
              <span className={`text-gradient`}>
                Trade Crypto&nbsp;
              </span>
               with Confidence & Clarity
            </h1>
            <p className={`text-lg text-gray-300 mb-8 max-w-lg`}>
              Experience seamless cryptocurrency trading with real-time
              analytics, AI-powered insights, and zero commission fees.
            </p>
            <div className={`flex sm:flex-row gap-4`}>
              <button className={`bg-crypto-purple hover:bg-crypto-dark-purple text-white px-8 py-3 rounded-lg flex items-center`}>
                Start Trading
                <ArrowRight className={`ml-2 h-5 w-5`}/>
              </button>
              <button className={`bg-black border-gray-700 text-white hover:bg-white/5 px-8 py-3 rounded-lg flex items-center`}>
                View Demo
                <ArrowUpRight className={`ml-2 h-5 w-5`}/>
              </button>
            </div>
            <div className={`flex mt-8 items-center space-x-6`}>
              {
                RESULTADOS.map((item) => (
                  <Results key={item.id} metrica={item.metrica} descripcion={item.descripcion}/>
                ))
              }
            </div>
          </div>
          <div className={`col-span-1`}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&h=800"
                alt="Trading platform dashboard"
                className={``}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
