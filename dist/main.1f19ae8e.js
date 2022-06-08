// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
kaboom({
  global: true,
  background: [134, 135, 247],
  width: 320,
  height: 240,
  scale: 4,
  canvas: document.getElementById("game"),
  font: "sink",
  fullscreen: true,
  scaleMode: "stretch"
});
/* loadRoot("sprites/"); */

loadAseprite("mario", "Mario.png", "Mario.json");
loadAseprite("enemies", "enemies.png", "enemies.json");
loadSprite("ground", "ground.png");
loadSprite("questionBox", "questionBox.png");
loadSprite("emptyBox", "emptyBox.png");
loadSprite("brick", "brick.png");
loadSprite("coin", "coin.png");
loadSprite("bigMushy", "bigMushy.png");
loadSprite("Flower", "Flower.png");
loadSprite("pipeTop", "pipeTop.png");
loadSprite("pipeBottom", "pipeBottom.png");
loadSprite("shrubbery", "shrubbery.png");
loadSprite("hill", "hill.png");
loadSprite("cloud", "cloud.png");
loadSprite("castle", "castle.png");
/* loadRoot("sounds/"); */

loadSound("mushroom", "mushroom.wav");
loadSound("coin", "coin.wav");
loadSound("flower", "flower.wav");
loadSound("jump", "jump.wav");
loadSound("hit", "hit.wav");
loadSound("gameover", "gameover.wav");
loadSound("stageclear", "stageclear.wav");
loadSound("goodbox", "goodbox.wav");
loadSound("getsmall", "getsmall.wav");
loadSound("flower-chomp", "flower-chomp.mp3"); //soundtrack

