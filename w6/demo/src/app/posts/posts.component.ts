import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import {POSTS} from '../fake-db';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  posts: Post[] | undefined;
  constructor() { }

  ngOnInit(): void {
    this.posts = POSTS;
  }

}
