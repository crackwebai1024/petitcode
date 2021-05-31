import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';
import { IndividualhouseComponent } from './individualhouse/individualhouse.component';
import { HouseExtractRepository } from './model/houseextract.repository';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [AppComponent, HousesComponent, IndividualhouseComponent, PaginationComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HouseExtractRepository],
  bootstrap: [AppComponent],
})
export class AppModule {}
