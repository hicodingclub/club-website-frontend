import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-teach4life",
  templateUrl: "./teach4life.component.html",
  styleUrls: ["./teach4life.component.css"],
})
export class Teach4lifeComponent implements OnInit {
  showAbout: boolean = true;
  showTutors: boolean = false;
  showSubjects: boolean = false;

  constructor() {}

  ngOnInit() {}
  access_server_root_uri;

  public onClick(btn: string): void {
    if (btn === "tutors") {
      this.showTutors = true;
      this.showAbout = false;
      this.showSubjects = false;
    } else if (btn === "subjects") {
      this.showTutors = false;
      this.showAbout = false;
      this.showSubjects = true;
    } else if (btn === "about") {
      this.showTutors = false;
      this.showAbout = true;
      this.showSubjects = false;
    }
  }
}
