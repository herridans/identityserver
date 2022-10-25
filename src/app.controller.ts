import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("qwe")
  returnUser(@Query("user") user: string): string {
    console.log(user);
    return `Hello ${user ? user : "unknown user"}!`;
  }
}
