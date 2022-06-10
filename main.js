kaboom({
  global : true,

  background : [ 134, 135, 247 ],
  width : 320,
  height : 240,
  scale : 3,
  canvas : document.getElementById("game"),
  font : "sink",
  fullscreen : true,
  scaleMode : "stretch",
});

const MAP_WIDTH = 320;

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
loadSprite("noce", "noce.png");
loadSprite("racchetta", "racchetta.png");
loadSprite("pizza", "pizza.png");

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
loadSound("noce", "noce.wav");
loadSound("pizzas", "pizza.mp3");

// soundtrack
loadSound("level0", "level0.mp3");
loadSound("level1", "level1.mp3");
loadSound("level2", "level2.mp3");
loadSound("level3", "level3.mp3");

const LEVELS = [
  [
    "                                                                                                                                                                                                        ",
    "                                                                                                                                                                                                        ",
    "                                                                                                                                                                                                        ",
    "                                                                                                                                                                                                        ",
    "                                                                                                                                                                                                        ",
    "                                                                                                                                                                                                        ",
    "                                                                                                                                       ?                                                                ",
    "      -?-b-                 ?-                                                  -??-                                   ?                                                                                ",
    "                                                      ?          ?                                ?                                                                                                     ",
    "                                                             ?                                               -f-  ?                                               -u-      ???   -?-                    ",
    "                                                 -                                                                                               _                                                      ",
    "                                   _                                                                                                _     _      |                                                      ",
    "                       _           |    _                _               _                                                  _       |     |      |             _                                        ",
    "                E      |           |    |      E   E     |           E   |              A     _         _   A               |       |     |      |             |        D                   A  H        ",
    "=================================================================================================  ===========================   =====   ===========   =================================================",
    "=================================================================================================  ===========================   =====   ===========   =================================================",
  ],
  [
    "                                                                                                                                                                                                            ",
    "                                                                                                                                                                                                            ",
    "                                      ?                                                                                                                                                                     ",
    "                                                                                                                                                                                                            ",
    "                                                                                                                                                                                                            ",
    "                                   -?-                                                                                  --                              ?                                                   ",
    "                                                                                                               -?-                                                                                          ",
    "      -?-b-                  -?-                                   f                                b                                                                                                       ",
    "                                                                                                                                 -?-                  ?              ---                                    ",
    "                                               u                                 -?-                                E                           ?                             ?                             ",
    "                                                           _                                                       -?-                                                           ?f                         ",
    "                                                           |                              _                                                                                                                 ",
    "       _                                            _      |                              |                                     _                       _                                                   ",
    "       |                            A               |      |    E    E                    |          A           A   _          | A          A          |  E              A                    A  H         ",
    "================     ============================================================     ======================================    ===================================   ======================================",
    "================     ============================================================     ======================================    ===================================   ======================================",
  ],
  [
    "                                                                                                                                                                                                            ",
    "                                                                                                                                                                                                            ",
    "                                                                                                                                                                                                            ",
    "                                       ?                                                                                                                                                                    ",
    "                                                                                                                                                                                                            ",
    "                                   -?-             -?-         -?-          -?-                                                                                                                             ",
    "                                                                                                                                                                                 ?      ?                   ",
    "      -?-f-                  -b-                                                         -?--?--?--?                                                                         ?                              ",
    "                                                                                                                                          ?-f-?                                                             ",
    "                                                                                                                          ?-                          b             u                                       ",
    "                                                                                                                                                             -?-             ?                              ",
    "                             Y           Y            Y                   Y                Y       Y       Y                                                                                                ",
    "       _                     _           _            _        _          _                _       _       _                         _                                                                      ",
    "       |                     |    E      |    A       |        |    A     |     A          |       |       |   E                     |           D        D         D                           A H         ",
    "================     ====================================     =================================================================   ===============================================  =========================",
    "================     ====================================     =================================================================   ===============================================  =========================",
  ],
  [
    "                                                                                                                                                                                                            ",
    "                                                                                                                                                                                                            ",
    "                                                                                                                                                                                                            ",
    "                                                                                                                                                                                                            ",
    "                                               ????????????b???????u???????????????                                                                                                                         ",
    "                                   -?-                                                                                                                                                                      ",
    "                                                                                                                  -?-                                                                                       ",
    "      -?-b-                  -?-                                                         -f-          --                                    --?-                                                            ",
    "                                                                                                                                u                                               fbf?-b                      ",
    "                                                                                                                                                                                                            ",
    "                                                                                                                      _                                                                                     ",
    "                                                                      Y          Y                       _            |                                      _                                              ",
    "       _               _                  _                           _          _                       |            |                  _                   |                                              ",
    "       |               |          E       |    E       A         A    |     D    |                       |            |         D        |        D          |     _  D             D          A  H         ",
    "================     ================================================================  ==========    =========   ==============================================  ===========================================",
    "================     ================================================================  ==========    =========   ==============================================  ===========================================",
  ],
];

