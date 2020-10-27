export interface ProductModelServer {
  quantity: number;
  id: Number;
  name: String;
  category: String;
  description: String;
  image: String;
  price: Number;
  images: String;
}

export interface serverResponse {
  count: number;
  products: ProductModelServer[]
}