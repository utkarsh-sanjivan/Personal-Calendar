(this.webpackJsonppersonal_calendar=this.webpackJsonppersonal_calendar||[]).push([[0],{196:function(e,t){},207:function(e,t,a){e.exports=a(380)},212:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},226:function(e,t,a){},235:function(e,t,a){},251:function(e,t,a){},252:function(e,t,a){},343:function(e,t,a){},352:function(e,t,a){},359:function(e,t,a){},370:function(e,t,a){},371:function(e,t,a){},372:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getMonthDateArray",(function(){return ie})),a.d(n,"addEvent",(function(){return se})),a.d(n,"saveFetchedEvents",(function(){return de}));var r=a(0),c=a.n(r),o=a(27),l=a.n(o),i=(a(212),a(35)),s=a(70),d=a(71),u=a(129),m=a(126),v=a(124),E=a(58),f=a(394),h=a(390),p=a(192),y=a(400),D=a(391),b=a(171),O=a(202),g=(a(219),function(e){return c.a.createElement("div",{className:"card-container"},e.day?c.a.createElement("div",{className:e.textClassName},e.day):c.a.createElement("div",{className:e.textClassName},c.a.createElement("div",{className:"date-text",onClick:function(){return e.onDateClick(e.date)}},e.formattedDate),e.isActive&&e.events&&e.events.slice(0,3).map((function(t,a){return 2===a&&e.events.length>3?c.a.createElement("p",{className:"content-para-2"},c.a.createElement("p",{className:"content-para",onClick:function(){return e.onEventClick(t)}},t.name),c.a.createElement("p",{className:"more-text",onClick:function(){return e.onSeeMoreClick(e.date)}},"  ...more")):c.a.createElement("p",{className:"content-para",onClick:function(){return e.onEventClick(t)}},t.name)}))))}),k=a(398),M=(a(220),function(e){return c.a.createElement("div",{className:"calendar-container"},c.a.createElement(k.a,{className:"calendar-days-row"},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((function(e){return c.a.createElement(g,{textClassName:"day-card",day:e})}))),e.dateColumn.map((function(t){return c.a.createElement(k.a,{className:"calendar-date-rows"},t.map((function(t){return c.a.createElement(g,{onDateClick:function(a){t.isActive&&e.onDateClick(a)},onSeeMoreClick:function(t){return e.onSeeMoreClick(t)},onEventClick:function(t){return e.onEventClick(t)},formattedDate:t.formattedDate,isActive:t.isActive,events:t.events,date:t,textClassName:t.isActive?t.isToday?"today-date-card":"date-card":"blocked-date-card"})})))})))}),C=a(67),j=a(50),N=(a(226),function(e){return c.a.createElement(j.a,e)}),A=a(383),S=a(397),w=a(127),T=a(401),x=a(402),R=(a(235),function(e){return c.a.createElement(A.a,Object.assign({},e,{options:e.autoCompleteData,autoFocus:!0}),c.a.createElement(S.a,{placeholder:"Search Events",prefix:c.a.createElement(w.a,{title:"Search Event"},c.a.createElement(T.a,{className:"search-icon"})),suffix:c.a.createElement(x.a,null)}))}),_=a(403),F=a(404),J=a(63),V=a(384),I=a(385),q=a(386),Y=a(387),H=a(399),B=a(388),G=a(389);function K(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]}function L(e){var t=e.split(" "),a=Object(J.a)(t,3),n=a[0],r=a[1],c=a[2],o=["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(r)+1,l="".concat(o,"/").concat(n,"/").concat(c);return new Date(l)}function W(e,t){for(var a=V.a(e),n=I.a(a),r=q.a(a),c=Y.a(n),o=[],l=[],i="",s=r;s<=c;s){for(var d=function(a){var n=s;i=f.a(s,"d"),l.push({formattedDate:i,day:s,dateText:s.getDate()+" "+K(s.getMonth())+" "+s.getFullYear(),events:[],isToday:t.some((function(e){return H.a(n,e)})),isActive:B.a(s,e)}),s=G.a(s,1)},u=0;u<7;u++)d();o.push(l),l=[]}return o}var z=[{name:"Birthday",key:"b_day",icon:"fas fa-birthday-cake"},{name:"Anniversary",key:"anniversary",icon:"fas fa-ring"},{name:"Meeting",key:"meeting",icon:"far fa-handshake"},{name:"Conference",key:"conference",icon:"fas fa-users"},{name:"Others",key:"others",icon:"fas fa-info-circle"}],Q=[{name:"January",key:"jan",index:0},{name:"February",key:"feb",index:1},{name:"March",key:"march",index:2},{name:"April",key:"apr",index:3},{name:"May",key:"may",index:4},{name:"June",key:"jun",index:5},{name:"July",key:"jul",index:6},{name:"August",key:"aug",index:7},{name:"September",key:"sep",index:8},{name:"October",key:"oct",index:9},{name:"November",key:"nov",index:10},{name:"December",key:"dec",index:11}],U=(a(251),C.a.Option),$=function(e){return c.a.createElement("div",{className:"calendar-header-container"},c.a.createElement("div",{className:"calendar-header-left"},c.a.createElement("div",null,c.a.createElement(N,{className:"today-button",onClick:e.getToday},"Today"),c.a.createElement("span",null,c.a.createElement(N,{className:"nav-button",onClick:function(){return e.navMonth("prev")}},c.a.createElement(_.a,null)),c.a.createElement(N,{className:"nav-button",onClick:function(){return e.navMonth("next")}},c.a.createElement(F.a,null)))),c.a.createElement("div",{className:"calendar-header-top-right"},c.a.createElement(C.a,{className:"search-month-year-input",defaultValue:K(e.currentDate.getMonth()),onChange:e.onChangeMonth},Q.map((function(e){return c.a.createElement(U,Object.assign({},e,{value:e.name}),e.name)}))),c.a.createElement(C.a,{className:"search-month-year-input",defaultValue:e.currentDate.getFullYear(),onChange:e.onChangeYear},Array(130).fill(null).map((function(e,t){return c.a.createElement(U,{index:t,value:t+1970},t+1970)}))))),c.a.createElement("div",{className:"calendar-header-right"},c.a.createElement(R,{className:"search-input",onSearch:e.onSearch,onSelect:e.onSelect,autoCompleteData:e.autoCompleteData})))},P=a(395),X=a(396),Z=a(392),ee=(a(252),function(e){return c.a.createElement("div",{style:{marginTop:"25px"}},e.loading&&e.dataSource.length<31?c.a.createElement(X.a,{loading:!0,active:!0}):c.a.createElement(Z.a,Object.assign({},e,{dataSource:e.dataSource,columns:e.columns,pagination:!1,bordered:!0})))}),te=(a(343),function(e){var t=[{title:c.a.createElement("div",null,"Name"),dataIndex:"name",key:"name",render:function(t,a){return c.a.createElement("div",{className:"event-modal-title",onClick:function(){return e.onTitleClick(a)}},t)}},{title:c.a.createElement("div",null,"Time"),dataIndex:"time",key:"time",render:function(e,t){return c.a.createElement("div",{className:"event-modal-title"},e)}},{title:c.a.createElement("div",null,"Description"),dataIndex:"description",key:"description",render:function(e,t){return c.a.createElement("div",{className:"event-modal-title"},e)}},{title:c.a.createElement("div",null,"Duration"),dataIndex:"duration",key:"duration",render:function(e,t){return c.a.createElement("div",{className:"event-modal-title"},e)}}];return c.a.createElement(P.a,Object.assign({},e,{title:c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(x.a,{className:"date-modal-calendar-icon"}),c.a.createElement("div",null,"Events on ",e.selectedDate.dateText))}),c.a.createElement(ee,{width:600,dataSource:e.selectedDate.events||[],columns:t}))}),ae=a(60),ne=a.n(ae),re=a(393),ce=(a(352),C.a.Option),oe=function(e){var t=Object(r.useState)(""),a=Object(J.a)(t,2),n=a[0],o=a[1],l=Object(r.useState)(""),s=Object(J.a)(l,2),d=s[0],u=s[1],m=Object(r.useState)(ne()().format("hh:mm A")),v=Object(J.a)(m,2),E=v[0],f=v[1],h=Object(r.useState)(ne()()),p=Object(J.a)(h,2),y=p[0],D=p[1],b=Object(r.useState)(""),O=Object(J.a)(b,2),g=O[0],k=O[1],M=Object(r.useState)({name:"Meeting",key:"meeting"}),j=Object(J.a)(M,2),N=j[0],A=j[1],w=Object(r.useState)({name:!1,description:!1,durationReq:!1,durationType:!1}),T=Object(J.a)(w,2),x=T[0],R=T[1];function _(){o(""),u(""),f(ne()().format("hh:mm A")),D(ne()()),k(""),A({name:"Meeting",key:"meeting"}),R({name:!1,description:!1,durationReq:!1,durationType:!1})}return Object(r.useEffect)((function(){_()}),[e.switchAddEventModalState]),c.a.createElement(P.a,Object.assign({},e,{title:c.a.createElement("div",{className:"date-modal-title"},"Add Event on ",e.selectedDate.dateText),okText:"Save Event",onOk:function(){""!==n&&""!==d&&""!==E?(R({name:!1,description:!1,durationReq:!1,durationType:!1}),e.handleSaveEvent({name:n,description:d,time:E,duration:g,eventType:N,date:e.selectedDate.day})):R(Object(i.a)(Object(i.a)({},x),{},{name:""===n,description:""===d,durationReq:""===g}))},onCancel:function(){_(),e.onClose()}}),c.a.createElement("div",{className:"add-event-key-container"},c.a.createElement("div",{className:"add-event-title"},"Event Name:"),c.a.createElement(S.a,{value:n,onChange:function(e){return t=e.target.value,R(Object(i.a)(Object(i.a)({},x),{},{name:0===t.length})),void o(t);var t}}),x.name?c.a.createElement("div",{className:"add-event-error-msg"},"** Required"):null),c.a.createElement("div",{className:"add-event-key-container"},c.a.createElement("div",{className:"add-event-title"},"Event Description:"),c.a.createElement(S.a,{value:d,onChange:function(e){return t=e.target.value,R(Object(i.a)(Object(i.a)({},x),{},{description:0===t.length})),void u(t);var t}}),x.description?c.a.createElement("div",{className:"add-event-error-msg"},"** Required"):null),c.a.createElement("div",{className:"add-event-key-container"},c.a.createElement("div",{className:"add-event-title"},"Event Type:"),c.a.createElement(C.a,{defaultValue:"Meeting",onChange:function(e){A(z.find((function(t){return t.name===e})))}},z.map((function(e){return c.a.createElement(ce,{key:e.key,value:e.name},e.name)})))),c.a.createElement("div",{className:"add-event-key-container"},c.a.createElement("div",{className:"add-event-title"},"Select the event time:"),c.a.createElement(re.a,{placeHolder:"Select Event Time",onChange:function(e,t){f(t),D(e)},value:y,format:"hh:mm A"})),c.a.createElement("div",{className:"add-event-key-container"},c.a.createElement("div",{className:"add-event-title"},"Event Duration (in hrs):"),c.a.createElement(S.a,{value:g,onChange:function(e){var t;0===(t=e.target.value).length||/^\d+$/.test(t)?(R(Object(i.a)(Object(i.a)({},x),{},{durationReq:0===t.length,durationType:!1})),k(t)):R(Object(i.a)(Object(i.a)({},x),{},{durationType:!0}))}}),x.durationReq?c.a.createElement("div",{className:"add-event-error-msg"},"** Required"):null,x.durationType?c.a.createElement("div",{className:"add-event-error-msg"},"** Number only"):null))},le=(a(359),function(e){return c.a.createElement(P.a,Object.assign({},e,{title:c.a.createElement("div",{className:"event-modal-title-container"},e.selectedEvent&&function(){var t=e.selectedEvent.eventType&&e.selectedEvent.eventType.key,a=z.find((function(e){return e.key===t}));return a&&c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{class:a.icon+"  event-modal-title-icon"}),c.a.createElement("div",{className:"event-modal-title-text"},a.name))}()," Event")}),c.a.createElement("div",{className:"event-modal-container"},c.a.createElement("div",{className:"event-modal-row"},c.a.createElement("i",{class:"fas fa-signature event-modal-icon"}),c.a.createElement("div",{className:"event-modal-text"},e.selectedEvent&&e.selectedEvent.name)),c.a.createElement("div",{className:"event-modal-row"},c.a.createElement("i",{class:"fas fa-sticky-note event-modal-icon"}),c.a.createElement("div",{className:"event-modal-text"},e.selectedEvent&&e.selectedEvent.description)),c.a.createElement("div",{className:"event-modal-row"},c.a.createElement("i",{class:"fas fa-clock event-modal-icon"}),c.a.createElement("div",{className:"event-modal-text"},e.selectedEvent&&e.selectedEvent.time)),c.a.createElement("div",{className:"event-modal-row"},c.a.createElement("i",{class:"fas fa-stopwatch event-modal-icon"}),c.a.createElement("div",{className:"event-modal-text"},e.selectedEvent&&"".concat(e.selectedEvent.duration," ").concat(e.selectedEvent.duration<2?"hour":"hours"))),c.a.createElement("div",{className:"event-modal-row"},c.a.createElement("i",{class:"far fa-calendar-alt event-modal-icon"}),c.a.createElement("div",{className:"event-modal-text"},e.selectedEvent&&e.selectedEvent.dateText))))});function ie(e){return{type:"GET_MONTH_DATE_ARRAY",payload:e}}function se(e){return{type:"ADD_EVENT",payload:e}}function de(e){return{type:"SAVE_FETCHED_EVENTS",payload:e}}var ue=a(145),me=a.n(ue);me.a.initializeApp({apiKey:"AIzaSyCm0C0Dr2ppiVi1WKMweHW1psRBMOgnxuo",authDomain:"calendar-app-f0c88.firebaseapp.com",databaseURL:"https://calendar-app-f0c88.firebaseio.com",projectId:"calendar-app-f0c88",storageBucket:"calendar-app-f0c88.appspot.com",messagingSenderId:"1022865556679",appId:"1:1022865556679:web:b2f3ea221012800f8ceae2",measurementId:"G-L01KHTCQ8L"});var ve=me.a;a(370);var Ee=function(){return c.a.createElement("i",{class:"fas fa-spin fa-cog calendar-loader"})},fe=(a(371),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).getToday=function(){n.setState({currentDate:new Date,todayDates:[new Date]}),n.props.dateEventActions.getMonthDateArray(W(new Date,n.state.todayDates))},n.navMonth=function(e){var t="prev"===e?new Date(f.a(h.a(n.state.currentDate,1),"MM/dd/yyyy")):new Date(f.a(p.a(n.state.currentDate,1),"MM/dd/yyyy"));n.setState({currentDate:t,todayDates:[new Date]}),n.props.dateEventActions.getMonthDateArray(W(t,n.state.todayDates))},n.onChangeMonth=function(e,t){var a=y.a(n.state.currentDate,t.index);n.setState({currentDate:a,todayDates:[new Date]}),n.props.dateEventActions.getMonthDateArray(W(a,n.state.todayDates))},n.onChangeYear=function(e){var t=D.a(n.state.currentDate,e);n.setState({currentDate:t,todayDates:[new Date]}),n.props.dateEventActions.getMonthDateArray(W(t,n.state.todayDates))},n.onDateClick=function(e){n.setState((function(t){return{showAddEventModal:!t.showAddEventModal,selectedDate:t.showAddEventModal?{}:e}}))},n.onSeeMoreClick=function(e){n.setState((function(t){return{showDateModal:!t.showDateModal,selectedDate:t.showDateModal?{}:e}}))},n.onEventClick=function(e){n.setState((function(t){return{showEventModal:!t.showEventModal,selectedEvent:t.showEventModal?{}:e,showDateModal:t.wasDateModalOpened,wasDateModalOpened:!1}}))},n.onTitleClick=function(e){n.setState((function(t){return{showEventModal:!t.showEventModal,selectedEvent:t.showEventModal?{}:e,showDateModal:!1,wasDateModalOpened:!0}}))},n.handleSaveEvent=function(e){var t=Object(b.uuid)();n.props.firebase.database().ref("events/"+t).set({dateText:n.state.selectedDate.dateText,description:e.description,duration:e.duration,eventType:e.eventType,name:e.name,time:e.time}),n.setState((function(e){return{showAddEventModal:!e.showAddEventModal,selectedDate:e.showAddEventModal?{}:n.state.selectedDate,switchAddEventModalState:!e.switchAddEventModalState}}))},n.fetchAllEvents=function(){var e=n.props.dateEventActions;n.props.firebase.database().ref("events").orderByValue().on("value",(function(t){var a=t.val();e.saveFetchedEvents(Object.keys(a).map((function(e){return Object(i.a)(Object(i.a)({},a[e]),{},{key:e})})))}))},n.onSearch=function(e){var t=new O.a(n.props.dateEvent.events,["name","description"],{caseSensitive:!1});n.setState({autoCompleteData:t.search(e).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{value:e.name})}))})},n.onSelect=function(e,t){n.setState({currentDate:L(t.dateText),todayDates:[new Date,new Date(t.dateText)]}),n.props.dateEventActions.getMonthDateArray(W(L(t.dateText),[new Date,new Date(t.dateText)]))},n.state={todayDates:[new Date],currentDate:new Date,selectedDate:{},showAddEventModal:!1,showDateModal:!1,showEventModal:!1,switchAddEventModalState:!1,autoCompleteData:[],wasDateModalOpened:!1},n}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"personal-calendar-container"},this.props.dateEvent.loading?c.a.createElement(Ee,null):c.a.createElement(c.a.Fragment,null,c.a.createElement($,{currentDate:this.state.currentDate,navMonth:this.navMonth,onChangeMonth:this.onChangeMonth,onChangeYear:this.onChangeYear,getToday:this.getToday,onSearch:this.onSearch,onSelect:this.onSelect,autoCompleteData:this.state.autoCompleteData}),c.a.createElement(M,{dateColumn:this.props.dateEvent.monthDateArray,currentDate:this.state.currentDate,onDateClick:this.onDateClick,onSeeMoreClick:this.onSeeMoreClick,onEventClick:this.onEventClick}),c.a.createElement(oe,{visible:this.state.showAddEventModal,handleSaveEvent:this.handleSaveEvent,onClose:this.onDateClick,selectedDate:this.state.selectedDate,switchAddEventModalState:this.state.switchAddEventModalState}),c.a.createElement(te,{visible:this.state.showDateModal,selectedDate:this.state.selectedDate,onTitleClick:this.onTitleClick,onOk:this.onSeeMoreClick,onCancel:this.onSeeMoreClick}),c.a.createElement(le,{visible:this.state.showEventModal,selectedEvent:this.state.selectedEvent,onOk:this.onEventClick,onCancel:this.onEventClick})))}},{key:"componentDidMount",value:function(){this.fetchAllEvents(),this.props.dateEventActions.getMonthDateArray(W(new Date,this.state.todayDates))}}]),a}(c.a.Component));var he,pe=Object(v.b)((function(e){return{dateEvent:e.dateEvent}}),(function(e){return{dateEventActions:Object(E.b)(n,e)}}))((he=fe,function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return c.a.createElement(he,Object.assign({},this.props,{firebase:ve}))}}]),a}(c.a.Component)));a(372);var ye=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(pe,null))},De=a(125),be=a(195),Oe=a.n(be),ge=a(199),ke=a(146),Me=a.n(ke),Ce=a(203),je=a(196),Ne=a.n(je),Ae=Me.a.mark(Se);function Se(){return Me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ce.a)(Ne.a);case 2:case"end":return e.stop()}}),Ae)}var we=a(104),Te={monthDateArray:[],events:[],loading:!0};function xe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MONTH_DATE_ARRAY":var a=t.payload.map((function(t){return t.map((function(t){return e.events.filter((function(e){return e.dateText===t.dateText})).length>0&&(t.events=Object(we.a)(e.events.filter((function(e){return e.dateText===t.dateText})))),t}))}));return Object(i.a)(Object(i.a)({},e),{},{monthDateArray:a});case"ADD_EVENT":var n=e.monthDateArray.map((function(e){return e.map((function(e){return e.dateText===t.payload.dateText&&(e.events=[].concat(Object(we.a)(e.events),[Object(i.a)(Object(i.a)({},t.payload.event),{},{dateText:t.payload.dateText})])),e}))})),r=[].concat(Object(we.a)(e.events),[Object(i.a)(Object(i.a)({},t.payload.event),{},{dateText:t.payload.dateText})]);return Object(i.a)(Object(i.a)({},e),{},{monthDateArray:n,events:r});case"SAVE_FETCHED_EVENTS":var c=e.monthDateArray.map((function(e){return e.map((function(e){return t.payload.filter((function(t){return t.dateText===e.dateText})).length>0&&(e.events=Object(we.a)(t.payload.filter((function(t){return t.dateText===e.dateText})))),e}))}));return Object(i.a)(Object(i.a)({},e),{},{monthArray:c,events:t.payload,loading:!1});default:return Object(i.a)({},e)}}var Re=function(e){return Object(E.c)({dateEvent:xe})},_e=Oe()(),Fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(ge.a)(t={}),n=Object(De.b)(e),r=Object(E.e)(Re(),t,Object(E.d)(Object(E.a)(a,n)));return a.run(Se),r}(_e,{});l.a.render(c.a.createElement(v.a,{store:Fe},c.a.createElement(De.a,{history:_e},c.a.createElement(ye,null))),document.getElementById("root"))}},[[207,1,2]]]);
//# sourceMappingURL=main.d80c0687.chunk.js.map