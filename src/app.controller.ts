import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('chat')
  chat(
    @Body('prompt') prompt: string,
    @Body('network') network: boolean,
    @Body('userId') userId: string,
  ) {
    console.log(prompt);
    return this.appService.chat(prompt, network, userId);
  }
}
