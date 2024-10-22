import { Component, OnInit } from '@angular/core';
import { MapOlComponent, MapOlService, IMapControls } from '@dlr-eoc/map-ol';
import { LayerControlComponent } from '@dlr-eoc/layer-control';
import { MapStateService } from '@dlr-eoc/services-map-state';

import { OsmTileLayer, EocLitemap, BlueMarbleTile } from '@dlr-eoc/base-layers-raster';
import { LayersService } from '@dlr-eoc/services-layers';

@Component({
  selector: 'app-german-map',
  standalone: true,
  imports: [
    MapOlComponent,
    LayerControlComponent

  ],
  templateUrl: './german-map.component.html',
  styleUrl: './german-map.component.css'
})
export class GermanMapComponent implements OnInit {
controls: IMapControls = {
  attribution: true,
  scaleLine: true,
  zoom: true,
  crosshair: true,
  fullScreen: true,
  mousePosition: true,
  overviewMap: true,
  rotate: false
}

  constructor(
    public layerSvc: LayersService,
    public mapStateSvc: MapStateService,

  ) {}
  ngOnInit(): void {
    this.addBaselayers();
  }

  addBaselayers() {
    const layers = [
      new OsmTileLayer({
        visible: false
      }),
      new EocLitemap({
        visible: true
      }),
      new BlueMarbleTile({
        visible: false
      })
    ];

    layers.map(l => this.layerSvc.addLayer(l, 'Baselayers'));
}

}
