import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Page/Home/Home/Home";
import Product from "./Page/Home/Products/Product/Product";
import Navigation from "./Page/Home/Navigation/Navigation";
import Login from "./Page/Home/Login/Login/Login";
import Register from "./Page/Home/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvide/AuthProvider";
import DashBoard from "./Page/Dashboard/DashBoard/DashBoard";
import PrivateRoute from "./Page/Home/PrivateRoute/PrivateRoute";
import Pay from "./Page/Dashboard/Pay/Pay";
import Sidebar from "./Page/Dashboard/Sidebar/Sidebar";
import { Col, Row } from "react-bootstrap";
import Review from "./Page/Dashboard/Review/Review";
import UserReview from "./Page/Home/UserReview/UserReview";
import OrderDetails from "./Page/PlaceOrder/OrderDetails";
import MyOrder from "./Page/Dashboard/MyOrder/MyOrder";
import Order from "./Page/Dashboard/MyOrder/Order";
import MakeAdmin from "./Page/Dashboard/MakeAdmin/MakeAdmin";
import AddProduct from "./Page/Dashboard/AddProduct/AddProduct";
import Explore from "./Page/Home/Explore/Explore";
import Blog from "./Page/Home/Blogs/Blog";
import ManageOrders from "./Page/Dashboard/ManageOrders/ManageOrders";
import ManageProducts from "./Page/Dashboard/ManageProducts/ManageProducts";
import NotFound from "./Page/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/products">
            {/* <Home></Home> */}
            <Navigation></Navigation>
            <Product></Product>
          </Route>
          <Route path="/userReview">
            <Navigation></Navigation>
            <UserReview></UserReview>
          </Route>
          <Route path="/blog">
            <Navigation></Navigation>
            <Blog></Blog>
          </Route>
          <Route path="/explore">
            <Navigation></Navigation>
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/placeOrder/:productsId">
            <Navigation></Navigation>
            <OrderDetails></OrderDetails>
          </PrivateRoute>
          <Route path="/login">
            <Navigation></Navigation>
            <Login></Login>
          </Route>
          <Route path="/register">
            <Navigation></Navigation>
            <Register></Register>
          </Route>

          <PrivateRoute path="/dashboard">
            <Navigation></Navigation>
            <Row>
              <Col sm={2}><DashBoard></DashBoard></Col>
            </Row>
          </PrivateRoute>
          <PrivateRoute path="/pay">
          <Navigation></Navigation>
            <Row>
              <Col sm={2}><Sidebar></Sidebar></Col>
              <Col sm={10}><Pay></Pay></Col>
            </Row>  
          </PrivateRoute>
          <PrivateRoute path="/review">
          <Navigation></Navigation>
            <Row>
              <Col sm={2}><Sidebar></Sidebar></Col>
              <Col sm={10}><Review></Review></Col>
            </Row>  
          </PrivateRoute>
          <PrivateRoute path="/myorder">
          <Navigation></Navigation>
            <Row>
              <Col sm={2}><Sidebar></Sidebar></Col>
              <Col sm={10}><Order></Order></Col>
            </Row>  
          </PrivateRoute>
          <PrivateRoute path="/admin">
          <Navigation></Navigation>
            <Row>
              <Col sm={2}><Sidebar></Sidebar></Col>
              <Col sm={10}><MakeAdmin></MakeAdmin></Col>
            </Row>  
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
          <Navigation></Navigation>
            <Row>
              <Col sm={2}><Sidebar></Sidebar></Col>
              <Col sm={10}><AddProduct></AddProduct></Col>
            </Row>  
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
          <Navigation></Navigation>
            <Row>
              <Col sm={2}><Sidebar></Sidebar></Col>
              <Col sm={10}><ManageProducts></ManageProducts></Col>
            </Row>  
          </PrivateRoute>
          <PrivateRoute path="/manageOrders">
          <Navigation></Navigation>
            <Row>
              <Col sm={2}><Sidebar></Sidebar></Col>
              <Col sm={10}><ManageOrders></ManageOrders></Col>
            </Row>  
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
