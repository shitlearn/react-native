(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,d=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return a?r.a.createElement(d,o(o({ref:t},c),{},{components:a})):r.a.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),i=(a(0),a(1006)),l={id:"cameraroll",title:"\ud83d\udea7 CameraRoll",custom_edit_url:"https://github.com/facebook/react-native-website/edit/master/website/versioned_docs/version-0.58/cameraroll.md"},o={unversionedId:"cameraroll",id:"version-0.63/cameraroll",isDocsHomePage:!1,title:"\ud83d\udea7 CameraRoll",description:"Deprecated. Use @react-native-community/cameraroll instead.",source:"@site/versioned_docs/version-0.63/cameraroll.md",slug:"/cameraroll",permalink:"/react-native/docs/cameraroll",editUrl:"https://github.com/facebook/react-native-website/edit/master/website/versioned_docs/version-0.58/cameraroll.md",version:"0.63",lastUpdatedAt:1603945169},b=[{value:"Permissions",id:"permissions",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>saveToCameraRoll()</code>",id:"savetocameraroll",children:[]},{value:"<code>getPhotos()</code>",id:"getphotos",children:[]}]}],c={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Deprecated.")," Use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-cameraroll"}),"@react-native-community/cameraroll")," instead.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"CameraRoll")," provides access to the local camera roll or photo library."),Object(i.b)("p",null,"On iOS, the ",Object(i.b)("inlineCode",{parentName:"p"},"CameraRoll")," API requires the ",Object(i.b)("inlineCode",{parentName:"p"},"RCTCameraRoll")," library to be linked. You can refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/linking-libraries-ios"}),"Linking Libraries (iOS)")," to learn more."),Object(i.b)("h3",{id:"permissions"},"Permissions"),Object(i.b)("p",null,"The user's permission is required in order to access the Camera Roll on devices running iOS 10 or later. Add the ",Object(i.b)("inlineCode",{parentName:"p"},"NSPhotoLibraryUsageDescription")," key in your ",Object(i.b)("inlineCode",{parentName:"p"},"Info.plist")," with a string that describes how your app will use this data. This key will appear as ",Object(i.b)("inlineCode",{parentName:"p"},"Privacy - Photo Library Usage Description")," in Xcode."),Object(i.b)("p",null,"If you are targeting devices running iOS 11 or later, you will also need to add the ",Object(i.b)("inlineCode",{parentName:"p"},"NSPhotoLibraryAddUsageDescription")," key in your ",Object(i.b)("inlineCode",{parentName:"p"},"Info.plist"),". Use this key to define a string that describes how your app will use this data. By adding this key to your ",Object(i.b)("inlineCode",{parentName:"p"},"Info.plist"),", you will be able to request write-only access permission from the user. If you try to save to the camera roll without this permission, your app will exit."),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"savetocameraroll"},Object(i.b)("inlineCode",{parentName:"h3"},"saveToCameraRoll()")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"CameraRoll.saveToCameraRoll(tag, [type]);\n")),Object(i.b)("p",null,"Saves the photo or video to the camera roll or photo library."),Object(i.b)("p",null,"On Android, the tag must be a local image or video URI, such as ",Object(i.b)("inlineCode",{parentName:"p"},'"file:///sdcard/img.png"'),"."),Object(i.b)("p",null,"On iOS, the tag can be any image URI (including local, remote asset-library and base64 data URIs) or a local video file URI (remote or data URIs are not supported for saving video at this time)."),Object(i.b)("p",null,"If the tag has a file extension of .mov or .mp4, it will be inferred as a video. Otherwise it will be treated as a photo. To override the automatic choice, you can pass an optional ",Object(i.b)("inlineCode",{parentName:"p"},"type")," parameter that must be one of 'photo' or 'video'."),Object(i.b)("p",null,"Returns a Promise which will resolve with the new URI."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"tag"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See above.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('photo', 'video')"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Overrides automatic detection based on the file extension.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getphotos"},Object(i.b)("inlineCode",{parentName:"h3"},"getPhotos()")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"CameraRoll.getPhotos(params);\n")),Object(i.b)("p",null,"Returns a Promise with photo identifier objects from the local camera roll of the device matching shape defined by ",Object(i.b)("inlineCode",{parentName:"p"},"getPhotosReturnChecker"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"params"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Expects a params with the shape described below.")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"first")," : {number} : The number of photos wanted in reverse order of the photo application (i.e. most recent first for SavedPhotos)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"after")," : {string} : A cursor that matches ",Object(i.b)("inlineCode",{parentName:"li"},"page_info { end_cursor }")," returned from a previous call to ",Object(i.b)("inlineCode",{parentName:"li"},"getPhotos"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"groupTypes")," : {string} : Specifies which group types to filter the results to. Valid values are:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Album")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"All")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Event")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Faces")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Library")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PhotoStream")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SavedPhotos")," // default"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"groupName")," : {string} : Specifies filter on group names, like 'Recent Photos' or custom album titles."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"assetType")," : {string} : Specifies filter on asset type. Valid values are:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"All")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Videos")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Photos")," // default"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mimeTypes")," : {Array} : Filter by mimetype (e.g. image/jpeg).")),Object(i.b)("p",null,"Returns a Promise which when resolved will be of the following shape:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"edges")," : {Array","<","node",">","} An array of node objects",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"node"),": {object} An object with the following shape:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),": {string}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"group_name"),": {string}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"image"),": {object} : An object with the following shape:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"uri"),": {string}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"height"),": {number}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"width"),": {number}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"isStored"),": {boolean}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"playableDuration"),": {number}"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timestamp"),": {number}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"location"),": {object} : An object with the following shape:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"latitude"),": {number}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"longitude"),": {number}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"altitude"),": {number}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"heading"),": {number}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"speed"),": {number}"))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"page_info")," : {object} : An object with the following shape:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"has_next_page"),": {boolean}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"start_cursor"),": {string}"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"end_cursor"),": {string}")))),Object(i.b)("h4",{id:"example"},"Example"),Object(i.b)("p",null,"Loading images:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"_handleButtonPress = () => {\n   CameraRoll.getPhotos({\n       first: 20,\n       assetType: 'Photos',\n     })\n     .then(r => {\n       this.setState({ photos: r.edges });\n     })\n     .catch((err) => {\n        //Error Loading Images\n     });\n   };\nrender() {\n return (\n   <View>\n     <Button title=\"Load Images\" onPress={this._handleButtonPress} />\n     <ScrollView>\n       {this.state.photos.map((p, i) => {\n       return (\n         <Image\n           key={i}\n           style={{\n             width: 300,\n             height: 100,\n           }}\n           source={{ uri: p.node.image.uri }}\n         />\n       );\n     })}\n     </ScrollView>\n   </View>\n );\n}\n")))}p.isMDXComponent=!0}}]);