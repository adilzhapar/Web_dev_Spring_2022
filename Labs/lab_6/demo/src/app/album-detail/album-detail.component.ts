import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, Comment } from '../models';
import { Location } from '@angular/common';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  loaded: boolean | undefined;
  comments: Comment[];
  
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumsService) {
    this.comments = [];
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateAlbum(){
    this.loaded = false;
    this.albumService.updateAlbum(this.album as Album).subscribe((album) => {
      console.log(album);
      this.loaded = true;
    })
  }

  showComments(){
    this.albumService.getAlbumComments(this.album?.id as number).subscribe((comments) => {
      this.comments = comments;
    });
  }

  goBack(){
    this.location.back();
  }




}
