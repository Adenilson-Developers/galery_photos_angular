import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: './singup.component.html'
})

export class SingUpComponent implements OnInit {

    singupForm: FormGroup;

constructor(private formBuild: FormBuilder){}

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
                Validators.pattern(/^[a-z0-9_\-]+$/),
                Validators.minLength(2),
                Validators.maxLength(30)
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