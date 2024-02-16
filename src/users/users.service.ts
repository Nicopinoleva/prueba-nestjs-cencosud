import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserUpdateInput } from './dto/user-update-input.dto';
import { UserGroup } from './entities/user-group.entity';
import { Post } from 'src/posts/entities/post.entity';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private postsService: PostsService,
    @InjectRepository(UserGroup)
    private userGroupRepository: Repository<UserGroup>,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['profile'] });
  }

  async deleteUser(id: number) {
    try {
      const checkIfUserExists = await this.checkIfUserExists(id);
      if (!checkIfUserExists) throw new Error('User not found');
      await this.usersRepository.delete(id);
    } catch (error) {
      return { success: false, message: error.message };
    }

    return { success: true };
  }

  async updateUser(updateParams: UserUpdateInput) {
    try {
      const checkIfUserExists = await this.checkIfUserExists(updateParams.id);
      if (!checkIfUserExists) throw new Error('User not found');
      await this.usersRepository.update(updateParams.id, updateParams);
    } catch (error) {
      return { success: false, message: error.message };
    }

    return { success: true };
  }

  async createUser(firstname: string, lastname: string, email: string) {
    try {
      await this.usersRepository.save({
        firstname: firstname,
        lastname: lastname,
        email: email,
      });
    } catch (error) {
      return { success: false, message: error.message };
    }

    return { success: true };
  }

  async checkIfUserExists(id: number) {
    return await this.usersRepository.findOne({
      select: ['id'],
      where: { id: id },
    });
  }

  async getUserGroups(userId: number) {
    return await this.userGroupRepository.find({
      where: { user: { id: userId } },
      relations: ['group'],
    });
  }

  async getUserPosts(userId: number) {
    return await this.postsService.getUserPosts(userId);
  }
}
