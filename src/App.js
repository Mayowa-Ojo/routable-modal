import React from "react";
import {
   Switch,
   Route,
   useLocation
} from "react-router-dom";
import Home from "./Home";
import Contacts from "./Contacts";
import Modal from "./Modal";

export default function App() {
   const location = useLocation();
   const background = location.state && location.state.background;

   return (
      <div className="w-full bg-gray-200 px-4 relative">
         <Switch location={background || location}>
            <Route path="/" exact component={Home} />
            <Route path="/contacts" exact component={Contacts} />
         </Switch>

         {background && <Route path="/contact/:name" children={<Modal />} />}
      </div>
   );
}
