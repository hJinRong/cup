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
  constructor(public fms: FilemanageService, public cf: DirectoryconfService) {}

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
    //FIXME the config args will change, video path
    exec(
      `${pythonScript}/python.exe ${pythonProg}/my_deepsort.py --VIDEO_PATH ${this.dir} --weights ${pythonProg}/best4.pt --yolov3_cfg ${pythonProg}/yolov3-tiny-1cls-se.cfg --config_deepsort ${pythonProg}/configs/deep_sort.yaml`,
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
