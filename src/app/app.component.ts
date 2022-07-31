import { Component } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'galery_photos';

  photos: any[] = [];

  constructor(photoService: PhotoService) {

    photoService
      .listFormUser('flavio')
      .subscribe(photos => this.photos = photos)

  }

}

