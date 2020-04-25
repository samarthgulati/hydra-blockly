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
    name: "linearGradient",
    type: 'src',
    inputs: [
      {
        type: "float",
        name: "r1",
        default: 1.0
      },{
        type: "float",
        name: "g1",
        default: 0.99
      },{
        type: "float",
        name: "b1",
        default: 0.67
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
        name: "r2",
        default: 0.91
      },{
        type: "float",
        name: "g2",
        default: 0.06
      },{
        type: "float",
        name: "b2",
        default: 0.47
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
    vec3 color1 = pow(vec3(r1, g1, b1), vec3(2.2));
    vec3 color2 = pow(vec3(r2, g2, b2), vec3(2.2));
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
        name: "r1",
        default: 0.63
      },{
        type: "float",
        name: "g1",
        default: 0.88
      },{
        type: "float",
        name: "b1",
        default: 0.34
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
        name: "r2",
        default: 0.64
      },{
        type: "float",
        name: "g2",
        default: 0.98
      },{
        type: "float",
        name: "b2",
        default: 0.95
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
    vec3 color1 = pow(vec3(r1, g1, b1), vec3(2.2));
    vec3 color2 = pow(vec3(r2, g2, b2), vec3(2.2));
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
        name: "r1",
        default: 0.91
      },{
        type: "float",
        name: "g1",
        default: 0.25
      },{
        type: "float",
        name: "b1",
        default: 0.28
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
        name: "r2",
        default: 0.14
      },{
        type: "float",
        name: "g2",
        default: 0.15
      },{
        type: "float",
        name: "b2",
        default: 0.27
      }
    ],
    // https://www.shadertoy.com/view/ldtSzM
    glsl: `   vec3 color1 = pow(vec3(r1, g1, b1), vec3(2.2));
    vec3 color2 = pow(vec3(r2, g2, b2), vec3(2.2));
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
]