(window.webpackJsonpspa=window.webpackJsonpspa||[]).push([[0],{123:function(e,t,a){e.exports=a(267)},128:function(e,t,a){},129:function(e,t,a){},267:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),o=a.n(r),c=(a(128),a(129),a(36)),s=a(33),i=a(6),u=a(7),d=a(9),p=a(8),m=a(10),h=a(278),f=a(280),E=a(277),y=a(276),v=a(270),b=a(46),g=a(62),T=a(47),k=a.n(T),I=a(80),O=a(15),j=a(37),D=a(271),S=a(120),C=a(272),A=a(273),w=a(119),U=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(d.a)(this,Object(p.a)(t).call(this,e)),console.log(e),a.state={fileInfo:null,uploadPercentage:0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({fileInfo:this.props.fileInfo,uploadPercentage:this.props.uploadPercentage})}},{key:"render",value:function(){return this.state.fileInfo?l.a.createElement("div",{style:{backgroundColor:"white",marginTop:5}},this.state.fileInfo.name):l.a.createElement("div",null)}}]),t}(l.a.Component),B=function e(){Object(i.a)(this,e)};B.BASE_API_URL="/";var P=a(17),_=a.n(P),L=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,null,[{key:"uploadFile",value:function(e,a,n){var l=new FormData;return l.append("file",a),_.a.post(t.BASE_API_URL+"upload/perform_task/"+e,l,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:n})}},{key:"getUploadStats",value:function(){return _.a.get(t.BASE_API_URL+"upload/successful_upload_stats")}},{key:"getAllUploadTasks",value:function(){return _.a.get(t.BASE_API_URL+"upload/tasks")}},{key:"createUploadTask",value:function(e,a,n,l){return _.a.post(t.BASE_API_URL+"upload/tasks",{deviceId:e,deviceType:a,fileNum:n,manualUploader:l},{headers:{"Access-Control-Allow-Origin":"*"}})}}]),t}(B),x=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,null,[{key:"getAllDataTypes",value:function(){return _.a.get(t.BASE_API_URL+"data/data_types/")}},{key:"searchDataTypes",value:function(e){return _.a.get(t.BASE_API_URL+"data/data_types/search/"+encodeURI(e))}}]),t}(B),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={uploadPercentage:0,uploadDescription:"",filesChosen:[],allDataTypeInfo:[],seletedDataTypeInfo:null},a.uploadButton=l.a.createRef(),a.onDragOver=a.onDragOver.bind(Object(O.a)(a)),a.onDrop=a.onDrop.bind(Object(O.a)(a)),a.onFileChange=a.onFileChange.bind(Object(O.a)(a)),a.onUpload=a.onUpload.bind(Object(O.a)(a)),a.onUploadProgressChange=a.onUploadProgressChange.bind(Object(O.a)(a)),a.onDataTypeSelected=a.onDataTypeSelected.bind(Object(O.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.getAllDataTypes().then(function(t){e.setState({allDataTypeInfo:t.data.data})})}},{key:"onUpload",value:function(){var e=Object(I.a)(k.a.mark(function e(){var t,a,n=this;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=this.state.filesChosen.length){e.next=3;break}return alert("Please select a file before uploading"),e.abrupt("return");case 3:return e.next=5,L.createUploadTask("test computer","computer",this.state.filesChosen.length,"Technician1");case 5:t=e.sent,console.log(t),a=t.data.data.taskId,this,this.setState({uploadPercentage:0}),this.state.filesChosen.forEach(function(){var e=Object(I.a)(k.a.mark(function e(t){var l;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.uploadFile(a,t,n.onUploadProgressChange);case 3:l=e.sent,alert(l.data.data.numLeft+" file(s) left. status:"+l.data.data.status),console.log(l.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}());case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onFileChange",value:function(e){var t=e.target;t.files.length>0&&this.setState({selectedFile:t.files[0]})}},{key:"onUploadProgressChange",value:function(e){}},{key:"onDragOver",value:function(e){e.preventDefault()}},{key:"onDrop",value:function(e){e.preventDefault();var t=[];if(e.dataTransfer.items)for(var a=0;a<e.dataTransfer.items.length;a++)if("file"===e.dataTransfer.items[a].kind){var n=e.dataTransfer.items[a].getAsFile();t.push(n)}this.setState({filesChosen:[].concat(Object(g.a)(this.state.filesChosen),t)})}},{key:"onDataTypeSelected",value:function(e){var t=e.target.getAttribute("dtid");if(t){var a=this.state.allDataTypeInfo.filter(function(e){return e.dataTypeId==t});this.setState({seletedDataTypeInfo:a[0]})}}},{key:"render",value:function(){var e=this.state.filesChosen.map(function(e){return l.a.createElement(U,{fileInfo:e,key:e.name})}),t=null==this.state.seletedDataTypeInfo?"Please Select a Data Type":this.state.seletedDataTypeInfo.dataTypeName;console.log(this.state.seletedDataTypeInfo);var a=this.state.allDataTypeInfo.map(function(e){return l.a.createElement(j.a.Item,{key:e.dataTypeId,dtid:e.dataTypeId},e.dataTypeName)});return l.a.createElement(v.a,null,l.a.createElement(D.a,null,l.a.createElement(S.a,null,l.a.createElement(C.a,{onDrop:this.onDrop,onDragOver:this.onDragOver,style:{minHeight:200}},l.a.createElement("span",null,l.a.createElement("b",null,"Please drag one or more files to this area")),e),this.state.filesChosen.length," File(s) selected",l.a.createElement("br",null),l.a.createElement(j.a,{as:A.a,onClick:this.onDataTypeSelected},l.a.createElement(w.a,{variant:"success"},t),l.a.createElement(j.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic"}),l.a.createElement(j.a.Menu,null,a)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(w.a,{ref:this.uploadButton,onClick:this.onUpload},"Upload"))))}}]),t}(l.a.Component),R=a(279),F=a(281),M=a(82),H=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,null,[{key:"getUploadStatsByDate",value:function(){return _.a.get(t.BASE_API_URL+"stats/upload_stats_by_date")}},{key:"getErrorStatsByDeviceTypes",value:function(){return _.a.get(t.BASE_API_URL+"stats/error_stats_by_device_types")}}]),t}(B),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={uploadStatsByDate:{labels:[],datasets:[{data:[]}]},errorStatsByDeviceTypes:{labels:[],datasets:[{data:[]}]}},a.uploadStatsChart=l.a.createRef(),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;H.getUploadStatsByDate().then(function(t){e.setState({uploadStatsByDate:t.data.data}),console.log(e.state.uploadStatsByDate)}).catch(function(e){console.log(e)}),H.getErrorStatsByDeviceTypes().then(function(t){e.setState({errorStatsByDeviceTypes:t.data.data}),console.log(e.state.errorStatsByDeviceTypes)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement(v.a,null,l.a.createElement(D.a,null,l.a.createElement(R.a,{variant:"primary"},"10 files are awaiting to be processed at this moment.")),l.a.createElement(D.a,null,l.a.createElement(M.a,{height:100,data:this.state.uploadStatsByDate})),l.a.createElement(D.a,null),l.a.createElement(D.a,null,l.a.createElement(S.a,{md:{span:6}},l.a.createElement(v.a,null,l.a.createElement("h3",null,"Current Unresolved Errors")),l.a.createElement(F.a,null,l.a.createElement(F.a.Item,null,"Upload Errors: 0"),l.a.createElement(F.a.Item,null,"Processing Errors: 0"),l.a.createElement(F.a.Item,null,"Data Storage Errors: 0"),l.a.createElement(F.a.Item,null,"Application Errors: 0"),l.a.createElement(F.a.Item,null,"Unknown Application Errors: 0"))),l.a.createElement(S.a,{md:{span:6}},l.a.createElement(v.a,null,l.a.createElement("h3",null,"Upload by Device Types")),l.a.createElement(M.b,{data:this.state.errorStatsByDeviceTypes}))))}}]),t}(l.a.Component),z=a(274),K=a(275),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={dataTypeInfo:e.dataTypeInfo},a.addCallBack=a.props.addCallBack,a.onAdd=a.onAdd.bind(Object(O.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"onAdd",value:function(){this.addCallBack(this.state.dataTypeInfo)}},{key:"render",value:function(){return l.a.createElement("tr",null,l.a.createElement("td",null,this.state.dataTypeInfo.dataTypeId),l.a.createElement("td",null,this.state.dataTypeInfo.dataTypeName),l.a.createElement("td",null,this.state.dataTypeInfo.deviceBrand),l.a.createElement("td",null,this.state.dataTypeInfo.deviceType),l.a.createElement("td",null,this.state.dataTypeInfo.dataType),l.a.createElement("td",null,l.a.createElement(w.a,{onClick:this.onAdd}," Add ")))}}]),t}(l.a.Component),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={dataTypeInfo:[],deviceSearchText:"",selectedDataTypeInfo:[]},a.onSearchTextChange=a.onSearchTextChange.bind(Object(O.a)(a)),a.addTypeCallBack=a.addTypeCallBack.bind(Object(O.a)(a)),a.filterSelectedDataTypes=a.filterSelectedDataTypes.bind(Object(O.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.getAllDataTypes().then(function(t){e.setState({dataTypeInfo:e.filterSelectedDataTypes(t.data.data)})})}},{key:"onSearchTextChange",value:function(e){var t=this;this.setState({deviceSearchText:e.target.value},function(){x.searchDataTypes(t.state.deviceSearchText).then(function(e){t.setState({dataTypeInfo:t.filterSelectedDataTypes(e.data.data)})})})}},{key:"filterSelectedDataTypes",value:function(e){var t=new Set(this.state.selectedDataTypeInfo.map(function(e){return e.dataTypeId}));return e.filter(function(e){return!t.has(e.dataTypeId)})}},{key:"addTypeCallBack",value:function(e){console.log(e);var t=this.state.dataTypeInfo.filter(function(t){return t.dataTypeId!==e.dataTypeId});this.setState({dataTypeInfo:t},this.setState({selectedDataTypeInfo:[].concat(Object(g.a)(this.state.selectedDataTypeInfo),[e])}))}},{key:"render",value:function(){var e=this,t=this.state.dataTypeInfo.map(function(t){return l.a.createElement(V,{dataTypeInfo:t,addCallBack:e.addTypeCallBack,key:t.dataTypeId})}),a=this.state.selectedDataTypeInfo.map(function(e){return l.a.createElement(z.a,{variant:"primary",key:e.dataTypeId},e.dataTypeName)});return l.a.createElement(v.a,null,l.a.createElement(D.a,null,l.a.createElement(E.a.Control,{size:"lg",type:"text",placeholder:"Search devices type, data type, brand name, device name here",value:this.state.deviceSearchText,onChange:this.onSearchTextChange})),l.a.createElement(D.a,null,l.a.createElement(K.a,{striped:!0,bordered:!0,hover:!0,style:{marginTop:20}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"Device Name"),l.a.createElement("th",null,"Device Brand"),l.a.createElement("th",null,"Device Type"),l.a.createElement("th",null,"Data Type"),l.a.createElement("th",null,"Add"))),l.a.createElement("tbody",null,t))),l.a.createElement(C.a,null,l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{as:D.a,controlId:"formHorizontalEmail"},l.a.createElement(E.a.Label,{column:!0,sm:3},"Seleted Data Type"),l.a.createElement(S.a,{sm:5},a)),l.a.createElement(E.a.Group,{as:D.a,controlId:"formHorizontalEmail"},l.a.createElement(E.a.Label,{column:!0,sm:3},"Start Date"),l.a.createElement(S.a,{sm:5},l.a.createElement(E.a.Control,{name:"startDate",type:"date"}))),l.a.createElement(E.a.Group,{as:D.a,controlId:"formHorizontalPassword"},l.a.createElement(E.a.Label,{column:!0,sm:3},"Start Date"),l.a.createElement(S.a,{sm:5},l.a.createElement(E.a.Control,{name:"endDate",type:"date"}))),l.a.createElement(E.a.Group,{as:D.a,controlId:"formHorizontalEmail"},l.a.createElement(S.a,null,l.a.createElement(w.a,null," Export Data"))))))}}]),t}(l.a.Component),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={uploadInfo:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({uploadInfo:this.props.uploadInfo})}},{key:"render",value:function(){return this.state.uploadInfo?l.a.createElement(F.a.Item,{className:"align-left"},"File Id: ",this.state.uploadInfo.uploadId," Archive Path: ",this.state.uploadInfo.archivePath," Upload Error: ",this.state.uploadInfo.uploadError):l.a.createElement("div",null)}}]),t}(l.a.Component),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={uploadTask:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({uploadTask:this.props.uploadTask})}},{key:"render",value:function(){if(!this.state.uploadTask)return l.a.createElement("div",null);var e=this.state.uploadTask.files.map(function(e){return l.a.createElement(W,{uploadInfo:e,key:e.uploadId})});return this.state.uploadTask?l.a.createElement(F.a.Item,null,"Upload Task Id: ",this.state.uploadTask.taskId," File nums: ",this.state.uploadTask.fileNum," Device Type: ",this.state.uploadTask.deviceType,l.a.createElement(F.a,null,e)):l.a.createElement("div",null)}}]),t}(l.a.Component),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={uploadTasks:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;L.getAllUploadTasks().then(function(t){e.setState({uploadTasks:t.data.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.uploadTasks.map(function(e){return l.a.createElement($,{uploadTask:e,key:e.taskId})});return l.a.createElement(v.a,null,l.a.createElement(f.a,{variant:"tabs",defaultActiveKey:"processingError"},l.a.createElement(f.a.Item,null,l.a.createElement(f.a.Link,{eventKey:"processingError"},"Processing Error")),l.a.createElement(f.a.Item,null,l.a.createElement(f.a.Link,{eventKey:"incompletedUploadTasks"},"Current Incompleted Upload Task")),l.a.createElement(f.a.Item,null,l.a.createElement(f.a.Link,{eventKey:"processingTasks"}," Current Processing Tasks")),l.a.createElement(f.a.Item,null,l.a.createElement(f.a.Link,{eventKey:"completedUploadTasks"}," Completed UploadTasks"))),l.a.createElement(F.a,{style:{textAlign:"left"}},e))}}]),t}(l.a.Component),Q=function(e){function t(e){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(c.HashRouter,null,l.a.createElement(h.a,{bg:"light",expand:"lg"},l.a.createElement(h.a.Brand,null,"Data Admin"),l.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(f.a,{className:"mr-auto"},l.a.createElement(b.LinkContainer,{to:"/admin/dashboard"},l.a.createElement(f.a.Link,null,"Dashboard")),l.a.createElement(b.LinkContainer,{to:"/admin/upload"},l.a.createElement(f.a.Link,null,"Upload Files")),l.a.createElement(b.LinkContainer,{to:"/admin/dataManager"},l.a.createElement(f.a.Link,null,"Data Manager")),l.a.createElement(b.LinkContainer,{to:"/admin/logViewer"},l.a.createElement(f.a.Link,null,"Log Viewer"))),l.a.createElement(E.a,{inline:!0},l.a.createElement(y.a,{title:"Hi, Technician1",id:"basic-nav-dropdown"},l.a.createElement(y.a.Item,{href:"#action/3.1"},"My Upload"),l.a.createElement(y.a.Item,{href:"#action/3.2"},"Change Password"),l.a.createElement(y.a.Item,{href:"#action/3.3"},"Support"),l.a.createElement(y.a.Divider,null),l.a.createElement(y.a.Item,{href:"#action/3.4"},"Sign Out"))))),l.a.createElement(v.a,{style:{paddingTop:50}},l.a.createElement(s.c,{from:"/admin",exact:!0,to:"/admin/dashboard"}),l.a.createElement(s.d,{path:"/admin/dashboard",component:G}),l.a.createElement(s.d,{path:"/admin/upload",component:N}),l.a.createElement(s.d,{path:"/admin/dataManager",component:J}),l.a.createElement(s.d,{path:"/admin/logViewer",component:q})))}}]),t}(l.a.Component),X=a(122),Y=a.n(X),Z=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,null,[{key:"login",value:function(e,a){return _.a.post(t.BASE_API_URL+"auth/login",{userName:e,password:Y()(a)})}}]),t}(B),ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={userName:"test",password:"test",loginSuccess:!1,sessionToken:null},a.login=a.login.bind(Object(O.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"login",value:function(){var e=this;this.state.userName&&this.state.password?Z.login(this.state.userName,this.state.password).then(function(t){e.setState({loginSuccess:1,loginToken:t.data.data.sessionToken})}).catch(function(e){console.log(e)}):alert("Please type in both user name and password!")}},{key:"render",value:function(){var e=this;return this.state.loginSuccess?l.a.createElement(s.c,{exact:!0,to:"/admin/"}):l.a.createElement(v.a,null,l.a.createElement(D.a,null,l.a.createElement(S.a,null,l.a.createElement("h2",null,"Log In"),l.a.createElement(C.a,{style:{width:"30em",margin:"0 auto",top:"50%"}},l.a.createElement(E.a,null,l.a.createElement(E.a.Group,{controlId:"email",style:{textAlign:"left"}},l.a.createElement(E.a.Label,null,"Email address"),l.a.createElement(E.a.Control,{type:"email",placeholder:"Enter email",value:this.state.userName,onChange:function(t){e.setState({userName:t.target.value})}})),l.a.createElement(E.a.Group,{controlId:"password",style:{textAlign:"left"}},l.a.createElement(E.a.Label,null,"Password"),l.a.createElement(E.a.Control,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})}})),l.a.createElement(w.a,{variant:"primary",type:"button",onClick:this.login},"Submit"))))))}}]),t}(l.a.Component);var te=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c.HashRouter,null,l.a.createElement(s.c,{from:"/",exact:!0,to:"/login"}),l.a.createElement(s.d,{path:"/admin",component:Q}),l.a.createElement(s.d,{path:"/login",component:ee})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[123,1,2]]]);
//# sourceMappingURL=main.a764bec4.chunk.js.map