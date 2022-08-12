import { SignUpService } from './signup.service';
import { Injectable } from "@angular/core";
import { AbstractControl } from '@angular/forms';

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class UserNotTakenValidatorsService {

    constructor(private singUpService: SignUpService){}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName => 
                    this.singUpService.checkedUserNameTaken()
                ))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null ))
                .pipe(first());
        }
    }
}