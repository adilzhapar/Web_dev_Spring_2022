import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POSTS } from '../fake-db';
import { Post } from '../models';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    // console.log(this.route.snapshot);
    const id = +this.route.snapshot.paramMap.get('id');
    
    this.post = POSTS.find((x) => x.id === id);
  }

}