loadSound("level0", "level0.mp3");
loadSound("level1", "level1.mp3");
loadSound("level2", "level2.mp3");
loadSound("level3", "level3.mp3");
var LEVELS = [["                                                                                                  ", "                                                                                                  ", "                                                                                                  ", "                                                                                                  ", "                                                                                                  ", "                                                                                                  ", "                                                                                                  ", "     f-?-b-                                                                                       ", "                                                      ?        ?                                  ", "                                                           ?                                      ", "                                        _                                                         ", "             Y                     _    |                                                         ", "             _         _           |    |                _                                        ", "             |         |E          |    |      E   E     |                            H           ", "================     =============================================================================", "================     ============================================================================="], ["                                                                                             ", "                                                                                             ", "                                                                                             ", "                                       ?                                                     ", "                                                                                             ", "                                   -?-                                                       ", "                                                                                             ", "      -?-b-                  -?-                                                             ", "                                                                                             ", "                                                                                             ", "                                                                                             ", "                                                                                             ", "       _                                            _                                        ", "       |                                            |          E    E            H           ", "================     ========================================================================", "================     ========================================================================"]];
var levelConf = {
  // grid size
  width: 16,
  height: 16,
  pos: vec2(0, 0),
  // define each object as a list of components
  "=": function _() {
    return [sprite("ground"), area(), solid(), origin("bot"), "ground"];
  },
  "-": function _() {
    return [sprite("brick"), area(), solid(), origin("bot"), "brick"];
  },
  H: function H() {
    return [sprite("castle"), area({
      width: 1,
      height: 240
    }), origin("bot"), "castle"];
  },
  "?": function _() {
    return [sprite("questionBox"), area(), solid(), origin("bot"), "questionBox", "coinBox"];
  },
  b: function b() {
    return [sprite("questionBox"), area(), solid(), origin("bot"), "questionBox", "mushyBox"];
  },
  f: function f() {
    return [sprite("questionBox"), area(), solid(), origin("bot"), "questionBox", "flowerBox"];
  },
  "!": function _() {
    return [sprite("emptyBox"), area(), solid(), bump(), origin("bot"), "emptyBox"];
  },
  c: function c() {
    return [sprite("coin"), area(), solid(), bump(64, 8), cleanup(), lifespan(1, {
      fade: 0.5
    }), origin("bot"), "coin"];
  },
  M: function M() {
    return [sprite("bigMushy"), area(), solid(), patrol(10000), body(), cleanup(), origin("bot"), "bigMushy"];
  },
  F: function F() {
    return [sprite("Flower"), area(), solid(), body(), cleanup(), origin("bot"), "Flower"];
  },
  "|": function _() {
    return [sprite("pipeBottom"), area(), solid(), origin("bot"), "pipe"];
  },
  _: function _() {
    return [sprite("pipeTop"), area(), solid(), origin("bot"), "pipe"];
  },
  E: function E() {
    return [sprite("enemies", {
      anim: "Walking"
    }), area({
      width: 20,
      height: 24
    }), solid(), body(), patrol(50), tarma(), origin("bot"), "badGuy"];
  },
  A: function A() {
    return [sprite("enemies", {
      anim: "Walk"
    }), area({
      width: 26,
      height: 20
    }), solid(), body(), patrol(80), ami(), origin("bot"), "badGuy"];
  },
  D: function D() {
    return [sprite("enemies", {
      anim: "WalkHB"
    }), area({
      width: 20,
      height: 28
    }), solid(), body(), patrol(20), dito(), origin("bot"), "badGuy"];
  },
  Y: function Y() {
    return [sprite("enemies", {
      anim: "Piranha"
    }), area({
      width: 20,
      height: 28
    }),
    /* solid(), */
    shark(), origin("top"), "badGuy", {
      speed: 20
    }];
  },
  p: function p() {
    return [sprite("mario", {
      frame: 0
    }), area({
      width: 16,
      height: 16
    }), body(), mario(), bump(150, 20, false), origin("bot"), "player"];
  }
};
scene("start", function () {
  add([text("Press enter to play", {
    size: 18
  }), pos(width() / 2, height() / 2), origin("center"), color(255, 255, 255)]);
  onKeyRelease("enter", function () {
    go("game");
  });
});
go("start");
scene("game", function () {
  var levelNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  layers(["bg", "game", "ui"], "game");
  /* gravity(2200); */

  var level = addLevel(LEVELS[levelNumber], levelConf);
  var music = play("level".concat(levelNumber), {
    volume: 0.1,
    detune: rand(0, 0)
  });
  music.play();
  add([sprite("cloud"), pos(20, 50), layer("bg")]);
  add([sprite("cloud"), pos(150, 60), layer("bg")]);
  add([sprite("cloud"), pos(320, 40), layer("bg")]);
  add([sprite("cloud"), pos(520, 50), layer("bg")]);
  add([sprite("cloud"), pos(620, 70), layer("bg")]);
  add([sprite("cloud"), pos(820, 40), layer("bg")]);
  add([sprite("cloud"), pos(1020, 70), layer("bg")]);
  add([sprite("cloud"), pos(1190, 50), layer("bg")]);
  add([sprite("cloud"), pos(1300, 80), layer("bg")]);
  add([sprite("cloud"), pos(1420, 60), layer("bg")]);
  add([sprite("hill"), pos(32, 208), layer("bg"), origin("bot")]);
  add([sprite("hill"), pos(409, 208), layer("bg"), origin("bot")]);
  add([sprite("hill"), pos(803, 208), layer("bg"), origin("bot")]);
  add([sprite("hill"), pos(1200, 208), layer("bg"), origin("bot")]);
  add([sprite("hill"), pos(1500, 208), layer("bg"), origin("bot")]);
  add([sprite("shrubbery"), pos(200, 208), layer("bg"), origin("bot")]);
  add([sprite("shrubbery"), pos(680, 208), layer("bg"), origin("bot")]);
  add([sprite("shrubbery"), pos(480, 208), layer("bg"), origin("bot")]);
  add([sprite("shrubbery"), pos(1080, 208), layer("bg"), origin("bot")]);
  add([sprite("shrubbery"), pos(1250, 208), layer("bg"), origin("bot")]);
  add([text("Level " + (levelNumber + 1), {
    size: 18
  }), pos(vec2(160, 120)), color(255, 255, 255), origin("center"), layer("ui"), lifespan(1, {
    fade: 0.5
  })]); //player

  var player = level.spawn("p", 1, 10);
  var SPEED = 100;
  onKeyDown("right", function () {
    if (player.isFrozen) return;
    player.flipX(false);
    player.move(SPEED, 0);
  });
  onKeyDown("left", function () {
    if (player.isFrozen) return;
    player.flipX(true);

    if (toScreen(player.pos).x > 20) {
      player.move(-SPEED, 0);
    }
  });
  onKeyPress("up", function () {
    if (player.isAlive && player.grounded()) {
      player.jump(600);
      canSquash = true;
    }

    play("jump", {
      volume: 0.05,
      detune: rand(-200, 0)
    });
  }); //Killed

  function killed() {
    // Mario is dead :(
    if (player.isAlive == false) return; // Don't run it if mario is already dead

    player.die();
    music.pause();
    add([text("Gio is dead :(", {
      size: 24
    }), pos(toWorld(vec2(160, 120))), color(255, 255, 255), origin("center"), layer("ui")]);
    wait(3, function () {
      go("start");
    });
  }

  player.onFall(function () {
    canSquash = true;
  });
  player.onUpdate(function () {
    // center camera to player
    var currCam = camPos();

    if (currCam.x < player.pos.x) {
      camPos(player.pos.x, currCam.y);
    }

    if (player.isAlive && player.grounded()) {
      canSquash = false;
    } // Check if Mario has fallen off the screen


    if (player.pos.y > height() - 16) {
      killed();
    }
  });
  var canSquash = false; //collision with badguy

  player.onCollide("badGuy", function (baddy) {
    if (baddy.isAlive == false) return;
    if (player.isAlive == false) return;

    if (canSquash) {
      // Mario has jumped on the bad guy:
      baddy.squash();
      play("hit", {
        volume: 0.2,
        detune: rand(-100, 0)
      });
    } else {
      // Mario has been hurt
      if (player.isFlamy) {
        wait(0.15, function () {
          player.bigger();
          play("getsmall", {
            volume: 0.2,
            detune: rand(-100, 0)
          });
        });
      } else if (player.isBig) {
        wait(0.15, function () {
          player.smaller();
          play("getsmall", {
            volume: 0.2,
            detune: rand(-100, 0)
          });
        });
      } else {
        // Mario is dead :(
        killed();
      }
    }
  });
  player.on("headbutt", function (obj) {
    if (obj.is("questionBox")) {
      if (obj.is("coinBox")) {
        var coin = level.spawn("c", obj.gridPos.sub(0, 1));
        coin.bump();
        play("coin", {
          volume: 0.2,
          detune: rand(-400, 100)
        });
      } else if (obj.is("mushyBox")) {
        level.spawn("M", obj.gridPos.sub(0, 1));
        play("goodbox", {
          volume: 0.7,
          detune: rand(-400, 100)
        });
      } else if (obj.is("flowerBox")) {
        level.spawn("F", obj.gridPos.sub(0, 1));
        play("goodbox", {
          volume: 0.7,
          detune: rand(-400, 100)
        });
      }

      var pos = obj.gridPos;
      destroy(obj);
      var box = level.spawn("!", pos);
      box.bump();
    }
  });
  player.onCollide("bigMushy", function (mushy) {
    destroy(mushy);
    player.bigger();
    play("mushroom", {
      volume: 0.2,
      detune: rand(-400, 100)
    });
  });
  player.onCollide("Flower", function (flower) {
    destroy(flower);
    player.flamy();
    play("flower", {
      volume: 0.2,
      detune: rand(-400, 100)
    });
  }); //castle

  player.onCollide("castle", function (castle, side) {
    player.freeze();
    music.pause();
    play("stageclear", {
      volume: 0.2,
      detune: rand(-200, 100)
    });
    add([text("Good Giob!", {
      size: 24
    }), pos(toWorld(vec2(160, 120))), color(255, 255, 255), origin("center"), layer("ui")]);
    wait(7, function () {
      var nextLevel = levelNumber + 1;

      if (nextLevel >= LEVELS.length) {
        go("start");
      } else {
        go("game", nextLevel);
      }
    });
  }); //shark move

  action("shark", function (s) {
    s.move(0, -s.speed);

    if (s.pos.y > 200 || s.pos.y < 150) {
      s.speed = s.speed * -1;
    }
  });
}); //patrol function

