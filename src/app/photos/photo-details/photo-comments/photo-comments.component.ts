import { PhotoService } from './../../photo/photo.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from "@angular/core";
import { PhotoComments } from '../../photo/photo-comments';

@Component({
    selector: 'app-photo-comments',
    templateUrl: './photo-comments.component.html'
})

export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;
    comments$: Observable<PhotoComments[]>;

    constructor(private photoService: PhotoService){}


    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId)
    }
}