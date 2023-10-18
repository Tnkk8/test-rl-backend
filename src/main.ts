import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up CORS configuration
  // app.enableCors({
  //   origin: 'http://localhost:3000', // Replace with the origin you want to allow
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true,
  // });

  // Set up CORS to allow all origins, methods, and credentials
  app.enableCors();

  await app.listen(8888);
}
bootstrap();
