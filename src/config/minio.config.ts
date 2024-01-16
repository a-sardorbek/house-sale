import { registerAs } from '@nestjs/config'

export declare interface MinioConfig {
  host?: string
  port?: number
  bucket?: string
  accessKey?: string
  secretKey?: string
}

export const minioConfig = registerAs<MinioConfig>('minio', (): MinioConfig => {
  return {
    host: process.env.MINIO_SERVICE_HOST ?? undefined,
    port: process.env.MINIO_SERVICE_PORT ? parseInt(process.env.MINIO_SERVICE_PORT, 10) : undefined,
    bucket: process.env.MINIO_SERVICE_BUCKET ?? undefined,
    accessKey: process.env.MINIO_SERVICE_ACCESS_KEY ?? undefined,
    secretKey: process.env.MINIO_SERVICE_SECRET_KEY ?? undefined,
  }
})
