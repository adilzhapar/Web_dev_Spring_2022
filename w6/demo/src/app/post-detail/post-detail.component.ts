import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POSTS } from '../fake-db';
import { Post } from '../models';
import { Location } from '@angular/common'
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private postService: PostsService) {
  }

  ngOnInit(): void {
    // const id = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    // console.log(typeof(id));
    // this.post = POSTS.find((x) => x.id === id);
    
    // this.route.paramMap.subscribe((params) =>{
    //   const id = parseInt(params.get('id') || '{}');
    //   this.post = POSTS.find((x) => x.id === id);
    // });
    this.getPost();
  }

  getPost(){
    this.route.paramMap.subscribe((params) =>{
      const id = parseInt(params.get('id') || '{}');
      this.postService.getPost(id).subscribe((post) => {
        this.post = post;
      });
    });
  }

  goBack(){
    this.location.back();
  }

}
