import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { providers } from './providers';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
    providers
  ],
  exports: [
    HttpClientModule,
  ]
})
export class LibModule { }
