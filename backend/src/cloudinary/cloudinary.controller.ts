import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Inject,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { v2 as cloudinary } from 'cloudinary';

import streamifier from 'streamifier';

@Controller('upload')
export class CloudinaryController {
  constructor(
    @Inject('CLOUDINARY')
    private readonly cloudinaryInstance,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ) {
    const result = await new Promise<any>(
      (resolve, reject) => {
        const uploadStream =
          cloudinary.uploader.upload_stream(
            {
              folder: 'app-home-plans',
            },
            (error, result) => {
              if (error) {
                reject(error);
              } else {
                resolve(result);
              }
            },
          );

        streamifier
          .createReadStream(file.buffer)
          .pipe(uploadStream);
      },
    );

    return {
      imageUrl: result.secure_url,
    };
  }
}