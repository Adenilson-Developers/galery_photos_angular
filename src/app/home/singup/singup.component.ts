import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { lowerCaseValidators } from 'src/app/shared/validators/lower-case.validators';
import { UserNotTakenValidatorsService } from './user-not-taken.validators.service';

@Component({
    templateUrl: './singup.component.html'
})

export class SingUpComponent implements OnInit {

    singupForm: FormGroup;

constructor(
    private formBuild: FormBuilder,
    private userNotTakenValidatorsService: UserNotTakenValidatorsService
    ){}

ngOnInit(): void {
    this.singupForm = this.formBuild.group({
        email: ['',
            [
                 Validators.required,
                 Validators.email
            ]
        ],
        fullName: ['', 
            [
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(40)
            ]
    ],
        userName: ['', 
            [
                Validators.required,
               lowerCaseValidators,
                Validators.minLength(2),
                Validators.maxLength(30)
            ],
            [
                this.userNotTakenValidatorsService.checkUserNameTaken()
            ]
        ],
        password: ['',
            [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(14)
            ]
        ]
    })
}
}