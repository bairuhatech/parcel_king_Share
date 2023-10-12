import React from "react";
import WebsiteHeader from "../websiteHeader";
import Footer from "../websiteFooter";
import "../styles.scss";
import Logo from "../../asset/image/logo.png";
import { Button, Form, Input } from "antd";
import { TfiEmail } from "react-icons/tfi";

function SignUpScreen() {
  const style = {
    background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
  };

  return (
    <>
      <WebsiteHeader bgColor={style.background} />
      <Form>
        <div className="signUpScreen-Box1">
          <div className="signUpScreen-Box2">
            <div className="signUpScreen-Box4">
              <img className="signUpScreen-Img" src={Logo} alt="" />
            </div>
            <div className="signUpScreen-Box3">
              <div className="signUpScreen-Box5">
                <div>
                  <label className="formLabel">UserName</label>
                  <Form.Item>
                    <Input
                      placeholder="Enter Username or Email"
                      prefix={<TfiEmail color="grey" />}
                    />
                  </Form.Item>
                </div>
                <div>
                  <label className="formLabel">Password</label>
                  <Form.Item>
                    <Input.Password placeholder="input password" />
                  </Form.Item>
                </div>
                <div className="signUpScreen-Txt1">Forgot Password</div>
                <div className="signUpScreen-Box6">
                  <Button className="signUpScreen-Bttn">Login</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>

      <Footer />
    </>
  );
}

export default SignUpScreen;
