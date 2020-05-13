import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { AnalyRes, TimeAndFps } from "../doctype/fileitem";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-restable",
  templateUrl: "./restable.component.html",
  styleUrls: ["./restable.component.css"],
})
export class RestableComponent implements OnInit {
  @Input() formData: AnalyRes;
  displayedColumns: string[] = ["totalTime", "fps"];
  dataSource: MatTableDataSource<TimeAndFps>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<TimeAndFps>(this.formData.data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
