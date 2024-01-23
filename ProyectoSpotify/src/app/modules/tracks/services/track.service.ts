import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  getAllTracks$(): Observable<any>{
    return this.http.get(`${this.URL}/tracks`)
    .pipe(
      map(({data}: any) => {
        console.log(data)
        return data}),
       catchError((err) => {
        console.log("Error aaa")
        return of([])
       }) 
      )
  }

}
