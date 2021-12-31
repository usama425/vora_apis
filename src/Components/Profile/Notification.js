import React from "react";
import Base1 from "./../Base1";
import "../../Assets/css/toggleButton.css";

export default function Notification() {
  return (
    <Base1 name="차단한 유저 관리" BackLink="/myprofile">
      <div className="con pt-2">
        <div className="bg-white p-2">
          <div className="d-flex justify-content-between">
            <div className="textNotification">모든 알림</div>
            <div className="d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="bg-white mt-2 p-2">
          <div className="d-flex justify-content-between">
            <div className="textNotification">팔로우 알림</div>
            <div className="d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="line"></div>
          <div className="d-flex justify-content-between">
            <div className="textNotification">언급 알림</div>
            <div className="d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="line"></div>
          <div className="d-flex justify-content-between">
            <div className="textNotification">댓글 알림</div>
            <div className="d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="line"></div>
          <div className="d-flex justify-content-between">
            <div className="textNotification">좋아요 알림</div>
            <div className="d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="line"></div>
          <div className="d-flex justify-content-between">
            <div className="textNotification">스크랩 알림</div>
            <div className="d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="line"></div>
          <div className="d-flex justify-content-between">
            <div className="textNotification">팔로우 새글 알림</div>
            <div className="d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="line"></div>
          <div className="d-flex justify-content-between">
            <div className="textNotification">팔로우 해시태그 알림</div>
            <div className="d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="line"></div>
          <div className="d-flex justify-content-between">
            <div className="textNotification">마케팅 알림 수신 동의</div>
            <div className="d-flex align-items-center">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Base1>
  );
}
