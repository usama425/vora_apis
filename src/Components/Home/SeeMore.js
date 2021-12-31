import React from "react";
import Base from "./../Base";
import g1 from "../../Assets/images/g1.png";
import PostWithText from "../../Assets/images/PostWithText.png";
import Option from "../../Assets/icons/Option.png";
import Like from "../../Assets/icons/Like.png";
import Comments from "../../Assets/icons/Comments.png";
import SaveBtn from "../../Assets/icons/SaveBtn.png";
import Share from "../../Assets/icons/Share.png";

export default function SeeMore() {
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
          <div className="postImages">
            <div className="d-flex justify-content-between">
              <img
                src={PostWithText}
                alt="f1"
                width="100%"
                className="postImgPadding "
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
            <div className="postText">
              <b>한달에책 오백권</b>
              <span className="textLight">
                댓글내용댓글내용댓글내용댓글내용댓글내용
              </span>
            </div>
            <div className="postText">
              <b>보라하늘</b>
              <span className="textLight">댓글댓글댓글</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base>
      <div className="con pt-2">
        <div className="bg-white p-2">{PostCard()}</div>
        <div className="bg-white p-2 mt-2">{PostCard()}</div>
        <div className="bg-white p-2 mt-2">{PostCard()}</div>
      </div>
    </Base>
  );
}
