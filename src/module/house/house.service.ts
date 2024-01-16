import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "client/prisma/prisma.service";
import { HouseCreateRequest, HouseIdRequest, HouseResponce, HouseUpdateRequest } from "./types";
import { UserResponce } from "module/user/types";

@Injectable()
export class HouseService {

 readonly #_prisma: PrismaService

 constructor(prisma: PrismaService) {
    this.#_prisma = prisma
 }

 async createHouse(data: HouseCreateRequest): Promise<HouseResponce> {
   const house = await this.#_prisma.house.create({
      data:{
         title: data.title,
         description: data.description,
         address: data.address,
         status: data.status,
         type: data.type,
         userId: data.userId
      },
      select: {
         id: true,
         title: true,
         address: true,
         description: true,
         status: true,
         type: true,
      }
    })

    return {
      id: house.id,
      title: house.title,
      address: house.address,
      description: house.description,
      status: house.status,
      type: house.type
   }
 }

 async updateHouse(data: HouseUpdateRequest): Promise<void> {
   await this.#_houseExist(data.id)
   await this.#_prisma.house.update({
      where: {
         id: data.id,
         deletedAt: null,
      },
      data: {
         title: data.title,
         description: data.description,
         address: data.address,
         status: data.status,
         type: data.type,
      }
   })
 }

 async retrieveById(data: HouseIdRequest): Promise<HouseResponce> {
   const house = await this.#_prisma.house.findFirst({
      where: {
         id: data.id,
         deletedAt: null,
      },
      select: {
         id: true,
         title: true,
         address: true,
         description: true,
         status: true,
         type: true,
      }
   })

   if(!house) {
      return null
   }
   return {
      id: house.id,
      title: house.title,
      address: house.address,
      description: house.description,
      status: house.status,
      type: house.type
   }
 }

 async deleteHouse(data: HouseIdRequest): Promise<void> {
     await this.#_houseExist(data.id)
     await this.#_prisma.house.update({
      where: {
         id: data.id,
         deletedAt: null,
      },
      data: { deletedAt: new Date() },
   })

 }

async #_houseExist(id: string): Promise<void> {
   const houseExist = await this.#_prisma.house.findFirst({
   where: {
      id: id,
      deletedAt: null
   },
   select:{
      id: true
   }
   })

   if(!houseExist){
     throw new HttpException('House not found', HttpStatus.NOT_FOUND);
   }
  }

}