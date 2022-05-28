import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Sidedrawer from "./Sidedrawer";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";

function MainNavigation(props) {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  function openDrawerHandler() {
    setDrawerIsOpen(true);
  }
  function closeDrawerHandler() {
    setDrawerIsOpen(false);
  }
  return (
    <React.Fragment>
      {drawerIsOpen ? <Backdrop onClick={closeDrawerHandler} /> : null}
      <Sidedrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </Sidedrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
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
