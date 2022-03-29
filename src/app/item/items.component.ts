import {Component, OnDestroy, OnInit} from '@angular/core';

import {Item} from './item';
import {ItemService} from './item.service';
import {allowSleepAgain, keepAwake} from 'nativescript-insomnia';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit, OnDestroy {
  items: Array<Item>;

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    keepAwake().then(() => console.log('Insomnia is now ON'));
    this.items = this.itemService.getItems();
  }

  ngOnDestroy(): void {
    allowSleepAgain().then(() => console.log('Insomnia is now OFF'));
  }
}
