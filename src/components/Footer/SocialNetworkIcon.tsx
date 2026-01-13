


const SocialNetworkIcon = ({icon, title}) => {
  return (
    <a href="" className={`text-gray-400 hover:text-crypto-purple transition-colors`}>
        {
            icon
        }
        <span className={`sr-only`}>
            {title}
        </span>
    </a>
  )
}

export default SocialNetworkIcon
