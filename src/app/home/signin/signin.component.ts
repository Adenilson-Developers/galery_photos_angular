import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;

    constructor( private formBilder: FormBuilder){}

    ngOnInit(): void {
        this.loginForm = this.formBilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
}