import { FOOTERLINKS, SOCIALNETWORKS } from "@/constants";
import SocialNetworkIcon from "./SocialNetworkIcon";
import FooterLinks from "./FooterLinks";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <div className={`grid lg:grid-cols-5  md:grid-cols-2 gap-8 pb-8`}>
            <div className={`lg:col-span-2`}>
            <h2 className={`text-2xl font-bold text-white mb-4`}>
              Crypto
              <span className={`text-crypto-purple`}>
                Flow
              </span>
            </h2>
            <p className={`text-gray-400 mb-6 max-w-xs`}>
              The most trusted cryptocurrency platform, empowering traders with
              innovative tools and unparalleled security.
            </p>
            <div className={`flex space-x-4`}>
              {SOCIALNETWORKS.map((item, index) => (
                <SocialNetworkIcon
                  key={index}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </div>
            </div>
            {
                FOOTERLINKS.map((item, index) => (
                    <FooterLinks key={index} name={item.name} links={item.links}/>
                ))
            }
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} CryptoFlow. All rights reserved.
              ~ Distributed By <a href="https://themewagon.com/" target="_blank" className="text-crypto-purple hover:underline">MendaxDev</a>
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Terms of Service</a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Privacy Policy</a>
              <a href="#!" className="text-gray-400 hover:text-crypto-purple text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
