import { TestBed } from "@angular/core/testing";

import { DirectoryconfService } from "./directoryconf.service";

describe("DirectoryconfService", () => {
  let service: DirectoryconfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectoryconfService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("generate conf template", () => {
    service = new DirectoryconfService();
    expect(service.writeConfInRuntime());
  });
});
