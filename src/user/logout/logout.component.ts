import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {User} from '../value.objects';
import {UserService} from "../user.service";
import {AuthenticationService} from '../authentication.service';

@Component({
    selector: 'logout',
    templateUrl: 'app/user/logout/logout.component.html',
    providers: [AuthenticationService]
})

export class LogoutComponent implements OnInit {
    constructor(private userService:UserService) {}

    private username:string;
    private authenticated:boolean = false;

    private heading:string;
    private usernameLabel:string;
    private submitButtonLabel:string;

    ngOnInit() {
        this.heading = "Please logout whenever you're ready";
        this.usernameLabel = "username";
        this.submitButtonLabel = "Logout";

        this.userService.userChangeEvent.subscribe(user => this.selectedUserEventHandler(user));
    }

    selectedUserEventHandler(user:User) {
        this.username = user.username;
        this.authenticated = user.authenticated;
    }

    onSubmit() {
        let user:User = this.userService.getUser();
        user = AuthenticationService.logout(user);
        this.userService.setUser(user);
    }
}
