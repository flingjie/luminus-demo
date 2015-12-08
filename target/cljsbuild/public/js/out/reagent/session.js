// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11294 = arguments.length;
var i__5190__auto___11295 = (0);
while(true){
if((i__5190__auto___11295 < len__5189__auto___11294)){
args__5196__auto__.push((arguments[i__5190__auto___11295]));

var G__11296 = (i__5190__auto___11295 + (1));
i__5190__auto___11295 = G__11296;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__11292){
var vec__11293 = p__11292;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11293,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq11290){
var G__11291 = cljs.core.first(seq11290);
var seq11290__$1 = cljs.core.next(seq11290);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__11291,seq11290__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11301 = arguments.length;
var i__5190__auto___11302 = (0);
while(true){
if((i__5190__auto___11302 < len__5189__auto___11301)){
args__5196__auto__.push((arguments[i__5190__auto___11302]));

var G__11303 = (i__5190__auto___11302 + (1));
i__5190__auto___11302 = G__11303;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__11299){
var vec__11300 = p__11299;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11300,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq11297){
var G__11298 = cljs.core.first(seq11297);
var seq11297__$1 = cljs.core.next(seq11297);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__11298,seq11297__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11306 = arguments.length;
var i__5190__auto___11307 = (0);
while(true){
if((i__5190__auto___11307 < len__5189__auto___11306)){
args__5196__auto__.push((arguments[i__5190__auto___11307]));

var G__11308 = (i__5190__auto___11307 + (1));
i__5190__auto___11307 = G__11308;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq11304){
var G__11305 = cljs.core.first(seq11304);
var seq11304__$1 = cljs.core.next(seq11304);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11305,seq11304__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
var G__11311 = reagent.session.state;
var G__11312 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11311,G__11312) : cljs.core.reset_BANG_.call(null,G__11311,G__11312));
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,m) : cljs.core.reset_BANG_.call(null,reagent.session.state,m));
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__11313_SHARP_){
return cljs.core.assoc_in(p1__11313_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11318 = arguments.length;
var i__5190__auto___11319 = (0);
while(true){
if((i__5190__auto___11319 < len__5189__auto___11318)){
args__5196__auto__.push((arguments[i__5190__auto___11319]));

var G__11320 = (i__5190__auto___11319 + (1));
i__5190__auto___11319 = G__11320;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__11316){
var vec__11317 = p__11316;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11317,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq11314){
var G__11315 = cljs.core.first(seq11314);
var seq11314__$1 = cljs.core.next(seq11314);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11315,seq11314__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11325 = arguments.length;
var i__5190__auto___11326 = (0);
while(true){
if((i__5190__auto___11326 < len__5189__auto___11325)){
args__5196__auto__.push((arguments[i__5190__auto___11326]));

var G__11327 = (i__5190__auto___11326 + (1));
i__5190__auto___11326 = G__11327;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__11323){
var vec__11324 = p__11323;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11324,(0),null);
var cur = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.session.state) : cljs.core.deref.call(null,reagent.session.state)),ks,default$);
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq11321){
var G__11322 = cljs.core.first(seq11321);
var seq11321__$1 = cljs.core.next(seq11321);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11322,seq11321__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11332 = arguments.length;
var i__5190__auto___11333 = (0);
while(true){
if((i__5190__auto___11333 < len__5189__auto___11332)){
args__5196__auto__.push((arguments[i__5190__auto___11333]));

var G__11334 = (i__5190__auto___11333 + (1));
i__5190__auto___11333 = G__11334;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((2) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5197__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__11328_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__11328_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq11329){
var G__11330 = cljs.core.first(seq11329);
var seq11329__$1 = cljs.core.next(seq11329);
var G__11331 = cljs.core.first(seq11329__$1);
var seq11329__$2 = cljs.core.next(seq11329__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11330,G__11331,seq11329__$2);
});
