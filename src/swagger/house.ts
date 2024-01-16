import { HouseCreateRequest, HouseIdRequest, HouseResponce, HouseUpdateRequest } from "@module";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { $Enums } from "@prisma/client";

export class HouseCreate implements HouseCreateRequest {

    @ApiProperty({
      format: 'uuid',
      example: '123e4567-e89b-12d3-a456-426655440000',
    })
    userId: string;
    @ApiProperty({
     example: 'title',
    })
    title: string;

    @ApiProperty({
     example: 'description',
    })
    description: string;

    @ApiProperty({
     example: 'address',
    })
    address: string;
    
    @ApiProperty({
    example: '',
    enum: $Enums.EntityStatus,
    })
    status?: $Enums.EntityStatus;

    @ApiProperty({
    example: '',
    enum: $Enums.HouseType,
    })
    type?: $Enums.HouseType;
    
}

export class HouseUpdate implements HouseUpdateRequest {
    @ApiProperty({
      format: 'uuid',
      example: '123e4567-e89b-12d3-a456-426655440000',
    })
    id: string;

    @ApiPropertyOptional({
        example: 'title'
    })
    title?: string;

    @ApiPropertyOptional({
        example: 'description'
    })
    description?: string;

    @ApiPropertyOptional({
        example: 'address'
    })
    address?: string;

    @ApiPropertyOptional({
        example: '',
        enum: $Enums.EntityStatus
    })
    status?: $Enums.EntityStatus;

    @ApiPropertyOptional({
        example: '',
        enum: $Enums.EntityStatus
    })
    type?: $Enums.HouseType;
    
}

export class HouseById implements HouseIdRequest {
    @ApiProperty({
      format: 'uuid',
      example: '123e4567-e89b-12d3-a456-426655440000',
    })
    id: string;
}

export class RetrieveHouse implements HouseResponce {
    @ApiProperty({
      format: 'uuid',
      example: '123e4567-e89b-12d3-a456-426655440000',
    })
    id: string;

    @ApiProperty({
        example: 'title'
    })
    title: string;

    @ApiProperty({
        example: 'description'
    })
    description: string;

    @ApiProperty({
        example: 'address'
    })
    address: string;

    @ApiProperty({
        example: '',
        enum: $Enums.EntityStatus
    })
    status: string;

    @ApiProperty({
        example: '',
        enum: $Enums.EntityStatus
    })
    type: string;

}

export class NotFoundResponce {
  @ApiProperty({
     example: '404',
     type: Number
  })
  statusCode: number

   @ApiProperty({
     example: 'not found'
  })
  message: string
}