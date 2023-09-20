// import React, { useState, useEffect } from 'react';
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   SolutionOutlined,
//   FormOutlined,
//   CheckSquareOutlined,
// } from '@ant-design/icons';
// import { Layout, Menu, Button, Card, Spin, Table } from 'antd';
// import { useRouter } from 'next/router';
// import axios from 'axios';
// import { Carousel } from 'antd';

// const { Header, Sider, Content } = Layout;
// const { Meta } = Card;





// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [selectedTab, setSelectedTab] = useState('1');
//   const [equipmentData, setEquipmentData] = useState([]);
//   const [userData, setUserData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const { username } = router.query;

//   const contentStyle = {
//     margin: 0,
//     height: '160px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };

//   const onChange = (currentSlide) => {
//     console.log(currentSlide);
//   };

//   const handleMenuClick = (key) => {
//     setSelectedTab(key);
//   };

//   const fetchEquipmentData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/equipment/get');
//       if (response.status === 200) {
//         setEquipmentData(response.data);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.error('An error occurred while fetching equipment data:', error);
//       setLoading(false);
//     }
//   };

//   const fetchUserData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/users/get');
//       if (response.status === 200) {
//         const filteredUserData = response.data.filter((user) => user.username === username);
//         setUserData(filteredUserData);
//         setLoading(false);
//       }
//     } catch (error) {
//       console.error('An error occurred while fetching user data:', error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (selectedTab === '2') {
//       fetchEquipmentData();
//       fetchUserData();
//     } else if (selectedTab === '1') {
//       fetchUserData();
//     }
//   }, [selectedTab]);

//   // รายการอุปกรณ์แสดงเหมือนเดิม
//   const equipmentColumns = [
//     {
//       title: 'ชื่ออุปกรณ์',
//       dataIndex: 'EquipName',
//       key: 'EquipName',
//     },
//     {
//       title: 'จำนวน',
//       dataIndex: 'Amount',
//       key: 'Amount',
//     },
//     {
//       title: 'รหัสอุปกรณ์',
//       dataIndex: 'EquipID',
//       key: 'EquipID',
//     },
//   ];

//   // รายการผู้ใช้แสดงเหมือนเดิม
//   const userColumns = [
//     {
//       title: 'Avatar',
//       dataIndex: 'avatar',
//       key: 'avatar',
//     },
//     {
//       title: 'ID',
//       dataIndex: 'id',
//       key: 'id',
//     },
//     {
//       title: 'Username',
//       dataIndex: 'username',
//       key: 'username',
//     },
//     {
//       title: 'Password',
//       dataIndex: 'password',
//       key: 'password',
//     },
//     {
//       title: 'First Name',
//       dataIndex: 'firstName',
//       key: 'firstName',
//     },
//     {
//       title: 'Last Name',
//       dataIndex: 'lastName',
//       key: 'lastName',
//     },
//     {
//       title: 'Email',
//       dataIndex: 'email',
//       key: 'email',
//     },
//     {
//       title: 'Phone Number',
//       dataIndex: 'phoneNumber',
//       key: 'phoneNumber',
//     },
//     {
//       title: 'Role',
//       dataIndex: 'role',
//       key: 'role',
//     },
//     {
//       title: 'Action',
//       key: 'action',
//     },
//   ];

//   let content;

//   switch (selectedTab) {
//     case '1':
//       content = (
//         <Table
//           columns={userColumns}
//           dataSource={userData}
//           rowKey="id" // ใช้ rowKey เป็น 'id'
//         />
//       );
//       break;
//     case '2':
//       content = (
//         <div>
//           <h2>รายการอุปกรณ์</h2>
//           {loading ? (
//             <Spin size="large" />
//           ) : (
//             <div className="equipment-card-container">
//               {equipmentData.map((equipment) => (
//                 <Card
//                   key={equipment.EquipID}
//                   hoverable
//                   style={{ marginRight: '20px', marginBottom: '20px', width: 300 }}
//                   cover={<img alt={equipment.EquipName} src={equipment.ImageURL} />}
//                 >
//                   <Meta title={equipment.EquipName} description={`จำนวน: ${equipment.Amount}`} />
//                 </Card>
//               ))}
//               <style jsx>{`
//                 .equipment-card-container {
//                   display: flex;
//                   flex-direction: row;
//                   flex-wrap: wrap;
//                 }
//               `}</style>
//             </div>
//           )}
//           {loading ? (
//             <Spin size="large" />
//           ) : (
//             <Table columns={equipmentColumns} dataSource={equipmentData} rowKey="EquipID" />
//           )}
//         </div>
//       );
//       break;
//     case '3':
//       content = <div>Content for Tab 3</div>;
//       break;
//     default:
//       content = <div>Default Content</div>;
//   }

