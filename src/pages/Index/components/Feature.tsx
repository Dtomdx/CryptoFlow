

const Feature = ({icon, title, description}) => {
    return (
        <div className={`relative w-96 h-48  col-span-1 rounded-xl p-6 border-white/10 border bg-white/5 hover:bg-white/10`}>
            <div className={`bg-crypto-purple/20 rounded-lg w-12 h-12 flex items-center justify-center mb-5 text-crypto-purple `}>
                {icon}
            </div>
            <h3 className={`text-xl font-semibold mb-3 text-white`}>
                {title}
            </h3>
            <p className={`text-gray-400`}>
                {description}
            </p>
        </div>
    )
}

export default Feature;