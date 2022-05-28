import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Sidedrawer from "./Sidedrawer";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";

function MainNavigation(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  function openDrawer() {
    setDrawerIsOpen(true);
  }
  function closeDrawer() {
    setDrawerIsOpen(false);
  }
  return (
    <React.Fragment>
      {drawerIsOpen ? (
        <React.Fragment>
        <Backdrop onClick={closeDrawer}/>
        <Sidedrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </Sidedrawer>
        </React.Fragment>
      ) : null}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;
