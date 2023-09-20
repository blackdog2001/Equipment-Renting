// import { useState } from 'react';
// import { Modal, Form, Input, Button, message, Upload, Row, Col } from 'antd';
// import axios from 'axios';

// const SignupModal = ({ visible, onCancel }) => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async (values) => {
//     console.log(values)
//     setLoading(true);
//     try {
//       // ส่งข้อมูลให้กับเซิร์ฟเวอร์สำหรับการสมัครสมาชิก
//       const response = await axios.post('http://localhost:4000/register', values);
//       if (response.status === 200) {
//         message.success('การสมัครสมาชิกเสร็จสมบูรณ์');
//         onCancel();
//       } else {
//         message.error('การสมัครสมาชิกล้มเหลว');
//       }
//     } catch (error) {
//       message.error('การสมัครสมาชิกล้มเหลว');
//       console.error(error);
//     }
//     setLoading(false);
//   };

//   return (
//     <Modal visible={visible} onCancel={onCancel} footer={null}>
//       <Form form={form} onFinish={handleSignup}>
//         <Row gutter={[16, 16]}>
//           <Col span={12}>
//             <Form.Item
//               label="ชื่อผู้ใช้งาน"
//               name="username"
//               rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้งาน' }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="รหัสผ่าน"
//               name="password"
//               rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]}
//             >
//               <Input.Password />
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={[16, 16]}>
//           <Col span={12}>
//             <Form.Item
//               label="ชื่อ"
//               name="firstName"
//               rules={[{ required: true, message: 'กรุณากรอกชื่อ' }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="นามสกุล"
//               name="lastName"
//               rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]}
//             >
//               <Input />
//             </Form.Item>
//           </Col>
//         </Row>
//         <Form.Item
//           label="อีเมล"
//           name="email"
//           rules={[
//             { required: true, message: 'กรุณากรอกอีเมล' },
//             { type: 'email', message: 'รูปแบบอีเมลไม่ถูกต้อง' },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           label="เบอร์โทร"
//           name="phoneNumber"
//           rules={[{ required: true, message: 'กรุณากรอกเบอร์โทร' }]}
//         >
//           <Input />
//         </Form.Item>
        
//         <Form.Item
//           label="รูปภาพประจำตัว"
//           // name="image"
//           rules={[{ required: true, message: 'กรุณาเลือกรูปภาพประจำตัว' }]}
//         >
//           <Upload>
//             <Button>อัปโหลด</Button>
//           </Upload>
//         </Form.Item>
//         <Form.Item>
//           <Row justify="center">
//             <Button type="primary" htmlType="submit" loading={loading}>
//               สมัครสมาชิก
//             </Button>
//           </Row>
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default SignupModal;

import { useState } from 'react';
import { Modal, Form, Input, Button, message, Upload, Row, Col, Select } from 'antd';
import axios from 'axios';

const { Option } = Select; // นำเข้าคอมโพเนนต์ Option จาก Ant Design
const SignupModal = ({ visible, onCancel }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (values) => {
    console.log(values)
    setLoading(true);
    try {
      // ส่งข้อมูลให้กับเซิร์ฟเวอร์สำหรับการสมัครสมาชิก
      const response = await axios.post('http://localhost:4000/register', values);
      if (response.status === 200) {
        message.success('การสมัครสมาชิกเสร็จสมบูรณ์');
        onCancel();
      } else {
        message.error('การสมัครสมาชิกล้มเหลว');
      }
    } catch (error) {
      message.error('การสมัครสมาชิกล้มเหลว');
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <Modal visible={visible} onCancel={onCancel} footer={null}>
      <Form form={form} onFinish={handleSignup}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="ชื่อผู้ใช้งาน"
              name="username"
              rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้งาน' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="รหัสผ่าน"
              name="password"
              rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน' }]}
            >
              <Input.Password />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="ชื่อ"
              name="firstName"
              rules={[{ required: true, message: 'กรุณากรอกชื่อ' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="นามสกุล"
              name="lastName"
              rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="อีเมล"
          name="email"
          rules={[
            { required: true, message: 'กรุณากรอกอีเมล' },
            { type: 'email', message: 'รูปแบบอีเมลไม่ถูกต้อง' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="เบอร์โทร"
          name="phoneNumber"
          rules={[{ required: true, message: 'กรุณากรอกเบอร์โทร' }]}
        >
          <Input />
        </Form.Item>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="ตำแหน่ง"
              name="role"
              rules={[{ required: true, message: 'กรุณาเลือกตำแหน่ง' }]}
            >
              <Select>
                <Option value="user">User</Option>
              
              </Select>
            </Form.Item>
          </Col>
          {/* ให้ปิด Form.Item ที่เปิดไว้ในส่วนนี้ */}
        </Row>
        <Form.Item
          label="รูปภาพประจำตัว"
          // name="image"
          rules={[{ required: true, message: 'กรุณาเลือกรูปภาพประจำตัว' }]}
        >
          <Upload>
            <Button>อัปโหลด</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Row justify="center">
            <Button type="primary" htmlType="submit" loading={loading} style={{
          color: '#9400D3', // สีตัวอักษรเป็นสีดำ
          border: '1.5px solid #191970', // กรอบสีดำ
          background: 'linear-gradient(to bottom, #DA70D6, #FAEBD7)', // พื้นหลังสีเขียว (ทึบ)
          padding: '1px 15px', // ขนาดการเสริม
          borderRadius: '10px', // ขอบมนกลม
        }}>
              สมัครสมาชิก
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </Modal>
  );
        }
export default SignupModal;

