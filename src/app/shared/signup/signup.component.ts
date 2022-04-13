import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services-package/general-services/auth/authentication.service';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    constructor(private authenticationService: AuthenticationService, private  router: Router) { }

    ngOnInit() {
        this.signupForm = new FormGroup({
            'username': new FormControl(null, [Validators.required, Validators.email]),
            'first_name': new FormControl(null, Validators.required),
            'last_name': new FormControl(null, Validators.required),
            'password': new FormControl(null, Validators.required),
        });
    }

    onSubmit() {
        if (this.signupForm.valid) {
            let obj = {
                "username": this.signupForm.get('username').value,
                "first_name": this.signupForm.get('first_name').value,
                "last_name": this.signupForm.get('last_name').value,
                "password": this.signupForm.get('password').value,
            };

            this.authenticationService.signup(obj).subscribe(res => {
                if(res.metaData.status == 200)
                    this.router.navigate(['/login']);
            });
        }
    }

}
