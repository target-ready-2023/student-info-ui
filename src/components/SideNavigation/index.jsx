import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useRoleContext } from "../roles/RoleContext";

const SideNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { userRole } = useRoleContext();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHome = () => {
    navigate("/");
    handleClose();
  };

  const handleStudent = () => {
    navigate("/student");
    handleClose();
  };

  const handleAdmin = () => {
    navigate("/admin");
    handleClose();
  };

  return (
    <>
      <Button
        id="side-navigation"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          style: { flexDirection: "column" },
        }}
      >
        <MenuItem onClick={handleHome}>Home</MenuItem>
        {userRole === "admin" ? (
          <MenuItem onClick={handleAdmin}>Admin</MenuItem>
        ) : null}
        {userRole === "admin" || userRole === "teacher" ? (
          <MenuItem onClick={handleStudent}>Search</MenuItem>
        ) : null}
        <MenuItem onClick={handleHome}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default SideNavigation;
