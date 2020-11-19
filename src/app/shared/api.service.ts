import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  error = new Subject<string>();
  apiAdress : string = "http://localhost:5000/redirect/api/";

  constructor(private http: HttpClient) {}

  fetchSearch( searchTerm: string) {
    return this.http
      .get<{ [key: string] : Object}>(
        this.apiAdress + 'search?term=' + searchTerm,
        {
          responseType: 'json'
        }
      )
      .pipe(
        map(responseData => {
          console.log(responseData);
          const postsArray: Object[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          console.log(postsArray);
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string] : Object}>(
        'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: searchParams,
          responseType: 'json'
        }
      )
      .pipe(
        map(responseData => {
          console.log(responseData);
          const postsArray: Object[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          console.log(postsArray);
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }
}
