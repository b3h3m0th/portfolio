precision mediump float;

#pragma glslify: cnoise = require(glsl-noise/classic/2d);

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform vec3 u_color1;
uniform vec3 u_color2;
uniform vec3 u_color_accent;
uniform float u_lines_blur;
uniform float u_noise;
uniform float u_offset_x;
uniform float u_offset_y;
uniform float u_lines_amount;
uniform float u_background_scale;
varying vec2 vUv;

#define PI 3.14159265359

float lines(vec2 uv, float offset) {
    float a = abs(0.5 * sin(uv.y * u_lines_amount) + offset * u_lines_blur);
    return smoothstep(0.0, u_lines_blur + offset * u_lines_blur, a);
}

mat2 rotate2d(float angle) {
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

vec3 fadeLine(vec2 uv, vec2 mouse2D,  vec3 col1, vec3 col2, vec3 col3) {
    mouse2D = (mouse2D + 1.0) * 0.5;
    float n1 = cnoise(uv); //(*|/ ) -> scale (+|-) -> offset
    float n2 = cnoise(uv + u_offset_x * 20.0);
    float n3 = cnoise(uv * 0.3 + u_offset_y * 10.0);
    float nFinal = mix(mix(n1, n2, mouse2D.x), n3, mouse2D.y);
    vec2 baseUv = vec2(nFinal + 2.05 ) * u_background_scale; // (+|-) -> frequency (*|/ ) -> lines count

    float basePattern = lines(baseUv, 1.0);
    float secondPattern = lines(baseUv, 0.25);

    vec3 baseColor = mix(col1, col2, basePattern);
    vec3 secondBaseColor = mix(baseColor, col3, secondPattern);

    return secondBaseColor;
}


void main() {
  vec2 mouse2D = vec2(u_mouse.x / 3000.0, u_mouse.y / 3000.0);

  vec2 uv = vUv;
  uv.y += u_offset_y;
  uv.x += u_offset_x;
  uv.x *= u_resolution.x / u_resolution.y; 

  vec3 col1 = fadeLine(uv, mouse2D, u_color1, u_color2, u_color_accent);
  vec3 finalCol = col1;

  vec2 uvRandom = vUv;
  uvRandom.y *= random(vec2(uvRandom.y, 0.5));
  finalCol.rgb += random(uvRandom) * u_noise;

  gl_FragColor = vec4(finalCol, 1.0);
}