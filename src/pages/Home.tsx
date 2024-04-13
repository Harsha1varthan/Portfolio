
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Link } from "react-router-dom"
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
export default function Home(){
    return(
        <div className="w-full min-h-screen ">
            <Menubar className="sm:absolute w-full sm:p-8 sm:flex sm:justify-between">
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
                        <Link to = "contact" className="sm:text-xl">  Contact</Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                    <ModeToggle />
                </div>
            </Menubar>
            <div className="w-full min-h-screen flex items-center justify-center">
                <div className = "w-11/12 p-4">
                    <h1 className="font-bold text-4xl mb-4 sm:text-6xl sm:mb-5">Hi, I am Harshavarthan </h1> 
                    <p className="sm:text-2xl">I'm  a software Engineer, who had able to learn, built, solve and can make our projects better.</p>
                </div>
            </div>
        </div>
    )
}