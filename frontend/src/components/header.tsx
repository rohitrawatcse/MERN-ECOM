import { useState } from "react"
import { FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

const user = { _id: "ROHIT", role:"admin" }


const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);


  return (
      <nav>
          <Link to={"/"} onClick = {()=> setIsOpen(false)}>Home</Link>
          <Link to={"/search"} onClick = {()=> setIsOpen(false)}>
              <FaSearch/>
          </Link>
          <Link to={"/cart"} onClick = {()=> setIsOpen(false)}> 
              <FaShoppingBag/>
          </Link>

          {
              user?._id ? (<>
                  <button onClick = {()=> setIsOpen((prev)=> !prev)}>
                      <FaUser />
                      <dialog open={isOpen}>
                          <div>
                              {
                                  user.role === "admin" && (<Link to="/admin/dashboard">Admin</Link>
                                  )}
                              <Link to="/orders">Orders</Link>
                              <button>
                                  <FaSignOutAlt />
                              </button>
                          </div>
                      </dialog>
                  </button>
              </>): (<Link to = {"/login"}><FaSignInAlt/>Login</Link>)
          }
         
    </nav>
  )
}

export default Header