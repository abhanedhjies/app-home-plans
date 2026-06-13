import { Module } from '@nestjs/common';

import { CloudinaryProvider } from './cloudinary.provider';
import { CloudinaryController } from './cloudinary.controller';

@Module({
  providers: [CloudinaryProvider],
  controllers: [CloudinaryController],
  exports: [CloudinaryProvider],
})
export class CloudinaryModule {}