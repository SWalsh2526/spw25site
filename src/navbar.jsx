import './App.css';
import Logo from "./mylogo.svg";
import React from 'react';
import { MyButton } from './myButton';
function Navbar() {
    return(
        <nav className="bg-green-900 h-[12vh] min-h-[80px]">
          <div className="flex flex-row gap-4 items-center h-full">
            <div className="w-[180px]">
            <Logo
            className="w-[180px] h-[90px]"
            />
            </div>
            <div className="flex-none justify-items-center bg-green-700 rounded-xl">
              <MyButton>
                Work stuff
              </MyButton>
              <MyButton>
                School stuff
              </MyButton>
              <MyButton>
                Fun stuff
              </MyButton>
            </div>
          </div>
        </nav>
    );
}

export default Navbar;