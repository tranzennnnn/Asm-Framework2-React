import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import type { TCategory } from '../../interface/category'
import axios from 'axios'
import { Button, Form, Input, message } from 'antd'

const CategoryAdd = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate, isPending} = useMutation({
        mutationFn: async (values: TCategory) => {
            const {data} = await axios.post(`http://localhost:3000/categories`, values)
            return data
        },
        onSuccess: () => {
            message.success('Them danh muc thanh cong')
            queryClient.invalidateQueries({ queryKey: ['categories']})
            navigate('/admin/categories')

        },
        onError: () => {
            message.error('Them danh muc that bai')
        }
    })
  return (
    <>
        <h1 className='text-center text-2xl uppercase mb-5'>Thêm danh mục</h1>
            <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={(values: TCategory) => mutate(values)}
            >
                <Form.Item
                    label="Tên danh mục"
                    name="name"
                    rules={[{ required: true, message: 'Tên danh mục không được để trống!' }]}
                >
                    <Input placeholder="Nhập tên danh mục..." />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 6 }}>
                    <Button type="primary" htmlType="submit" loading={isPending}>
                        Lưu danh mục
                    </Button>
                </Form.Item>
            </Form>
        </>
  )
}

export default CategoryAdd
