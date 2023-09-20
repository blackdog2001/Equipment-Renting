import { Card, Row, Input, Col, Button, Form, image, } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import SignupModal from './SignupModal'; 
import { LoginOutlined } from '@ant-design/icons';


const Login = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [signupModalVisible, setSignupModalVisible] = useState(false);

  // const login = async (values) => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.post('http://localhost:4000/users/login', values);
  //     if (res.status === 200) {
  //       alert('Login success');
  //       localStorage.setItem('users', JSON.stringify(res.data));
  //       if (res.data.role === 'admin') {
  //         router.push('/Admin');
  //       } else if (res.data.role === 'user') {
  //         router.push('/User');
  //       }
  //     } else {
  //       alert('Login failed');
  //     }
  //   } catch (error) {
  //     alert('Login failed');
  //     console.error(error);
  //   }
  //   setLoading(false);
  // };

  const login = async (values) => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:4000/users/login', values);
      const username = (res.data.username);
      if (res.status === 200) {
        alert('Login success');
        localStorage.setItem('users', JSON.stringify(res.data));
        if (res.data.role === 'admin') {
          router.push('/Admin'); 
        } else if (res.data.role === 'user') {
          router.push(`/User?username=${username}`);
        }
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('Login failed');
      console.error(error);
    }
    setLoading(false);
  };

  const handleSignup = () => {
    setSignupModalVisible(true); 
  };

  const closeSignupModal = () => {
    setSignupModalVisible(false); 
  };

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #FFEBB7, #FDF0D0)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      
      <Row justify="center" style={{
        marginTop: '3px',
        boxShadow: '0 11px 20px rgba(0, 0, 0, 0.1)',
        background: 'rgba(255, 255, 255, 0.9)', 
        borderRadius: '10px', 
        padding: '0.1px',
        margin: '0 .1px'
      }}>
        <Form form={form} onFinish={login}>
          <Card style={{
            width: '100%', 
            background: 'transparent', 
            border: 'none' 
          }}>
  
           
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '85px', height: '80px', borderRadius: '100%', overflow: 'hidden', marginBottom: '0.50px' }}>
                  <img src="http://surl.li/lcgjd" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h1 style={{ textAlign: 'center', color: '#1c1e21' }}>เข้าสู่ระบบ</h1>
              </div>
            
            <Form.Item label="ชื่อผู้ใช้งาน" name="username">
              <Input style={{ borderColor: '#660099' }} />
            </Form.Item>
            <Form.Item label="รหัสผ่าน" name="password">
              <Input.Password style={{ borderColor: '#660099' }} />
            </Form.Item>
            <Form.Item>
              <Row justify="center" gutter={[16, 16]}>
                <Col>
                  <Button style={{
                    width: '100%', 
                    color: '#FFFFFF',
                    background: '#660099',
                    backgroundSize: 'cover'
                  }} htmlType="submit" loading={loading}>
                    เข้าสู่ระบบ
                  </Button>
                </Col>
                <Col>
                  <Button style={{
                    width: '100%', 
                    color: '#660099',
                    background: '#FFFFFF', 
                    backgroundSize: 'cover'
                  }} onClick={handleSignup}>สมัครสมาชิก</Button>
                </Col>
              </Row>
            </Form.Item>
          </Card>
        </Form>
      </Row>
  
      <SignupModal visible={signupModalVisible} onCancel={closeSignupModal} />
    </div>
  );
};

export default Login;
