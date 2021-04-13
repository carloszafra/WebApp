import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Iuser } from '../models/Iuser';

const baseUrl: string = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(
    private _http: HttpClient,
  ) { }

  public getUsers(): Observable<Iuser[]>{
    return this._http.get<Iuser[]>(baseUrl);
  }
}
