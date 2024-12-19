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
    this.itemService.getItems()
      .subscribe((items: PikapiItems) => {
        console.log('Datos recibidos desde la API:', JSON.stringify(items, null, 2));
        this.items.set(items.results); // Asigna los items al signal
      });
  }

  getItems(): PikapiItem[] {
    return this.items();
  }

  buyItem(item: PikapiItem): void {
    // Assuming you want to set the selected item
    this.selectedItem.set(item.id);
    alert(`Has comprado "${item.name}" por ${item.price}€`);
  }

}

