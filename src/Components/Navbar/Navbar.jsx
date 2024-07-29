import { useState } from "react";
import Link from "../Link/Link";
import { IoIosMenu} from "react-icons/io";
import {  AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {

const [open, setOpen] = useState(false)
 

    const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/services', name: 'Services' },
  { id: 4, path: '/contact', name: 'Contact' },
  { id: 5, path: '/order-review', name: 'Order Review' }
];


    return (

        <nav className="text-black p-6 bg-yellow-200">
       <div className="md:hidden text-2xl" onClick = {() => setOpen (!open)}>
        {
          open === true ? 
          <AiOutlineClose> </AiOutlineClose>
           : <IoIosMenu className=" " />
        }
         
       </div>
           <ul className= {`md:flex duration-1000 absolute md:static 
           ${open ? 'top-16' : '-top-60'}
           bg-yellow-200 px-6 `}>
         
            {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;



    /*     {
                 routes.map(route => <li className="mr-10" key={route.id}>
                <a href={route.path}/>
                {route.name}
                </li>)
        } */