// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('luminus_demo.navbar');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
luminus_demo.navbar.nav_link = (function luminus_demo$navbar$nav_link(uri,title,page,collapsed_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,reagent.session.get(cljs.core.cst$kw$page)))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,uri,cljs.core.cst$kw$on_DASH_click,(function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(collapsed_QMARK_,true) : cljs.core.reset_BANG_.call(null,collapsed_QMARK_,true));
})], null),title], null)], null);
});
luminus_demo.navbar.navbar = (function luminus_demo$navbar$navbar(){
var collapsed_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return ((function (collapsed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$nav_DASH_tabs_DASH_justified$navbar$$navbar_DASH_fixed_DASH_top,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar_DASH_header,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$navbar_DASH_toggle,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(collapsed_QMARK_) : cljs.core.deref.call(null,collapsed_QMARK_)))?null:"collapsed"),cljs.core.cst$kw$data_DASH_toggle,"collapse",cljs.core.cst$kw$aria_DASH_expanded,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(collapsed_QMARK_) : cljs.core.deref.call(null,collapsed_QMARK_)),cljs.core.cst$kw$aria_DASH_controls,"navbar",cljs.core.cst$kw$on_DASH_click,((function (collapsed_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(collapsed_QMARK_,cljs.core.not);
});})(collapsed_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sr_DASH_only,"Toggle Navigation"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$icon_DASH_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$icon_DASH_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$icon_DASH_bar], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$navbar_DASH_brand,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"#/"], null),"Flingjie"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$navbar_DASH_collapse$collapse,(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(collapsed_QMARK_) : cljs.core.deref.call(null,collapsed_QMARK_)))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"in"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$nav$navbar_DASH_nav,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [luminus_demo.navbar.nav_link,"#/","Home",cljs.core.cst$kw$home,collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [luminus_demo.navbar.nav_link,"#/todo","Todo",cljs.core.cst$kw$todo,collapsed_QMARK_], null)], null)], null)], null)], null);
});
;})(collapsed_QMARK_))
});
