import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { SignInComponent } from "./signin/signin.component";

@NgModule({
    declarations: [SignInComponent],

    imports: [ ReactiveFormsModule, CommonModule ],

    exports: [  ]
})

export class HomeModule {}