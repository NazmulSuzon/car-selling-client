import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./sidebar.css";
import useAuth from "../../Hooks/useAuth";

const Sidebar = () => {
  const { isAdmin,logOut } = useAuth();
  // console.log(user)
  return (
    <Nav
      defaultActiveKey="/home"
      className="flex-column border text-center sidebar"
    >
      <Link className="mt-4" to="/home">
        Home
      </Link>
      <Link className="mt-3" to="/pay">
        Pay
      </Link>
      <Link className="mt-3" to="/myorder">
        My Order
      </Link>
      <Link className="mt-3" to="/review">
        Review
      </Link>
      {
        isAdmin && <>
        <Link className="mt-3" to="/admin">
        Make Admin
      </Link>
      <Link className="mt-3" to="/addProduct">
        Add Product
      </Link>
      <Link className="mt-3" to="/manageOrders">
        Manage All Orders
      </Link>
      <Link className="mt-3" to="/manageProduct">
        Manage Product
      </Link>
        </>
      }
      <Button
            className="m-3 bg-primary text-light rounded py-2"
            onClick={logOut}
            variant="light"
          >
            Logout
          </Button>
    </Nav>
  );
};

export default Sidebar;
