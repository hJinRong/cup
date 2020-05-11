import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { DoctypeComponent } from "./doctype/doctype.component";
import { FilelistComponent } from "./filelist/filelist.component";
import { ConfigpanelComponent } from "./configpanel/configpanel.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    HomeComponent,
    DoctypeComponent,
    FilelistComponent,
    ConfigpanelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
})
export class HomeModule {}
