precision mediump float;

uniform vec2 u_resolution;
in vec3 vPosition;

#pragma glslify: snoise2 = require(glsl-noise/simplex/2d);

float fbmPerlinNoise(vec2 uv) {
  float fbmNoise = 0.0;
  float amplitude = 1.0;
  float octaves = 5.0;

  for(float i = 0.0; i < octaves; i++) {
    fbmNoise = fbmNoise + snoise2(uv) * amplitude;
    amplitude = amplitude * 0.5;
    uv = uv * 0.2;
  }

  return fbmNoise;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  uv = gl_FragCoord.xy / u_resolution.y;

  uv = uv * 40.0;

  vec3 color = vec3(0.0);

  // float noise = snoise2(vPosition);
  float fbmNoise = fbmPerlinNoise(uv);
  color = vec3(fbmNoise);

  gl_FragColor = vec4(color, 1.0);
}