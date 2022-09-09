import { Box, Button, useColorMode } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ColorMode } from "../../heroes/components/ColorMode";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "../../../src/styles.css";
import { startLogout } from "../../auth/store/auth/thunks";
export const Navbar = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const { displayName } = useSelector((state) => state.auth);

  const isActive = ({ isActive }) =>
    `nav-item nav-link ${isActive ? "active" : ""}`;
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(startLogout());
    navigate("auth/login", {
      replace: true,
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 navbar">
      <Link className="navbar-brand noshow" to="/marvel">
        HeroesApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav navbarnav">
          <NavLink className={isActive} to="/marvel">
            Marvel
          </NavLink>

          <NavLink className={isActive} to="/dc">
            DC
          </NavLink>
          <NavLink className={isActive} to="/search">
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto ulnav">
          <span className="nav-item nav-link">{displayName}</span>
          <Box pt="0" pl="1" px="1">
            <ColorMode />
          </Box>
          <Button
            className="text-secondary btn nav-item nav-link"
            onClick={onLogout}
          >
            Logout
          </Button>
        </ul>
      </div>
    </nav>
  );
};
