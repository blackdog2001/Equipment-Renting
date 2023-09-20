// import React, { useState, useEffect } from 'react';
// import { Button, Drawer, Form, Input } from 'antd';

// const drawerItem = (draw, setDraw, setAdd, setEdit) => {
//     const [form] = Form.useForm();
//     console.log(draw?.visible)
//     const onSubmit = (values) => {
//         form.resetFields();
//         if (draw.status === 'Edit') {
//             setEdit({ value: values, EquipID: draw.value.EquipID });
//             setDraw({ visible: false });
//         } else if (draw.status === 'Add') {
//             setAdd(values);
//             setDraw({ visible: false });
//         }
//     };

//     useEffect(() => {
//         if (draw.status === 'Edit') {
//             form.setFieldsValue({
//                 EquipName: draw.value.EquipName,
//                 Amount: draw.value.Amount,
//                 Picture :draw.value.Picture,
//                 ImportDate:draw.value.ImportDate,
//                 EquipType:draw.value.EquipType,
//             });
//         }
//     }, [draw, setDraw]);

//     return (
//         <>
//             <Drawer title="จัดการผู้ใช้งาน" placement="right" onClose={()=>setDraw({visible: false,status: ''})} open={draw?.visible}>
//                 <Form layout='vertical' form={form} onFinish={onSubmit}>
//                     <Form.Item label='ชื่ออุปกรณ์' name='EquipName'>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label='จำนวน' name='Amount'>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label='รูป' name='Picture'>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label='ประเภท' name='Type'>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item label='วันที่นำเข้า' name='Date'>
//                         <Input />
//                     </Form.Item>


//                     <Button type='primary' htmlType='submit'>
//                         {draw.status === 'Add' ? 'Add' : 'Save'}
//                     </Button>
//                 </Form>
//             </Drawer>
//         </>
//     );
// };
// export default drawerItem;

import React, { useState, useEffect } from 'react';
import { Button, Drawer, Form, Input } from 'antd';

const DrawerItem = (draw, setDraw, setAdd, setEdit) => {
    const [form] = Form.useForm();

    const onSubmit = (values) => {
        form.resetFields();
        if (draw.status === 'Edit') {
            setEdit({ value: values, EquipID: draw.value.EquipID });
            setDraw({ visible: false });
        } else if (draw.status === 'Add') {
            setAdd(values);
            setDraw({ visible: false });
        }
    };

    useEffect(() => {
        if (draw.status === 'Edit') {
            form.setFieldsValue({
                EquipName: draw.value.EquipName,
                Amount: draw.value.Amount,
                Picture: draw.value.Picture,
                Type: draw.value.Type,
                Date: draw.value.IMDate,
            });
        }
    }, [draw, setDraw]);

    return (
        <Drawer
            title={draw.status === 'Add' ? 'เพิ่มข้อมูลอุปกรณ์' : 'แก้ไขข้อมูลอุปกรณ์'}
            placement="right"
            onClose={() => setDraw({ visible: false, status: '' })}
            visible={draw.visible}
        >
            <Form layout="vertical" form={form} onFinish={onSubmit}>
                <Form.Item label="รหัสอุปกรณ์" name="EquipID">
                    <Input />
                </Form.Item>
                <Form.Item label="ชื่ออุปกรณ์" name="EquipName">
                    <Input />
                </Form.Item>
                <Form.Item label="จำนวน" name="Amount">
                    <Input />
                </Form.Item>
                <Form.Item label="รูป" name="Picture">
                    <Input />
                </Form.Item>
                <Form.Item label="ประเภท" name="Type">
                    <Input />
                </Form.Item>
                <Form.Item label="วันที่นำเข้า" name="Date">
                    <Input />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    {draw.status === 'Add' ? 'เพิ่ม' : 'บันทึก'}
                </Button>
            </Form>
        </Drawer>
    );
};

export default DrawerItem;
