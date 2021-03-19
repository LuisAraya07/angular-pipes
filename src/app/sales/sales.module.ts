import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';




import { OrderComponent } from './pages/order/order.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { ColorPipe } from './pipes/color.pipe';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrderPipe } from './pipes/order.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent,
    MayusculasPipe,
    VuelaPipe,
    ColorPipe,
    OrderPipe
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
