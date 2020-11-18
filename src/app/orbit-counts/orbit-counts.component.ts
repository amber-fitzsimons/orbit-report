import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  satelliteTypes = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];
  

  constructor() { }

  ngOnInit(): void {
  }

  getCountForType(type: string) {
    let count = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (type.toLowerCase() === this.satellites[i].type.toLowerCase()) {
        count = count + 1;
      }
    }
    return count;
  }

}
