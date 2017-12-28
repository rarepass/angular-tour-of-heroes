import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: Item;
  id: number;
  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
  }

}
