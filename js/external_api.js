/*! For license information please see external_api.min.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.JitsiMeetExternalAPI=t():e.JitsiMeetExternalAPI=t()}(self,(function(){return(()=>{var e={754:(e,t,n)=>{"use strict";n.d(t,{default:()=>I});var i=n(620),r=n.n(i);class s extends i{constructor(){var e,t;super(...arguments),t={},(e="_storage")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}clear(){this._storage={}}get length(){return Object.keys(this._storage).length}getItem(e){return this._storage[e]}setItem(e,t){this._storage[e]=t}removeItem(e){delete this._storage[e]}key(e){const t=Object.keys(this._storage);if(!(t.length<=e))return t[e]}serialize(){return JSON.stringify(this._storage)}}const o=new class extends i{constructor(){super();try{this._storage=window.localStorage,this._localStorageDisabled=!1}catch(e){}this._storage||(console.warn("Local storage is disabled."),this._storage=new s,this._localStorageDisabled=!0)}isLocalStorageDisabled(){return this._localStorageDisabled}clear(){this._storage.clear(),this.emit("changed")}get length(){return this._storage.length}getItem(e){return this._storage.getItem(e)}setItem(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this._storage.setItem(e,t),n||this.emit("changed")}removeItem(e){this._storage.removeItem(e),this.emit("changed")}key(e){return this._storage.key(e)}serialize(){if(this.isLocalStorageDisabled())return this._storage.serialize();const e=this._storage.length,t={};for(let n=0;n<e;n++){const e=this._storage.key(n);t[e]=this._storage.getItem(e)}return JSON.stringify(t)}};var a=n(571);function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.error(t,e),window.onerror&&window.onerror(t,null,null,null,e)}n(415);const l=["__proto__","constructor","prototype"];function d(e){const t=new RegExp("^([a-z][a-z0-9\\.\\+-]*:)+","gi"),n=t.exec(e);if(n){let i=n[n.length-1].toLowerCase();"http:"!==i&&"https:"!==i&&(i="https:"),(e=e.substring(t.lastIndex)).startsWith("//")&&(e=i+e)}return e}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=[];for(const n in e)try{t.push(`${n}=${encodeURIComponent(JSON.stringify(e[n]))}`)}catch(e){console.warn(`Error encoding ${n}: ${e}`)}return t}function u(e){const t={toString:p};let n,i,r;if(e=e.replace(/\s/g,""),n=new RegExp("^([a-z][a-z0-9\\.\\+-]*:)","gi"),i=n.exec(e),i&&(t.protocol=i[1].toLowerCase(),e=e.substring(n.lastIndex)),n=new RegExp("^(//[^/?#]+)","gi"),i=n.exec(e),i){let r=i[1].substring(2);e=e.substring(n.lastIndex);const s=r.indexOf("@");-1!==s&&(r=r.substring(s+1)),t.host=r;const o=r.lastIndexOf(":");-1!==o&&(t.port=r.substring(o+1),r=r.substring(0,o)),t.hostname=r}if(n=new RegExp("^([^?#]*)","gi"),i=n.exec(e),i&&(r=i[1],e=e.substring(n.lastIndex)),r?r.startsWith("/")||(r=`/${r}`):r="/",t.pathname=r,e.startsWith("?")){let n=e.indexOf("#",1);-1===n&&(n=e.length),t.search=e.substring(0,n),e=e.substring(n)}else t.search="";return t.hash=e.startsWith("#")?e:"",t}function p(e){const{hash:t,host:n,pathname:i,protocol:r,search:s}=e||this;let o="";return r&&(o+=r),n&&(o+=`//${n}`),o+=i||"/",s&&(o+=s),t&&(o+=t),o}function g(e){let t;t=e.serverURL&&e.room?new URL(e.room,e.serverURL).toString():e.room?e.room:e.url||"";const n=u(d(t));if(!n.protocol){let t=e.protocol||e.scheme;t&&(t.endsWith(":")||(t+=":"),n.protocol=t)}let{pathname:i}=n;if(!n.host){const t=e.domain||e.host||e.hostname;if(t){const{host:e,hostname:r,pathname:s,port:o}=u(d(`org.jitsi.meet://${t}`));e&&(n.host=e,n.hostname=r,n.port=o),"/"===i&&"/"!==s&&(i=s)}}const r=e.roomName||e.room;!r||!n.pathname.endsWith("/")&&n.pathname.endsWith(`/${r}`)||(i.endsWith("/")||(i+="/"),i+=r),n.pathname=i;const{jwt:s}=e;if(s){let{search:e}=n;-1===e.indexOf("?jwt=")&&-1===e.indexOf("&jwt=")&&(e.startsWith("?")||(e=`?${e}`),1===e.length||(e+="&"),e+=`jwt=${s}`,n.search=e)}let{hash:o}=n;for(const t of["config","interfaceConfig","devices","userInfo","appData"]){const n=h(e[`${t}Overwrite`]||e[t]||e[`${t}Override`]);if(n.length){let e=`${t}.${n.join(`&${t}.`)}`;o.length?e=`&${e}`:o="#",o+=e}}return n.hash=o,n.toString()||void 0}const f={window:window.opener||window.parent},m="message";class v{constructor(){let{postisOptions:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.postis=function(e){var t,n=e.scope,i=e.window,r=e.windowForEventListening||window,s=e.allowedOrigin,o={},a=[],c={},l=!1,d="__ready__",h=function(e){var t;try{t=JSON.parse(e.data)}catch(e){return}if((!s||e.origin===s)&&t&&t.postis&&t.scope===n){var i=o[t.method];if(i)for(var r=0;r<i.length;r++)i[r].call(null,t.params);else c[t.method]=c[t.method]||[],c[t.method].push(t.params)}};r.addEventListener("message",h,!1);var u={listen:function(e,t){o[e]=o[e]||[],o[e].push(t);var n=c[e];if(n)for(var i=o[e],r=0;r<i.length;r++)for(var s=0;s<n.length;s++)i[r].call(null,n[s]);delete c[e]},send:function(e){var t=e.method;(l||e.method===d)&&i&&"function"==typeof i.postMessage?i.postMessage(JSON.stringify({postis:!0,scope:n,method:t,params:e.params}),"*"):a.push(e)},ready:function(e){l?e():setTimeout((function(){u.ready(e)}),50)},destroy:function(e){clearInterval(t),l=!1,r&&"function"==typeof r.removeEventListener&&r.removeEventListener("message",h),e&&e()}},p=+new Date+Math.random()+"";return t=setInterval((function(){u.send({method:d,params:p})}),50),u.listen(d,(function(e){if(e===p){clearInterval(t),l=!0;for(var n=0;n<a.length;n++)u.send(a[n]);a=[]}else u.send({method:d,params:e})})),u}({...f,...e}),this._receiveCallback=()=>{},this.postis.listen(m,(e=>this._receiveCallback(e)))}dispose(){this.postis.destroy()}send(e){this.postis.send({method:m,params:e})}setReceiveCallback(e){this._receiveCallback=e}}const y="request",_="response";class b{constructor(){let{backend:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._listeners=new Map,this._requestID=0,this._responseHandlers=new Map,this._unprocessedMessages=new Set,this.addListener=this.on,e&&this.setBackend(e)}_disposeBackend(){this._backend&&(this._backend.dispose(),this._backend=null)}_onMessageReceived(e){if(e.type===_){const t=this._responseHandlers.get(e.id);t&&(t(e),this._responseHandlers.delete(e.id))}else e.type===y?this.emit("request",e.data,((t,n)=>{this._backend.send({type:_,error:n,id:e.id,result:t})})):this.emit("event",e.data)}dispose(){this._responseHandlers.clear(),this._unprocessedMessages.clear(),this.removeAllListeners(),this._disposeBackend()}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const r=this._listeners.get(e);let s=!1;return r&&r.size&&r.forEach((e=>{s=e(...n)||s})),s||this._unprocessedMessages.add(n),s}on(e,t){let n=this._listeners.get(e);return n||(n=new Set,this._listeners.set(e,n)),n.add(t),this._unprocessedMessages.forEach((e=>{t(...e)&&this._unprocessedMessages.delete(e)})),this}removeAllListeners(e){return e?this._listeners.delete(e):this._listeners.clear(),this}removeListener(e,t){const n=this._listeners.get(e);return n&&n.delete(t),this}sendEvent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._backend&&this._backend.send({type:"event",data:e})}sendRequest(e){if(!this._backend)return Promise.reject(new Error("No transport backend defined!"));this._requestID++;const t=this._requestID;return new Promise(((n,i)=>{this._responseHandlers.set(t,(e=>{let{error:t,result:r}=e;void 0!==r?n(r):i(void 0!==t?t:new Error("Unexpected response format!"))})),this._backend.send({type:y,data:e,id:t})}))}setBackend(e){this._disposeBackend(),this._backend=e,this._backend.setReceiveCallback(this._onMessageReceived.bind(this))}}(function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hash";const i="search"===n?e.search:e.hash,r={},s=i&&i.substr(1).split("&")||[];if("hash"===n&&1===s.length){const e=s[0];if(e.startsWith("/")&&1===e.split("&").length)return r}return s.forEach((e=>{const n=e.split("="),i=n[0];if(!i||i.split(".").some((e=>l.includes(e))))return;let s;try{if(s=n[1],!t){const e=decodeURIComponent(s).replace(/\\&/,"&");s="undefined"===e?void 0:a.parse(e)}}catch(e){return void c(e,`Failed to parse URL parameter value: ${String(s)}`)}r[i]=s})),r})(window.location).jitsi_meet_external_api_id;(window.JitsiMeetJS||(window.JitsiMeetJS={}),window.JitsiMeetJS.app||(window.JitsiMeetJS.app={}),window.JitsiMeetJS.app).setExternalTransportBackend=e=>undefined.setBackend(e);var w=n(860);const L=n.n(w)().getLogger("modules/API/external/functions.js");function x(e,t){return e.sendRequest({type:"devices",name:"setDevice",device:t})}const E=["css/all.css","libs/alwaysontop.min.js"],C={answerKnockingParticipant:"answer-knocking-participant",approveVideo:"approve-video",askToUnmute:"ask-to-unmute",avatarUrl:"avatar-url",cancelPrivateChat:"cancel-private-chat",displayName:"display-name",e2eeKey:"e2ee-key",email:"email",toggleLobby:"toggle-lobby",hangup:"video-hangup",initiatePrivateChat:"initiate-private-chat",kickParticipant:"kick-participant",muteEveryone:"mute-everyone",overwriteConfig:"overwrite-config",password:"password",pinParticipant:"pin-participant",rejectParticipant:"reject-participant",resizeLargeVideo:"resize-large-video",sendChatMessage:"send-chat-message",sendEndpointTextMessage:"send-endpoint-text-message",sendTones:"send-tones",setFollowMe:"set-follow-me",setLargeVideoParticipant:"set-large-video-participant",setMediaEncryptionKey:"set-media-encryption-key",setParticipantVolume:"set-participant-volume",setTileView:"set-tile-view",setVideoQuality:"set-video-quality",startRecording:"start-recording",startShareVideo:"start-share-video",stopRecording:"stop-recording",stopShareVideo:"stop-share-video",subject:"subject",submitFeedback:"submit-feedback",toggleAudio:"toggle-audio",toggleCamera:"toggle-camera",toggleCameraMirror:"toggle-camera-mirror",toggleChat:"toggle-chat",toggleE2EE:"toggle-e2ee",toggleFilmStrip:"toggle-film-strip",toggleModeration:"toggle-moderation",toggleRaiseHand:"toggle-raise-hand",toggleShareAudio:"toggle-share-audio",toggleShareScreen:"toggle-share-screen",toggleTileView:"toggle-tile-view",toggleVirtualBackgroundDialog:"toggle-virtual-background",toggleVideo:"toggle-video"},k={"avatar-changed":"avatarChanged","audio-availability-changed":"audioAvailabilityChanged","audio-mute-status-changed":"audioMuteStatusChanged","browser-support":"browserSupport","camera-error":"cameraError","chat-updated":"chatUpdated","content-sharing-participants-changed":"contentSharingParticipantsChanged","data-channel-opened":"dataChannelOpened","device-list-changed":"deviceListChanged","display-name-change":"displayNameChange","email-change":"emailChange","error-occurred":"errorOccurred","endpoint-text-message-received":"endpointTextMessageReceived","feedback-submitted":"feedbackSubmitted","feedback-prompt-displayed":"feedbackPromptDisplayed","filmstrip-display-changed":"filmstripDisplayChanged","incoming-message":"incomingMessage","knocking-participant":"knockingParticipant",log:"log","mic-error":"micError","moderation-participant-approved":"moderationParticipantApproved","moderation-participant-rejected":"moderationParticipantRejected","moderation-status-changed":"moderationStatusChanged","mouse-enter":"mouseEnter","mouse-leave":"mouseLeave","mouse-move":"mouseMove","outgoing-message":"outgoingMessage","participant-joined":"participantJoined","participant-kicked-out":"participantKickedOut","participant-left":"participantLeft","participant-role-changed":"participantRoleChanged","password-required":"passwordRequired","proxy-connection-event":"proxyConnectionEvent","raise-hand-updated":"raiseHandUpdated","recording-link-available":"recordingLinkAvailable","recording-status-changed":"recordingStatusChanged","video-ready-to-close":"readyToClose","video-conference-joined":"videoConferenceJoined","video-conference-left":"videoConferenceLeft","video-availability-changed":"videoAvailabilityChanged","video-mute-status-changed":"videoMuteStatusChanged","video-quality-changed":"videoQualityChanged","screen-sharing-status-changed":"screenSharingStatusChanged","dominant-speaker-changed":"dominantSpeakerChanged","subject-change":"subjectChange","suspend-detected":"suspendDetected","tile-view-changed":"tileViewChanged","toolbar-button-clicked":"toolbarButtonClicked"};let O=0;function S(e,t){e._numberOfParticipants+=t}function R(e){let t;return"string"==typeof e&&null!==String(e).match(/([0-9]*\.?[0-9]+)(em|pt|px|%)$/)?t=e:"number"==typeof e&&(t=`${e}px`),t}class I extends(r()){constructor(e){super();for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];const{roomName:r="",width:s="100%",height:a="100%",parentNode:c=document.body,configOverwrite:l={},interfaceConfigOverwrite:d={},jwt:h,onload:u,invitees:p,devices:f,userInfo:m,e2eeKey:y}=function(e){if(!e.length)return{};switch(typeof e[0]){case"string":case"undefined":{const[t,n,i,r,s,o,a,c]=e;return{roomName:t,width:n,height:i,parentNode:r,configOverwrite:s,interfaceConfigOverwrite:o,jwt:a,onload:c}}case"object":return e[0];default:throw new Error("Can't parse the arguments!")}}(n),_=o.getItem("jitsiLocalStorage");this._parentNode=c,this._url=function(e){return g({...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},url:`https://${e}/#jitsi_meet_external_api_id=${O}`})}(e,{configOverwrite:l,interfaceConfigOverwrite:d,jwt:h,roomName:r,devices:f,userInfo:m,appData:{localStorageContent:_}}),this._createIFrame(a,s,u),this._transport=new b({backend:new v({postisOptions:{allowedOrigin:new URL(this._url).origin,scope:`jitsi_meet_external_api_${O}`,window:this._frame.contentWindow}})}),Array.isArray(p)&&p.length>0&&this.invite(p),this._tmpE2EEKey=y,this._isLargeVideoVisible=!0,this._numberOfParticipants=0,this._participants={},this._myUserID=void 0,this._onStageParticipant=void 0,this._setupListeners(),O++}_createIFrame(e,t,n){const i=`jitsiConferenceFrame${O}`;this._frame=document.createElement("iframe"),this._frame.allow="camera; microphone; display-capture; autoplay; clipboard-write",this._frame.src=this._url,this._frame.name=i,this._frame.id=i,this._setSize(e,t),this._frame.setAttribute("allowFullScreen","true"),this._frame.style.border=0,n&&(this._frame.onload=n),this._frame=this._parentNode.appendChild(this._frame)}_getAlwaysOnTopResources(){const e=this._frame.contentWindow,t=e.document;let n="";const i=t.querySelector("base");if(i&&i.href)n=i.href;else{const{protocol:t,host:i}=e.location;n=`${t}//${i}`}return E.map((e=>new URL(e,n).href))}_getFormattedDisplayName(e){const{formattedDisplayName:t}=this._participants[e]||{};return t}_getOnStageParticipant(){return this._onStageParticipant}_getLargeVideo(){const e=this.getIFrame();if(this._isLargeVideoVisible&&e&&e.contentWindow&&e.contentWindow.document)return e.contentWindow.document.getElementById("largeVideo")}_getParticipantVideo(e){const t=this.getIFrame();if(t&&t.contentWindow&&t.contentWindow.document)return void 0===e||e===this._myUserID?t.contentWindow.document.getElementById("localVideo_container"):t.contentWindow.document.querySelector(`#participant_${e} video`)}_setSize(e,t){const n=R(e),i=R(t);void 0!==n&&(this._height=e,this._frame.style.height=n),void 0!==i&&(this._width=t,this._frame.style.width=i)}_setupListeners(){this._transport.on("event",(e=>{let{name:t,...n}=e;const i=n.id;switch(t){case"video-conference-joined":void 0!==this._tmpE2EEKey&&(this.executeCommand(C.e2eeKey,this._tmpE2EEKey),this._tmpE2EEKey=void 0),this._myUserID=i,this._participants[i]={avatarURL:n.avatarURL};case"participant-joined":this._participants[i]=this._participants[i]||{},this._participants[i].displayName=n.displayName,this._participants[i].formattedDisplayName=n.formattedDisplayName,S(this,1);break;case"participant-left":S(this,-1),delete this._participants[i];break;case"display-name-change":{const e=this._participants[i];e&&(e.displayName=n.displayname,e.formattedDisplayName=n.formattedDisplayName);break}case"email-change":{const e=this._participants[i];e&&(e.email=n.email);break}case"avatar-changed":{const e=this._participants[i];e&&(e.avatarURL=n.avatarURL);break}case"on-stage-participant-changed":this._onStageParticipant=i,this.emit("largeVideoChanged");break;case"large-video-visibility-changed":this._isLargeVideoVisible=n.isVisible,this.emit("largeVideoChanged");break;case"video-conference-left":S(this,-1),delete this._participants[this._myUserID];break;case"video-quality-changed":this._videoQuality=n.videoQuality;break;case"local-storage-changed":return o.setItem("jitsiLocalStorage",n.localStorageContent),!0}const r=k[t];return!!r&&(this.emit(r,n),!0)}))}addEventListener(e,t){this.on(e,t)}addEventListeners(e){for(const t in e)this.addEventListener(t,e[t])}captureLargeVideoScreenshot(){return this._transport.sendRequest({name:"capture-largevideo-screenshot"})}dispose(){this.emit("_willDispose"),this._transport.dispose(),this.removeAllListeners(),this._frame&&this._frame.parentNode&&this._frame.parentNode.removeChild(this._frame)}executeCommand(e){if(e in C){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];this._transport.sendEvent({data:n,name:C[e]})}else console.error("Not supported command name.")}executeCommands(e){for(const t in e)this.executeCommand(t,e[t])}getAvailableDevices(){return function(e){return e.sendRequest({type:"devices",name:"getAvailableDevices"}).catch((e=>(L.error(e),{})))}(this._transport)}getContentSharingParticipants(){return this._transport.sendRequest({name:"get-content-sharing-participants"})}getCurrentDevices(){return function(e){return e.sendRequest({type:"devices",name:"getCurrentDevices"}).catch((e=>(L.error(e),{})))}(this._transport)}getCustomAvatarBackgrounds(){return this._transport.sendRequest({name:"get-custom-avatar-backgrounds"})}getLivestreamUrl(){return this._transport.sendRequest({name:"get-livestream-url"})}getParticipantsInfo(){const e=Object.keys(this._participants),t=Object.values(this._participants);return t.forEach(((t,n)=>{t.participantId=e[n]})),t}getVideoQuality(){return this._videoQuality}isAudioAvailable(){return this._transport.sendRequest({name:"is-audio-available"})}isDeviceChangeAvailable(e){return function(e,t){return e.sendRequest({deviceType:t,type:"devices",name:"isDeviceChangeAvailable"})}(this._transport,e)}isDeviceListAvailable(){return function(e){return e.sendRequest({type:"devices",name:"isDeviceListAvailable"})}(this._transport)}isMultipleAudioInputSupported(){return function(e){return e.sendRequest({type:"devices",name:"isMultipleAudioInputSupported"})}(this._transport)}invite(e){return Array.isArray(e)&&0!==e.length?this._transport.sendRequest({name:"invite",invitees:e}):Promise.reject(new TypeError("Invalid Argument"))}isAudioMuted(){return this._transport.sendRequest({name:"is-audio-muted"})}isModerationOn(e){return this._transport.sendRequest({name:"is-moderation-on",mediaType:e})}isParticipantForceMuted(e,t){return this._transport.sendRequest({name:"is-participant-force-muted",participantId:e,mediaType:t})}isSharingScreen(){return this._transport.sendRequest({name:"is-sharing-screen"})}getAvatarURL(e){const{avatarURL:t}=this._participants[e]||{};return t}getDeploymentInfo(){return this._transport.sendRequest({name:"deployment-info"})}getDisplayName(e){const{displayName:t}=this._participants[e]||{};return t}getEmail(e){const{email:t}=this._participants[e]||{};return t}getIFrame(){return this._frame}getNumberOfParticipants(){return this._numberOfParticipants}isVideoAvailable(){return this._transport.sendRequest({name:"is-video-available"})}isVideoMuted(){return this._transport.sendRequest({name:"is-video-muted"})}pinParticipant(e){this.executeCommand("pinParticipant",e)}removeEventListener(e){this.removeAllListeners(e)}removeEventListeners(e){e.forEach((e=>this.removeEventListener(e)))}resizeLargeVideo(e,t){e<=this._width&&t<=this._height&&this.executeCommand("resizeLargeVideo",e,t)}sendProxyConnectionEvent(e){this._transport.sendEvent({data:[e],name:"proxy-connection-event"})}setAudioInputDevice(e,t){return function(e,t,n){return x(e,{id:n,kind:"audioinput",label:t})}(this._transport,e,t)}setAudioOutputDevice(e,t){return function(e,t,n){return x(e,{id:n,kind:"audiooutput",label:t})}(this._transport,e,t)}setLargeVideoParticipant(e){this.executeCommand("setLargeVideoParticipant",e)}setVideoInputDevice(e,t){return function(e,t,n){return x(e,{id:n,kind:"videoinput",label:t})}(this._transport,e,t)}startRecording(e){this.executeCommand("startRecording",e)}stopRecording(e){this.executeCommand("stopRecording",e)}toggleE2EE(e){this.executeCommand("toggleE2EE",e)}async setMediaEncryptionKey(e){const{key:t,index:n}=e;if(t){const e=await crypto.subtle.exportKey("raw",t);this.executeCommand("setMediaEncryptionKey",JSON.stringify({exportedKey:Array.from(new Uint8Array(e)),index:n}))}else this.executeCommand("setMediaEncryptionKey",JSON.stringify({exportedKey:!1,index:n}))}}},872:(e,t,n)=>{e.exports=n(754).default},571:(e,t)=>{"use strict";const n=/"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*\:/;t.parse=function(e){const i="object"==typeof(arguments.length<=1?void 0:arguments[1])&&(arguments.length<=1?void 0:arguments[1]),r=(arguments.length<=1?0:arguments.length-1)>1||!i?arguments.length<=1?void 0:arguments[1]:void 0,s=(arguments.length<=1?0:arguments.length-1)>1&&(arguments.length<=2?void 0:arguments[2])||i||{},o=JSON.parse(e,r);return"ignore"===s.protoAction?o:o&&"object"==typeof o&&e.match(n)?(t.scan(o,s),o):o},t.scan=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[e];for(;n.length;){const e=n;n=[];for(const i of e){if(Object.prototype.hasOwnProperty.call(i,"__proto__")){if("remove"!==t.protoAction)throw new SyntaxError("Object contains forbidden prototype property");delete i.__proto__}for(const e in i){const t=i[e];t&&"object"==typeof t&&n.push(i[e])}}}},t.safeParse=function(e,n){try{return t.parse(e,n)}catch(e){return null}}},369:(e,t,n)=>{var i=n(7);function r(e,t){this.logStorage=e,this.stringifyObjects=!(!t||!t.stringifyObjects)&&t.stringifyObjects,this.storeInterval=t&&t.storeInterval?t.storeInterval:3e4,this.maxEntryLength=t&&t.maxEntryLength?t.maxEntryLength:1e4,Object.keys(i.levels).forEach(function(e){this[i.levels[e]]=function(){this._log.apply(this,arguments)}.bind(this,e)}.bind(this)),this.storeLogsIntervalID=null,this.queue=[],this.totalLen=0,this.outputCache=[]}r.prototype.stringify=function(e){try{return JSON.stringify(e)}catch(e){return"[object with circular refs?]"}},r.prototype.formatLogMessage=function(e){for(var t="",n=1,r=arguments.length;n<r;n++){var s=arguments[n];!this.stringifyObjects&&e!==i.levels.ERROR||"object"!=typeof s||(s=this.stringify(s)),t+=s,n!==r-1&&(t+=" ")}return t.length?t:null},r.prototype._log=function(){var e=arguments[1],t=this.formatLogMessage.apply(this,arguments);if(t){var n=this.queue[this.queue.length-1],i=n&&n.text;i===t?n.count+=1:(this.queue.push({text:t,timestamp:e,count:1}),this.totalLen+=t.length)}this.totalLen>=this.maxEntryLength&&this._flush(!0,!0)},r.prototype.start=function(){this._reschedulePublishInterval()},r.prototype._reschedulePublishInterval=function(){this.storeLogsIntervalID&&(window.clearTimeout(this.storeLogsIntervalID),this.storeLogsIntervalID=null),this.storeLogsIntervalID=window.setTimeout(this._flush.bind(this,!1,!0),this.storeInterval)},r.prototype.flush=function(){this._flush(!1,!0)},r.prototype._flush=function(e,t){this.totalLen>0&&(this.logStorage.isReady()||e)&&(this.logStorage.isReady()?(this.outputCache.length&&(this.outputCache.forEach(function(e){this.logStorage.storeLogs(e)}.bind(this)),this.outputCache=[]),this.logStorage.storeLogs(this.queue)):this.outputCache.push(this.queue),this.queue=[],this.totalLen=0),t&&this._reschedulePublishInterval()},r.prototype.stop=function(){this._flush(!1,!1)},e.exports=r},7:e=>{var t={trace:0,debug:1,info:2,log:3,warn:4,error:5};o.consoleTransport=console;var n=[o.consoleTransport];o.addGlobalTransport=function(e){-1===n.indexOf(e)&&n.push(e)},o.removeGlobalTransport=function(e){var t=n.indexOf(e);-1!==t&&n.splice(t,1)};var i={};function r(){var e={methodName:"",fileLocation:"",line:null,column:null},t=new Error,n=t.stack?t.stack.split("\n"):[];if(!n||n.length<3)return e;var i=null;return n[3]&&(i=n[3].match(/\s*at\s*(.+?)\s*\((\S*)\s*:(\d*)\s*:(\d*)\)/)),!i||i.length<=4?(0===n[2].indexOf("log@")?e.methodName=n[3].substr(0,n[3].indexOf("@")):e.methodName=n[2].substr(0,n[2].indexOf("@")),e):(e.methodName=i[1],e.fileLocation=i[2],e.line=i[3],e.column=i[4],e)}function s(){var e=arguments[0],s=arguments[1],o=Array.prototype.slice.call(arguments,2);if(!(t[s]<e.level))for(var a=!(e.options.disableCallerInfo||i.disableCallerInfo)&&r(),c=n.concat(e.transports),l=0;l<c.length;l++){var d=c[l],h=d[s];if(h&&"function"==typeof h){var u=[];u.push((new Date).toISOString()),e.id&&u.push("["+e.id+"]"),a&&a.methodName.length>1&&u.push("<"+a.methodName+">: ");var p=u.concat(o);h.bind(d).apply(d,p)}}}function o(e,n,i,r){this.id=n,this.options=r||{},this.transports=i,this.transports||(this.transports=[]),this.level=t[e];for(var o=Object.keys(t),a=0;a<o.length;a++)this[o[a]]=s.bind(null,this,o[a])}o.setGlobalOptions=function(e){i=e||{}},o.prototype.setLevel=function(e){this.level=t[e]},e.exports=o,o.levels={TRACE:"trace",DEBUG:"debug",INFO:"info",LOG:"log",WARN:"warn",ERROR:"error"}},860:(e,t,n)=>{var i=n(7),r=n(369),s={},o=[],a=i.levels.TRACE;e.exports={addGlobalTransport:function(e){i.addGlobalTransport(e)},removeGlobalTransport:function(e){i.removeGlobalTransport(e)},setGlobalOptions:function(e){i.setGlobalOptions(e)},getLogger:function(e,t,n){var r=new i(a,e,t,n);return e?(s[e]=s[e]||[],s[e].push(r)):o.push(r),r},setLogLevelById:function(e,t){for(var n=t?s[t]||[]:o,i=0;i<n.length;i++)n[i].setLevel(e)},setLogLevel:function(e){a=e;for(var t=0;t<o.length;t++)o[t].setLevel(e);for(var n in s){var i=s[n]||[];for(t=0;t<i.length;t++)i[t].setLevel(e)}},levels:i.levels,LogCollector:r}},415:e=>{function t(){return new DOMException("The request is not allowed","NotAllowedError")}e.exports=async function(e){try{await async function(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}(e)}catch(n){try{await async function(e){const n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);const i=window.getSelection(),r=window.document.createRange();i.removeAllRanges(),r.selectNode(n),i.addRange(r);let s=!1;try{s=window.document.execCommand("copy")}finally{i.removeAllRanges(),window.document.body.removeChild(n)}if(!s)throw t()}(e)}catch(e){throw e||n||t()}}}},620:e=>{"use strict";var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise((function(n,i){function r(n){e.removeListener(t,s),i(n)}function s(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}f(e,t,s,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&f(e,"error",t,{once:!0})}(e,r)}))},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var o=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function l(e,t,n,i){var r,s,o,l;if(a(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),o=s[t]),void 0===o)o=s[t]=n,++e._eventsCount;else if("function"==typeof o?o=s[t]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),(r=c(e))>0&&o.length>r&&!o.warned){o.warned=!0;var d=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");d.name="MaxListenersExceededWarning",d.emitter=e,d.type=t,d.count=o.length,l=d,console&&console.warn&&console.warn(l)}return e}function d(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=d.bind(i);return r.listener=n,i.wrapFn=r,r}function u(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):g(r,r.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function f(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(s){i.once&&e.removeEventListener(t,r),n(s)}))}}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return c(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,s=this._events;if(void 0!==s)r=r&&void 0===s.error;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var c=s[e];if(void 0===c)return!1;if("function"==typeof c)i(c,this,t);else{var l=c.length,d=g(c,l);for(n=0;n<l;++n)i(d[n],this,t)}return!0},s.prototype.addListener=function(e,t){return l(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return l(this,e,t,!0)},s.prototype.once=function(e,t){return a(t),this.on(e,h(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,h(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,i,r,s,o;if(a(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,r=s;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,o||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,s=Object.keys(n);for(i=0;i<s.length;++i)"removeListener"!==(r=s[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},s.prototype.listeners=function(e){return u(this,e,!0)},s.prototype.rawListeners=function(e){return u(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},s.prototype.listenerCount=p,s.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(872)})()}));
//# sourceMappingURL=external_api.min.js.map
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */