import { FAQITEMS } from "@/constants"
import Accordion from '@mui/material/Accordion';
//import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';




const Faq = () => {

  
  return (
    <section className={`mt-20 py-24  from-[#12141C] to-crypto-blue`}>
        <div className={`mx-auto px-4`}>
          <div className={`text-center mb-16`}>
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-gradient`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-gray-400 max-w-2xl mx-auto`}>
              Got questions about CryptoFlow? We've got answers. If you don't see what you're looking for, reach out to our support team.
            </p>
          </div>
          <div>
            {
              FAQITEMS.map((item, index) => (
                <Accordion key={index} className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden animate-on-scroll max-w-3xl mx-auto`}>
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon className={`text-white`}/>}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    
                  >
                    <Typography component="span" className={`px-6 py-4 text-white hover:text-crypto-purple hover:no-underline`}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={`px-6 pb-4 text-gray-400`}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Faq
