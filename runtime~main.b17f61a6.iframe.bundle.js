(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({81:"components-inserter-stories-index-story",139:"guide-stories-index-story",204:"heading-stories-index-story",243:"scroll-lock-stories-index-story",309:"toggle-group-control-stories-index-story",408:"popover-stories-index-story",698:"navigation-stories-index-story",772:"date-time-stories-time-story",869:"components-dimensions-tool-stories-scale-tool-story",951:"components-block-mover-stories-index-story",970:"angle-picker-control-stories-index-story",983:"components-dimensions-tool-stories-index-story",988:"stories-index-story",1057:"visually-hidden-stories-index-story",1101:"palette-edit-stories-index-story",1638:"placeholder-stories-index-story",1656:"components-block-draggable-stories-index-story",1791:"search-control-stories-index-story",1802:"form-toggle-stories-index-story",1821:"sandbox-stories-index-story",1960:"base-control-stories-index-story",1998:"gradient-picker-stories-index-story",2057:"docs-introduction-mdx",2211:"dropdown-menu-stories-index-story",2419:"text-highlight-stories-index-story",2728:"composite-current-stories-index-story",2900:"tooltip-stories-index-story",3218:"components-url-popover-stories-index-story",3267:"item-group-stories-index-story",3417:"icon-stories-index-story",3421:"combobox-control-stories-index-story",3517:"dropdown-menu-v2-stories-index-story",3614:"navigator-stories-index-story",3732:"date-time-stories-date-story",3754:"truncate-stories-index-story",3772:"view-stories-index-story",3788:"radio-group-stories-index-story",3813:"components-text-decoration-control-stories-index-story",3933:"tab-panel-stories-index-story",3953:"border-box-control-stories-index-story",4185:"custom-select-control-v2-stories-default-story",4214:"composite-legacy-stories-index-story",4317:"alignment-matrix-control-stories-index-story",4325:"number-control-stories-index-story",4355:"text-control-stories-index-story",4520:"docs-components-contributing-mdx",4593:"resizable-box-stories-index-story",4595:"components-global-styles-stories-index-story",4662:"draggable-stories-index-story",4706:"select-control-stories-index-story",4770:"components-dimensions-tool-stories-width-height-tool-story",4831:"navigable-container-stories-navigable-menu-story",4836:"drop-zone-stories-index-story",4895:"unit-control-stories-index-story",4972:"components-dimensions-tool-stories-aspect-ratio-tool-story",5008:"button-stories-index-story",5100:"toggle-control-stories-index-story",5106:"menu-items-choice-stories-index-story",5151:"scrollable-stories-index-story",5175:"custom-gradient-picker-stories-index-story",5194:"components-text-transform-control-stories-index-story",5309:"font-size-picker-stories-index-story",5367:"h-stack-stories-index-story",5619:"menu-group-stories-index-story",5735:"dropdown-stories-index-story",5739:"menu-item-stories-index-story",5745:"tip-stories-index-story",5825:"components-resolution-tool-stories-index-story",5891:"animate-stories-index-story",6180:"box-control-stories-index-story",6246:"spinner-stories-index-story",6265:"components-height-control-stories-index-story",6510:"query-controls-stories-index-story",6605:"card-stories-index-story",6610:"icon-stories-index-story-tsx",6758:"form-file-upload-stories-index-story",6764:"modal-stories-index-story",6869:"flex-stories-index-story",6883:"surface-stories-index-story",6932:"form-token-field-stories-index-story",6939:"border-control-stories-index-story",7131:"spacer-stories-index-story",7137:"elevation-stories-index-story",7152:"input-control-stories-index-story",7196:"duotone-picker-stories-duotone-picker-story",7211:"tabs-stories-index-story",7306:"color-indicator-stories-index-story",7351:"radio-control-stories-index-story",7552:"dimension-control-stories-index-story",7577:"color-palette-stories-index-story",7637:"tree-select-stories-index-story",7707:"button-group-stories-index-story",7716:"textarea-control-stories-index-story",7752:"snackbar-stories-index-story",7844:"color-picker-stories-index-story",7875:"tree-grid-stories-index-story",8035:"range-control-stories-index-story",8067:"shortcut-stories-index-story",8108:"v-stack-stories-index-story",8147:"duotone-picker-stories-duotone-swatch-story",8297:"checkbox-control-stories-index-story",8518:"tools-panel-stories-index-story",8628:"snackbar-stories-list-story",8633:"date-time-stories-date-time-story",8673:"confirm-dialog-stories-index-story",8748:"components-line-height-control-stories-index-story",8751:"focal-point-picker-stories-index-story",8768:"external-link-stories-index-story",8772:"playground-index-story",8773:"custom-select-control-stories-index-story",8821:"icon-stories-index-story-js",8917:"slot-fill-stories-index-story",8930:"circular-option-picker-stories-index-story",8953:"keyboard-shortcuts-stories-index-story",8958:"toolbar-stories-index-story",8971:"z-stack-stories-index-story",9003:"disabled-stories-index-story",9170:"progress-bar-stories-index-story",9189:"notice-stories-index-story",9379:"divider-stories-index-story",9475:"text-stories-index-story",9501:"docs-components-readme-mdx",9532:"custom-select-control-v2-stories-legacy-story",9696:"navigable-container-stories-tabbable-container-story",9812:"grid-stories-index-story",9828:"theme-stories-index-story",9901:"responsive-wrapper-stories-index-story",9943:"panel-stories-index-story"}[chunkId]||chunkId)+"."+{13:"a050d2f0",37:"d0b69cc0",75:"5b636467",81:"fa2c0e04",88:"3d3fa3f7",139:"21a088d5",185:"6a8dbbe6",204:"1e1ee62b",243:"bb5068c1",282:"13b3838f",300:"4aa3e38f",309:"43e0f62e",408:"cd162c82",421:"6bb304fb",422:"02405bf0",698:"abb7b03b",772:"22293445",793:"8cae1dcb",869:"1429cef8",930:"d18baaef",951:"50fb4ab9",970:"343e5670",983:"b66e56fb",988:"5417e2dc",1057:"83343b29",1101:"3e4fe875",1221:"49963b4f",1331:"08bce6ea",1378:"aaa94ed5",1469:"efcad607",1527:"56a79928",1531:"5b50a368",1552:"3449110b",1638:"3481fb31",1656:"031569de",1791:"6309e4bc",1802:"5107204c",1821:"8dd4dca1",1830:"66f3a322",1948:"ec7dd1d1",1960:"825b5133",1998:"0f38e783",2024:"f3b316f0",2040:"8819e0b9",2057:"d2bed04d",2211:"ecfa18c3",2336:"6a6451fd",2349:"26e415b4",2381:"fccabf58",2419:"39002e7c",2728:"acf83ab9",2891:"94bac9df",2900:"be0c2696",2942:"5a75dc80",3049:"68d43a54",3081:"f3a91aff",3218:"6a8cf78a",3267:"da54d573",3417:"02f0a779",3421:"7775bae1",3426:"c352302a",3469:"e38f5551",3517:"82c66402",3614:"634e895e",3665:"250674c5",3732:"75361ad8",3754:"17ca09c6",3772:"753c76b6",3788:"72fb7e89",3794:"e039462a",3813:"31605413",3815:"cfaa856a",3922:"1c26cfe7",3930:"d56f5c5c",3933:"a29f5151",3953:"96d0f0e0",4185:"e7ff49c9",4214:"3bdd8f38",4268:"9edf923d",4317:"0b671cf9",4325:"9b0f0d43",4355:"5b5fb9fe",4520:"423405a0",4593:"4285b451",4595:"4f9ea411",4662:"f115b4f6",4706:"35ebcf20",4742:"d497b669",4770:"22614c21",4831:"624420dc",4836:"9d6468bf",4878:"9f315a34",4895:"c4f9ce9a",4928:"6a79f10f",4972:"79aaed90",5008:"c7ff83c0",5065:"58f5c3a4",5100:"0f4e8542",5106:"12f10e36",5111:"51396160",5150:"747bbf54",5151:"f3e0fb94",5175:"4791b5f7",5194:"d885187a",5309:"2fa6859c",5367:"de77c746",5619:"0b6c483c",5663:"70f1fccd",5706:"26bb100c",5735:"a2d698cb",5739:"89ba2c7f",5745:"d186a2d0",5751:"27055b7a",5784:"9bd323a5",5825:"efc39af1",5891:"75dc59c6",5934:"615ee52b",5949:"5f809d3d",6180:"995f04a7",6202:"162aca1e",6246:"6dfba9df",6260:"ad5be0e5",6265:"1e75f303",6399:"9bfc55d5",6510:"66d51ee4",6564:"fb686838",6605:"a1ed13a0",6607:"7f6cc1f8",6610:"897803e6",6633:"ea2c5070",6655:"a6b1e8b7",6758:"ee06d54e",6764:"bd8574ef",6869:"5df01dd0",6883:"7c32a159",6909:"4101b98d",6932:"a6da2e3f",6939:"32f9d9f0",7021:"277a820a",7041:"9238c86f",7117:"918e96fb",7131:"15d5595f",7137:"259e05a4",7143:"f4786e38",7152:"26a71077",7196:"b975b0c4",7211:"64978f5e",7275:"9cd2ea70",7306:"519913a8",7351:"eb2d71e6",7390:"33a58f63",7492:"4f11eb58",7552:"f225568f",7577:"34c85d27",7631:"ad67fa6e",7637:"a9c868ed",7675:"6ad7825a",7707:"c91feb7c",7716:"bcaefeb1",7752:"5e1f3b29",7782:"de422e34",7805:"bf40eb51",7830:"6a4e2fa9",7841:"f196c2b5",7844:"d6643758",7875:"2498bcaa",8035:"1e9c4b43",8067:"d0cb3645",8079:"697fd206",8108:"beb6168b",8147:"6bb6736c",8169:"c7e92d15",8170:"22269f98",8196:"d145e704",8208:"005d57f1",8297:"b1f77397",8343:"1f07468f",8354:"3d5f8ae7",8443:"ee877e86",8518:"622c3472",8628:"4542b0ff",8633:"4def92e8",8641:"a484cd38",8673:"31af55a4",8680:"2a1e7f97",8692:"09608891",8748:"3356d229",8751:"5bf8cb80",8768:"7d0849ee",8772:"f6813b4f",8773:"6a67ba90",8797:"23690913",8821:"19953981",8887:"cb782fcd",8917:"8732187b",8930:"e55da41e",8953:"c6dea139",8958:"475d787c",8971:"f626f24d",8985:"b6803f71",9003:"90380d97",9115:"fee73747",9119:"a99577ac",9170:"21c46202",9189:"126437ca",9379:"8a0687cd",9390:"7a848764",9433:"1a3e1619",9434:"0ca7920b",9475:"7c7d13ff",9501:"adf53911",9532:"0060b4ff",9696:"69044c7b",9812:"644c1e4a",9828:"039261eb",9901:"5cb01712",9903:"18f97a66",9943:"683b0b05",9948:"3cb49c19",9982:"9957c4f7"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="gutenberg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","gutenberg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();