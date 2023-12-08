import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './Modules/user/user.module';
import { TableModule } from './Modules/table/table.module';
import { CardModule } from './Modules/card/card.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './Modules/auth/auth.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    database: 'nest',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    username: 'root',
  }), UserModule, TableModule, CardModule, AuthModule],
  exports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
