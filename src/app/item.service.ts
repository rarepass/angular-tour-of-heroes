import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Item } from './item';
import { ITEMS } from './mock-items';
import { MessageService } from './message.service';

@Injectable()
export class ItemService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('ItemService: fetched items');
    return of(ITEMS);
  }

  /*
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  */
}