import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    // private readonly users = [
    //     {
    //         userId: 1,
    //         username: 'user1',
    //         password: 'test1234'
    //     },
    //     {
    //         userId: 2,
    //         username: 'user2',
    //         password: 'test1234'
    //     }
    // ]

    async get(username: string): Promise<any> {
        // return this.users.find(user => user.username === username);
        let user = await this.userModel.findOne({username: username});
        return user;
    }

    // async getAll(): Promise<User[] | undefined> {
    //     return this.users;
    // }

    async createUser(createUserDto: CreateUserDto): Promise<User | undefined> {
        let newUser = new this.userModel(createUserDto).save();
        return newUser;
    }
}
