import {Injectable} from 'angular2/core';
import {Role, User} from './value.objects';

@Injectable()
export class AuthenticationService {
    static login(user:User):User {
        // todo call the authentication provider with username and password to login

        user.id = 1; // mock
        user.fullName = user.username + ':' + user.password; // mock

        if (0 != user.id && '' != user.fullName && '' != user.username && '' != user.password) {
            user.authenticated = true;
        }

        return user;
    }

    static logout(user:User):User {
        if (user.authenticated) {
            // todo call the authentication provider to logout (if required)
        }

        user.username = '';
        user.password = '';
        user.id = 0;
        user.fullName = '';
        user.lastLogin = '';
        user.roles = [];
        user.authenticated = false;

        return user;
    }
}