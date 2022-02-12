import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem('access_token');

        if (accessToken) {
            const tokenType = localStorage.getItem('token_type');
            const cloned = req.clone({
                headers: req.headers.set("Authorization", tokenType + ' ' + accessToken)
            });

            return next.handle(cloned);
        }

        return next.handle(req);
    }
}