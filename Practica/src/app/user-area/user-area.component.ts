import { Component, inject, OnInit, signal } from '@angular/core';
import { PikapiItem } from '../models/PikapiItem';
import { PikapiItems } from '../models/PikapiItems';
import { ItemService } from '../services/item.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-area',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './user-area.component.html',
  styleUrl: './user-area.component.css'
})

export class UserAreaComponent implements OnInit {
  private itemService = inject(ItemService);

  items = signal<PikapiItem[]>([]);


  selectedItem = signal<string | null>(null);

  ngOnInit(): void {
    const baseUrl = 'http://localhost:3000/Uploads';

    this.itemService.getItems().subscribe((response: PikapiItems) => {
      response.results.forEach((item: PikapiItem) => {
        item.image = `${baseUrl}${item.image}`;
      });
      this.items.set(response.results);
    });
  }

  buyItem(item: PikapiItem): void {
    // Assuming you want to set the selected item
    this.selectedItem.set(item.id);
    alert(`Has comprado "${item.name}" por ${item.price}€`);
  }

}

