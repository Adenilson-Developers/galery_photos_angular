import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './photo-details.component.html'
})

export class PhotoDetailsComponent implements OnInit {

    constructor(private routerActivate: ActivatedRoute){}


    ngOnInit(): void {
        const id = this.routerActivate.snapshot.params.photoId;
        console.log(id)
    }

}