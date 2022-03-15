import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import {POSTS} from '../fake-db';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: Post[] | undefined;
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    // this.posts = POSTS;
    this.getPosts();
  }
  getPosts(){
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

}
