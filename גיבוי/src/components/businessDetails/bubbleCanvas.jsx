import React, { useLayoutEffect, useRef } from 'react';
import logo from "../../assets/images/logo.gif";

const BubbleCanvas = () => {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let bubbles = [];

    function setCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      bubbles.length = Math.floor(canvas.width * 1.25);
      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i] = new Bubble();
      }
    }

    function Bubble() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height;
      this.radius = Math.random() * 3 + 0.5;
      this.color = `rgb(255 255 255 / ${(Math.round(Math.random() * 30) + 20)}%)`;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = -Math.random() * 2 - 0.5;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((bubble) => {
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;
        if (bubble.y < -bubble.radius) {
          bubble.y = canvas.height + bubble.radius;
          bubble.x = Math.random() * canvas.width;
        }
        if (bubble.x < 0 || bubble.x > canvas.width) {
          bubble.x = bubble.x < 0 ? 0 : canvas.width;
          bubble.vx *= -1;
        }
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = bubble.color;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", setCanvas);
    setCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvas);
    };
  }, []);

  return (
    <>
      <img src={logo} alt="Logo" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />  
      <canvas ref={canvasRef} style={{ display: 'block', background: 'linear-gradient(#ffbb00, #cb7604) no-repeat center', backgroundSize: '100%', height: '100vh', width: '100%', overflow: 'hidden', padding: 0, margin: 0, border: 0 }}>   
      </canvas>
    </>
  );
}

export default BubbleCanvas;
