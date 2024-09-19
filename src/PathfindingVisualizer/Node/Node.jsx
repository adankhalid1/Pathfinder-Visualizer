import React from 'react';
import './Node.css';

const Node = ({
  col,
  isFinish,
  isStart,
  isWall,
  isVisited,
  onMouseDown,
  onMouseEnter,
  onMouseUp,
  row,
}) => {
  // Dynamically set the class based on the node state
  const extraClassName = isFinish
    ? 'node-finish'
    : isStart
    ? 'node-start'
    : isWall
    ? 'node-wall'
    : isVisited
    ? 'node-visited'
    : '';  // Reset to default if none of the above conditions are met

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}  // Dynamically assign CSS class
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}></div>
  );
};

export default Node;
