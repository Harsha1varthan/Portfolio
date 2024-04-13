import { Menubar, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar"
import { Link } from "react-router-dom"
import { ModeToggle } from "@/components/ui/mode-toggle"
import twitter from "../assets/twitter.webp"
import Github from "../assets/github.webp"
import linkedin from "../assets/Linkedin.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Contact(){
    return(
        <div className="w-full min-h-screen flex flex-col sm:justify-center items-center">
            <Menubar className="sm:absolute w-full sm:p-8 sm:flex sm:justify-between top-0">
                <div className="sm:flex sm:items-center">
                    <div className="sm:rounded-full sm:h-12 sm:w-12 sm:bg-white sm:flex sm:justify-center sm:mt-1 sm:mr-2">
                        <div className="sm:flex sm:items-center sm:h-full sm:text-xl sm:text-black sm:font-bold">
                            H
                        </div>
                    </div>
                    <p className="sm:font-bold sm:text-xl sm:ml-4">Harsha varthan</p>
                </div>
                <div className="sm:flex">
                    <MenubarMenu>
                        <MenubarTrigger className="sm:mr-3">
                            <Link to = "/skills" className="sm:text-xl"> Skills</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="sm:mr-3">
                            <Link to = "/projects" className="sm:text-xl">Project</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="sm:mr-3">
                        <Link to = "/" className="sm:text-xl">  Home</Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                    <ModeToggle />
                </div>
            </Menubar>
            <div className="sm:flex sm:gap-4">
               <Link to = "https://github.com/Harsha1varthan" target="_blank">
                 <img src = {Github} ></img>
               </Link>
               <Link to = "https://www.linkedin.com/in/harsha-varthan-a28754256/" target = "_blank">
                 <img src = {linkedin} ></img>
               </Link>
               <Link to = "https://twitter.com/harsha_phile" target = "_blank">
                 <img src = {twitter} ></img>
               </Link>
               <Link to = "https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GTvVlcRwQZtRwnSgdKrNhwrtrWLnFwCncFdfXQNrMqJvQcNTVLCRKzncXdBMbVTNnnVMXWZTDSwJK" target = "_blank">
                 <FontAwesomeIcon icon = {faEnvelope} size = "7x"/>
               </Link>

            </div>

            
        </div>
    )
}