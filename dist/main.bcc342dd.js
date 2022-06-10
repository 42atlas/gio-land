parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    epB2: [
      function (require, module, exports) {
        kaboom({
          global: !0,
          background: [134, 135, 247],
          width: 320,
          height: 240,
          scale: 3,
          canvas: document.getElementById("game"),
          font: "sink",
          fullscreen: !0,
          scaleMode: "stretch",
        });
        var e = 320;
        loadAseprite("mario", "Mario.png", "Mario.json"),
          loadAseprite("enemies", "enemies.png", "enemies.json"),
          loadSprite("ground", "ground.png"),
          loadSprite("questionBox", "questionBox.png"),
          loadSprite("emptyBox", "emptyBox.png"),
          loadSprite("brick", "brick.png"),
          loadSprite("coin", "coin.png"),
          loadSprite("bigMushy", "bigMushy.png"),
          loadSprite("Flower", "Flower.png"),
          loadSprite("pipeTop", "pipeTop.png"),
          loadSprite("pipeBottom", "pipeBottom.png"),
          loadSprite("shrubbery", "shrubbery.png"),
          loadSprite("hill", "hill.png"),
          loadSprite("cloud", "cloud.png"),
          loadSprite("castle", "castle.png"),
          loadSprite("noce", "noce.png"),
          loadSprite("racchetta", "racchetta.png"),
          loadSound("mushroom", "mushroom.wav"),
          loadSound("coin", "coin.wav"),
          loadSound("flower", "flower.wav"),
          loadSound("jump", "jump.wav"),
          loadSound("hit", "hit.wav"),
          loadSound("gameover", "gameover.wav"),
          loadSound("stageclear", "stageclear.wav"),
          loadSound("goodbox", "goodbox.wav"),
          loadSound("getsmall", "getsmall.wav"),
          loadSound("flower-chomp", "flower-chomp.mp3"),
          loadSound("noce", "noce.wav"),
          loadSound("level0", "level0.mp3"),
          loadSound("level1", "level1.mp3"),
          loadSound("level2", "level2.mp3"),
          loadSound("level3", "level3.mp3");
        var i = [
            [
              "                                                                                                                                                                                                           ",
              "                                                                                                                                                                                                           ",
              "                                                                                                                                                                                                           ",
              "                                                                                                                                                                                                           ",
              "                                                                                                                                                                                                           ",
              "                                                                                                                                                                                                           ",
              "                                                                                                                                       ?                                                                   ",
              "      -?-b-                 ?-                                                  -??-                                   ?                                                                                   ",
              "                                                      ?          ?                                ?                                                                                                        ",
              "                                                             ?                                               -f-  ?                                               ---      ???   ---                       ",
              "                                                 -                                                                                               _                                                         ",
              "                                   _                                                                                                _     _      |                                                         ",
              "                       _           |    _                _               _                                                  _       |     |      |             -                                           ",
              "                E      |           |    |      E   E     |           E   |              A     _         _   A               |       |     |      |             |          E E E E                 H        ",
              "=================================================================================================  ===========================   =====   ===   ============================================================",
              "=================================================================================================  ===========================   =====   ===   ============================================================",
            ],
            [
              "                                                                                                                                                                                                            ",
              "                                                                                                                                                                                                            ",
              "                                                                                                                                                                                                            ",
              "                                         ?                                                                                   -?-                                                                            ",
              "                                                                   f                                                                                                                                        ",
              "                                   -?-                                                                                                                  ?                                                   ",
              "                                                                                                               -?-                                                                                          ",
              "      -?-b-                  -?-                                                                   b                               E                                                                        ",
              "                                                                                                                                  -?-                                ---                                    ",
              "                                                                                 -?-                                E                                                                                       ",
              "                                                           -                                                       -?-                                                                                      ",
              "                                                           |                              -                                                                                                                 ",
              "       _                                            _      |                              |                                     _                                                                           ",
              "       |                            A               |      |    E    E                    |          A           A   _          | A          A             E              A                       H         ",
              "================     =========================================================     ======================================    ===============================================================================",
              "================     =========================================================     ======================================    ===============================================================================",
            ],
            [
              "                                                                                                                                                                                                            ",
              "                                                                                                                                                                                                            ",
              "                                                                                                                                                                                                            ",
              "                                       ?                                                                                                                                                                    ",
              "                                                                                                                                                                                                            ",
              "                                   -?-             -?-         -?-          -?-                                                                                                                             ",
              "                                                                                                                                                                                ?      ?                    ",
              "      -?-f-                  -b-                                                         ---?--?--?--?                                                                        ?                             ",
              "                                                                                                                                          ?-f-?                                                             ",
              "                                                                                                                          ?-                                                                                ",
              "                                                                                                                                                                                                            ",
              "                             Y           Y            Y                   Y                Y       Y       Y                                                                                                ",
              "       _                     _           _            _        _          _                _       _       _                         _                                                                      ",
              "       |                     |    E      |    A       |        |    A     |     A          |       |       |   E                     |                              D                             H         ",
              "================     ====================================     =======================================================   =======   ==========================================================================",
              "================     ====================================     =======================================================   =======   ==========================================================================",
            ],
            [
              "                                                                                                                                                                                                            ",
              "                                                                                                                                                                                                            ",
              "                                                                                                                                                                                                            ",
              "                                                                                                                                                                                                            ",
              "                                               ????????????????????????????????????                                                                                                                         ",
              "                                   -?-                                                                                                                                                                      ",
              "                                                                                                                                                                                                            ",
              "      -?-b-                  -?-                                                         -f-                                              --?-                                                              ",
              "                                                                                                                                                                                                            ",
              "                                                                                                                                                                                                            ",
              "                                                                                                                      _                                                                                     ",
              "                                                                                                         _            |                                      _                                              ",
              "       _               _                                              _          _                       |            |                  _                   |                                              ",
              "       |               |          E  E  E  EE  E   D   A    A    A    |     D    |                       |            |         D        |        D          |        D                           H         ",
              "================     ================================================================  ==========    =========   ===========================================================================================",
              "================     ================================================================  ==========    =========   ===========================================================================================",
            ],
          ],
          t = {
            width: 16,
            height: 16,
            pos: vec2(0, 0),
            "=": function () {
              return [
                sprite("ground"),
                area(),
                solid(),
                origin("bot"),
                "ground",
                "wall",
              ];
            },
            "-": function () {
              return [
                sprite("brick"),
                area(),
                solid(),
                origin("bot"),
                "brick",
                "wall",
              ];
            },
            H: function () {
              return [
                sprite("castle"),
                area({ width: 1, height: 240 }),
                origin("bot"),
                "castle",
              ];
            },
            "?": function () {
              return [
                sprite("questionBox"),
                area(),
                solid(),
                origin("bot"),
                "questionBox",
                "coinBox",
                "wall",
              ];
            },
            b: function () {
              return [
                sprite("questionBox"),
                area(),
                solid(),
                origin("bot"),
                "questionBox",
                "mushyBox",
                "wall",
              ];
            },
            f: function () {
              return [
                sprite("questionBox"),
                area(),
                solid(),
                origin("bot"),
                "questionBox",
                "flowerBox",
                "wall",
              ];
            },
            "!": function () {
              return [
                sprite("emptyBox"),
                area(),
                solid(),
                l(),
                origin("bot"),
                "emptyBox",
                "wall",
              ];
            },
            c: function () {
              return [
                sprite("coin"),
                area(),
                solid(),
                l(64, 8),
                cleanup(),
                lifespan(1, { fade: 0.5 }),
                origin("bot"),
                "coin",
              ];
            },
            M: function () {
              return [
                sprite("bigMushy"),
                area(),
                solid(),
                o(1e4),
                body(),
                cleanup(),
                origin("bot"),
                "bigMushy",
              ];
            },
            F: function () {
              return [
                sprite("Flower"),
                area(),
                solid(),
                body(),
                cleanup(),
                origin("bot"),
                "Flower",
              ];
            },
            "|": function () {
              return [
                sprite("pipeBottom"),
                area(),
                solid(),
                origin("bot"),
                "pipe",
                "wall",
              ];
            },
            _: function () {
              return [
                sprite("pipeTop"),
                area(),
                solid(),
                origin("bot"),
                "pipe",
                "wall",
              ];
            },
            E: function () {
              return [
                sprite("enemies", { anim: "Walking" }),
                area({ width: 20, height: 24 }),
                solid(),
                body(),
                o(50),
                n(),
                origin("bot"),
                "badGuy",
                "enemy",
              ];
            },
            A: function () {
              return [
                sprite("enemies", { anim: "Walk" }),
                area({ width: 26, height: 20 }),
                solid(),
                body(),
                o(100),
                s(),
                origin("bot"),
                "badGuy",
                "enemy",
              ];
            },
            D: function () {
              return [
                sprite("enemies", { anim: "WalkHB" }),
                area({ width: 20, height: 28 }),
                solid(),
                body(),
                o(30),
                a(),
                state("move", ["idle", "attack", "move"]),
                origin("bot"),
                "badGuy",
                "enemy",
                "dito",
              ];
            },
            Y: function () {
              return [
                sprite("enemies", { anim: "Piranha" }),
                area({ width: 20, height: 28 }),
                r(),
                origin("top"),
                "shark",
                "badGuyShark",
                "enemy",
                { speed: 20 },
              ];
            },
            p: function () {
              return [
                sprite("mario", { frame: 0 }),
                area({ width: 16, height: 16 }),
                body(),
                d(),
                l(150, 20, !1),
                origin("bot"),
                "player",
                { score: 0 },
              ];
            },
          };
        function o() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 100,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 50,
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1;
          return {
            id: "patrol",
            require: ["pos", "area"],
            startingPos: vec2(0, 0),
            add: function () {
              (this.startingPos = this.pos),
                this.onCollide("badGuy", function () {
                  t = -t;
                }),
                this.onCollide("pipe", function () {
                  t = -t;
                });
            },
            update: function () {
              Math.abs(this.pos.x - this.startingPos.x) >= e && (t = -t),
                this.move(i * t, 0);
            },
          };
        }
        function n() {
          return {
            id: "tarma",
            require: ["pos", "area", "sprite", "patrol"],
            isAlive: !0,
            update: function () {},
            squash: function () {
              (this.isAlive = !1),
                this.unuse("patrol"),
                this.stop(),
                (this.frame = 2),
                (this.area.width = 18),
                (this.area.height = 8),
                this.use(lifespan(0.5, { fade: 0.1 }));
            },
          };
        }
        function s() {
          return {
            id: "ami",
            require: ["pos", "area", "sprite", "patrol"],
            isAlive: !0,
            update: function () {},
            squash: function () {
              (this.isAlive = !1),
                this.unuse("patrol"),
                this.stop(),
                (this.frame = 5),
                (this.area.width = 26),
                (this.area.height = 18),
                this.use(lifespan(0.5, { fade: 0.1 }));
            },
          };
        }
        function a() {
          return {
            id: "dito",
            require: ["pos", "area", "sprite", "patrol", "state"],
            isAlive: !0,
            update: function () {},
            squash: function () {
              (this.isAlive = !1),
                this.unuse("patrol"),
                this.stop(),
                (this.frame = 12),
                (this.area.width = 20),
                (this.area.height = 22),
                this.use(lifespan(0.5, { fade: 0.1 }));
            },
          };
        }
        function r() {
          return {
            id: "shark",
            require: ["pos", "area", "sprite"],
            isAlive: !0,
            update: function () {},
            squash: function () {
              (this.isAlive = !1),
                this.unuse("patrol"),
                this.stop(),
                (this.frame = 12),
                (this.area.width = 20),
                (this.area.height = 22),
                this.use(lifespan(0.5, { fade: 0.1 }));
            },
          };
        }
        function l() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 8,
            i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2,
            t =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          return {
            id: "bump",
            require: ["pos"],
            bumpOffset: e,
            speed: i,
            bumped: !1,
            origPos: 0,
            direction: -1,
            update: function () {
              this.bumped &&
                ((this.pos.y = this.pos.y + this.direction * this.speed),
                this.pos.y < this.origPos - this.bumpOffset &&
                  (this.direction = 1),
                t &&
                  this.pos.y >= this.origPos &&
                  ((this.bumped = !1),
                  (this.pos.y = this.origPos),
                  (this.direction = -1)));
            },
            bump: function () {
              (this.bumped = !0), (this.origPos = this.pos.y);
            },
          };
        }
        function d() {
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
            flameShotFrame: 25,
            isBig: !1,
            isFrozen: !1,
            isFlamy: !1,
            isAlive: !0,
            update: function () {
              this.isFrozen
                ? this.standing()
                : this.isFlamy && isKeyDown("space")
                ? this.shooting()
                : this.isGrounded()
                ? isKeyDown("left") || isKeyDown("right")
                  ? this.running()
                  : this.standing()
                : this.jumping();
            },
            bigger: function () {
              (this.isBig = !0),
                (this.isFlamy = !1),
                (this.area.width = 20),
                (this.area.height = 22);
            },
            flamy: function () {
              (this.isShooting = !1),
                (this.isBig = !1),
                (this.isFlamy = !0),
                (this.area.width = 20),
                (this.area.height = 22);
            },
            smaller: function () {
              (this.isBig = !1),
                (this.isFlamy = !1),
                (this.area.width = 16),
                (this.area.height = 16);
            },
            standing: function () {
              this.stop(),
                this.isBig
                  ? (this.frame = this.bigStopFrame)
                  : this.isFlamy
                  ? (this.frame = this.flameStopFrame)
                  : (this.frame = this.smallStopFrame);
            },
            jumping: function () {
              this.stop(),
                this.isBig
                  ? (this.frame = this.bigJumpFrame)
                  : this.isFlamy
                  ? (this.frame = this.flameJumpFrame)
                  : (this.frame = this.smallJumpFrame);
            },
            shooting: function () {
              this.stop(), this.isFlamy && (this.frame = this.flameShotFrame);
            },
            running: function () {
              var e;
              (e = this.isBig
                ? this.bigAnimation
                : this.isFlamy
                ? this.flameanimation
                : this.smallAnimation),
                this.curAnim() !== e && this.play(e);
            },
            freeze: function () {
              this.isFrozen = !0;
            },
            die: function () {
              this.unuse("body"),
                this.bump(),
                (this.isAlive = !1),
                this.freeze(),
                this.use(lifespan(6, { fade: 1 })),
                play("gameover", { volume: 0.2, detune: rand(-100, 0) });
            },
          };
        }
        scene("start", function () {
          add([
            text("Press enter to play", { size: 10 }),
            pos(160, 100),
            origin("center"),
            color(255, 255, 255),
          ]),
            add([
              text("Use the arrows to move", { size: 8 }),
              pos(160, 140),
              origin("center"),
              color(255, 255, 255),
            ]),
            add([
              text("and the spacebar eventually", { size: 8 }),
              pos(160, 150),
              origin("center"),
              color(255, 255, 255),
            ]),
            onKeyRelease("enter", function () {
              go("game");
            });
        }),
          go("start"),
          scene("lose", function (e, i) {
            add([
              sprite("mario", { frame: 6 }),
              pos(width() / 2, height() / 2 - 100),
              scale(2),
              origin("center"),
            ]),
              add([
                text("Score:".concat(e), { size: 8, font: "sink" }),
                pos(width() / 2, height() / 2 - 40),
                scale(2),
                origin("center"),
                setData("score", e),
              ]),
              add([
                text("Time:".concat(i.toFixed(2)), { size: 8, font: "sink" }),
                pos(width() / 2, height() / 2 - 10),
                scale(2),
                origin("center"),
                setData("time", i.toFixed(2)),
              ]),
              add([
                text("Press enter to play again", { size: 6, font: "sink" }),
                pos(width() / 2, height() / 2 - 60),
                scale(2),
                origin("center"),
                setData("time", i.toFixed(2)),
              ]),
              onKeyRelease("enter", function () {
                return go("game");
              });
          }),
          scene("win", function (e, i) {
            add([
              text("YOU WON!"),
              pos(width() / 2, height() / 2 - 120),
              scale(2),
              origin("center"),
            ]),
              add([
                sprite("mario", { frame: 13 }),
                pos(width() / 2, height() / 2 - 100),
                scale(2),
                origin("center"),
              ]),
              add([
                text("Score:".concat(e), { size: 8, font: "sink" }),
                pos(width() / 2, height() / 2 - 40),
                scale(2),
                origin("center"),
                setData("score", e),
              ]),
              add([
                text("Time:".concat(i.toFixed(2)), { size: 8, font: "sink" }),
                pos(width() / 2, height() / 2 - 10),
                scale(2),
                origin("center"),
                setData("time", i.toFixed(2)),
              ]),
              add([
                text("Press enter to play again", { size: 6, font: "sink" }),
                pos(width() / 2, height() / 2 - 60),
                scale(2),
                origin("center"),
                setData("time", i.toFixed(2)),
              ]),
              onKeyRelease("enter", function () {
                return go("game");
              });
          }),
          scene("game", function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
            layers(["bg", "game", "ui"], "game");
            var s = addLevel(i[e], t),
              a = play("level".concat(e), { volume: 0.2, detune: rand(0, 0) });
            a.play(),
              add([sprite("cloud"), pos(20, 50), layer("bg")]),
              add([sprite("cloud"), pos(150, 60), layer("bg")]),
              add([sprite("cloud"), pos(320, 40), layer("bg")]),
              add([sprite("cloud"), pos(520, 50), layer("bg")]),
              add([sprite("cloud"), pos(620, 70), layer("bg")]),
              add([sprite("cloud"), pos(820, 40), layer("bg")]),
              add([sprite("cloud"), pos(1020, 70), layer("bg")]),
              add([sprite("cloud"), pos(1190, 50), layer("bg")]),
              add([sprite("cloud"), pos(1300, 80), layer("bg")]),
              add([sprite("cloud"), pos(1420, 60), layer("bg")]),
              add([sprite("hill"), pos(32, 208), layer("bg"), origin("bot")]),
              add([sprite("hill"), pos(409, 208), layer("bg"), origin("bot")]),
              add([sprite("hill"), pos(803, 208), layer("bg"), origin("bot")]),
              add([sprite("hill"), pos(1200, 208), layer("bg"), origin("bot")]),
              add([sprite("hill"), pos(1500, 208), layer("bg"), origin("bot")]),
              add([
                sprite("shrubbery"),
                pos(200, 208),
                layer("bg"),
                origin("bot"),
              ]),
              add([
                sprite("shrubbery"),
                pos(680, 208),
                layer("bg"),
                origin("bot"),
              ]),
              add([
                sprite("shrubbery"),
                pos(480, 208),
                layer("bg"),
                origin("bot"),
              ]),
              add([
                sprite("shrubbery"),
                pos(1080, 208),
                layer("bg"),
                origin("bot"),
              ]),
              add([
                sprite("shrubbery"),
                pos(1250, 208),
                layer("bg"),
                origin("bot"),
              ]),
              add([
                text("Level " + (e + 1), { size: 18 }),
                pos(vec2(160, 120)),
                color(255, 255, 255),
                origin("center"),
                layer("ui"),
                lifespan(1, { fade: 0.5 }),
              ]),
              add([
                text("TIME: ", { size: 8, font: "sink" }),
                pos(20, 10),
                origin("center"),
                layer("ui"),
                fixed(),
              ]);
            var r = add([
              text(n, { size: 8, font: "sink" }),
              pos(50, 10),
              fixed(),
              { time: 0 },
              origin("center"),
              layer("ui"),
            ]);
            r.onUpdate(function () {
              (n += dt()), (r.text = n.toFixed(2));
            }),
              add([
                text("SCORE: ", { size: 8, font: "sink" }),
                pos(140, 10),
                origin("center"),
                layer("ui"),
                fixed(),
              ]);
            var l = add([
              text(o, { size: 8, font: "sink" }),
              pos(170, 10),
              origin("center"),
              layer("ui"),
              fixed(),
            ]);
            var d = { LEFT: "left", RIGHT: "right" },
              u = d.RIGHT,
              p = s.spawn("p", 1, 10),
              h = 200;
            function g(e) {
              return {
                update: function () {
                  var i = e * dt();
                  (this.scale.x += i), (this.scale.y += i);
                },
              };
            }
            function c(e, i, t, o) {
              for (var n = 0; n < i; n++)
                wait(rand(0.1 * i), function () {
                  for (var i = 0; i < 2; i++)
                    add([
                      pos(e),
                      rect(4, 4),
                      outline(4),
                      scale(1 * o, 1 * o),
                      lifespan(0.1),
                      g(rand(10, 10) * o),
                      origin("center"),
                    ]);
                });
            }
            function m() {
              0 != p.isAlive &&
                (p.die(),
                a.pause(),
                add([
                  text("Gio is dead :(", { size: 24 }),
                  pos(toWorld(vec2(160, 120))),
                  color(255, 255, 255),
                  origin("center"),
                  layer("ui"),
                ]),
                wait(3, function () {
                  go("lose", o, n);
                }));
            }
            onKeyDown("right", function () {
              (u = d.RIGHT), p.isFrozen || (p.flipX(!1), p.move(100, 0));
            }),
              onKeyDown("left", function () {
                (u = d.LEFT),
                  p.isFrozen ||
                    (p.flipX(!0), toScreen(p.pos).x > 20 && p.move(-100, 0));
              }),
              onKeyPress("up", function () {
                p.isAlive && p.isGrounded() && (p.jump(600), (f = !0)),
                  play("jump", { volume: 0.05, detune: rand(-200, 0) });
              }),
              onUpdate("bullet", function (e) {
                e.move(e.bulletSpeed, 0);
              }),
              onKeyPress("space", function () {
                var e;
                p.isFlamy &&
                  ((e = p.pos.sub(-4, 10)),
                  u == d.LEFT
                    ? (e = e.sub(10, 0))
                    : u == d.RIGHT && (e = e.add(10, 0)),
                  add([
                    sprite("noce"),
                    area(),
                    pos(e),
                    origin("center"),
                    cleanup(),
                    "bullet",
                    { bulletSpeed: u == d.LEFT ? -1 * h : h },
                  ]),
                  play("noce", { volume: 0.1, detune: rand(-1200, 1200) })),
                  wait(0.2);
              }),
              onCollide("bullet", "enemy", function (e, i) {
                destroy(e), destroy(i), c(e.pos, 1, 0, 1);
              }),
              onCollide("bullet", "wall", function (e, i) {
                destroy(e), c(e.pos, 1, 0, 1);
              }),
              p.onUpdate(function () {
                var e = camPos();
                e.x < p.pos.x && camPos(p.pos.x, e.y),
                  p.isAlive && p.isGrounded() && (f = !1),
                  p.pos.y > height() - 16 && m();
              });
            var f = !1;
            p.onFall(function () {
              f = !0;
            }),
              p.onCollide("badGuy", function (e) {
                0 != e.isAlive &&
                  0 != p.isAlive &&
                  (f
                    ? (e.squash(),
                      play("hit", { volume: 0.2, detune: rand(-100, 0) }))
                    : p.isFlamy
                    ? (shake(10),
                      wait(0.25, function () {
                        p.bigger(),
                          play("getsmall", {
                            volume: 0.2,
                            detune: rand(-100, 0),
                          });
                      }))
                    : p.isBig
                    ? (shake(10),
                      wait(0.25, function () {
                        p.smaller(),
                          play("getsmall", {
                            volume: 0.2,
                            detune: rand(-100, 0),
                          });
                      }))
                    : (shake(10), m()));
              }),
              p.onCollide("badGuyShark", function (e) {
                0 != e.isAlive &&
                  0 != p.isAlive &&
                  (p.isFlamy
                    ? (shake(10),
                      wait(0.25, function () {
                        p.bigger(),
                          play("getsmall", {
                            volume: 0.2,
                            detune: rand(-100, 0),
                          });
                      }))
                    : p.isBig
                    ? (shake(10),
                      wait(0.25, function () {
                        p.smaller(),
                          play("getsmall", {
                            volume: 0.2,
                            detune: rand(-100, 0),
                          });
                      }))
                    : (shake(10), m()));
              }),
              p.on("headbutt", function (e) {
                if (e.is("questionBox")) {
                  if (e.is("coinBox"))
                    s.spawn("c", e.gridPos.sub(0, 1)).bump(),
                      (o += 5),
                      (l.text = o),
                      play("coin", { volume: 0.2, detune: rand(-400, 100) });
                  else
                    e.is("mushyBox")
                      ? (s.spawn("M", e.gridPos.sub(0, 1)),
                        play("goodbox", {
                          volume: 0.7,
                          detune: rand(-400, 100),
                        }))
                      : e.is("flowerBox") &&
                        (s.spawn("F", e.gridPos.sub(0, 1)),
                        play("goodbox", {
                          volume: 0.7,
                          detune: rand(-400, 100),
                        }));
                  var i = e.gridPos;
                  destroy(e), s.spawn("!", i).bump();
                }
              }),
              p.onCollide("bigMushy", function (e) {
                destroy(e),
                  p.bigger(),
                  play("mushroom", { volume: 0.2, detune: rand(-400, 100) });
              }),
              p.onCollide("Flower", function (e) {
                destroy(e),
                  p.flamy(),
                  play("flower", { volume: 0.2, detune: rand(-400, 100) });
              }),
              p.onCollide("castle", function (t, s) {
                p.freeze(),
                  a.pause(),
                  play("stageclear", { volume: 0.2, detune: rand(-200, 100) }),
                  add([
                    text("Good Giob!", { size: 24 }),
                    pos(toWorld(vec2(160, 120))),
                    color(255, 255, 255),
                    origin("center"),
                    layer("ui"),
                  ]),
                  wait(7, function () {
                    var t = e + 1,
                      s = o,
                      a = n;
                    t >= i.length ? go("win", s, a) : go("game", t, s, a);
                  });
              }),
              onUpdate("shark", function (e) {
                e.move(0, -e.speed),
                  (e.pos.y > 200 || e.pos.y < 150) && (e.speed = -1 * e.speed);
              });
          });
      },
      {},
    ],
  },
  {},
  ["epB2"],
  null
);
//# sourceMappingURL=/main.bcc342dd.js.map
