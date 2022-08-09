import { Observable } from 'rxjs';
import { Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './../user/user.service';
import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

    constructor( 
        private userService: UserService,
        private router: Router
         ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean | Observable<boolean> | Promise<boolean>{

            if(this.userService.isLogged()){
                this.router.navigate(['user', this.userService.getUserName()])

                return false
            }
        return true;
    }
    
}