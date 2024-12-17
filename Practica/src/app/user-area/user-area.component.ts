import { Component, inject, OnInit, signal } from '@angular/core';
import { PikapiItem } from '../models/PikapiItem';
import { PikapiItems } from '../models/PikapiItems';
import { PikapiService } from '../services/pikapi.service';
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
export class UserAreaComponent {
  private pikapiService = inject(PikapiService);

  items = signal<PikapiItem[]>([]);

  selectedItem = signal<number | null>(null);

  ngOnInit(): void {
    this.pikapiService.getItems()
      .subscribe((items: PikapiItems) => {
      this.items.set(items.results);
    });

  }

  buyItem(item: PikapiItem): void {
    // Assuming you want to set the selected item
    this.selectedItem.set(item.id);
  }

  showDescription(item: PikapiItem): void {
    this.selectedItem.set(item.id);
  }
}

