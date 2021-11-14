import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Products from './Pages/Products/Products/Products';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PurchaseProduct from './Pages/PurchaseProduct/PurchaseProduct';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Shared/Header/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Pay from './Pages/Dashboard/UserDashboard/Pay/Pay';
import MyOrder from './Pages/Dashboard/UserDashboard/MyOrder/MyOrder';
import Review from './Pages/Dashboard/UserDashboard/Review/Review';
import MakeAdmin from './Pages/Dashboard/AdminDashboard/MakeAdmin/MakeAdmin';
import AddProducts from './Pages/Dashboard/AdminDashboard/AddProducts/AddProducts';
import ManageAllOrders from './Pages/Dashboard/AdminDashboard/ManageAllOrders/ManageAllOrders';
import MangeProducts from './Pages/Dashboard/AdminDashboard/ManageProducts/MangeProducts';

function App() {
  return (
    <div >
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
              <Products></Products>
            </Route>

            <PrivateRoute path="/purchase/:id">
              <PurchaseProduct></PurchaseProduct>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <SignUp></SignUp>
            </Route>

            {/* User Dashboar route  */}
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/pay">
              <Pay></Pay>
            </Route>

            <Route path="/myorder">
              <MyOrder></MyOrder>
            </Route>

            <Route path="/review">
              <Review></Review>
            </Route>

            {/* Admin Dashboar route  */}
            <Route path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>

            <Route path="/addproducts">
              <AddProducts></AddProducts>
            </Route>

            <Route path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </Route>

            <Route path="/manageproducts">
             <MangeProducts></MangeProducts>
            </Route>

            {/* Invalid Page */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
