import { ModeToggle } from "@/components/ui/mode-toggle"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { Link } from "react-router-dom"
export default function Skills(){
    return (
        <div className="w-full min-h-screen ">

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
                            <Link to = "/" className="sm:text-xl"> Home</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="sm:mr-3">
                            <Link to = "/projects" className="sm:text-xl">Project</Link>
                        </MenubarTrigger>
                        <MenubarTrigger className="sm:mr-3">
                        <Link to = "/contact" className="sm:text-xl">  Contact</Link>
                        </MenubarTrigger>
                    </MenubarMenu>
                    <ModeToggle />
                </div>
            </Menubar>
            <div className="flex flex-col sm:justify-items-center sm:items-center items-center mt-14">
                <div className="w-4/5 grid gap-1 p-4 justify-items-center grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] border border-slate-200 mt-5">
                    <div><img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"></img></div>
                    <div><img src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704"></img></div>
                    <div><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/62091613/261395532-b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png"></img></div>
                    <div><img src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"></img></div>
                </div>
            </div>
        </div>
        
    )
}