function patrol() {
  var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return {
    id: "patrol",
    require: ["pos", "area"],
    startingPos: vec2(0, 0),
    add: function add() {
      this.startingPos = this.pos;
      this.onCollide("badGuy", function () {
        dir = -dir;
      });
      this.onCollide("pipe", function () {
        dir = -dir;
      });
    },
    update: function update() {
      if (Math.abs(this.pos.x - this.startingPos.x) >= distance) {
        dir = -dir;
      }

      this.move(speed * dir, 0);
    }
  };
} //enemies set


function tarma() {
  return {
    id: "tarma",
    require: ["pos", "area", "sprite", "patrol"],
    isAlive: true,
    update: function update() {},
    squash: function squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 2;
      this.area.width = 18;
      this.area.height = 8;
      this.use(lifespan(0.5, {
        fade: 0.1
      }));
    }
  };
}

function ami() {
  return {
    id: "ami",
    require: ["pos", "area", "sprite", "patrol"],
    isAlive: true,
    update: function update() {},
    squash: function squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 5;
      this.area.width = 26;
      this.area.height = 18;
      this.use(lifespan(0.5, {
        fade: 0.1
      }));
    }
  };
}

function dito() {
  return {
    id: "dito",
    require: ["pos", "area", "sprite", "patrol"],
    isAlive: true,
    update: function update() {},
    squash: function squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 12;
      this.area.width = 20;
      this.area.height = 22;
      this.use(lifespan(0.5, {
        fade: 0.1
      }));
    }
  };
}

