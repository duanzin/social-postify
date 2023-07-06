import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SigninModule } from './signin/signin.module';
import { PublicationModule } from './publication/publication.module';

@Module({
  imports: [UserModule, SigninModule, PublicationModule],
})
export class AppModule {}
