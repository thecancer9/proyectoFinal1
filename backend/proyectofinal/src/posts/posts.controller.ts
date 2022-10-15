import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { PostModel } from './post-model.interface';
import { PostsService } from './posts.service';

// holcalhost:3306/posts
@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  // holcalhost:3306/posts/{id}
  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: number): PostModel {
    return this.postService.findOne(id);
  }
  // holcalhost:3306/posts
  @Get()
  public findAll(): Array<PostModel> {
    return null; //this.postService.findAll();
  }

  // localhost:3306/post
  @Post()
  public create(@Body() post: PostModel): PostModel {
    return this.postService.create(post);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number): void {
    this.postService.Delete(id);
  }

  // localhost:3306/
  @Put(':id')
  public Update(
    @Param('id', ParseIntPipe) id: number,
    @Body() post: PostModel,
  ): PostModel {
    return this.postService.Update(id, post);
  }
}