const levelConf = {
  // grid size
  width : 16,
  height : 16,
  pos : vec2(0, 0),
  // define each object as a list of components
  "=" : () => [sprite("ground"),
               area(),
               solid(),
               origin("bot"),
               "ground",
               "wall",
],
  "-" :
      () => [sprite("brick"), area(), solid(), origin("bot"), "brick", "wall"],
  H : () => [sprite("castle"),
             area({width : 1, height : 240}),

             origin("bot"),
             "castle",
],
  "?" : () => [sprite("questionBox"),
               area(),
               solid(),
               origin("bot"),
               "questionBox",
               "coinBox",
               "wall",
],
  b : () => [sprite("questionBox"),
             area(),
             solid(),
             origin("bot"),
             "questionBox",
             "mushyBox",
             "wall",
],
  f : () => [sprite("questionBox"),
             area(),
             solid(),
             origin("bot"),
             "questionBox",
             "flowerBox",
             "wall",
],
  u : () => [sprite("questionBox"),
             area(),
             solid(),
             origin("bot"),
             "questionBox",
             "pizzaBox",
             "wall",
],
  "!" : () => [sprite("emptyBox"),
               area(),
               solid(),
               bump(),
               origin("bot"),
               "emptyBox",
               "wall",
],
  c : () => [sprite("coin"),
             area(),
             solid(),
             bump(64, 8),
             cleanup(),
             lifespan(1, {fade : 0.5}),
             origin("bot"),
             "coin",
],
  M : () => [sprite("bigMushy"),
             area(),
             solid(),
             patrol(10000),
             body(),
             cleanup(),
             origin("bot"),
             "bigMushy",
],
  F : () => [sprite("Flower"),
             area(),
             solid(),
             body(),
             cleanup(),
             origin("bot"),
             "Flower",
],
  U : () => [sprite("pizza"),
             area(),
             solid(),
             body(),
             cleanup(),
             origin("bot"),
             "pizza",
],
  "|" : () => [sprite("pipeBottom"),
               area(),
               solid(),
               origin("bot"),
               "pipe",
               "wall",
],
  _ : () => [sprite("pipeTop"), area(), solid(), origin("bot"), "pipe", "wall"],
  E : () => [sprite("enemies", {anim : "Walking"}),
             area({width : 20, height : 24}),
             solid(),
             body(),
             patrol(50),
             tarma(),
             origin("bot"),
             "badGuy",
             "enemy",
],
  A : () => [sprite("enemies", {anim : "Walk"}),
             area({width : 26, height : 20}),
             solid(),
             body(),
             patrol(100),
             ami(),
             origin("bot"),
             "badGuy",
             "enemy",
],
  D : () => [sprite("enemies", {anim : "WalkHB"}),
             area({width : 20, height : 28}),
             solid(),
             body(),
             patrol(50),
             dito(),
             /* state("move", ["idle", "attack", "move"]), */
             origin("bot"),
             "badGuy",
             "enemy",
             /* "dito", */
],
  Y : () => [sprite("enemies", {anim : "Piranha"}),
             area({width : 20, height : 28}),
             /* solid(), */
             /* body(), */
             shark(),
             origin("top"),
             "shark",
             "badGuyShark",
             "enemy",
             {
               speed : 20,
             },
],
  p : () => [sprite("mario", {frame : 0}),
             area({width : 16, height : 16}),
             body(),
             mario(),
             bump(150, 20, false),
             origin("bot"),
             "player",
             {
               score : 0,
             },
],
};

