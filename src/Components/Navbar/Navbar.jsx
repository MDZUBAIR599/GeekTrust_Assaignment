import React, { useContext } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { Appcontext } from "../../Context/AppontextProvider";
function Navbar() {
  const { state } = useContext(Appcontext);
  const total = state.cart.length;
  return (
    <header className={styles.nav}>
      <div>
        <a href="/">TeeRex Store</a>
      </div>
      <div className={styles.header__cta}>
        <Link to="/">Products</Link>
        <div className={styles.icon}>
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <span>{total}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
