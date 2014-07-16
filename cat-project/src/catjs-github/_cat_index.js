_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setUsername$$cat', {
  scrap: {
    "name": ["setUsername"],
    "embed": ["true"],
    "jqm": ["setText(\"#username\", \"catjs\");"],
    "assert": ["ok($('#username').val()=='catjs','email match to catjs')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catjs-github/index.html",
    "scrapinfo": {
      "start": {
        "line": 31,
        "col": 3
      },
      "end": {
        "line": 36,
        "col": 5
      }
    },
    "commentinfo": {
      "start": {
        "line": 30,
        "col": 8
      },
      "end": {
        "line": 37,
        "col": 11
      }
    },
    "single": {
      "name": true,
      "embed": true,
      "jqm": false,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "embed": -1,
      "jqm": -1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_e830754d-aa3b-0127-052d-2a015cb07307",
    "$type": "html",
    "numCommands": 3,
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setUsername"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setUsername$$cat", function(thi$) {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setUsername$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setUsername', desc: 'setText(\"#username\", \"catjs\");',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.setText(\"#username\", \"catjs\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok($(\"#username\").val()==\"catjs\",\"email match to catjs\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setEmail$$cat', {
  scrap: {
    "name": ["setEmail"],
    "embed": ["true"],
    "jqm": ["setText(\"#email\", \"catjsteam@gmail.com\");"],
    "assert": ["ok($('#email').val()=='catjsteam@gmail.com','email match')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catjs-github/index.html",
    "scrapinfo": {
      "start": {
        "line": 45,
        "col": 12
      },
      "end": {
        "line": 50,
        "col": 5
      }
    },
    "commentinfo": {
      "start": {
        "line": 44,
        "col": 8
      },
      "end": {
        "line": 51,
        "col": 5
      }
    },
    "single": {
      "name": true,
      "embed": true,
      "jqm": false,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "embed": -1,
      "jqm": -1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_8a5f5b68-6728-07a4-4860-63716df02baf",
    "$type": "html",
    "numCommands": 3,
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setEmail"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setEmail$$cat", function(thi$) {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setEmail$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setEmail', desc: 'setText(\"#email\", \"catjsteam@gmail.com\");',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.setText(\"#email\", \"catjsteam@gmail.com\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok($(\"#email\").val()==\"catjsteam@gmail.com\",\"email match\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setPassword$$cat', {
  scrap: {
    "name": ["setPassword"],
    "embed": ["true"],
    "jqm": ["setText(\"#password\", \"123456789\");"],
    "assert": ["ok($('#password').val()=='123456789','password match')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catjs-github/index.html",
    "scrapinfo": {
      "start": {
        "line": 58,
        "col": 12
      },
      "end": {
        "line": 63,
        "col": 14
      }
    },
    "commentinfo": {
      "start": {
        "line": 57,
        "col": 8
      },
      "end": {
        "line": 64,
        "col": 11
      }
    },
    "single": {
      "name": true,
      "embed": true,
      "jqm": false,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "embed": -1,
      "jqm": -1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_ed956f1d-1b92-3929-2112-18da6ce974b0",
    "$type": "html",
    "numCommands": 3,
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setPassword"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setPassword$$cat", function(thi$) {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setPassword$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setPassword', desc: 'setText(\"#password\", \"123456789\");',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.setText(\"#password\", \"123456789\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok($(\"#password\").val()==\"123456789\",\"password match\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setRepeatPassword$$cat', {
  scrap: {
    "name": ["setRepeatPassword"],
    "embed": ["true"],
    "jqm": ["setText(\"#repeatpassword\", \"123456789\");"],
    "assert": ["ok($('#repeatpassword').val()=='123456789','repeat password match')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catjs-github/index.html",
    "scrapinfo": {
      "start": {
        "line": 71,
        "col": 3
      },
      "end": {
        "line": 76,
        "col": 14
      }
    },
    "commentinfo": {
      "start": {
        "line": 70,
        "col": 8
      },
      "end": {
        "line": 77,
        "col": 11
      }
    },
    "single": {
      "name": true,
      "embed": true,
      "jqm": false,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "embed": -1,
      "jqm": -1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_20c47bbd-7628-d7af-cd1f-0997750af97b",
    "$type": "html",
    "numCommands": 3,
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setRepeatPassword"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setRepeatPassword$$cat", function(thi$) {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setRepeatPassword$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setRepeatPassword', desc: 'setText(\"#repeatpassword\", \"123456789\");',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.setText(\"#repeatpassword\", \"123456789\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok($(\"#repeatpassword\").val()==\"123456789\",\"repeat password match\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setmobileweb$$cat', {
  scrap: {
    "name": ["setmobileweb"],
    "embed": ["true"],
    "jqm": ["setCheck(\"#mobileweb\");"],
    "assert": ["ok($('#mobileweb').is(':checked'),'mobileweb is checked')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catjs-github/index.html",
    "scrapinfo": {
      "start": {
        "line": 84,
        "col": 12
      },
      "end": {
        "line": 89,
        "col": 5
      }
    },
    "commentinfo": {
      "start": {
        "line": 83,
        "col": 2
      },
      "end": {
        "line": 90,
        "col": 5
      }
    },
    "single": {
      "name": true,
      "embed": true,
      "jqm": false,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "embed": -1,
      "jqm": -1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_f3643313-89d9-4606-6646-e088f2864c2c",
    "$type": "html",
    "numCommands": 3,
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setmobileweb"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setmobileweb$$cat", function(thi$) {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setmobileweb$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setmobileweb', desc: 'setCheck(\"#mobileweb\");',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.setCheck(\"#mobileweb\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok($(\"#mobileweb\").is(\":checked\"),\"mobileweb is checked\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setweb$$cat', {
  scrap: {
    "name": ["setweb"],
    "embed": ["true"],
    "jqm": ["setCheck(\"#web\");"],
    "assert": ["ok($('#web').is(':checked'),'web is checked')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catjs-github/index.html",
    "scrapinfo": {
      "start": {
        "line": 93,
        "col": 12
      },
      "end": {
        "line": 98,
        "col": 5
      }
    },
    "commentinfo": {
      "start": {
        "line": 92,
        "col": 2
      },
      "end": {
        "line": 99,
        "col": 5
      }
    },
    "single": {
      "name": true,
      "embed": true,
      "jqm": false,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "embed": -1,
      "jqm": -1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_dec14360-6132-3d5b-1aab-753707376b14",
    "$type": "html",
    "numCommands": 3,
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setweb"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setweb$$cat", function(thi$) {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.setweb$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setweb', desc: 'setCheck(\"#web\");',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.setCheck(\"#web\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok($(\"#web\").is(\":checked\"),\"web is checked\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.slider90$$cat', {
  scrap: {
    "name": ["slider90"],
    "embed": ["true"],
    "jqm": ["slide(\"#usetesting\" , 90);"],
    "assert": ["ok($('#usetesting').val()=='90','slide value is 90')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catjs-github/index.html",
    "scrapinfo": {
      "start": {
        "line": 117,
        "col": 3
      },
      "end": {
        "line": 122,
        "col": 5
      }
    },
    "commentinfo": {
      "start": {
        "line": 116,
        "col": 2
      },
      "end": {
        "line": 123,
        "col": 5
      }
    },
    "single": {
      "name": true,
      "embed": true,
      "jqm": false,
      "assert": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "embed": -1,
      "jqm": -1,
      "assert": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_875fa142-37a0-a6c3-8d04-f1a3c003d222",
    "$type": "html",
    "numCommands": 3,
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.slider90"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.slider90$$cat", function(thi$) {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.slider90$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'slider90', desc: 'slide(\"#usetesting\" , 90);',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.slide(\"#usetesting\" , 90);"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.utils.chai.assert(context);"], {
    'code': ["assert", "ok($(\"#usetesting\").val()==\"90\",\"slide value is 90\")\n"].join("."),
    'fail': true,
    scrap: _ipkg.scrap,
    args: _args
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.clickSignup$$cat', {
  scrap: {
    "name": ["clickSignup"],
    "embed": ["true"],
    "jqm": ["clickButton(\"#signup\");"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catjs-github/index.html",
    "scrapinfo": {
      "start": {
        "line": 130,
        "col": 3
      },
      "end": {
        "line": 134,
        "col": 5
      }
    },
    "commentinfo": {
      "start": {
        "line": 129,
        "col": 2
      },
      "end": {
        "line": 135,
        "col": 5
      }
    },
    "single": {
      "name": true,
      "embed": true,
      "jqm": false,
      "file": true,
      "scrapinfo": true,
      "commentinfo": true,
      "single": true,
      "singleton": true,
      "arguments": true,
      "context": false,
      "auto": true,
      "injectcode": true,
      "id": true,
      "$type": true,
      "numCommands": true
    },
    "singleton": {
      "name": -1,
      "embed": -1,
      "jqm": -1,
      "file": -1,
      "scrapinfo": -1,
      "commentinfo": -1,
      "single": -1,
      "singleton": -1,
      "arguments": -1,
      "context": 1,
      "auto": -1,
      "injectcode": -1,
      "id": -1,
      "$type": -1,
      "numCommands": -1
    },
    "arguments": ["thi$"],
    "context": ["thi$"],
    "auto": true,
    "injectcode": false,
    "id": "scrap_293590da-672d-45ea-5875-3c105c953e61",
    "$type": "html",
    "numCommands": 2,
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.clickSignup"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.clickSignup$$cat", function(thi$) {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catjs-github.index.html.clickSignup$$cat",
    _argsrefs = arguments,
    _argsnames = "thi$",
    _args = {},
    _ipkg = _cat.core.getVar(pkgName),
    _counter = 0;

  if (_args) {
    _argsnames = _argsnames.split(",");
    _argsnames.forEach(function(arg) {
      _args[arg] = _argsrefs[_counter];
      _counter++;
    });
  }

  /* test content in here */
  _cat.core.clientmanager.delayManager(["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'clickSignup', desc: 'clickButton(\"#signup\");',tips: ''});"], {
    scrap: _ipkg.scrap,
    args: _args
  });
  _cat.core.clientmanager.delayManager(["_cat.core.plugin(\"jqm\").actions.clickButton(\"#signup\");"], {
    scrap: _ipkg.scrap,
    args: _args
  });
});