precision mediump float;

uniform sampler2D u_texture;

varying vec2 v_uv;

void main() {
  vec4 texture = texture2D(u_texture, v_uv);

  gl_FragColor = vec4(texture.rgb, 1.0);
  // gl_FragColor = vec4(texture.rgb, 1.0);
}