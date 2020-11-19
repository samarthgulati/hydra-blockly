// blend modes
// https://www.shadertoy.com/view/XdS3RW
// https://www.w3.org/TR/compositing-1
var blendmodes_glsl_fns = [
  // vec3 darken( vec3 s, vec3 d )
  // {
  // 	return min(s,d);
  // }
  {
    name: "darken",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(min(_c0a,_c1a), _c0.a);`
  },

  // vec3 multiply( vec3 s, vec3 d )
  // {
  // 	return s*d;
  // }
  {
    name: "multiply",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a * _c1a, _c0.a);`
  },

  // vec3 colorBurn( vec3 s, vec3 d )
  // {
  // 	return 1.0 - (1.0 - d) / s;
  // }
  {
    name: "colorBurn",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(1.0 - (1.0 - _c1a) / _c0a, _c0.a);`
  },

  // vec3 linearBurn( vec3 s, vec3 d )
  // {
  // 	return s + d - 1.0;
  // }
  {
    name: "linearBurn",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a + _c1a - 1.0, _c0.a);`
  },

  // vec3 darkerColor( vec3 s, vec3 d )
  // {
  // 	return (s.x + s.y + s.z < d.x + d.y + d.z) ? s : d;
  // }
  {
    name: "darkerColor",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return (_c0a.r + _c0a.g + _c0a.b < _c1a.r + _c1a.g + _c1a.b) ? vec4(_c0a, _c0.a) : vec4(_c1a, _c0.a);`
  },

  // vec3 lighten( vec3 s, vec3 d )
  // {
  // 	return max(s,d);
  // }
  {
    name: "lighten",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(max(_c0a,_c1a), _c0.a);`
  },

  // vec3 screen( vec3 s, vec3 d )
  // {
  // 	return s + d - s * d;
  // }
  {
    name: "screen",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a + _c1a - _c0a * _c1a, _c0.a);`
  },

  // vec3 colorDodge( vec3 s, vec3 d )
  // {
  // 	return d / (1.0 - s);
  // }
  {
    name: "colorDodge",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return _c0a == vec3(0.) ? vec4(0.) : _c1a == vec3(1.) ? vec4(1.) : vec4(_c1a / (1.0 - _c0a), _c0.a);`
  },

  // vec3 linearDodge( vec3 s, vec3 d )
  // {
  // 	return s + d;
  // }
  {
    name: "linearDodge",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a + _c1a, _c0.a);`
  },

  // vec3 lighterColor( vec3 s, vec3 d )
  // {
  // 	return (s.x + s.y + s.z > d.x + d.y + d.z) ? s : d;
  // }
  {
    name: "lighterColor",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return (_c0a.r + _c0a.g + _c0a.b > _c1a.r + _c1a.g + _c1a.b) ? vec4(_c0a, _c0.a) : vec4(_c1a, _c0.a);`
  },

  // float overlay( float s, float d )
  // {
  // 	return (d < 0.5) ? 2.0 * s * d : 1.0 - 2.0 * (1.0 - s) * (1.0 - d);
  // }
  // vec3 overlay( vec3 s, vec3 d )
  // {
  // 	vec3 c;
  // 	c.x = overlay(s.x,d.x);
  // 	c.y = overlay(s.y,d.y);
  // 	c.z = overlay(s.z,d.z);
  // 	return c;
  // }
  {
    name: "overlay",
    type: "combine",
    inputs: [],
    glsl: `   vec4 o;
   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   o.r = (_c1a.r < 0.5) ? 2.0 * _c0a.r * _c1a.r : 1.0 - 2.0 * (1.0 - _c0a.r) * (1.0 - _c1a.r);
 	 o.g = (_c1a.g < 0.5) ? 2.0 * _c0a.g * _c1a.g : 1.0 - 2.0 * (1.0 - _c0a.g) * (1.0 - _c1a.g);
   o.b = (_c1a.b < 0.5) ? 2.0 * _c0a.b * _c1a.b : 1.0 - 2.0 * (1.0 - _c0a.b) * (1.0 - _c1a.b);
   o.a = _c0.a;
 	 return o;`
  },

  // float softLight( float s, float d )
  // {
  // 	return (s < 0.5) ? d - (1.0 - 2.0 * s) * d * (1.0 - d)
  // 		: (d < 0.25) ? d + (2.0 * s - 1.0) * d * ((16.0 * d - 12.0) * d + 3.0)
  // 					 : d + (2.0 * s - 1.0) * (sqrt(d) - d);
  // }
  // vec3 softLight( vec3 s, vec3 d )
  // {
  // 	vec3 c;
  // 	c.x = softLight(s.x,d.x);
  // 	c.y = softLight(s.y,d.y);
  // 	c.z = softLight(s.z,d.z);
  // 	return c;
  // }
  {
    name: "softLight",
    type: "combine",
    inputs: [],
    glsl: `   vec4 c;
   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   c.r = (_c0a.r < 0.5) ? _c1a.r - (1.0 - 2.0 * _c0a.r) * _c1a.r * (1.0 - _c1a.r) : (_c1a.r < 0.25) ? _c1a.r * ((16.0 * _c1a.r - 12.0) * _c1a.r + 4.0) : _c1a.r + (2.0 * _c0a.r - 1.0) * (sqrt(_c1a.r) - _c1a.r);
   c.g = (_c0a.g < 0.5) ? _c1a.g - (1.0 - 2.0 * _c0a.g) * _c1a.g * (1.0 - _c1a.g) : (_c1a.g < 0.25) ? _c1a.g * ((16.0 * _c1a.g - 12.0) * _c1a.g + 4.0) : _c1a.g + (2.0 * _c0a.g - 1.0) * (sqrt(_c1a.g) - _c1a.g);
   c.b = (_c0a.b < 0.5) ? _c1a.b - (1.0 - 2.0 * _c0a.b) * _c1a.b * (1.0 - _c1a.b) : (_c1a.b < 0.25) ? _c1a.b * ((16.0 * _c1a.b - 12.0) * _c1a.b + 4.0) : _c1a.b + (2.0 * _c0a.b - 1.0) * (sqrt(_c1a.b) - _c1a.b);
   c.a = _c0.a;
   //(_c1a.a < 0.5) ? _c0a.a - (1.0 - 2.0 * _c1a.a) * _c0a.a * (1.0 - _c0a.a) : (_c0a.a < 0.25) ? _c0a.a * ((16.0 * _c0a.a - 12.0) * _c0a.a + 4.0) : _c0a.a + (2.0 * _c1a.a - 1.0) * (sqrt(_c0a.a) - _c0a.a);
   return c;`
  },

  // float hardLight( float s, float d )
  // {
  // 	return (s < 0.5) ? 2.0 * s * d : 1.0 - 2.0 * (1.0 - s) * (1.0 - d);
  // }

  // vec3 hardLight( vec3 s, vec3 d )
  // {
  // 	vec3 c;
  // 	c.x = hardLight(s.x,d.x);
  // 	c.y = hardLight(s.y,d.y);
  // 	c.z = hardLight(s.z,d.z);
  // 	return c;
  // }

  {
    name: "hardLight",
    type: "combine",
    inputs: [],
    glsl: `   vec4 c;
   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   c.r = (_c0a.r < 0.5) ? 2.0 * _c0a.r * _c1a.r : 1.0 - 2.0 * (1.0 - _c0a.r) * (1.0 - _c1a.r);
   c.g = (_c0a.g < 0.5) ? 2.0 * _c0a.g * _c1a.g : 1.0 - 2.0 * (1.0 - _c0a.g) * (1.0 - _c1a.g);
   c.b = (_c0a.b < 0.5) ? 2.0 * _c0a.b * _c1a.b : 1.0 - 2.0 * (1.0 - _c0a.b) * (1.0 - _c1a.b);
   c.a = _c0.a;
   return c;`
  },

  // float vividLight( float s, float d )
  // {
  // 	return (s < 0.5) ? 1.0 - (1.0 - d) / (2.0 * s) : d / (2.0 * (1.0 - s));
  // }

  // vec3 vividLight( vec3 s, vec3 d )
  // {
  // 	vec3 c;
  // 	c.x = vividLight(s.x,d.x);
  // 	c.y = vividLight(s.y,d.y);
  // 	c.z = vividLight(s.z,d.z);
  // 	return c;
  // }

  {
    name: "vividLight",
    type: "combine",
    inputs: [],
    glsl: `   vec4 c;
   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   c.r = (_c0a.r < 0.5) ? 1.0 - (1.0 - _c1a.r) / (2.0 * _c0a.r) : _c1a.r / (2.0 * (1.0 - _c0a.r));
   c.g = (_c0a.g < 0.5) ? 1.0 - (1.0 - _c1a.g) / (2.0 * _c0a.g) : _c1a.g / (2.0 * (1.0 - _c0a.g));
   c.b = (_c0a.b < 0.5) ? 1.0 - (1.0 - _c1a.b) / (2.0 * _c0a.b) : _c1a.b / (2.0 * (1.0 - _c0a.b));
   c.a = _c0.a;
   return c;`
  },

  // vec3 linearLight( vec3 s, vec3 d )
  // {
  // 	return 2.0 * s + d - 1.0;
  // }

  {
    name: "linearLight",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(2.0 * _c0a + _c1a - 1.0, _c0.a);`
  },

  // float pinLight( float s, float d )
  // {
  // 	return (2.0 * s - 1.0 > d) ? 2.0 * s - 1.0 : (s < 0.5 * d) ? 2.0 * s : d;
  // }

  // vec3 pinLight( vec3 s, vec3 d )
  // {
  // 	vec3 c;
  // 	c.x = pinLight(s.x,d.x);
  // 	c.y = pinLight(s.y,d.y);
  // 	c.z = pinLight(s.z,d.z);
  // 	return c;
  // }

  {
    name: "pinLight",
    type: "combine",
    inputs: [],
    glsl: `   vec4 c;
   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   c.r = (2.0 * _c0a.r - 1.0 > _c1a.r) ? 2.0 * _c0a.r - 1.0 : (_c0a.r < 0.5 * _c1a.r) ? 2.0 * _c0a.r : _c1a.r;
   c.g = (2.0 * _c0a.g - 1.0 > _c1a.g) ? 2.0 * _c0a.g - 1.0 : (_c0a.g < 0.5 * _c1a.g) ? 2.0 * _c0a.g : _c1a.g;
   c.b = (2.0 * _c0a.b - 1.0 > _c1a.b) ? 2.0 * _c0a.b - 1.0 : (_c0a.b < 0.5 * _c1a.b) ? 2.0 * _c0a.b : _c1a.b;
   c.a = _c0.a;
   return c;`
  },

  // vec3 hardMix( vec3 s, vec3 d )
  // {
  // 	return floor(s + d);
  // }

  {
    name: "hardMix",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(floor(_c0a + _c1a), _c0.a);`
  },

  // vec3 difference( vec3 s, vec3 d )
  // {
  // 	return abs(d - s);
  // }

  {
    name: "difference",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(abs(_c1a - _c0a), _c0.a);`
  },

  // vec3 exclusion( vec3 s, vec3 d )
  // {
  // 	return s + d - 2.0 * s * d;
  // }
  {
    name: "exclusion",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a + _c1a - 2.0 * _c0a * _c1a, _c0.a);`
  },

  // vec3 subtract( vec3 s, vec3 d )
  // {
  // 	return s - d;
  // }
  {
    name: "subtract",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a - _c1a, _c0.a);`
  },

  // vec3 divide( vec3 s, vec3 d )
  // {
  // 	return s / d;
  // }
  {
    name: "divide",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   return vec4(_c0a / _c1a, _c0.a);`
  },

  // //	rgb<-->hsv functions by Sam Hocevar
  // //	http://lolengine.net/blog/2013/07/27/rgb-to-hsv-in-glsl
  // vec3 rgb2hsv(vec3 c)
  // {
  // 	vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  // 	vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  // 	vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  // 	float d = q.x - min(q.w, q.y);
  // 	float e = 1.0e-10;
  // 	return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  // }

  // vec3 hsv2rgb(vec3 c)
  // {
  // 	vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  // 	vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  // 	return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  // }

  // vec3 hue( vec3 s, vec3 d )
  // {
  // 	d = rgb2hsv(d);
  // 	d.x = rgb2hsv(s).x;
  // 	return hsv2rgb(d);
  // }
  {
    name: "hueBlend",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   _c1a = _rgbToHsv(_c1a);
   _c1a.x = _rgbToHsv(_c0a).x;
   return vec4(_hsvToRgb(_c1a), _c0.a);`
  },

  // vec3 color( vec3 s, vec3 d )
  // {
  // 	s = rgb2hsv(s);
  // 	s.z = rgb2hsv(d).z;
  // 	return hsv2rgb(s);
  // }

  {
    name: "colorBlend",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   _c0a = _rgbToHsv(_c0a);
   _c0a.z = _rgbToHsv(_c1a).z;
   return vec4(_hsvToRgb(_c0a), _c0.a);`
  },

  // vec3 saturation( vec3 s, vec3 d )
  // {
  // 	d = rgb2hsv(d);
  // 	d.y = rgb2hsv(s).y;
  // 	return hsv2rgb(d);
  // }

  {
    name: "saturationBlend",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   _c1a = _rgbToHsv(_c1a);
   _c1a.y = _rgbToHsv(_c0a).y;
   return vec4(_hsvToRgb(_c1a), _c0.a);`
  },

  // vec3 luminosity( vec3 s, vec3 d )
  // {
  // 	float dLum = dot(d, vec3(0.3, 0.59, 0.11));
  // 	float sLum = dot(s, vec3(0.3, 0.59, 0.11));
  // 	float lum = sLum - dLum;
  // 	vec3 c = d + lum;
  // 	float minC = min(min(c.x, c.y), c.z);
  // 	float maxC = max(max(c.x, c.y), c.z);
  // 	if(minC < 0.0) return sLum + ((c - sLum) * sLum) / (sLum - minC);
  // 	else if(maxC > 1.0) return sLum + ((c - sLum) * (1.0 - sLum)) / (maxC - sLum);
  // 	else return c;
  // }
  {
    name: "luminosityBlend",
    type: "combine",
    inputs: [],
    glsl: `   vec3 _c0a = _c0.rgb * _c0.a;
   vec3 _c1a = _c1.rgb * _c1.a;
   float dLum = dot(_c1a, vec3(0.3, 0.59, 0.11));
	 float sLum = dot(_c0a, vec3(0.3, 0.59, 0.11));
	 float lum = sLum - dLum;
	 vec3 c = _c1a + lum;
	 float minC = min(min(c.x, c.y), c.z);
	 float maxC = max(max(c.x, c.y), c.z);
	 if(minC < 0.0) return vec4(sLum + ((c - sLum) * sLum) / (sLum - minC), _c0.a);
	 else if(maxC > 1.0) return vec4(sLum + ((c - sLum) * (1.0 - sLum)) / (maxC - sLum), _c0.a);
	 else return vec4(c, _c0.a);`
  }
];

// https://mouaif.wordpress.com/2009/01/28/levels-control-shader/
var levels_glsl_fns = [
  // #define GammaCorrection(color, gamma)  pow(color, vec3(1.0 / gamma))
  {
    name: "gammaCorrection",
    type: "color",
    inputs: [
      {
        type: "float",
        name: "amount",
        default: 0.4
      }
    ],
    glsl: `   return vec4(pow(_c0.rgb, vec3(1.0 / amount)), _c0.a);`
  },

  // #define LevelsControlInputRange(color, minInput, maxInput) min(max(color - vec3(minInput), vec3(0.0)) / (vec3(maxInput) - vec3(minInput)), vec3(1.0))
  {
    name: "levelsInputRange",
    type: "color",
    inputs: [
      {
        type: "float",
        name: "minInput",
        default: 0.0
      },
      {
        type: "float",
        name: "maxInput",
        default: 1.0
      }
    ],
    glsl: `   return vec4(min(max(_c0.rgb - vec3(minInput), vec3(0.0)) / (vec3(maxInput) - vec3(minInput)), vec3(1.0)), _c0.a);`
  },

  // #define LevelsControlOutputRange(color, minOutput, maxOutput) mix(vec3(minOutput), vec3(maxOutput), color)
  {
    name: "levelsOutputRange",
    type: "color",
    inputs: [
      {
        type: "float",
        name: "minOutput",
        default: 0.0
      },
      {
        type: "float",
        name: "maxOutput",
        default: 1.0
      }
    ],
    glsl: `   return vec4(mix(vec3(minOutput), vec3(maxOutput), _c0.rgb), _c0.a);`
  }
];

var css_filter_glsl_fns = [
  {
    name: "opacity",
    type: "color",
    inputs: [
      {
        type: "float",
        name: "amount",
        default: 1.0
      }
    ],
    glsl: `   return vec4(_c0.rgb, amount);`
  },
  {
    name: "hueRotate",
    type: "color",
    inputs: [
      {
        type: "float",
        name: "amount",
        default: 0.0
      }
    ],
    glsl: `   vec3 c = _rgbToHsv(_c0.rgb);
    c.x = c.x + amount;
    return vec4(_hsvToRgb(c), _c0.a);`
  },
  {
    name: "sepia",
    type: "color",
    inputs: [
      {
        type: "float",
        name: "amount",
        default: 0.0
      }
    ],
    glsl: ` vec4 c;
    c.r = (0.393 + 0.607 * (1.0 - amount)) * _c0.r + (0.769 - 0.769 * (1.0 - amount)) * _c0.g + (0.189 - 0.189 * (1.0 - amount)) * _c0.b;
    c.g = (0.349 - 0.349 * (1.0 - amount)) * _c0.r + (0.686 + 0.314 * (1.0 - amount)) * _c0.g + (0.168 - 0.168 * (1.0 - amount)) * _c0.b;
    c.b = (0.272 - 0.272 * (1.0 - amount)) * _c0.r + (0.534 - 0.534 * (1.0 - amount)) * _c0.g + (0.131 + 0.869 * (1.0 - amount)) * _c0.b;
    c.a = _c0.a;
    return c;
    `
  },
  {
    name: "grayscale",
    type: "color",
    inputs: [
      {
        type: "float",
        name: "amount",
        default: 0.0
      }
    ],
    glsl: ` vec4 c;
    c.r = (0.2126 + 0.7874 * (1.0 - amount)) * _c0.r + (0.7152 - 0.7152  * (1.0 - amount)) * _c0.g + (0.0722 - 0.0722 * (1.0 - amount)) * _c0.b;
    c.g = (0.2126 - 0.2126 * (1.0 - amount)) * _c0.r + (0.7152 + 0.2848  * (1.0 - amount)) * _c0.g + (0.0722 - 0.0722 * (1.0 - amount)) * _c0.b;
    c.b = (0.2126 - 0.2126 * (1.0 - amount)) * _c0.r + (0.7152 - 0.7152  * (1.0 - amount)) * _c0.g + (0.0722 + 0.9278 * (1.0 - amount)) * _c0.b;
    c.a = _c0.a;
    return c;
    `
  }
];

var css_gradients_glsl_fns = [
  {
    name: "hsv",
    type: 'src',
    inputs: [
      {
        type: "float",
        name: "h",
        default: 0.13
      },{
        type: "float",
        name: "s",
        default: 1.0
      },{
        type: "float",
        name: "v",
        default: 0.96
      },{
        type: "float",
        name: "a",
        default: 1.0
      },
    ],
    glsl: `return vec4(_hsvToRgb(vec3(h, s, v)), a);`
  },
  {
    name: "linearGradient",
    type: 'src',
    inputs: [
      {
        type: "float",
        name: "h1",
        default: 0.01
      },{
        type: "float",
        name: "s1",
        default: 0.82
      },{
        type: "float",
        name: "v1",
        default: 0.96
      },{
        type: "float",
        name: "x1",
        default: -0.5
      },{
        type: "float",
        name: "y1",
        default: -0.5
      },{
        type: "float",
        name: "h2",
        default: 0.69
      },{
        type: "float",
        name: "s2",
        default: 1
      },{
        type: "float",
        name: "v2",
        default: 0.43
      },{
        type: "float",
        name: "x2",
        default: 0.5
      },{
        type: "float",
        name: "y2",
        default: 0.5
      },
    ],
    // https://www.shadertoy.com/view/lscGDr
    glsl: `   vec2 st = _st * 2. - 1.;
    vec3 color1 = pow(_hsvToRgb(vec3(h1, s1, v1)), vec3(2.2));
    vec3 color2 = pow(_hsvToRgb(vec3(h2, s2, v2)), vec3(2.2));
    vec2 a = vec2(x1, y1); // First gradient point.
    vec2 b = vec2(x2, y2); // Second gradient point.

    // Calculate interpolation factor with vector projection.
    vec2 ba = b - a;
    float t = dot(st - a, ba) / dot(ba, ba);
    // Saturate and apply smoothstep to the factor.
    t = smoothstep(0.0, 1.0, clamp(t, 0.0, 1.0));
    // Interpolate.
    vec3 color = mix(color1, color2, t);
    // Convert color from linear to sRGB color space (=gamma encode).
    color = pow((color), vec3(1.0 / 2.2));
    // Add gradient noise to reduce banding.
    // vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
    // float dither = 1.0;
    // color += (dither/255.0) * fract(magic.z * fract(dot(st, magic.xy))) - (dither*0.5/255.0);
    return vec4(color, 1.0);`
  },{
    name: "radialGradient",
    type: 'src',
    inputs: [
      {
        type: "float",
        name: "h1",
        default: 0.42
      },{
        type: "float",
        name: "s1",
        default: 0.95
      },{
        type: "float",
        name: "v1",
        default: 0.71
      },{
        type: "float",
        name: "x1",
        default: 0
      },{
        type: "float",
        name: "y1",
        default: 0
      },{
        type: "float",
        name: "h2",
        default: 0.58
      },{
        type: "float",
        name: "s2",
        default: 0.89
      },{
        type: "float",
        name: "v2",
        default: 0.38
      },{
        type: "float",
        name: "x2",
        default: 0.5
      },{
        type: "float",
        name: "y2",
        default: 0.5
      },
    ],
    // https://www.shadertoy.com/view/ldtSzM
    glsl: `   vec2 st = _st * 2. - 1.; 
    vec3 color1 = pow(_hsvToRgb(vec3(h1, s1, v1)), vec3(2.2));
    vec3 color2 = pow(_hsvToRgb(vec3(h2, s2, v2)), vec3(2.2));
    vec2 a = vec2(x1, y1); // First gradient point.
    vec2 b = vec2(x2, y2); // Second gradient point.
    // radius
    float r = distance(a, b);
    float d = distance(b - st.xy, b - a);
    vec3 color = mix(color1, color2, min(d, 1.));

    // Convert color from linear to sRGB color space (=gamma encode).
    color = pow((color), vec3(1.0 / 2.2));
    // Add gradient noise to reduce banding.
    // vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
    // float dither = 2.0;
    // color += (dither/255.0) * fract(magic.z * fract(dot(st, magic.xy))) - (dither*0.5/255.0);
    return vec4(color, 1.0);`
  },{
    name: "conicGradient",
    type: 'src',
    inputs: [
      {
        type: "float",
        name: "h1",
        default: 0.46
      },{
        type: "float",
        name: "s1",
        default: 0.65
      },{
        type: "float",
        name: "v1",
        default: 0.78
      },{
        type: "float",
        name: "cx",
        default: 0
      },{
        type: "float",
        name: "cy",
        default: 0
      },{
        type: "float",
        name: "h2",
        default: 0.78
      },{
        type: "float",
        name: "s2",
        default: 0.75
      },{
        type: "float",
        name: "v2",
        default: 0.76
      }
    ],
    // https://www.shadertoy.com/view/ldtSzM
    glsl: `   
    vec3 color1 = pow(_hsvToRgb(vec3(h1, s1, v1)), vec3(2.2));
    vec3 color2 = pow(_hsvToRgb(vec3(h2, s2, v2)), vec3(2.2));
    vec2 c = vec2(cx, cy) + vec2(0.5, 0.5); // center
    float pi = 3.14159;
    // range of atan -pi/2 to pi/2 => bringing it to 0-1
    float heading = 0.5 * (atan(_st.y - c.y, _st.x - c.x) / pi) + 0.5;
    vec3 color = mix(color1, color2, smoothstep(0., 0.5, heading));
    color = mix(color, color1, smoothstep(0.5, 1., heading));

    // Convert color from linear to sRGB color space (=gamma encode).
    color = pow((color), vec3(1.0 / 2.2));
    // Add gradient noise to reduce banding.
    // vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
    // float dither = 2.0;
    // color += (dither/255.0) * fract(magic.z * fract(dot(_st, magic.xy))) - (dither*0.5/255.0);
    return vec4(color, 1.0);`
  }
];

var image_filter_fns = [
//   void dx_blur( out vec4 fragColor, in vec2 fragCoord )
// {  
//     float sum = iResolution.x;
//     //vec4 bw = vec4( 0.2125, 0.7154, 0.0721, 0.0);
//     vec4 bw = vec4( .2, .7, 5.1, 0.0);
    
//     // 
//     fragColor = vec4( 0.5, 0.5, 0.5, 1.0);
//     fragColor -= dot( texture( iChannel0, fragCoord - vec2(1.0, -0.5)/sum ), bw);      
//     fragColor -= dot( texture( iChannel0, fragCoord - vec2(1.0, +0.5)/sum ), bw);
    
//     //
//     fragColor += dot( texture( iChannel0, fragCoord + vec2(1.0, -0.5)/sum ), bw); 
//     fragColor += dot( texture( iChannel0, fragCoord + vec2(1.0, +0.5)/sum ), bw);
// }
// dot( 
//   texture( _c0, _st.xy - vec2(1.0, -0.5)/sum ), 
//   bw
// )
  {
    name: "charcoal",
    type: "color",
    inputs: [],
    glsl: `   vec4 c = texture2D(_c0, _st);
    float sum = 640.0;
    vec4 bw = vec4( 0.2125, 0.7154, 0.0721, 0.0);
    // vec4 bw = vec4( .2, .7, 5.1, 0.0);
    
    // 
    vec4 fragColor = vec4( 0.5, 0.5, 0.5, 1.0);
    fragColor -= dot( texture2D( _c0, vec2(1.0, -0.5)/sum ), bw);      
    // fragColor -= dot( texture2D( _c0, _st - vec2(1.0, -0.5)/sum ), bw);      
    // fragColor -= dot( texture2D( _c0, _st - vec2(1.0, +0.5)/sum ), bw);
    
    //
    // fragColor += dot( texture2D( _c0, _st + vec2(1.0, -0.5)/sum ), bw); 
    // fragColor += dot( texture2D( _c0, _st + vec2(1.0, +0.5)/sum ), bw);
    return fragColor;`
  },
] 

var raymarch_fns = [
  {
    name: "sphere",
    type: 'src',
    inputs: [
      {
        type: "float",
        name: "r",
        default: 0.91
      }
    ],
    // https://glitch.com/edit/#!/lowly-notebook?path=post-processing.frag%3A23%3A4
    glsl: `  float shade = 0.0;
      vec2 st = _st * 2. - 1.;
      st.x *= resolution.x / resolution.y;
      // cameraPosition
      vec3 rayPos = vec3(0.0, 0.0, -5.0);
      // look at: 
      // target: vec3(0.0, 0.0, 0.0)
      vec3 forward = normalize(vec3(0.0, 0.0, 0.0) - rayPos);
      vec3 right = normalize(cross(forward, vec3(0,1,0)));
      vec3 up = normalize(cross(right, forward));
      vec3 ray = normalize(forward * .5 + st.x * right + st.y * up);
      //ray march
      // increase count for higher res 3d
      const float count = 30.;
      const float countInv = 1.0 / count;
      for (float i = count; i > 0.; i--) {
        float scene = 1.;
        // shape sphere 
        // replace this for other shapes: length(rayPos) - r
        float dist = min(scene, length(rayPos) - r);
        // increase zeros (e.g. 0.000001) for smoother shadow
        if (dist < .0001) {
          shade = i * countInv;
          break;
        }
        rayPos += ray * dist;
      }
      return vec4(vec3(shade), 1.0);
    `
  }
];

var book_of_shaders_fns = [{
  name: "metaball",
  type: 'src',
  inputs: [{
    type: 'float',
    name: 'scale',
    default: 5,
  }, {
    type: 'float',
    name: 'speed',
    default: 0.3,
  }, {
    type: 'float',
    name: 'offset',
    default: 0.3,
  }],
  glsl: `
  vec3 color = vec3(.0);
  _st *= scale;
  vec2 i_st = floor(_st);
  vec2 f_st = fract(_st);
  float m_dist = 1.0;
  for (int j=-1; j<=1; j++ ) {
    for (int i=-1; i<=1; i++ ) {
      vec2 neighbor = vec2(float(i),float(j));
      vec2 p = i_st + neighbor;
      vec2 point = fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
      point = 0.5 + 0.5*sin(offset + time*speed + 6.2831*point);
      vec2 diff = neighbor + point - f_st;
      float dist = length(diff);
      m_dist = min(m_dist, m_dist*dist);
    }
  }
  color += step(0.060, m_dist);return vec4(color, 1.0);`
}, {
  name: "fbm",
  type: 'src',
  inputs: [{
    type: 'float',
    name: 'scale',
    default: 2,
  }, {
    type: 'float',
    name: 'offset',
    default: 0.3,
  }, {
    type: 'float',
    name: 'contrast',
    default: 0.1,
  }],
  glsl: `
  vec3 color = vec3(.0);
  _st *= scale;
  float value = 0.0;
  float amplitude = .5;
  // Loop of octaves
  for (int i = 0; i < 3; i++) {
      value += amplitude * _noise(offset + vec3(_st.xy, 0.0));
      _st *= 2.;
      amplitude *= .5;
  }
  color += value + contrast;
  return vec4(color, 1.0);`
},{
  // https://www.shadertoy.com/view/MdsGDN
  name: "fbmMod",
  type: 'src',
  inputs: [{
    type: 'float',
    name: 'scale',
    default: 2,
  }, {
    type: 'float',
    name: 'offset',
    default: 0.3,
  }, {
    type: 'float',
    name: 'contrast',
    default: 0.1,
  }],
  glsl: `
  vec3 color = vec3(.0);
  _st *= scale;
  float value = 0.0;
  float amplitude = .5;
  // Loop of octaves
  for (int i = 0; i < 3; i++) {
      value += amplitude * _noise(offset + vec3(_st.xy, 0.0));
      _st *= 2.;
      amplitude *= .5;
  }
  color += value;
  color = abs(cos(_st.x*0.1 + color*20.0));
  color += contrast;
  return vec4(color, 1.0);`
}, {
  name: "fluid",
  type: 'src',
  inputs: [{
    type: 'float',
    name: 'scale',
    default: 2,
  }, {
    type: 'float',
    name: 'offset',
    default: 0.3,
  }, {
    type: 'float',
    name: 'speed',
    default: 0.1,
  }],
  glsl: /*GLSL*/`
  _st *= scale;
  _st += offset;
  vec2 q = vec2(0.);
  q.x = _noise(vec3(_st, 1.0));
  q.y = _noise(vec3(_st + 1.0, 1.0));

  vec2 r = vec2(0.);
  r.x = _noise( vec3(_st + 1.0*q + vec2(1.7,9.2) + 0.150*speed*time, 1.0));
  r.y = _noise( vec3(_st + 1.0*q + vec2(8.3,2.8) + 0.126*speed*time, 1.0));
  float value = _noise(vec3(_st+r, 1.0));
  return vec4(vec3(value), 1.0);`
}, {
  name: "toonvoronoi",
  type: 'src',
  inputs: [{
    type: 'float',
    name: 'scale',
    default: 5,
  }, {
    type: 'float',
    name: 'speed',
    default: 0.3,
  }, {
    type: 'float',
    name: 'offset',
    default: 0.3,
  }],
  glsl: /*GLSL*/`
  vec3 color = vec3(.0);
  _st *= scale;
  vec2 n = floor(_st);
  vec2 f = fract(_st);
  vec2 mg, mr;
  float md = 8.0;
  for (int j= -1; j <= 1; j++) {
    for (int i= -1; i <= 1; i++) {
      vec2 g = vec2(float(i),float(j));
      vec2 p = n + g;
      vec2 point = fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
      point = 0.5 + 0.5*sin(offset + time*speed + 6.2831*point);
      vec2 r = g + point - f;
      float d = dot(r, r);
      if(d < md) {
        md = d;
        mr = r;
        mg = g;
      }
    }
  }
  md = 8.0;
  for (int j= -2; j <= 2; j++) {
      for (int i= -2; i <= 2; i++) {
          vec2 g = mg + vec2(float(i),float(j));
          vec2 p = n + g;
      vec2 point = fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
      point = 0.5 + 0.5*sin(offset + time*speed + 6.2831*point);

          vec2 r = g + point - f;

          if ( dot(mr-r,mr-r)>0.00001 ) {
            md = min(md, dot( 0.5*(mr+r), normalize(r-mr) ));
          }
      }
  }
  vec3 c = vec3(md, mr);
  color = c.x*(0.5 + 0.5*sin(64.0*c.x))*vec3(1.0);
  // borders
  // color = mix( vec3(1.0), color, smoothstep( 0.01, 0.02, c.x ) );
  // feature points
  // float dd = length( c.yz );
  // color += vec3(1.)*(1.0-smoothstep( 0.0, 0.04, dd));
  return vec4(color, 1.0);`
}, {
  name: "mandelbrot",
  type: 'src',
  inputs: [{
    type: 'float',
    name: 'scale',
    default: 1,
  }, {
    type: 'float',
    name: 'offset',
    default: 0.2,
  }, {
    type: 'float',
    name: 'speed',
    default: 0.1,
  }],
  glsl: /*GLSL*/`
  _st *= scale;
  float tz = 0.5 - 0.5 * cos(0.225 * (offset + speed * time));
  float zoo = pow( 0.5, 13.0 * tz );
  vec2 c = vec2(-0.05, .6805) + _st * zoo;

  float c2 = dot(c, c);
  // skip computation inside M1 - http://iquilezles.org/www/articles/mset_1bulb/mset1bulb.htm
  if( (256.0 * c2 * c2) - (96.0 * c2) + (32.0 * c.x) - 3.0 < 0.0 ) return vec4(vec3(0.0), 1.0);
  // skip computation inside M2 - http://iquilezles.org/www/articles/mset_2bulb/mset2bulb.htm
  if( 16.0 * ( c2 + (2.0 * c.x) + 1.0) - 1.0 < 0.0 ) return vec4(vec3(0.0), 1.0);

  // distance to Mandelbrot
  // #if 1 {
  
  // }
  // #endif

  // iterate
  float di =  1.0;
  vec2 z  = vec2(0.0);
  float m2 = 0.0;
  vec2 dz = vec2(0.0);
  for( int i = 0; i < 300; i++ ) {
    if( m2 > 1024.0 ) { di = 0.0; break; }

    // Z' -> 2·Z·Z' + 1
    dz = 2.0 * vec2( (z.x * dz.x) - (z.y * dz.y), (z.x * dz.y) + (z.y * dz.x)) + vec2(1.0,0.0);
  
    // Z -> Z² + c			
    z = vec2( (z.x * z.x) - (z.y * z.y), 2.0 * z.x * z.y ) + c;
  
    m2 = dot(z,z);
  }

    // distance	
	// d(c) = |Z|·log|Z|/|Z'|
	float d = 0.5 * sqrt(dot(z, z) / dot(dz, dz)) * log(dot(z, z));
  if( di > 0.5 ) d = 0.0;
  
  // do some soft coloring based on distance
  d = clamp( pow(4.0 * d / zoo, 0.2), 0.0, 1.0 );
  
  vec3 col = vec3(d);
  
  return vec4(col, 1.0);`
}]

var distort_fns = [{
  name: 'radialSym',
  type: 'coord',
  inputs: [
    {
      type: 'float',
      name: 'nSides',
      default: 4,
    }
  ],
  glsl:
`   vec2 st = _st;
   st -= 0.5;
   float r = 0.5 * length(st);
   float a = atan(st.y, st.x);
   float pi = 2.*3.1416;
   a = mod(a,pi/nSides);
   return r * vec2(cos(a), sin(a));`
},
// https://www.shadertoy.com/view/4sSSzz
{
  name: 'fishEye',
  type: 'coord',
  inputs: [
    {
      type: 'float',
      name: 'strength',
      default: 1,
    }
  ],
  glsl:
`   vec2 st = _st;   
    st -= 0.5;
    float r = sqrt(dot(st, st)); // distance of pixel from center
    float power = 3.141592 * strength;

    float bind = 1.0;
    

    //Weird formulas
    vec2 uv;
    if (power > 0.0)//fisheye
      uv = normalize(st) * tan(r * power) / tan(power);
    else if (power < 0.0)//antifisheye
      uv = normalize(st) * atan(r * -power * 10.0) / atan(-power * 10.0);
    else uv = st;//no effect for power = 1.0

   return uv;`
},{
  name: 'swirl',
  type: 'coord',
  inputs: [
    {
      type: 'float',
      name: 'offset',
      default: 1,
    },
    {
      type: 'float',
      name: 'speed',
      default: 0,
    },
    {
      type: 'float',
      name: 'power',
      default: 1,
    }
  ],
  glsl: /* GLSL */`   
    vec2 st = _st;
    st -= 0.5;
    float radius = length(st);
    float theta = power*radius*sin(offset-speed*time);
    float s = sin(theta);
    float c = cos(theta);
    st.x = dot(st, vec2(c, -s));
    st.y = dot(st, vec2(s, c));
    return 0.5 * (st + 1.0);`
},{
  // https://www.shadertoy.com/view/lstfzl
  name: 'radialDistort',
  type: 'coord',
  inputs: [
    {
      type: 'float',
      name: 'freq',
      default: 1,
    },
    {
      type: 'float',
      name: 'speed',
      default: 0,
    },
    {
      type: 'float',
      name: 'power',
      default: 1,
    }
  ],
  glsl:
`   vec2 st = _st;   
    st -= 0.5;
    float theta  = atan(st.y, st.x);
    float radius = length(st);
    radius = pow(radius, power*sin(radius*freq-speed*time)+1.0);
    st.x = radius * cos(theta);
    st.y = radius * sin(theta);
    return 0.5 * (st + 1.0);`
},
{
  name: 'mapHue',
  type: 'color',
inputs: [
  {
    type: "float",
    name: "h1",
    default: 0.7
  },{
    type: "float",
    name: "s1",
    default: 1
  },{
    type: "float",
    name: "v1",
    default: 1
  },{
    type: "float",
    name: "h2",
    default: 0.88
  },{
    type: "float",
    name: "s2",
    default: 0.75
  },{
    type: "float",
    name: "v2",
    default: 1
  }
],
// https://www.shadertoy.com/view/lscGDr
glsl: `   vec3 c = _rgbToHsv(_c0.rgb);
vec3 color1 = pow(_hsvToRgb(vec3(h1, s1, v1)), vec3(2.2));
vec3 color2 = pow(_hsvToRgb(vec3(h2, s2, v2)), vec3(2.2));

vec3 color = mix(color1, color2, c.b);
// Convert color from linear to sRGB color space (=gamma encode).
color = pow((color), vec3(1.0 / 2.2));
// Add gradient noise to reduce banding.
// vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
// float dither = 1.0;
// color += (dither/255.0) * fract(magic.z * fract(dot(st, magic.xy))) - (dither*0.5/255.0);
return vec4(color, 1.0);`
},
{
  name: 'modulateRadialSym',
  type: 'combineCoord',
  inputs: [
    {
      type: 'float',
      name: 'nSides',
      default: 4,
    },{
      type: 'float',
      name: 'multiple',
      default: 1,
    },
  ],
  glsl:
`  vec3 c = _rgbToHsv(_c0.rgb); 
   c.b *= multiple;
   vec2 st = _st - 0.5;
   float r = 0.5*length(st);
   float a = c.b + atan(st.y, st.x);
   float pi = 2.*3.1416;
   a = mod(a,pi/nSides);
   return (r) * vec2(cos(a), sin(a));`
},
{
  name: 'blur',
  type: 'src',
  inputs: [
    {
      type: 'sampler2D',
      name: 'tex',
      default: NaN,
    },
    {
      type: 'float',
      name: 'multiplier',
      default: 1,
    }
  ],
  glsl:
` const int mSize = 5; // default 11
  const int kSize = (mSize-1)/2;
  float kernel[mSize];
  vec3 final_colour = vec3(0.0);

  //create the 1-D kernel
  float sigma = 7.0;
  float Z = 0.0;
  for (int j = 0; j <= kSize; ++j) {
    float x = float(j);
    kernel[kSize+j] = kernel[kSize-j] = .39894*exp(-0.5*x*x/(sigma*sigma))/sigma;
  }

  //get the normalization factor (as the gaussian has been clamped)
  for (int j = 0; j < mSize; ++j) {
    Z += kernel[j];
  }

  //read out the texels
  for (int i=-kSize; i <= kSize; ++i) {
    for (int j=-kSize; j <= kSize; ++j) {
      final_colour += kernel[kSize+j]*kernel[kSize+i] * texture2D(tex, (gl_FragCoord.xy+vec2(float(i),float(j))) / resolution.xy).rgb * multiplier;
    }
  }
  return vec4(final_colour/(Z*Z), 1.0);`
},
// https://github.com/BrutPitt/glslSmartDeNoise
{
  name: 'denoise',
  type: 'src',
  inputs: [
    {
      type: 'sampler2D',
      name: 'tex',
      default: NaN,
    },
    {
      type: 'float',
      name: 'sigma',
      default: 1,
    },
    {
      type: 'float',
      name: 'threshold',
      default: 1,
    }
  ],
  glsl: /* GLSL */`
    float INV_SQRT_OF_2PI = 0.39894228040143267793994605993439;  // 1.0/SQRT_OF_2PI
    float INV_PI = 0.31830988618379067153776752674503;

    float invSigmaQx2 = .5 / (sigma * sigma);      // 1.0 / (sigma^2 * 2.0)
    float invSigmaQx2PI = INV_PI * invSigmaQx2;    // 1/(2 * PI * sigma^2)

    float invThresholdSqx2 = .5 / (threshold * threshold);     // 1.0 / (sigma^2 * 2.0)
    float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;   // 1.0 / (sqrt(2*PI) * sigma^2)
    vec2 st = gl_FragCoord.xy / resolution.xy;
    vec4 centrPx = texture2D(tex,st); 

    float zBuff = 0.0;
    vec4 aBuff = vec4(0.0);
    vec2 size = vec2(1.0, 1.0);

    for(float dx = -0.005; dx <= 0.005; dx+=0.0025) {
        for(float dy = -0.005; dy <= 0.005; dy+=0.0025) {
            vec2 d = vec2(dx, dy);
            float blurFactor = exp( -dot(d, d) * invSigmaQx2 ) * invSigmaQx2PI;

            vec4 walkPx =  texture2D(tex,st+d/size);
            vec4 dC = walkPx-centrPx;
            float deltaFactor = exp( -dot(dC, dC) * invThresholdSqx2) * invThresholdSqrt2PI * blurFactor;

            zBuff += deltaFactor;
            aBuff += deltaFactor*walkPx;
        }
    }
    return aBuff/zBuff; 
`
},
{
  name: 'halftone',
  type: 'src',
  inputs: [
    {
      type: 'sampler2D',
      name: 'tex',
      default: NaN,
    },
    {
      type: 'float',
      name: 'frequency',
      default: 40,
    }
  ],
  glsl: /* GLSL */`
  vec2 st = _st;
  vec2 nearest = 2.0*fract(frequency * st) - 1.0;
  float dist = length(nearest);
  // Use a texture to modulate the size of the dots
  vec3 texcolor = texture2D(tex, st).rgb; // Unrotated coords
  float radius = sqrt(1.0-texcolor.g); // Use green channel
  vec3 white = vec3(1.0, 1.0, 1.0);
  vec3 black = vec3(0.0, 0.0, 0.0);
  vec3 fragcolor = mix(black, white, step(radius, dist));
  return vec4(fragcolor, 1.0);
  `
}];
