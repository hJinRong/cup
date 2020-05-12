import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DirectoryconfService {
  private pythonInterpreterDir: string;
  private processProgramDir: string;

  constructor() {
    this.pythonInterpreterDir = "";
    this.processProgramDir = "";
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
}
