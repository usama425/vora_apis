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
            떠올리면 웃음 나는 <br /> 추억이 있나요?
          </div>
          <input
            type="text"
            className="form-control inputBox"
            placeholder="지금 떠오르는 생각을 작성해보세요."
          />
        </div>
        {/* 2nd Box .................  */}
        <div className="con bg-white mt-2 p-2">
          <div className="d-flex justify-content-between">
            <div className="vHeadingSmall">추천 그룹</div>
            <div className="vSubHeading">전체보기 </div>
          </div>
          <div className="d-flex flex-wrap mt-1">
            <div className="vTag mt-2">#1일1보라</div>
            <div className="vTag mt-2">#보라해요</div>
            <div className="vTag mt-2">#오늘의 독서</div>
            <div className="vTag mt-2">#오늘의 독서</div>
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
                <span className="postHeading">보라돌이`</span>
                <span className="postSubHeading">3일 전</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="primaryButtonOutline px-2">팔로잉</div>
              <div className="ml-2">
                <img src={Option} alt="Option" width="16px" />
              </div>
            </div>
          </div>
          <div className="postBox">
            <div className="postTextBox postText p-3">
              오전에 비도 조금 오고 날씨가 꿉꿉하더니 오후가 되니까 맑아졌어요~
              전망 예쁜 카페에 앉아서 과제도 하고#책도 읽고 있어요. 햇살이
              따뜻해서 기분이 좋네요. 드라이브 겸 오시기 좋은 것 같아서
              추천해요! 전망 좋은데 생각보다 주말에 널널해서 여유도 느껴지는것
              같아요... <span className="postMore">더보기</span>
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
                <span className="postText">한달에책 오백권 </span>
                <span className="postMore">
                  댓글내용댓글내용댓글내용댓글내용댓글내용
                </span>
              </div>
              <div className="d-flex">
                <span className="postText">보라하늘</span>
                <span className="postMore">댓글댓글댓글</span>
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
                <span className="postHeading">보라돌이`</span>
                <span className="postSubHeading">3일 전</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="primaryButtonOutline px-2">팔로잉</div>
              <div className="ml-2">
                <img src={Option} alt="Option" width="16px" />
              </div>
            </div>
          </div>
          <div className="postBox">
            <div className="postTextBox postText p-3">
              오전에 비도 조금 오고 날씨가 꿉꿉하더니 오후가 되니까 맑아졌어요~
              전망 예쁜 카페에 앉아서 과제도 하고#책도 읽고 있어요. 햇살이
              따뜻해서 기분이 좋네요. 드라이브 겸 오시기 좋은 것 같아서
              추천해요! 전망 좋은데 생각보다 주말에 널널해서 여유도 느껴지는것
              같아요... <span className="postMore">더보기</span>
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
                <span className="postText">한달에책 오백권 </span>
                <span className="postMore">
                  댓글내용댓글내용댓글내용댓글내용댓글내용
                </span>
              </div>
              <div className="d-flex">
                <span className="postText">보라하늘</span>
                <span className="postMore">댓글댓글댓글</span>
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
                <span className="postHeading">보라돌이`</span>
                <span className="postSubHeading">3일 전</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="primaryButtonOutline px-2">팔로잉</div>
              <div className="ml-2">
                <img src={Option} alt="Option" width="16px" />
              </div>
            </div>
          </div>
          <div className="postBox">
            <div className="postTextBox postText p-3">
              오전에 비도 조금 오고 날씨가 꿉꿉하더니 오후가 되니까 맑아졌어요~
              전망 예쁜 카페에 앉아서 과제도 하고#책도 읽고 있어요. 햇살이
              따뜻해서 기분이 좋네요. 드라이브 겸 오시기 좋은 것 같아서
              추천해요! 전망 좋은데 생각보다 주말에 널널해서 여유도 느껴지는것
              같아요... <span className="postMore">더보기</span>
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
                <span className="postText">한달에책 오백권 </span>
                <span className="postMore">
                  댓글내용댓글내용댓글내용댓글내용댓글내용
                </span>
              </div>
              <div className="d-flex">
                <span className="postText">보라하늘</span>
                <span className="postMore">댓글댓글댓글</span>
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
                <span className="postHeading">보라돌이`</span>
                <span className="postSubHeading">3일 전</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="primaryButtonOutline px-2">팔로잉</div>
              <div className="ml-2">
                <img src={Option} alt="Option" width="16px" />
              </div>
            </div>
          </div>
          <div className="postBox">
            <div className="postTextBox postText p-3">
              오전에 비도 조금 오고 날씨가 꿉꿉하더니 오후가 되니까 맑아졌어요~
              전망 예쁜 카페에 앉아서 과제도 하고#책도 읽고 있어요. 햇살이
              따뜻해서 기분이 좋네요. 드라이브 겸 오시기 좋은 것 같아서
              추천해요! 전망 좋은데 생각보다 주말에 널널해서 여유도 느껴지는것
              같아요... <span className="postMore">더보기</span>
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
                <span className="postText">한달에책 오백권 </span>
                <span className="postMore">
                  댓글내용댓글내용댓글내용댓글내용댓글내용
                </span>
              </div>
              <div className="d-flex">
                <span className="postText">보라하늘</span>
                <span className="postMore">댓글댓글댓글</span>
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
              추천
            </div>
          ) : (
            <div className="primaryButton mx-2">추천</div>
          )}
          {Page ? (
            <div className="primaryButton mx-2">팔로우</div>
          ) : (
            <div
              className="primaryDisabledButton mx-2"
              onClick={() => {
                setPage(1);
              }}
            >
              팔로우
            </div>
          )}
        </div>
      </div>
      {Page ? Follow() : Suggested()}
    </Base>
  );
}
