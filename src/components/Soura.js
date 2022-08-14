import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { activeAudio } from "../redux/slice/NameSlice";
import { nameSoura } from "../redux/slice/Data";
function Soura() {
  const [sourh, setSourh] = useState([]);
  const activeAuth = useSelector((state) => state.name.activeAuth);
  const dispatch = useDispatch();
  const getUrl = (url) => {
    dispatch(activeAudio(url));
  };
  useEffect(() => {
    axios
      .get(activeAuth.api)
      .then((res) => {
        const data = res.data.attachments;

        setSourh(data);
      })
      .catch((error) => {});
  }, [activeAuth.api]);

  return (
    <div className="all-soura py-5">
      <div className="container pb-5">
        <h1 className="pb-5"> {activeAuth.name} 🤍</h1>
        <div className="row g-3 text-center">
          {sourh.length === 0 ? (
            <div className="louding  d-flex justify-content-center align-items-center g-0">
              <div className="content pt-5">
                <h1 className="p-3">انتظر من فضلك</h1>
                <i className="fa-solid fa-spinner p-3"></i>
              </div>
            </div>
          ) : (
            sourh.map((e, i) => {
              return (
                <div className="col-md-4" key={i}>
                  <div className="soura p-4 rounded d-flex justify-content-between">
                    <strong> سُورَة {nameSoura[i].name}</strong>
                    <i
                      className="fa-solid fa-play"
                      onClick={() => {
                        getUrl(e.url);
                      }}></i>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Soura;
