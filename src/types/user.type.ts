export interface IUserResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: IUser;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role?: string;
  phone: string;
  isDeleted: boolean;
  isActive: string;
  isVerified: boolean;
  driver?: Driver;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Driver {
  licenseNumber?: string;
  vehicleType?: string;
  vehicleNumber?: string;
  completedRides?: number;
  isAvailability?: string;
  driverStatus?: string;
  totalEarning?: number;
  rideCapability?: boolean;
}
