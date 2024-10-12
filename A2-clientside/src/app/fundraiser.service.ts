import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FundraiserService {

  constructor(private http: HttpClient) { }

  retrieveFundraiser(ignoreActive: boolean = false): any{
    return this.http.get(`http://localhost:8000/fundraisers${ignoreActive ? '?ignoreActive=true' : ''}`)
  }

  searchFundraiser(organizer: string, city: string, category: string): any{
    return this.http.get("http://localhost:8000/search", {params: {organizer, city, category}})
  }

  retrieveFundraiserDetail(fundraiserId: number): any{
    return this.http.get("http://localhost:8000/fundraisers/" + fundraiserId)
  }

  createFundraiser(fundraiser: any): any{
    return this.http.post("http://localhost:8000/fundraiser", fundraiser)
  }

  updateFundraiser(fundraiser: any, fundraiserId: number): any{
    return this.http.put("http://localhost:8000/fundraiser/" + fundraiserId, fundraiser)
  }

  deleteFundraiser(fundraiserId: number): any{
    return this.http.delete("http://localhost:8000/fundraiser/" + fundraiserId)
  }
}
