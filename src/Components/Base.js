import React from "react";
import { useLocation, Link } from "react-router-dom";
import Vora from "../Assets/icons/Vora.png";
import Bell from "../Assets/icons/Bell.png";
import Search from "../Assets/icons/Search.png";

import AHome from "../Assets/icons/AHome.png";
import Home from "../Assets/icons/Home.png";
import Write from "../Assets/icons/Write.png";
import Dairy from "../Assets/icons/Dairy.png";
import Hash from "../Assets/icons/Hash.png";
import MyWeb from "../Assets/icons/MyWeb.png";
import AMyWeb from "../Assets/icons/AMyWeb.png";
import AWrite from "../Assets/icons/AWrite.png";

export default function Base(props) {
  const location = useLocation();
  console.log(location);
  const currentTab = (path) => {
    if (path === location.pathname) {
      return true;
    }
    return false;
  };
  return (
    <div>
      <div className="vHearder bg-white">
        <div className="con d-flex p-2">
          <img src={Vora} alt="logo" className="m-auto" width="75px" />
          <div className="d-flex">
            <img src={Bell} alt="Notification" width="24px" className="mr-1" />
            <Link to="/search">
              {" "}
              <img src={Search} alt="Search" width="24px" className="mr-1" />
            </Link>
          </div>
        </div>
      </div>

      <div className="main">{props.children}</div>

      <div className="vFooter bg-white">
        <div className="con d-flex justify-content-around p-1">
          {currentTab("/home") ? (
            <Link to="/home" className="text-center btn">
              <img src={AHome} alt="AHome" width="24px" className="mx-2" />
              <p className="vFooterText primaryText">홈</p>
            </Link>
          ) : (
            <Link to="/home" className="text-center btn">
              <img src={Home} alt="Home" width="24px" className="mx-2" />
              <p className="vFooterText">홈</p>
            </Link>
          )}
          {currentTab("/post") ? (
            <Link to="/post" className="text-center btn">
              <img src={AWrite} alt="AHome" width="24px" className="mx-2" />
              <p className="vFooterText primaryText">작성</p>
            </Link>
          ) : (
            <Link to="/post" className="text-center btn">
              <img src={Write} alt="Home" width="24px" className="mx-2" />
              <p className="vFooterText">작성</p>
            </Link>
          )}
          <div className="text-center btn">
            <img src={Dairy} alt="Dairy" width="24px" className="mx-2" />
            <p className="vFooterText">다이어리</p>
          </div>
          <div className="text-center btn">
            <img src={Hash} alt="Hash" width="24px" className="mx-2" />
            <p className="vFooterText">그룹</p>
          </div>
          {currentTab("/myprofile") ? (
            <Link to="/myprofile" className="text-center btn">
              <img
                src={AMyWeb}
                alt="MyWeb"
                width="24px"
                height="24px"
                className="mx-2"
              />
              <p className="vFooterText primaryText">마이페이지</p>
            </Link>
          ) : (
            <Link to="/myprofile" className="text-center btn">
              <img src={MyWeb} alt="MyWeb" width="24px" className="mx-2" />
              <p className="vFooterText">마이페이지</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
