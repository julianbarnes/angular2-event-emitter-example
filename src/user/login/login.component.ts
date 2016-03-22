import {Component, OnInit} from 'angular2/core';
import {User} from '../value.objects';
import {UserService} from "../user.service";
import {AuthenticationService} from '../authentication.service';

@Component({
    selector: 'login',
    templateUrl: 'app/user/login/login.component.html',
    providers: [AuthenticationService]
})

export class LoginComponent implements OnInit {
    constructor(private userService:UserService) {}

    private username:string;
    private password:string;
    private authenticated:boolean = false;

    private heading:string;
    private usernameLabel:string;
    private passwordLabel:string;
    private submitButtonLabel:string;

    ngOnInit() {
        this.heading = "Please enter your credentials";
        this.usernameLabel = "username";
        this.passwordLabel = "password";
        this.submitButtonLabel = "Login";

        this.userService.userChangeEvent.subscribe(user => this.selectedUserEventHandler(user));
    }

    selectedUserEventHandler(user:User) {
        this.authenticated = user.authenticated;
    }

    onSubmit(form) {
        let user:User = AuthenticationService.login(<User>{username: form.value.username, password: form.value.password});
        this.userService.setUser(user);
    }
}