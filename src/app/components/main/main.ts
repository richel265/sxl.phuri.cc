import { Component } from "@angular/core";
import { Title } from "../title/title";

@Component({
  selector: "app-main",
  imports: [Title],
  templateUrl: "./main.html",
  styleUrl: "./main.scss",
})
export class Main {}
