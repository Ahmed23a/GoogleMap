import { calculatePolygonCenter } from "../Utils/utils";

const egypt = ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
<rect width="900" height="600" fill="#000"/>
<rect width="900" height="200" fill="#fff"/>
<polygon points="0,200 900,200 900,400 0,400" fill="#C21E56"/>
</svg>
`

const libya = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
  <rect width="300" height="600" fill="#CE1126"/>
  <rect x="300" width="300" height="600" fill="#FCD116"/>
  <rect x="600" width="300" height="600" fill="#000"/>
</svg>
`

const sudan = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600">
  <rect width="900" height="200" fill="#000"/>
  <rect y="200" width="900" height="200" fill="#fff"/>
  <rect y="400" width="900" height="200" fill="#008000"/>
</svg>

`

const egyptFlag = `data:image/svg+xml,${encodeURIComponent(egypt)}`;
const libyaFlag = `data:image/svg+xml,${encodeURIComponent(libya)}`;
const sudanFlag = `data:image/svg+xml,${encodeURIComponent(sudan)}`;


export const Polygons = {
  egyptPolygon: {
    position: [
      { lat: 31.1996, lng: 29.8618 },
      { lat: 31.1996, lng: 32.9146 },
      { lat: 29.9959, lng: 32.9146 },
      { lat: 29.9959, lng: 29.8618 },
      { lat: 31.1996, lng: 29.8618 },
    ],
    // img: egypt,
    info: "Hello from Egypt Polygon",
    name: "Egypt",
    style: {
      fillColor: "#FF0000",
      strokeColor: "Gray",
      strokeWeight: 2,
    },
    center: function () {
      return calculatePolygonCenter(this.position)
    },
    icon: egyptFlag
  },
  libyaPolygon: {
    position: [
      { lat: 29.900000, lng: 9.900000 },
      { lat: 29.900000, lng: 15.100000 },
      { lat: 24.500000, lng: 15.100000 },
      { lat: 24.500000, lng: 9.900000 },
      { lat: 29.900000, lng: 9.900000 },
    ],
    // img: libya,
    info: "Hello from Libya Polygon",
    name: "Libya",
    style: {
      fillColor: "#00FF00",
      strokeColor: "Yellow",
      strokeWeight: 2,
    },
    center: function () {
      return calculatePolygonCenter(this.position)
    },
    icon: libyaFlag
  },
  sudanPolygon: {
    position: [
      { lat: 17.0, lng: 21.0 },
      { lat: 17.0, lng: 38.0 },
      { lat: 8.0, lng: 38.0 },
      { lat: 8.0, lng: 21.0 },
      { lat: 17.0, lng: 21.0 },
    ],
    // img: sudan,
    info: "Hello from Sudan Polygon",
    name: "Sudan",
    style: {
      fillColor: "#0000FF",
      strokeColor: "blue",
      strokeWeight: 2,
    },
    center: function () {
      return calculatePolygonCenter(this.position)
    },
    icon: sudanFlag
  },
};
