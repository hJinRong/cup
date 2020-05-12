import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { DirectoryconfService } from "../../service/directoryconf.service";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
@Component({
  selector: "app-configpanel",
  templateUrl: "./configpanel.component.html",
  styleUrls: ["./configpanel.component.css"],
  animations: [
    trigger("toggleVisibility", [
      state(
        "open",
        style({
          top: 0,
        })
      ),
      state(
        "closed",
        style({
          top: "-210px",
        })
      ),
      transition("open => closed", [animate("0.6s")]),
      transition("closed => open", [animate("0.6s")]),
    ]),
  ],
})
export class ConfigpanelComponent implements OnInit {
  constructor(public dc: DirectoryconfService) {}

  ngOnInit(): void {
    this.pythonInterpreter.setValue(this.dc.getFirstDir());
    this.processProg.setValue(this.dc.getSecondDir());
  }

  pythonInterpreter = new FormControl("");
  processProg = new FormControl("");

  isOpen = true;
  get direction() {
    return this.isOpen
      ? "assets/direction/up.png"
      : "assets/direction/down.png";
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  updatePythonInterpreterDir(dir: string) {
    this.dc.updatePythonInterpreterDir(dir);
  }

  updateProcessProjDir(dir: string) {
    this.dc.updateProcessProgramDir(dir);
  }

  saveAll() {
    this.updatePythonInterpreterDir(this.pythonInterpreter.value);
    this.updateProcessProjDir(this.processProg.value);
    this.toggle();
  }
}
