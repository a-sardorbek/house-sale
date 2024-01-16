import { EntityStatus, HouseType } from "@prisma/client";

export declare interface HouseCreateRequest {
    userId: string;
    title: string;
    description: string;
    address: string;
    status?: EntityStatus;
    type?: HouseType
}

export declare interface HouseUpdateRequest {
    id: string
    title?: string;
    description?: string;
    address?: string;
    status?: EntityStatus;
    type?: HouseType
}

export declare interface HouseIdRequest {
    id: string
}

export declare interface RetrieveHouseListRequest {
    title?: string;
    status?: EntityStatus;
    type?: HouseType
    pageSize?: number
    pageNumber?: number
}

export declare interface HouseResponce {
    id: string;
    title: string;
    address: string;
    description: string;
    status: string;
    type: string;
}