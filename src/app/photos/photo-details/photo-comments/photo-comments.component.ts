import { Validators } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from "@angular/core";
import { PhotoComments } from '../../photo/photo-comments';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-photo-comments',
    templateUrl: './photo-comments.component.html'
})

export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;
    commentForm: FormGroup;
    comments$: Observable<PhotoComments[]>;


    constructor(
        private photoService: PhotoService,
        private formBuilder: FormBuilder,
        ){}


    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId)
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)]
        });
    }
}