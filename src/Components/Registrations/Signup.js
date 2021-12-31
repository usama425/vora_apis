import React, { useState } from "react";
import Vora from "../../Assets/icons/Vora.png";
import Back from "../../Assets/icons/Back.png";
import { Link } from "react-router-dom";

export default function Signup() {
  const [next, setNext] = useState(0);

  const Terms = () => {
    return (
      <form>
        <div className="vBox text-center pt-2">
          <input id="selectAll" type="checkbox" />
          &emsp;
          <label for="selectAll">약관동의(전체)</label>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <label for="select1">
            {" "}
            <b> 이용약관 동의</b>
          </label>
          <input id="select1" type="checkbox" />
        </div>
        <div className="termsText vBox my-2 p-1">
          제 1 조 (목적) <br /> 본 이용약관(이하"약관")은 VORA(이하 “회사")가
          제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타 필요한
          제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다. 본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다. 본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.
        </div>
        <div className="d-flex justify-content-between mt-4">
          <label for="select2">
            <b>개인정보 이용 수집 방침</b>
          </label>
          <input id="select2" type="checkbox" />
        </div>
        <div className="termsText vBox my-2 p-1">
          제 1 조 (목적)
          <br /> 본 이용약관(이하"약관")은 VORA(이하 “회사")가 제공하는 VORA
          서비스의 이용조건 및 절차에 관한 사항과 기타 필요한 제반사항을
          목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하 “회사")가 제공하는
          VORA 서비스의 이용조건 및 절차에 관한 사항과 기타 필요한 제반사항을
          목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하 “회사")가 제공하는
          VORA 서비스의 이용조건 및 절차에 관한 사항과 기타 필요한 제반사항을
          목적으로 합니다. 본 이용약관(이하"약관")은 VORA(이하 “회사")가
          제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타 필요한
          제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다. 본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.
        </div>
        <div className="d-flex justify-content-between mt-4">
          <label for="select3">
            <b>위치정보 제공 동의</b>
          </label>
          <input id="select3" type="checkbox" />
        </div>
        <div className="termsText vBox my-2 p-1">
          제 1 조 (목적) <br />본 이용약관(이하"약관")은 VORA(이하 “회사")가
          제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타 필요한
          제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다. 본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다. 본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.본 이용약관(이하"약관")은 VORA(이하
          “회사")가 제공하는 VORA 서비스의 이용조건 및 절차에 관한 사항과 기타
          필요한 제반사항을 목적으로 합니다.
        </div>
        <div className="d-flex mt-4">
          <input id="select4" type="checkbox" className="mt-1 mr-3" />
          <label for="select4">
            <b> 이벤트 및 혜택 알림 수신 동의(선택)</b>
          </label>
        </div>
        <div
          // type="submit"
          className="btn btn-secondary btn-lg btn-block primaryColor mt-4"
          disabled={false}
          onClick={() => {
            setNext(1);
          }}
        >
          다음
        </div>
      </form>
    );
  };

  const signupForm = () => {
    return (
      <form>
        <br />
        <br />
        <div className="vheading">이메일 인증</div>
        <div className="vSubHeading my-3">
          아이디로 사용할 이메일로 인증해 주세요.
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email" className="vFormLabel">
            <b> 이메일 주소</b>
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="이메일 주소를 입력해 주세요."
          />
        </div>
        <div
          className="btn btn-lg btn-block vDisabledButton"
          onClick={() => {
            setNext(false);
          }}
        >
          인증 요청
        </div>
        <br />
        <br />
        <div className="form-group">
          <label htmlFor="otp" className="vFormLabel">
            <b>인증번호</b>
          </label>
          <input
            id="otp"
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="전송받은 인증번호를 입력해 주세요."
          />
        </div>
        <div
          className="btn btn-lg btn-block vDisabledButton"
          onClick={() => {
            // setNext(false);
          }}
        >
          인증
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          className="btn btn-lg btn-block vDisabledButton"
          onClick={() => {
            setNext(2);
          }}
        >
          다음
        </div>
      </form>
    );
  };

  const addInfoPage = () => {
    return (
      <form>
        <br />
        <br />
        <div className="vheading">회원 정보 입력</div>
        <br />
        <div className="form-group">
          <label htmlFor="email" className="vFormLabel">
            <b> 아이디</b>
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Entered verified Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="vFormLabel">
            <b>비밀번호</b>
          </label>
          <div className="vSubHeading">
            10~15자의 영어 대소문자, 숫자, 특수문자 중 2가지 조합으로 입력해
            주세요.
          </div>
          <input
            id="password"
            type="password"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="비밀번호를 입력해 주세요."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="vFormLabel">
            <b>비밀번호 확인</b>
          </label>
          <input
            id="password"
            type="password"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="비밀번호를 다시 입력해 주세요."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="vFormLabel">
            <b>닉네임</b>
          </label>
          <div className="vSubHeading">
            2~20자 한글, 영문, 숫자, 밑줄(_)으로 입력해 주세요.
          </div>
          <input
            id="password"
            type="password"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="닉네임을 입력해 주세요."
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div
          className="btn btn-lg btn-block vDisabledButton"
          onClick={() => {
            setNext(3);
          }}
        >
          가입 완료
        </div>
      </form>
    );
  };

  const finalPage = () => {
    return (
      <form>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="vheading d-flex justify-content-center ">
          {" "}
          <span className="text-center"> 회원가입 완료</span>
        </div>
        <br />
        <div className="vSubHeading d-flex justify-content-center">
          <div className="text-center">
            VORA의 회원이 되신 걸 환영합니다. <br /> 이제 VORA의 서비스를
            자유롭게 이용하실 수 있습니다. <br /> 당신의 이야기를 들려주세요.
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link to="/" className="btn btn-primary btn-lg btn-block primaryColor">
          확인
        </Link>
      </form>
    );
  };

  return (
    <div>
      <div className="vHearder bg-white">
        <div className="con d-flex p-2">
          <img
            src={Back}
            alt="back"
            width="8px"
            onClick={() => {
              if (next === 0) {
                setNext(next);
              } else {
                setNext(next - 1);
              }
            }}
          />
          <img src={Vora} alt="logo" className="m-auto" width="75px" />
        </div>
      </div>
      <div className="main pt-2">
        <div className="mainCon ">
          {next ? null : <div className="p-2">{Terms()}</div>}
          {next === 1 ? <div className="p-2">{signupForm()}</div> : null}
          {next === 2 ? <div className="p-2">{addInfoPage()}</div> : null}
          {next === 3 ? <div className="p-2">{finalPage()}</div> : null}
        </div>
      </div>
    </div>
  );
}
