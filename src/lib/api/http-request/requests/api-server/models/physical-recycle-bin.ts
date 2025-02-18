import { IBase } from "./base";
import { ISmartRecycleBin, WasteType } from "./smart-recycle-bin";

export enum PhysicalRecycleBinStatus {
    NORMAL = "NORMAL",
    FULL = "FULL",
}

export interface IPhysicalRecycleBin extends IBase {
    embeddedSystemId: string;
    maxVolume: number;
    currentVolume: number;
    wasteType: WasteType;
    status: PhysicalRecycleBinStatus;
    smartRecycleBinId: string;

    // Relations
    smartRecycleBin?: ISmartRecycleBin;
}
