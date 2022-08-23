import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoModule } from './../photo/photo.module';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoOwnerOnlyDirective } from './photo-woner-only/photo-owner-only.directive';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
         PhotoCommentsComponent,
         PhotoOwnerOnlyDirective
        ],

    exports: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ],

    imports: [
        CommonModule,
        PhotoModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VmessageModule
    ]
})

export class PhotoDetailsModule {}