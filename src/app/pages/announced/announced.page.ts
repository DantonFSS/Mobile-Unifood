import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-announced',
  templateUrl: './announced.page.html',
  styleUrls: ['./announced.page.scss'],
})
export class AnnouncedPage implements OnInit {
  announcedProducts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAnnouncedProducts();
  }

  loadAnnouncedProducts() {
    this.http.get('https://mockapi.io/api/v1/products').subscribe({
      next: (data: any) => {
        this.announcedProducts = data;
        console.log('Announced products:', this.announcedProducts);
      },
      error: (error) => {
        console.error('Error fetching announced products:', error);
      },
    });
  }
}
