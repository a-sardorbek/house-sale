import sharp from 'sharp'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { uuid } from '@helper'
import { Client } from 'minio'

@Injectable()
export class MinioService {
  readonly #_client: Client
  readonly #_bucket: string

  constructor(config: ConfigService) {
    this.#_client = new Client({
      port: config.getOrThrow<number>('minio.port'),
      useSSL: false,
      endPoint: config.getOrThrow<string>('minio.host'),
      accessKey: config.getOrThrow<string>('minio.accessKey'),
      secretKey: config.getOrThrow<string>('minio.secretKey'),
    })

    this.#_bucket = config.getOrThrow<string>('minio.bucket')
  }

  async uploadPhoto(value: string, folder: string): Promise<string> {
    const name = uuid()

    const image = Buffer.from(value.replace(/^data:image\/\w+;base64,/i, ''), 'base64')

    const metadata = await sharp(image).metadata()

    await this.#_client.putObject(this.#_bucket, `${folder}/${name}.${metadata.format}`, image)

    return `${this.#_bucket}/${folder}/${name}.${metadata.format}`
  }

  async deletePhoto(value: string): Promise<void> {
    await this.#_client.removeObject(this.#_bucket, value.replace(`${this.#_bucket}/`, ''))
  }
}
