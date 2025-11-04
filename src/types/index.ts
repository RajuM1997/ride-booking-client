import type { ComponentType } from "react";

export type { IRide, IDriver } from "./ride.type";
export type { IUserResponse, IUser } from "./user.type";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = "ADMIN" | "RIDER" | "DRIVER";

export interface IErrorResponse {
  status: number;
  data: IErrorData;
}

export interface IErrorData {
  success: boolean;
  message: string;
  errorSources: IErrorSource[];
  err: IErr;
  stack: string;
}

export interface IErrorSource {
  path: string;
  message: string;
}

export interface IErr {
  name: string;
  message: string;
}
