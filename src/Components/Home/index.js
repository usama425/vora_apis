import React, { useState } from "react";
import Base from "./../Base";
import { Link } from "react-router-dom";

import Banner from "../../Assets/images/Banner.png";
import g1 from "../../Assets/images/g1.png";
import g2 from "../../Assets/images/g2.png";
import g3 from "../../Assets/images/g3.png";
import g4 from "../../Assets/images/g4.png";
import g5 from "../../Assets/images/g5.png";
import g6 from "../../Assets/images/g6.png";
import g7 from "../../Assets/images/g7.png";
import g8 from "../../Assets/images/g8.png";
import g9 from "../../Assets/images/g9.png";
import g10 from "../../Assets/images/g10.png";
import g11 from "../../Assets/images/g11.png";
import g12 from "../../Assets/images/g12.png";
import f1 from "../../Assets/images/f1.png";
import f2 from "../../Assets/images/f2.png";
import f3 from "../../Assets/images/f3.png";
import f4 from "../../Assets/images/f4.png";
import f5 from "../../Assets/images/f5.png";
import Option from "../../Assets/icons/Option.png";
import Like from "../../Assets/icons/Like.png";
import Comments from "../../Assets/icons/Comments.png";
import SaveBtn from "../../Assets/icons/SaveBtn.png";
import Share from "../../Assets/icons/Share.png";

