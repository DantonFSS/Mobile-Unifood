import { Component } from '@angular/core';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.page.html',
  styleUrls: ['./announce.page.scss']
})
export class AnnouncePage {

  price: number | null = null;
  
  constructor() {}

  categories = [
    { name: 'doces', image: 'assets/images/doces.png' },
    { name: 'sanduíches', image: 'assets/images/sanduiches.png' },
    { name: 'pizzas', image: 'assets/images/pizzas.png' },
    { name: 'sorvete', image: 'assets/images/sorvetes.png'  },
  ];

}

