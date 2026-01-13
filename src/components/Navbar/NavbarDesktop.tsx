import { NAVIGATION } from "@/constants"
import NavbarLink from "./NavbarLink"



const NavbarDesktop = () => {
  return (
    <div className={`hidden lg:flex items-center space-x-1`}>
        {/* navegacion principal */}
        <nav>
            <ul className={`flex items-center space-x-1`}>
                {
                    NAVIGATION.main.map((item) => (
                        <li>
                            <NavbarLink {...item}/>
                        </li>
                    ))
                }
            </ul>
        </nav>
        {/* navegacion auth */}
        <div className={`ml-6 flex items-center space-x-2 border-l border-gray-800 pl-6`}>
            {
                NAVIGATION.auth.loggedOut.map((item, index) => (
                    <NavbarLink key={item.id} {...item} variant="desktop"/>
                ))
            }
        </div>
        
    </div>
  )
}

export default NavbarDesktop
