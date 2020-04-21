import { Component, OnInit, Input } from "@angular/core";
import { exec } from "child_process";
import { FilemanageService } from "../../service/filemanage.service";

@Component({
  selector: "app-doctype",
  templateUrl: "./doctype.component.html",
  styleUrls: ["./doctype.component.css"],
})
export class DoctypeComponent implements OnInit {
  constructor(public fms:FilemanageService) {}

  ngOnInit(): void {}

  iconDir: string;

  @Input() id: number;
  @Input() name: string;
  @Input() dir: string;
  @Input() set type(t: string) {
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
    //TODO Should replace the python file.
    exec(
      `e: && cd E:/test01/venv/Scripts && python E:/test01/my_deepsort.py --VIDEO_PATH ${this.dir} --config_detection E:/test01/deep_sort/deep/checkpoint/ckpt.t7`,
      (err, stdout, stderr) => {
        if (err) {
          throw err;
        }
        console.log(stdout);
        this.fms.pushMessage(this.id, stdout);
      }
    );
  }
}
