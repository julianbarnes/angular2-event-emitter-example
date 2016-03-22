/// <reference path="../node_modules/angular2/typings/browser"/>

import {bootstrap} from 'angular2/platform/browser';
import {RootComponent} from "./root.component";
import {UserService} from "./user/user.service";

bootstrap(RootComponent, [UserService]);