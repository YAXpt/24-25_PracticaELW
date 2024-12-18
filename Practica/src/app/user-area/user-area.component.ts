import { Component, inject, OnInit, signal } from '@angular/core';
import { PikapiItem } from '../models/PikapiItem';
import { PikapiItems } from '../models/PikapiItems';
import { itemService } from '../services/item.service';
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
  private itemService = inject(itemService);

  items = signal<PikapiItem[]>([]);
  selectedItem = signal<number | null>(null);

  ngOnInit(): void {
    this.itemService.getItems()
      .subscribe((items: PikapiItems) => {
      this.items.set(items.results);
    });

  }

  buyItem(item: PikapiItem): void {
    // Assuming you want to set the selected item
    this.selectedItem.set(item.id);
    alert(`Has comprado "${item.name}" por ${item.price}€`);
  }

}

