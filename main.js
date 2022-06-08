kaboom({
  global: true,
  background: [134, 135, 247],
  width: 320,
  height: 240,
  scale: 4,
  canvas: document.getElementById("game"),
  font: "sink",
  fullscreen: true,
  scaleMode: "stretch",
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
loadSound("flower-chomp", "flower-chomp.mp3");

//soundtrack
loadSound("level0", "level0.mp3");
loadSound("level1", "level1.mp3");
loadSound("level2", "level2.mp3");
loadSound("level3", "level3.mp3");

const LEVELS = [
  [
    "                                                                                                  ",
    "                                                                                                  ",
    "                                                                                                  ",
    "                                                                                                  ",
    "                                                                                                  ",
    "                                                                                                  ",
    "                                                                                                  ",
    "     f-?-b-                                                                                       ",
    "                                                      ?        ?                                  ",
    "                                                           ?                                      ",
    "                                        _                                                         ",
    "             Y                     _    |                                                         ",
    "             _         _           |    |                _                                        ",
    "             |         |E          |    |      E   E     |                            H           ",
    "================     =============================================================================",
    "================     =============================================================================",
  ],
  [
    "                                                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "                                       ?                                                     ",
    "                                                                                             ",
    "                                   -?-                                                       ",
    "                                                                                             ",
    "      -?-b-                  -?-                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "                                                                                             ",
    "       _                                            _                                        ",
    "       |                                            |          E    E            H           ",
    "================     ========================================================================",
    "================     ========================================================================",
  ],
];

const levelConf = {
  // grid size
  width: 16,
  height: 16,
  pos: vec2(0, 0),
  // define each object as a list of components
  "=": () => [sprite("ground"), area(), solid(), origin("bot"), "ground"],
  "-": () => [sprite("brick"), area(), solid(), origin("bot"), "brick"],
  H: () => [
    sprite("castle"),
    area({ width: 1, height: 240 }),

    origin("bot"),
    "castle",
  ],
  "?": () => [
    sprite("questionBox"),
    area(),
    solid(),
    origin("bot"),
    "questionBox",
    "coinBox",
  ],
  b: () => [
    sprite("questionBox"),
    area(),
    solid(),
    origin("bot"),
    "questionBox",
    "mushyBox",
  ],
  f: () => [
    sprite("questionBox"),
    area(),
    solid(),
    origin("bot"),
    "questionBox",
    "flowerBox",
  ],
  "!": () => [
    sprite("emptyBox"),
    area(),
    solid(),
    bump(),
    origin("bot"),
    "emptyBox",
  ],
  c: () => [
    sprite("coin"),
    area(),
    solid(),
    bump(64, 8),
    cleanup(),
    lifespan(1, { fade: 0.5 }),
    origin("bot"),
    "coin",
  ],
  M: () => [
    sprite("bigMushy"),
    area(),
    solid(),
    patrol(10000),
    body(),
    cleanup(),
    origin("bot"),
    "bigMushy",
  ],
  F: () => [
    sprite("Flower"),
    area(),
    solid(),
    body(),
    cleanup(),
    origin("bot"),
    "Flower",
  ],
  "|": () => [sprite("pipeBottom"), area(), solid(), origin("bot"), "pipe"],
  _: () => [sprite("pipeTop"), area(), solid(), origin("bot"), "pipe"],
  E: () => [
    sprite("enemies", { anim: "Walking" }),
    area({ width: 20, height: 24 }),
    solid(),
    body(),
    patrol(50),
    tarma(),
    origin("bot"),
    "badGuy",
  ],
  A: () => [
    sprite("enemies", { anim: "Walk" }),
    area({ width: 26, height: 20 }),
    solid(),
    body(),
    patrol(80),
    ami(),
    origin("bot"),
    "badGuy",
  ],
  D: () => [
    sprite("enemies", { anim: "WalkHB" }),
    area({ width: 20, height: 28 }),
    solid(),
    body(),
    patrol(20),
    dito(),
    origin("bot"),
    "badGuy",
  ],
  Y: () => [
    sprite("enemies", { anim: "Piranha" }),
    area({ width: 20, height: 28 }),
    /* solid(), */
    shark(),
    origin("top"),
    "badGuy",
    {
      speed: 20,
    },
  ],
  p: () => [
    sprite("mario", { frame: 0 }),
    area({ width: 16, height: 16 }),
    body(),
    mario(),
    bump(150, 20, false),
    origin("bot"),
    "player",
  ],
};

scene("start", () => {
  add([
    text("Press enter to play", { size: 18 }),
    pos(width() / 2, height() / 2),
    origin("center"),
    color(255, 255, 255),
  ]);

  onKeyRelease("enter", () => {
    go("game");
  });
});

go("start");

scene("game", (levelNumber = 0) => {
  layers(["bg", "game", "ui"], "game");

  /* gravity(2200); */

  const level = addLevel(LEVELS[levelNumber], levelConf);

  const music = play(`level${levelNumber}`, {
    volume: 0.1,
    detune: rand(0, 0),
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

  add([
    text("Level " + (levelNumber + 1), { size: 18 }),
    pos(vec2(160, 120)),
    color(255, 255, 255),
    origin("center"),
    layer("ui"),
    lifespan(1, { fade: 0.5 }),
  ]);

  //player
  const player = level.spawn("p", 1, 10);

  const SPEED = 100;

  onKeyDown("right", () => {
    if (player.isFrozen) return;
    player.flipX(false);
    player.move(SPEED, 0);
  });

  onKeyDown("left", () => {
    if (player.isFrozen) return;
    player.flipX(true);
    if (toScreen(player.pos).x > 20) {
      player.move(-SPEED, 0);
    }
  });

  onKeyPress("up", () => {
    if (player.isAlive && player.grounded()) {
      player.jump(600);
      canSquash = true;
    }
    play("jump", {
      volume: 0.05,
      detune: rand(-200, 0),
    });
  });

  //Killed
  function killed() {
    // Mario is dead :(
    if (player.isAlive == false) return; // Don't run it if mario is already dead
    player.die();
    music.pause();
    add([
      text("Gio is dead :(", { size: 24 }),
      pos(toWorld(vec2(160, 120))),
      color(255, 255, 255),
      origin("center"),
      layer("ui"),
    ]);
    wait(3, () => {
      go("start");
    });
  }

  player.onFall(() => {
    canSquash = true;
  });

  player.onUpdate(() => {
    // center camera to player
    var currCam = camPos();
    if (currCam.x < player.pos.x) {
      camPos(player.pos.x, currCam.y);
    }

    if (player.isAlive && player.grounded()) {
      canSquash = false;
    }

    // Check if Mario has fallen off the screen
    if (player.pos.y > height() - 16) {
      killed();
    }
  });

  let canSquash = false;

  //collision with badguy

  player.onCollide("badGuy", (baddy) => {
    if (baddy.isAlive == false) return;
    if (player.isAlive == false) return;
    if (canSquash) {
      // Mario has jumped on the bad guy:
      baddy.squash();
      play("hit", {
        volume: 0.2,
        detune: rand(-100, 0),
      });
    } else {
      // Mario has been hurt
      if (player.isFlamy) {
        wait(0.15, () => {
          player.bigger();
          play("getsmall", {
            volume: 0.2,
            detune: rand(-100, 0),
          });
        });
      } else if (player.isBig) {
        wait(0.15, () => {
          player.smaller();
          play("getsmall", {
            volume: 0.2,
            detune: rand(-100, 0),
          });
        });
      } else {
        // Mario is dead :(
        killed();
      }
    }
  });

  player.on("headbutt", (obj) => {
    if (obj.is("questionBox")) {
      if (obj.is("coinBox")) {
        let coin = level.spawn("c", obj.gridPos.sub(0, 1));
        coin.bump();
        play("coin", {
          volume: 0.2,
          detune: rand(-400, 100),
        });
      } else if (obj.is("mushyBox")) {
        level.spawn("M", obj.gridPos.sub(0, 1));
        play("goodbox", {
          volume: 0.7,
          detune: rand(-400, 100),
        });
      } else if (obj.is("flowerBox")) {
        level.spawn("F", obj.gridPos.sub(0, 1));
        play("goodbox", {
          volume: 0.7,
          detune: rand(-400, 100),
        });
      }
      var pos = obj.gridPos;
      destroy(obj);
      var box = level.spawn("!", pos);
      box.bump();
    }
  });

  player.onCollide("bigMushy", (mushy) => {
    destroy(mushy);
    player.bigger();
    play("mushroom", {
      volume: 0.2,
      detune: rand(-400, 100),
    });
  });

  player.onCollide("Flower", (flower) => {
    destroy(flower);
    player.flamy();
    play("flower", {
      volume: 0.2,
      detune: rand(-400, 100),
    });
  });

  //castle

  player.onCollide("castle", (castle, side) => {
    player.freeze();
    music.pause();
    play("stageclear", {
      volume: 0.2,
      detune: rand(-200, 100),
    });
    add([
      text("Good Giob!", { size: 24 }),
      pos(toWorld(vec2(160, 120))),
      color(255, 255, 255),
      origin("center"),
      layer("ui"),
    ]);
    wait(7, () => {
      let nextLevel = levelNumber + 1;

      if (nextLevel >= LEVELS.length) {
        go("start");
      } else {
        go("game", nextLevel);
      }
    });
  });

  //shark move

  action("shark", (s) => {
    s.move(0, -s.speed);

    if (s.pos.y > 200 || s.pos.y < 150) {
      s.speed = s.speed * -1;
    }
  });
});

//patrol function

function patrol(distance = 100, speed = 50, dir = 1) {
  return {
    id: "patrol",
    require: ["pos", "area"],
    startingPos: vec2(0, 0),
    add() {
      this.startingPos = this.pos;
      this.onCollide("badGuy", () => {
        dir = -dir;
      });
      this.onCollide("pipe", () => {
        dir = -dir;
      });
    },
    update() {
      if (Math.abs(this.pos.x - this.startingPos.x) >= distance) {
        dir = -dir;
      }
      this.move(speed * dir, 0);
    },
  };
}

//enemies set

function tarma() {
  return {
    id: "tarma",
    require: ["pos", "area", "sprite", "patrol"],
    isAlive: true,
    update() {},
    squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 2;
      this.area.width = 18;
      this.area.height = 8;
      this.use(lifespan(0.5, { fade: 0.1 }));
    },
  };
}

function ami() {
  return {
    id: "ami",
    require: ["pos", "area", "sprite", "patrol"],
    isAlive: true,
    update() {},
    squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 5;
      this.area.width = 26;
      this.area.height = 18;
      this.use(lifespan(0.5, { fade: 0.1 }));
    },
  };
}

function dito() {
  return {
    id: "dito",
    require: ["pos", "area", "sprite", "patrol"],
    isAlive: true,
    update() {},
    squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 12;
      this.area.width = 20;
      this.area.height = 22;
      this.use(lifespan(0.5, { fade: 0.1 }));
    },
  };
}

function shark() {
  return {
    id: "shark",
    require: ["pos", "area", "sprite"],
    isAlive: true,
    update() {},
  };
}

//general bump

function bump(offset = 8, speed = 2, stopAtOrigin = true) {
  return {
    id: "bump",
    require: ["pos"],
    bumpOffset: offset,
    speed: speed,
    bumped: false,
    origPos: 0,
    direction: -1,
    update() {
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
    bump() {
      this.bumped = true;
      this.origPos = this.pos.y;
    },
  };
}

//GIO
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
    update() {
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
    bigger() {
      this.isBig = true;
      this.isFlamy = false;
      this.area.width = 20;
      this.area.height = 22;
    },
    flamy() {
      this.isBig = false;
      this.isFlamy = true;
      this.area.width = 20;
      this.area.height = 22;
    },
    smaller() {
      this.isBig = false;
      this.isFlamy = false;
      this.area.width = 16;
      this.area.height = 16;
    },
    standing() {
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
    jumping() {
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
    running() {
      let animation;
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
    freeze() {
      this.isFrozen = true;
    },
    die() {
      /* this.stop();
      this.frame = this.smallDieFrame; */
      this.unuse("body");
      this.bump();
      this.isAlive = false;
      this.freeze();
      this.use(lifespan(6, { fade: 1 }));
      play("gameover", {
        volume: 0.2,
        detune: rand(-100, 0),
      });
    },
  };
}
