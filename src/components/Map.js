import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

class Mapbox extends React.Component {
  createMap() {
    const zoom = 12
    const iconSize = 0.5
    const coordinates = [121.4737, 31.2304]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: 'map',
      style: 'mapbox://styles/rkretch91/cjbrc6uk7041x2sqprzaabu5s',
      zoom: 10,
    })

    map.on('load', () => {
      map.loadImage('/pin.png', (error, image) => {
        if (error) {
          throw error
        }
        map.addLayer({
          id: 'points',
          layout: {
            'icon-image': 'pin',
            'icon-size': iconSize,
          },
          source: {
            data: {
              features: [
                {
                  geometry: {
                    coordinates: coordinates,
                    type: 'Point',
                  },
                  type: 'Feature',
                },
              ],
              type: 'FeatureCollection',
            },
            type: 'geojson',
          },
          type: 'symbol',
        })
      })
      const geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [121.473636, 31.223389]
          },
          properties: {
            title: 'K11',
            description: 'Shopping Mall in Shanghai',
            type: 'Shopping Mall',
            tags: ['Men\'s Room', 'Women\'s Room', 'Women\'s Room', 'Nursing Room', 'Family Room'],
            address: '300 Huai Hai Zhong Lu, Huai Hai Lu Dong Duan, Xuhui, Shanghai Shi, China, 200333',
            chinesetitle: 'K11',
            chinesetype: '商场',
            chinesetags: ['Men\'s Room', 'Women\'s Room', 'Women\'s Room', 'Nursing Room', 'Family Room'],
            chineseaddress: '上海市徐汇区淮海路东段淮海中路300号'

          }
        }, {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [121.474111, 31.223162]
          },
          properties: {
            title: 'XTD Plaza',
            description: 'Shopping Mall in Shanghai',
            type: 'Shopping Mall',
            tags: ['Women\'s Room', 'Nursing Room', 'Women\'s Changing Room'],
            address: '333 Huai hai Zhong Rd, Huai Hai Lu Dong Duan, Xuhui, Shanghai Shi, China, 200333',
            chinesetitle: '新天地广场',
            chinesetype: '商场',
            chinesetags: ['Women\'s Room', 'Nursing Room', 'Women\'s Changing Room'],
            chineseaddress: '上海市徐汇区淮海中路333号'

          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [121.805551, 31.151481]
          },
          properties: {
            title: 'Shanghai Pudong International Airport',
            description: 'International Airport in Shanghai',
            type: 'Airport',
            tags: ['Accessible Room', 'Family Room'],
            address: 'S1 Yingbin Expy, Pudong Xinqu, Shanghai Shi, China',
            chinesetitle: '上海浦东国际机场',
            chinesetype: '机场',
            chinesetags: ['Accessible Room', 'Family Room'],
            chineseaddress: '迎宾大道6000号'

          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [121.333353, 31.191759]
          },
          properties: {
            title: 'Shanghai Hongqiao International Airport',
            description: 'International Airport in Shanghai',
            type: 'Airport',
            tags: ['Nursing Room'],
            address: '2550 Hongqiao Rd, Changning, China, 201105',
            chinesetitle: '上海虹桥国际机场',
            chinesetype: '机场',
            chinesetags: ['Nursing Room'],
            chineseaddress: '虹桥路2550号'

          }
        }]
      };
      // add markers to map
      geojson.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML('<h3><strong>' + marker.properties.title + '</strong></h3><p>' + marker.properties.type + '</p>'))
          .addTo(map);
      });
    })
  }

  componentDidMount() {
    mapboxgl.accessToken ='pk.eyJ1IjoicmtyZXRjaDkxIiwiYSI6ImUyOWFkM2NkYzA3YzI1NDg5ZmE3OGQ3MmEyM2I2YTE0In0.646HwBqTKKNTe2Jt5Je1Qg'
    this.createMap()
  }

  render() {
    return (
      <React.Fragment>
        <div id={'map'} style={{width: '100%', height: 400, position: 'relative !important'}}>
          <button className="button" id="map-button">Learn more about our locations</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Mapbox;
