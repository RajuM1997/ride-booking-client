export interface IRide {
  _id: string;
  pickup: string;
  destination: string;
  status: string;
  fare: number;
  createdAt: string;
  paymentMethod: string;
  driver: IDriver;
  driverRideStatus: IDriverStatus[];
  currentStatus: ICurrentStatus[];
}
export interface ICurrentStatus {
  status: string;
  currentTimeTamp: string;
}
export interface IDriver {
  name: string;
  phone: string;
}
export interface IDriverStatus {
  driverId: string;
  status: string;
}
