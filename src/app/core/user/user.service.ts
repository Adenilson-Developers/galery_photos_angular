import { Injectable } from "@angular/core";
import { tokenService } from "../token/token.service";
import { BehaviorSubject } from "rxjs";
import  jwtDecode from "jwt-decode";

import { User } from "./user";

@Injectable({providedIn: 'root'})

export class UserService {

    private userSubject = new BehaviorSubject<User>(null);

    constructor( private tokenservice: tokenService){
        this.tokenservice.hasToken() && this.decodeAndNotify();
    }

    setToken(token: string){
        this.tokenservice.setToken(token)
        this.decodeAndNotify();
    }

    getUser(){
        return this.userSubject.asObservable();
    }

    private decodeAndNotify(){
        const token = this.tokenservice.getToken()
        const user = jwtDecode(token) as User;
        this.userSubject.next(user)
    }

    logout(){
        this.tokenservice.removeToken();
        this.userSubject.next(null);
    }
}