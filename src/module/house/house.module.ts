import { Module } from "@nestjs/common";
import { HouseService } from "./house.service";
import { HouseController } from "./house.controller";
import { PrismaService } from "client";

@Module({
  controllers: [HouseController],
  providers: [HouseService, PrismaService],
})
export class HouseModule {

}