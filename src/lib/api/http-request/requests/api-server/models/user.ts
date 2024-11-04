import { IBase } from "./base";

export enum Role {
    USER = "USER",
    CONTRIBUTOR = "CONTRIBUTOR",
    ADMIN = "ADMIN",
}

export interface IUser extends IBase {
    firstName: string;
    lastName: string;
    email: string;
    address?: string;
    greenPoint: number;
    role: Role;
}
