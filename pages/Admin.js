
import { Table, Button, Space, Col, message, Popconfirm, Tabs } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Drawer from '../components/drawer/drawer'
import { PlusOutlined } from '@ant-design/icons';
import Draweritem from '../components/drawer/drawerItem';

const { TabPane } = Tabs;
const Admin = () => {

  const [userData, setUserData] = useState([]);
  const [draw, setDraw] = useState({ visible: false, status: '', value: {} });

  const [filter, setFilter] = useState({})
  const fetchUserData = async (filter) => {
    const response = await axios.get('http://localhost:4000/users/get', filter).catch((err) => console.log(err))
    if (response.status === 200) {
      setUserData(response.data)
    }
  };

  useEffect(() => {
    fetchUserData(filter);
  }, [filter, setFilter]);

  const setAdd = async (value) => {
    // console.log('value',value)
    try {
      const response = await axios.post(`http://localhost:4000/register`, value);
      if (response.status === 200) {
        message.success('เพิ่มข้อมูลผู้ใช้งานเสร็จสมบูรณ์');
        fetchUserData(filter);
      } else {
        message.error('การเพิ่มข้อมูลผู้ใช้งานล้มเหลว');
      }
    } catch (error) {
      message.error('การเพิ่มข้อมูลผู้ใช้งานล้มเหลือ');
      console.error(error);
    }
  };

  const setEdit = async (value) => {
    try {
      const response = await axios.put(`http://localhost:4000/users/edit/${value.id}`, value.value);
      if (response.status === 200) {
        message.success('แก้ไขข้อมูลผู้ใช้งานเสร็จสมบูรณ์');
        fetchUserData(filter);
      } else {
        message.error('การแก้ไขข้อมูลผู้ใช้งานล้มเหลว');
      }
    } catch (error) {
      message.error('การแก้ไขข้อมูลผู้ใช้งานล้มเหลือ');
      console.error(error);
    }
  };

  const setDelete = async (value) => {
    try {
      const response = await axios.delete(`http://localhost:4000/users/del/${value.id}`);
      if (response.status === 200) {
        message.success('ลบข้อมูลผู้ใช้งานเสร็จสมบูรณ์');
        fetchUserData(filter);
      } else {
        message.error('การลบข้อมูลผู้ใช้งานล้มเหลว');
      }
    } catch (error) {
      message.error('การลบข้อมูลผู้ใช้งานล้มเหลือ');
      console.error(error);
    }
  };

  const User = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },

    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      
      render: (_, record) => (
        <Space size="middle">
          <Col span={12}>
            <Button
              onClick={() => setDraw({ visible: true, status: 'Edit', value: record })}
              style={{
                color: 'black', // สีตัวอักษรเป็นสีเหลือง
                border: '1px solid yellow', // กรอบสีเหลือง
                background: 'transparent', // พื้นหลังโปร่งใส
                padding: '5px 10px', // ขนาดการเสริม
                borderRadius: '4px', // ขอบมนกลม
              }}
            >
              Edit
            </Button>
          </Col>
          <Col span={12}>
            <Popconfirm
              title="ลบ"
              description="ต้องการลบข้อมูลนี้หรือไม่?"
              icon={
                <QuestionCircleOutlined
                  style={{
                    color: 'red',
                  }}
                />
              }
              onConfirm={() => setDelete(record)}
            >
              <Button danger>Delete</Button>
            </Popconfirm>
          </Col>
        </Space>
      ),
    },
  ];

  
  const [filterItem, setFilterItem] = useState({});
  const [equipmentData, setEquipmentData] = useState([]);
  const [drawerItem, setDrawItem] = useState({ visible: false, status: '', value: {} });
  console.log(draw)
  const fetchEquipmentData = async (filter) => {
    const response = await axios.get('http://localhost:4000/equipment/get', { params: filter }).catch((err) => console.log(err))
    if (response.status === 200) {
      setEquipmentData(response.data)
    }
  };

  useEffect(() => {
    fetchEquipmentData(filter);
  }, [filter]);

  // const setAddItem = async (value) => {
  //   console.log(value)
  //   try {
  //       const response = await axios.post('http://localhost:4000/equipment/add', value);
  //       if (response.status === 200) {
  //           message.success('เพิ่มข้อมูลอุปกรณ์เสร็จสมบูรณ์');
  //           fetchEquipmentData(filter);
  //       } else {
  //           message.error('การเพิ่มข้อมูลอุปกรณ์ล้มเหลว');
  //       }
  //   } catch (error) {
  //       message.error('การเพิ่มข้อมูลอุปกรณ์ล้มเหลือ');
  //       console.error(error);
  //   }
  // };
  const setAddItem = async (value) => {
    console.log(value);
    try {
      const response = await axios.post('http://localhost:4000/equipment/add', {
        EquipID: value.EquipID,
        EquipName: value.EquipName,
        Amount: value.Amount,
        Picture: value.Picture,
        IMDate: value.IMDate
      });

      if (response.status === 200) {
        message.success('เพิ่มข้อมูลอุปกรณ์เสร็จสมบูรณ์');
        fetchEquipmentData(filter);
      } else {
        message.error('การเพิ่มข้อมูลอุปกรณ์ล้มเหลว');
      }
    } catch (error) {
      message.error('การเพิ่มข้อมูลอุปกรณ์ล้มเหลือ');
      console.error(error);
    }
  };

  // const setEditItem = async (value) => {
  //   try {
  //     const response = await axios.put(`http://localhost:4000/equipment/edit/${value.EquipID}`, value);
  //     if (response.status === 200) {
  //       message.success('แก้ไขข้อมูลอุปกรณ์เสร็จสมบูรณ์');
  //       fetchEquipmentData(filter);
  //     } else {
  //       message.error('การแก้ไขข้อมูลอุปกรณ์ล้มเหลว');
  //     }
  //   } catch (error) {
  //     message.error('การแก้ไขข้อมูลอุปกรณ์ล้มเหลือ');
  //     console.error(error);
  //   }
  // };
  const setEditItem = async (value) => {
    try {
      const response = await axios.put(`http://localhost:4000/equipment/edit/${value.EquipID}`, {
        EquipID: value.EquipID,
        EquipName: value.EquipName,
        Amount: value.Amount,
        Picture: value.Picture,
        IMDate: value.IMDate
      });

      if (response.status === 200) {
        message.success('แก้ไขข้อมูลอุปกรณ์เสร็จสมบูรณ์');
        fetchEquipmentData(filter);
      } else {
        message.error('การแก้ไขข้อมูลอุปกรณ์ล้มเหลว');
      }
    } catch (error) {
      message.error('การแก้ไขข้อมูลอุปกรณ์ล้มเหลือ');
      console.error(error);
    }
  };


  const setDeleteItem = async (value) => {
    try {
      const response = await axios.delete(`http://localhost:4000/equipment/delete/${value.EquipID}`);
      if (response.status === 200) {
        message.success('ลบข้อมูลอุปกรณ์เสร็จสมบูรณ์');
        fetchEquipmentData(filter);
      } else {
        message.error('การลบข้อมูลอุปกรณ์ล้มเหลว');
      }
    } catch (error) {
      message.error('การลบข้อมูลอุปกรณ์ล้มเหลว');
      console.error(error);
    }
  };
  const ItemList = [
    {
      title: 'รูปภาพ',
      dataIndex: 'Picture',
      key: 'Picture',
    },
    {
      title: 'รหัสอุปกรณ์',
      dataIndex: 'EquipID',
      key: 'EquipID',
    },
    {
      title: 'ชื่ออุปกรณ์',
      dataIndex: 'EquipName',
      key: 'EquipName',
    },
    {
      title: 'จำนวน',
      dataIndex: 'Amount',
      key: 'Amount',
    },
   
    {
      title: 'วันที่นำเข้า',
      dataIndex: 'IMDate',
      key: 'IMDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => setDrawItem({ visible: true, status: 'Edit', value: record })}>Edit</Button>
          <Popconfirm
            title="ลบ"
            description="ต้องการลบข้อมูลนี้หรือไม่?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            onConfirm={() => setDeleteItem(record)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const [statusTab, setStatusTab] = useState('userList')
  
  return (
    // <div>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh', // Set the minimum height to make sure the background covers the entire viewport
      justifyContent: 'center',
      background: 'linear-gradient(to bottom,  #9370DB, #e0e0e0)', // Your background color or gradient
    }}>
      <h1>การจัดการข้อมูล</h1>


      <Button
        onClick={() => { statusTab === 'userList' ? setDraw({ visible: true, status: 'Add' }) : setDrawItem({ visible: true, status: 'Add' }) }}
        style={{
          color: '#9400D3', // สีตัวอักษรเป็นสีดำ
          border: '1.5px solid #191970', // กรอบสีดำ
          background: 'linear-gradient(to bottom, #FAEBD7, #e0e0e0)', // พื้นหลังสีเขียว (ทึบ)
          padding: '1px 15px', // ขนาดการเสริม
          borderRadius: '10px', // ขอบมนกลม
        }}
      >
        <PlusOutlined /> Add
      </Button>
      <Tabs defaultActiveKey="userList" centered onChange={(e) => setStatusTab(e)}>
        <TabPane tab="จัดการผู้ใช้" key="userList" />
        <TabPane tab="จัดการอุปกรณ์" key="deviceManagement" />
      </Tabs>
      {/* </div> */}



      {
        statusTab === 'userList' ?
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Table
              columns={User}
              dataSource={userData}
              style={{
                border: '30px solid linear-gradient(to bottom, #BA55D3, #9400D3)',
                borderRadius: '10px',
                background: 'linear-gradient(to bottom, #DA70D6, #FAEBD7)',
                padding: '3px',
                marginTop: '3px', boxShadow: '0 11px 20px rgba(0, 0, 0, 0.1)'
              }}
              
            />
          </div>
          : <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Table
              columns={ItemList}
              dataSource={equipmentData}
              style={{
                border: '30px solid linear-gradient(to bottom, #BA55D3, #9400D3)',
                borderRadius: '10px',
                background: 'linear-gradient(to bottom, #DA70D6, #FAEBD7)',
                padding: '3px',
                marginTop: '3px', boxShadow: '0 11px 20px rgba(0, 0, 0, 0.1)'
              }}
            />
          </div>
          
      }
      {Drawer(draw, setDraw, setAdd, setEdit)}
      {Draweritem(drawerItem, setDrawItem, setAddItem, setEditItem)}
    </div>
  );
};

export default Admin;


