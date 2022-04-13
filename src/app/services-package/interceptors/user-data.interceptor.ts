import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from '../general-services/auth/authentication.service';
import {catchError} from 'rxjs/operators';
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Injectable()
export class UserDataInterceptor implements HttpInterceptor {

    constructor(public http: HttpClient,
                private authService: AuthenticationService,
                public router: Router,
                private location: Location) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        let url = req.url.startsWith('/api/') ? environment.apiUrl + req.url : req.url;
        if (req.url.startsWith('/peripheralApi/'))
            url = req.url.substr('/peripheralApi/'.length);
        req = req.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + this.authService.getAccessToken()
            },
            url: url
        });
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse)=>{
                if (error.status==401)
                {
                    this.authService.logout();
                    window.location.href = this.location.prepareExternalUrl('/');

                }
                return throwError(error);
            }
        ));
    }

}
