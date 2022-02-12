import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Credentials } from "src/app/utilities/interfaces/credentials";
import { AuthService } from "src/app/utilities/services/auth.service";

@Component({
    'selector': 'login',
    'templateUrl': './login.component.html',
    'styleUrls': ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        if (this.authService.isLogged()) {
            this.router.navigate(['dashboard']);
        }
    }

    login() {
        const credentials: Credentials = this.loginForm.value;

        this.authService.postCredentials(credentials);
    }
}