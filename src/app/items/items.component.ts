import { Component, OnInit } from '@angular/core';
import { Item } from '../IItem';
import { ItemsService } from '../items.service';
import {Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public items :Item[];
  public selectedItem :Item;

  constructor(private ItemsService:ItemsService, private router: Router) {
    this.items = ItemsService.getItems();
  }

  public addItem(item :Item, el): boolean {
    if (item.name){
      this.ItemsService.addItem(item);
      this.selectedItem = item;
      el.value = null;
    }
    return false;
  }
 public deleteItem(itemId) :void{
   this.ItemsService.deleteItem(itemId);
   if (this.selectedItem && this.selectedItem.id == itemId) this.selectedItem  = null;
 }

  public onSelect(item: Item) :void {
    this.selectedItem = item;
    this.router.navigate(['/items', [item.id] ]);
  }
  public isItemSelected(itemId)
  {
    if(this.selectedItem && itemId == this.selectedItem.id){
      return true;
    }
    return false;
  }

  ngOnInit() {}
}
