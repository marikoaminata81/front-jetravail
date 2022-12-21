import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//background: 'rgba(66,185,12, 0.17)',
  features: any[] = [
    {id: 1, name: 'Kayes', src: 'assets/image/kayes.jpg', page: '/detailsRegion'},
    {id: 2, name: 'Region de Kidal', src: 'assets/image/kidal.jpg',  page: '/detailsRegion'},
    {id: 3, name: 'Region de Sikasso', src: 'assets/image/Sikasso.jpg',  page: '/detailsRegion'},
    {id: 4, name: 'Region de Kayes', src: 'assets/image/tombouctou.jpg',  page: '/detailsRegion'},
  ];

  transactions: any[] = [
    {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
  ];
  slideOpt ={
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true,
 speed: 400,
    pagination: {
      el: '.swiper-pagination',
    }
  }
  slideOpt1 ={
    initialSlide: 0,
 slidesPerView: 3,
 autoplay:false,
    pagination: {
      el: '.swiper-pagination',
    }
  }
  slideOpt2 ={
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true,
 speed: 400,
    pagination: {
      el: '.swiper-pagination',
    }
  }
  
  
  constructor() {}

}
