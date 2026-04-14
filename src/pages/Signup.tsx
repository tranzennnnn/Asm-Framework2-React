import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { ISignup } from '../interface/product'
import axios from 'axios'
import { Button, Form, Input, message } from 'antd'

const Signup = () => {
  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: async (user: ISignup) => {
      const { data } = await axios.post(`http://localhost:3000/register`, user)
      return data
    },
    onSuccess: (data) => {
      message.success('Dang ki thanh cong')
      navigate('/login')
    },
    onError: (error: any) => {
      message.error(error.response?.data || 'Dang ki that bai')
    }
  })
  const onFinish = (values: ISignup) => {
    mutate(values)
  }
  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Đăng ký</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Vui lòng nhập Email!' },
            { type: 'email', message: 'Email không đúng định dạng!' }
          ]}
        >
          <Input placeholder="example@mail.com" />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            { required: true, message: 'Vui lòng nhập mật khẩu!' },
            { min: 6, message: 'Mật khẩu phải từ 6 ký tự trở lên!' }
          ]}
        >
          <Input.Password placeholder="••••••" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Đăng ký
          </Button>
        </Form.Item>
        <div style={{ textAlign: 'center' }}>
          Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
        </div>
      </Form>
    </div>
  )
}

export default Signup
