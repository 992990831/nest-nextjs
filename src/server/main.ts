import { NestFactory } from '@nestjs/core';
import { ViewModule } from './modules/view/view.module';

async function bootstrap() {
  const app = await NestFactory.create(ViewModule);
  await app.listen(3000);
}
bootstrap();
