import { EntityStatus, HouseType } from "@prisma/client";
import { HouseUpdateRequest } from "../types";
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";

export class UpdateHouseDto implements HouseUpdateRequest {
    @IsUUID(4)
    @IsNotEmpty()
    id: string;

    @MaxLength(255)
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @MaxLength(255)
    @IsString()
    @IsOptional()
    address?: string;

    @IsEnum(EntityStatus)
    @IsOptional()
    status?: EntityStatus;

    @IsEnum(HouseType)
    @IsOptional()
    type?: HouseType;
}