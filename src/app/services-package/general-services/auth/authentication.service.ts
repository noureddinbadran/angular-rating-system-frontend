import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Subject, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {catchError} from 'rxjs/internal/operators';
import {RequestResult} from '../../core/request-result';
import {Token} from '../../../models/token';

@Injectable()
export class AuthenticationService {
    loginSubject: Subject<boolean> = new Subject<boolean>();

    constructor(private http: HttpClient) {

    }


    async login(email: any, password: any) {
        let res = await this.http.post<RequestResult<Token>>( environment.apiUrl + 'login_check', {
            username: email,
            password: password
        }).pipe(
            catchError((error: HttpErrorResponse) => {
                 //if (error.error['status'] !== null)
                   //this.alertService.error(error.error['msg']);

                return throwError('Error Authenticating')
            })).toPromise();

        if (!res.token) {
            return res;
        }

        localStorage.setItem('token', res.token);
        this.loginSubject.next(true);
        return res;
    }

    signup(obj: any) {
        return this.http.post<RequestResult<Token>>(environment.apiUrl + 'auth/register', obj);
    }



    getAccessToken() {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
    }


}