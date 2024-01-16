import type { ValidationOptions } from 'class-validator'
import { ValidateBy, buildMessage } from 'class-validator'
import sharp from 'sharp'

export const CheckPhotoSize = (validationOptions?: ValidationOptions): PropertyDecorator =>
  ValidateBy({
    name: 'CheckPhotoSize',
    validator: {
      validate: async (values: unknown): Promise<boolean> => {
        if (!Array.isArray(values)) {
          return false
        }

        try {
          for (const value of values) {
            if (typeof value !== 'string') {
              return false
            }

            const photo = await sharp(Buffer.from(value.split(`;base64,`)[1], 'base64')).metadata()

            if (photo.size > 3072 * 1024) {
              return false
            }
          }

          return true
        } catch {
          return false
        }
      },
      defaultMessage: buildMessage(
        (each: string): string => each + 'The size of $property must be equal or less than 3 MB',
        validationOptions,
      ),
    },
  })