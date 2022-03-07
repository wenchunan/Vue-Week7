"use strict";(self["webpackChunkweek6_homework"]=self["webpackChunkweek6_homework"]||[]).push([[514],{2030:function(e,t,l){var a=l(7424),d=l.n(a);t["Z"]={methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(d())(this.$refs.modal)}}},4246:function(e,t,l){l.d(t,{Z:function(){return y}});var a=l(6252),d=l(3577);const s={class:"modal fade",id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"delProductModalLabel","aria-hidden":"true",ref:"modal"},n={class:"modal-dialog"},r={class:"modal-content"},o={class:"modal-header bg-danger text-white"},i={class:"model-title",id:"delProductModalLable"},u=(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),c={class:"modal-body"},p=(0,a.Uk)(" 是否刪除 "),m={class:"text-danger"},_=(0,a.Uk)(" 商品(刪除後將無法恢復) "),h={class:"modal-footer"},g=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function b(e,t,l,b,w,f){return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",n,[(0,a._)("div",r,[(0,a._)("div",o,[(0,a._)("h5",i,[(0,a._)("span",null,"刪除 "+(0,d.zw)(l.tempProduct.title),1)]),u]),(0,a._)("div",c,[p,(0,a._)("strong",m,(0,d.zw)(l.tempProduct.title),1),_]),(0,a._)("div",h,[g,(0,a._)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=t=>e.$emit("del-item"))}," 確認刪除 ")])])])],512)}var w=l(2030),f={data(){return{modal:""}},props:{tempProduct:{}},mixins:[w.Z]},k=l(3744);const v=(0,k.Z)(f,[["render",b]]);var y=v},2205:function(e,t,l){l.d(t,{Z:function(){return b}});var a=l(6252),d=l(3577),s=l(9963);const n={"aria-label":"Page navigation example"},r={class:"pagination"},o=(0,a._)("span",{"aria-hidden":"true"},"«",-1),i=[o],u=["onClick"],c=(0,a._)("span",{"aria-hidden":"true"},"»",-1),p=[c];function m(e,t,l,o,c,m){return(0,a.wg)(),(0,a.iD)("nav",n,[(0,a._)("ul",r,[(0,a._)("li",{class:(0,d.C_)(["page-item",{disabled:!l.pages.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,s.iM)((e=>m.emitPages(l.pages.current_page-1)),["prevent"]))},i)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(e=>((0,a.wg)(),(0,a.iD)("li",{class:(0,d.C_)(["page-item",{active:e===l.pages.current_page}]),key:e+"page"},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,s.iM)((t=>m.emitPages(e)),["prevent"])},(0,d.zw)(e),9,u)],2)))),128)),(0,a._)("li",{class:(0,d.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,s.iM)((e=>m.emitPages(l.pages.current_page+1)),["prevent"]))},p)],2)])])}var _={props:["pages"],methods:{emitPages(e){this.$emit("emit-pages",e)}}},h=l(3744);const g=(0,h.Z)(_,[["render",m]]);var b=g},514:function(e,t,l){l.r(t),l.d(t,{default:function(){return ie}});var a=l(6252),d=l(3577),s=l(9963);const n={class:"container"},r={class:"table mt-4"},o=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"購買時間"),(0,a._)("th",null,"Email"),(0,a._)("th",null,"購買項目"),(0,a._)("th",null,"應付金額"),(0,a._)("th",null,"是否付款"),(0,a._)("th",null,"編輯")])],-1),i={class:"list-unstyled"},u={class:"form-ckeck form-switch"},c=["onUpdate:modelValue","onChange"],p={class:"form-check-label",for:"flexSwitchCheckDefault"},m={key:0},_={key:1},h={class:"btn-group"},g=["onClick"],b=["onClick"];function w(e,t,l,w,f,k){const v=(0,a.up)("AdminOrderModal"),y=(0,a.up)("AdminPagination"),O=(0,a.up)("AdminDelProduct");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("table",r,[o,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.orders,(t=>((0,a.wg)(),(0,a.iD)(a.HY,{key:t.id},[f.orders.length?((0,a.wg)(),(0,a.iD)("tr",{key:0,class:(0,d.C_)({"text-secondary":!t.is_paid})},[(0,a._)("td",null,(0,d.zw)(e.$filters.date(t.create_at)),1),(0,a._)("td",null,(0,d.zw)(t.user.email),1),(0,a._)("td",null,[(0,a._)("ul",i,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.products,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e.id},(0,d.zw)(e.product.title)+" "+(0,d.zw)(e.qty)+" "+(0,d.zw)(e.product.unit),1)))),128))])]),(0,a._)("td",null,(0,d.zw)(e.$filters.toThousands(t.total)),1),(0,a._)("td",null,[(0,a._)("div",u,[(0,a.wy)((0,a._)("input",{class:"form-check-input",id:"flexSwitchCheckDefault",type:"checkbox","onUpdate:modelValue":e=>t.is_paid=e,onChange:e=>k.updatePaid(t)},null,40,c),[[s.e8,t.is_paid]]),(0,a._)("label",p,[t.is_paid?((0,a.wg)(),(0,a.iD)("span",m,"已付款")):((0,a.wg)(),(0,a.iD)("span",_,"未付款"))])])]),(0,a._)("td",null,[(0,a._)("div",h,[(0,a._)("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:e=>k.openModal(t)}," 檢視",8,g),(0,a._)("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:e=>k.openDelOrderModal(t)}," 刪除 ",8,b)])])],2)):(0,a.kq)("",!0)],64)))),128))])]),(0,a.Wm)(v,{order:f.tempOrder,ref:"orderModal",onUpdatePaid:k.updatePaid},null,8,["order","onUpdatePaid"]),(0,a.Wm)(y,{pages:f.pagination,onEmitPages:k.getOrders},null,8,["pages","onEmitPages"]),(0,a.Wm)(O,{tempProduct:f.tempOrder,ref:"delModal",onDelItem:k.delOrder},null,8,["tempProduct","onDelItem"])])}var f=l(2205),k=l(4246);const v={class:"modal fade",id:"productModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},y={class:"modal-dialog modal-xl"},O={class:"modal-content border-0"},P=(0,a._)("div",{class:"modal-header"},[(0,a._)("h5",{class:"modal-title",id:"productModalLabel"},[(0,a._)("span",null,"訂單細節")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),D={class:"modal-body"},M={class:"row"},C={class:"col-md-4"},x={class:"mb-2"},z=(0,a._)("h3",{class:"mb-3"},"用戶資料",-1),$={class:"table"},Z={key:0},U=(0,a._)("th",null,"姓名",-1),A=(0,a._)("th",null,"Email",-1),H=(0,a._)("th",null,"電話",-1),Y=(0,a._)("th",null,"地址",-1),q={class:"col-md-8"},E=(0,a._)("h3",null,"訂單細節",-1),K={class:"table"},L=(0,a._)("th",null,"訂單編號",-1),T=(0,a._)("th",null,"下單時間",-1),V=(0,a._)("th",null,"付款狀態",-1),W={key:0,class:"text-success"},j={key:1,class:"text-muted"},I=(0,a._)("th",null,"總金額",-1),S=(0,a._)("h3",null,"選購商品",-1),N={class:"table"},B={class:"text-end"},F={class:"d-flex justify-content-end"},G={class:"form-check"},J={class:"form-check-label",for:"invalidCheck2"},Q={key:0},R={key:1},X={class:"modal-footer"},ee=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function te(e,t,l,n,r,o){return(0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("div",y,[(0,a._)("div",O,[P,(0,a._)("div",D,[(0,a._)("div",M,[(0,a._)("div",C,[(0,a._)("div",x,[z,(0,a._)("table",$,[r.tempOrder.user?((0,a.wg)(),(0,a.iD)("tbody",Z,[(0,a._)("tr",null,[U,(0,a._)("td",null,(0,d.zw)(r.tempOrder.user.name),1)]),(0,a._)("tr",null,[A,(0,a._)("td",null,(0,d.zw)(r.tempOrder.user.email),1)]),(0,a._)("tr",null,[H,(0,a._)("td",null,(0,d.zw)(r.tempOrder.user.tel),1)]),(0,a._)("tr",null,[Y,(0,a._)("td",null,(0,d.zw)(r.tempOrder.user.address),1)])])):(0,a.kq)("",!0)])])]),(0,a._)("div",q,[E,(0,a._)("table",K,[(0,a._)("tbody",null,[(0,a._)("tr",null,[L,(0,a._)("td",null,(0,d.zw)(r.tempOrder.id),1)]),(0,a._)("tr",null,[T,(0,a._)("td",null,(0,d.zw)(e.$filters.date(r.tempOrder.create_at)),1)]),(0,a._)("tr",null,[V,(0,a._)("td",null,[r.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("strong",W,"已付款")):((0,a.wg)(),(0,a.iD)("span",j,"尚未付款"))])]),(0,a._)("tr",null,[I,(0,a._)("td",null,(0,d.zw)(e.$filters.toThousands(r.tempOrder.total)),1)])])]),S,(0,a._)("table",N,[(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.tempOrder.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("th",null,(0,d.zw)(t.product.title),1),(0,a._)("td",null,(0,d.zw)(t.qty)+" / "+(0,d.zw)(t.product.unit),1),(0,a._)("td",B,(0,d.zw)(e.$filters.toThousands(t.final_total)),1)])))),128))])]),(0,a._)("div",F,[(0,a._)("div",G,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"invalidCheck2","onUpdate:modelValue":t[0]||(t[0]=e=>r.tempOrder.is_paid=e)},null,512),[[s.e8,r.tempOrder.is_paid]]),(0,a._)("label",J,[r.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("span",Q,"已付款")):((0,a.wg)(),(0,a.iD)("span",R,"未付款"))])])])])])]),(0,a._)("div",X,[ee,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=t=>e.$emit("update-paid",r.tempOrder))},"修改付款狀態")])])])],512)}var le=l(2030),ae={data(){return{modal:"",tempOrder:{},isPaid:!1}},props:{order:{type:Object,default(){return{}}}},mixins:[le.Z],watch:{order(){this.tempOrder=this.order,console.log(this.tempOrder)}}},de=l(3744);const se=(0,de.Z)(ae,[["render",te]]);var ne=se,re={data(){return{orders:{},pagination:{},currentPage:1,tempOrder:{},modal:{delModal:""}}},components:{AdminPagination:f.Z,AdminDelProduct:k.Z,AdminOrderModal:ne},methods:{getOrders(e=1){this.currentPage=e;const t=`https://vue3-course-api.hexschool.io/v2/api/annawen/admin/orders?page=${e}`;this.$http.get(t).then((e=>{console.log(e.data.orders),this.orders=e.data.orders,this.pagination=e.data.pagination}))},openModal(e){this.tempOrder={...e},this.$refs.orderModal.openModal()},openDelOrderModal(e){this.tempOrder={...e},this.$refs.delModal.openModal()},delOrder(){const e=`https://vue3-course-api.hexschool.io/v2/api/annawen/admin/order/${this.tempOrder.id}`;this.$http.delete(e).then((e=>{alert(e.data.message),this.$refs.delModal.hideModal(),this.getOrders(this.currentPage)})).catch((e=>{console.log(e)}))},updatePaid(e){const t=`https://vue3-course-api.hexschool.io/v2/api/annawen/admin/order/${e.id}`,l={is_paid:e.is_paid};this.$http.put(t,{data:l}).then((e=>{this.$refs.orderModal.hideModal(),this.getOrders(this.currentPage),alert(e.data.message)})).catch((e=>{console.log(e)}))}},mounted(){this.getOrders()}};const oe=(0,de.Z)(re,[["render",w]]);var ie=oe}}]);
//# sourceMappingURL=514.d18a1705.js.map