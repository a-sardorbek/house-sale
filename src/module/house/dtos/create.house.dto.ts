import { EntityStatus, HouseType } from "@prisma/client";
import { HouseCreateRequest } from "../types";
import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength } from "class-validator";
import { CheckPhotoSize } from "@validators";

export class CreateHouseDto implements HouseCreateRequest {
    @IsUUID(4)
    @IsNotEmpty()
    userId: string;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
    address: string;

    @IsEnum(EntityStatus)
    @IsOptional()
    status?: EntityStatus;

    @IsEnum(HouseType)
    @IsOptional()
    type?: HouseType;
}