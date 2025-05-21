import { LatLng, LatLngBounds } from "leaflet";

class GpxManager {
  basicGpxParse(gpx: Document) {
    const waypoints = gpx.getElementsByTagName("trkpt");
    let positions: LatLng[] = [];

    for (let i = 0; i < waypoints.length; i++) {
      positions.push(
        new LatLng(
          parseFloat(waypoints[i].getAttribute("lat") as string),
          parseFloat(waypoints[i].getAttribute("lon") as string)
        )
      );
    }
    const bounds = new LatLngBounds(positions);
    return { positions, bounds };
  }
}
export default new GpxManager();
