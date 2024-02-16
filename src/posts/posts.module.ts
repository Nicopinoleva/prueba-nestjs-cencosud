import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Comment } from './entities/comment.entity';
import { PostsService } from './posts.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './resolvers/comment.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Comment])],
  providers: [PostsService, PostsResolver, CommentsService, CommentsResolver],
})
export class PostsModule {}
