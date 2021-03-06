import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import classes from "./App.module.css";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Event from "./components/Event/Event";

import Navbar from "./layouts/navigation/Navbar";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";
import CharityDetails from "./components/CharityDetails/CharityDetails";
import Donation from "./components/Donation/Donation";
import Map from "./components/Location/Map";
import SearchBar from "./layouts/search/SearchBar";
import AppointmentList from "./components/AppointmentList/AppointmentList";
import Description from "./components/Description/Description";
import RecentReviews from "./components/RecentReviews/RecentReviews";
import RecentEvent from "./components/RecentEvent/RecentEvent";
import Donationlist from "./components/DonationList/Donationlist";
import Restaurantappointments from "./components/RestaurantAppointment/Restaurantappointment";
import EventList from "./components/EventList/EventList";

function App() {
  return (
    <div className="App">
      <Router>
        <div className={classes.navbar}>
          <Navbar />
        </div>
        <div>
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/profile/:id" component={Profile} />
            <Route path="/charity/:id" children={<CharityDetails />} />
            <Route path="/map" children={<Map />} />
            <PrivateRoute path="/charity-event" component={Event} />
            <PrivateRoute path="/restaurant-donation" component={Donation} />
            <Route path="/contact" component={Contact} />
            <Route path="/search" component={SearchBar} />
            <PrivateRoute path="/appointments" component={AppointmentList} />
            <Route path="/description/:id" children={<Description />} />
            <Route path="/recentevent/:id" children={<RecentEvent />} />
            <Route path="/recentreview/:id" children={<RecentReviews />} />
            <Route path="/map">
              <Map />
            </Route>
            <PrivateRoute path="/donationlist" component={Donationlist} />
            <PrivateRoute path="/restaurant-appointments" component={Restaurantappointments} />
            <PrivateRoute path="/events" component={EventList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
