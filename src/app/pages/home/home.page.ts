import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements AfterViewInit {

  categories = [
    { name: 'Doces', image: 'assets/images/doces.png' },
    { name: 'Sanduíches', image: 'assets/images/sanduiches.png' },
    { name: 'Pizzas', image: 'assets/images/pizzas.png' },
    { name: 'Sorvete', image: 'assets/images/sorvetes.png'  },
  ];
  
  nearYouItems = [
    { image: 'https://vitarella.com.br/wp-content/uploads/2020/12/08_LASANHA_FINAL-1-min.jpg', alt: 'Lasanha' },
    { image: 'https://nossodocesv.lojazap.com/_core/_uploads/4680/2023/05/2335280523g80afai4d8.jpeg', alt: 'Bolo de pote' },
    { image: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/mousse-limao-farofa.jpg', alt: 'Doce de limão' },
  ];

  ngAfterViewInit() {
    new Swiper('.swiper-container', {
      slidesPerView: 1.2,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }  
}