//   const imageStyle = {
//     width: '100%',
//     maxHeight: '350px',
//     objectFit: 'cover',
//   };

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider trigger={null} collapsible collapsed={collapsed} className="green-sider">
//         <div className="demo-logo-vertical" />
//         <Menu
//           theme="dark"
//           mode="inline"
//           selectedKeys={[selectedTab]}
//           onClick={({ key }) => handleMenuClick(key)}
//         >
//           <Menu.Item key="1" icon={<SolutionOutlined />}>
//             <div>
//               <h1>{username}</h1>
//             </div>
//           </Menu.Item>
//           <Menu.Item key="2" icon={<FormOutlined />}>
//             ยืมอุปกรณ์
//           </Menu.Item>
//           <Menu.Item key="3" icon={<CheckSquareOutlined />}>
//             คืนอุปกรณ์
//           </Menu.Item>
//           <Menu.Item key="4" icon={<CheckSquareOutlined />}>
//             ออกจากระบบ
//           </Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout style={{ background: '#DCDCDC', display: 'flex' }}>
//         <Header
//           style={{
//             padding: 0,
//             background: '#DCDCDC',
//           }}
//         >
//           <h1 style={{
//             textAlign: 'center',
//             fontSize: '1.5rem',
//             color: '#660066',
//             padding: '1px',
//             border: '0.5px solid #FFFFFF',
//             background: '#F5DEB3',
//             fontWeight: 'bold', // เพิ่มส่วนนี้เพื่อทำให้ตัวหนังสือหนาขึ้น
//           }}>
//             ระบบยืมคืนอุปกรณ์คอมพิวเตอร์
//           </h1>
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//             }}
//           />
//         </Header>
//         <Carousel autoplay={onChange}>
//           <div>
//             <img src="https://i0.wp.com/www.vru.ac.th/wp-content/uploads/2023/01/121.jpg?fit=1536%2C768" alt="รูปภาพ 1" style={imageStyle} />
//           </div>
//           <div>
//             <img src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-6/301572883_582301363685496_8289643292344889715_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHG4vBIIdauQs18VOPY2KSKXplW9YbuzZFemVb1hu7NkaE6SeqP9C0TIA6r4ttcqtqy1XqO36aX6plmXYEkatWQ&_nc_ohc=bfGqDJ0CKq4AX8ZhQbJ&_nc_ht=scontent.fbkk12-3.fna&oh=00_AfBaelGTJXyI3wvstZ5BRlphBN5wNEhgh3lRpWgTir6gvA&oe=65040FF9" alt="รูปภาพ 2" style={imageStyle} />
//           </div>
//         </Carousel>
//         <Content
//           style={{
//             flex: 1,
//             margin: '24px 16px',
//             padding: 24,
//             background: '#F0F2F5',
//           }}
//         >
//           {content}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SolutionOutlined,
  FormOutlined,
  CheckSquareOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Card, Spin, Table, Space, Modal, Row, Col,Image } from 'antd';
import { useRouter } from 'next/router';
import axios from 'axios';

