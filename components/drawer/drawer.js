import React, { useState, useEffect } from 'react';
import { Button, Drawer, Form, Input, Select } from 'antd';
const { Option } = Select;
const DrawerManage = (draw, setDraw, setAdd, setEdit) => {
    const [form] = Form.useForm();
    const onSubmit = (values) => {
        form.resetFields()
        if (draw.status === 'Edit') {
            setEdit({ value: values, id: draw.value.id })
            setDraw({ visible: false })
        } else if (draw.status === 'Add') {
            setAdd(values)
            setDraw({ visible: false })
        }
    }
    useEffect(() => {
        if (draw.status === 'Edit') {
            form.setFieldsValue({
                username: draw.value.username,
                password: draw.value.password,
                firstName: draw.value.firstName,
                lastName: draw.value.lastName,
                email: draw.value.email,
                phoneNumber: draw.value.phoneNumber,
                role: draw.value.role
            })
        }
    }, [draw, setDraw]);

    return (
        <>
            <Drawer title="จัดการผู้ใช้งาน" placement="right" onClose={() => setDraw({ visible: false })} open={draw.visible}>
                <Form layout='vertical' form={form} onFinish={onSubmit}>
                    <Form.Item label='ชื่อผู้ใช้' name='username'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='รหัสผ่าน' name='password'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='ชื่อ' name='firstName'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='นามสกุล' name='lastName'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='อีเมล' name='email'>
                        <Input />
                    </Form.Item>
                    <Form.Item label='เบอร์โทร' name='phoneNumber'>
                        <Input />
                    </Form.Item>
                    <Form.Item
              label="ตำแหน่ง"
              name="role"
              rules={[{ required: true, message: 'กรุณาเลือกตำแหน่ง' }]}
            >
              <Select>
                <Option value="user">User</Option>
                <Option value="admin">Admin</Option>
                {/* เพิ่มตำแหน่งอื่น ๆ ตามต้องการ */}
              </Select>
            </Form.Item>
                    <Button htmlType='submit'>Submit</Button>
                </Form>
            </Drawer>
        </>
    );
};
export default DrawerManage;