function shark() {
  return {
    id: "shark",
    require: ["pos", "area", "sprite"],
    isAlive: true,
    update: function update() {}
  };
} //general bump


function bump() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var stopAtOrigin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return {
    id: "bump",
    require: ["pos"],
    bumpOffset: offset,
    speed: speed,
    bumped: false,
    origPos: 0,
    direction: -1,
    update: function update() {
      if (this.bumped) {
        this.pos.y = this.pos.y + this.direction * this.speed;

        if (this.pos.y < this.origPos - this.bumpOffset) {
          this.direction = 1;
        }

        if (stopAtOrigin && this.pos.y >= this.origPos) {
          this.bumped = false;
          this.pos.y = this.origPos;
          this.direction = -1;
        }
      }
    },
    bump: function bump() {
      this.bumped = true;
      this.origPos = this.pos.y;
    }
  };
} //GIO


function mario() {
  return {
    id: "mario",
    require: ["body", "area", "sprite", "bump"],
    smallAnimation: "Running",
    bigAnimation: "RunningBig",
    flameanimation: "Loop",
    smallStopFrame: 0,
    bigStopFrame: 8,
    flameStopFrame: 17,
    smallJumpFrame: 5,
    bigJumpFrame: 13,
    flameJumpFrame: 22,

    /* smallDieFrame: 6, */
    isBig: false,
    isFrozen: false,
    isFlamy: false,
    isAlive: true,
    update: function update() {
      if (this.isFrozen) {
        this.standing();
        return;
      }

      if (!this.grounded()) {
        this.jumping();
      } else {
        if (keyIsDown("left") || keyIsDown("right")) {
          this.running();
        } else {
          this.standing();
        }
      }
    },
    bigger: function bigger() {
      this.isBig = true;
      this.isFlamy = false;
      this.area.width = 20;
      this.area.height = 22;
    },
    flamy: function flamy() {
      this.isBig = false;
      this.isFlamy = true;
      this.area.width = 20;
      this.area.height = 22;
    },
    smaller: function smaller() {
      this.isBig = false;
      this.isFlamy = false;
      this.area.width = 16;
      this.area.height = 16;
    },
    standing: function standing() {
      this.stop();

      if (this.isBig) {
        this.frame = this.bigStopFrame;
      } else if (this.isFlamy) {
        this.frame = this.flameStopFrame;
      } else {
        this.frame = this.smallStopFrame;
      }
      /* this.frame = this.isBig ? this.bigStopFrame : this.smallStopFrame; */

    },
    jumping: function jumping() {
      this.stop();

      if (this.isBig) {
        this.frame = this.bigJumpFrame;
      } else if (this.isFlamy) {
        this.frame = this.flameJumpFrame;
      } else {
        this.frame = this.smallJumpFrame;
      }
      /* this.frame = this.isBig ? this.bigJumpFrame : this.smallJumpFrame; */

    },
    running: function running() {
      var animation;

      if (this.isBig) {
        animation = this.bigAnimation;
      } else if (this.isFlamy) {
        animation = this.flameanimation;
      } else {
        animation = this.smallAnimation;
      }
      /* const animation = this.isBig ? this.bigAnimation : this.smallAnimation; */


      if (this.curAnim() !== animation) {
        this.play(animation);
      }
    },
    freeze: function freeze() {
      this.isFrozen = true;
    },
    die: function die() {
      /* this.stop();
      this.frame = this.smallDieFrame; */
      this.unuse("body");
      this.bump();
      this.isAlive = false;
      this.freeze();
      this.use(lifespan(6, {
        fade: 1
      }));
      play("gameover", {
        volume: 0.2,
        detune: rand(-100, 0)
      });
    }
  };
}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58565" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map