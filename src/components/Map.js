import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import Unisex from '../images/icons/restroom-type-01.svg'
import Family from '../images/icons/restroom-type-02.svg'
import Accessible from '../images/icons/restroom-type-03.svg'
import Powder from '../images/icons/restroom-type-04.svg'
import Nursing from '../images/icons/restroom-type-05.svg'
import Moms from '../images/icons/restroom-type-06.svg'
import Male from '../images/icons/restroom-type-07.svg'
import Female from '../images/icons/restroom-type-08.svg'

class Mapbox extends React.Component {
  createMap() {
    const iconSize = 0.5
    const coordinates = [121.4737, 31.2304]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: 'map',
      style: 'mapbox://styles/rkretch91/cjbrc6uk7041x2sqprzaabu5s',
      zoom: 9,
    })
    map.scrollZoom.disable()

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
            address: '300 Huai Hai Zhong Lu, Huai Hai Lu Dong Duan, Xuhui, Shanghai Shi, China, 200333',
            chinesetitle: 'K11',
            chinesetype: '商场',
            chineseaddress: '上海市徐汇区淮海路东段淮海中路300号',
            rooms: [Female, Male, Nursing, Family]

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
            address: '333 Huai hai Zhong Rd, Huai Hai Lu Dong Duan, Xuhui, Shanghai Shi, China, 200333',
            chinesetitle: '新天地广场',
            chinesetype: '商场',
            chineseaddress: '上海市徐汇区淮海中路333号',
            rooms: [Female, Nursing]

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
            address: 'S1 Yingbin Expy, Pudong Xinqu, Shanghai Shi, China',
            chinesetitle: '上海浦东国际机场',
            chinesetype: '机场',
            chineseaddress: '迎宾大道6000号',
            rooms: [Accessible, Family]
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [121.569541, 31.225983]
          },
          properties: {
            title: 'Sinopec, Jinxiu Road',
            description: 'World-famous gas station in China',
            type: 'Gas Station',
            address: ' No.11 Jinxiu Road (near the Inner ring elevated road), Pudong District, Shanghai',
            chinesetitle: '中国石化加油站（锦绣路）',
            chinesetype: '加油站',
            chineseaddress: '上海浦东新区锦绣路11号',
            rooms: [Male, Female]
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [121.477188, 31.229672]
          },
          properties: {
            title: 'Peoples Square',
            description: 'Public Restroom in the heart of the city',
            type: 'Public Restroom',
            address: 'No. 10 Wusheng Road, near People’s Square, Huangpu District',
            chinesetitle: '上海人民广场景区',
            chinesetype: '公共卫生间',
            chineseaddress: '黄浦区人民广场，武胜路10号',
            rooms: [Male, Female, Nursing]
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [121.414515, 31.187487]
          },
          properties: {
            title: 'CNPC, Wuzhong Road',
            description: 'World-famous gas station in China',
            type: 'Gas Station',
            address: 'Wuzhong Road, Minhang, Shanghai',
            chinesetitle: '中国石油加油站（吴中路）',
            chinesetype: '加油站',
            chineseaddress: '上海市徐汇区吴中路',
            rooms: [Male, Female]
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
            address: '2550 Hongqiao Rd, Changning, China, 201105',
            chinesetitle: '上海虹桥国际机场',
            chinesetype: '机场',
            chineseaddress: '虹桥路2550号',
            rooms: [Nursing]
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [120.152393, 30.187239]
          },
          properties: {
            title: 'Intime Hangzhou',
            description: 'Shopping Mall in Hangzhou',
            type: 'Shopping Mall',
            address: '1204 Dongxin Ave, Binjiang Qu, Hangzhou Shi, Zhejiang Sheng, China',
            chinesetitle: '杭州银泰百货',
            chinesetype: '机场',
            chineseaddress: '浙江省杭州市滨江区东信大道1204号',
            rooms: [Female, Male, Family]
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [121.458522, 31.216515]
          },
          properties: {
            title: 'ICC (Shanghai International Commerce Center)',
            description: 'Office Building in Shanghai in Hangzhou',
            type: 'Office Building',
            address: '999 Huaihai Middle Rd，Xuhui District, Shanghai, China',
            chinesetitle: '上海环贸广场',
            chinesetype: '办公楼',
            chineseaddress: '上海市徐汇区淮海中路999号',
            rooms: [Moms]
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [121.551695, 31.225520]
          },
          properties: {
            title: 'Lilacs International Commercial Center',
            description: 'Shopping Mall in Shanghai',
            type: 'Shopping Mall',
            address: '858 Dingxiang Road, Pudong',
            chinesetitle: '丁香国际商业中心',
            chinesetype: '商场',
            chineseaddress: '上海市浦东新区丁香路858弄',
            rooms: [Unisex, Family, Accessible, Powder]
          }
        }]
      };
      // add markers to map
      geojson.features.forEach(function(marker) {

        // create a HTML element for each feature
        var el = document.createElement('div');
        el.className = 'marker';

        const roomType = () => {
          let images = ''
          marker.properties.rooms.forEach((room) => {
            let image = `<img src='${room}'/>`
            images += image
            console.log(images)
          })
          return images
        }




        // make a marker for each feature and add to the map
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3><strong>${marker.properties.chinesetitle}</strong></h3><h3><strong>${marker.properties.title}</strong></h3><p>(${marker.properties.chinesetype} ${marker.properties.type})</p>${roomType()}`))
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
          <button className={`button ${this.props.map}`} id="map-button">{this.props.language}</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Mapbox;
