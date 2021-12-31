import React from "react";
import Base1 from "./../Base1";
import g1 from "../../Assets/images/g1.png";
import g3 from "../../Assets/images/g3.png";
import f1 from "../../Assets/images/f1.png";
import Option from "../../Assets/icons/Option.png";
import Lock from "../../Assets/icons/Lock.png";
import Like from "../../Assets/icons/Like.png";
import Comments from "../../Assets/icons/Comments.png";
import SaveBtn from "../../Assets/icons/SaveBtn.png";
import Share from "../../Assets/icons/Share.png";

export default function PostDetails() {
  const Comment = (props) => {
    return (
      <div>
        <div className="d-flex justify-content-between mt-1">
          <div className="d-flex">
            <div className="smallRoundImg">
              <img src={g3} alt="" width="100%" />
            </div>
            <div>
              <div className="postText mx-1">
                <b>김다독</b> <span className="textLight">2분전</span>{" "}
              </div>
              <div className="comment  mx-1">
                댓글내용댓글내용댓글내용댓글내용댓글내용
              </div>
              <div className="textLight mx-1">
                <span className="textLight">좋아요 13</span>{" "}
                <span className="textLight">답글 달기</span>{" "}
              </div>
            </div>
          </div>
          <div className="option">
            <img src={Option} alt="" />
          </div>
        </div>
        {props ? <div className="pl-4">{props}</div> : null}
      </div>
    );
  };
  const PostCard = () => {
    return (
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
            오전에 비도 조금 오고 날씨가 꿉꿉하더니 오후가 되니까 맑아졌어요~{" "}
            {/* <span className="postMore">더보기</span> */}
          </div>
          <div className="postImages">
            <div className="d-flex justify-content-between">
              <img src={f1} alt="f1" width="100%" className="postImgPadding " />
            </div>
          </div>
          <div className="postTextBox postText p-3">
            전망 예쁜 카페에 앉아서 과제도 하고#책도 읽고 있어요. 햇살이
            따뜻해서 기분이 좋네요.{" "}
            {/* <span className="postMore">더보기</span> */}
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
            {Comment(Comment())}
            {Comment()}
          </div>
          <div className="addComment"></div>
        </div>
      </div>
    );
  };
  const addComment = () => {
    return (
      <div>
        <div className="d-flex justify-content-between">
          <div className="smallRoundImg primaryColor pl-1 pb-1 m-auto ">
            <img src={Lock} alt="" width="75%" classname="my-auto" />
          </div>
          <div className="vBox1 d-flex justify-content-between py-1 px-2 mx-2">
            <input
              type="text"
              className="border-0"
              width="100%"
              placeholder="댓글을 입력해 주세요."
            />
            <div className="primaryTextColor mr-2">등록</div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Base1>
      <div className="con pt-2">
        <div className="bg-white p-2">
          {PostCard()}
          <div>{addComment()}</div>
        </div>
      </div>
    </Base1>
  );
}
