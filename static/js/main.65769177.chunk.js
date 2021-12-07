(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){e.exports={Label:"Filter_Label__68R2n"}},2:function(e,t,n){e.exports={inputWrapper:"Form_inputWrapper__38NdC",Label:"Form_Label__1cUgP",FormButton:"Form_FormButton__1aoHy"}},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),i=n(14),o=n(3),l=n(4),u=n(6),b=n(5),d=n(8),m=n.n(d),h=n(0);var j=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(h.jsx)("ul",{className:"bbb",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(h.jsxs)("li",{className:m.a.ListItem,children:[Object(h.jsx)("p",{children:a}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("button",{className:m.a.ContactButton,onClick:function(){return n(t)},children:"Delete"})]},t)}))})},p=n(12),f=n(2),O=n.n(f),C=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",filter:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(p.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number;e.props.onSubmit(a,c),e.setState({name:"",number:""})},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:"test3",children:[Object(h.jsx)("div",{className:O.a.inputWrapper,children:Object(h.jsxs)("label",{className:O.a.Label,children:["Name",Object(h.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})}),Object(h.jsx)("div",{className:O.a.inputWrapper,children:Object(h.jsxs)("label",{className:O.a.Label,children:["Number",Object(h.jsx)("input",{type:"tel",value:this.state.number,onChange:this.handleChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})}),Object(h.jsx)("button",{className:O.a.FormButton,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=C,x=n(13),g=n.n(x);var N=function(e){var t=e.value,n=e.onChange;return Object(h.jsxs)("label",{className:g.a.Label,children:["Find contacts by name"," ",Object(h.jsx)("input",{type:"text",value:t,onChange:n})]})},_=n(15),y=(n(9),n(10),function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.deleteContacts=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.formSubmitHandler=function(e){console.log(e)},e.addContact=function(t,n){if(e.state.contacts.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))alert("".concat(t," is already in contacts"));else{var a={id:Object(_.a)(),name:t,number:n};e.setState((function(e){return{contacts:[a].concat(Object(i.a)(e.contacts))}}))}},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.filter,a=t.contacts,c=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(c)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"Wrapper",children:[Object(h.jsx)("h1",{className:"Title",children:"Phonebook"}),Object(h.jsx)(v,{onSubmit:this.addContact})]}),Object(h.jsxs)("div",{className:"Wrapper",children:[Object(h.jsx)("h2",{className:"Title",children:"Contacts"}),Object(h.jsx)(N,{value:e,onChange:this.changeFilter}),Object(h.jsx)(j,{contacts:t,onDeleteContact:this.deleteContacts})]})]})}}]),n}(a.Component)),L=y;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={ListItem:"Contacts_ListItem__3I27e",ContactButton:"Contacts_ContactButton__gUKEA"}}},[[21,1,2]]]);
//# sourceMappingURL=main.65769177.chunk.js.map