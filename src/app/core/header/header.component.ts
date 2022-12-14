import { Router } from '@angular/router';
import { UserService } from './../user/user.service';
import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { User } from "../user/user";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    user$: Observable<User>
    user: User;

    constructor( 
        private userService: UserService,
        private router: Router
         ){

        this.user$ = this.userService.getUser();
    }

    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }
}