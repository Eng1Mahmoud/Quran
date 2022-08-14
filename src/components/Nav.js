import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../images/pngegg.png";
import { useDispatch } from "react-redux";
import { addMo, addT, addH } from "../redux/slice/NameSlice";
function Nav() {
  const togleRef = useRef();
  const dispatch = useDispatch();
  const addmo = () => {
    dispatch(addMo());
  };
  const addt = () => {
    dispatch(addT());
  };

  const addh = () => {
    dispatch(addH());
  };
  const scroll = () => {
    window.scrollTo(0, 400);
  };
  return (
    <div className="nav">
      <nav className="navbar navbar-expand-lg bg-light w-100">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="logo"></img>
          </Link>
          <button
            ref={togleRef}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center"  id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={() => {
                    addt();
                    scroll();
                    togleRef.current.click();
                  }}
                  className="nav-link active"
                  aria-current="page"
                  to="/">
                  مَصَاحِف مُرَتَّلَة
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    addmo();
                    scroll();
                    togleRef.current.click();
                  }}
                  className="nav-link"
                  to="/">
                  مَصَاحِف مُعَلِّمِه
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    addh();
                    scroll();
                    togleRef.current.click();
                  }}
                  className="nav-link"
                  to="/">
                  مَصَاحِف الْحَرَمَيْن
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
