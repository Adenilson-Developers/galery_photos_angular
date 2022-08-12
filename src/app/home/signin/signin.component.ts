import { AuthService } from '../../core/auth/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor( 
        private formBilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectService: PlatformDetectorService
        ){}

    ngOnInit(): void {
        this.loginForm = this.formBilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.platformDetectService.isPlatformBrowser() && 
        this.userNameInput.nativeElement.focus();
    }

    login(){
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.authService
            .authenticate(userName, password)
            .subscribe(
                () => this.router.navigate(['user', userName]),
                error => {
                    console.log(error);
                    this.loginForm.reset();
                    this.platformDetectService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
                    alert('Invalid user name or password')
                }
            )
    }
}