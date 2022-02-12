import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { Credentials } from "../interfaces/credentials";

@Injectable()
export class AuthService {
    private logged = false;
    apiUrl: string = environment.apiUrl;

    constructor(private http: HttpClient, private router: Router) {
        this.checkValidity();
    }

    checkValidity() {
        if (localStorage.getItem('access_token')) {
            this.setLoggedIn();
        }
    }

    isLogged(): boolean {
        console.log(this.logged, 'is logged')
        return this.logged;
    }

    private setLoggedIn() {
        this.logged = true;
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
    }

    private setSession(auth: any) {
        auth.access_token !== undefined ? localStorage.setItem('access_token', auth.access_token) : '';
        auth.expires_in !== undefined ? localStorage.setItem('expires_in', auth.expires_in) : '';
        auth.token_type !== undefined ? localStorage.setItem('token_type', auth.token_type) : '';

        if (localStorage.getItem('access_token') !== null) {
            this.setLoggedIn();
            this.router.navigate(['dashboard']);
        }
    }

    postCredentials(credentials: Credentials) {
        return this.http.post<any>(this.apiUrl + '/login', credentials)
            .subscribe(response => this.setSession(response))
    }
}