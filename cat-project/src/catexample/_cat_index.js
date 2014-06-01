_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setUsername$$cat', {
  scrap: {
    "name": ["setUsername"],
    "embed": ["true"],
    "jqm": ["setText(\"#username\", \"catjs\");"],
    "assert": ["ok($('#username').val()=='catjs','email match to catjs')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
      "auto": true,
      "id": true,
      "$type": true
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
      "auto": -1,
      "id": -1,
      "$type": -1
    },
    "arguments": [],
    "auto": true,
    "id": "scrap_2",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setUsername"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setUsername$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setUsername$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setUsername',
    desc: 'setText("#username", "catjs");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("#username", "catjs");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#username\").val()==\"catjs\",\"email match to catjs\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setUsername"],
        "embed": ["true"],
        "jqm": ["setText(\"#username\", \"catjs\");"],
        "assert": ["ok($('#username').val()=='catjs','email match to catjs')"],
        "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
          "auto": true,
          "id": true,
          "$type": true
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
          "auto": -1,
          "id": -1,
          "$type": -1
        },
        "arguments": [],
        "auto": true,
        "id": "scrap_2",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setUsername', desc: 'setText(\"#username\", \"catjs\");',tips: ''});", "_cat.core.plugin('jqm').actions.setText(\"#username\", \"catjs\");"],
      "$$context": {
        "$$context": {
          "name": "setUsername",
          "assert": ["ok($('#username').val()=='catjs','email match to catjs')"],
          "embed": "true",
          "jqm": ["setText(\"#username\", \"catjs\");"]
        }
      }
    },
    args: {}
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setEmail$$cat', {
  scrap: {
    "name": ["setEmail"],
    "embed": ["true"],
    "jqm": ["setText(\"#email\", \"catjsteam@gmail.com\");"],
    "assert": ["ok($('#email').val()=='catjsteam@gmail.com','email match')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
      "auto": true,
      "id": true,
      "$type": true
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
      "auto": -1,
      "id": -1,
      "$type": -1
    },
    "arguments": [],
    "auto": true,
    "id": "scrap_3",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setEmail"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setEmail$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setEmail$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setEmail',
    desc: 'setText("#email", "catjsteam@gmail.com");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("#email", "catjsteam@gmail.com");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#email\").val()==\"catjsteam@gmail.com\",\"email match\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setEmail"],
        "embed": ["true"],
        "jqm": ["setText(\"#email\", \"catjsteam@gmail.com\");"],
        "assert": ["ok($('#email').val()=='catjsteam@gmail.com','email match')"],
        "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
          "auto": true,
          "id": true,
          "$type": true
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
          "auto": -1,
          "id": -1,
          "$type": -1
        },
        "arguments": [],
        "auto": true,
        "id": "scrap_3",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setEmail', desc: 'setText(\"#email\", \"catjsteam@gmail.com\");',tips: ''});", "_cat.core.plugin('jqm').actions.setText(\"#email\", \"catjsteam@gmail.com\");"],
      "$$context": {
        "$$context": {
          "name": "setEmail",
          "assert": ["ok($('#email').val()=='catjsteam@gmail.com','email match')"],
          "embed": "true",
          "jqm": ["setText(\"#email\", \"catjsteam@gmail.com\");"]
        }
      }
    },
    args: {}
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setPassword$$cat', {
  scrap: {
    "name": ["setPassword"],
    "embed": ["true"],
    "jqm": ["setText(\"#password\", \"123456789\");"],
    "assert": ["ok($('#password').val()=='123456789','password match')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
      "auto": true,
      "id": true,
      "$type": true
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
      "auto": -1,
      "id": -1,
      "$type": -1
    },
    "arguments": [],
    "auto": true,
    "id": "scrap_4",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setPassword"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setPassword$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setPassword$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setPassword',
    desc: 'setText("#password", "123456789");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("#password", "123456789");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#password\").val()==\"123456789\",\"password match\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setPassword"],
        "embed": ["true"],
        "jqm": ["setText(\"#password\", \"123456789\");"],
        "assert": ["ok($('#password').val()=='123456789','password match')"],
        "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
          "auto": true,
          "id": true,
          "$type": true
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
          "auto": -1,
          "id": -1,
          "$type": -1
        },
        "arguments": [],
        "auto": true,
        "id": "scrap_4",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setPassword', desc: 'setText(\"#password\", \"123456789\");',tips: ''});", "_cat.core.plugin('jqm').actions.setText(\"#password\", \"123456789\");"],
      "$$context": {
        "$$context": {
          "name": "setPassword",
          "assert": ["ok($('#password').val()=='123456789','password match')"],
          "embed": "true",
          "jqm": ["setText(\"#password\", \"123456789\");"]
        }
      }
    },
    args: {}
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setRepeatPassword$$cat', {
  scrap: {
    "name": ["setRepeatPassword"],
    "embed": ["true"],
    "jqm": ["setText(\"#repeatpassword\", \"123456789\");"],
    "assert": ["ok($('#repeatpassword').val()=='123456789','repeat password match')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
      "auto": true,
      "id": true,
      "$type": true
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
      "auto": -1,
      "id": -1,
      "$type": -1
    },
    "arguments": [],
    "auto": true,
    "id": "scrap_5",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setRepeatPassword"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setRepeatPassword$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setRepeatPassword$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setRepeatPassword',
    desc: 'setText("#repeatpassword", "123456789");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setText("#repeatpassword", "123456789");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#repeatpassword\").val()==\"123456789\",\"repeat password match\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setRepeatPassword"],
        "embed": ["true"],
        "jqm": ["setText(\"#repeatpassword\", \"123456789\");"],
        "assert": ["ok($('#repeatpassword').val()=='123456789','repeat password match')"],
        "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
          "auto": true,
          "id": true,
          "$type": true
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
          "auto": -1,
          "id": -1,
          "$type": -1
        },
        "arguments": [],
        "auto": true,
        "id": "scrap_5",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setRepeatPassword', desc: 'setText(\"#repeatpassword\", \"123456789\");',tips: ''});", "_cat.core.plugin('jqm').actions.setText(\"#repeatpassword\", \"123456789\");"],
      "$$context": {
        "$$context": {
          "name": "setRepeatPassword",
          "assert": ["ok($('#repeatpassword').val()=='123456789','repeat password match')"],
          "embed": "true",
          "jqm": ["setText(\"#repeatpassword\", \"123456789\");"]
        }
      }
    },
    args: {}
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setmobileweb$$cat', {
  scrap: {
    "name": ["setmobileweb"],
    "embed": ["true"],
    "jqm": ["setCheck(\"#mobileweb\");"],
    "assert": ["ok($('#mobileweb').is(':checked'),'mobileweb is checked')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
      "auto": true,
      "id": true,
      "$type": true
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
      "auto": -1,
      "id": -1,
      "$type": -1
    },
    "arguments": [],
    "auto": true,
    "id": "scrap_6",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setmobileweb"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setmobileweb$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setmobileweb$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setmobileweb',
    desc: 'setCheck("#mobileweb");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setCheck("#mobileweb");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#mobileweb\").is(\":checked\"),\"mobileweb is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setmobileweb"],
        "embed": ["true"],
        "jqm": ["setCheck(\"#mobileweb\");"],
        "assert": ["ok($('#mobileweb').is(':checked'),'mobileweb is checked')"],
        "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
          "auto": true,
          "id": true,
          "$type": true
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
          "auto": -1,
          "id": -1,
          "$type": -1
        },
        "arguments": [],
        "auto": true,
        "id": "scrap_6",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setmobileweb', desc: 'setCheck(\"#mobileweb\");',tips: ''});", "_cat.core.plugin('jqm').actions.setCheck(\"#mobileweb\");"],
      "$$context": {
        "$$context": {
          "name": "setmobileweb",
          "assert": ["ok($('#mobileweb').is(':checked'),'mobileweb is checked')"],
          "embed": "true",
          "jqm": ["setCheck(\"#mobileweb\");"]
        }
      }
    },
    args: {}
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setweb$$cat', {
  scrap: {
    "name": ["setweb"],
    "embed": ["true"],
    "jqm": ["setCheck(\"#web\");"],
    "assert": ["ok($('#web').is(':checked'),'web is checked')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
      "auto": true,
      "id": true,
      "$type": true
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
      "auto": -1,
      "id": -1,
      "$type": -1
    },
    "arguments": [],
    "auto": true,
    "id": "scrap_7",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setweb"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setweb$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.setweb$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'setweb',
    desc: 'setCheck("#web");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.setCheck("#web");
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#web\").is(\":checked\"),\"web is checked\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["setweb"],
        "embed": ["true"],
        "jqm": ["setCheck(\"#web\");"],
        "assert": ["ok($('#web').is(':checked'),'web is checked')"],
        "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
          "auto": true,
          "id": true,
          "$type": true
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
          "auto": -1,
          "id": -1,
          "$type": -1
        },
        "arguments": [],
        "auto": true,
        "id": "scrap_7",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'setweb', desc: 'setCheck(\"#web\");',tips: ''});", "_cat.core.plugin('jqm').actions.setCheck(\"#web\");"],
      "$$context": {
        "$$context": {
          "name": "setweb",
          "assert": ["ok($('#web').is(':checked'),'web is checked')"],
          "embed": "true",
          "jqm": ["setCheck(\"#web\");"]
        }
      }
    },
    args: {}
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.slider90$$cat', {
  scrap: {
    "name": ["slider90"],
    "embed": ["true"],
    "jqm": ["slide(\"#usetesting\" , 90);"],
    "assert": ["ok($('#usetesting').val()=='90','slide value is 90')"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
      "auto": true,
      "id": true,
      "$type": true
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
      "auto": -1,
      "id": -1,
      "$type": -1
    },
    "arguments": [],
    "auto": true,
    "id": "scrap_8",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.slider90"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.slider90$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.slider90$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'slider90',
    desc: 'slide("#usetesting" , 90);',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.slide("#usetesting", 90);
  _cat.utils.chai.assert({
    code: "assert.ok($(\"#usetesting\").val()==\"90\",\"slide value is 90\")\n",
    fail: true,
    scrap: {
      "config": {
        "name": ["slider90"],
        "embed": ["true"],
        "jqm": ["slide(\"#usetesting\" , 90);"],
        "assert": ["ok($('#usetesting').val()=='90','slide value is 90')"],
        "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
          "auto": true,
          "id": true,
          "$type": true
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
          "auto": -1,
          "id": -1,
          "$type": -1
        },
        "arguments": [],
        "auto": true,
        "id": "scrap_8",
        "$type": "html"
      },
      "output": ["_cat.core.ui.setContent({style: 'color:#0080FF', header: 'slider90', desc: 'slide(\"#usetesting\" , 90);',tips: ''});", "_cat.core.plugin('jqm').actions.slide(\"#usetesting\" , 90);"],
      "$$context": {
        "$$context": {
          "name": "slider90",
          "assert": ["ok($('#usetesting').val()=='90','slide value is 90')"],
          "embed": "true",
          "jqm": ["slide(\"#usetesting\" , 90);"]
        }
      }
    },
    args: {}
  });
});
_cat.core.declare('C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.clickSignup$$cat', {
  scrap: {
    "name": ["clickSignup"],
    "embed": ["true"],
    "jqm": ["clickButton(\"#signup\");"],
    "file": "C:/Users/snirr/workspace/catjs_example/cat-project/target/catexample/index.html",
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
      "auto": true,
      "id": true,
      "$type": true
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
      "auto": -1,
      "id": -1,
      "$type": -1
    },
    "arguments": [],
    "auto": true,
    "id": "scrap_9",
    "$type": "html",
    "pkgName": "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.clickSignup"
  }
}, 'scrap');
_cat.core.define("C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.clickSignup$$cat", function() {

  var pkgName = "C:.Users.snirr.workspace.catjs_example.cat-project.target.catexample.index.html.clickSignup$$cat";

  /* test content in here */
  _cat.core.ui.setContent({
    style: 'color:#0080FF',
    header: 'clickSignup',
    desc: 'clickButton("#signup");',
    tips: ''
  });
  _cat.core.plugin('jqm').actions.clickButton("#signup");
});