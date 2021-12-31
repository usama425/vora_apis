import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/index";
import PostDetails from "./Components/Home/PostDetails";
import SeeMore from "./Components/Home/SeeMore";

import Search from "./Components/Search/index";

import Profile from "./Components/Profile/index";
import ProfileSettings from "./Components/Profile/ProfileSettings";
import BlockedUsers from "./Components/Profile/BlockedUsers";
import Announcements from "./Components/Profile/Announcements";
import AnnouncementDetails from "./Components/Profile/AnnouncementDetails";
import Notification from "./Components/Profile/Notification";
import TermsOfUse from "./Components/Profile/TermsOfUse";
import ContactUs from "./Components/Profile/ContactUs";

import CreatePost from "./Components/Post/CreatePost";
import Signup from "./Components/Registrations/Signup";
import Signin from "./Components/Registrations/Signin";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/postdetails" exact element={<PostDetails />} />
        <Route path="/seemore" exact element={<SeeMore />} />
        <Route path="/search" exact element={<Search />} />

        <Route path="/post" exact element={<CreatePost />} />
        <Route path="/myprofile" exact element={<Profile />} />
        <Route path="/profilesettings" exact element={<ProfileSettings />} />
        <Route path="/blockedusers" exact element={<BlockedUsers />} />
        <Route path="/announcements" exact element={<Announcements />} />
        <Route path="/notification" exact element={<Notification />} />
        <Route path="/termsofuse" exact element={<TermsOfUse />} />
        <Route path="/contactus" exact element={<ContactUs />} />
        <Route
          path="/announcementdetails"
          exact
          element={<AnnouncementDetails />}
        />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/" exact element={<Signin />} />
        {/* <PrivateRoute path="/user/dashboard" exact component={UserDashboard} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
