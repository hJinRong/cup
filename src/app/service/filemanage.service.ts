import { Injectable } from "@angular/core";
import { FileItem } from "../home/doctype/fileitem";
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FilemanageService {
  constructor() {}

  private list:FileItem[] = [];
  private filelist: BehaviorSubject<FileItem[]> = new BehaviorSubject<FileItem[]>(this.list);

  message: string[] = [];

  getFileList() {
    return this.filelist;
  }

  newFile(i: FileItem) {
    this.list.push(i);
    this.filelist.next(this.list);
  }
}
