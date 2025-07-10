import React, { useState, useEffect, useRef, useCallback } from 'react';

// Constants
const BOARD_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 8, y: 10 },
  { x: 7, y: 10 },
];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEEDS = [200, 150, 100, 75, 50]; // Speed levels (ms per move)
const COLORS = {
  background: '#121212',
  board: '#1e1e1e',
  snake: '#4ade80',
  snakeHead: '#22d3ee',
  food: '#f87171',
  text: '#ffffff',
  gameOver: '#ef4444',
};

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * BOARD_SIZE),
  y: Math.floor(Math.random() * BOARD_SIZE),
});

const isPositionEqual = (pos1, pos2) => pos1.x === pos2.x && pos1.y === pos2.y;

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(getRandomPosition);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [speedLevel, setSpeedLevel] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const intervalRef = useRef(null);
  const directionRef = useRef(INITIAL_DIRECTION);

  // Generate food that doesn't overlap with snake
  const generateFood = useCallback(() => {
    let newFood;
    do {
      newFood = getRandomPosition();
    } while (snake.some(segment => isPositionEqual(segment, newFood)));
    return newFood;
  }, [snake]);

  // Reset game state
  const resetGame = useCallback(() => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    directionRef.current = INITIAL_DIRECTION;
    setFood(generateFood);
    setGameOver(false);
    setScore(0);
    setSpeedLevel(0);
    setIsPaused(false);
  }, [generateFood]);

  // Main game loop
  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      const currentDirection = directionRef.current;
      const newHead = {
        x: head.x + currentDirection.x,
        y: head.y + currentDirection.y,
      };

      // Collision detection
      if (
        newHead.x < 0 ||
        newHead.y < 0 ||
        newHead.x >= BOARD_SIZE ||
        newHead.y >= BOARD_SIZE ||
        prevSnake.some(segment => isPositionEqual(segment, newHead))
      ) {
        setGameOver(true);
        clearInterval(intervalRef.current);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];
      if (isPositionEqual(newHead, food)) {
        setFood(generateFood);
        setScore(prev => prev + 10);
        // Increase speed every 50 points
        if (score > 0 && score % 50 === 0 && speedLevel < GAME_SPEEDS.length - 1) {
          setSpeedLevel(prev => prev + 1);
          clearInterval(intervalRef.current);
          intervalRef.current = setInterval(moveSnake, GAME_SPEEDS[speedLevel + 1]);
        }
      } else {
        newSnake.pop();
      }
      return newSnake;
    });
  }, [food, gameOver, generateFood, isPaused, score, speedLevel]);

  // Handle keyboard input
  const changeDirection = useCallback((e) => {
    if (!gameStarted && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      setGameStarted(true);
    }

    const key = e.key;
    const currentDirection = directionRef.current;

    // Prevent 180-degree turns
    if (key === 'ArrowUp' && currentDirection.y === 0) {
      directionRef.current = { x: 0, y: -1 };
    } else if (key === 'ArrowDown' && currentDirection.y === 0) {
      directionRef.current = { x: 0, y: 1 };
    } else if (key === 'ArrowLeft' && currentDirection.x === 0) {
      directionRef.current = { x: -1, y: 0 };
    } else if (key === 'ArrowRight' && currentDirection.x === 0) {
      directionRef.current = { x: 1, y: 0 };
    } else if (key === ' ' || key === 'Spacebar') {
      setIsPaused(prev => !prev);
    }
  }, [gameStarted]);

  // Initialize game
  useEffect(() => {
    document.addEventListener('keydown', changeDirection);
    return () => {
      document.removeEventListener('keydown', changeDirection);
      clearInterval(intervalRef.current);
    };
  }, [changeDirection]);

  // Handle game speed changes
  useEffect(() => {
    if (gameStarted && !gameOver) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(moveSnake, GAME_SPEEDS[speedLevel]);
    }
    return () => clearInterval(intervalRef.current);
  }, [moveSnake, speedLevel, gameOver, gameStarted]);

  return (
    <div
      style={{
        background: COLORS.background,
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        color: COLORS.text,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Snake Game
      </h1>
      
      <div style={{ marginBottom: '1rem', display: 'flex', gap: '2rem' }}>
        <div>Score: <strong>{score}</strong></div>
        <div>Speed: <strong>{speedLevel + 1}/5</strong></div>
        {isPaused && <div style={{ color: COLORS.snakeHead }}>PAUSED</div>}
      </div>

      {gameOver && (
        <div style={{ 
          color: COLORS.gameOver, 
          marginBottom: '1rem',
          fontSize: '1.2rem',
          fontWeight: 'bold'
        }}>
          Game Over! Final Score: {score}
        </div>
      )}

      {!gameStarted && !gameOver && (
        <div style={{ marginBottom: '1rem' }}>
          Press any arrow key to start
        </div>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateRows: `repeat(${BOARD_SIZE}, ${CELL_SIZE}px)`,
          gridTemplateColumns: `repeat(${BOARD_SIZE}, ${CELL_SIZE}px)`,
          gap: '1px',
          background: COLORS.board,
          marginBottom: '1rem',
          border: `2px solid ${COLORS.board}`,
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        {Array.from({ length: BOARD_SIZE }).map((_, y) =>
          Array.from({ length: BOARD_SIZE }).map((_, x) => {
            const isSnakeHead = snake.length > 0 && isPositionEqual(snake[0], { x, y });
            const isSnakeBody = snake.some((segment, index) => 
              index > 0 && isPositionEqual(segment, { x, y })
            );
            const isFood = isPositionEqual(food, { x, y });
            
            return (
              <div
                key={`${x}-${y}`}
                style={{
                  width: `${CELL_SIZE}px`,
                  height: `${CELL_SIZE}px`,
                  backgroundColor: isSnakeHead
                    ? COLORS.snakeHead
                    : isSnakeBody
                    ? COLORS.snake
                    : isFood
                    ? COLORS.food
                    : COLORS.background,
                  borderRadius: isSnakeHead ? '4px' : isFood ? '50%' : '0',
                }}
              />
            );
          })
        )}
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => {
            if (gameOver) {
              resetGame();
            } else {
              setIsPaused(prev => !prev);
            }
          }}
          style={{
            padding: '0.5rem 1rem',
            background: isPaused || gameOver ? COLORS.snake : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          {gameOver ? 'Play Again' : isPaused ? 'Resume' : 'Pause'}
        </button>
        
        {!gameOver && (
          <button
            onClick={resetGame}
            style={{
              padding: '0.5rem 1rem',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Reset
          </button>
        )}
      </div>

      <div style={{ marginTop: '2rem', maxWidth: '400px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>How to Play</h2>
        <p style={{ marginBottom: '0.5rem' }}>Use arrow keys to change direction</p>
        <p style={{ marginBottom: '0.5rem' }}>Press Space to pause/resume</p>
        <p>Speed increases every 50 points</p>
      </div>
    </div>
  );
}