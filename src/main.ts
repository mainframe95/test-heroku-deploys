import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
  // await NestFactory.createApplicationContext(AppModule);
  console.log('GREETER_BOT_TOKEN', process.env.GREETER_BOT_TOKEN)

}
bootstrap();
