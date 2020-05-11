import { Component, OnInit, Input } from "@angular/core";
import { exec } from "child_process";
import { FilemanageService } from "../../service/filemanage.service";

@Component({
  selector: "app-doctype",
  templateUrl: "./doctype.component.html",
  styleUrls: ["./doctype.component.css"],
})
export class DoctypeComponent implements OnInit {
  constructor(public fms: FilemanageService) {}

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
    //FIXME the config args will change
    exec(
      `e: && cd E:/test01/venv/Scripts && python E:/test01/my_deepsort.py --VIDEO_PATH ${this.dir} --config_detection E:/test01/deep_sort/deep/checkpoint/ckpt.t7`,
      (err, stdout, stderr) => {
        if (err) {
          throw err;
        }
        let tmp: string[] = stdout.split("$");
        let out = "";
        for (let i of tmp) {
          out += i;
        }
        console.log(out);
        this.fms.pushMessage(this.id, out);
      }
    );
  }
}
