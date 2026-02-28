import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  ngOnInit() {}

  constructor(private translate: TranslateService) {}

  changeLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem("lang", lang);
  }
}
