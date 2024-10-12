import { Component } from '@angular/core';
import {FundraiserService} from "../fundraiser.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: any = []
  images = ['../assets/donate-3.jpg', '../assets/donation1.webp', '../assets/donation-4.jpg', '../assets/shutterstock_1735703225-e1603424756464.webp']
  randomImages: any = []

  constructor(private fundraiserService: FundraiserService) {
    this.fundraiserService.retrieveFundraiser().subscribe((result:any) => {
      this.data=result

      for (let i = 0; i < result.length; i++) {
        const index = Math.floor(Math.random() * 4)
        this.randomImages.push(this.images[index])
      }
    })
  }
}
