import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public() // using this means the route is public
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('user')
  user(@Request() req) {
    console.log('USER:', req.user);
    return 'hi';
  }
}
