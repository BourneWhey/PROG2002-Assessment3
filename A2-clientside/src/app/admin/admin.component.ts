import { Component } from '@angular/core';
import {FundraiserService} from "../fundraiser.service";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  categoryData: any = []
  data: any = []
  images = ['../assets/donate-3.jpg', '../assets/donation1.webp', '../assets/donation-4.jpg', '../assets/shutterstock_1735703225-e1603424756464.webp']
  randomImages: any = []
  message = ""

  showModal = false

  fundraiser: any = {
    fundraiserId: "",
    organizer: "",
    caption: "",
    targetFunding: "",
    currentFunding: "",
    city: "",
    active: "",
    categoryId: "",
  }

  constructor(private fundraiserService: FundraiserService, private categoryService: CategoryService) {
    this.categoryService.retrieveCategory().subscribe((result:any) => {
      this.categoryData=result
    })

    this.retrieveFundraiser()
  }

  retrieveFundraiser() {
    this.fundraiserService.retrieveFundraiser(true).subscribe((result:any) => {
      this.data=result

      for (let i = 0; i < result.length; i++) {
        const index = Math.floor(Math.random() * 4)
        this.randomImages.push(this.images[index])
      }
    })
  }

  submitForm() {
    this.message = ""
    if (!this.fundraiser.organizer) {
      this.message = "Missing organizer.";
      return
    }
    if (!this.fundraiser.caption) {
      this.message = "Missing caption.";
      return
    }
    if (!this.fundraiser.targetFunding) {
      this.message = "Missing target funding.";
      return
    }
    if (!/^\b([6-9]|\d{2,})\b$/.test(this.fundraiser.targetFunding)) {
      this.message = "Minimum of target funding is 5 AUD..";
      return
    }
    if (!this.fundraiser.currentFunding) {
      this.message = "Missing current funding.";
      return
    }
    if (!/^\b([6-9]|\d{2,})\b$/.test(this.fundraiser.currentFunding)) {
      this.message = "Minimum of current funding is 5 AUD..";
      return
    }
    if (!this.fundraiser.city) {
      this.message = "Missing city.";
      return
    }
    if (!this.fundraiser.active) {
      this.message = "Missing active.";
      return
    }
    if (!this.fundraiser.categoryId) {
      this.message = "Missing category.";
      return
    }

    if (this.fundraiser.fundraiserId) {
      this.fundraiserService.updateFundraiser(this.fundraiser, this.fundraiser.fundraiserId).subscribe(()=>{
        alert("Update fundraiser!");
        this.resetForm();
        this.retrieveFundraiser()
        this.showModal = false
      })
    } else {
      this.fundraiserService.createFundraiser(this.fundraiser).subscribe(()=>{
        alert("Create fundraiser!");
        this.resetForm();
        this.retrieveFundraiser()
        this.showModal = false
      })
    }

  }

  editFundraiser(fundraiser: any) {
    this.showModal = true
    this.fundraiser.organizer = fundraiser.ORGANIZER;
    this.fundraiser.caption = fundraiser.CAPTION;
    this.fundraiser.targetFunding = fundraiser.TARGET_FUNDING;
    this.fundraiser.currentFunding = fundraiser.CURRENT_FUNDING;
    this.fundraiser.city = fundraiser.CITY;
    this.fundraiser.active = fundraiser.ACTIVE;
    this.fundraiser.categoryId = fundraiser.CATEGORY_ID;
    this.fundraiser.fundraiserId = fundraiser.FUNDRAISER_ID;
  }

  resetForm() {
    this.fundraiser = {
      fundraiserId: "",
      organizer: "",
      caption: "",
      targetFunding: "",
      currentFunding: "",
      city: "",
      active: "",
      categoryId: "",
    }
  }

  deleteFundraiser(fundraiser: any) {
    if (confirm("Do you want to delete?")) {
      this.fundraiserService.deleteFundraiser(fundraiser.FUNDRAISER_ID)
        .subscribe(() => {
          alert("Delete fundraiser!");
          this.retrieveFundraiser()
        })
    }
  }
}
