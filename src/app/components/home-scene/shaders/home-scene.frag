precision mediump float;

uniform float u_time;
uniform sampler2D u_texture;

varying vec2 v_uv;

void main() {
  // vec3 color = vec3(1.0);
  vec4 texture = texture2D(u_texture, v_uv);

  if(texture.a != 1.0)
  {
    discard;
  }

  vec4 result = texture / 1.2; // darken texture

  gl_FragColor = vec4(result.rgb / 1.1, 1.0);
  // gl_FragColor = vec4(color, 1.0);
}