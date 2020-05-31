import { Module } from '@nestjs/common';
import { DbUserService } from './services/dbusers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    
  ],
  providers: [
    DbUserService
  ],
  controllers: [],
  exports: [DbUserService],
})
export class UsersModule {
  
}
