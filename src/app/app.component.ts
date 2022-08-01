import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'galery_photos';

  photos: any[] = [];

  constructor(private photoService: PhotoService) {  }

  ngOnInit(): void {

    this.photoService
      .listFormUser('flavio')
      .subscribe(photos => { 
        this.photos = photos}
       )

  }

}

