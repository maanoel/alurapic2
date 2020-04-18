import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from '../photo/photos';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit, OnDestroy {
  
 photos: Photo[] = [];
 filter: string = '';
 debounce: Subject<string> = new Subject<string>(); 

 constructor(
   private activetedRoute: ActivatedRoute
  ){}

 ngOnInit(): void{
    this.photos = this.activetedRoute.snapshot.data.photos;
    //this.photos = this.activetedRoute.snapshot.data['photos'];
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(){
    this.debounce.unsubscribe();
  }

}
