import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ItemsComponent} from "./items/items.component";
import {CommentsComponent} from "./comments/comments.component";

const appRoutes: Routes = [
  { path: '', redirectTo : '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent, children : [
    {
      path: ':id',
      component: CommentsComponent,
    }
  ]}

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
