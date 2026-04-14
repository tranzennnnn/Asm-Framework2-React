import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Table, Button, Space, Popconfirm, message } from 'antd'
import { Link } from 'react-router-dom'
import type { ICategory } from '../../interface/category'

const CategoryList = () => {
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery<ICategory[]>({
        queryKey: ['categories'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/categories`)
            return data
        }
    })

    const { mutate } = useMutation({
        mutationFn: async (id: number) => {
            await axios.delete(`http://localhost:3000/categories/${id}`)
        },
        onSuccess: () => {
            message.success('Xóa danh mục thành công!')
            queryClient.invalidateQueries({ queryKey: ['categories'] })
        }
    })

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Tên danh mục', dataIndex: 'name', key: 'name' },
        { title: 'Hành động', key: 'action', render: (item: ICategory) => (
            <Space>
                <Link to={`/admin/categories/edit/${item.id}`}><Button type="primary">Sửa</Button></Link>
                <Popconfirm title="Xóa danh mục?" onConfirm={() => mutate(item.id)}><Button danger>Xóa</Button></Popconfirm>
            </Space>
        )},
    ]

    return <Table dataSource={data} columns={columns} loading={isLoading} rowKey="id" />
}
export default CategoryList
