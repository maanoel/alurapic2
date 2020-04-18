import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photos';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {
  
 photos: Photo[] = [];
 filter : string = '';

 constructor(
   private photoService: PhotoService,
   private activetedRoute: ActivatedRoute
  ){}

 ngOnInit(): void{

    const userName = this.activetedRoute.snapshot.params.userName;

    this.photoService.listFromUser(userName).subscribe(photos => {
      this.photos = photos;
    });
  }
}
