import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TN_STATE_INFO } from 'src/app/utils/mapdata';

@Component({
  selector: 'app-tn-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tn-map.component.html',
  styleUrls: ['./tn-map.component.scss']
})
export class TnMapComponent implements AfterViewInit {

  @ViewChild('tunisianMap') svg!: ElementRef<SVGElement>;
  STATES_IN_MAP: any[] = [];

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.STATES_IN_MAP = Array.from(this.svg.nativeElement.childNodes);
    this.setMapConfiguration();
  }


  setMapConfiguration() {

    for (let index = 0; index < (this.STATES_IN_MAP.length - 3); index++) {
      const svgAnchorElement = this.STATES_IN_MAP[index]; // outer anchor tag that holds a path
      const svgPathElement = svgAnchorElement['firstChild']; // actual path element
      const svgPathID = svgAnchorElement['firstChild'].id; // ID assogned to each path, used to reference state properties in imported object
      const STATE = TN_STATE_INFO[svgPathID]; // state properties imported from the global object

      // Setting dynamic links for each Anchor element
      this.renderer.setAttribute(svgAnchorElement, 'href', `https://www.google.com/search?q=${STATE?.name}`);
    }
  }
}
