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
    { name: 'Doces', image: 'assets/images/doces.png' },
    { name: 'Sanduíches', image: 'assets/images/sanduiches.png' },
    { name: 'Pizzas', image: 'assets/images/pizzas.png' },
    { name: 'Sorvete', image: 'assets/images/sorvetes.png'  },
  ];

}

