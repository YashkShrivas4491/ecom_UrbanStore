import { NavLink } from "react-router-dom";
import "./../App.css";
import { FaCartArrowDown, FaWpexplorer } from "react-icons/fa6";


const Nav = ({ cartItemCount }) => {
  return (
    <div className="nv">
      <ul>
        <li>
          <NavLink to="/" className="nav-link">
            Explore{" "}
            <FaWpexplorer
              style={{
                marginLeft: "0.5em",
              }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-link">
            Cart
            <FaCartArrowDown
              style={{
                marginLeft: "0.5em",
              }}
            />
            {cartItemCount > 0 && (
              <span
                className="cart-count"
                style={{
                  color: "black",
                  marginBottom: "1em",
                  background: "yellow",
                  borderRadius: "10px",
                  marginLeft: "0.5em",
                }}
              >
                {cartItemCount}
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
