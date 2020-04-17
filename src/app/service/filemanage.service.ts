import { Injectable } from '@angular/core';
import { FileItem } from "../component/doctype/fileitem";

@Injectable({
  providedIn: "root",
})
export class FilemanageService {
  constructor() {}

  filelist: FileItem[] = [
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
    { name: "aaa", dir: "E:/test01/video.avi" },
  ];
}
