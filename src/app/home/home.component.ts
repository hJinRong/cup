import { Component, OnInit } from "@angular/core";
import { ipcMain, ipcRenderer } from "electron";
import { readFileSync, writeFile } from "fs";
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

    filelist.addEventListener("drop", (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files) {
        console.log("path", files[0].path, "name", files[0].name, "type",files[0].type);
        const content = readFileSync(files[0].path);
        ipcRenderer.send("filecome", files[0].name, content);
      }
    });

    filelist.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

  }
}
