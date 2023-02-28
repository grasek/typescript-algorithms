function euclideanDistance(pointA, pointB) {
  const squaredDistances = pointA.map((coord, index) => {
    const diff = coord - pointB[index];
    return diff * diff;
  });
  const sumSquaredDistances = squaredDistances.reduce(
    (sum, squaredDistance) => sum + squaredDistance,
    0
  );
  return Math.sqrt(sumSquaredDistances);
}
