    import View from 'ol/View';
    import XYZ from 'ol/source/XYZ';
    import Layer from 'ol/layer/Tile';
    import Map from 'ol/Map';

    const key = import.meta.env.VITE_KEY;

		const view = new View({
			center: [-8235252, 4969073],
			minZoom: 8,
			maxZoom: 19,
			zoom: 10
		});
		
		const baseLayer = new Layer({
			extent: [-8453323, 4774561, -7983695, 5165920],
			source: new XYZ({
				url: `https://api.nyc.gov/geoserver/gwc/service/tms/1.0.0/carto%3Abasemap@EPSG%3A900913@jpeg/{z}/{x}/{-y}.jpg?Key=${key}`
			})
		});
		
		const labelLayer = new Layer({
			extent: [-8268000, 4870900, -8005000, 5055500],
			source: new XYZ({
				url: `https://api.nyc.gov/geoserver/gwc/service/tms/1.0.0/carto%3Alabel@EPSG%3A900913@png8/{z}/{x}/{-y}.png8?Key=${key}`
			})
		});
		
		const map = new Map({
			target: 'map', /* The id of the DOM element that will contain the map */
			view: view,
			layers: [baseLayer, labelLayer]
		});
