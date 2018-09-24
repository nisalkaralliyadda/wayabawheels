export class Product {
  constructor(
    public type: string,
    public name: string,
    public description: string,
    public imagePath: string,
    public imagePathSm: string,
    public price: number,
    public qty: number = 1,
    public id?: string
  ) { }
}

export class Part {
  bid: number
  brand: string
  colour: string
  model: string
  modelNumber: string
  price: number = 0;
  qty: number = 1
}

export class Customer {
  id?: number;
  nic: string;
  phone: string;
  email: string;
  username: string;
  password: string;
}

export class LoginParam{
  username:string;
  password:string;
}