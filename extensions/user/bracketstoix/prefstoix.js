/*
 Copyright (c) 2015 ApptoIX Limited. All rights reserved.
 @author Alexandre Bento Freire

 Permission is hereby granted, free of charge, to any person obtaining a
 copy of this software and associated documentation files (the "Software"),
 to deal in the Software without restriction, including without limitation
 the rights to use, copy, modify, merge, publish, distribute, sublicense,
 and/or sell copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 DEALINGS IN THE SOFTWARE.

*/
define(function(){function selectAndClose(inf){inf.closedlg(true)}var PREFKEY="prefs";function _checkForHttp(text){return text.indexOf("http://")===0||text.indexOf("https://")===0}function _buildIo(prefs,prefsio,preftoio){Object.keys(prefs).forEach(function(key){var pref=prefs[key],storeprop=pref.storeprop||"value",prefio;if(pref[storeprop]!==undefined){prefio=prefsio[key];if(prefio===undefined){prefsio[key]={};prefio=prefsio[key]}if(preftoio){prefio[storeprop]=pref[storeprop];if(pref.history)prefio.history=
pref.history}else if(prefio!==undefined&&prefio[storeprop]!==undefined){pref[storeprop]=prefio[storeprop];if(pref.history&&prefio.history)pref.history=prefio.history}if(pref.fields){if(!prefio.fields)prefio.fields={};_buildIo(pref.fields,prefio.fields,preftoio)}}});return prefsio}return{checkForHttp:function(text){return _checkForHttp(text)},load:function(prefs,extprefs){extprefs.definePreference(PREFKEY,"object",_buildIo(prefs,{},true));_buildIo(prefs,extprefs.get(PREFKEY),false)},save:function(prefs,
extprefs){extprefs.set(PREFKEY,_buildIo(prefs,{},true));extprefs.save()},OPTIONFIELDS:["tabSize","historySize","recentSize","showcxtedit","webSearch","js6","scss","js"],version:{value:""},commands:{value:{showinmenu:[],showinctxmenu:[],hotkeys:{}}},splitMarker:{value:","},splitMarkerExtr:{value:"\\t",samelabelas:"splitMarker",samehintas:"splitMarker"},historySize:{value:20,type:"number"},recentSize:{value:20,type:"number"},showcxtedit:{value:true,type:"boolean",canempty:true},recentFiles:{value:"",
rows:14,size:"100%",type:"list",storeprop:"files",files:[],values:[],events:[{name:"dblclick",f:selectAndClose}]},startNum:{value:1,type:"number"},numSep:{value:".\\$",history:[],canempty:true,type:"spacetext"},tabSize:{value:2,type:"number"},findre:{value:"",samelabelas:"find",history:[],buttons:[{label:"Regnize"}]},findlabel:"Find",find:{value:"",history:[],buttons:[{label:"Regnize"}]},replace:{value:"",history:[],canempty:true},startValue:{value:"",history:[],canempty:true},stepValue:{value:"",
history:[]},iswordsonly:{value:false,type:"boolean",canempty:true,groupcols:3},isregexpr:{value:true,type:"boolean",canempty:true},isignorecase:{value:false,type:"boolean",canempty:true,groupcols:1},isimultiline:{value:false,type:"boolean",canempty:true},isall:{value:true,type:"boolean",canempty:true},isselonly:{value:true,type:"boolean",canempty:true},webSearch:{value:"https://www.google.com/search?q=",checkfunc:function(text){return _checkForHttp(text)?"":"It must start with http(s)://"}},js6:{value:'traceur --out "{{out}}" --script "{{in}}"',
fields:{autosave:{value:false,type:"boolean",align:"center",canempty:true}}},scss:{value:'sass --sourcemap "{{in}}" "{{out}}"',fields:{autosave:{value:false,type:"boolean",align:"center",canempty:true}},buttons:[{id:"compass",setvalue:'compass compile "{{inrelfile}}"'},{id:"sass",setvalue:'sass --sourcemap "{{in}}" "{{out}}"'}]},js:{value:'uglifyjs "{{in}}" -o "{{out}}"'},linrparagraphs:{value:"1"},limaxcharsperline:{value:"0"},lihtmlparawrap:{value:"",canempty:true},maxcharsperline:{value:"80"},
tobreakwords:{value:false,type:"boolean",canempty:true},beforesave:{value:[]},aftersave:{value:[]},tools:{value:[]}}});
