import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { dbConfigs } from './configs/configs';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(`mongodb+srv://identityserver:J6Km8rupUCthvIrX@cluster0.zy7tffk.mongodb.net/?retryWrites=true&w=majority`, {
      dbName: "Identity"
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
