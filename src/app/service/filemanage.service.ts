import { Injectable } from "@angular/core";
import { FileItem } from "../home/doctype/fileitem";

@Injectable({
  providedIn: "root",
})
export class FilemanageService {
  constructor() {}

  filelist: FileItem[] = [];

  message: string[] = [];
}
