precision mediump float;

uniform float u_time;
uniform sampler2D u_texture;

varying vec2 v_uv;

void main() {
  vec3 texture = texture2D(u_texture, v_uv).rgb;
  vec3 color = vec3(1.0);

  gl_FragColor = vec4(texture, 1.0);
  // gl_FragColor = vec4(color, 1.0);
}