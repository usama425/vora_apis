import React from "react";
import Base1 from "./../Base1";
import g1 from "../../Assets/images/g1.png";
import Camera from "../../Assets/icons/Camera.png";

export default function ProfileSettings() {
  return (
    <Base1 name="계정정보" BackLink="/myprofile">
      <div className="con pt-2">
        <div className="bg-white p-2">
          <div className="d-flex justify-content-center">
            <div className="profileAvtar">
              <img src={g1} alt="" width="100%" />
            </div>
            <img
              src={Camera}
              alt=""
              className="changeProfileIcon"
              width="32px"
              height="32px"
            />
          </div>
          <div>
            <div className="fieldTitle">이메일 주소</div>
            <div className="email">abc@gmail.com</div>
          </div>
          <div className="mt-4">
            <div className="fieldTitle">닉네임</div>
            <div className="d-flex justify-content-between">
              <div className="profileInputBox">
                <input
                  type="text"
                  placeholder="닉네임"
                  className="profileInput"
                />
                <small className="form-text text-warning">
                  중복된 닉네임이 있습니다.
                </small>
              </div>
              <div className="primaryButtonOutline px-2">중복확인</div>
            </div>
          </div>
          <div className="pt-4">
            <div className="fieldTitle">소개글</div>
            <div className="vBox boxHeight p-1">
              <input type="text" placeholder="닉네임" className="border-0" />
            </div>
          </div>
          <div className="pt-4">
            <div className="fieldTitle">비밀번호</div>
            <div className="primaryButtonOutlineBlock p-2 mt-1">
              비밀번호 변경
            </div>
          </div>
          <div className="pt-4">
            <div className="fieldTitle">가입경로</div>
            <div className="">가입경로로 로그인하였습니다.</div>
          </div>
          <div className="mt-4">
            <div className="fieldTitle">휴대폰 번호</div>
            <div className="d-flex justify-content-between">
              <div className="profileInputBox ">
                <input
                  type="text"
                  placeholder="휴대폰 번호를 인증해 주세요."
                  className="profileInput"
                />
              </div>
              <div className="primaryButtonOutline px-2">휴대폰 인증</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-center primaryTextColor">로그아웃</div>
            <div className="btn btn-primary btn-lg btn-block primaryColor mt-1">
              휴대폰 인증
            </div>
          </div>
        </div>
      </div>
    </Base1>
  );
}
