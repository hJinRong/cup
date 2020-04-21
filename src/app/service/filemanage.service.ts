import { Injectable } from "@angular/core";
import { FileItem } from "../home/doctype/fileitem";
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FilemanageService {
  constructor() {}

  private list: FileItem[] = [];
  private filelist: BehaviorSubject<FileItem[]> = new BehaviorSubject<
    FileItem[]
  >(this.list);
  static id: number = 0;

  getFile(id: number | string) {
    return this.getFileList().pipe(
      map((filelist: FileItem[]) =>
        filelist.find((fileitem) => fileitem.id === +id)
      )
    );
  }

  getFileList() {
    return this.filelist;
  }

  newFile(i: FileItem) {
    this.list.push({
      id: FilemanageService.id++,
      name: i.name,
      dir: i.dir,
      analyres: [],
    });
    this.filelist.next(this.list);
  }

  pushMessage(id: number, msg: string) {
    // this.getFile(id).subscribe((item) => item.analyres.push(msg));
    for (let file of this.list) {
      if (file.id === id) {
        file.analyres.push(msg);
        break;
      }
    }
    this.filelist.next(this.list);
  }
}
