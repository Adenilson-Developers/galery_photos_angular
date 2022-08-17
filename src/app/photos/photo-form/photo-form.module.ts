import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form.component';
import { NgModule } from "@angular/core";
import { imediateClickModule } from 'src/app/shared/directives/imediate-click/imediate-click.module';

@NgModule({
    declarations: [ 
        PhotoFormComponent
    ],

    imports:[
        CommonModule,
        ReactiveFormsModule,
        VmessageModule,
        FormsModule,
        RouterModule,
        PhotoModule,
        imediateClickModule
    ]
})

export class PhotoFormModule {}