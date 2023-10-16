import React from "react";
import { Button, Form, Input } from "antd";
function MyaccountForm() {
  return (
    <div>
      {/* <div className="MyaccountForm-box1">
        <div className="MyaccountForm-box2">
            <div className="MyaccountForm-box3">

            </div>
        </div>
      </div> */}
      <Form>
        <div className="MyaccountForm-Box1">
          <div className="MyaccountForm-Box2">
            <div className="MyaccountForm-Box4">SIGN IN</div>
            <div className="MyaccountForm-Box3">
              <div className="MyaccountForm-Box5">
                <div>
                  <label className="formLabel">Email</label>
                  <Form.Item>
                    <Input size="large" placeholder="Enter  Email" />
                  </Form.Item>
                </div>
                <div>
                  <label className="formLabel">Password</label>
                  <Form.Item>
                    <Input.Password size="large" placeholder=" password" />
                  </Form.Item>
                </div>
                <div className="MyaccountForm-Txt1">Forgot Password</div>
                <div className="MyaccountForm-Box6">
                  <Button className="MyaccountForm-Bttn">SIGN IN</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default MyaccountForm;
