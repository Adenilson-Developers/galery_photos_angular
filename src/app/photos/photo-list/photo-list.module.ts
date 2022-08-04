import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from '@angular/common';
import { FilterByDescription } from './photos/filter-by-description.pipe';
import { LoadBottonComponent } from './load-botton/load-botton.component';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from "@angular/core";
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadBottonComponent,
        FilterByDescription
    ],

    imports: [
        CommonModule,
        PhotoModule
    ],

    exports: []
})
export class PhotoListModule{}