import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { DoctypeComponent } from './doctype/doctype.component';
import { FilelistComponent } from './filelist/filelist.component';

@NgModule({
  declarations: [HomeComponent,DoctypeComponent, FilelistComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
