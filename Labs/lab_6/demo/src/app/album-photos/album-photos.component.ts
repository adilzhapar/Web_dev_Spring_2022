import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, Photo } from '../models';
import { Location } from '@angular/common';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photo: Photo | undefined;
  album: Album | undefined;
  photos: Photo[] | undefined;
  loaded: boolean | undefined;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumService: AlbumsService) {
    this.photos = [];
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}')
      this.loaded = false;
      if (id != null) {
        this.albumService.getPhotos(id).subscribe((photos) => {
          this.photos = photos;
          this.loaded = true;
        });
      }
    });
  }

  goBack(): void {
    this.location.back();
  }


}
