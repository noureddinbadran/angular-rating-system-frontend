import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Subject, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';
import {RequestResult} from '../services-package/core/request-result';
import {environment} from '../../environments/environment';
import {Project} from '../models/project';
import {Observable} from 'rxjs-observable';

@Injectable()
export class RatingService {
    loginSubject: Subject<boolean> = new Subject<boolean>();

    constructor(private http: HttpClient) {

    }


    async rateProject(obj: any) {
        try {
            let res = await this.http.post<RequestResult<false>>(environment.apiUrl + 'rating', obj).pipe(
                catchError((error: HttpErrorResponse) => {
                    return throwError(error);
                })).toPromise();

            if (res.metaData.status == 200) {
                return {
                    'value': true,
                }
            }
            return {
                'value': false,
                'msg': 'Something went wrong'
            };

        } catch (err)
        {
            return {
                'value': false,
                'msg': err.error.metaData.message
            }
        }
    }

    async getProjects() {
        let res = await this.http.get<RequestResult<Project>>(environment.apiUrl + 'projects').pipe(
            catchError((error: HttpErrorResponse) => {
                return throwError(error);
            })).toPromise();

        if (res.metaData.status == 200) {
            return res.data;
        }
    }

}