import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent} from './item/item.component';
import { ItemDetailComponent} from './item-detail/item-detail.component';

const routes: Routes = [
  {path: 'products', component: ItemComponent},
  {path: 'products/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
