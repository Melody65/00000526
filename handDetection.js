function drawHandGesture(predictions, gesture) {
  if (predictions.length > 0) {
    const keypoints = predictions[0].scaledMesh;

    let position;
    if (gesture === "scissors") {
      // 額頭 (假設第9點為額頭更明顯的位置)
      position = keypoints[9];
    } else if (gesture === "rock") {
      // 左眼睛 (假設第130點為左眼睛更明顯的位置)
      position = keypoints[130];
    } else if (gesture === "paper") {
      // 右臉頰 (假設第356點為右臉頰更明顯的位置)
      position = keypoints[356];
    }

    if (position) {
      const [x, y] = position;
      noFill();
      stroke(255, 0, 0);
      strokeWeight(1.5); // 縮小線條粗細
      ellipse(x, y, 20, 20); // 縮小圓圈大小
    }
  }
}
