<template>
  <div class="neu-decorative-container">
    <!-- Elementos decorativos Neumorphism muy marcado -->
    <div class="neu-element neu-float" style="--delay: 0s; --size: 40px; --color: var(--neu-accent);"></div>
    <div class="neu-element neu-float" style="--delay: 2s; --size: 60px; --color: var(--neu-mid);"></div>
    <div class="neu-element neu-float" style="--delay: 4s; --size: 30px; --color: var(--neu-text);"></div>

    <!-- Líneas decorativas Neumorphism muy marcado -->
    <div class="neu-line" style="--angle: 30deg; --length: 100px;"></div>
    <div class="neu-line" style="--angle: -30deg; --length: 80px;"></div>
    <div class="neu-line" style="--angle: 60deg; --length: 120px;"></div>

    <!-- Puntos decorativos Neumorphism muy marcado -->
    <div class="neu-dot" style="--x: 10%; --y: 20%;"></div>
    <div class="neu-dot" style="--x: 80%; --y: 60%;"></div>
    <div class="neu-dot" style="--x: 50%; --y: 80%;"></div>
  </div>
</template>

<style scoped>
.neu-decorative-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.neu-element {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: var(--color);
  border-radius: 30px;
  opacity: 0.3;
  animation: neuFloat 6s ease-in-out infinite;
  animation-delay: var(--delay);
  box-shadow: 20px 20px 60px rgba(163, 177, 202, 0.6), -20px -20px 60px rgba(255, 255, 255, 0.8);
}

.neu-element:nth-child(1) {
  top: 10%;
  left: 10%;
}

.neu-element:nth-child(2) {
  top: 60%;
  right: 15%;
}

.neu-element:nth-child(3) {
  bottom: 20%;
  left: 50%;
}

.neu-line {
  position: absolute;
  height: 3px;
  width: var(--length);
  background: linear-gradient(90deg, transparent, var(--neu-accent), transparent);
  transform: rotate(var(--angle));
  opacity: 0.2;
  border-radius: 2px;
  box-shadow: 5px 5px 15px rgba(163, 177, 202, 0.4), -5px -5px 15px rgba(255, 255, 255, 0.6);
}

.neu-line:nth-child(4) {
  top: 30%;
  left: 20%;
}

.neu-line:nth-child(5) {
  top: 70%;
  right: 30%;
}

.neu-line:nth-child(6) {
  bottom: 40%;
  left: 10%;
}

.neu-dot {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--neu-text);
  border-radius: 50%;
  opacity: 0.4;
  left: var(--x);
  top: var(--y);
  box-shadow: 3px 3px 9px rgba(163, 177, 202, 0.6), -3px -3px 9px rgba(255, 255, 255, 0.8);
}

@keyframes neuFloat {
  0%, 100% {
    transform: translateY(0px);
    box-shadow: 20px 20px 60px rgba(163, 177, 202, 0.6), -20px -20px 60px rgba(255, 255, 255, 0.8);
  }
  50% {
    transform: translateY(-15px);
    box-shadow: 30px 30px 90px rgba(163, 177, 202, 0.8), -30px -30px 90px rgba(255, 255, 255, 1);
  }
}
</style>
