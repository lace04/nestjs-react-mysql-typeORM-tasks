import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();//habilitar cors
  app.setGlobalPrefix('api'); //habilitar prefijo global
  await app.listen(3000);
}
bootstrap();
