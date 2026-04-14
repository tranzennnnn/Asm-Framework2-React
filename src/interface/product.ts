export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string,
  category: string,
  rating:string
}
export type TProduct = Omit<IProduct, "id">

export interface IUser {
  id?: number | string;
  email: string;
  password?: string;
  role?: string
}
export type ISignup = IUser
export type ISignin = Omit<IUser, "role">
