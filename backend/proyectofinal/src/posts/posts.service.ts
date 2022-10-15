import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PostModel } from './post-model.interface';
import { Posts } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  private posts: Array<PostModel> = [];

  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
  ) {}

  public findAll(): Promise<Posts[]> {
    return this.postsRepository.find();
  }

  public findOne(id: number): PostModel {
    const post: PostModel = this.posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundException('Post Not found');
    }
    return post;
  }

  public create(post: PostModel): PostModel {
    const titleExist: boolean = this.posts.some(
      (item) => item.nombre === post.nombre,
    );
    if (titleExist) {
      throw new UnprocessableEntityException('This post already exists.');
    }

    const maxId: number = Math.max(...this.posts.map((post) => post.id), 0);
    const id: number = maxId + 1;

    const blogPost: PostModel = {
      id: id,
      nombre: post.nombre,
      correo: post.correo,
      password: post.password,
    };

    this.posts.push(blogPost);
    return blogPost;
  }

  /**
   * Delete
   */
  public Delete(id: number): void {
    const index: number = this.posts.findIndex((post) => post.id === id);

    if (index === -1) {
      throw new NotFoundException('Post not found');
    }

    this.posts.splice(index, 1);
  }

  /**
   * Update
   */
  public Update(id: number, post: PostModel) {
    const index: number = this.posts.findIndex((post) => post.id === id);

    if (index === -1) {
      throw new NotFoundException('Post Not found');
    }

    const titleExist: boolean = this.posts.some(
      (item) => item.nombre === post.nombre && item.id !== id,
    );
    if (titleExist) {
      throw new UnprocessableEntityException('Post title already exists');
    }

    const blogPost: PostModel = {
      ...post,
      id,
    };

    this.posts[index] = blogPost;

    return blogPost;
  }
}
