import { Injectable } from '@nestjs/common';
import { UserEntity as User } from './user.entity';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    private users: User[] = [];

    findAll(): User[] {
        return this.users;
    }

    findOne(id: string): User {
        return this.users.find(user => user.id === id);
    }

    create(createUserDto: UserDto): User {
        const newUser: User = {
            id: Math.random().toString(),
            ...createUserDto,
        };
        
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(newUser.password, saltRounds);
        newUser.password = hashedPassword;

        this.users.push(newUser);
        return newUser;
    }

    update(id: string, updateUserDto: UserDto): User {
        const user = this.findOne(id);
        if (user) {
            user.username = updateUserDto.username || user.username;
            user.email = updateUserDto.email || user.email;
        }
        return user;
    }

    remove(id: string): User {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            const removedUser = this.users.splice(index, 1);
            return removedUser[0];
        }
        return null;
    }
}
