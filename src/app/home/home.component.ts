import { Component, OnInit } from "@angular/core";
import { readFileSync, promises } from "fs";
import { FilemanageService } from "../service/filemanage.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(public fm: FilemanageService) {}

  ngOnInit(): void {
  }
}
