import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-announce',
  templateUrl: './announce.page.html',
  styleUrls: ['./announce.page.scss'],
})
export class AnnouncePage {
  // Variables to hold form inputs
  newProduct = {
    title: '',
    description: '',
    price: null,
    category: '',
    image: '', // Optional field for uploaded image URL
  };

  // Available categories
  categories = [
    { name: 'Doces', image: 'assets/images/doces.png' },
    { name: 'Sanduíches', image: 'assets/images/sanduiches.png' },
    { name: 'Pizzas', image: 'assets/images/pizzas.png' },
    { name: 'Sorvete', image: 'assets/images/sorvetes.png' },
  ];

  constructor(private http: HttpClient) {}

  // Save a new product
  onAddProduct() {
    // Ensure all required fields are filled
    if (
      !this.newProduct.title ||
      !this.newProduct.description ||
      !this.newProduct.price ||
      !this.newProduct.category
    ) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Send the product data to the backend or local storage
    this.http.post('https://mockapi.io/api/v1/products', this.newProduct).subscribe({
      next: (response) => {
        console.log('Product added successfully:', response);
        alert('Produto anunciado com sucesso!');
        this.resetForm(); // Clear the form after saving
      },
      error: (error) => {
        console.error('Error adding product:', error);
        alert('Ocorreu um erro ao anunciar o produto.');
      },
    });
  }

  // Reset the form
  resetForm() {
    this.newProduct = {
      title: '',
      description: '',
      price: null,
      category: '',
      image: '',
    };
  }
}
