import { Component, OnInit } from '@angular/core';
import { FilemanageService } from '../../service/filemanage.service';
import { FileItem } from '../doctype/fileitem';
import { readFileSync, promises } from 'fs';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.css']
})
export class FilelistComponent implements OnInit {

  fileList: FileItem[];

  constructor(public fm:FilemanageService) { }

  ngOnInit(): void {
    this.fileList = this.fm.filelist;

    let con = document.getElementById("filelist");

    con.addEventListener("drop", async (e) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      if (files) {
        //TODO May be we can store serval files at the same time.
        console.log(
          "path",
          files[0].path,
          "name",
          files[0].name,
          "type",
          files[0].type
        );
        const content = readFileSync(files[0].path);
        console.log(this.fm.filelist);
        await promises.writeFile(`E:/tmp/${files[0].name}`, content);
        this.fm.filelist.push({
          name: `${files[0].name}`,
          dir: `E:/tmp/${files[0].name}`,
        });
        console.log(this.fm.filelist);
      }
    });

    con.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
  }

}
