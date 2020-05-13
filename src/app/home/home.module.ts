import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { AnalyresComponent } from "./analyres/analyres.component";
import { SharedModule } from "../shared/shared.module";
import { DoctypeComponent } from "./doctype/doctype.component";
import { FilelistComponent } from "./filelist/filelist.component";
import { ConfigpanelComponent } from "./configpanel/configpanel.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RestableComponent } from "./restable/restable.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [
    HomeComponent,
    DoctypeComponent,
    FilelistComponent,
    ConfigpanelComponent,
    RestableComponent,
    AnalyresComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
})
export class HomeModule {}
