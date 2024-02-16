import { Query, Resolver } from '@nestjs/graphql';
import { PostModel } from '../models/post.model';
import { PostsService } from '../posts.service';

@Resolver()
export class PostsResolver {
  constructor(private postService: PostsService) {}

  @Query((returns) => [PostModel])
  async getAllPosts(): Promise<PostModel[]> {
    return this.postService.getAllPosts();
  }
}
