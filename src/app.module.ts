import { databaseConfig, minioConfig } from '@config';
import { HouseModule, UserModule } from '@module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [minioConfig, databaseConfig],
      isGlobal: true,
    }),
    UserModule,
    HouseModule
  ],
})
export class AppModule {}
