import { Component, OnDestroy, OnInit, Output, EventEmitter, Input} from "@angular/core";
import { pipe, Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})

export class SearchComponent implements OnInit, OnDestroy {

    @Output() onTiping = new EventEmitter<string>();
    @Input() value: string = ''
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.onTiping.emit(filter));
        
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
      }
}