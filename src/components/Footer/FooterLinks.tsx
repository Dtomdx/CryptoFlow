


const FooterLinks = ({name, links}) => {
  return (
    <div>
        <h3 className={`text-white font-medium mb-4`}>
            {name}
        </h3>
        <ul className={`space-y-2`}>
            {
                links.map((item, index) => (
                    <li key={index}>
                        <a href="" className={`text-gray-400 hover:text-crypto-purple transition-colors`}>
                            {item.title}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default FooterLinks
