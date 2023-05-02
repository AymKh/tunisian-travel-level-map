import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// DIRECTIVES
import { ShowStateNameOnHover } from './showStateNameOnHover.directive';



@NgModule({
  declarations: [ShowStateNameOnHover],
  exports: [ShowStateNameOnHover]
})
export class DirectivesModule { }
