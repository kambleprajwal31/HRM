import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  __commonJS,
  __require
} from "./chunk-YHCV7DAQ.js";

// node_modules/progressbar.js/dist/progressbar.js
var require_progressbar = __commonJS({
  "node_modules/progressbar.js/dist/progressbar.js"(exports, module) {
    (function(f) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f();
      } else if (typeof define === "function" && define.amd) {
        define([], f);
      } else {
        var g;
        if (typeof window !== "undefined") {
          g = window;
        } else if (typeof global !== "undefined") {
          g = global;
        } else if (typeof self !== "undefined") {
          g = self;
        } else {
          g = this;
        }
        g.ProgressBar = f();
      }
    })(function() {
      var define2, module2, exports2;
      return (/* @__PURE__ */ function() {
        function r(e, n, t) {
          function o(i2, f) {
            if (!n[i2]) {
              if (!e[i2]) {
                var c = "function" == typeof __require && __require;
                if (!f && c) return c(i2, true);
                if (u) return u(i2, true);
                var a = new Error("Cannot find module '" + i2 + "'");
                throw a.code = "MODULE_NOT_FOUND", a;
              }
              var p = n[i2] = {
                exports: {}
              };
              e[i2][0].call(p.exports, function(r2) {
                var n2 = e[i2][1][r2];
                return o(n2 || r2);
              }, p, p.exports, r, e, n, t);
            }
            return n[i2].exports;
          }
          for (var u = "function" == typeof __require && __require, i = 0; i < t.length; i++) o(t[i]);
          return o;
        }
        return r;
      }())({
        1: [function(require2, module3, exports3) {
          (function(global2) {
            (function() {
              var LARGE_ARRAY_SIZE = 200;
              var HASH_UNDEFINED = "__lodash_hash_undefined__";
              var HOT_COUNT = 800, HOT_SPAN = 16;
              var MAX_SAFE_INTEGER = 9007199254740991;
              var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
              var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
              var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
              var reIsHostCtor = /^\[object .+?Constructor\]$/;
              var reIsUint = /^(?:0|[1-9]\d*)$/;
              var typedArrayTags = {};
              typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
              typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
              var freeGlobal = typeof global2 == "object" && global2 && global2.Object === Object && global2;
              var freeSelf = typeof self == "object" && self && self.Object === Object && self;
              var root = freeGlobal || freeSelf || Function("return this")();
              var freeExports = typeof exports3 == "object" && exports3 && !exports3.nodeType && exports3;
              var freeModule = freeExports && typeof module3 == "object" && module3 && !module3.nodeType && module3;
              var moduleExports = freeModule && freeModule.exports === freeExports;
              var freeProcess = moduleExports && freeGlobal.process;
              var nodeUtil = function() {
                try {
                  var types = freeModule && freeModule.require && freeModule.require("util").types;
                  if (types) {
                    return types;
                  }
                  return freeProcess && freeProcess.binding && freeProcess.binding("util");
                } catch (e) {
                }
              }();
              var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
              function apply(func, thisArg, args) {
                switch (args.length) {
                  case 0:
                    return func.call(thisArg);
                  case 1:
                    return func.call(thisArg, args[0]);
                  case 2:
                    return func.call(thisArg, args[0], args[1]);
                  case 3:
                    return func.call(thisArg, args[0], args[1], args[2]);
                }
                return func.apply(thisArg, args);
              }
              function baseTimes(n, iteratee) {
                var index = -1, result = Array(n);
                while (++index < n) {
                  result[index] = iteratee(index);
                }
                return result;
              }
              function baseUnary(func) {
                return function(value) {
                  return func(value);
                };
              }
              function getValue(object, key) {
                return object == null ? void 0 : object[key];
              }
              function overArg(func, transform) {
                return function(arg) {
                  return func(transform(arg));
                };
              }
              var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
              var coreJsData = root["__core-js_shared__"];
              var funcToString = funcProto.toString;
              var hasOwnProperty = objectProto.hasOwnProperty;
              var maskSrcKey = function() {
                var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
                return uid ? "Symbol(src)_1." + uid : "";
              }();
              var nativeObjectToString = objectProto.toString;
              var objectCtorString = funcToString.call(Object);
              var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
              var Buffer = moduleExports ? root.Buffer : void 0, Symbol2 = root.Symbol, Uint8Array = root.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
              var defineProperty = function() {
                try {
                  var func = getNative(Object, "defineProperty");
                  func({}, "", {});
                  return func;
                } catch (e) {
                }
              }();
              var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeMax = Math.max, nativeNow = Date.now;
              var Map = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
              var baseCreate = /* @__PURE__ */ function() {
                function object() {
                }
                return function(proto) {
                  if (!isObject(proto)) {
                    return {};
                  }
                  if (objectCreate) {
                    return objectCreate(proto);
                  }
                  object.prototype = proto;
                  var result = new object();
                  object.prototype = void 0;
                  return result;
                };
              }();
              function Hash(entries) {
                var index = -1, length = entries == null ? 0 : entries.length;
                this.clear();
                while (++index < length) {
                  var entry = entries[index];
                  this.set(entry[0], entry[1]);
                }
              }
              function hashClear() {
                this.__data__ = nativeCreate ? nativeCreate(null) : {};
                this.size = 0;
              }
              function hashDelete(key) {
                var result = this.has(key) && delete this.__data__[key];
                this.size -= result ? 1 : 0;
                return result;
              }
              function hashGet(key) {
                var data = this.__data__;
                if (nativeCreate) {
                  var result = data[key];
                  return result === HASH_UNDEFINED ? void 0 : result;
                }
                return hasOwnProperty.call(data, key) ? data[key] : void 0;
              }
              function hashHas(key) {
                var data = this.__data__;
                return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
              }
              function hashSet(key, value) {
                var data = this.__data__;
                this.size += this.has(key) ? 0 : 1;
                data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
                return this;
              }
              Hash.prototype.clear = hashClear;
              Hash.prototype["delete"] = hashDelete;
              Hash.prototype.get = hashGet;
              Hash.prototype.has = hashHas;
              Hash.prototype.set = hashSet;
              function ListCache(entries) {
                var index = -1, length = entries == null ? 0 : entries.length;
                this.clear();
                while (++index < length) {
                  var entry = entries[index];
                  this.set(entry[0], entry[1]);
                }
              }
              function listCacheClear() {
                this.__data__ = [];
                this.size = 0;
              }
              function listCacheDelete(key) {
                var data = this.__data__, index = assocIndexOf(data, key);
                if (index < 0) {
                  return false;
                }
                var lastIndex = data.length - 1;
                if (index == lastIndex) {
                  data.pop();
                } else {
                  splice.call(data, index, 1);
                }
                --this.size;
                return true;
              }
              function listCacheGet(key) {
                var data = this.__data__, index = assocIndexOf(data, key);
                return index < 0 ? void 0 : data[index][1];
              }
              function listCacheHas(key) {
                return assocIndexOf(this.__data__, key) > -1;
              }
              function listCacheSet(key, value) {
                var data = this.__data__, index = assocIndexOf(data, key);
                if (index < 0) {
                  ++this.size;
                  data.push([key, value]);
                } else {
                  data[index][1] = value;
                }
                return this;
              }
              ListCache.prototype.clear = listCacheClear;
              ListCache.prototype["delete"] = listCacheDelete;
              ListCache.prototype.get = listCacheGet;
              ListCache.prototype.has = listCacheHas;
              ListCache.prototype.set = listCacheSet;
              function MapCache(entries) {
                var index = -1, length = entries == null ? 0 : entries.length;
                this.clear();
                while (++index < length) {
                  var entry = entries[index];
                  this.set(entry[0], entry[1]);
                }
              }
              function mapCacheClear() {
                this.size = 0;
                this.__data__ = {
                  "hash": new Hash(),
                  "map": new (Map || ListCache)(),
                  "string": new Hash()
                };
              }
              function mapCacheDelete(key) {
                var result = getMapData(this, key)["delete"](key);
                this.size -= result ? 1 : 0;
                return result;
              }
              function mapCacheGet(key) {
                return getMapData(this, key).get(key);
              }
              function mapCacheHas(key) {
                return getMapData(this, key).has(key);
              }
              function mapCacheSet(key, value) {
                var data = getMapData(this, key), size = data.size;
                data.set(key, value);
                this.size += data.size == size ? 0 : 1;
                return this;
              }
              MapCache.prototype.clear = mapCacheClear;
              MapCache.prototype["delete"] = mapCacheDelete;
              MapCache.prototype.get = mapCacheGet;
              MapCache.prototype.has = mapCacheHas;
              MapCache.prototype.set = mapCacheSet;
              function Stack(entries) {
                var data = this.__data__ = new ListCache(entries);
                this.size = data.size;
              }
              function stackClear() {
                this.__data__ = new ListCache();
                this.size = 0;
              }
              function stackDelete(key) {
                var data = this.__data__, result = data["delete"](key);
                this.size = data.size;
                return result;
              }
              function stackGet(key) {
                return this.__data__.get(key);
              }
              function stackHas(key) {
                return this.__data__.has(key);
              }
              function stackSet(key, value) {
                var data = this.__data__;
                if (data instanceof ListCache) {
                  var pairs = data.__data__;
                  if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                    pairs.push([key, value]);
                    this.size = ++data.size;
                    return this;
                  }
                  data = this.__data__ = new MapCache(pairs);
                }
                data.set(key, value);
                this.size = data.size;
                return this;
              }
              Stack.prototype.clear = stackClear;
              Stack.prototype["delete"] = stackDelete;
              Stack.prototype.get = stackGet;
              Stack.prototype.has = stackHas;
              Stack.prototype.set = stackSet;
              function arrayLikeKeys(value, inherited) {
                var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
                for (var key in value) {
                  if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
                  (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
                  isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
                  isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
                  isIndex(key, length)))) {
                    result.push(key);
                  }
                }
                return result;
              }
              function assignMergeValue(object, key, value) {
                if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
                  baseAssignValue(object, key, value);
                }
              }
              function assignValue(object, key, value) {
                var objValue = object[key];
                if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
                  baseAssignValue(object, key, value);
                }
              }
              function assocIndexOf(array, key) {
                var length = array.length;
                while (length--) {
                  if (eq(array[length][0], key)) {
                    return length;
                  }
                }
                return -1;
              }
              function baseAssignValue(object, key, value) {
                if (key == "__proto__" && defineProperty) {
                  defineProperty(object, key, {
                    "configurable": true,
                    "enumerable": true,
                    "value": value,
                    "writable": true
                  });
                } else {
                  object[key] = value;
                }
              }
              var baseFor = createBaseFor();
              function baseGetTag(value) {
                if (value == null) {
                  return value === void 0 ? undefinedTag : nullTag;
                }
                return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
              }
              function baseIsArguments(value) {
                return isObjectLike(value) && baseGetTag(value) == argsTag;
              }
              function baseIsNative(value) {
                if (!isObject(value) || isMasked(value)) {
                  return false;
                }
                var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
                return pattern.test(toSource(value));
              }
              function baseIsTypedArray(value) {
                return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
              }
              function baseKeysIn(object) {
                if (!isObject(object)) {
                  return nativeKeysIn(object);
                }
                var isProto = isPrototype(object), result = [];
                for (var key in object) {
                  if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
                    result.push(key);
                  }
                }
                return result;
              }
              function baseMerge(object, source, srcIndex, customizer, stack) {
                if (object === source) {
                  return;
                }
                baseFor(source, function(srcValue, key) {
                  stack || (stack = new Stack());
                  if (isObject(srcValue)) {
                    baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
                  } else {
                    var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
                    if (newValue === void 0) {
                      newValue = srcValue;
                    }
                    assignMergeValue(object, key, newValue);
                  }
                }, keysIn);
              }
              function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
                var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
                if (stacked) {
                  assignMergeValue(object, key, stacked);
                  return;
                }
                var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
                var isCommon = newValue === void 0;
                if (isCommon) {
                  var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
                  newValue = srcValue;
                  if (isArr || isBuff || isTyped) {
                    if (isArray(objValue)) {
                      newValue = objValue;
                    } else if (isArrayLikeObject(objValue)) {
                      newValue = copyArray(objValue);
                    } else if (isBuff) {
                      isCommon = false;
                      newValue = cloneBuffer(srcValue, true);
                    } else if (isTyped) {
                      isCommon = false;
                      newValue = cloneTypedArray(srcValue, true);
                    } else {
                      newValue = [];
                    }
                  } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
                    newValue = objValue;
                    if (isArguments(objValue)) {
                      newValue = toPlainObject(objValue);
                    } else if (!isObject(objValue) || isFunction(objValue)) {
                      newValue = initCloneObject(srcValue);
                    }
                  } else {
                    isCommon = false;
                  }
                }
                if (isCommon) {
                  stack.set(srcValue, newValue);
                  mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
                  stack["delete"](srcValue);
                }
                assignMergeValue(object, key, newValue);
              }
              function baseRest(func, start) {
                return setToString(overRest(func, start, identity), func + "");
              }
              var baseSetToString = !defineProperty ? identity : function(func, string) {
                return defineProperty(func, "toString", {
                  "configurable": true,
                  "enumerable": false,
                  "value": constant(string),
                  "writable": true
                });
              };
              function cloneBuffer(buffer, isDeep) {
                if (isDeep) {
                  return buffer.slice();
                }
                var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
                buffer.copy(result);
                return result;
              }
              function cloneArrayBuffer(arrayBuffer) {
                var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
                new Uint8Array(result).set(new Uint8Array(arrayBuffer));
                return result;
              }
              function cloneTypedArray(typedArray, isDeep) {
                var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
                return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
              }
              function copyArray(source, array) {
                var index = -1, length = source.length;
                array || (array = Array(length));
                while (++index < length) {
                  array[index] = source[index];
                }
                return array;
              }
              function copyObject(source, props, object, customizer) {
                var isNew = !object;
                object || (object = {});
                var index = -1, length = props.length;
                while (++index < length) {
                  var key = props[index];
                  var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
                  if (newValue === void 0) {
                    newValue = source[key];
                  }
                  if (isNew) {
                    baseAssignValue(object, key, newValue);
                  } else {
                    assignValue(object, key, newValue);
                  }
                }
                return object;
              }
              function createAssigner(assigner) {
                return baseRest(function(object, sources) {
                  var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
                  customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
                  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
                    customizer = length < 3 ? void 0 : customizer;
                    length = 1;
                  }
                  object = Object(object);
                  while (++index < length) {
                    var source = sources[index];
                    if (source) {
                      assigner(object, source, index, customizer);
                    }
                  }
                  return object;
                });
              }
              function createBaseFor(fromRight) {
                return function(object, iteratee, keysFunc) {
                  var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
                  while (length--) {
                    var key = props[fromRight ? length : ++index];
                    if (iteratee(iterable[key], key, iterable) === false) {
                      break;
                    }
                  }
                  return object;
                };
              }
              function getMapData(map, key) {
                var data = map.__data__;
                return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
              }
              function getNative(object, key) {
                var value = getValue(object, key);
                return baseIsNative(value) ? value : void 0;
              }
              function getRawTag(value) {
                var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
                try {
                  value[symToStringTag] = void 0;
                  var unmasked = true;
                } catch (e) {
                }
                var result = nativeObjectToString.call(value);
                if (unmasked) {
                  if (isOwn) {
                    value[symToStringTag] = tag;
                  } else {
                    delete value[symToStringTag];
                  }
                }
                return result;
              }
              function initCloneObject(object) {
                return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
              }
              function isIndex(value, length) {
                var type = typeof value;
                length = length == null ? MAX_SAFE_INTEGER : length;
                return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
              }
              function isIterateeCall(value, index, object) {
                if (!isObject(object)) {
                  return false;
                }
                var type = typeof index;
                if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
                  return eq(object[index], value);
                }
                return false;
              }
              function isKeyable(value) {
                var type = typeof value;
                return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
              }
              function isMasked(func) {
                return !!maskSrcKey && maskSrcKey in func;
              }
              function isPrototype(value) {
                var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
                return value === proto;
              }
              function nativeKeysIn(object) {
                var result = [];
                if (object != null) {
                  for (var key in Object(object)) {
                    result.push(key);
                  }
                }
                return result;
              }
              function objectToString(value) {
                return nativeObjectToString.call(value);
              }
              function overRest(func, start, transform) {
                start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
                return function() {
                  var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
                  while (++index < length) {
                    array[index] = args[start + index];
                  }
                  index = -1;
                  var otherArgs = Array(start + 1);
                  while (++index < start) {
                    otherArgs[index] = args[index];
                  }
                  otherArgs[start] = transform(array);
                  return apply(func, this, otherArgs);
                };
              }
              function safeGet(object, key) {
                if (key === "constructor" && typeof object[key] === "function") {
                  return;
                }
                if (key == "__proto__") {
                  return;
                }
                return object[key];
              }
              var setToString = shortOut(baseSetToString);
              function shortOut(func) {
                var count = 0, lastCalled = 0;
                return function() {
                  var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
                  lastCalled = stamp;
                  if (remaining > 0) {
                    if (++count >= HOT_COUNT) {
                      return arguments[0];
                    }
                  } else {
                    count = 0;
                  }
                  return func.apply(void 0, arguments);
                };
              }
              function toSource(func) {
                if (func != null) {
                  try {
                    return funcToString.call(func);
                  } catch (e) {
                  }
                  try {
                    return func + "";
                  } catch (e) {
                  }
                }
                return "";
              }
              function eq(value, other) {
                return value === other || value !== value && other !== other;
              }
              var isArguments = baseIsArguments(/* @__PURE__ */ function() {
                return arguments;
              }()) ? baseIsArguments : function(value) {
                return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
              };
              var isArray = Array.isArray;
              function isArrayLike(value) {
                return value != null && isLength(value.length) && !isFunction(value);
              }
              function isArrayLikeObject(value) {
                return isObjectLike(value) && isArrayLike(value);
              }
              var isBuffer = nativeIsBuffer || stubFalse;
              function isFunction(value) {
                if (!isObject(value)) {
                  return false;
                }
                var tag = baseGetTag(value);
                return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
              }
              function isLength(value) {
                return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
              }
              function isObject(value) {
                var type = typeof value;
                return value != null && (type == "object" || type == "function");
              }
              function isObjectLike(value) {
                return value != null && typeof value == "object";
              }
              function isPlainObject(value) {
                if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
                  return false;
                }
                var proto = getPrototype(value);
                if (proto === null) {
                  return true;
                }
                var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
                return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
              }
              var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
              function toPlainObject(value) {
                return copyObject(value, keysIn(value));
              }
              function keysIn(object) {
                return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
              }
              var merge = createAssigner(function(object, source, srcIndex) {
                baseMerge(object, source, srcIndex);
              });
              function constant(value) {
                return function() {
                  return value;
                };
              }
              function identity(value) {
                return value;
              }
              function stubFalse() {
                return false;
              }
              module3.exports = merge;
            }).call(this);
          }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
        }, {}],
        2: [function(require2, module3, exports3) {
          !function(t, n) {
            "object" == typeof exports3 && "object" == typeof module3 ? module3.exports = n() : "function" == typeof define2 && define2.amd ? define2("shifty", [], n) : "object" == typeof exports3 ? exports3.shifty = n() : t.shifty = n();
          }(self, function() {
            return function() {
              "use strict";
              var t = {
                720: function(t2, n2, e2) {
                  e2.r(n2), e2.d(n2, {
                    Scene: function() {
                      return sn;
                    },
                    Tweenable: function() {
                      return kt;
                    },
                    interpolate: function() {
                      return nn;
                    },
                    processTweens: function() {
                      return dt;
                    },
                    setBezierFunction: function() {
                      return $;
                    },
                    shouldScheduleUpdate: function() {
                      return bt;
                    },
                    tween: function() {
                      return Pt;
                    },
                    unsetBezierFunction: function() {
                      return L;
                    }
                  });
                  var r = {};
                  e2.r(r), e2.d(r, {
                    bounce: function() {
                      return D;
                    },
                    bouncePast: function() {
                      return q;
                    },
                    easeFrom: function() {
                      return B;
                    },
                    easeFromTo: function() {
                      return Q;
                    },
                    easeInBack: function() {
                      return E;
                    },
                    easeInCirc: function() {
                      return j;
                    },
                    easeInCubic: function() {
                      return c;
                    },
                    easeInExpo: function() {
                      return w;
                    },
                    easeInOutBack: function() {
                      return T;
                    },
                    easeInOutCirc: function() {
                      return P;
                    },
                    easeInOutCubic: function() {
                      return l;
                    },
                    easeInOutExpo: function() {
                      return S;
                    },
                    easeInOutQuad: function() {
                      return s;
                    },
                    easeInOutQuart: function() {
                      return v;
                    },
                    easeInOutQuint: function() {
                      return d;
                    },
                    easeInOutSine: function() {
                      return b;
                    },
                    easeInQuad: function() {
                      return u;
                    },
                    easeInQuart: function() {
                      return h;
                    },
                    easeInQuint: function() {
                      return y;
                    },
                    easeInSine: function() {
                      return g;
                    },
                    easeOutBack: function() {
                      return A;
                    },
                    easeOutBounce: function() {
                      return M;
                    },
                    easeOutCirc: function() {
                      return k;
                    },
                    easeOutCubic: function() {
                      return f;
                    },
                    easeOutExpo: function() {
                      return O;
                    },
                    easeOutQuad: function() {
                      return a;
                    },
                    easeOutQuart: function() {
                      return p;
                    },
                    easeOutQuint: function() {
                      return _;
                    },
                    easeOutSine: function() {
                      return m;
                    },
                    easeTo: function() {
                      return N;
                    },
                    elastic: function() {
                      return I;
                    },
                    linear: function() {
                      return o;
                    },
                    swingFrom: function() {
                      return x;
                    },
                    swingFromTo: function() {
                      return F;
                    },
                    swingTo: function() {
                      return C;
                    }
                  });
                  var i = {};
                  e2.r(i), e2.d(i, {
                    afterTween: function() {
                      return Jt;
                    },
                    beforeTween: function() {
                      return Ht;
                    },
                    doesApply: function() {
                      return Wt;
                    },
                    tweenCreated: function() {
                      return Gt;
                    }
                  });
                  var o = function(t3) {
                    return t3;
                  }, u = function(t3) {
                    return Math.pow(t3, 2);
                  }, a = function(t3) {
                    return -(Math.pow(t3 - 1, 2) - 1);
                  }, s = function(t3) {
                    return (t3 /= 0.5) < 1 ? 0.5 * Math.pow(t3, 2) : -0.5 * ((t3 -= 2) * t3 - 2);
                  }, c = function(t3) {
                    return Math.pow(t3, 3);
                  }, f = function(t3) {
                    return Math.pow(t3 - 1, 3) + 1;
                  }, l = function(t3) {
                    return (t3 /= 0.5) < 1 ? 0.5 * Math.pow(t3, 3) : 0.5 * (Math.pow(t3 - 2, 3) + 2);
                  }, h = function(t3) {
                    return Math.pow(t3, 4);
                  }, p = function(t3) {
                    return -(Math.pow(t3 - 1, 4) - 1);
                  }, v = function(t3) {
                    return (t3 /= 0.5) < 1 ? 0.5 * Math.pow(t3, 4) : -0.5 * ((t3 -= 2) * Math.pow(t3, 3) - 2);
                  }, y = function(t3) {
                    return Math.pow(t3, 5);
                  }, _ = function(t3) {
                    return Math.pow(t3 - 1, 5) + 1;
                  }, d = function(t3) {
                    return (t3 /= 0.5) < 1 ? 0.5 * Math.pow(t3, 5) : 0.5 * (Math.pow(t3 - 2, 5) + 2);
                  }, g = function(t3) {
                    return 1 - Math.cos(t3 * (Math.PI / 2));
                  }, m = function(t3) {
                    return Math.sin(t3 * (Math.PI / 2));
                  }, b = function(t3) {
                    return -0.5 * (Math.cos(Math.PI * t3) - 1);
                  }, w = function(t3) {
                    return 0 === t3 ? 0 : Math.pow(2, 10 * (t3 - 1));
                  }, O = function(t3) {
                    return 1 === t3 ? 1 : 1 - Math.pow(2, -10 * t3);
                  }, S = function(t3) {
                    return 0 === t3 ? 0 : 1 === t3 ? 1 : (t3 /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t3 - 1)) : 0.5 * (2 - Math.pow(2, -10 * --t3));
                  }, j = function(t3) {
                    return -(Math.sqrt(1 - t3 * t3) - 1);
                  }, k = function(t3) {
                    return Math.sqrt(1 - Math.pow(t3 - 1, 2));
                  }, P = function(t3) {
                    return (t3 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t3 * t3) - 1) : 0.5 * (Math.sqrt(1 - (t3 -= 2) * t3) + 1);
                  }, M = function(t3) {
                    return t3 < 1 / 2.75 ? 7.5625 * t3 * t3 : t3 < 2 / 2.75 ? 7.5625 * (t3 -= 1.5 / 2.75) * t3 + 0.75 : t3 < 2.5 / 2.75 ? 7.5625 * (t3 -= 2.25 / 2.75) * t3 + 0.9375 : 7.5625 * (t3 -= 2.625 / 2.75) * t3 + 0.984375;
                  }, E = function(t3) {
                    var n3 = 1.70158;
                    return t3 * t3 * ((n3 + 1) * t3 - n3);
                  }, A = function(t3) {
                    var n3 = 1.70158;
                    return (t3 -= 1) * t3 * ((n3 + 1) * t3 + n3) + 1;
                  }, T = function(t3) {
                    var n3 = 1.70158;
                    return (t3 /= 0.5) < 1 ? t3 * t3 * ((1 + (n3 *= 1.525)) * t3 - n3) * 0.5 : 0.5 * ((t3 -= 2) * t3 * ((1 + (n3 *= 1.525)) * t3 + n3) + 2);
                  }, I = function(t3) {
                    return -1 * Math.pow(4, -8 * t3) * Math.sin((6 * t3 - 1) * (2 * Math.PI) / 2) + 1;
                  }, F = function(t3) {
                    var n3 = 1.70158;
                    return (t3 /= 0.5) < 1 ? t3 * t3 * ((1 + (n3 *= 1.525)) * t3 - n3) * 0.5 : 0.5 * ((t3 -= 2) * t3 * ((1 + (n3 *= 1.525)) * t3 + n3) + 2);
                  }, x = function(t3) {
                    var n3 = 1.70158;
                    return t3 * t3 * ((n3 + 1) * t3 - n3);
                  }, C = function(t3) {
                    var n3 = 1.70158;
                    return (t3 -= 1) * t3 * ((n3 + 1) * t3 + n3) + 1;
                  }, D = function(t3) {
                    return t3 < 1 / 2.75 ? 7.5625 * t3 * t3 : t3 < 2 / 2.75 ? 7.5625 * (t3 -= 1.5 / 2.75) * t3 + 0.75 : t3 < 2.5 / 2.75 ? 7.5625 * (t3 -= 2.25 / 2.75) * t3 + 0.9375 : 7.5625 * (t3 -= 2.625 / 2.75) * t3 + 0.984375;
                  }, q = function(t3) {
                    return t3 < 1 / 2.75 ? 7.5625 * t3 * t3 : t3 < 2 / 2.75 ? 2 - (7.5625 * (t3 -= 1.5 / 2.75) * t3 + 0.75) : t3 < 2.5 / 2.75 ? 2 - (7.5625 * (t3 -= 2.25 / 2.75) * t3 + 0.9375) : 2 - (7.5625 * (t3 -= 2.625 / 2.75) * t3 + 0.984375);
                  }, Q = function(t3) {
                    return (t3 /= 0.5) < 1 ? 0.5 * Math.pow(t3, 4) : -0.5 * ((t3 -= 2) * Math.pow(t3, 3) - 2);
                  }, B = function(t3) {
                    return Math.pow(t3, 4);
                  }, N = function(t3) {
                    return Math.pow(t3, 0.25);
                  };
                  function R(t3, n3, e3, r2, i2, o2) {
                    var u2, a2, s2, c2, f2, l2 = 0, h2 = 0, p2 = 0, v2 = function(t4) {
                      return ((l2 * t4 + h2) * t4 + p2) * t4;
                    }, y2 = function(t4) {
                      return (3 * l2 * t4 + 2 * h2) * t4 + p2;
                    }, _2 = function(t4) {
                      return t4 >= 0 ? t4 : 0 - t4;
                    };
                    return l2 = 1 - (p2 = 3 * n3) - (h2 = 3 * (r2 - n3) - p2), s2 = 1 - (f2 = 3 * e3) - (c2 = 3 * (i2 - e3) - f2), u2 = t3, a2 = function(t4) {
                      return 1 / (200 * t4);
                    }(o2), function(t4) {
                      return ((s2 * t4 + c2) * t4 + f2) * t4;
                    }(function(t4, n4) {
                      var e4, r3, i3, o3, u3, a3;
                      for (i3 = t4, a3 = 0; a3 < 8; a3++) {
                        if (o3 = v2(i3) - t4, _2(o3) < n4) return i3;
                        if (u3 = y2(i3), _2(u3) < 1e-6) break;
                        i3 -= o3 / u3;
                      }
                      if ((i3 = t4) < (e4 = 0)) return e4;
                      if (i3 > (r3 = 1)) return r3;
                      for (; e4 < r3; ) {
                        if (o3 = v2(i3), _2(o3 - t4) < n4) return i3;
                        t4 > o3 ? e4 = i3 : r3 = i3, i3 = 0.5 * (r3 - e4) + e4;
                      }
                      return i3;
                    }(u2, a2));
                  }
                  var z, U = function() {
                    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0.25, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.25, e3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.75, r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.75;
                    return function(i2) {
                      return R(i2, t3, n3, e3, r2, 1);
                    };
                  }, $ = function(t3, n3, e3, r2, i2) {
                    var o2 = U(n3, e3, r2, i2);
                    return o2.displayName = t3, o2.x1 = n3, o2.y1 = e3, o2.x2 = r2, o2.y2 = i2, kt.formulas[t3] = o2;
                  }, L = function(t3) {
                    return delete kt.formulas[t3];
                  };
                  function V(t3, n3) {
                    if (!(t3 instanceof n3)) throw new TypeError("Cannot call a class as a function");
                  }
                  function W(t3, n3) {
                    for (var e3 = 0; e3 < n3.length; e3++) {
                      var r2 = n3[e3];
                      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                    }
                  }
                  function G(t3) {
                    return G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
                      return typeof t4;
                    } : function(t4) {
                      return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
                    }, G(t3);
                  }
                  function H(t3) {
                    return function(t4) {
                      if (Array.isArray(t4)) return J(t4);
                    }(t3) || function(t4) {
                      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t4)) return Array.from(t4);
                    }(t3) || function(t4, n3) {
                      if (t4) {
                        if ("string" == typeof t4) return J(t4, n3);
                        var e3 = Object.prototype.toString.call(t4).slice(8, -1);
                        return "Object" === e3 && t4.constructor && (e3 = t4.constructor.name), "Map" === e3 || "Set" === e3 ? Array.from(t4) : "Arguments" === e3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e3) ? J(t4, n3) : void 0;
                      }
                    }(t3) || function() {
                      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                  }
                  function J(t3, n3) {
                    (null == n3 || n3 > t3.length) && (n3 = t3.length);
                    for (var e3 = 0, r2 = new Array(n3); e3 < n3; e3++) r2[e3] = t3[e3];
                    return r2;
                  }
                  function K(t3, n3) {
                    var e3 = Object.keys(t3);
                    if (Object.getOwnPropertySymbols) {
                      var r2 = Object.getOwnPropertySymbols(t3);
                      n3 && (r2 = r2.filter(function(n4) {
                        return Object.getOwnPropertyDescriptor(t3, n4).enumerable;
                      })), e3.push.apply(e3, r2);
                    }
                    return e3;
                  }
                  function X(t3) {
                    for (var n3 = 1; n3 < arguments.length; n3++) {
                      var e3 = null != arguments[n3] ? arguments[n3] : {};
                      n3 % 2 ? K(Object(e3), true).forEach(function(n4) {
                        Y(t3, n4, e3[n4]);
                      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(e3)) : K(Object(e3)).forEach(function(n4) {
                        Object.defineProperty(t3, n4, Object.getOwnPropertyDescriptor(e3, n4));
                      });
                    }
                    return t3;
                  }
                  function Y(t3, n3, e3) {
                    return n3 in t3 ? Object.defineProperty(t3, n3, {
                      value: e3,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : t3[n3] = e3, t3;
                  }
                  var Z, tt, nt, et = "linear", rt = "undefined" != typeof window ? window : e2.g, it = "afterTween", ot = "afterTweenEnd", ut = "beforeTween", at = "tweenCreated", st = "function", ct = "string", ft = rt.requestAnimationFrame || rt.webkitRequestAnimationFrame || rt.oRequestAnimationFrame || rt.msRequestAnimationFrame || rt.mozCancelRequestAnimationFrame && rt.mozRequestAnimationFrame || setTimeout, lt = function() {
                  }, ht = null, pt = null, vt = X({}, r), yt = function(t3, n3, e3, r2, i2, o2, u2) {
                    var a2, s2, c2, f2 = t3 < o2 ? 0 : (t3 - o2) / i2, l2 = false;
                    for (var h2 in u2 && u2.call && (l2 = true, a2 = u2(f2)), n3) l2 || (a2 = ((s2 = u2[h2]).call ? s2 : vt[s2])(f2)), c2 = e3[h2], n3[h2] = c2 + (r2[h2] - c2) * a2;
                    return n3;
                  }, _t = function(t3, n3) {
                    var e3 = t3._timestamp, r2 = t3._currentState, i2 = t3._delay;
                    if (!(n3 < e3 + i2)) {
                      var o2 = t3._duration, u2 = t3._targetState, a2 = e3 + i2 + o2, s2 = n3 > a2 ? a2 : n3;
                      t3._hasEnded = s2 >= a2;
                      var c2 = o2 - (a2 - s2), f2 = t3._filters.length > 0;
                      if (t3._hasEnded) return t3._render(u2, t3._data, c2), t3.stop(true);
                      f2 && t3._applyFilter(ut), s2 < e3 + i2 ? e3 = o2 = s2 = 1 : e3 += i2, yt(s2, r2, t3._originalState, u2, o2, e3, t3._easing), f2 && t3._applyFilter(it), t3._render(r2, t3._data, c2);
                    }
                  }, dt = function() {
                    for (var t3, n3 = kt.now(), e3 = ht; e3; ) t3 = e3._next, _t(e3, n3), e3 = t3;
                  }, gt = Date.now || function() {
                    return +/* @__PURE__ */ new Date();
                  }, mt = false, bt = function(t3) {
                    t3 && mt || (mt = t3, t3 && wt());
                  }, wt = function t3() {
                    Z = gt(), mt && ft.call(rt, t3, 16.666666666666668), dt();
                  }, Ot = function(t3) {
                    var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : et, e3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (Array.isArray(n3)) {
                      var r2 = U.apply(void 0, H(n3));
                      return r2;
                    }
                    var i2 = G(n3);
                    if (vt[n3]) return vt[n3];
                    if (i2 === ct || i2 === st) for (var o2 in t3) e3[o2] = n3;
                    else for (var u2 in t3) e3[u2] = n3[u2] || et;
                    return e3;
                  }, St = function(t3) {
                    t3 === ht ? (ht = t3._next) ? ht._previous = null : pt = null : t3 === pt ? (pt = t3._previous) ? pt._next = null : ht = null : (tt = t3._previous, nt = t3._next, tt._next = nt, nt._previous = tt), t3._previous = t3._next = null;
                  }, jt = "function" == typeof Promise ? Promise : null;
                  z = Symbol.toStringTag;
                  var kt = function() {
                    function t3() {
                      var n4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                      V(this, t3), Y(this, z, "Promise"), this._config = {}, this._data = {}, this._delay = 0, this._filters = [], this._next = null, this._previous = null, this._timestamp = null, this._hasEnded = false, this._resolve = null, this._reject = null, this._currentState = n4 || {}, this._originalState = {}, this._targetState = {}, this._start = lt, this._render = lt, this._promiseCtor = jt, e4 && this.setConfig(e4);
                    }
                    var n3, e3;
                    return n3 = t3, e3 = [{
                      key: "_applyFilter",
                      value: function(t4) {
                        for (var n4 = this._filters.length; n4 > 0; n4--) {
                          var e4 = this._filters[n4 - n4][t4];
                          e4 && e4(this);
                        }
                      }
                    }, {
                      key: "tween",
                      value: function() {
                        var n4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        return this._isPlaying && this.stop(), !n4 && this._config || this.setConfig(n4), this._pausedAtTime = null, this._timestamp = t3.now(), this._start(this.get(), this._data), this._delay && this._render(this._currentState, this._data, 0), this._resume(this._timestamp);
                      }
                    }, {
                      key: "setConfig",
                      value: function() {
                        var n4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e4 = this._config;
                        for (var r2 in n4) e4[r2] = n4[r2];
                        var i2 = e4.promise, o2 = void 0 === i2 ? this._promiseCtor : i2, u2 = e4.start, a2 = void 0 === u2 ? lt : u2, s2 = e4.finish, c2 = e4.render, f2 = void 0 === c2 ? this._config.step || lt : c2, l2 = e4.step, h2 = void 0 === l2 ? lt : l2;
                        this._data = e4.data || e4.attachment || this._data, this._isPlaying = false, this._pausedAtTime = null, this._scheduleId = null, this._delay = n4.delay || 0, this._start = a2, this._render = f2 || h2, this._duration = e4.duration || 500, this._promiseCtor = o2, s2 && (this._resolve = s2);
                        var p2 = n4.from, v2 = n4.to, y2 = void 0 === v2 ? {} : v2, _2 = this._currentState, d2 = this._originalState, g2 = this._targetState;
                        for (var m2 in p2) _2[m2] = p2[m2];
                        var b2 = false;
                        for (var w2 in _2) {
                          var O2 = _2[w2];
                          b2 || G(O2) !== ct || (b2 = true), d2[w2] = O2, g2[w2] = y2.hasOwnProperty(w2) ? y2[w2] : O2;
                        }
                        if (this._easing = Ot(this._currentState, e4.easing, this._easing), this._filters.length = 0, b2) {
                          for (var S2 in t3.filters) t3.filters[S2].doesApply(this) && this._filters.push(t3.filters[S2]);
                          this._applyFilter(at);
                        }
                        return this;
                      }
                    }, {
                      key: "then",
                      value: function(t4, n4) {
                        var e4 = this;
                        return this._promise = new this._promiseCtor(function(t5, n5) {
                          e4._resolve = t5, e4._reject = n5;
                        }), this._promise.then(t4, n4);
                      }
                    }, {
                      key: "catch",
                      value: function(t4) {
                        return this.then().catch(t4);
                      }
                    }, {
                      key: "finally",
                      value: function(t4) {
                        return this.then().finally(t4);
                      }
                    }, {
                      key: "get",
                      value: function() {
                        return X({}, this._currentState);
                      }
                    }, {
                      key: "set",
                      value: function(t4) {
                        this._currentState = t4;
                      }
                    }, {
                      key: "pause",
                      value: function() {
                        if (this._isPlaying) return this._pausedAtTime = t3.now(), this._isPlaying = false, St(this), this;
                      }
                    }, {
                      key: "resume",
                      value: function() {
                        return this._resume();
                      }
                    }, {
                      key: "_resume",
                      value: function() {
                        var n4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t3.now();
                        return null === this._timestamp ? this.tween() : this._isPlaying ? this._promise : (this._pausedAtTime && (this._timestamp += n4 - this._pausedAtTime, this._pausedAtTime = null), this._isPlaying = true, null === ht ? (ht = this, pt = this) : (this._previous = pt, pt._next = this, pt = this), this);
                      }
                    }, {
                      key: "seek",
                      value: function(n4) {
                        n4 = Math.max(n4, 0);
                        var e4 = t3.now();
                        return this._timestamp + n4 === 0 || (this._timestamp = e4 - n4, _t(this, e4)), this;
                      }
                    }, {
                      key: "stop",
                      value: function() {
                        var t4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (!this._isPlaying) return this;
                        this._isPlaying = false, St(this);
                        var n4 = this._filters.length > 0;
                        return t4 && (n4 && this._applyFilter(ut), yt(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), n4 && (this._applyFilter(it), this._applyFilter(ot))), this._resolve && this._resolve({
                          data: this._data,
                          state: this._currentState,
                          tweenable: this
                        }), this._resolve = null, this._reject = null, this;
                      }
                    }, {
                      key: "cancel",
                      value: function() {
                        var t4 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n4 = this._currentState, e4 = this._data, r2 = this._isPlaying;
                        return r2 ? (this._reject && this._reject({
                          data: e4,
                          state: n4,
                          tweenable: this
                        }), this._resolve = null, this._reject = null, this.stop(t4)) : this;
                      }
                    }, {
                      key: "isPlaying",
                      value: function() {
                        return this._isPlaying;
                      }
                    }, {
                      key: "hasEnded",
                      value: function() {
                        return this._hasEnded;
                      }
                    }, {
                      key: "setScheduleFunction",
                      value: function(n4) {
                        t3.setScheduleFunction(n4);
                      }
                    }, {
                      key: "data",
                      value: function() {
                        var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        return t4 && (this._data = X({}, t4)), this._data;
                      }
                    }, {
                      key: "dispose",
                      value: function() {
                        for (var t4 in this) delete this[t4];
                      }
                    }], e3 && W(n3.prototype, e3), t3;
                  }();
                  function Pt() {
                    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = new kt();
                    return n3.tween(t3), n3.tweenable = n3, n3;
                  }
                  Y(kt, "now", function() {
                    return Z;
                  }), Y(kt, "setScheduleFunction", function(t3) {
                    return ft = t3;
                  }), Y(kt, "filters", {}), Y(kt, "formulas", vt), bt(true);
                  var Mt, Et, At = /(\d|-|\.)/, Tt = /([^\-0-9.]+)/g, It = /[0-9.-]+/g, Ft = (Mt = It.source, Et = /,\s*/.source, new RegExp("rgba?\\(".concat(Mt).concat(Et).concat(Mt).concat(Et).concat(Mt, "(").concat(Et).concat(Mt, ")?\\)"), "g")), xt = /^.*\(/, Ct = /#([0-9]|[a-f]){3,6}/gi, Dt = "VAL", qt = function(t3, n3) {
                    return t3.map(function(t4, e3) {
                      return "_".concat(n3, "_").concat(e3);
                    });
                  };
                  function Qt(t3) {
                    return parseInt(t3, 16);
                  }
                  var Bt = function(t3) {
                    return "rgb(".concat((n3 = t3, 3 === (n3 = n3.replace(/#/, "")).length && (n3 = (n3 = n3.split(""))[0] + n3[0] + n3[1] + n3[1] + n3[2] + n3[2]), [Qt(n3.substr(0, 2)), Qt(n3.substr(2, 2)), Qt(n3.substr(4, 2))]).join(","), ")");
                    var n3;
                  }, Nt = function(t3, n3, e3) {
                    var r2 = n3.match(t3), i2 = n3.replace(t3, Dt);
                    return r2 && r2.forEach(function(t4) {
                      return i2 = i2.replace(Dt, e3(t4));
                    }), i2;
                  }, Rt = function(t3) {
                    for (var n3 in t3) {
                      var e3 = t3[n3];
                      "string" == typeof e3 && e3.match(Ct) && (t3[n3] = Nt(Ct, e3, Bt));
                    }
                  }, zt = function(t3) {
                    var n3 = t3.match(It), e3 = n3.slice(0, 3).map(Math.floor), r2 = t3.match(xt)[0];
                    if (3 === n3.length) return "".concat(r2).concat(e3.join(","), ")");
                    if (4 === n3.length) return "".concat(r2).concat(e3.join(","), ",").concat(n3[3], ")");
                    throw new Error("Invalid rgbChunk: ".concat(t3));
                  }, Ut = function(t3) {
                    return t3.match(It);
                  }, $t = function(t3, n3) {
                    var e3 = {};
                    return n3.forEach(function(n4) {
                      e3[n4] = t3[n4], delete t3[n4];
                    }), e3;
                  }, Lt = function(t3, n3) {
                    return n3.map(function(n4) {
                      return t3[n4];
                    });
                  }, Vt = function(t3, n3) {
                    return n3.forEach(function(n4) {
                      return t3 = t3.replace(Dt, +n4.toFixed(4));
                    }), t3;
                  }, Wt = function(t3) {
                    for (var n3 in t3._currentState) if ("string" == typeof t3._currentState[n3]) return true;
                    return false;
                  };
                  function Gt(t3) {
                    var n3 = t3._currentState;
                    [n3, t3._originalState, t3._targetState].forEach(Rt), t3._tokenData = function(t4) {
                      var n4, e3, r2 = {};
                      for (var i2 in t4) {
                        var o2 = t4[i2];
                        "string" == typeof o2 && (r2[i2] = {
                          formatString: (n4 = o2, e3 = void 0, e3 = n4.match(Tt), e3 ? (1 === e3.length || n4.charAt(0).match(At)) && e3.unshift("") : e3 = ["", ""], e3.join(Dt)),
                          chunkNames: qt(Ut(o2), i2)
                        });
                      }
                      return r2;
                    }(n3);
                  }
                  function Ht(t3) {
                    var n3 = t3._currentState, e3 = t3._originalState, r2 = t3._targetState, i2 = t3._easing, o2 = t3._tokenData;
                    !function(t4, n4) {
                      var e4 = function(e5) {
                        var r4 = n4[e5].chunkNames, i3 = t4[e5];
                        if ("string" == typeof i3) {
                          var o3 = i3.split(" "), u2 = o3[o3.length - 1];
                          r4.forEach(function(n5, e6) {
                            return t4[n5] = o3[e6] || u2;
                          });
                        } else r4.forEach(function(n5) {
                          return t4[n5] = i3;
                        });
                        delete t4[e5];
                      };
                      for (var r3 in n4) e4(r3);
                    }(i2, o2), [n3, e3, r2].forEach(function(t4) {
                      return function(t5, n4) {
                        var e4 = function(e5) {
                          Ut(t5[e5]).forEach(function(r4, i3) {
                            return t5[n4[e5].chunkNames[i3]] = +r4;
                          }), delete t5[e5];
                        };
                        for (var r3 in n4) e4(r3);
                      }(t4, o2);
                    });
                  }
                  function Jt(t3) {
                    var n3 = t3._currentState, e3 = t3._originalState, r2 = t3._targetState, i2 = t3._easing, o2 = t3._tokenData;
                    [n3, e3, r2].forEach(function(t4) {
                      return function(t5, n4) {
                        for (var e4 in n4) {
                          var r3 = n4[e4], i3 = r3.chunkNames, o3 = r3.formatString, u2 = Vt(o3, Lt($t(t5, i3), i3));
                          t5[e4] = Nt(Ft, u2, zt);
                        }
                      }(t4, o2);
                    }), function(t4, n4) {
                      for (var e4 in n4) {
                        var r3 = n4[e4].chunkNames, i3 = t4[r3[0]];
                        t4[e4] = "string" == typeof i3 ? r3.map(function(n5) {
                          var e5 = t4[n5];
                          return delete t4[n5], e5;
                        }).join(" ") : i3;
                      }
                    }(i2, o2);
                  }
                  function Kt(t3, n3) {
                    var e3 = Object.keys(t3);
                    if (Object.getOwnPropertySymbols) {
                      var r2 = Object.getOwnPropertySymbols(t3);
                      n3 && (r2 = r2.filter(function(n4) {
                        return Object.getOwnPropertyDescriptor(t3, n4).enumerable;
                      })), e3.push.apply(e3, r2);
                    }
                    return e3;
                  }
                  function Xt(t3) {
                    for (var n3 = 1; n3 < arguments.length; n3++) {
                      var e3 = null != arguments[n3] ? arguments[n3] : {};
                      n3 % 2 ? Kt(Object(e3), true).forEach(function(n4) {
                        Yt(t3, n4, e3[n4]);
                      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(e3)) : Kt(Object(e3)).forEach(function(n4) {
                        Object.defineProperty(t3, n4, Object.getOwnPropertyDescriptor(e3, n4));
                      });
                    }
                    return t3;
                  }
                  function Yt(t3, n3, e3) {
                    return n3 in t3 ? Object.defineProperty(t3, n3, {
                      value: e3,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : t3[n3] = e3, t3;
                  }
                  var Zt = new kt(), tn = kt.filters, nn = function(t3, n3, e3, r2) {
                    var i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, o2 = Xt({}, t3), u2 = Ot(t3, r2);
                    for (var a2 in Zt._filters.length = 0, Zt.set({}), Zt._currentState = o2, Zt._originalState = t3, Zt._targetState = n3, Zt._easing = u2, tn) tn[a2].doesApply(Zt) && Zt._filters.push(tn[a2]);
                    Zt._applyFilter("tweenCreated"), Zt._applyFilter("beforeTween");
                    var s2 = yt(e3, o2, t3, n3, 1, i2, u2);
                    return Zt._applyFilter("afterTween"), s2;
                  };
                  function en(t3, n3) {
                    (null == n3 || n3 > t3.length) && (n3 = t3.length);
                    for (var e3 = 0, r2 = new Array(n3); e3 < n3; e3++) r2[e3] = t3[e3];
                    return r2;
                  }
                  function rn(t3, n3) {
                    if (!(t3 instanceof n3)) throw new TypeError("Cannot call a class as a function");
                  }
                  function on(t3, n3) {
                    for (var e3 = 0; e3 < n3.length; e3++) {
                      var r2 = n3[e3];
                      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t3, r2.key, r2);
                    }
                  }
                  function un(t3, n3) {
                    var e3 = n3.get(t3);
                    if (!e3) throw new TypeError("attempted to get private field on non-instance");
                    return e3.get ? e3.get.call(t3) : e3.value;
                  }
                  var an = /* @__PURE__ */ new WeakMap(), sn = function() {
                    function t3() {
                      rn(this, t3), an.set(this, {
                        writable: true,
                        value: []
                      });
                      for (var n4 = arguments.length, e4 = new Array(n4), r2 = 0; r2 < n4; r2++) e4[r2] = arguments[r2];
                      e4.forEach(this.add.bind(this));
                    }
                    var n3, e3;
                    return n3 = t3, (e3 = [{
                      key: "add",
                      value: function(t4) {
                        return un(this, an).push(t4), t4;
                      }
                    }, {
                      key: "remove",
                      value: function(t4) {
                        var n4 = un(this, an).indexOf(t4);
                        return ~n4 && un(this, an).splice(n4, 1), t4;
                      }
                    }, {
                      key: "empty",
                      value: function() {
                        return this.tweenables.map(this.remove.bind(this));
                      }
                    }, {
                      key: "isPlaying",
                      value: function() {
                        return un(this, an).some(function(t4) {
                          return t4.isPlaying();
                        });
                      }
                    }, {
                      key: "play",
                      value: function() {
                        return un(this, an).forEach(function(t4) {
                          return t4.tween();
                        }), this;
                      }
                    }, {
                      key: "pause",
                      value: function() {
                        return un(this, an).forEach(function(t4) {
                          return t4.pause();
                        }), this;
                      }
                    }, {
                      key: "resume",
                      value: function() {
                        return this.playingTweenables.forEach(function(t4) {
                          return t4.resume();
                        }), this;
                      }
                    }, {
                      key: "stop",
                      value: function(t4) {
                        return un(this, an).forEach(function(n4) {
                          return n4.stop(t4);
                        }), this;
                      }
                    }, {
                      key: "tweenables",
                      get: function() {
                        return function(t5) {
                          if (Array.isArray(t5)) return en(t5);
                        }(t4 = un(this, an)) || function(t5) {
                          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t5)) return Array.from(t5);
                        }(t4) || function(t5, n4) {
                          if (t5) {
                            if ("string" == typeof t5) return en(t5, n4);
                            var e4 = Object.prototype.toString.call(t5).slice(8, -1);
                            return "Object" === e4 && t5.constructor && (e4 = t5.constructor.name), "Map" === e4 || "Set" === e4 ? Array.from(t5) : "Arguments" === e4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e4) ? en(t5, n4) : void 0;
                          }
                        }(t4) || function() {
                          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                        var t4;
                      }
                    }, {
                      key: "playingTweenables",
                      get: function() {
                        return un(this, an).filter(function(t4) {
                          return !t4.hasEnded();
                        });
                      }
                    }, {
                      key: "promises",
                      get: function() {
                        return un(this, an).map(function(t4) {
                          return t4.then();
                        });
                      }
                    }]) && on(n3.prototype, e3), t3;
                  }();
                  kt.filters.token = i;
                }
              }, n = {};
              function e(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                  exports: {}
                };
                return t[r](i, i.exports, e), i.exports;
              }
              return e.d = function(t2, n2) {
                for (var r in n2) e.o(n2, r) && !e.o(t2, r) && Object.defineProperty(t2, r, {
                  enumerable: true,
                  get: n2[r]
                });
              }, e.g = function() {
                if ("object" == typeof globalThis) return globalThis;
                try {
                  return this || new Function("return this")();
                } catch (t2) {
                  if ("object" == typeof window) return window;
                }
              }(), e.o = function(t2, n2) {
                return Object.prototype.hasOwnProperty.call(t2, n2);
              }, e.r = function(t2) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(t2, "__esModule", {
                  value: true
                });
              }, e(720);
            }();
          });
        }, {}],
        3: [function(require2, module3, exports3) {
          var Shape = require2("./shape");
          var utils = require2("./utils");
          var Circle = function Circle2(container, options) {
            this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}";
            this.containerAspectRatio = 1;
            Shape.apply(this, arguments);
          };
          Circle.prototype = new Shape();
          Circle.prototype.constructor = Circle;
          Circle.prototype._pathString = function _pathString(opts) {
            var widthOfWider = opts.strokeWidth;
            if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
              widthOfWider = opts.trailWidth;
            }
            var r = 50 - widthOfWider / 2;
            return utils.render(this._pathTemplate, {
              radius: r,
              "2radius": r * 2
            });
          };
          Circle.prototype._trailString = function _trailString(opts) {
            return this._pathString(opts);
          };
          module3.exports = Circle;
        }, {
          "./shape": 8,
          "./utils": 10
        }],
        4: [function(require2, module3, exports3) {
          var Shape = require2("./shape");
          var utils = require2("./utils");
          var Line = function Line2(container, options) {
            this._pathTemplate = options.vertical ? "M {center},100 L {center},0" : "M 0,{center} L 100,{center}";
            Shape.apply(this, arguments);
          };
          Line.prototype = new Shape();
          Line.prototype.constructor = Line;
          Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
            var viewBoxStr = opts.vertical ? "0 0 " + opts.strokeWidth + " 100" : "0 0 100 " + opts.strokeWidth;
            svg.setAttribute("viewBox", viewBoxStr);
            svg.setAttribute("preserveAspectRatio", "none");
          };
          Line.prototype._pathString = function _pathString(opts) {
            return utils.render(this._pathTemplate, {
              center: opts.strokeWidth / 2
            });
          };
          Line.prototype._trailString = function _trailString(opts) {
            return this._pathString(opts);
          };
          module3.exports = Line;
        }, {
          "./shape": 8,
          "./utils": 10
        }],
        5: [function(require2, module3, exports3) {
          module3.exports = {
            // Higher level API, different shaped progress bars
            Line: require2("./line"),
            Circle: require2("./circle"),
            SemiCircle: require2("./semicircle"),
            Square: require2("./square"),
            // Lower level API to use any SVG path
            Path: require2("./path"),
            // Base-class for creating new custom shapes
            // to be in line with the API of built-in shapes
            // Undocumented.
            Shape: require2("./shape"),
            // Internal utils, undocumented.
            utils: require2("./utils")
          };
        }, {
          "./circle": 3,
          "./line": 4,
          "./path": 6,
          "./semicircle": 7,
          "./shape": 8,
          "./square": 9,
          "./utils": 10
        }],
        6: [function(require2, module3, exports3) {
          var shifty = require2("shifty");
          var utils = require2("./utils");
          var Tweenable = shifty.Tweenable;
          var EASING_ALIASES = {
            easeIn: "easeInCubic",
            easeOut: "easeOutCubic",
            easeInOut: "easeInOutCubic"
          };
          var Path = function Path2(path, opts) {
            if (!(this instanceof Path2)) {
              throw new Error("Constructor was called without new keyword");
            }
            opts = utils.extend({
              delay: 0,
              duration: 800,
              easing: "linear",
              from: {},
              to: {},
              step: function() {
              }
            }, opts);
            var element;
            if (utils.isString(path)) {
              element = document.querySelector(path);
            } else {
              element = path;
            }
            this.path = element;
            this._opts = opts;
            this._tweenable = null;
            var length = this.path.getTotalLength();
            this.path.style.strokeDasharray = length + " " + length;
            this.set(0);
          };
          Path.prototype.value = function value() {
            var offset = this._getComputedDashOffset();
            var length = this.path.getTotalLength();
            var progress = 1 - offset / length;
            return parseFloat(progress.toFixed(6), 10);
          };
          Path.prototype.set = function set(progress) {
            this.stop();
            this.path.style.strokeDashoffset = this._progressToOffset(progress);
            var step = this._opts.step;
            if (utils.isFunction(step)) {
              var easing = this._easing(this._opts.easing);
              var values = this._calculateTo(progress, easing);
              var reference = this._opts.shape || this;
              step(values, reference, this._opts.attachment);
            }
          };
          Path.prototype.stop = function stop() {
            this._stopTween();
            this.path.style.strokeDashoffset = this._getComputedDashOffset();
          };
          Path.prototype.animate = function animate(progress, opts, cb) {
            opts = opts || {};
            if (utils.isFunction(opts)) {
              cb = opts;
              opts = {};
            }
            var passedOpts = utils.extend({}, opts);
            var defaultOpts = utils.extend({}, this._opts);
            opts = utils.extend(defaultOpts, opts);
            var shiftyEasing = this._easing(opts.easing);
            var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);
            this.stop();
            this.path.getBoundingClientRect();
            var offset = this._getComputedDashOffset();
            var newOffset = this._progressToOffset(progress);
            var self2 = this;
            this._tweenable = new Tweenable();
            this._tweenable.tween({
              from: utils.extend({
                offset
              }, values.from),
              to: utils.extend({
                offset: newOffset
              }, values.to),
              duration: opts.duration,
              delay: opts.delay,
              easing: shiftyEasing,
              step: function(state) {
                self2.path.style.strokeDashoffset = state.offset;
                var reference = opts.shape || self2;
                opts.step(state, reference, opts.attachment);
              }
            }).then(function(state) {
              if (utils.isFunction(cb)) {
                cb();
              }
            }).catch(function(err) {
              console.error("Error in tweening:", err);
              throw err;
            });
          };
          Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
            var computedStyle = window.getComputedStyle(this.path, null);
            return parseFloat(computedStyle.getPropertyValue("stroke-dashoffset"), 10);
          };
          Path.prototype._progressToOffset = function _progressToOffset(progress) {
            var length = this.path.getTotalLength();
            return length - progress * length;
          };
          Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
            if (opts.from && opts.to) {
              return {
                from: opts.from,
                to: opts.to
              };
            }
            return {
              from: this._calculateFrom(easing),
              to: this._calculateTo(progress, easing)
            };
          };
          Path.prototype._calculateFrom = function _calculateFrom(easing) {
            return shifty.interpolate(this._opts.from, this._opts.to, this.value(), easing);
          };
          Path.prototype._calculateTo = function _calculateTo(progress, easing) {
            return shifty.interpolate(this._opts.from, this._opts.to, progress, easing);
          };
          Path.prototype._stopTween = function _stopTween() {
            if (this._tweenable !== null) {
              this._tweenable.stop(true);
              this._tweenable = null;
            }
          };
          Path.prototype._easing = function _easing(easing) {
            if (EASING_ALIASES.hasOwnProperty(easing)) {
              return EASING_ALIASES[easing];
            }
            return easing;
          };
          module3.exports = Path;
        }, {
          "./utils": 10,
          "shifty": 2
        }],
        7: [function(require2, module3, exports3) {
          var Shape = require2("./shape");
          var Circle = require2("./circle");
          var utils = require2("./utils");
          var SemiCircle = function SemiCircle2(container, options) {
            this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0";
            this.containerAspectRatio = 2;
            Shape.apply(this, arguments);
          };
          SemiCircle.prototype = new Shape();
          SemiCircle.prototype.constructor = SemiCircle;
          SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
            svg.setAttribute("viewBox", "0 0 100 50");
          };
          SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(opts, container, textContainer) {
            if (opts.text.style) {
              textContainer.style.top = "auto";
              textContainer.style.bottom = "0";
              if (opts.text.alignToBottom) {
                utils.setStyle(textContainer, "transform", "translate(-50%, 0)");
              } else {
                utils.setStyle(textContainer, "transform", "translate(-50%, 50%)");
              }
            }
          };
          SemiCircle.prototype._pathString = Circle.prototype._pathString;
          SemiCircle.prototype._trailString = Circle.prototype._trailString;
          module3.exports = SemiCircle;
        }, {
          "./circle": 3,
          "./shape": 8,
          "./utils": 10
        }],
        8: [function(require2, module3, exports3) {
          var Path = require2("./path");
          var utils = require2("./utils");
          var DESTROYED_ERROR = "Object is destroyed";
          var Shape = function Shape2(container, opts) {
            if (!(this instanceof Shape2)) {
              throw new Error("Constructor was called without new keyword");
            }
            if (arguments.length === 0) {
              return;
            }
            this._opts = utils.extend({
              color: "#555",
              strokeWidth: 1,
              trailColor: null,
              trailWidth: null,
              fill: null,
              text: {
                style: {
                  color: null,
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  padding: 0,
                  margin: 0,
                  transform: {
                    prefix: true,
                    value: "translate(-50%, -50%)"
                  }
                },
                autoStyleContainer: true,
                alignToBottom: true,
                value: null,
                className: "progressbar-text"
              },
              svgStyle: {
                display: "block",
                width: "100%"
              },
              warnings: false
            }, opts, true);
            if (utils.isObject(opts) && opts.svgStyle !== void 0) {
              this._opts.svgStyle = opts.svgStyle;
            }
            if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== void 0) {
              this._opts.text.style = opts.text.style;
            }
            var svgView = this._createSvgView(this._opts);
            var element;
            if (utils.isString(container)) {
              element = document.querySelector(container);
            } else {
              element = container;
            }
            if (!element) {
              throw new Error("Container does not exist: " + container);
            }
            this._container = element;
            this._container.appendChild(svgView.svg);
            if (this._opts.warnings) {
              this._warnContainerAspectRatio(this._container);
            }
            if (this._opts.svgStyle) {
              utils.setStyles(svgView.svg, this._opts.svgStyle);
            }
            this.svg = svgView.svg;
            this.path = svgView.path;
            this.trail = svgView.trail;
            this.text = null;
            var newOpts = utils.extend({
              attachment: void 0,
              shape: this
            }, this._opts);
            this._progressPath = new Path(svgView.path, newOpts);
            if (utils.isObject(this._opts.text) && this._opts.text.value !== null) {
              this.setText(this._opts.text.value);
            }
          };
          Shape.prototype.animate = function animate(progress, opts, cb) {
            if (this._progressPath === null) {
              throw new Error(DESTROYED_ERROR);
            }
            this._progressPath.animate(progress, opts, cb);
          };
          Shape.prototype.stop = function stop() {
            if (this._progressPath === null) {
              throw new Error(DESTROYED_ERROR);
            }
            if (this._progressPath === void 0) {
              return;
            }
            this._progressPath.stop();
          };
          Shape.prototype.pause = function pause() {
            if (this._progressPath === null) {
              throw new Error(DESTROYED_ERROR);
            }
            if (this._progressPath === void 0) {
              return;
            }
            if (!this._progressPath._tweenable) {
              return;
            }
            this._progressPath._tweenable.pause();
          };
          Shape.prototype.resume = function resume() {
            if (this._progressPath === null) {
              throw new Error(DESTROYED_ERROR);
            }
            if (this._progressPath === void 0) {
              return;
            }
            if (!this._progressPath._tweenable) {
              return;
            }
            this._progressPath._tweenable.resume();
          };
          Shape.prototype.destroy = function destroy() {
            if (this._progressPath === null) {
              throw new Error(DESTROYED_ERROR);
            }
            this.stop();
            this.svg.parentNode.removeChild(this.svg);
            this.svg = null;
            this.path = null;
            this.trail = null;
            this._progressPath = null;
            if (this.text !== null) {
              this.text.parentNode.removeChild(this.text);
              this.text = null;
            }
          };
          Shape.prototype.set = function set(progress) {
            if (this._progressPath === null) {
              throw new Error(DESTROYED_ERROR);
            }
            this._progressPath.set(progress);
          };
          Shape.prototype.value = function value() {
            if (this._progressPath === null) {
              throw new Error(DESTROYED_ERROR);
            }
            if (this._progressPath === void 0) {
              return 0;
            }
            return this._progressPath.value();
          };
          Shape.prototype.setText = function setText(newText) {
            if (this._progressPath === null) {
              throw new Error(DESTROYED_ERROR);
            }
            if (this.text === null) {
              this.text = this._createTextContainer(this._opts, this._container);
              this._container.appendChild(this.text);
            }
            if (utils.isObject(newText)) {
              utils.removeChildren(this.text);
              this.text.appendChild(newText);
            } else {
              this.text.innerHTML = newText;
            }
          };
          Shape.prototype._createSvgView = function _createSvgView(opts) {
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this._initializeSvg(svg, opts);
            var trailPath = null;
            if (opts.trailColor || opts.trailWidth) {
              trailPath = this._createTrail(opts);
              svg.appendChild(trailPath);
            }
            var path = this._createPath(opts);
            svg.appendChild(path);
            return {
              svg,
              path,
              trail: trailPath
            };
          };
          Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
            svg.setAttribute("viewBox", "0 0 100 100");
          };
          Shape.prototype._createPath = function _createPath(opts) {
            var pathString = this._pathString(opts);
            return this._createPathElement(pathString, opts);
          };
          Shape.prototype._createTrail = function _createTrail(opts) {
            var pathString = this._trailString(opts);
            var newOpts = utils.extend({}, opts);
            if (!newOpts.trailColor) {
              newOpts.trailColor = "#eee";
            }
            if (!newOpts.trailWidth) {
              newOpts.trailWidth = newOpts.strokeWidth;
            }
            newOpts.color = newOpts.trailColor;
            newOpts.strokeWidth = newOpts.trailWidth;
            newOpts.fill = null;
            return this._createPathElement(pathString, newOpts);
          };
          Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
            var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", pathString);
            path.setAttribute("stroke", opts.color);
            path.setAttribute("stroke-width", opts.strokeWidth);
            if (opts.fill) {
              path.setAttribute("fill", opts.fill);
            } else {
              path.setAttribute("fill-opacity", "0");
            }
            return path;
          };
          Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
            var textContainer = document.createElement("div");
            textContainer.className = opts.text.className;
            var textStyle = opts.text.style;
            if (textStyle) {
              if (opts.text.autoStyleContainer) {
                container.style.position = "relative";
              }
              utils.setStyles(textContainer, textStyle);
              if (!textStyle.color) {
                textContainer.style.color = opts.color;
              }
            }
            this._initializeTextContainer(opts, container, textContainer);
            return textContainer;
          };
          Shape.prototype._initializeTextContainer = function(opts, container, element) {
          };
          Shape.prototype._pathString = function _pathString(opts) {
            throw new Error("Override this function for each progress bar");
          };
          Shape.prototype._trailString = function _trailString(opts) {
            throw new Error("Override this function for each progress bar");
          };
          Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
            if (!this.containerAspectRatio) {
              return;
            }
            var computedStyle = window.getComputedStyle(container, null);
            var width = parseFloat(computedStyle.getPropertyValue("width"), 10);
            var height = parseFloat(computedStyle.getPropertyValue("height"), 10);
            if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
              console.warn("Incorrect aspect ratio of container", "#" + container.id, "detected:", computedStyle.getPropertyValue("width") + "(width)", "/", computedStyle.getPropertyValue("height") + "(height)", "=", width / height);
              console.warn("Aspect ratio of should be", this.containerAspectRatio);
            }
          };
          module3.exports = Shape;
        }, {
          "./path": 6,
          "./utils": 10
        }],
        9: [function(require2, module3, exports3) {
          var Shape = require2("./shape");
          var utils = require2("./utils");
          var Square = function Square2(container, options) {
            this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}";
            this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}";
            Shape.apply(this, arguments);
          };
          Square.prototype = new Shape();
          Square.prototype.constructor = Square;
          Square.prototype._pathString = function _pathString(opts) {
            var w = 100 - opts.strokeWidth / 2;
            return utils.render(this._pathTemplate, {
              width: w,
              strokeWidth: opts.strokeWidth,
              halfOfStrokeWidth: opts.strokeWidth / 2
            });
          };
          Square.prototype._trailString = function _trailString(opts) {
            var w = 100 - opts.strokeWidth / 2;
            return utils.render(this._trailTemplate, {
              width: w,
              strokeWidth: opts.strokeWidth,
              halfOfStrokeWidth: opts.strokeWidth / 2,
              startMargin: opts.strokeWidth / 2 - opts.trailWidth / 2
            });
          };
          module3.exports = Square;
        }, {
          "./shape": 8,
          "./utils": 10
        }],
        10: [function(require2, module3, exports3) {
          var merge = require2("lodash.merge");
          var PREFIXES = "Webkit Moz O ms".split(" ");
          var FLOAT_COMPARISON_EPSILON = 1e-3;
          function render(template, vars) {
            var rendered = template;
            for (var key in vars) {
              if (vars.hasOwnProperty(key)) {
                var val = vars[key];
                var regExpString = "\\{" + key + "\\}";
                var regExp = new RegExp(regExpString, "g");
                rendered = rendered.replace(regExp, val);
              }
            }
            return rendered;
          }
          function setStyle(element, style, value) {
            var elStyle = element.style;
            for (var i = 0; i < PREFIXES.length; ++i) {
              var prefix = PREFIXES[i];
              elStyle[prefix + capitalize(style)] = value;
            }
            elStyle[style] = value;
          }
          function setStyles(element, styles) {
            forEachObject(styles, function(styleValue, styleName) {
              if (styleValue === null || styleValue === void 0) {
                return;
              }
              if (isObject(styleValue) && styleValue.prefix === true) {
                setStyle(element, styleName, styleValue.value);
              } else {
                element.style[styleName] = styleValue;
              }
            });
          }
          function capitalize(text) {
            return text.charAt(0).toUpperCase() + text.slice(1);
          }
          function isString(obj) {
            return typeof obj === "string" || obj instanceof String;
          }
          function isFunction(obj) {
            return typeof obj === "function";
          }
          function isArray(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]";
          }
          function isObject(obj) {
            if (isArray(obj)) {
              return false;
            }
            var type = typeof obj;
            return type === "object" && !!obj;
          }
          function forEachObject(object, callback) {
            for (var key in object) {
              if (object.hasOwnProperty(key)) {
                var val = object[key];
                callback(val, key);
              }
            }
          }
          function floatEquals(a, b) {
            return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
          }
          function removeChildren(el) {
            while (el.firstChild) {
              el.removeChild(el.firstChild);
            }
          }
          module3.exports = {
            extend: merge,
            render,
            setStyle,
            setStyles,
            capitalize,
            isString,
            isFunction,
            isObject,
            forEachObject,
            floatEquals,
            removeChildren
          };
        }, {
          "lodash.merge": 1
        }]
      }, {}, [5])(5);
    });
  }
});
export default require_progressbar();
/*! Bundled license information:

progressbar.js/dist/progressbar.js:
  (*! For license information please see shifty.js.LICENSE.txt *)
*/
//# sourceMappingURL=progressbar__js.js.map
