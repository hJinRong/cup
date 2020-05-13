export interface TimeAndFps {
  totalTime: string;
  fps: string;
}

export interface AnalyRes {
  data: TimeAndFps[];
  avg: string;
}
export interface FileItem {
  id?: number;
  name: string;
  dir: string;
  analyres?: AnalyRes[];
  type: string;
}
