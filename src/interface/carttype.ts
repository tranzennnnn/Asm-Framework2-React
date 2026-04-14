import type { IProduct } from "./product"

export interface ICartStore {
    count: number,
    isCloseSidebar: boolean
    items: IProduct[]
}