import styled from "./Register.module.css";
import classNames from "classnames/bind";
import React from "react";
import Footer from "./Footer";
const cx = classNames.bind(styled);
function Register() {
  return (
    <>
      <div className={cx("wrap")}>
        <div className={cx("wrapper")}>
          <div className={cx("text")}>
            <h1>Save time ,save money!</h1>
            <h2> sign up and we'll send the best deals to you</h2>
          </div>
          <div className={cx("form_input")}>
            <div>
              <input className={cx("input")} />
            </div>
            <div>
              <button className={cx("button")}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Register;
