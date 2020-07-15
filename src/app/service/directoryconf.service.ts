import { Injectable } from "@angular/core";
import { writeFile } from "fs";

@Injectable({
  providedIn: "root",
})
export class DirectoryconfService {
  private pythonInterpreterDir: string;
  private processProgramDir: string;

  //FIXME remove the default config before build
  constructor() {
    this.pythonInterpreterDir = "E:\\test01\\venv\\Scripts";
    this.processProgramDir = "C:\\Users\\Administrator\\Desktop\\test01";
  }

  updatePythonInterpreterDir(dir: string) {
    this.pythonInterpreterDir = dir;
  }

  updateProcessProgramDir(dir: string) {
    this.processProgramDir = dir;
  }

  getFirstDir() {
    return this.pythonInterpreterDir;
  }

  getSecondDir() {
    return this.processProgramDir;
  }

  writeConfInRuntime() {
    let confTempl = `DEEPSORT:
  REID_CKPT: "${this.getSecondDir().replace(
    /\\/gi,
    "/"
  )}/deep_sort/deep/checkpoint/ckpt.t7"
  MAX_DIST: 0.2
  MIN_CONFIDENCE: 0.3
  NMS_MAX_OVERLAP: 0.5
  MAX_IOU_DISTANCE: 0.7
  MAX_AGE: 70
  N_INIT: 3
  NN_BUDGET: 100`;
    writeFile(
      `${this.getSecondDir()}/deep-sort/configs/deep_sort.yaml`,
      confTempl,
      (err) => {
        if (err) {
          throw err;
        }
      }
    );
  }
}
