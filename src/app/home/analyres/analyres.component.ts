import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { FilemanageService } from "../../service/filemanage.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { FileItem, TimeAndFps, AnalyRes } from "../doctype/fileitem";
import { switchMap } from "rxjs/operators";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-analyres",
  templateUrl: "./analyres.component.html",
  styleUrls: ["./analyres.component.css"],
})
export class AnalyresComponent implements OnInit {
  fileitem: Observable<FileItem>;
  displayedColumns: string[] = ["totalTime", "fps"];

  constructor(private fms: FilemanageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fileitem = this.route.paramMap.pipe(
      switchMap((params) => this.fms.getFile(params.get("id")))
    );
  }
}