// scene START

scene("start", () => {
  add([
    text("Press enter to play", {size : 10}),
    pos(160, 100),
    origin("center"),
    color(255, 255, 255),
  ]);
  add([
    text("Use the arrows to move", {size : 8}),
    pos(160, 140),
    origin("center"),
    color(255, 255, 255),
  ]);
  add([
    text("and the spacebar eventually", {size : 8}),
    pos(160, 150),
    origin("center"),
    color(255, 255, 255),
  ]);

  onKeyRelease("enter", () => { go("game"); });
  /* onClick(() => go("game")); */
});

go("start");

// scene LOSE

scene("lose", (score, time) => {
  add([
    sprite("mario", {frame : 6}),
    pos(width() / 2, height() / 2 - 80),
    scale(2),
    origin("center"),
  ]);

  // display score
  add([
    text(`Score:${score}`, {size : 8, font : "sink"}),
    pos(width() / 2, height() / 2 - 30),
    scale(2),
    origin("center"),
    setData("score", score),
  ]);

  // display time
  add([
    text(`Time:${time.toFixed(2)}`, {size : 8, font : "sink"}),
    pos(width() / 2, height() / 2 - 0),
    scale(2),
    origin("center"),
    setData("time", time.toFixed(2)),
  ]);

  add([
    text(`Press enter to play again`, {size : 6, font : "sink"}),
    pos(width() / 2, height() / 2 + 60),
    scale(2),
    origin("center"),
    setData("time", time.toFixed(2)),
  ]);

  onKeyRelease("enter", () => go("game"));

  // highscore
  /*
  add([
    text(`Insert name to record highscore:`, { size: 5, font: "sink" }),
    pos(width() / 2, height() / 2 + 20),
    scale(2),
    origin("center"),
  ]);

  const input = add([
    text("click me and write", { size: 8, font: "sink" }),
    pos(width() / 2, height() / 2 + 40),
    scale(2),
    origin("center"),
  ]);


  addButton("Send", vec2(width() / 2, height() / 2 + 60), () => {
    setData("name", input.text);
    debug.log("Yea, check the highscore under the game!");
  });
  addButton("Start Again", vec2(width() / 2, height() / 2 + 80), () =>
    go("game")
  );

  onCharInput((ch) => {
    input.text += ch;
  });

  onKeyPressRepeat("backspace", () => {
    input.text = input.text.substring(0, input.text.length - 1);
  }); */

  /*  onKeyPress("enter", () => go("game")); */

  // buttons function

  /* function addButton(txt, p, f) {
    const btn = add([
      text(txt),
      pos(p),
      area({ cursor: "pointer" }),
      scale(1),
      origin("center"),
    ]);

    btn.onClick(f);

    btn.onUpdate(() => {
      if (btn.isHovering()) {
        const t = rand(10) * 10;
        btn.color = rgb(
          wave(0, 255, t),
          wave(0, 255, t + 2),
          wave(0, 255, t + 4)
        );
        btn.scale = vec2(1.2);
      } else {
        btn.scale = vec2(1);
        btn.color = rgb();
      }
    });
  }

  onUpdate(() => cursor("default")); */
});

// scene WIN

