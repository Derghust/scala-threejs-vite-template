'use strict';
import * as $i_three from "three";
import * as $i_three$002fexamples$002fjsm$002fcontrols$002fOrbitControls from "three/examples/jsm/controls/OrbitControls";
import * as $i_three$002fexamples$002fjsm$002frenderers$002fCSS2DRenderer from "three/examples/jsm/renderers/CSS2DRenderer";
var $p;
var $linkingInfo = Object.freeze(({
  "esVersion": 6,
  "assumingES6": true,
  "productionMode": true,
  "linkerVersion": "1.16.0",
  "fileLevelThis": this
}));
var $getOwnPropertyDescriptors = (Object.getOwnPropertyDescriptors || (() => {
  var ownKeysFun;
  if ((((typeof Reflect) !== "undefined") && Reflect.ownKeys)) {
    ownKeysFun = Reflect.ownKeys;
  } else {
    var getOwnPropertySymbols = (Object.getOwnPropertySymbols || ((o) => []));
    ownKeysFun = ((o) => Object.getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
  }
  return ((o) => {
    var ownKeys = ownKeysFun(o);
    var descriptors = ({});
    var len = (ownKeys.length | 0);
    var i = 0;
    while ((i !== len)) {
      var key = ownKeys[i];
      Object.defineProperty(descriptors, key, ({
        "configurable": true,
        "enumerable": true,
        "writable": true,
        "value": Object.getOwnPropertyDescriptor(o, key)
      }));
      i = ((i + 1) | 0);
    }
    return descriptors;
  });
})());
var $L0;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $newArrayObject(arg0, arg1) {
  return $newArrayObjectInternal(arg0, arg1, 0);
}
function $newArrayObjectInternal(arg0, arg1, arg2) {
  var result = new arg0.C(arg1[arg2]);
  if ((arg2 < (arg1.length - 1))) {
    var subArrayClassData = arg0.O;
    var subLengthIndex = (arg2 + 1);
    var underlying = result.a;
    for (var i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, arg1, subLengthIndex);
    }
  }
  return result;
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), $getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.isArrayClass ? arg0.m() : $objectClone(arg0));
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 === null)) {
        return arg0.b9();
      } else if ((arg0 instanceof $c_RTLong)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.name;
      } else {
        return null.ba();
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.o();
      } else if ((instance instanceof $c_RTLong)) {
        return $f_jl_Long__hashCode__I(instance);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I($uC(instance));
      } else {
        return $c_O.prototype.o.call(instance);
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $intDiv(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 / arg1) | 0);
  }
}
function $intMod(arg0, arg1) {
  if ((arg1 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return ((arg0 % arg1) | 0);
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if ((((arg0 !== arg2) || (arg3 < arg1)) || (((arg1 + arg4) | 0) < arg3))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $L0 : arg0);
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.o = (function() {
  return $systemIdentityHashCode(this);
});
$p.j = (function() {
  var i = this.o();
  return (($objectClassName(this) + "@") + (+(i >>> 0.0)).toString(16));
});
$p.toString = (function() {
  return this.j();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.p = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.m = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.p = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.m = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.p = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.p = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.p = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.p = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = $L0;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.p = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.m = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.p = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.p = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.m = (function() {
  return new $ac_D(this.a.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.name = "";
  this.isPrimitive = false;
  this.isInterface = false;
  this.isArrayClass = false;
  this.isInstance = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.name = displayName;
  this.isPrimitive = true;
  this.isInstance = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass);
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.name = fullName;
  this.isInterface = (kindOrCtor === 1);
  this.isInstance = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    t: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.name = name;
  this.isArrayClass = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array)));
  this.isInstance = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.p = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.m = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    t: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.name = name;
  this.isArrayClass = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.isInstance = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.isPrimitive) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.isPrimitive));
$d_O.name = "java.lang.Object";
$d_O.isInstance = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.isPrimitive) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p(null, "J", "long", $ac_J, (void 0));
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
/** @constructor */
function $c_LJsUtils$() {
}
$p = $c_LJsUtils$.prototype = new $h_O();
$p.constructor = $c_LJsUtils$;
/** @constructor */
function $h_LJsUtils$() {
}
$h_LJsUtils$.prototype = $p;
$p.aw = (function(obj) {
  return JSON.stringify(obj);
});
var $d_LJsUtils$ = new $TypeData().i($c_LJsUtils$, "JsUtils$", ({
  V: 1
}));
var $n_LJsUtils$;
function $m_LJsUtils$() {
  if ((!$n_LJsUtils$)) {
    $n_LJsUtils$ = new $c_LJsUtils$();
  }
  return $n_LJsUtils$;
}
function $s_LMain__main__AT__V(args) {
  $m_LMain$().az(args);
}
function $p_LMain$__onKeyDown$1__Lorg_tesseractrealm_threejsfacade_three_cameras_PerspectiveCamera__Lorg_scalajs_dom_Event__V($thiz, camera$1, event) {
  if ((!(!(event instanceof KeyboardEvent)))) {
    var x1 = event.key;
    switch (x1) {
      case "w": {
        var \u03b41$ = camera$1.position;
        \u03b41$.x = ((+\u03b41$.x) + 0.1);
        break;
      }
      case "s": {
        var \u03b42$ = camera$1.position;
        \u03b42$.x = ((+\u03b42$.x) - 0.1);
        break;
      }
      case "a": {
        var \u03b43$ = camera$1.position;
        \u03b43$.y = ((+\u03b43$.y) + 0.1);
        break;
      }
      case "d": {
        var \u03b44$ = camera$1.position;
        \u03b44$.y = ((+\u03b44$.y) - 0.1);
        break;
      }
      case "z": {
        var \u03b45$ = camera$1.position;
        \u03b45$.z = ((+\u03b45$.z) + 0.1);
        break;
      }
      case "x": {
        var \u03b46$ = camera$1.position;
        \u03b46$.z = ((+\u03b46$.z) - 0.1);
        break;
      }
      case "q": {
        var \u03b47$ = camera$1.rotation;
        \u03b47$.x = ((+\u03b47$.x) + 0.1);
        break;
      }
      case "e": {
        var \u03b48$ = camera$1.rotation;
        \u03b48$.x = ((+\u03b48$.x) - 0.1);
        break;
      }
      case "r": {
        var \u03b49$ = camera$1.rotation;
        \u03b49$.y = ((+\u03b49$.y) + 0.1);
        break;
      }
      case "f": {
        var \u03b410$ = camera$1.rotation;
        \u03b410$.y = ((+\u03b410$.y) - 0.1);
        break;
      }
      case "c": {
        var \u03b411$ = camera$1.rotation;
        \u03b411$.z = ((+\u03b411$.z) + 0.1);
        break;
      }
      case "v": {
        var \u03b412$ = camera$1.rotation;
        \u03b412$.z = ((+\u03b412$.z) - 0.1);
        break;
      }
      default: {
        var x = (("Undefined key [" + x1) + "]");
        $m_s_Console$().Z().W((x + "\n"));
      }
    }
  } else {
    var x$1 = (("Event: [" + $dp_toString__T(event)) + "]");
    $m_s_Console$().Z().W((x$1 + "\n"));
  }
}
function $p_LMain$__animate$1__Lorg_tesseractrealm_threejsfacade_three_cameras_PerspectiveCamera__Lorg_tesseractrealm_threejsfacade_three_objects_Mesh__Lorg_tesseractrealm_threejsfacade_three_examples_jsm_controls_OrbitControls__Lorg_tesseractrealm_threejsfacade_three_Three$WebGLRenderer__Lorg_tesseractrealm_threejsfacade_three_scenes_Scene__Lorg_tesseractrealm_threejsfacade_three_examples_jsm_renderers_CSS2DRenderer__V($thiz, camera$2, characterMesh$1, controls$1, renderer$1, scene$2, textRenderer$1) {
  window.requestAnimationFrame(((_$1) => {
    $p_LMain$__animate$1__Lorg_tesseractrealm_threejsfacade_three_cameras_PerspectiveCamera__Lorg_tesseractrealm_threejsfacade_three_objects_Mesh__Lorg_tesseractrealm_threejsfacade_three_examples_jsm_controls_OrbitControls__Lorg_tesseractrealm_threejsfacade_three_Three$WebGLRenderer__Lorg_tesseractrealm_threejsfacade_three_scenes_Scene__Lorg_tesseractrealm_threejsfacade_three_examples_jsm_renderers_CSS2DRenderer__V($thiz, camera$2, characterMesh$1, controls$1, renderer$1, scene$2, textRenderer$1);
  }));
  var cameraPos = new $i_three.Vector3((+camera$2.position.x), 0.0, (+camera$2.position.z));
  var planePos = new $i_three.Vector3((+characterMesh$1.position.x), 0.0, (+characterMesh$1.position.z));
  var angle = (+Math.atan2(((+cameraPos.x) - (+planePos.x)), ((+cameraPos.z) - (+planePos.z))));
  var \u03b413$ = characterMesh$1.rotation;
  \u03b413$.set(0.0, angle, 0.0);
  controls$1.update();
  renderer$1.render(scene$2, camera$2);
  textRenderer$1.render(scene$2, camera$2);
}
/** @constructor */
function $c_LMain$() {
}
$p = $c_LMain$.prototype = new $h_O();
$p.constructor = $c_LMain$;
/** @constructor */
function $h_LMain$() {
}
$h_LMain$.prototype = $p;
$p.az = (function(args) {
  $i_three.Cache.enabled = true;
  var scene = new $i_three.Scene();
  scene.background = new $i_three.Color(13421772);
  scene.fog = new $i_three.FogExp2(13421772, 0.002);
  var result = $i_three.Cache.get("test");
  var jsonString = $m_LJsUtils$().aw(result);
  var x = ("JSON String: " + jsonString);
  $m_s_Console$().Z().W((x + "\n"));
  var exampleObject = (() => {
    var this$4 = ({});
    this$4.name = null;
    this$4.value = 0;
    this$4.name = "example";
    this$4.value = 42;
    return this$4;
  })();
  $i_three.Cache.add("test", exampleObject);
  var camera = new $i_three.PerspectiveCamera(75.0, ((+window.innerWidth) / (+window.innerHeight)), 0.1, 1000.0);
  camera.position.x = 400.0;
  camera.position.y = 200.0;
  var renderer = new $i_three.WebGLRenderer();
  renderer.setSize((+window.innerWidth), (+window.innerHeight));
  var geometry = new $i_three.ConeGeometry(10.0, 30.0, 4, 1);
  var material = new $i_three.MeshStandardMaterial($m_sjs_js_special_package$().aB($m_sr_ScalaRunTime$().aJ(new ($d_T2.r().C)([new $c_T2("color", 16777215)]))));
  var i = 0;
  while (true) {
    var mesh = new $i_three.Mesh(geometry, material);
    mesh.position.x = ((1600.0 * (+Math.random())) - 800.0);
    mesh.position.y = 0.0;
    mesh.position.z = ((1600.0 * (+Math.random())) - 800.0);
    mesh.updateMatrix();
    mesh.matrixAutoUpdate = false;
    scene.add(mesh);
    if ((i === 499)) {
      break;
    }
    i = ((1 + i) | 0);
  }
  var characterPlane = new $i_three.PlaneGeometry(10.0, 10.0);
  var characterMesh = new $i_three.Mesh(characterPlane, material);
  scene.add(characterMesh);
  var dirLight1 = new $i_three.DirectionalLight(16777215, 3.0);
  dirLight1.position.set(1.0, 1.0, 1.0);
  scene.add(dirLight1);
  var dirLight2 = new $i_three.DirectionalLight(8840, 3.0);
  dirLight2.position.set((-1.0), (-1.0), (-1.0));
  scene.add(dirLight2);
  var ambientLight = new $i_three.AmbientLight(5592405, 1.0);
  scene.add(ambientLight);
  document.body.appendChild(renderer.domElement);
  var textDiv = document.createElement("div");
  textDiv.className = "label";
  textDiv.textContent = "My Text test";
  textDiv.style.backgroundColor = "transparent";
  var textLabel = new $i_three$002fexamples$002fjsm$002frenderers$002fCSS2DRenderer.CSS2DObject(textDiv);
  textLabel.position.set(0.0, 0.0, 0.0);
  textLabel.center.set(0.0, 1.0);
  characterMesh.add(textLabel);
  var textRenderer = new $i_three$002fexamples$002fjsm$002frenderers$002fCSS2DRenderer.CSS2DRenderer();
  textRenderer.setSize($doubleToInt((+window.innerWidth)), $doubleToInt((+window.innerHeight)));
  var style = textRenderer.domElement.style;
  style.position = "absolute";
  style.top = "0px";
  document.body.appendChild(textRenderer.domElement);
  var controls = new $i_three$002fexamples$002fjsm$002fcontrols$002fOrbitControls.OrbitControls(camera, textRenderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 100.0;
  controls.maxDistance = 500.0;
  controls.maxPolarAngle = 1.5707963267948966;
  document.addEventListener("keydown", ((event) => {
    $p_LMain$__onKeyDown$1__Lorg_tesseractrealm_threejsfacade_three_cameras_PerspectiveCamera__Lorg_scalajs_dom_Event__V(this, camera, event);
  }), false);
  $p_LMain$__animate$1__Lorg_tesseractrealm_threejsfacade_three_cameras_PerspectiveCamera__Lorg_tesseractrealm_threejsfacade_three_objects_Mesh__Lorg_tesseractrealm_threejsfacade_three_examples_jsm_controls_OrbitControls__Lorg_tesseractrealm_threejsfacade_three_Three$WebGLRenderer__Lorg_tesseractrealm_threejsfacade_three_scenes_Scene__Lorg_tesseractrealm_threejsfacade_three_examples_jsm_renderers_CSS2DRenderer__V(this, camera, characterMesh, controls, renderer, scene, textRenderer);
});
var $d_LMain$ = new $TypeData().i($c_LMain$, "Main$", ({
  W: 1
}));
var $n_LMain$;
function $m_LMain$() {
  if ((!$n_LMain$)) {
    $n_LMain$ = new $c_LMain$();
  }
  return $n_LMain$;
}
/** @constructor */
function $c_jl_FloatingPointBits$() {
  this.al = false;
  this.w = null;
  this.E = null;
  this.a2 = null;
  this.ak = false;
  this.am = null;
  $n_jl_FloatingPointBits$ = this;
  this.al = true;
  this.w = new ArrayBuffer(8);
  this.E = new Int32Array(this.w, 0, 2);
  new Float32Array(this.w, 0, 2);
  this.a2 = new Float64Array(this.w, 0, 1);
  this.E[0] = 16909060;
  this.ak = ((new Int8Array(this.w, 0, 8)[0] | 0) === 1);
  this.am = null;
}
$p = $c_jl_FloatingPointBits$.prototype = new $h_O();
$p.constructor = $c_jl_FloatingPointBits$;
/** @constructor */
function $h_jl_FloatingPointBits$() {
}
$h_jl_FloatingPointBits$.prototype = $p;
$p.X = (function(value) {
  var iv = ((value | 0.0) | 0);
  if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
    return iv;
  } else {
    this.a2[0] = value;
    return ((this.E[0] | 0) ^ (this.E[1] | 0));
  }
});
var $d_jl_FloatingPointBits$ = new $TypeData().i($c_jl_FloatingPointBits$, "java.lang.FloatingPointBits$", ({
  a3: 1
}));
var $n_jl_FloatingPointBits$;
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$();
  }
  return $n_jl_FloatingPointBits$;
}
/** @constructor */
function $c_jl_System$Streams$() {
  this.a4 = null;
  this.an = null;
  $n_jl_System$Streams$ = this;
  this.a4 = new $c_jl_JSConsoleBasedPrintStream(false);
  this.an = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  ac: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  ae: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw new $c_jl_IllegalArgumentException("argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.T = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? array.a.length : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  af: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_RTLong(lo, hi) {
  this.b = 0;
  this.c = 0;
  this.b = lo;
  this.c = hi;
}
$p = $c_RTLong.prototype = new $h_O();
$p.constructor = $c_RTLong;
/** @constructor */
function $h_RTLong() {
}
$h_RTLong.prototype = $p;
$p.b4 = (function(that) {
  if ((that instanceof $c_RTLong)) {
    var x2 = that;
    return ((this.b === x2.b) && (this.c === x2.c));
  } else {
    return false;
  }
});
$p.o = (function() {
  return (this.b ^ this.c);
});
$p.j = (function() {
  return $m_RTLong$().ah(this.b, this.c);
});
$p.bh = (function() {
  return this.b;
});
$p.bg = (function() {
  return $m_RTLong$().ag(this.b, this.c);
});
$p.bf = (function() {
  return $m_RTLong$().Y(this.b, this.c);
});
$p.b0 = (function() {
  return ((this.b << 24) >> 24);
});
$p.be = (function() {
  return ((this.b << 16) >> 16);
});
$p.bb = (function() {
  return this.b;
});
$p.bc = (function() {
  return $uJ(this);
});
$p.b6 = (function() {
  return $m_RTLong$().ag(this.b, this.c);
});
$p.b3 = (function() {
  return $m_RTLong$().Y(this.b, this.c);
});
$p.b2 = (function(that) {
  var b = that;
  return $m_RTLong$().ae(this.b, this.c, b.b, b.c);
});
$p.b1 = (function(that) {
  return $m_RTLong$().ae(this.b, this.c, that.b, that.c);
});
$p.b5 = (function(b) {
  return ((this.b === b.b) && (this.c === b.c));
});
$p.bd = (function(b) {
  return (!((this.b === b.b) && (this.c === b.c)));
});
$p.aS = (function(b) {
  var ahi = this.c;
  var bhi = b.c;
  return ((ahi === bhi) ? (((-2147483648) ^ this.b) < ((-2147483648) ^ b.b)) : (ahi < bhi));
});
$p.aT = (function(b) {
  var ahi = this.c;
  var bhi = b.c;
  return ((ahi === bhi) ? (((-2147483648) ^ this.b) <= ((-2147483648) ^ b.b)) : (ahi < bhi));
});
$p.aO = (function(b) {
  var ahi = this.c;
  var bhi = b.c;
  return ((ahi === bhi) ? (((-2147483648) ^ this.b) > ((-2147483648) ^ b.b)) : (ahi > bhi));
});
$p.aP = (function(b) {
  var ahi = this.c;
  var bhi = b.c;
  return ((ahi === bhi) ? (((-2147483648) ^ this.b) >= ((-2147483648) ^ b.b)) : (ahi > bhi));
});
$p.bj = (function() {
  return new $c_RTLong((~this.b), (~this.c));
});
$p.aM = (function(b) {
  return new $c_RTLong((this.b | b.b), (this.c | b.c));
});
$p.aL = (function(b) {
  return new $c_RTLong((this.b & b.b), (this.c & b.c));
});
$p.aZ = (function(b) {
  return new $c_RTLong((this.b ^ b.b), (this.c ^ b.c));
});
$p.aU = (function(n) {
  var lo = this.b;
  return new $c_RTLong((((32 & n) === 0) ? (lo << n) : 0), (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.c << n)) : (lo << n)));
});
$p.aR = (function(n) {
  var hi = this.c;
  return new $c_RTLong((((32 & n) === 0) ? (((this.b >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : ((hi >>> n) | 0)), (((32 & n) === 0) ? ((hi >>> n) | 0) : 0));
});
$p.aQ = (function(n) {
  var hi = this.c;
  return new $c_RTLong((((32 & n) === 0) ? (((this.b >>> n) | 0) | ((hi << 1) << ((31 - n) | 0))) : (hi >> n)), (((32 & n) === 0) ? (hi >> n) : (hi >> 31)));
});
$p.bi = (function() {
  var lo = this.b;
  var hi = this.c;
  return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)));
});
$p.aX = (function(b) {
  var alo = this.b;
  var ahi = this.c;
  var bhi = b.c;
  var lo = ((alo + b.b) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)));
});
$p.aV = (function(b) {
  var alo = this.b;
  var ahi = this.c;
  var bhi = b.c;
  var lo = ((alo - b.b) | 0);
  return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)));
});
$p.aY = (function(b) {
  var alo = this.b;
  var blo = b.b;
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  return new $c_RTLong(lo, ((((((((Math.imul(alo, b.c) + Math.imul(this.c, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0));
});
$p.aN = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.ap(this.b, this.c, b.b, b.c), this$1.d);
});
$p.aW = (function(b) {
  var this$1 = $m_RTLong$();
  return new $c_RTLong(this$1.aF(this.b, this.c, b.b, b.c), this$1.d);
});
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.K)));
}
var $d_RTLong = new $TypeData().i($c_RTLong, "org.scalajs.linker.runtime.RuntimeLong", ({
  K: 1
}));
function $p_RTLong$__toUnsignedString__I__I__T($thiz, lo, hi) {
  return ((((-2097152) & hi) === 0) ? ("" + ((4.294967296E9 * hi) + (+(lo >>> 0.0)))) : $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2));
}
function $p_RTLong$__unsigned_$div__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
      var rDouble = (aDouble / bDouble);
      $thiz.d = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.d = 0;
      return 0;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    var pow = ((31 - (Math.clz32(blo) | 0)) | 0);
    $thiz.d = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    var pow$2 = ((31 - (Math.clz32(bhi) | 0)) | 0);
    $thiz.d = 0;
    return ((ahi >>> pow$2) | 0);
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0) | 0);
  }
}
function $p_RTLong$__unsigned_$percent__I__I__I__I__I($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      var aDouble = ((4.294967296E9 * ahi) + (+(alo >>> 0.0)));
      var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
      var rDouble = (aDouble % bDouble);
      $thiz.d = (((rDouble / 4.294967296E9) | 0.0) | 0);
      return ((rDouble | 0.0) | 0);
    } else {
      $thiz.d = ahi;
      return alo;
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.d = 0;
    return (alo & (((-1) + blo) | 0));
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.d = (ahi & (((-1) + bhi) | 0));
    return alo;
  } else {
    return ($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1) | 0);
  }
}
function $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, ask) {
  var shift = ((((bhi !== 0) ? (Math.clz32(bhi) | 0) : ((32 + (Math.clz32(blo) | 0)) | 0)) - ((ahi !== 0) ? (Math.clz32(ahi) | 0) : ((32 + (Math.clz32(alo) | 0)) | 0))) | 0);
  var n = shift;
  var lo = (((32 & n) === 0) ? (blo << n) : 0);
  var hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  var bShiftLo = lo;
  var bShiftHi = hi;
  var remLo = alo;
  var remHi = ahi;
  var quotLo = 0;
  var quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    var alo$1 = remLo;
    var ahi$1 = remHi;
    var blo$1 = bShiftLo;
    var bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      var lo$1 = remLo;
      var hi$1 = remHi;
      var lo$2 = bShiftLo;
      var hi$2 = bShiftHi;
      var lo$3 = ((lo$1 - lo$2) | 0);
      var hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift));
      } else {
        quotHi = (quotHi | (1 << shift));
      }
    }
    shift = (((-1) + shift) | 0);
    var lo$4 = bShiftLo;
    var hi$4 = bShiftHi;
    var lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    var hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5;
  }
  var alo$2 = remLo;
  var ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    var lo$6 = remLo;
    var hi$6 = remHi;
    var remDouble = ((4.294967296E9 * hi$6) + (+(lo$6 >>> 0.0)));
    var bDouble = ((4.294967296E9 * bhi) + (+(blo >>> 0.0)));
    if ((ask !== 1)) {
      var x = (remDouble / bDouble);
      var lo$7 = ((x | 0.0) | 0);
      var hi$7 = (((x / 4.294967296E9) | 0.0) | 0);
      var lo$8 = quotLo;
      var hi$8 = quotHi;
      var lo$9 = ((lo$8 + lo$7) | 0);
      var hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9;
    }
    if ((ask !== 0)) {
      var rem_mod_bDouble = (remDouble % bDouble);
      remLo = ((rem_mod_bDouble | 0.0) | 0);
      remHi = (((rem_mod_bDouble / 4.294967296E9) | 0.0) | 0);
    }
  }
  if ((ask === 0)) {
    $thiz.d = quotHi;
    return quotLo;
  } else if ((ask === 1)) {
    $thiz.d = remHi;
    return remLo;
  } else {
    var lo$10 = quotLo;
    var hi$10 = quotHi;
    var quot = ((4.294967296E9 * hi$10) + (+(lo$10 >>> 0.0)));
    var this$7 = remLo;
    var remStr = ("" + this$7);
    var start = remStr.length;
    return ((("" + quot) + "000000000".substring(start)) + remStr);
  }
}
/** @constructor */
function $c_RTLong$() {
  this.d = 0;
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.ah = (function(lo, hi) {
  return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)));
});
$p.Y = (function(lo, hi) {
  return ((hi < 0) ? (-((4.294967296E9 * (+(((lo !== 0) ? (~hi) : ((-hi) | 0)) >>> 0.0))) + (+(((-lo) | 0) >>> 0.0)))) : ((4.294967296E9 * hi) + (+(lo >>> 0.0))));
});
$p.ag = (function(lo, hi) {
  if ((hi < 0)) {
    var abs__lo = ((-lo) | 0);
    var abs__hi = ((lo !== 0) ? (~hi) : ((-hi) | 0));
  } else {
    var abs__lo = lo;
    var abs__hi = hi;
  }
  var compressedAbsLo = (((((-2097152) & abs__hi) === 0) || ((65535 & abs__lo) === 0)) ? abs__lo : (32768 | ((-65536) & abs__lo)));
  var absRes = ((4.294967296E9 * (+(abs__hi >>> 0.0))) + (+(compressedAbsLo >>> 0.0)));
  return Math.fround(((hi < 0) ? (-absRes) : absRes));
});
$p.b8 = (function(value) {
  return new $c_RTLong(value, (value >> 31));
});
$p.b7 = (function(value) {
  return new $c_RTLong(this.af(value), this.d);
});
$p.af = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    this.d = (-2147483648);
    return 0;
  } else if ((value >= 9.223372036854776E18)) {
    this.d = 2147483647;
    return (-1);
  } else {
    var rawLo = ((value | 0.0) | 0);
    var rawHi = (((value / 4.294967296E9) | 0.0) | 0);
    this.d = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
    return rawLo;
  }
});
$p.ae = (function(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1));
});
$p.ap = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if (((alo === (-2147483648)) && (blo === (-1)))) {
        this.d = 0;
        return (-2147483648);
      } else {
        var lo = $intDiv(alo, blo);
        this.d = (lo >> 31);
        return lo;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.d = (-1);
      return (-1);
    } else {
      this.d = 0;
      return 0;
    }
  } else {
    if ((ahi < 0)) {
      var aAbs__lo = ((-alo) | 0);
      var aAbs__hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var bAbs__lo = ((-blo) | 0);
      var bAbs__hi = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if (((ahi ^ bhi) >= 0)) {
      return absRLo;
    } else {
      var hi$2 = this.d;
      this.d = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    }
  }
});
$p.aF = (function(alo, ahi, blo, bhi) {
  if (((blo | bhi) === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  }
  if ((ahi === (alo >> 31))) {
    if ((bhi === (blo >> 31))) {
      if ((blo !== (-1))) {
        var lo = $intMod(alo, blo);
        this.d = (lo >> 31);
        return lo;
      } else {
        this.d = 0;
        return 0;
      }
    } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
      this.d = 0;
      return 0;
    } else {
      this.d = ahi;
      return alo;
    }
  } else {
    if ((ahi < 0)) {
      var aAbs__lo = ((-alo) | 0);
      var aAbs__hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
    } else {
      var aAbs__lo = alo;
      var aAbs__hi = ahi;
    }
    if ((bhi < 0)) {
      var bAbs__lo = ((-blo) | 0);
      var bAbs__hi = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
    } else {
      var bAbs__lo = blo;
      var bAbs__hi = bhi;
    }
    var absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
    if ((ahi < 0)) {
      var hi$2 = this.d;
      this.d = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
      return ((-absRLo) | 0);
    } else {
      return absRLo;
    }
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  ah: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.d)));
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.d)));
}
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.r();
  while (it.n()) {
    f.A(it.i());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.t() === 0) ? (("" + start) + end) : $thiz.aa($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).q.g);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.q;
  if ((start.length !== 0)) {
    jsb.g = (("" + jsb.g) + start);
  }
  var it = $thiz.r();
  if (it.n()) {
    var obj = it.i();
    jsb.g = (("" + jsb.g) + obj);
    while (it.n()) {
      jsb.g = (("" + jsb.g) + sep);
      var obj$1 = it.i();
      jsb.g = (("" + jsb.g) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.g = (("" + jsb.g) + end);
  }
  return b;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.v = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_J)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  } else if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  } else if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  } else if ((xs === null)) {
    throw new $c_jl_NullPointerException();
  } else {
    throw new $c_s_MatchError(xs);
  }
});
$p.aJ = (function(xs) {
  return ((xs === null) ? null : ((xs.a.length === 0) ? $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($m_sci_ArraySeq$()) : new $c_sci_ArraySeq$ofRef(xs)));
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  b1: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.ay = (function(lv) {
  var lo = lv.b;
  var hi = lv.c;
  return ((hi === (lo >> 31)) ? lo : (lo ^ hi));
});
$p.aq = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var this$1 = $m_RTLong$();
    var lo = this$1.af(dv);
    var hi = this$1.d;
    return (($m_RTLong$().Y(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().X(dv));
  }
});
$p.f = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.aq((+x));
  } else if ((x instanceof $c_RTLong)) {
    var t = $uJ(x);
    return this.ay(new $c_RTLong(t.b, t.c));
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.av = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  b2: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
/** @constructor */
function $c_sjs_js_special_package$() {
}
$p = $c_sjs_js_special_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
}
$h_sjs_js_special_package$.prototype = $p;
$p.aB = (function(properties) {
  var result = ({});
  properties.ac(new $c_sjsr_AnonFunction1(((pair$2) => {
    var pair = pair$2;
    result[pair.G] = pair.H;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  b4: 1
}));
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
  }
  return $n_sjs_js_special_package$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.R = null;
  this.R = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.j = (function() {
  return (("DynamicVariable(" + this.R) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  b6: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.e = (function(hash, data) {
  var h = this.ad(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0);
});
$p.ad = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.h = (function(hash, length) {
  return this.C((hash ^ length));
});
$p.C = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.aD = (function(x, seed, ignorePrefix) {
  var arr = x.ai();
  if ((arr === 0)) {
    return $f_T__hashCode__I(x.a0());
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.e(h, $f_T__hashCode__I(x.a0()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.e(h, $m_sr_Statics$().f(x.aj(i)));
      i = ((1 + i) | 0);
    }
    return this.h(h, arr);
  }
});
$p.aI = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.r();
  while (iterator.n()) {
    var x = iterator.i();
    var h = $m_sr_Statics$().f(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.e(h$2, a);
  h$2 = this.e(h$2, b);
  h$2 = this.ad(h$2, c);
  return this.h(h$2, n);
});
$p.aC = (function(xs, seed) {
  var it = xs.r();
  var h = seed;
  if ((!it.n())) {
    return this.h(h, 0);
  }
  var x0 = it.i();
  if ((!it.n())) {
    return this.h(this.e(h, $m_sr_Statics$().f(x0)), 1);
  }
  var x1 = it.i();
  var initial = $m_sr_Statics$().f(x0);
  h = this.e(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().f(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.n()) {
    h = this.e(h, prev);
    var hash = $m_sr_Statics$().f(it.i());
    if ((rangeDiff !== ((hash - prev) | 0))) {
      h = this.e(h, hash);
      i = ((1 + i) | 0);
      while (it.n()) {
        h = this.e(h, $m_sr_Statics$().f(it.i()));
        i = ((1 + i) | 0);
      }
      return this.h(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.C(this.e(this.e(h0, rangeDiff), prev));
});
$p.ao = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().T(a);
  switch (l) {
    case 0: {
      return this.h(h, 0);
      break;
    }
    case 1: {
      return this.h(this.e(h, $m_sr_Statics$().f($m_sr_ScalaRunTime$().v(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().f($m_sr_ScalaRunTime$().v(a, 0));
      h = this.e(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().f($m_sr_ScalaRunTime$().v(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = $m_sr_Statics$().f($m_sr_ScalaRunTime$().v(a, i));
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, $m_sr_Statics$().f($m_sr_ScalaRunTime$().v(a, i)));
            i = ((1 + i) | 0);
          }
          return this.h(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.C(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.aE = (function(start, step, last, seed) {
  return this.C(this.e(this.e(this.e(seed, start), step), last));
});
$p.au = (function(a, seed) {
  var h = seed;
  var l = a.l();
  switch (l) {
    case 0: {
      return this.h(h, 0);
      break;
    }
    case 1: {
      return this.h(this.e(h, $m_sr_Statics$().f(a.k(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().f(a.k(0));
      h = this.e(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().f(a.k(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.e(h, prev);
        var hash = $m_sr_Statics$().f(a.k(i));
        if ((rangeDiff !== ((hash - prev) | 0))) {
          h = this.e(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.e(h, $m_sr_Statics$().f(a.k(i)));
            i = ((1 + i) | 0);
          }
          return this.h(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.C(this.e(this.e(h0, rangeDiff), prev));
    }
  }
});
$p.ax = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.B())) {
    elems.V();
  }
  return ((rangeState === 2) ? this.aE(initial, rangeDiff, prev, seed) : this.h(h, n));
});
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.a5 = s;
  if (writableStackTrace) {
    $thiz.as();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.a5 = null;
  }
  U() {
    return this.a5;
  }
  as() {
    var $x_1 = this;
    var reference = (false ? $x_1.aK : $x_1);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if ((Error.captureStackTrace === (void 0))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  j() {
    var className = $objectClassName(this);
    var message = this.U();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  o() {
    return $c_O.prototype.o.call(this);
  }
  get "message"() {
    var m = this.U();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.j();
  }
}
/** @constructor */
function $c_s_Console$() {
  this.a6 = null;
  $n_s_Console$ = this;
  this.a6 = new $c_s_util_DynamicVariable($m_jl_System$Streams$().a4);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.Z = (function() {
  return this.a6.R;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  ai: 1,
  aZ: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
}
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.j = (function() {
  return "<function1>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.z = 0;
  this.a9 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.z = $f_T__hashCode__I("Seq");
  this.a9 = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.aI($m_sci_Nil$(), this.a9);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.aG = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.au(xs, this.z) : ((xs instanceof $c_sci_List) ? this.ax(xs, this.z) : this.aC(xs, this.z)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  b8: 1,
  b7: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
class $c_jl_Exception extends $c_jl_Throwable {
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.G;
      break;
    }
    case 1: {
      return $thiz.H;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 1)"));
    }
  }
}
/** @constructor */
function $c_sc_Iterator$() {
  this.K = null;
  $n_sc_Iterator$ = this;
  this.K = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  aw: 1,
  av: 1,
  a: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
/** @constructor */
function $c_sjsr_AnonFunction1(f) {
  this.a8 = null;
  this.a8 = f;
}
$p = $c_sjsr_AnonFunction1.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sjsr_AnonFunction1;
/** @constructor */
function $h_sjsr_AnonFunction1() {
}
$h_sjsr_AnonFunction1.prototype = $p;
$p.A = (function(arg1) {
  return (0, this.a8)(arg1);
});
var $d_sjsr_AnonFunction1 = new $TypeData().i($c_sjsr_AnonFunction1, "scala.scalajs.runtime.AnonFunction1", ({
  b5: 1,
  b0: 1,
  l: 1
}));
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  Z: 1,
  a: 1,
  b: 1,
  c: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a1: 1,
  a: 1,
  b: 1,
  c: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.g = null;
  this.g = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.j = (function() {
  return this.g;
});
$p.l = (function() {
  return this.g.length;
});
$p.ab = (function(index) {
  return this.g.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  ab: 1,
  s: 1,
  F: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.r = (function() {
  return this;
});
$p.j = (function() {
  return "<iterator>";
});
$p.aa = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  Y: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  a0: 1,
  i: 1,
  a: 1,
  b: 1,
  c: 1
}), ((x) => $isByte(x)));
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  a4: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  a5: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  a8: 1,
  D: 1,
  B: 1,
  G: 1,
  C: 1
}));
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  a9: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  aa: 1,
  i: 1,
  a: 1,
  b: 1,
  c: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  ad: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  ag: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
function $p_s_MatchError__objString$lzycompute__T($thiz) {
  if ((!$thiz.M)) {
    $thiz.N = (($thiz.F === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.M = true;
  }
  return $thiz.N;
}
function $p_s_MatchError__objString__T($thiz) {
  return ((!$thiz.M) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.N);
}
function $p_s_MatchError__ofClass$1__T($thiz) {
  return ("of class " + $objectClassName($thiz.F));
}
function $p_s_MatchError__liftedTree1$1__T($thiz) {
  try {
    return ((($thiz.F + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")");
  } catch (e) {
    return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz));
  }
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.N = null;
    this.F = null;
    this.M = false;
    this.F = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  U() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  aj: 1,
  f: 1,
  e: 1,
  g: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.G = null;
  this.H = null;
  this.G = _1;
  this.H = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.ai = (function() {
  return 2;
});
$p.aj = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.j = (function() {
  return (((("(" + this.G) + ",") + this.H) + ")");
});
$p.a0 = (function() {
  return "Tuple2";
});
$p.o = (function() {
  return $m_s_util_hashing_MurmurHash3$().aD(this, (-889275714), false);
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.M)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  M: 1,
  ak: 1,
  L: 1,
  k: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.S() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.n = (function() {
  return false;
});
$p.aA = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.t = (function() {
  return 0;
});
$p.i = (function() {
  this.aA();
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  ax: 1,
  v: 1,
  y: 1,
  d: 1,
  h: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.ar(n);
  if (skipped.B()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.at();
}
function $f_jl_Double__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().X($thiz);
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.H)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  H: 1,
  i: 1,
  a: 1,
  b: 1,
  c: 1,
  j: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__hashCode__I($thiz) {
  return $m_jl_FloatingPointBits$().X($thiz);
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  a2: 1,
  i: 1,
  a: 1,
  b: 1,
  c: 1,
  j: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  a6: 1,
  i: 1,
  a: 1,
  b: 1,
  c: 1,
  j: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__hashCode__I($thiz) {
  return ($thiz.b ^ $thiz.c);
}
function $f_jl_Long__toString__T($thiz) {
  return $m_RTLong$().ah($thiz.b, $thiz.c);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.I)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  I: 1,
  i: 1,
  a: 1,
  b: 1,
  c: 1,
  j: 1
}), ((x) => (x instanceof $c_RTLong)));
function $f_T__hashCode__I($thiz) {
  var res = 0;
  var mul = 1;
  var i = (((-1) + $thiz.length) | 0);
  while ((i >= 0)) {
    res = ((res + Math.imul($thiz.charCodeAt(i), mul)) | 0);
    mul = Math.imul(31, mul);
    i = (((-1) + i) | 0);
  }
  return res;
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.J)));
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  J: 1,
  a: 1,
  b: 1,
  s: 1,
  c: 1,
  j: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.S = (function() {
  return this.D();
});
$p.ac = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.aa = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.I = null;
  this.s = 0;
  this.O = 0;
  this.I = xs;
  this.s = 0;
  this.O = $m_jl_reflect_Array$().T(this.I);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.t = (function() {
  return ((this.O - this.s) | 0);
});
$p.n = (function() {
  return (this.s < this.O);
});
$p.i = (function() {
  if ((this.s >= $m_jl_reflect_Array$().T(this.I))) {
    $m_sc_Iterator$().K.i();
  }
  var r = $m_sr_ScalaRunTime$().v(this.I, this.s);
  this.s = ((1 + this.s) | 0);
  return r;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  an: 1,
  v: 1,
  y: 1,
  d: 1,
  h: 1,
  a: 1
}));
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.a7 = null;
  this.J = 0;
  this.u = 0;
  this.a7 = self;
  this.J = 0;
  this.u = self.l();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.t = (function() {
  return this.u;
});
$p.n = (function() {
  return (this.u > 0);
});
$p.i = (function() {
  if ((this.u > 0)) {
    var r = this.a7.k(this.J);
    this.J = ((1 + this.J) | 0);
    this.u = (((-1) + this.u) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().K.i();
  }
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  au: 1,
  v: 1,
  y: 1,
  d: 1,
  h: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.P)) {
    $thiz.Q = new $c_sci_ArraySeq$ofRef(new $ac_O(0));
    $thiz.P = true;
  }
  return $thiz.Q;
}
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  return ((!$thiz.P) ? $p_sci_ArraySeq$__emptyImpl$lzycompute__sci_ArraySeq$ofRef($thiz) : $thiz.Q);
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.Q = null;
  this.P = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  aG: 1,
  aB: 1,
  ap: 1,
  ao: 1,
  aq: 1,
  a: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
function $isArrayOf_Ljava_io_PrintStream(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.E)));
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.D() + "(<not computed>)");
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b3)));
}
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.a3 && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.a3 = false;
  this.x = null;
  this.a3 = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.x = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.W = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.x = (("" + this.x) + rest);
      rest = "";
    } else {
      var $x_1 = this.x;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.x = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  a7: 1,
  E: 1,
  X: 1,
  D: 1,
  B: 1,
  G: 1,
  C: 1,
  F: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.B())) {
      return s;
    } else {
      var temp$n = (((-1) + n) | 0);
      var temp$s = s.aH();
      n = temp$n;
      s = temp$s;
    }
  }
}
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.j = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.o = (function() {
  return $m_s_util_hashing_MurmurHash3$().aG(this);
});
$p.j = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.n)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.n)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.z)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.z)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.L = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.L = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.k = (function(idx) {
  return this.L.k(idx);
});
$p.l = (function() {
  return this.L.l();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.L = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.r = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.D = (function() {
  return "IndexedSeqView";
});
$p.t = (function() {
  return this.l();
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  at: 1,
  aA: 1,
  al: 1,
  am: 1,
  m: 1,
  o: 1,
  d: 1,
  q: 1,
  h: 1,
  p: 1,
  aD: 1,
  a: 1,
  az: 1,
  r: 1,
  as: 1,
  x: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.D = (function() {
  return "IndexedSeq";
});
$p.t = (function() {
  return this.l();
});
$p.S = (function() {
  return "ArraySeq";
});
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.y = null;
  this.y = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.l = (function() {
  return this.y.a.length;
});
$p.k = (function(i) {
  return this.y.a[i];
});
$p.o = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  var a = this.y;
  return this$1.ao(a, this$1.z);
});
$p.r = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.y);
});
$p.A = (function(v1) {
  return this.k((v1 | 0));
});
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aH: 1,
  aF: 1,
  P: 1,
  w: 1,
  m: 1,
  o: 1,
  d: 1,
  q: 1,
  h: 1,
  p: 1,
  A: 1,
  u: 1,
  l: 1,
  r: 1,
  k: 1,
  S: 1,
  Q: 1,
  T: 1,
  aI: 1,
  n: 1,
  x: 1,
  aJ: 1,
  U: 1,
  O: 1,
  N: 1,
  ar: 1,
  a: 1
}));
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.D = (function() {
  return "LinearSeq";
});
$p.k = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.B = (function() {
  return (this === $m_sci_Nil$());
});
$p.ac = (function(f) {
  var these = this;
  while ((!these.B())) {
    f.A(these.V());
    these.a1();
  }
});
$p.l = (function() {
  var these = this;
  var len = 0;
  while ((!these.B())) {
    len = ((1 + len) | 0);
    these.a1();
  }
  return len;
});
$p.S = (function() {
  return "List";
});
$p.A = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
$p.ar = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.R)));
}
/** @constructor */
function $c_sci_Nil$() {
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.V = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.a1 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.t = (function() {
  return 0;
});
$p.r = (function() {
  return $m_sc_Iterator$().K;
});
$p.a0 = (function() {
  return "Nil";
});
$p.ai = (function() {
  return 0;
});
$p.aj = (function(x$1) {
  return $m_sr_Statics$().av(x$1);
});
$p.aH = (function() {
  this.a1();
});
$p.at = (function() {
  this.V();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  aM: 1,
  R: 1,
  P: 1,
  w: 1,
  m: 1,
  o: 1,
  d: 1,
  q: 1,
  h: 1,
  p: 1,
  A: 1,
  u: 1,
  l: 1,
  r: 1,
  k: 1,
  S: 1,
  Q: 1,
  T: 1,
  aK: 1,
  z: 1,
  ay: 1,
  aL: 1,
  aC: 1,
  O: 1,
  N: 1,
  U: 1,
  aE: 1,
  a: 1,
  L: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.q = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.q = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.D = (function() {
  return "IndexedSeq";
});
$p.r = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.l = (function() {
  return this.q.l();
});
$p.t = (function() {
  return this.q.l();
});
$p.j = (function() {
  return this.q.g;
});
$p.A = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.q.ab(i));
});
$p.k = (function(i) {
  return $bC(this.q.ab(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  aY: 1,
  aN: 1,
  w: 1,
  m: 1,
  o: 1,
  d: 1,
  q: 1,
  h: 1,
  p: 1,
  A: 1,
  u: 1,
  l: 1,
  r: 1,
  k: 1,
  aW: 1,
  aU: 1,
  aX: 1,
  aQ: 1,
  t: 1,
  aV: 1,
  aO: 1,
  aR: 1,
  aP: 1,
  aS: 1,
  n: 1,
  x: 1,
  aT: 1,
  s: 1,
  a: 1
}));
$L0 = new $c_RTLong(0, 0);
$d_J.z = $L0;
$s_LMain__main__AT__V(new ($d_T.r().C)([]));
//# sourceMappingURL=main.js.map
