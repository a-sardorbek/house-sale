import { IsNotEmpty, IsUUID } from "class-validator";
import { HouseIdRequest } from "../types";

export class RetrieveByIdHouseDto implements HouseIdRequest {
    @IsUUID(4)
    @IsNotEmpty()
    id: string
}
