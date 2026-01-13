


const Step = ({number, icon, title, description}) => {
  return (
    <div className={`col-span-1 relative bg-white/5 border border-white/10 rounded-xl p-8 cursor-pointer`}>
      <span className={`absolute -top-4 -left-4 bg-crypto-blue border rounded-md border-crypto-purple/30 text-crypto-purple font-bold text-xl px-3 py-1`}>
        {number}
      </span>
      <div className={`bg-crypto-purple/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6 text-crypto-purple`}>
        {icon}
      </div>
      <h3 className={`text-xl font-semibold mb-4 text-white`}>
        {title}
      </h3>
      <p className={`text-gray-400`}>
        {description}
      </p>
      
    </div>
  )
}

export default Step
