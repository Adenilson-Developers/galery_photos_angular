import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { switchMap, tap } from 'rxjs';

import { PhotoService } from './../../photo/photo.service';
import { PhotoComments } from '../../photo/photo-comments';

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

    save(){
       const comment = this.commentForm.get('comment').value;
       this.comments$ = this.photoService
       .addComments(this.photoId, comment)
       .pipe(switchMap( () => this.photoService.getComments(this.photoId)))
       .pipe(tap( () => { this.commentForm.reset();
    }))
    }
}