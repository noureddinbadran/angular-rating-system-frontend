import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Message} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {AuthenticationService} from '../../services-package/general-services/auth/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [MessageService]
})
export class LoginComponent implements OnInit {
    returnUrl: string;
    loginForm: FormGroup;
    msgs: Message[] = [];

    constructor(private authenticationService: AuthenticationService,
                private  router: Router, private route: ActivatedRoute,
                private messageService: MessageService) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'password': new FormControl(null, Validators.required)
        });
    }


    public async onSubmit() {
        let email = this.loginForm.get('email').value;
        let password = this.loginForm.get('password').value;

        if(this.loginForm.valid) {
            try {

                let res = await this.authenticationService.login(email, password);

                if (res.token) {

                    this.router.navigate(['dashboard']);
                }
                else {
                    this.show('error','Incorrect email or password');
                    let that = this;
                    setTimeout(function () {
                        that.hide();
                    },3000);
                }
            }
            catch (e) {
                console.log(e);
                this.show('error','Incorrect email or password');
                let that = this;
                setTimeout(function () {
                    that.hide();
                },3000);
            }

        }
    }

    show(_severity:string,_summary:string,_detail='') {
        this.msgs.push({severity:_severity, summary:_summary, detail:_detail});
    }

    hide() {
        this.msgs = [];
    }
}


