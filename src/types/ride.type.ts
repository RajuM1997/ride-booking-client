export interface IRide {
  _id: string;
  pickup: string;
  destination: string;
  status: string;
  fare: number;
  createdAt: string;
  driver: IDriver;
  driverRideStatus: IDriverStatus[];
}

export interface IDriver {
  name: string;
  phone: string;
}
export interface IDriverStatus {
  driverId: string;
  status: string;
}
