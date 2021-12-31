import React, { useState } from "react";
import Base1 from "./../Base1";
import SearchLight from "../../Assets/icons/SearchLight.png";
import g1 from "../../Assets/images/g1.png";
import Cancel from "../../Assets/icons/Cancel.png";

export default function Search() {
  const [Page, setPage] = useState(1);

  const SearchKeywords = () => {
    return (
      <div>
        <div className="d-flex justify-content-between my-2">
          <b>이전 검색어</b>
          <span>전체삭제</span>
        </div>
        <div className="d-flex justify-content-between my-2">
          <span>1일1보라</span>
          <img src={Cancel} alt="" />
        </div>
        <div className="d-flex justify-content-between my-2">
          <span>보라지앵</span>
          <img src={Cancel} alt="" />
        </div>
        <div className="d-flex justify-content-between my-2">
          <span>보라프렌즈</span>
          <img src={Cancel} alt="" />
        </div>
        <div className="d-flex justify-content-between my-2">
          <span>보라</span>
          <img src={Cancel} alt="" />
        </div>
      </div>
    );
  };

  const Group = () => {
    return (
      <div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div>
              <div className="announcementsText">
                <b>#보라지앵</b>{" "}
              </div>
              <div className="announcementsTextLight">팔로워 | 피드</div>
            </div>
            <div className="smallPrimaryButton px-2 my-auto">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div>
              <div className="announcementsText">
                <b>#보라지앵</b>{" "}
              </div>
              <div className="announcementsTextLight">팔로워 | 피드</div>
            </div>
            <div className="smallPrimaryButton px-2 my-auto">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div>
              <div className="announcementsText">
                <b>#보라지앵</b>{" "}
              </div>
              <div className="announcementsTextLight">팔로워 | 피드</div>
            </div>
            <div className="smallPrimaryButton px-2 my-auto">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div>
              <div className="announcementsText">
                <b>#보라지앵</b>{" "}
              </div>
              <div className="announcementsTextLight">팔로워 | 피드</div>
            </div>
            <div className="smallPrimaryButton px-2 my-auto">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div>
              <div className="announcementsText">
                <b>#보라지앵</b>{" "}
              </div>
              <div className="announcementsTextLight">팔로워 | 피드</div>
            </div>
            <div className="smallPrimaryButton px-2 my-auto">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div>
              <div className="announcementsText">
                <b>#보라지앵</b>{" "}
              </div>
              <div className="announcementsTextLight">팔로워 | 피드</div>
            </div>
            <div className="smallPrimaryButton px-2 my-auto">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div>
              <div className="announcementsText">
                <b>#보라지앵</b>{" "}
              </div>
              <div className="announcementsTextLight">팔로워 | 피드</div>
            </div>
            <div className="smallPrimaryButton px-2 my-auto">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div>
              <div className="announcementsText">
                <b>#보라지앵</b>{" "}
              </div>
              <div className="announcementsTextLight">팔로워 | 피드</div>
            </div>
            <div className="smallPrimaryButton px-2 my-auto">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div>
              <div className="announcementsText">
                <b>#보라지앵</b>{" "}
              </div>
              <div className="announcementsTextLight">팔로워 | 피드</div>
            </div>
            <div className="smallPrimaryButton px-2 my-auto">팔로잉</div>
          </div>
        </div>
      </div>
    );
  };
  const Users = () => {
    return (
      <div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
        <div className="vBox my-1  p-2 shadow-sm">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <div className="avtar my-auto">
                <img src={g1} alt="" width="100%" />
              </div>
              <div className="tex-dark p-2">
                보라지앵 <div className="textLight">팔로워 | 게시물</div>
              </div>
            </div>
            <div className="primaryButton  my-auto px-2">팔로잉</div>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <Base1>
      <div className="con pt-2">
        <div className="con bg-white mt-2 p-2 h50">
          <div className="vBox1 d-flex justify-content-between p-2">
            <input
              type="text"
              className="border-0"
              width="100%"
              placeholder=" "
            />
            <img src={SearchLight} alt="" />
          </div>
          <div className="con d-flex justify-content-around p-1">
            {Page === 1 ? (
              <div className="primaryButton mx-2">태그/그룹</div>
            ) : (
              <div
                className="primaryDisabledButton mx-2"
                onClick={() => {
                  setPage(1);
                }}
              >
                태그/그룹
              </div>
            )}
            {Page === 2 ? (
              <div className="primaryButton mx-2">사용자</div>
            ) : (
              <div
                className="primaryDisabledButton mx-2"
                onClick={() => {
                  setPage(2);
                }}
              >
                사용자
              </div>
            )}
            {Page === 3 ? (
              <div className="primaryButton mx-2">피드/토크</div>
            ) : (
              <div
                className="primaryDisabledButton mx-2"
                onClick={() => {
                  setPage(3);
                }}
              >
                피드/토크
              </div>
            )}
          </div>
          {Page === 1 ? Group() : null}
          {Page === 2 ? Users() : null}
          {/* {SearchKeywords()} */}
        </div>
      </div>
    </Base1>
  );
}
