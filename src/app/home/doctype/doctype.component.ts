import { Component, OnInit, Input } from "@angular/core";
import { exec } from "child_process";
import { FilemanageService } from "../../service/filemanage.service";
import { DirectoryconfService } from "../../service/directoryconf.service";

@Component({
  selector: "app-doctype",
  templateUrl: "./doctype.component.html",
  styleUrls: ["./doctype.component.css"],
})
export class DoctypeComponent implements OnInit {
  constructor(
    private fms: FilemanageService,
    private cf: DirectoryconfService
  ) {}

  ngOnInit(): void {}

  iconDir: string;

  @Input() id: number;
  @Input() name: string;
  @Input() dir: string;
  @Input() set type(t: string) {
    console.log(t);
    switch (t) {
      case "image/png":
        this.iconDir = "assets/doctype/PNG.png";
        break;
      case "video/avi":
        this.iconDir = "assets/doctype/AVI.png";
        break;
      default:
        this.iconDir = "assets/doctype/UNKNOWN.png";
        break;
    }
  }

  analyzeNow(): void {
    const pythonScript = this.cf.getFirstDir();
    const pythonProg = this.cf.getSecondDir();
    // 为了避免没有设置路径就运行，结果导致找不到路径
    this.cf.writeConfInRuntime();

    // TODO .pt .cfg .yaml dir changed
    exec(
      `${pythonScript}/python.exe ${pythonProg}/my_deepsort.py --VIDEO_PATH ${this.dir} --weights ${pythonProg}/weights/best4.pt --yolov3_cfg ${pythonProg}/yolo_tiny_utils/model/yolov3-tiny-1cls-se.cfg --config_deepsort ${pythonProg}/deep_sort/configs/deep_sort.yaml`,

      /**
       * @param err 为了避免意外退出，不抛出错误
       * @param stdout 可能不是一个单纯的JSON字符串，可能会导致 @function JSON.parse(stdout) 报错,
       * 调用 @function JSON.parse(stdout) 前需要先正则匹配
       */
      (err, stdout, stderr) => {
        // if (err) {
        //   throw err;
        // }
        let stdout1 = stdout.match(
          /\{"data":(\s)*\[({"totalTime":(\s)*"[0-9]+\.[0-9]+",(\s)*"fps":(\s)*"[0-9]+\.[0-9]+"}(,)*(\s)*)*\](,)(\s)*"avg":(\s)*"[0-9]+\.[0-9]+"\}/g
        )[0];
        // console.log(stdout1);
        // console.log(JSON.parse(stdout1));
        this.fms.pushMessage(this.id, JSON.parse(stdout1));
      }
    );
  }
}
