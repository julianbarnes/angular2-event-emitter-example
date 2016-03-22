# Angular 2 (beta 9) Event Emitter Example

## Description
Illustrates a way to use an Angular2 (beta.9) EventEmitter (derived from):

* https://angular.io/docs/js/latest/api/core/EventEmitter-class.html

* https://github.com/jhusain/observable-spec

* https://github.com/angular/angular/blob/2.0.0-beta.11/modules/angular2/src/facade/async.ts#L59-L155
  
## License
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Operational Sketch

### Step 1 (inject the service in which the event will be defined)
`boot.ts` bootstraps the user service to be shared by all components within the application
```
import {UserService} from "./user/user.service";

bootstrap(RootComponent, [UserService]);
```

### Step 2 (define the event)
`user.service.ts` import `Output` and `EventEmitter` and define an event of the require type (in this case `<User>`)
```
import {Output, EventEmitter} from 'angular2/core';

export class UserService {
    @Output() userChangeEvent: EventEmitter<User> = new EventEmitter(true);
```

Note: `new EventEmitter(true)` redundantly specifies that the event emitter will operate asynchronously.

### Step 3 (fire the event)
`user.service.ts` emit the event defined in step 2, passing an object of the require type (in this case `<User>`)
```
    setUser(user:User) {
        this.userChangeEvent.emit(user);
    }
```

### Step 4 (imports to consume the event)
`logout.component.ts` import `OnInit`, `EventEmitter` and the service in which the event to consume was defined (in this case `UserService`)
```
import {Component, OnInit, Output, EventEmitter} from 'angular2/core';
import {UserService} from "../user.service";
```

### Step 5 (inject the service in which the event of interest was defined)
`logout.component.ts` construct the component and inject the service in which the event to consume was defined (in this case `UserService`) 
(within `ngOnInit()` subscribe to the event
```
export class LogoutComponent implements OnInit {
   constructor(private userService:UserService) {}
```

### Step 6 (provide an event handler)
`logout.component.ts` within `ngOnInit()` subscribe to the event by providing an event handler function
```
    ngOnInit() {
        this.userService.userChangeEvent.subscribe(user => this.selectedUserEventHandler(user));
    }
```

### Step 7 (react to the event)
`logout.component.ts` use the object passed to the event handler function
```
    selectedUserEventHandler(user:User) {
       // react to the event
    }
```

### Step 8 (optional)
Multiple components can subscribe to the event (repeat steps 4-7 in other components)

`login.component.ts` for example:

```
    ...
    constructor(private userService:UserService) {}
    ...
    private authenticated:boolean = false;
    ...
    ngOnInit() {
        ...
        this.userService.userChangeEvent.subscribe(user => this.selectedUserEventHandler(user));
        ...
    }

    selectedUserEventHandler(user:User) {
        this.authenticated = user.authenticated;
    }
```


## Usage
1: Clone the Git repository
```
git clone https://github.com/autopulous/angular2-event-emitter-example.git
```
2: Install required npm packages (from the command line/terminal)
```
npm install
```
3: Start the server

## Caveats

I do not have any intention of specifically maintaining, therefore please treat this as a point in time example that may or may not be relevant to the current state-of-the-art in Angular 2 development practices.