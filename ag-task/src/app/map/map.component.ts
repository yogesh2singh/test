import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Marker } from './Marker.interface';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

declare let L;
declare let tomtom: any;
declare var ol: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html'
})

export class MapComponent implements OnInit {
    gMap: any;
    // google maps zoom level
    zoom: number = 8;
    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;
    markers: Marker[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true
        }
    ];

clickedMarker(label: string, index: number) {
    console.log(`clicked the Marker: ${label || index}`)
}

mapClicked($event: MouseEvent) {
    this.markers.push({
        lat: $event.coords.lat,
        lng: $event.coords.lng,
        draggable: true
    });
}

markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
}

ngOnInit() {
    this.gMap = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([73.8567, 18.5204]),
            zoom: 8
        })
    });
}

private mapFunction() {
    const ttMap = tomtom.L.map('map', {
        key: 'dOdlUCetvrHT9AcqPc9flzp8Tx6PU2zp',
        basePath: '/assets/sdk',
        center: [52.360306, 4.876935],
        zoom: 15,
        source: 'vector'
    });
}
  }