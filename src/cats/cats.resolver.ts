import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CatsResolver {
  //   constructor(
  //     private authorsService: AuthorsService,
  //     private postsService: PostsService,
  //   ) {}

  @Query(() => String)
  async hello() {
    return 'Hello';
  }
}
