import {Component} from 'angular2/core';
import {LoginComponent} from './user/login/login.component';
import {LogoutComponent} from './user/logout/logout.component';

@Component({
    selector: 'root',
    template: `
        <login></login>
        <logout><</logout>
    `,
    directives: [LoginComponent, LogoutComponent]
})

export class RootComponent {}