import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { POSTS } from './fake-db';
import { Post } from './models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private client: HttpClient) { }

  // getPosts(){
  //   return of(POSTS);
  // }

  // getPost(id: number){
  //   const post = POSTS.find((x) => x.id === id);
  //   return of(post);
  // }


  getPosts(): Observable<Post[]>{
    return this.client.get<Post[]>('http://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number){
    return this.client.get<Post>(`http://jsonplaceholder.typicode.com/posts/${id}`);
  }

}
