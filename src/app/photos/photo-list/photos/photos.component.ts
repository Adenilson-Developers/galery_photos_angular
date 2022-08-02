import { Photo } from './../../photo/photo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];

  rows: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.rows = this.groupColuumns(this.photos);
  }

  groupColuumns(photos: Photo[]){

    const newRows = [];

    for(let index = 0; index < photos.length; index+=3){
      newRows.push(photos.slice(index, index + 3))
    }

    return newRows;

  }

}
