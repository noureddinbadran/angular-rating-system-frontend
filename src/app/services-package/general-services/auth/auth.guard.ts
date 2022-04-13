import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authenticationService: AuthenticationService) {
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticationService.getAccessToken()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
        return false;
    }
}