export default function Home() {
  const [Page, setPage] = useState(0);
  const Suggested = () => {
    return (
      <div>
        <div className="con">
          <img src={Banner} alt="Banner" className="mt-2" width="100%" />
        </div>
        <div className="mainCon p-1">
          <div className="d-flex justify-content-around pt-1">
            <img src={g1} alt="g1" width="32%" />
            <img src={g2} alt="g2" width="32%" />
            <img src={g3} alt="g3" width="32%" />
          </div>
          <div className="d-flex justify-content-around pt-1">
            <img src={g4} alt="g4" width="32%" />
            <img src={g5} alt="g5" width="32%" />
            <img src={g6} alt="g6" width="32%" />
          </div>
          <div className="d-flex justify-content-around pt-1">
            <img src={g7} alt="g7" width="32%" />
            <img src={g8} alt="g8" width="32%" />
            <img src={g9} alt="g9" width="32%" />
          </div>
          <div className="d-flex justify-content-around pt-1">
            <img src={g10} alt="g10" width="32%" />
            <img src={g11} alt="g11" width="32%" />
            <img src={g12} alt="g12" width="32%" />
          </div>
          <br />
          <br />
        </div>
      </div>
    );
  };

  const Follow = () => {
    return (
      <div>
        {/* 1st Box....  */}
        <div className="con bg-white mt-2 p-2">
          <div className="vheading">
            ???????????? ?????? ?????? <br /> ????????? ??????????
          </div>
          <input
            type="text"
            className="form-control inputBox"
            placeholder="?????? ???????????? ????????? ??????????????????."
          />
        </div>
        {/* 2nd Box .................  */}
        <div className="con bg-white mt-2 p-2">
          <div className="d-flex justify-content-between">
            <div className="vHeadingSmall">?????? ??????</div>
            <div className="vSubHeading">???????????? </div>
          </div>
          <div className="d-flex flex-wrap mt-1">
            <div className="vTag mt-2">#1???1??????</div>
            <div className="vTag mt-2">#????????????</div>
            <div className="vTag mt-2">#????????? ??????</div>
            <div className="vTag mt-2">#????????? ??????</div>
          </div>
        </div>
        {/* Actual Post Box ............... */}
        <div className="con bg-white mt-2 p-2">
          <div className="d-flex justify-content-between my-2">
            <div className="d-flex">
              <div className="avtar">
                <img src={g1} alt="" width="100%" />
              </div>
              <div>
                <span className="postHeading">????????????`</span>
                <span className="postSubHeading">3??? ???</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="primaryButtonOutline px-2">?????????</div>
              <div className="ml-2">
                <img src={Option} alt="Option" width="16px" />
              </div>
            </div>
          </div>
          <div className="postBox">
            <div className="postTextBox postText p-3">
              ????????? ?????? ?????? ?????? ????????? ??????????????? ????????? ????????? ???????????????~
              ?????? ?????? ????????? ????????? ????????? ??????#?????? ?????? ?????????. ?????????
              ???????????? ????????? ?????????. ???????????? ??? ????????? ?????? ??? ?????????
              ????????????! ?????? ????????? ???????????? ????????? ???????????? ????????? ???????????????
              ?????????... <span className="postMore">?????????</span>
            </div>
            <Link to="/postdetails" className="postImages">
              <div className="d-flex justify-content-between">
                <img
                  src={f1}
                  alt="f1"
                  width="50%"
                  className="postImgPadding "
                />
                <img src={f2} alt="f2" width="50%" className="postImgPadding" />
              </div>
              <div className="d-flex justify-content-between">
                <img
                  src={f3}
                  alt="f3"
                  width="33.333%"
                  className="postImgPadding"
                />
                <img
                  src={f4}
                  alt="f4"
                  width="33.333%"
                  className="postImgPadding"
                />
                <img
                  src={f5}
                  alt="f5"
                  width="33.333%"
                  className="postImgPadding"
                />
              </div>
            </Link>
            <div className="d-flex justify-content-between bottomLine">
              <div className="d-flex m-2 ">
                <div>
                  <img src={Like} alt="Like" />
                  <span className="postIconText mx-1">1300</span>
                </div>
                <div>
                  <img src={Comments} alt="Comments" />
                  <span className="postIconText mx-1">1300</span>
                </div>
                <div>
                  <img src={SaveBtn} alt="SaveBtn" />
                  <span className="postIconText mx-1">1300</span>
                </div>
              </div>
              <div className="share m-2">
                <img src={Share} alt="Share" />
              </div>
            </div>
            <div className="postBottomText p-2">
              <div className="d-flex ">
                <span className="postText">???????????? ????????? </span>
                <span className="postMore">
                  ????????????????????????????????????????????????????????????
                </span>
              </div>
              <div className="d-flex">
                <span className="postText">????????????</span>
                <span className="postMore">??????????????????</span>
              </div>
            </div>
          </div>
        </div>
        {/* .....  */}
        <div className="con bg-white mt-2 p-2">
          <div className="d-flex justify-content-between my-2">
            <div className="d-flex">
              <div className="avtar">
                <img src={g1} alt="" width="100%" />
              </div>
              <div>
                <span className="postHeading">????????????`</span>
                <span className="postSubHeading">3??? ???</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="primaryButtonOutline px-2">?????????</div>
              <div className="ml-2">
                <img src={Option} alt="Option" width="16px" />
              </div>
            </div>
          </div>
          <div className="postBox">
            <div className="postTextBox postText p-3">
              ????????? ?????? ?????? ?????? ????????? ??????????????? ????????? ????????? ???????????????~
              ?????? ?????? ????????? ????????? ????????? ??????#?????? ?????? ?????????. ?????????
              ???????????? ????????? ?????????. ???????????? ??? ????????? ?????? ??? ?????????
              ????????????! ?????? ????????? ???????????? ????????? ???????????? ????????? ???????????????
              ?????????... <span className="postMore">?????????</span>
            </div>
            <div className="postImages">
              <div className="d-flex justify-content-between">
                <img
                  src={f1}
                  alt="f1"
                  width="50%"
                  className="postImgPadding "
                />
                <img src={f2} alt="f2" width="50%" className="postImgPadding" />
              </div>
              <div className="d-flex justify-content-between">
                <img
                  src={f3}
                  alt="f3"
                  width="33.33%"
                  className="postImgPadding"
                />
                <img
                  src={f4}
                  alt="f4"
                  width="33.33%"
                  className="postImgPadding"
                />
                <img
                  src={f5}
                  alt="f5"
                  width="33.33%"
                  className="postImgPadding"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between bottomLine">
              <div className="d-flex m-2 ">
                <div>
                  <img src={Like} alt="Like" />
                  <span className="postIconText mx-1">1300</span>
                </div>
                <div>
                  <img src={Comments} alt="Comments" />
                  <span className="postIconText mx-1">1300</span>
                </div>
                <div>
                  <img src={SaveBtn} alt="SaveBtn" />
                  <span className="postIconText mx-1">1300</span>
                </div>
              </div>
              <div className="share m-2">
                <img src={Share} alt="Share" />
              </div>
            </div>
            <div className="postBottomText p-2">
              <div className="d-flex ">
                <span className="postText">???????????? ????????? </span>
                <span className="postMore">
                  ????????????????????????????????????????????????????????????
                </span>
              </div>
              <div className="d-flex">
                <span className="postText">????????????</span>
                <span className="postMore">??????????????????</span>
              </div>
            </div>
          </div>
        </div>
        <div className="con bg-white mt-2 p-2">
          <div className="d-flex justify-content-between my-2">
            <div className="d-flex">
              <div className="avtar">
                <img src={g1} alt="" width="100%" />
              </div>
              <div>
                <span className="postHeading">????????????`</span>
                <span className="postSubHeading">3??? ???</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="primaryButtonOutline px-2">?????????</div>
              <div className="ml-2">
                <img src={Option} alt="Option" width="16px" />
              </div>
            </div>
          </div>
          <div className="postBox">
            <div className="postTextBox postText p-3">
              ????????? ?????? ?????? ?????? ????????? ??????????????? ????????? ????????? ???????????????~
              ?????? ?????? ????????? ????????? ????????? ??????#?????? ?????? ?????????. ?????????
              ???????????? ????????? ?????????. ???????????? ??? ????????? ?????? ??? ?????????
              ????????????! ?????? ????????? ???????????? ????????? ???????????? ????????? ???????????????
              ?????????... <span className="postMore">?????????</span>
            </div>
            <div className="postImages">
              <div className="d-flex justify-content-between">
                <img
                  src={f1}
                  alt="f1"
                  width="50%"
                  className="postImgPadding "
                />
                <img src={f2} alt="f2" width="50%" className="postImgPadding" />
              </div>
              <div className="d-flex justify-content-between">
                <img
                  src={f3}
                  alt="f3"
                  width="33.33%"
                  className="postImgPadding"
                />
                <img
                  src={f4}
                  alt="f4"
                  width="33.33%"
                  className="postImgPadding"
                />
                <img
                  src={f5}
                  alt="f5"
                  width="33.33%"
                  className="postImgPadding"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between bottomLine">
              <div className="d-flex m-2 ">
                <div>
                  <img src={Like} alt="Like" />
                  <span className="postIconText mx-1">1300</span>
                </div>
                <div>
                  <img src={Comments} alt="Comments" />
                  <span className="postIconText mx-1">1300</span>
                </div>
                <div>
                  <img src={SaveBtn} alt="SaveBtn" />
                  <span className="postIconText mx-1">1300</span>
                </div>
              </div>
              <div className="share m-2">
                <img src={Share} alt="Share" />
              </div>
            </div>
            <div className="postBottomText p-2">
              <div className="d-flex ">
                <span className="postText">???????????? ????????? </span>
                <span className="postMore">
                  ????????????????????????????????????????????????????????????
                </span>
              </div>
              <div className="d-flex">
                <span className="postText">????????????</span>
                <span className="postMore">??????????????????</span>
              </div>
            </div>
          </div>
        </div>
        <div className="con bg-white mt-2 p-2">
          <div className="d-flex justify-content-between my-2">
            <div className="d-flex">
              <div className="avtar">
                <img src={g1} alt="" width="100%" />
              </div>
              <div>
                <span className="postHeading">????????????`</span>
                <span className="postSubHeading">3??? ???</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="primaryButtonOutline px-2">?????????</div>
              <div className="ml-2">
                <img src={Option} alt="Option" width="16px" />
              </div>
            </div>
          </div>
          <div className="postBox">
            <div className="postTextBox postText p-3">
              ????????? ?????? ?????? ?????? ????????? ??????????????? ????????? ????????? ???????????????~
              ?????? ?????? ????????? ????????? ????????? ??????#?????? ?????? ?????????. ?????????
              ???????????? ????????? ?????????. ???????????? ??? ????????? ?????? ??? ?????????
              ????????????! ?????? ????????? ???????????? ????????? ???????????? ????????? ???????????????
              ?????????... <span className="postMore">?????????</span>
            </div>
            <div className="postImages">
              <div className="d-flex justify-content-between">
                <img
                  src={f1}
                  alt="f1"
                  width="50%"
                  className="postImgPadding "
                />
                <img src={f2} alt="f2" width="50%" className="postImgPadding" />
              </div>
              <div className="d-flex justify-content-between">
                <img
                  src={f3}
                  alt="f3"
                  width="33.33%"
                  className="postImgPadding"
                />
                <img
                  src={f4}
                  alt="f4"
                  width="33.33%"
                  className="postImgPadding"
                />
                <img
                  src={f5}
                  alt="f5"
                  width="33.33%"
                  className="postImgPadding"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between bottomLine">
              <div className="d-flex m-2 ">
                <div>
                  <img src={Like} alt="Like" />
                  <span className="postIconText mx-1">1300</span>
                </div>
                <div>
                  <img src={Comments} alt="Comments" />
                  <span className="postIconText mx-1">1300</span>
                </div>
                <div>
                  <img src={SaveBtn} alt="SaveBtn" />
                  <span className="postIconText mx-1">1300</span>
                </div>
              </div>
              <div className="share m-2">
                <img src={Share} alt="Share" />
              </div>
            </div>
            <div className="postBottomText p-2">
              <div className="d-flex ">
                <span className="postText">???????????? ????????? </span>
                <span className="postMore">
                  ????????????????????????????????????????????????????????????
                </span>
              </div>
              <div className="d-flex">
                <span className="postText">????????????</span>
                <span className="postMore">??????????????????</span>
              </div>
            </div>
          </div>
        </div>
        {/* .......  */}
        <br />
        <br />
      </div>
    );
  };
  return (
    <Base>
      <div className="bg-white">
        <div className="con d-flex justify-content-center p-1">
          {Page ? (
            <div
              className="primaryDisabledButton mx-2"
              onClick={() => {
                setPage(0);
              }}
            >
              ??????
            </div>
          ) : (
            <div className="primaryButton mx-2">??????</div>
          )}
          {Page ? (
            <div className="primaryButton mx-2">?????????</div>
          ) : (
            <div
              className="primaryDisabledButton mx-2"
              onClick={() => {
                setPage(1);
              }}
            >
              ?????????
            </div>
          )}
        </div>
      </div>
      {Page ? Follow() : Suggested()}
    </Base>
  );
}
