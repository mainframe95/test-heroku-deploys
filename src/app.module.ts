import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { GreeterBotName } from './app.constants';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EchoModule } from './echo/echo.module';
import { GreeterModule } from './greeter/greeter.module';
import { sessionMiddleware } from './middleware/session.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.dev.env', // .dev.env .test.env .prod.env
      isGlobal: true,
      expandVariables: true,
    }),
      TelegrafModule.forRoot({
        token: process.env.BOT_TOKEN,
        include: [EchoModule],
      }),
      // TelegrafModule.forRootAsync({
      //   botName: GreeterBotName,
      //   useFactory: () => ({
      //     token: process.env.GREETER_BOT_TOKEN,
      //     middlewares: [sessionMiddleware],
      //     include: [GreeterModule],
      //   }),
      // }),
      EchoModule,
      // GreeterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
