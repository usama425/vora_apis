import React from "react";
import Base1 from "./../Base1";
import "../../Assets/css/toggleButton.css";

export default function ContactUs() {
  return (
    <Base1 name="문의하기" subName="나의 문의" BackLink="/myprofile">
      <div className="con pt-2">
        <div className="bg-white p-2">
          <div>
            <select
              className="form-select form-select-lg w-100"
              aria-label="Default select example"
            >
              <option selected>문의유형 선택</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="제목을 입력하세요."
            />
          </div>
          <div className="mt-3">
            <textarea
              className="form-control"
              rows="20"  
              placeholder="문의내용을 입력하세요."
            ></textarea>
          </div>
        </div>
      </div>
    </Base1>
  );
}
