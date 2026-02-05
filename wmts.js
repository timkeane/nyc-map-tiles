    import View from 'ol/View';
    import WMTSCapabilities from 'ol/format/WMTSCapabilities';
    import {optionsFromCapabilities} from 'ol/source/WMTS';
    import Source from 'ol/source/WMTS';
    import Layer from 'ol/layer/Tile';
    import Map from 'ol/Map';

		const view = new View({
			center: [-8235252, 4969073],
			minZoom: 8,
			maxZoom: 19,
			zoom: 10
		});

		const capabilities = new WMTSCapabilities();

		fetch('https://finder.nyc.gov/geoserver/gwc/service/wmts?REQUEST=GetCapabilities').then(function(response){
			return response.text();
		}).then(function(text){
			const result = capabilities.read(text);

			const baseOptions = optionsFromCapabilities(result, {
				layer: 'carto:basemap',
				matrixSet: 'EPSG:900913'
			});

			const labelOptions = optionsFromCapabilities(result, {
				layer: 'carto:label',
				matrixSet: 'EPSG:900913'
			});

			const baseLayer = new Layer({
				source: new Source(baseOptions)
			});

			const labelLayer = new Layer({
				source: new Source(labelOptions)
			});

			const map = new Map({
				target: 'map', /* The id of the DOM element that will contain the map */
				view: view,
				layers: [baseLayer, labelLayer]
			});
		});
