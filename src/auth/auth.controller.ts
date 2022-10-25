import { Controller, Request, Body, Get, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto'; 

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req)
    {
        console.log(req);
        return this.authService.login(req.user);
    }

    @Post('register')
    async register(@Body() reqModel: CreateUserDto)
    {
        let user = await this.authService.register(reqModel);
        return user;
    }

    @UseGuards(JwtAuthGuard)
    @Get('test')
    async test(@Request() req)
    {
        return req.user;
    }
}
