export interface ICategory {
    id: number,
    name: string
}

export type TCategory = Omit<ICategory, "id">