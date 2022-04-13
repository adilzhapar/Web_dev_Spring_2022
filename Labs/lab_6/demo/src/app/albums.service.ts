import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Album, Comment, Photo } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]>{
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getPhotos(id: number): Observable<any>{
    return this.client.get(`${this.BASE_URL}/albums/${id}/photos`);
  }

  getAlbum(id: number){
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`${this.BASE_URL}/albums/${id}`);
  }

  getAlbumComments(id: number): Observable<Comment[]>{
    return this.client.get<Comment[]>(`${this.BASE_URL}/albums/${id}/comments`);
  }

  
}
