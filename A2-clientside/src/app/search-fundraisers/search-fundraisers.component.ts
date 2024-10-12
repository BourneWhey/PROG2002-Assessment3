import { Component } from '@angular/core';
import {FundraiserService} from "../fundraiser.service";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-search-fundraisers',
  templateUrl: './search-fundraisers.component.html',
  styleUrl: './search-fundraisers.component.css'
})
export class SearchFundraisersComponent {
  categoryData: any = []
  data: any = []
  images = ['../assets/donate-3.jpg', '../assets/donation1.webp', '../assets/donation-4.jpg', '../assets/shutterstock_1735703225-e1603424756464.webp']
  randomImages: any = []

  organizer = ""
  city = ""
  category = ""

  constructor(private fundraiserService: FundraiserService, private categoryService: CategoryService) {
    this.categoryService.retrieveCategory().subscribe((result:any) => {
      this.categoryData=result
    })
  }


  search() {
    if (this.organizer === "" && this.city === "" && this.category === "") {
      alert("You must select at least one criteria!");
    } else {
      this.fundraiserService.searchFundraiser(this.organizer, this.city, this.category).subscribe((result:any) => {
        this.data = result

        for (let i = 0; i < result.length; i++) {
          const index = Math.floor(Math.random() * 4)
          this.randomImages.push(this.images[index])
        }
      })
    }
  }

  clearChechboxes() {
    this.organizer = ""
    this.city = ""
    this.category = ""
    this.data = []
  }
}
