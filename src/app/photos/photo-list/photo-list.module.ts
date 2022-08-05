import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from '@angular/common';
import { FilterByDescription } from './photos/filter-by-description.pipe';
import { LoadBottonComponent } from './load-botton/load-botton.component';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from "@angular/core";
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadBottonComponent,
        FilterByDescription,
        SearchComponent
    ],

    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnHoverModule
    ],

    exports: []
})
export class PhotoListModule{}