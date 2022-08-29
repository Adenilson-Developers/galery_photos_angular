import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/alert/alert.service';
import { PhotoComments } from './../photo/photo-comments';
import { Observable } from 'rxjs';
import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Photo } from '../photo/photo';

@Component({
    templateUrl: './photo-details.component.html'
   
})

export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;
    photoId: number;

    constructor(
        private routerActivate: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router,
        private alertService: AlertService,
        private userService: UserService
        ){}


    ngOnInit(): void {
        this.photoId =   this.routerActivate.snapshot.params.photoId;
       this.photo$ =   this.photoService.findById(this.photoId);
    }

    remove(){
        this.photoService
        .removePhoto(this.photoId)
        .subscribe(
            () =>  {
                this.alertService.success('photo removed!', true);
                this.router.navigate(['/user', this.userService.getUserName()]);
            },
            err => {
                console.log(err);
                this.alertService.warning('could not delet the photo')
            }
        )
    }

}