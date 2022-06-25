import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1> Ninja List</h1>{" "}
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/About">
          <a>About</a>
        </Link>
        <Link href="/ninja">
          <a>Ninja Listing</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
