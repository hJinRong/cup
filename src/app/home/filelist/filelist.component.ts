import { Component, OnInit, OnDestroy } from "@angular/core";
import { FilemanageService } from "../../service/filemanage.service";
import { FileItem } from "../doctype/fileitem";
import { readFileSync, promises } from "fs";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-filelist",
  templateUrl: "./filelist.component.html",
  styleUrls: ["./filelist.component.css"],
})
export class FilelistComponent implements OnInit, OnDestroy {
  filelist: Observable<FileItem[]>;
  selectedId: number;
  wtt: {
    (e: DragEvent): Promise<void>;
    (this: HTMLElement, ev: DragEvent): any;
    (this: HTMLElement, ev: DragEvent): any;
  };
  pd: {
    (e: DragEvent): void;
    (this: HTMLElement, ev: DragEvent): any;
    (this: HTMLElement, ev: DragEvent): any;
  };

  constructor(private fms: FilemanageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.filelist = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = +params.get("id");
        return this.getFileList();
      })
    );

    this.wtt = (e: DragEvent) => this.writeToTmp(e);
    this.pd = (e: DragEvent) => this.preventDef(e);

    let con = document.getElementById("filelist");
    con.addEventListener("drop", this.wtt);
    con.addEventListener("dragover", this.pd);
  }

  ngOnDestroy(): void {
    let con = document.getElementById("filelist");
    con.removeEventListener("drop", this.wtt);
    con.removeEventListener("dragover", this.pd);
  }

  async writeToTmp(e: DragEvent) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files) {
      console.log(files);
      //TODO May be we can store serval files at the same time.
      const content = readFileSync(files[0].path);
      await promises.writeFile(`E:/tmp/${files[0].name}`, content);
      this.fms.newFile({
        name: `${files[0].name}`,
        dir: `E:/tmp/${files[0].name}`,
        type: `${files[0].type}`
      });
    }
  }

  preventDef(e: DragEvent) {
    e.preventDefault();
  }

  getFileList() {
    return this.fms.getFileList();
  }
}
