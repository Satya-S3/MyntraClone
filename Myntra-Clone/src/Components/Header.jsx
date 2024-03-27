import "bootstrap/dist/css/bootstrap.min.css"
import { CgProfile } from "react-icons/cg";
import { CiBoxList } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useRef } from "react";
import { searchActions } from "../Store/searchSlice";

function Header() {

      const bag=useSelector(store=>store.bag);

      const dispatch = useDispatch();

      const SearchValue=(e)=>{
            dispatch(searchActions.addSearchValue(e));
      }
           

      return <>
            <header className="head">
                  <div className="logo_container">
                        <Link to="/"><img id="logo" className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
                  </div>
                  <nav className="nav_bar">
                        <a href="#">Men</a>
                        <a href="#">Women</a>
                        <a href="#">Kids</a>
                        <a href="#">Home & Living</a>
                        <a href="#">Beauty</a>
                        <a href="#">Studio <sup>New</sup></a>
                  </nav>
                  <div className="search_bar">
                        <input className="search_input px-1" placeholder="Search Here" onChange={(e)=>{SearchValue(e.target.value)}} />
                  </div>
                  <div className="action_bar">
                        <div className="action_container">
                              <CgProfile />
                              <b><span className="action_name">Profile</span></b>
                        </div>

                        <div className="action_container">
                              <CiBoxList />
                              <b><span className="action_name">Wishlist</span></b>
                        </div>

                        <Link className="action_container" to="/bag">
                              <IoBagAddOutline />
                              <b><span className="action_name">Bag</span></b>
                              {bag.length!=0 && <span className="bag-item-count">{bag.length}</span>} 
                        </Link>
                  </div>
            </header>
      </>
}
export default Header;