scene("win", (score, time) => {
  add([
    text(`YOU WON!`),
    pos(width() / 2, height() / 2 - 100),
    scale(2),
    origin("center"),
  ]);
  add([
    sprite("mario", {frame : 13}),
    pos(width() / 2, height() / 2 - 60),
    scale(2),
    origin("center"),
  ]);

  add([
    text(`Score:${score}`, {size : 8, font : "sink"}),
    pos(width() / 2, height() / 2 - 20),
    scale(2),
    origin("center"),
    setData("score", score),
  ]);

  // display time
  add([
    text(`Time:${time.toFixed(2)}`, {size : 8, font : "sink"}),
    pos(width() / 2, height() / 2 + 10),
    scale(2),
    origin("center"),
    setData("time", time.toFixed(2)),
  ]);

  add([
    text(`Press enter to play again`, {size : 6, font : "sink"}),
    pos(width() / 2, height() / 2 + 70),
    scale(2),
    origin("center"),
    setData("time", time.toFixed(2)),
  ]);

  onKeyRelease("enter", () => go("game"));
});

// scene GAME

scene("game", (levelNumber = 0, score = 0, time = 0) => {
  layers([ "bg", "game", "ui" ], "game");

  /* gravity(2200); */

  const level = addLevel(LEVELS[levelNumber], levelConf);

  const music = play(`level${levelNumber}`, {
    volume : 0.2,
    detune : rand(0, 0),
  });

  music.play();

  add([ sprite("cloud"), pos(20, 50), layer("bg") ]);
  add([ sprite("cloud"), pos(150, 60), layer("bg") ]);
  add([ sprite("cloud"), pos(320, 40), layer("bg") ]);
  add([ sprite("cloud"), pos(520, 50), layer("bg") ]);
  add([ sprite("cloud"), pos(620, 70), layer("bg") ]);
  add([ sprite("cloud"), pos(820, 40), layer("bg") ]);
  add([ sprite("cloud"), pos(1020, 70), layer("bg") ]);
  add([ sprite("cloud"), pos(1190, 50), layer("bg") ]);
  add([ sprite("cloud"), pos(1300, 80), layer("bg") ]);
  add([ sprite("cloud"), pos(1420, 60), layer("bg") ]);
  add([ sprite("cloud"), pos(1560, 50), layer("bg") ]);
  add([ sprite("cloud"), pos(1720, 60), layer("bg") ]);
  add([ sprite("cloud"), pos(1950, 40), layer("bg") ]);
  add([ sprite("cloud"), pos(1820, 50), layer("bg") ]);
  add([ sprite("cloud"), pos(2000, 70), layer("bg") ]);
  add([ sprite("cloud"), pos(2200, 40), layer("bg") ]);
  add([ sprite("cloud"), pos(2350, 70), layer("bg") ]);
  add([ sprite("cloud"), pos(2450, 50), layer("bg") ]);
  add([ sprite("cloud"), pos(2600, 80), layer("bg") ]);
  add([ sprite("cloud"), pos(3200, 60), layer("bg") ]);

  add([ sprite("hill"), pos(32, 208), layer("bg"), origin("bot") ]);
  add([ sprite("hill"), pos(409, 208), layer("bg"), origin("bot") ]);
  add([ sprite("hill"), pos(803, 208), layer("bg"), origin("bot") ]);
  add([ sprite("hill"), pos(1200, 208), layer("bg"), origin("bot") ]);
  add([ sprite("hill"), pos(1500, 208), layer("bg"), origin("bot") ]);
  add([ sprite("hill"), pos(1920, 208), layer("bg"), origin("bot") ]);
  add([ sprite("hill"), pos(2300, 208), layer("bg"), origin("bot") ]);
  add([ sprite("hill"), pos(2700, 208), layer("bg"), origin("bot") ]);
  add([ sprite("hill"), pos(3000, 208), layer("bg"), origin("bot") ]);
  add([ sprite("hill"), pos(3500, 208), layer("bg"), origin("bot") ]);

  add([ sprite("shrubbery"), pos(200, 208), layer("bg"), origin("bot") ]);
  add([ sprite("shrubbery"), pos(680, 208), layer("bg"), origin("bot") ]);
  add([ sprite("shrubbery"), pos(480, 208), layer("bg"), origin("bot") ]);
  add([ sprite("shrubbery"), pos(1080, 208), layer("bg"), origin("bot") ]);
  add([ sprite("shrubbery"), pos(1250, 208), layer("bg"), origin("bot") ]);
  add([ sprite("shrubbery"), pos(1480, 208), layer("bg"), origin("bot") ]);
  add([ sprite("shrubbery"), pos(1904, 208), layer("bg"), origin("bot") ]);
  add([ sprite("shrubbery"), pos(2230, 208), layer("bg"), origin("bot") ]);
  add([ sprite("shrubbery"), pos(2940, 208), layer("bg"), origin("bot") ]);
  add([ sprite("shrubbery"), pos(3600, 208), layer("bg"), origin("bot") ]);

  add([
    text("Level " + (levelNumber + 1), {size : 18}),
    pos(vec2(160, 120)),
    color(255, 255, 255),
    origin("center"),
    layer("ui"),
    lifespan(1, {fade : 0.5}),
  ]);

  // timer
  add([
    text("TIME: ", {size : 8, font : "sink"}),
    pos(20, 10),
    origin("center"),
    layer("ui"),
    fixed(),
  ]);

  const timer = add([
    text(time, {size : 8, font : "sink"}),
    pos(50, 10),
    fixed(),
    {time : 0},
    origin("center"),
    layer("ui"),
  ]);

  timer.onUpdate(() => {
    time += dt();
    timer.text = time.toFixed(2);
  });

  // score

  add([
    text("SCORE: ", {size : 8, font : "sink"}),
    pos(140, 10),
    origin("center"),
    layer("ui"),
    fixed(),
  ]);

  const scoreText = add([
    text(score, {size : 8, font : "sink"}),
    pos(170, 10),
    origin("center"),
    layer("ui"),
    fixed(),
  ]);

  function updateScore(points) {
    score += points;
    scoreText.text = score;
  }

  // directions

  const directions = {
    LEFT : "left",
    RIGHT : "right",
  };

  let current_direction = directions.RIGHT;

  // player

  const player = level.spawn("p", 1, 10);

  const SPEED = 100;
  const BULLET_SPEED = 200;

  onKeyDown("right", () => {
    current_direction = directions.RIGHT;
    if (player.isFrozen)
      return;
    player.flipX(false);
    player.move(SPEED, 0);
  });

  onKeyDown("left", () => {
    current_direction = directions.LEFT;
    if (player.isFrozen)
      return;
    player.flipX(true);
    if (toScreen(player.pos).x > 20) {
      player.move(-SPEED, 0);
    }
  });

  onKeyPress("up", () => {
    if (player.isAlive && player.isGrounded()) {
      player.jump(630);
      canSquash = true;
    }
    play("jump", {
      volume : 0.05,
      detune : rand(-200, 0),
    });
  });

  // grow

  function grow(rate) {
    return {
      update() {
        const n = rate * dt();
        this.scale.x += n;
        this.scale.y += n;
      },
    };
  }

  // explode

  function addExplode(p, n, rad, size) {
    for (let i = 0; i < n; i++) {
      wait(rand(n * 0.1), () => {
        for (let i = 0; i < 2; i++) {
          add([
            pos(/* p.add(rand(vec2(-rad), vec2(rad))) */ p),
            rect(4, 4),
            outline(4),
            scale(1 * size, 1 * size),
            lifespan(0.1),
            grow(rand(10, 10) * size),
            origin("center"),
          ]);
        }
      });
    }
  }

  // shooting gio

  function spawnBullet(p) {
    if (current_direction == directions.LEFT) {
      p = p.sub(10, 0);
    } else if (current_direction == directions.RIGHT) {
      p = p.add(10, 0);
    }
    add([
      sprite("noce"),
      area(),
      pos(p),
      origin("center"),
      /* move(RIGHT, BULLET_SPEED), */
      cleanup(),
      "bullet",
      {
        bulletSpeed : current_direction == directions.LEFT ? -1 * BULLET_SPEED
                                                           : BULLET_SPEED,
      },
    ]);
  }

  onUpdate("bullet", (b) => {
    b.move(b.bulletSpeed, 0);
    /* if (b.pos.x < 0 || b.pos.x > MAP_WIDTH) {
      destroy(b);
    } */
  });

  onKeyPress("space", () => {
    if (player.isFlamy) {
      spawnBullet(player.pos.sub(-4, 10));
      /* spawnBullet(player.pos.add(3, 0)); */
      play("noce", {
        volume : 0.1,
        detune : rand(-1200, 1200),
      });
    }
    wait(0.2), () => { return; };
  });

  onCollide("bullet", "enemy", (b, e) => {
    destroy(b);
    destroy(e);
    addExplode(b.pos, 1, 24, 1);
  });

  onCollide("bullet", "wall", (b, e) => {
    destroy(b);

    addExplode(b.pos, 1, 24, 1);
  });

  // shooting dito

  /*   const dito = get("dito");

  function spawnRachet() {
    if (player.exists()) {
      const dir = player.pos.sub(dito.pos).unit();
      add([
        sprite("racchetta"),
        area(),
        pos(dito.pos),
        origin("center"),
        move(dir, BULLET_SPEED),
        cleanup(),
        "rachet",
      ]);
    }
  }

  onUpdate("rachet", (b) => {
    b.move(b.bulletSpeed, 0);

  });

  onUpdate("dito", (d) => {
    spawnRachet(d.pos.sub(-4, 10));

    play("noce", {
      volume: 0.1,
      detune: rand(-1200, 1200),
    });
  });

  onCollide("rachet", player, (b, e) => {
    destroy(b);
    killed();
    addExplode(b.pos, 1, 24, 1);
  });

  onCollide("rachet", "wall", (b, e) => {
    destroy(b);

    addExplode(b.pos, 1, 24, 1);
  }); */

  //////////////////////////////

  /*   const _dito = get("dito");

  const DITO_SPEED = 160;

  _dito.onStateEnter("idle", async () => {
    await wait(0.5);
    _dito.enterState("attack");
  });
  +_dito.onStateEnter("attack", async () => {
    // Don't do anything if player doesn't exist anymore
    if (player.exists()) {
      const dir = player.pos.sub(dito.pos).unit();

      add([
        pos(dito.pos),
        move(dir, BULLET_SPEED),
        sprite("racchetta"),
        area(),
        cleanup(),
        origin("center"),

        "rachet",
      ]);
    }

    await wait(1);
    dito.enterState("move");
  });

  _dito.onStateEnter("move", async () => {
    await wait(2);
    _dito.enterState("idle");
  });

  // Like .onUpdate() which runs every frame, but only runs when the current
  state is "move"
  // Here we move towards the player every frame if the current state is "move"
  _dito.onStateUpdate("move", () => {
    if (!player.exists()) return;
    const dir = player.pos.sub(_dito.pos).unit();
    _dito.move(dir.scale(DITO_SPEED));
  });

  // Have to manually call enterState() to trigger the onStateEnter("move")
  event we defined above. _dito.enterState("move");

  // Taking a bullet makes us disappear
  player.onCollide("rachet", (bullet) => {
    destroy(bullet);
    killed();
    addKaboom(bullet.pos);
  }); */

  // Killed

  function killed() {
    // is dead :(
    if (player.isAlive == false)
      return; // Don't run it if mario is already dead
    player.die();
    music.pause();
    add([
      text("Gio is dead :(", {size : 24}),
      pos(toWorld(vec2(160, 120))),
      color(255, 255, 255),
      origin("center"),
      layer("ui"),
    ]);
    wait(3, () => {
      let totscore = score;
      let tottime = time;
      go("lose", totscore, tottime);
    });
  }

  // camera settings

  player.onUpdate(() => {
    // center camera to player
    var currCam = camPos();
    if (currCam.x < player.pos.x) {
      camPos(player.pos.x, currCam.y);
    }

    if (player.isAlive && player.isGrounded()) {
      canSquash = false;
    }

    // Check if Mario has fallen off the screen
    if (player.pos.y > height() - 16) {
      killed();
    }
  });

  // collision with badguys

  let canSquash = false;

  player.onFall(() => { canSquash = true; });

  player.onCollide("badGuy", (baddy) => {
    if (baddy.isAlive == false)
      return;
    if (player.isAlive == false)
      return;
    if (canSquash) {
      // Mario has jumped on the bad guy:
      baddy.squash();
      play("hit", {
        volume : 0.2,
        detune : rand(-100, 0),
      });
    } else {
      // Mario has been hurt
      if (player.isFlamy) {
        shake(10);
        wait(0.25, () => {
          player.bigger();
          play("getsmall", {
            volume : 0.2,
            detune : rand(-100, 0),
          });
        });
      } else if (player.isBig) {
        shake(10);
        wait(0.25, () => {
          player.smaller();
          play("getsmall", {
            volume : 0.2,
            detune : rand(-100, 0),
          });
        });
      } else {
        // Mario is dead :(
        shake(10);
        killed();
      }
    }
  });

  player.onCollide("badGuyShark", (baddy) => {
    if (baddy.isAlive == false)
      return;
    if (player.isAlive == false)
      return;
    // Mario has been hurt
    if (player.isFlamy) {
      shake(10);
      wait(0.25, () => {
        player.bigger();
        play("getsmall", {
          volume : 0.2,
          detune : rand(-100, 0),
        });
      });
    } else if (player.isBig) {
      shake(10);
      wait(0.25, () => {
        player.smaller();
        play("getsmall", {
          volume : 0.2,
          detune : rand(-100, 0),
        });
      });
    } else {
      // Mario is dead :(
      shake(10);
      killed();
    }
  });

  // headbutt

  player.on("headbutt", (obj) => {
    if (obj.is("questionBox")) {
      if (obj.is("coinBox")) {
        let coin = level.spawn("c", obj.gridPos.sub(0, 1));
        coin.bump();
        updateScore(5);
        play("coin", {
          volume : 0.2,
          detune : rand(-400, 100),
        });
      } else if (obj.is("mushyBox")) {
        level.spawn("M", obj.gridPos.sub(0, 1));
        play("goodbox", {
          volume : 0.7,
          detune : rand(-400, 100),
        });
      } else if (obj.is("flowerBox")) {
        level.spawn("F", obj.gridPos.sub(0, 1));
        play("goodbox", {
          volume : 0.7,
          detune : rand(-400, 100),
        });
      } else if (obj.is("pizzaBox")) {
        level.spawn("U", obj.gridPos.sub(0, 1));
        play("goodbox", {
          volume : 0.7,
          detune : rand(-400, 100),
        });
      }
      var pos = obj.gridPos;
      destroy(obj);
      var box = level.spawn("!", pos);
      box.bump();
    }
  });

  // fungo & fiore & pizza

  player.onCollide("bigMushy", (mushy) => {
    destroy(mushy);
    player.bigger();
    play("mushroom", {
      volume : 0.2,
      detune : rand(-400, 100),
    });
  });

  player.onCollide("Flower", (flower) => {
    destroy(flower);
    player.flamy();
    play("flower", {
      volume : 0.2,
      detune : rand(-400, 100),
    });
  });

  player.onCollide("pizza", (pizza) => {
    destroy(pizza);
    updateScore(55);
    play("pizzas", {
      volume : 0.2,
      detune : rand(-400, 100),
    });
    add([
      text("55 POINTS", {size : 12}),
      pos(toWorld(vec2(160, 120))),
      color(255, 255, 255),
      origin("center"),
      layer("ui"),
    ]);
  });

  // castle

  player.onCollide("castle", (castle, side) => {
    player.freeze();
    music.pause();
    play("stageclear", {
      volume : 0.2,
      detune : rand(-200, 100),
    });
    add([
      text("Good Giob!", {size : 24}),
      pos(toWorld(vec2(160, 120))),
      color(255, 255, 255),
      origin("center"),
      layer("ui"),
    ]);
    wait(7, () => {
      let nextLevel = levelNumber + 1;
      let totscore = score;
      let tottime = time;

      if (nextLevel >= LEVELS.length) {
        go("win", totscore, tottime);
      } else {
        go("game", nextLevel, totscore, tottime);
      }
    });
  });

  // shark move

  onUpdate("shark", (s) => {
    s.move(0, -s.speed);

    if (s.pos.y > 200 || s.pos.y < 150) {
      s.speed = s.speed * -1;
    }
  });
});

