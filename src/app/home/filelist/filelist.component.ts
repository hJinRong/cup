import { Component, OnInit } from "@angular/core";
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
export class FilelistComponent implements OnInit {
  filelist: Observable<FileItem[]>;
  selectedId: number;

  constructor(private fms: FilemanageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.filelist = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = +params.get("id");
        return this.getFileList();
      })
    );

    let con = document.getElementById("filelist");

    con.addEventListener("drop", async (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files) {
        //TODO May be we can store serval files at the same time.
        const content = readFileSync(files[0].path);
        await promises.writeFile(`E:/tmp/${files[0].name}`, content);
        this.fms.newFile({
          name: `${files[0].name}`,
          dir: `E:/tmp/${files[0].name}`,
        });
      }
    });

    con.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  }

  getFileList() {
    return this.fms.getFileList();
  }
}
