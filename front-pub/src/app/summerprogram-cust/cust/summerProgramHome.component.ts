import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-summerProgramHome",
  templateUrl: "./summerProgramHome.component.html",
  styleUrls: ["./summerProgramHome.component.css"],
})
export class SummerProgramHomeComponent implements OnInit {
  showAbout: boolean = true;
  showDetails: boolean = false;

  constructor() {}

  ngOnInit() {}
  access_server_root_uri;

  public onClick(btn: string): void {
    if (btn === "details") {
      this.showDetails = true;
      this.showAbout = false;
    } else if (btn === "about") {
      this.showDetails = false;
      this.showAbout = true;
    }
  }
}