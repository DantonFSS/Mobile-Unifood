import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/models/item.model'; 

@Component({
  selector: 'app-announced',
  templateUrl: './announced.page.html',
  styleUrls: ['./announced.page.scss'],
})
export class AnnouncedPage implements OnInit {
  announcedItems: Item[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadAnnouncedItems();
  }

  loadAnnouncedItems() {
    this.http.get<Item[]>('http://localhost:8080/api/v1/items/all').subscribe({
      next: (data) => {
        this.announcedItems = data; 
        console.log('Announced items:', this.announcedItems);
      },
      error: (error) => {
        console.error('Error fetching announced items:', error);
      },
    });
  }
}
