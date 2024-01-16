precision mediump float;

uniform float u_time;

varying vec2 v_uv;

#pragma glslify: cnoise = require(glsl-noise/simplex/3d);

void main() {
  v_uv = uv;

  float waveAmp = 0.2;
  float waveFreq = 1.2;
  vec3 result = position;
  result = vec3(position.x, position.y, position.z + sin((position.x + position.y + u_time) * waveFreq) * waveAmp);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(result, 1.0);
  // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}