define(function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var name=__fest_context;__fest_buf+=("<a class=\"button button_back\" href=\"#\">Back</a><div class=\"header\"><h1 class=\"header__title\">Epic Game</h1><p class=\"header__par\">!The game is under construction...!</p></div><div class=\"square square_game\"><script type=\"text\/javascript\">var ws;\n\t\t\t\tvar started = false;\n\t\t\t\tvar finished = false;\n\n\t\t\t\tvar myName = \"${myName}\";\n\t\t\t\tvar enemyName = \"\";\n\n\t\t\t\tinit = function () {\n\t\t\t\tws = new WebSocket(\"ws:\/\/localhost:8080\/gameplay\");\n\t\t\t\tconsole.log(\"INIT:\" + ws);\n\t\t\t\tws.onopen = function (event) {\n\n\t\t\t\t}\n\n\n\n\t\t\t\tws.onmessage = function (event) {\n\t\t\t\tvar data = JSON.parse(event.data);\n\t\t\t\tif(data.status == \"start\"){\n\t\t\t\tdocument.getElementById(\"wait\").style.display = \"none\";\n\t\t\t\tdocument.getElementById(\"gameplay\").style.display = \"block\";\n\t\t\t\tdocument.getElementById(\"enemyName\").innerHTML = data.enemyName;\n\t\t\t\t}\n\n\t\t\t\tif(data.status == \"finish\"){\n\t\t\t\tdocument.getElementById(\"gameOver\").style.display = \"block\";\n\t\t\t\tdocument.getElementById(\"gameplay\").style.display = \"none\";\n\n\t\t\t\tif(data.win)\n\t\t\t\tdocument.getElementById(\"win\").innerHTML = \"winner!\";\n\t\t\t\telse\n\t\t\t\tdocument.getElementById(\"win\").innerHTML = \"loser!\";\n\t\t\t\t}\n\n\t\t\t\tif(data.status == \"increment\" && data.name == \"${myName}\"){\n\t\t\t\tdocument.getElementById(\"myScore\").innerHTML = data.score;\n\t\t\t\t}\n\n\t\t\t\tif(data.status == \"increment\" && data.name == document.getElementById(\"enemyName\").innerHTML){\n\t\t\t\tdocument.getElementById(\"enemyScore\").innerHTML = data.score;\n\t\t\t\t}\n\n\t\t\t\tif (data.status == \"increment\" )\n\t\t\t\t{\n\t\t\t\tdocument.getElementById(\"commonScore\").innerHTML = data.score;\n\t\t\t\t}\n\n\t\t\t\tdocument.getElementById(\"test1\").value =\"Btn1 = \" + data.button1;\n\t\t\t\tdocument.getElementById(\"test2\").value =\"Btn2 =  \" + data.button2;\n\t\t\t\tdocument.getElementById(\"test3\").value =\"Btn3 =  \" + data.button3;\n\n\t\t\t\t}\n\n\n\n\t\t\t\tws.onclose = function (event) {\n\n\t\t\t\t}\n\n\t\t\t\t};\n\n\t\t\t\tfunction sendMessage() {\n\t\t\t\tvar message = {\"force\": \"5\"};\n\t\t\t\tws.send(JSON.stringify(message));\n\t\t\t\t}\n\n\t\t\t\t$(\"body\").find(\".square_game\").load(init());</script><div id=\"hello\"><p>Hello,");try{__fest_buf+=(__fest_escapeHTML(name))}catch(e){__fest_log_error(e.message + "89");}__fest_buf+=("!</p></div><div id=\"wait\"><p>Prepare yourself. Wait for enemy!</p></div><div id=\"gameplay\" style=\"display: none\"><div id=\"score\"><p>${myName}:<span id=\"myScore\">0</span></p><p><span id=\"enemyName\"></span>:<span id=\"enemyScore\">0</span></p><p><a>commonScore</a><span id=\"commonScore\">0</span></p></div><input id=\"test1\" type=\"text\"/><input id=\"test2\" type=\"text\"/><input id=\"test3\" type=\"text\"/><form name=\"gamePlay\" action=\"\"><input type=\"button\" name=\"submit\" value=\"Force = 1H\" onclick=\"sendMessage();\"/><input type=\"button\" name=\"submit\" value=\"Force = 2H\" onclick=\"sendMessage();\"/><input type=\"button\" name=\"submit\" value=\"Force = 5H\" onclick=\"sendMessage();\"/></form></div><div id=\"gameOver\" style=\"display: none\"><p>Game over! You are<span id=\"win\"></span></p></div></div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });