import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FundraiserService {

  constructor(private http: HttpClient) { }

  retrieveFundraiser(): any{
    return this.http.get("http://localhost:8000/fundraisers")
  }

  searchFundraiser(organizer: string, city: string, category: string): any{
    return this.http.get("http://localhost:8000/search", {params: {organizer, city, category}})
  }

  retrieveFundraiserDetail(fundraiserId: number): any{
    return this.http.get("http://localhost:8000/fundraisers/" + fundraiserId)
  }
}
