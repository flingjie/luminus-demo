// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('luminus_demo.core');
goog.require('cljs.core');
goog.require('luminus_demo.todo');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('luminus_demo.navbar');
goog.require('luminus_demo.home');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('reagent.core');
goog.require('goog.History');
goog.require('goog.events');
luminus_demo.core.pages = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$home,new cljs.core.Var(function(){return luminus_demo.home.home_page;},cljs.core.cst$sym$luminus_DASH_demo$core_SLASH_home_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$luminus_DASH_demo$core,cljs.core.cst$sym$home_DASH_page,"/Users/Jeanine/workspace/luminus-demo/src-cljs/luminus_demo/home.cljs",16,1,6,6,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(luminus_demo.home.home_page)?luminus_demo.home.home_page.cljs$lang$test:null)])),cljs.core.cst$kw$todo,new cljs.core.Var(function(){return luminus_demo.todo.todo_page;},cljs.core.cst$sym$luminus_DASH_demo$core_SLASH_todo_DASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$luminus_DASH_demo$core,cljs.core.cst$sym$todo_DASH_page,"src-cljs/luminus_demo/todo.cljs",16,1,5,5,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(luminus_demo.todo.todo_page)?luminus_demo.todo.todo_page.cljs$lang$test:null)]))], null);
luminus_demo.core.page = (function luminus_demo$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11487 = reagent.session.get(cljs.core.cst$kw$page);
return (luminus_demo.core.pages.cljs$core$IFn$_invoke$arity$1 ? luminus_demo.core.pages.cljs$core$IFn$_invoke$arity$1(G__11487) : luminus_demo.core.pages.call(null,G__11487));
})()], null);
});
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__11368__auto___11491 = (function (params__11369__auto__){
if(cljs.core.map_QMARK_(params__11369__auto__)){
var map__11488 = params__11369__auto__;
var map__11488__$1 = ((((!((map__11488 == null)))?((((map__11488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11488):map__11488);
return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__11369__auto__)){
var vec__11490 = params__11369__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__11368__auto___11491);

var action__11368__auto___11495 = (function (params__11369__auto__){
if(cljs.core.map_QMARK_(params__11369__auto__)){
var map__11492 = params__11369__auto__;
var map__11492__$1 = ((((!((map__11492 == null)))?((((map__11492.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11492.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11492):map__11492);
return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$todo);
} else {
if(cljs.core.vector_QMARK_(params__11369__auto__)){
var vec__11494 = params__11369__auto__;
return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$todo);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/todo",action__11368__auto___11495);

luminus_demo.core.hook_browser_navigation_BANG_ = (function luminus_demo$core$hook_browser_navigation_BANG_(){
var G__11500 = (new goog.History());
var G__11501_11504 = G__11500;
var G__11502_11505 = goog.history.EventType.NAVIGATE;
var G__11503_11506 = ((function (G__11501_11504,G__11502_11505,G__11500){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__11501_11504,G__11502_11505,G__11500))
;
goog.events.listen(G__11501_11504,G__11502_11505,G__11503_11506);

G__11500.setEnabled(true);

return G__11500;
});
luminus_demo.core.fetch_docs_BANG_ = (function luminus_demo$core$fetch_docs_BANG_(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str(context),cljs.core.str("/todo")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$handler,(function (p1__11507_SHARP_){
return reagent.session.put_BANG_(cljs.core.cst$kw$docs,p1__11507_SHARP_);
})], null)], 0));
});
luminus_demo.core.mount_components = (function luminus_demo$core$mount_components(){
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return luminus_demo.navbar.navbar;},cljs.core.cst$sym$luminus_DASH_demo$core_SLASH_navbar,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$luminus_DASH_demo$core,cljs.core.cst$sym$navbar,"src-cljs/luminus_demo/navbar.cljs",13,1,12,12,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(luminus_demo.navbar.navbar)?luminus_demo.navbar.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return luminus_demo.core.page;},cljs.core.cst$sym$luminus_DASH_demo$core_SLASH_page,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$luminus_DASH_demo$core,cljs.core.cst$sym$page,"src-cljs/luminus_demo/core.cljs",11,1,19,19,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(luminus_demo.core.page)?luminus_demo.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
luminus_demo.core.init_BANG_ = (function luminus_demo$core$init_BANG_(){
luminus_demo.core.fetch_docs_BANG_();

luminus_demo.core.hook_browser_navigation_BANG_();

return luminus_demo.core.mount_components();
});
