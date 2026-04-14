import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { ICategory, TCategory } from '../../interface/category'
import axios from 'axios'
import { Button, Form, Input, message, Spin } from 'antd'

const CategoryEdit = () => {
    const queryClient = useQueryClient()
    const {id} = useParams<{id: string}>()
    const navigate = useNavigate()
    const [form] = Form.useForm()

    const {data: category, isLoading} = useQuery<ICategory>({
        queryKey: ['category', id],
        queryFn: async () => {
            const {data} = await axios.get(`http://localhost:3000/categories/${id}`)
            return data
        },
        enabled: !id
    })

    useEffect(() => {
        if (category) {
            form.setFieldsValue({name: category.name})
        }
    }, [category])
    const {mutate, isPending} = useMutation ({
        mutationFn: async (values: TCategory) => {
            const {data} = await axios.put(`http://localhost:3000/categories/${id}`, values)
            return data  
        },
        onSuccess: () => {
            message.success('Cap nhat danh muc thanh cong')
            queryClient.invalidateQueries({ queryKey: ['categories']})
            navigate('/admin/categories')
        },
        onError: () => {
            message.error('Cap nhat du lieu')
        }
    })
    if(isLoading) return <Spin/>
  return (
             <>
            <h1 className='text-center text-2xl uppercase mb-5'>Sửa danh mục</h1>
            <Form
                form={form}
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
                        Cập nhật
                    </Button>
                </Form.Item>
            </Form>
        </>
  )
}

export default CategoryEdit
