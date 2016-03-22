import {Injectable, Output, EventEmitter} from 'angular2/core';
import {User} from './value.objects';

@Injectable()
export class UserService {
    private user:User;

    @Output() userChangeEvent: EventEmitter<User> = new EventEmitter(true);

    setUser(user:User) {
        this.user = user;
        this.userChangeEvent.emit(user);
    }

    getUser():User {
        return this.user;
    }
}