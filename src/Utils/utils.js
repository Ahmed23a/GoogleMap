export const calculatePolygonCenter = (polygon) => {
    let area = 0;
    let centerX = 0;
    let centerY = 0;
  
    for (let i = 0; i < polygon.length - 1; i++) {
      const { lat: lat1, lng: lng1 } = polygon[i];
      const { lat: lat2, lng: lng2 } = polygon[i + 1];
      const f = lat1 * lng2 - lat2 * lng1;     
      area += f;
      centerX += (lat1 + lat2) * f;
      centerY += (lng1 + lng2) * f;
    }
    
    area /= 2;
    centerX /= (6 * area);
    centerY /= (6 * area);
  
    return { lat: centerX, lng: centerY };
  };