import { Component, inject } from '@angular/core';
import { HomeSerivce } from './home-serivce';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  private readonly homeService= inject(HomeSerivce);
  constructor(){
    this.fetchData();
  }

  private fetchData() {
    this.homeService.getProductsData().subscribe((data:any)=>{
      console.log(data);
      
    })
  }

}
