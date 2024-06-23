// components/NavBar/NavBar.js

import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import "./NavBar.css";
import Link from "@mui/material/Link";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link href="/" className="logo-link" underline="none">
          <h1>Next.js Dashboard</h1>
        </Link>
      </div>
      <ul className="NavMenu">
        <li className="nav-item">
          <PlaylistAddIcon />
          <label>Create New</label>
        </li>
      </ul>
    </div>
  );
}
