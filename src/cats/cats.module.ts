import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsResolver } from './cats.resolver';
import { CatSchema } from './cats.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'cat', schema: CatSchema }])],
  providers: [CatsResolver],
})
export class CatsModule {}
