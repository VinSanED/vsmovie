import { ReactComponent as GithubIcon } from "assets/img/gitHub.svg"
import { ReactComponent as Logo } from "assets/img/logo.svg"
import { NavSty } from "./navSty"


export const Navbar=()=>{
    return(
        <NavSty>
            <nav className="container">
                <div className="vsmovie-nav-content">
                    <Logo width={100} height={60}/>
                    <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                        <div className="vsmovie-contact-container">
                            <GithubIcon />
                            <p className="vsmovie-contact-link">/vinsanEdDev</p>
                        </div>
                    </a>
                </div>
            </nav>
        </NavSty>
    )
}