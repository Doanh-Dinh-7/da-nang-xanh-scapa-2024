import { IBase } from "./base";
import { IPhysicalRecycleBin } from "./physical-recycle-bin";

export enum SmartRecycleBinStatus {
    HEALTHY = "HEALTHY",
    IN_CONSTRUCTION = "IN_CONSTRUCTION",
    FIXING = "FIXING",
    LOST_CONNECTION = "LOST_CONNECTION",
    ERROR = "ERROR",
    NO_LONGER_NEEDED = "NO_LONGER_NEEDED",
}

export enum WasteType {
    RECYCLABLE = "RECYCLABLE",
    ORGANIC = "ORGANIC",
    NON_RECYCLABLE = "NON_RECYCLABLE",
}

export interface ISmartRecycleBin extends IBase {
    name: string;
    locationLatitude: number;
    locationLongitude: number;
    status: SmartRecycleBinStatus;

    // Relations
    physicalRecycleBins: IPhysicalRecycleBin[];
}
