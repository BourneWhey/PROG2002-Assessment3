import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FundraiserService} from "../fundraiser.service";
import {DonationService} from "../donation.service";

@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrl: './fundraiser.component.css'
})
export class FundraiserComponent {
  data: any = []
  donationData: any = []
  images = ['../assets/donate-3.jpg', '../assets/donation1.webp', '../assets/donation-4.jpg', '../assets/shutterstock_1735703225-e1603424756464.webp']
  randomImages: any = []

  constructor(private route: ActivatedRoute, private fundraiserService: FundraiserService, private  donationService: DonationService) {
    this.route.paramMap.subscribe((params: any) => {
      const fundraiserId = params.params.fundraiserId
      this.fundraiserService.retrieveFundraiserDetail(fundraiserId).subscribe((result:any)=>{
        this.data = result

        for (let i = 0; i < result.length; i++) {
          const index = Math.floor(Math.random() * 4)
          this.randomImages.push(this.images[index])
        }
      })

      this.donationService.retrieveFundraiserDonations(fundraiserId).subscribe((result:any)=>{
        this.donationData=result
      })
    })
  }

  donate() {
    alert("This feature is under contruction");
  }
}
