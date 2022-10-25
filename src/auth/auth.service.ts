import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.get(username);

        if(user && user.password === pass)
        {
            const { password, ...result} = user;
            return result;
        }

        return null;
    }

    async login(user: any) {
        const payload = {
            username: user.username, sub: user.userId
        }

        return {
            access_token: this.jwtService.sign(payload),
        }
    }

    async register(reqModel: CreateUserDto)
    {
        let user = await this.userService.createUser(reqModel);
        return user;
    }
}
