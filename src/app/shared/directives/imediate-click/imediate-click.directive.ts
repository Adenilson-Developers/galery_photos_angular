import { PlatformDetectorService } from './../../../core/platform-detector/platform-detector.service';
import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({ 
    selector: '[imediateClick]'
})

export class ImediateClickDirective implements OnInit{

    constructor( 
        private element: ElementRef<any>,
        private platFormDetectorService: PlatformDetectorService){}

        ngOnInit(): void {
            this.platFormDetectorService.isPlatformBrowser &&
            this.element.nativeElement.click();
        }
}