const { Header, Sider, Content } = Layout;
const { Meta } = Card;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedTab, setSelectedTab] = useState('1');
  const [equipmentData, setEquipmentData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { username } = router.query;
  const [borrowedEquipment, setBorrowedEquipment] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleMenuClick = (key) => {
    setSelectedTab(key);
  };

  const fetchEquipmentData = async (filter) => {
    try {
      const response = await axios.get('http://localhost:4000/equipment/get', { params: filter });
  
      if (response.status === 200) {
        setEquipmentData(response.data);
      } else {
        console.error('An error occurred while fetching equipment data:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while fetching equipment data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users/get');
      if (response.status === 200) {
        const filteredUserData = response.data.filter((user) => user.username === username);
        setUserData(filteredUserData);
        setLoading(false);
      }
    } catch (error) {
      console.error('An error occurred while fetching user data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedTab === '2') {
      fetchEquipmentData();
      fetchUserData();
    } else if (selectedTab === '1') {
      fetchUserData();
    }
  }, [selectedTab]);
  

  const equipmentColumns = [
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
      title: 'รหัสอุปกรณ์',
      dataIndex: 'EquipID',
      key: 'EquipID',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleBorrowClick(record)}>
            ยืม
          </Button>
          <Button type="default" onClick={() => handleDetailsClick(record)}>
            ดูรายละเอียด
          </Button>
        </Space>
      ),
    },
  ];

  

  const userColumns = [
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
    },
  ];

  let content;

  switch (selectedTab) {
    case '1':
      content = (
        <Table columns={userColumns} dataSource={userData} rowKey="id" />
      );
      break;
    case '2':
      content = (
        <div>
          <div style={{textAlign: 'center', color: '#4D0558', fontSize: 38, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>รายการอุปกรณ์</div>
          <div style={{width: '100%', height: '100%', border: '0.1px #4D0558 solid'}}></div>
          <h2>รายการอุปกรณ์ที่ถูกยืม</h2>
          {loading ? (
            <Spin size="large" />
          ) : (
            <div className="equipment-card-container">
              {equipmentData.map((equipment) => (
                <Card
                  key={equipment.EquipID}
                  hoverable
                  style={{ marginRight: '20px', marginBottom: '20px', width: 300 }}
                  cover={<img alt={equipment.EquipName} src={equipment.ImageURL} />}
                >
                  <Meta title={equipment.EquipName} description={`จำนวน: ${equipment.Amount}`} />
                 
                </Card>
              ))}
              <style jsx>{`
                .equipment-card-container {
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                }
              `}</style>
            </div>
          )}
        </div>
      );
      break;
    case '3':
      
      break;
    default:
      content = <div>Default Content</div>;
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} className="green-sider">
      <div >
      <img src="/image/cs.jpg" alt="Logo" style={{ width: '100px' }} />
    </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedTab]}
          onClick={({ key }) => handleMenuClick(key)}
        >
          <Menu.Item key="1" icon={<SolutionOutlined />}>
            <div>
              <h1>{username}</h1>
            </div>
          </Menu.Item>
          <Menu.Item key="2" icon={<FormOutlined />}>
            ยืมอุปกรณ์
          </Menu.Item>
          <Menu.Item key="3" icon={<CheckSquareOutlined />}>
            คืนอุปกรณ์
          </Menu.Item>
          <Menu.Item key="4" icon={<CheckSquareOutlined />}>
            ออกจากระบบ
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ background: '#ffffff', display: 'flex' }}>
        <Header
          style={{
            padding: 0,
            background: '#FF3FA4', 
            borderBottom: '1px solid #e0e0e0', 
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ flex: 1 }}>
           
            <div style={{textAlign: 'center', color: '#ffffff', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>ระบบยืม-คืน อุปกรณ์คอมพิวเตอร์</div>
          </div>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              color: '#ffffff',
            }}
          />
        </Header>
        <Content
          style={{
            flex: 1,
            margin: '24px 16px',
            padding: 24,
            background: '#ffffff', 
          }}
        >
          {content}
        </Content>
      </Layout>
      <Modal
        visible={isModalVisible}
        title="รายละเอียดอุปกรณ์ที่ถูกยืม"
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>
            ปิด
          </Button>,
        ]}
      >
        {borrowedEquipment ? (
          <div>
            <Row gutter={16}>
              <Col span={8}>ชื่ออุปกรณ์:</Col>
              <Col span={16}>{borrowedEquipment.EquipName}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>จำนวน:</Col>
              <Col span={16}>{borrowedEquipment.Amount}</Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>รหัสอุปกรณ์:</Col>
              <Col span={16}>{borrowedEquipment.EquipID}</Col>
            </Row>
            {/* เพิ่มรายละเอียดอื่น ๆ ของอุปกรณ์ที่ถูกยืมตรงนี้ */}
          </div>
        ) : (
          <p>ไม่พบข้อมูลอุปกรณ์ที่ถูกยืม</p>
        )}
      </Modal>
    </Layout>
  );
};

export default App;

