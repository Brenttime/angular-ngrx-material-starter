import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

@Component({
  selector: 'anms-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  releaseButler = require('../../../../assets/release-butler.png').default;
  technologies = ["C#", "Azure", ".Net", "Git", "Node.js", "JavaScript", "Angular", 
  "HTML/CSS", "C", "Java", "Spring Boot", "Powershell", "Cucumber", 
  "Agile", "MongoDB", "Microsoft SQL", "Docker", "Docker-Compose"];

  constructor() {}

  ngOnInit() {}
}
