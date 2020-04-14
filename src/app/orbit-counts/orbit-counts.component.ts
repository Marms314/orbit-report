import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  satelliteTypes: string[] = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];

  constructor() { }

  ngOnInit() {
  }

  countSatelliteTypes(typeToCount: string, satellitesArray: Satellite[]) {
    let typeCount: number = 0;
    for (let i = 0; i < satellitesArray.length; i++) {
      if (satellitesArray[i].type === typeToCount) {
        typeCount++;
      }
    }
    return typeCount;
  }

}
