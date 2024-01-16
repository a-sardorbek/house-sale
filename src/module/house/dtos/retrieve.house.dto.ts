import { IsEnum, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { Type } from 'class-transformer'
import { RetrieveHouseListRequest } from "../types/house.type";
import { $Enums, EntityStatus, HouseType } from "@prisma/client";

export class RetrieveHouseListDto implements RetrieveHouseListRequest {

    @IsEnum(EntityStatus)
    @IsOptional()
    status?: EntityStatus;

    @IsEnum(HouseType)
    @IsOptional()
    type?: HouseType;

    @MaxLength(255)
    @IsString()
    @IsOptional()
    title?: string;

    @IsNumber({
     allowNaN: false,
     allowInfinity: false,
     maxDecimalPlaces: 0,
    })
    @Type(() => Number)
    @IsOptional()
    pageSize?: number;

    
    @IsNumber({
     allowNaN: false,
     allowInfinity: false,
     maxDecimalPlaces: 0,
    })
    @Type(() => Number)
    @IsOptional()
    pageNumber?: number;
}