export interface IRide {
  _id: string;
  pickup: string;
  destination: string;
  status: string;
  fare: number;
  createdAt: string;
  driver: IDriver;
}

export interface IDriver {
  name: string;
  phone: string;
}
