(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=n(11),o=n(2),l=n(3),u=n(5),d=n(4),b=n(0);var h=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(b.jsx)("ul",{className:"bbb",children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(b.jsxs)("li",{className:"iii",children:[Object(b.jsx)("p",{children:a}),Object(b.jsx)("p",{children:c}),Object(b.jsx)("button",{className:"fff",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},m=n(10),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",filter:""},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(m.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number;e.props.onSubmit(a,c),e.setState({name:"",number:""})},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"test3",children:[Object(b.jsx)("div",{className:"inputW",children:Object(b.jsxs)("label",{className:"ttt",children:["Name",Object(b.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]})}),Object(b.jsx)("div",{className:"inputW",children:Object(b.jsxs)("label",{className:"ttt",children:["Number",Object(b.jsx)("input",{type:"tel",value:this.state.number,onChange:this.handleChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})}),Object(b.jsx)("button",{className:"fff",type:"submit",children:"Add contact"})]})}}]),n}(a.Component),f=j;var p=function(e){var t=e.value,n=e.onChange;return Object(b.jsxs)("label",{className:"hhh",children:["Find contacts by name"," ",Object(b.jsx)("input",{type:"text",value:t,onChange:n})]})},O=n(12),v=(n(7),n(8),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.deleteContacts=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.formSubmitHandler=function(e){console.log(e)},e.addContact=function(t,n){if(e.state.contacts.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))alert("".concat(t," is already in contacts"));else{var a={id:Object(O.a)(),name:t,number:n};e.setState((function(e){return{contacts:[a].concat(Object(i.a)(e.contacts))}}))}},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.filter,a=t.contacts,c=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(c)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"Wra",children:[Object(b.jsx)("h1",{className:"rrr",children:"Phonebook"}),Object(b.jsx)(f,{onSubmit:this.addContact})]}),Object(b.jsxs)("div",{className:"Wra",children:[Object(b.jsx)("h2",{className:"rrr",children:"Contacts"}),Object(b.jsx)(p,{value:e,onChange:this.changeFilter}),Object(b.jsx)(h,{contacts:t,onDeleteContact:this.deleteContacts})]})]})}}]),n}(a.Component)),x=v;s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))},8:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.bc60ead5.chunk.js.map