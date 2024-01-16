import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import {
  ApiBody,
  ApiTags,
  ApiOkResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger'
import { HouseService } from "./house.service";
import { CreateHouseDto, UpdateHouseDto } from "./dtos";
import { HouseResponce } from "./types";
import { HouseCreate, HouseUpdate, NotFoundResponce, RetrieveHouse } from "swagger";

@ApiTags('House Service')
@Controller({
  path: 'api/v1/house',
  version: '1',
})
export class HouseController {

    #_houseService: HouseService

    constructor(houseService: HouseService){
      this.#_houseService = houseService;
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('/create')
    @ApiBody({ type: HouseCreate})
    @ApiOkResponse({ type: RetrieveHouse, description: 'Successfuly updated' })
    async createHouse(@Body() payload: CreateHouseDto): Promise<HouseResponce>{
        return await this.#_houseService.createHouse(payload)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Put('/update')
    @ApiBody({ type: HouseUpdate})
    @ApiNoContentResponse({ description: 'Successfuly updated' })
    @Put('/update')
    async updateHouse(@Body() payload: UpdateHouseDto): Promise<void>{
        await this.#_houseService.updateHouse(payload)
    }

    @HttpCode(HttpStatus.OK)
    @Get(':id')
    @ApiOkResponse({ type: RetrieveHouse, description: 'User by id' })
    @ApiNotFoundResponse({ type: NotFoundResponce, description: 'Not found' })
    async retrieveHouse(@Param('id') id: string): Promise<HouseResponce> {
        return await this.#_houseService.retrieveById({
          id: id
        })
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    @ApiNoContentResponse({ description: 'Successfuly deleted' })
    @ApiNotFoundResponse({ type: NotFoundResponce, description: 'Not found' })
    async deleteHouse(@Param('id') id: string): Promise<void>{
        await this.#_houseService.deleteHouse({
          id: id
        })
    }






    

}