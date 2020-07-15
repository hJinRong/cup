import { Component, OnInit, OnChanges } from "@angular/core";
import { FilemanageService } from "../../service/filemanage.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { FileItem } from "../doctype/fileitem";
import { switchMap } from "rxjs/operators";
import { DirectoryconfService } from "../../service/directoryconf.service";

@Component({
  selector: "app-analyres",
  templateUrl: "./analyres.component.html",
  styleUrls: ["./analyres.component.css"],
})
export class AnalyresComponent implements OnInit, OnChanges {
  fileitem: Observable<FileItem>;
  filename: string;

  public set lastFrameDir(v: string) {
    this.lastFrameDir = v;
  }

  public get lastFrameDir(): string {
    const dir = this.dc.getSecondDir();
    this.fileitem.subscribe((x) => (this.filename = x.name));
    return `file:///${dir}\\lastframe\\${this.filename}.jpg`;
  }

  constructor(
    private fms: FilemanageService,
    private dc: DirectoryconfService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fileitem = this.route.paramMap.pipe(
      switchMap((params) => this.fms.getFile(params.get("id")))
    );
  }

  ngOnChanges(): void {
    const dir = this.dc.getSecondDir();
    this.fileitem.subscribe((x) => (this.filename = x.name));
    this.lastFrameDir = `file:///${dir}\\lastframe\\${this.filename}.jpg`;
  }
}
