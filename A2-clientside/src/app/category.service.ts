import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  retrieveCategory(): any{
    return this.http.get("http://localhost:8000/categories")
  }
}
