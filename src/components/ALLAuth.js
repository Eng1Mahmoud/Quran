import React from "react";
import { Link } from "react-router-dom";
import { active } from "../redux/slice/NameSlice";
import { useDispatch, useSelector } from "react-redux";
function ALLAuth() {
  const all = useSelector((state) => state.name.nameAuth);
  const dispatch = useDispatch();
  const addApi = (api) => {
    dispatch(active(api));
  };
  const scroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="all-auth py-5">
      <div className="container pb-5">
        <h1 className="pb-5">قَائِمَةٌ التِّلَاوَات ❤</h1>
        <div className="row g-3 ">
          {all.map((e, i) => {
            return (
              <div className="col-md-6" key={i}>
                <div className="auth p-4 rounded d-flex justify-content-between ">
                  <strong>{e.name}</strong>
                  <Link
                    className="play"
                    to={`::${i}`}
                    onClick={() => {
                      addApi(i);
                      scroll();
                    }}>
                    <i className="fa-solid fa-play "></i>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ALLAuth;
