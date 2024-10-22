import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { NolTileLayerComponent } from 'ngx-ol-library/layer/tile';
import { NolMapComponent } from 'ngx-ol-library/map';
import { NolOSMSourceComponent } from 'ngx-ol-library/source/osm';
import { NolViewComponent } from 'ngx-ol-library/view';
import { fromLonLat } from 'ol/proj';
import View from 'ol/View';
import { DataService } from '../../data/data.service';
import GeoJSON from 'ol/format/GeoJSON.js';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Style from 'ol/style/Style';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { NolVectorSourceComponent } from 'ngx-ol-library/source/vector';
import { NolVectorLayerComponent } from 'ngx-ol-library/layer/vector';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-cn-map',
  standalone: true,
  imports: [
    NolMapComponent,
    NolViewComponent,
    NolTileLayerComponent,
    NolOSMSourceComponent,
    NolVectorSourceComponent,
    NolVectorLayerComponent,
    AsyncPipe
  ],
  templateUrl: './cn-map.component.html',
  styleUrl: './cn-map.component.css'
})
export class CnMapComponent implements OnInit, AfterViewInit {

  @ViewChild(NolMapComponent) readonly map!: NolMapComponent;

  officeCoords = fromLonLat([33.5066, 44.6019]);  // Office coordinates in Sevastopol

  readonly format = new GeoJSON();
  private data = inject(DataService);
  readonly url = this.data?.getData();

  view = new View({
    center: this.officeCoords,
    zoom: 16,
  })

  constructor(
    // private data: DataService
  ) {}

  ngAfterViewInit(): void {
    console.log(this.map.getInstance().getView().getZoom())
  }

  ngOnInit(): void {
    this.data.getData().subscribe(console.log);
  }

  addPolygonsToMap(geojsonData: GeoJSON) {
    const vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(geojsonData, {
        featureProjection: 'EPSG:3857',
      }),
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        fill: new Fill({
          color: 'rgba(0, 150, 255, 0.5)',
        }),
        stroke: new Stroke({
          color: '#0000ff',
          width: 2,
        }),
      }),
    });

    // this.map.getInstance().getOverviewMap().addLayer(vectorLayer);
  }
}
