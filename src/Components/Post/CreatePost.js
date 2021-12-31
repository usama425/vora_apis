import React from "react";
import Base from "./../Base";

import Shape1 from "../../Assets/icons/post/Shape1.png";
import Shape2 from "../../Assets/icons/post/Shape2.png";
import Shape3 from "../../Assets/icons/post/Shape3.png";
import Shape4 from "../../Assets/icons/post/Shape4.png";
import Shape5 from "../../Assets/icons/post/Shape5.png";
import Shape6 from "../../Assets/icons/post/Shape6.png";
import Shape7 from "../../Assets/icons/post/Shape7.png";
import Shape8 from "../../Assets/icons/post/Shape8.png";
import Shape9 from "../../Assets/icons/post/Shape9.png";
import Shape10 from "../../Assets/icons/post/Shape10.png";

export default function CreatePost() {
  return (
    <Base>
      <div className="con pt-2">
        <div className="bg-white p-2">
          <div className="postBox">
            <div className="d-flex justify-content-between pt-3 px-3">
              <div>에디터 변환</div>
              <div>임시저장</div>
            </div>
            <hr />
            <div>
              <div>
                <div className="d-flex flex-wrap d-md-none ">
                  <img src={Shape1} alt="shape" className="m-2" width="18px" />
                  <img src={Shape2} alt="shape" className="m-2" width="18px" />
                  <img src={Shape3} alt="shape" className="m-2" width="18px" />
                  <img src={Shape4} alt="shape" className="m-2" width="18px" />
                  <img src={Shape5} alt="shape" className="m-2" width="18px" />
                  <img src={Shape6} alt="shape" className="m-2" width="18px" />
                  <img src={Shape7} alt="shape" className="m-2" width="18px" />
                  <img src={Shape8} alt="shape" className="m-2" width="18px" />
                  <img src={Shape9} alt="shape" className="m-2" width="18px" />
                  <img src={Shape10} alt="shape" className="m-2" width="18px" />
                </div>
                <div className="primaryButton mx-2">문화태그</div>
              </div>
              <div className="m-3 createPostBox">
                <input
                  type="textarea"
                  placeholder="당신의 이야기를 들려주세요."
                  className="postText"
                />
              </div>
            </div>
            <div className="d-flex p-2">
              <div className="primaryButtonOutline px-2 mx-1">#해시태그</div>
              <div className="primaryButtonOutline px-2 mx-1">@친구</div>
            </div>
          </div>
          <div className="btn btn-primary btn-lg btn-block primaryColor my-2">
            등록
          </div>
        </div>
      </div>
    </Base>
  );
}
