import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FundraiserService} from "../fundraiser.service";
import {DonationService} from "../donation.service";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {
  data: any = []
  images = ['../assets/donate-3.jpg', '../assets/donation1.webp', '../assets/donation-4.jpg', '../assets/shutterstock_1735703225-e1603424756464.webp']
  randomImages: any = []

  amount = ""
  giver = ""

  constructor(private route: ActivatedRoute, private fundraiserService: FundraiserService, private  donationService: DonationService, private router: Router) {
    this.route.paramMap.subscribe((params: any) => {
      const fundraiserId = params.params.fundraiserId
      this.fundraiserService.retrieveFundraiserDetail(fundraiserId).subscribe((result:any)=>{
        this.data = result

        for (let i = 0; i < result.length; i++) {
          const index = Math.floor(Math.random() * 4)
          this.randomImages.push(this.images[index])
        }
      })
    })
  }

  donate() {
    if (this.amount === "" || this.giver === "") {
      alert("Amount and giver need enter.")
    } else if (!/^\b([6-9]|\d{2,})\b$/.test(this.amount)) {
      alert("minimum of donation is 5 AUD.")
    } else {
      this.donationService.addDonations(this.data[0].FUNDRAISER_ID, Number(this.amount), this.giver).subscribe(() => {
        alert("Thank you for your donation to " + this.data[0].CAPTION)
      })
    }
  }
}
