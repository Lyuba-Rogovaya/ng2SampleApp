import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Item} from "../IItem";
import {ItemsService} from "../items.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() selectedItem:Item;

  constructor( private route: ActivatedRoute, private ItemsService:ItemsService) {}

  public addComment(itemId, comment, el) :void{
    if(!el.value) return;
      console.log(el.value);
      this.ItemsService.addComment(itemId, comment);
    el.value = null;
  }

  ngOnInit() {}

}
