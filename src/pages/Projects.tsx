import PaytmImage from "../assets/paytm.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Medium from "../assets/medium.png"
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

import { Link } from "react-router-dom"
export default function Projects(){
    return(
        <div className="w-full min-h-screen flex flex-col sm:items-center sm:justify-center">
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
                            <Link to = "/" className="sm:text-xl"> Home</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="sm:mr-3">
                        <Link to = "/contact" className="sm:text-xl">  Contact</Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                    <ModeToggle />
                </div>
            </Menubar>
            <div className="sm:flex border border-slate-100 sm:w-2/4 p-4 sm:justify-between w-5/6">
                <div className="sm:flex sm:items-center sm:mr-6 sm:w-1/2">
                  <img src = {PaytmImage}>
                  </img>
                </div>
                <div>
                    <h1 className="font-bold text-3xl">Paytm SpinOff</h1>
                    <h3>
                        Tech Stacks - Nodejs, expressjs, React, Recoil, MongoDB
                    </h3>
                    <h3>
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> GitHub Link -  <Link to = "https://github.com/Harsha1varthan/paytm" className="text-sky-600 text-2xl">
                        Payup
                    </Link>
                    </h3>
                    <h3>
                        Designed Complete Frontend and Backend of Paytm
                    </h3>
                    

                </div>
            </div>
            <div className="sm:flex border border-slate-100 sm:w-2/4 p-4 sm:justify-between">
                <div className="sm:flex sm:items-center sm:mr-14 sm:w-1/2">
                  <img src = {Medium} className="sm:max-w-44 sm:m-4">
                  </img>
                </div>
                <div>
                    <h1 className="font-bold text-3xl">Medium SpinOff</h1>
                    <h3>
                        Tech Stacks - Nodejs, expressjs, React, Recoil, Postgres, Hono, AWS
                    </h3>
                    <h3>
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> GitHub Link -  Coming Soon
                    </h3>
                    <h3>
                        Designed Complete Frontend and Backend of Medium
                    </h3>
                    

                </div>
            </div>
        </div>
    )
}