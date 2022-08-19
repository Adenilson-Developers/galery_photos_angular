import { Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Photo } from '../photo/photo';

@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.css']
})

export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;
    constructor(
        private routerActivate: ActivatedRoute,
        private photoService: PhotoService
        ){}


    ngOnInit(): void {
       this.photo$ =   this.photoService.findById(
        this.routerActivate.snapshot.params.photoId
       )
    }

}