// patrol function

function patrol(distance = 100, speed = 50, dir = 1) {
  return {
    id : "patrol",
    require : [ "pos", "area" ],
    startingPos : vec2(0, 0),
    add() {
      this.startingPos = this.pos;
      this.onCollide("badGuy", () => { dir = -dir; });
      this.onCollide("pipe", () => { dir = -dir; });
    },
    update() {
      if (Math.abs(this.pos.x - this.startingPos.x) >= distance) {
        dir = -dir;
      }
      this.move(speed * dir, 0);
    },
  };
}

// enemies set

function tarma() {
  return {
    id : "tarma",
    require : [ "pos", "area", "sprite", "patrol" ],
    isAlive : true,
    update() {},
    squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 2;
      this.area.width = 18;
      this.area.height = 8;
      this.use(lifespan(0.5, {fade : 0.1}));
    },
  };
}

function ami() {
  return {
    id : "ami",
    require : [ "pos", "area", "sprite", "patrol" ],
    isAlive : true,
    update() {},
    squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 5;
      this.area.width = 26;
      this.area.height = 18;
      this.use(lifespan(0.5, {fade : 0.1}));
    },
  };
}

function dito() {
  return {
    id : "dito",
    require : [ "pos", "area", "sprite", "patrol" /* , "state" */ ],
    isAlive : true,
    update() {},
    squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 12;
      this.area.width = 20;
      this.area.height = 22;
      this.use(lifespan(0.5, {fade : 0.1}));
    },
  };
}

