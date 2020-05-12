import { ConfigpanelComponent } from "./configpanel.component";
import { DirectoryconfService } from "../../service/directoryconf.service";

describe("ConfigpanelComponent", () => {
  let component: ConfigpanelComponent;
  let service: DirectoryconfService;

  it("save value right or not", () => {
    service = new DirectoryconfService();
    component = new ConfigpanelComponent(service);

    component.pythonInterpreter.setValue("pythondir");
    component.processProg.setValue("ppdir");
    component.saveAll();
    expect(service.getFirstDir()).toBe("pythondir");
    expect(service.getSecDir()).toBe("ppdir");
  });
});
