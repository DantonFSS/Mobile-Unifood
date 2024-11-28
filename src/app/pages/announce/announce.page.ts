import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-announce',
  templateUrl: './announce.page.html',
  styleUrls: ['./announce.page.scss'],
})
export class AnnouncePage {
  newItem = {
    name: '',
    description: '',
    price: null,
    url: '', 
  };

  categories = [
    { name: 'Doces', image: 'assets/images/doces.png' },
    { name: 'Sanduíches', image: 'assets/images/sanduiches.png' },
    { name: 'Pizzas', image: 'assets/images/pizzas.png' },
    { name: 'Sorvete', image: 'assets/images/sorvetes.png' },
  ];

  constructor(private http: HttpClient) {}

  onAddItem() {
    if (!this.newItem.name || !this.newItem.description || !this.newItem.price) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    this.http.post('http://localhost:8080/api/v1/items/create', this.newItem).subscribe({
      next: (response) => {
        console.log('Item created successfully:', response);
        alert('Item anunciado com sucesso!');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error creating item:', error);
        alert('Ocorreu um erro ao anunciar o item.');
      },
    });
  }

  resetForm() {
    this.newItem = {
      name: '',
      description: '',
      price: null,
      url: '',
    };
  }
}
