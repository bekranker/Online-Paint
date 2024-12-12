function MousePos(e, rect) {
  const tempPos = { x: 0, y: 0 };
  tempPos.x = e.clientX - rect.left;
  tempPos.y = e.clientY - rect.top;
  return tempPos;
}
