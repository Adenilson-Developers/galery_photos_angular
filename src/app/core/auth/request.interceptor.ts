import { tokenService } from './../token/token.service';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpResponse, HttpSentEvent, HttpUserEvent } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";



@Injectable()

export class RequestInterceptor implements HttpInterceptor {

    constructor(private tokenservice: tokenService ){}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent 
   | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>{

    if(this.tokenservice.hasToken()){
        const token = this.tokenservice.getToken();
        req = req.clone({
            setHeaders: {
                'x-access-token': token
            }
        })
    }
        return next.handle(req);
   }
    
}