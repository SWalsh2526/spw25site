import Logo from "../assets/mylogo.svg";
import { Link } from 'react-router-dom';
import { Button1 } from './button1';
function Navbar() {
    return(
        <nav className="bg-green-900 h-[12vh] min-h-[80px]">
          <div className="flex flex-row gap-4 items-center h-full">
            <div className="w-[180px]">
            <Link to="/">
            <Logo
            className="w-[180px] h-[90px]"
            />
            </Link>
            </div>
            <div className="flex-none justify-items-center bg-green-700 rounded-xl">
              <Button1>
                <Link to="/WorkProjects">
                  Work Stuff
                </Link>
              </Button1>
              <Button1>
                <Link to="/SchoolProjects">
                  School Stuff
                </Link>
              </Button1>
              <Button1>
                <Link to="/FunProjects">
                  Fun Stuff
                </Link>
              </Button1>
            </div>
          </div>
        </nav>
    );
}

export default Navbar;