import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import chiliReq from "./request/index"
import { login, userInfo, dailySign } from "./request/api/user"
import './App.scss';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values: any) => {
  console.log('Success:', values);
  chiliReq(login(values)).then((res : any) => {
    console.log(res)
    const { id } = res.account;
    chiliReq(userInfo({uid: id,})).then((res) => {
      console.log(res)
      chiliReq(dailySign({type: '0',})).then((res) => {
        console.log(res)
      })
    })
  }).catch(err => {
    console.log(err)
  })
};


const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <Form
          style={{
            width: 500,
            margin: '100px auto'
          }}
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="phone"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
        </Button>
          </Form.Item>
        </Form>

      </div>
    );
  }
}

export default App;