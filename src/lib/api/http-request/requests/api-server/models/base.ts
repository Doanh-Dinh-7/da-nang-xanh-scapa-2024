export interface IBase {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string | Record<string, any>;
    updatedBy?: string;
    deletedAt?: string;
    deletedBy?: string;
}
