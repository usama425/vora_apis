import React from "react";
import Vora from "../../Assets/icons/Vora.png";
import Google from "../../Assets/icons/Google.png";
import Kakao from "../../Assets/icons/Kakao.png";
import Naver from "../../Assets/icons/Naver.png";
import { Link } from "react-router-dom";

export default function Signin() {
  const SigninForm = () => {
    return (
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="이메일을 입력해 주세요."
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="비밀번호를 입력해 주세요."
          />
          {false ? (
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          ) : null}
        </div>
        <Link
          to="/home"
          type="submit"
          className="btn btn-primary btn-lg btn-block primaryColor"
        >
          로그인
        </Link>
      </form>
    );
  };
  return (
    <div className="con bg-white">
      <br />
      <br />
      <br />
      <div className="SignInLogo">
        <img src={Vora} alt="Vora" width="125px" />
        <p>
          <b>당신의 취향을 이야기 합니다.</b>
        </p>
      </div>
      <br />
      <div className="registrationForm p-2">{SigninForm()}</div>
      <div className="text-center text-dark">
        <span>이메일로 회원가입</span>&emsp;
        <Link to="/signup" className="text-dark">
          비밀번호 찾기
        </Link>
      </div>
      <br />
      <div className="signinLine">
        <hr />
        <p>SNS로 로그인</p>
      </div>
      <br />
      <div className="socialLogins d-flex justify-content-between">
        <img src={Kakao} alt="Kakao" width="56px" />
        <img src={Naver} alt="Naver" width="56px" />
        <img src={Google} alt="Google" width="56px" />
      </div>
      <br />
      <br />
      <br />
      <p className="text-center text-dark">Copyright @ KYOBOBOOK CENTRE.</p>
      <br />
      <br />
    </div>
  );
}