function shark() {
  return {
    id : "shark",
    require : [ "pos", "area", "sprite" ],
    isAlive : true,
    update() {},
    squash() {
      this.isAlive = false;
      this.unuse("patrol");
      this.stop();
      this.frame = 12;
      this.area.width = 20;
      this.area.height = 22;
      this.use(lifespan(0.5, {fade : 0.1}));
    },
  };
}

// general bump

function bump(offset = 8, speed = 2, stopAtOrigin = true) {
  return {
    id : "bump",
    require : [ "pos" ],
    bumpOffset : offset,
    speed : speed,
    bumped : false,
    origPos : 0,
    direction : -1,
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

// GIO
function mario() {
  return {
    id : "mario",
    require : [ "body", "area", "sprite", "bump" ],
    smallAnimation : "Running",
    bigAnimation : "RunningBig",
    flameanimation : "Loop",
    smallStopFrame : 0,
    bigStopFrame : 8,
    flameStopFrame : 17,
    smallJumpFrame : 5,
    bigJumpFrame : 13,
    flameJumpFrame : 22,
    flameShotFrame : 25,
    /* smallDieFrame: 6, */
    isBig : false,
    isFrozen : false,
    isFlamy : false,
    isAlive : true,
    update() {
      if (this.isFrozen) {
        this.standing();
        return;
      }

      if (this.isFlamy && isKeyDown("space")) {
        this.shooting();
        return;
      }

      if (!this.isGrounded()) {
        this.jumping();
      } else {
        if (isKeyDown("left") || isKeyDown("right")) {
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
      this.isShooting = false;
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
    shooting() {
      this.stop();
      if (this.isFlamy) {
        this.frame = this.flameShotFrame;
      }
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
      /* const animation = this.isBig ? this.bigAnimation : this.smallAnimation;
       */
      if (this.curAnim() !== animation) {
        this.play(animation);
      }
    },
    freeze() { this.isFrozen = true; },
    die() {
      /* this.stop();
      this.frame = this.smallDieFrame; */
      this.unuse("body");
      this.bump();
      this.isAlive = false;
      this.freeze();
      this.use(lifespan(6, {fade : 1}));
      play("gameover", {
        volume : 0.2,
        detune : rand(-100, 0),
      });
    },
  };
}
