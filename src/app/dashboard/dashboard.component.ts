import { Component } from "@angular/core";
import { AuthService } from "../utilities/services/auth.service";

@Component({
    'selector': 'dashboard',
    'templateUrl': './dashboard.component.html'
})
export class DashboardComponent {
    constructor(private authService: AuthService) { }

}