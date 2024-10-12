import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private http: HttpClient) { }

  retrieveFundraiserDonations(fundraiserId: number): any{
    return this.http.get("http://localhost:8000/fundraiser/donations/" + fundraiserId)
  }

  addDonations(fundraiserId: number, amount: string, giver: string): any{
    return this.http.post("/fundraiser/donations", { fundraiserId, amount, giver })
  }
}
