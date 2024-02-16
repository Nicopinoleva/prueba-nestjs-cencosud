import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  async getAllPosts(): Promise<Post[]> {
    return await this.postsRepository.find({ relations: ['comments', 'user'] });
  }

  async getUserPosts(userId: number) {
    return await this.postsRepository.find({
      where: { user: { id: userId } },
      relations: ['comments'],
    });
  }
}
