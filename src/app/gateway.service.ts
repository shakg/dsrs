import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private http: HttpClient, private router:Router) { }

  private serverURL:string = "http://127.0.0.1:4848"

  getReleases(){
    return this.http.get<any>(`${this.serverURL}/release-jobs`);
  }
  saveReleaseJob(toSave:any){

    // todo : generate web hook url and insert this url to toSave object

    return this.http.post(`${this.serverURL}/save-release-job`, toSave)

   
  }
}
