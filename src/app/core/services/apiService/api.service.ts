import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators"
import { LoadingService } from '../loading/loading.service';

interface Options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    params?: HttpParams | {
        [params: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
};
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient, public loadingService: LoadingService) { }
    private urlMovie = "https://movie0706.cybersoft.edu.vn/api";

    // get API LogoCinema
    getApiLogoCinema<T>(url: string, options = {} as Options): Observable<T> {
        return this.http.get<T>(`${this.urlMovie}/${url}`, options).pipe(tap((data) => {
        }, error => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }

    // get
    getApi<T>(url: string, options = {} as Options): Observable<T> {
        this.loadingService.show()
        return this.http.get<T>(`${this.urlMovie}/${url}`, options).pipe(tap((data) => {
            console.log(data);
            setTimeout(() => {
                this.loadingService.hidden()
            }, 500);
        }, error => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }

    // post
    postApi<T>(url: string, data: any, opitons = {} as Options): Observable<T> {
        this.loadingService.show()
        return this.http.post<T>(`${this.urlMovie}/${url}`, data, opitons).pipe(tap(data => {
            console.log(data);
            setTimeout(() => {
                this.loadingService.hidden()
            }, 500);
        }, error => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }
    // post token
    postApiToken<T>(url: string, data: any, opitons = {}): Observable<T> {
        this.loadingService.show()
        return this.http.post<T>(`${this.urlMovie}/${url}`, data, opitons).pipe(tap(data => {
            console.log(data);
            setTimeout(() => {
                this.loadingService.hidden()
            }, 500);
        }, error => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }
    // put
    putApi<T>(url: string, data: any, opitons = {} as Options): Observable<T> {
        this.loadingService.show()
        return this.http.put<T>(`${this.urlMovie}/${url}`, data, opitons).pipe(tap(data => {
            console.log(data);
            setTimeout(() => {
                this.loadingService.hidden()
            }, 500);
        }, error => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }
    // delete
    deleteApi<T>(url: string, options = {}): Observable<T> {
        this.loadingService.show()
        return this.http.delete<T>(`${this.urlMovie}/${url}`, options).pipe(tap(data => {
            console.log(data);
            setTimeout(() => {
                this.loadingService.hidden()
            }, 500);
        }, error => {
            this.loadingService.hidden()
        }), catchError(this.showError))
    }
    // show error
    showError(error: HttpErrorResponse) {
        console.log(error)
        return throwError(error)
    }
}
