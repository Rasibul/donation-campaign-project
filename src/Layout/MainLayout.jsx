import { Outlet } from "react-router-dom";
import NavBar from "../Componenets/Header/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-[1300px]  mx-auto py-20">
                <div className="mx-5">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;