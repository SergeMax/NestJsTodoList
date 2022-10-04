import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { UpperPipe } from './upper.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  @UsePipes(UpperPipe)
  getHello(@Param('name') name: string): string {
    return this.appService.getHello(name);
  }

  @Post()
  @UsePipes(UpperPipe)
  createMessage(@Body() message) {
    return message;
  }
}
