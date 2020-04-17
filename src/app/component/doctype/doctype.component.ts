import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-doctype",
  templateUrl: "./doctype.component.html",
  styleUrls: ["./doctype.component.css"],
})
export class DoctypeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  iconDir: string;

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
    }
  }

  
}
