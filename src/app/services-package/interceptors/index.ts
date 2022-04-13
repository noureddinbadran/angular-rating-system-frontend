import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UserDataInterceptor} from './user-data.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: UserDataInterceptor, multi: true },
];
