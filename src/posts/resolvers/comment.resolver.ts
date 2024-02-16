import { Query, Resolver } from '@nestjs/graphql';
import { CommentsService } from '../comments.service';
import { CommentModel } from '../models/comment.model';

@Resolver()
export class CommentsResolver {
  constructor(private commentsService: CommentsService) {}

  @Query((returns) => [CommentModel])
  async getAllComments(): Promise<CommentModel[]> {
    return this.commentsService.getAllComments();
  }
}
