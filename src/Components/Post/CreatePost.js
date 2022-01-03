import React, { useEffect, useState } from "react";
import Base from "./../Base";
import { useNavigate, useLocation } from 'react-router-dom'
import axios from "../../Reuseables/AxiosConfig";

import imgSelect from '../../Assets/images/Shape.png'
import cross from '../../Assets/images/cross.png'


export default function CreatePost() {
  const navigation = useNavigate()
  const location = useLocation()
  const [culturalTagList, setCulturalTagList] = useState([])
  const [imgUrls, setImgUrls] = useState([])
  const [flag, setFlag] = useState(false)
  const [percentage, setPercentage] = useState(0);
  let urls = [];

  const openCulturalTag = () => {
    navigation('/post/cultural_tag')
  }

  const handleCross = (index) => {
    const urlList = imgUrls;
    const newUrl = urlList.filter((url, i) => {
      if (i !== index) {
        return url
      }
    })
    console.log('newUrl:', newUrl);
    setImgUrls(newUrl)
  }

  const fileSelectedHandler = (e) => {
    console.log('e.target.files:', e.target.files);
    console.log('e.target.files.length:', e.target.files.length);
    const imgFile = [...e.target.files]
    console.log('imgFile:', imgFile);

    if (e.target.files.length !== 0) {
      imgFile.forEach((file, index, array) => {
        setTimeout(() => {
          console.log('file:', file)
          let formData = new FormData();
          formData.append(`file`, file);
          axios({
            method: "post",
            url: "api/upload-file",
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data',
              'Accept': "*/*"
            },
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              let percent = Math.floor((loaded * 100) / total)
              console.log(`${loaded}kb of ${total}kb | ${percent}%`)
              if (percent < 99) {
                setPercentage(percent)
              }
            }
          }).then(res => {
            console.log('res.', res)
            urls.push(res.data.data.url)
            console.log('urls:', urls);
            if (index === array.length - 1) {
              console.log('settting values:');
              setFlag(false)
              setImgUrls(urls)
            }
          }).catch(err => {
            console.log("err", err)
            alert(err.response.data.message)
          })
        })
      }, 1000);
    }
  }

  useEffect(() => {
    console.log('location:', location);
    if (location.state) {
      let list = culturalTagList
      list.push(location.state)
      console.log('list:', list);
      setCulturalTagList([location.state])
    }
  }, [])
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
              <div className="d-flex justify-content-between">
                <div className="primaryButton mx-2"
                  onClick={openCulturalTag}
                >문화태그</div>
                <div className="mr-2" style={{ cursor: "pointer", position: "relative" }} >
                  <img src={imgSelect} alt="select_img" style={{ cursor: "pointer", }} />
                  <input type="file"
                    multiple
                    style={{
                      position: "absolute", cursor: "pointer", top: "0", left: "0",
                      width: "34px", height: "36px", opacity: "0",
                    }}
                    onChange={fileSelectedHandler} />
                </div>
              </div>
              <div className="m-3 createPostBox">
                <textarea
                  type="textarea"
                  style={{}}
                  placeholder="당신의 이야기를 들려주세요."
                  className="postText p-2"
                />
                {
                  imgUrls.length !== 0 &&
                  <div className="p-2 d-flex mx-auto"
                    style={{ gap: "10px", width: "80%", boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)", overflow: "hidden" }}>
                    {imgUrls.map((url, index) => {
                      console.log('hi')
                      return (
                        <div key={index}
                          style={{
                            position: "relative",
                            maxWidth: "60px", maxHeight: "60px", objectFit: "cover",
                            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"
                          }}>
                          <img src={url} alt="img" style={{ width: "100%", height: "100%", }} />
                          <img src={cross} alt="cross"
                            onClick={(e) => {
                              handleCross(index)
                            }}
                            style={{
                              position: 'absolute', cursor: "pointer",
                              top: "5px", right: "5px", width: "10px", height: "10px"
                            }}
                          />
                        </div>
                      );
                    })
                    }
                  </div>
                }
                {
                  percentage > 0 &&
                  <div className="w-100 my-2 d-flex flex-column" style={{}}>
                    <label htmlFor="progress">{percentage}%</label>
                    <progress max="100" min="0" value={percentage} id="progress"></progress>
                  </div>
                }

                {
                  culturalTagList.length !== 0 && culturalTagList.map((tagItem, index) => (
                    <div key={index} className='d-flex mx-auto my-3'
                      style={{
                        height: "60px", width: "70%", overflow: "hidden",
                        boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.08)",
                        borderRadius: "8px", gap: "10px", fontSize: "12px"
                      }}
                    >
                      <img src={tagItem.image_url} alt="photo" style={{ flexBasis: "30%", objectFit: "cover" }} />
                      <div className='d-flex flex-column justify-content-center' style={{ flexBasis: "70%", gap: "15px" }} >
                        <p className='mb-0 text-bold'
                          style={{ fontWeight: "500", }}>{tagItem.name}</p>
                        <p className='mb-0 text-bold'
                          style={{ fontWeight: "400" }}>{tagItem.author}
                          <span className='ml-3'>{tagItem.publisher}</span></p>
                      </div>
                    </div>
                  ))
                }
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
    </Base >
  );
}
