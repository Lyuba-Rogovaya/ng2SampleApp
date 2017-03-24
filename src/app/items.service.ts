import { Injectable } from '@angular/core';

import {Item} from "./IItem";
import {Utils} from "./utils";


@Injectable()
export class ItemsService{

  private items:Item[] = [];

  constructor() {};

  public addItem(item:Item) :void {
    if (!item.id){
      item.id = Utils.generateUUID();
    }
    this.items.push(item);

    localStorage.setItem('items', JSON.stringify(this.items));
    console.log(localStorage.getItem('items'));
  }

  public deleteItem(itemId) :void{
    for(let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == itemId)  this.items.splice(i, 1);
    }
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  public getItems(): Item[] {
    this.items = JSON.parse(!!localStorage.getItem('items') ? localStorage.getItem('items') : '[]');
    return this.items;
  }

  public addComment(itemId, comment) :void{
    for(let i = 0; i < this.items.length; i++) {
      if (this.items[i].id == itemId)  this.items[i].comments.push(comment);
    }
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  public getItem(itemId:any): any
  {
    let item = [];
    let items = JSON.parse(localStorage.getItem('items'));
    for( let i = 0; i < items.length; i++ ) {
      if (items[i].id == itemId) {
        item = [ this.items[i] ]
      }
    }
    return item;
  }

}
