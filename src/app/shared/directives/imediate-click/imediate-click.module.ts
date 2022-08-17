import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ImediateClickDirective } from "./imediate-click.directive";

@NgModule({

    declarations: [ImediateClickDirective],

    imports: [CommonModule],

    exports: [ImediateClickDirective]
})

export class imediateClickModule {}