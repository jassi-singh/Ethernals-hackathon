import { useState } from "react";
import { PlayIcon, RoboAvatar, ChavronDown } from "../SVG/SVG";

const Navbar = () => {
    const style = {
        navwrapper : "w-full flex flex-row justify-between bg-[#00000022] px-2",
        anchor : "w-1/6",
        logo : "flex flex-row align-middle",
        joinButton : "rounded-full bg-[#fff] px-2 py-1 my-3",
        userInfo : "flex flex-row align-middle my-auto mx-2 rounded-full bg-[#ffffff36] px-2 py-1"
    }

    const [joined, setJoined] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);
    return(
        <div className={style.navwrapper}>
            <a href="/" className={style.anchor}>
              <div className={style.logo}>
                <PlayIcon />
                <span style={{fontSize: "48px"}}>DPlay</span>
              </div>
            </a>
            {joined ? 
                <div className={style.userInfo} onClick={()=>setInfoOpen(!infoOpen)}>
                    <RoboAvatar />
                    <span className="h-4 px-1">0x8.......D431</span>
                    <ChavronDown />
                </div>
            :<button className={style.joinButton} onClick={()=>setJoined(true)}>Connect Wallet</button>}
           {infoOpen && <div className="w-48 h-48 absolute right-2 top-12 bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-evenly items-center p-2 text-[#fff]">
                <RoboAvatar />
                <span className="h-4">0x8.......D431</span>
                <span className="h-4">Credits: 25 MATICS</span>
                <span className="justify-self-end" onClick={()=>{setJoined(false);setInfoOpen(false)}}>Logout</span>
            </div>}
        </div>
    );
}
export default Navbar;