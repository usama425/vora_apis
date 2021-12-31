import React from "react";
import Base from "./../Base";
import { Link } from "react-router-dom";
import g1 from "../../Assets/images/g1.png";
import Settings from "../../Assets/icons/Settings.png";
import Draft from "../../Assets/icons/Draft.png";
import openArrow from "../../Assets/icons/openArrow.png";

export default function Profile() {
  return (
    <Base>
      <div className="con pt-2">
        <div className=" bg-white">
          <div className="d-flex justify-content-between p-3">
            <div className="d-flex">
              <div className="profileAvtar">
                <img src={g1} alt="profileAvtar" width="100%" />
              </div>
              <div className="pt-2 mx-2">
                <div className="profileName">나는야독서왕</div>
                <div className="profileEmail mt-2">abc@gmail.com</div>
              </div>
            </div>
            <div className="setting">
              <Link to="/profilesettings">
                <img src={Settings} className="btn" alt="Settings" />
              </Link>
            </div>
          </div>
          <div className="px-3">
            <div className="d-flex justify-content-around vBox p-2">
              <div className="text-center">
                <div className="stats">100</div>
                <div className="statsText">스크랩</div>
              </div>
              <div className="text-center">
                <div className="stats">1000</div>
                <div className="statsText">팔로워</div>
              </div>
              <div className="text-center">
                <div className="stats">1</div>
                <div className="statsText">팔로잉</div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between p-3">
            <div className="profileDraftText">임시저장</div>
            <div>
              <img src={Draft} alt="temp" />
            </div>
          </div>
        </div>
      </div>
      {/* ...................................  */}
      <div className="con bg-white mt-2 p-3">
        <div className="d-flex justify-content-between ">
          <div className="text-dark">차단한 유저 관리</div>
          <Link to="/blockedusers">
            <img src={openArrow} alt="arrow" width="7px" height="12px" />
          </Link>
        </div>
        <hr />
        <div className="d-flex justify-content-between ">
          <div className="text">공지사항&이벤트</div>
          <Link to="/announcements">
            <img src={openArrow} alt="arrow" width="7px" height="12px" />
          </Link>
        </div>
        <hr />
        <div className="d-flex justify-content-between ">
          <div className="text">알림 설정</div>
          <Link to="/notification">
            <img src={openArrow} alt="arrow" width="7px" height="12px" />
          </Link>
        </div>
        <hr />
        <div className="d-flex justify-content-between ">
          <div className="text">문의하기</div>
          <Link to="/contactus">
            <img src={openArrow} alt="arrow" width="7px" height="12px" />
          </Link>
        </div>
        <hr />
        <div className="d-flex justify-content-between ">
          <div className="text">이용약관</div>
          <Link to="/termsofuse">
            <img src={openArrow} alt="arrow" width="7px" height="12px" />
          </Link>
        </div>
      </div>
    </Base>
  );
}
