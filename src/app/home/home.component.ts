import { Component, OnInit } from "@angular/core";
import { ipcMain, ipcRenderer } from "electron";
import { readFileSync, writeFile, promises } from "fs";
import { FilemanageService } from "../service/filemanage.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(public fm: FilemanageService) {}

  ngOnInit(): void {
    let filelist = document.getElementById("filelist");

    filelist.addEventListener("drop", async (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files) {
        //TODO May be we can store serval files at the same time.
        console.log("path", files[0].path, "name", files[0].name, "type",files[0].type);
        const content = readFileSync(files[0].path);
        // ipcRenderer.send("filecome", files[0].name, content);
        await promises.writeFile(`E:/tmp/${files[0].name}`, content);
        this.fm.filelist.push({
          name: `${files[0].name}`,
          dir: `E:/tmp/${files[0].name}`,
        });
      }
    });

    filelist.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

  }
}
