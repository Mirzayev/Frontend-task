import Header from "../components/Header.jsx";
import {NavLink, Outlet} from "react-router-dom";


export default  function  LDefault(){


    return(
        <div>
            <Header/>

<Outlet/>

        </div>
    )
  }