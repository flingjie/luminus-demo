// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('markdown.transformers');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_;
markdown.transformers._STAR_next_line_STAR_;
markdown.transformers.heading_QMARK_ = (function markdown$transformers$heading_QMARK_(text,type){
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text))){
return null;
} else {
var trimmed = (cljs.core.truth_(text)?clojure.string.trim(text):null);
var and__4119__auto__ = cljs.core.not_empty(trimmed);
if(cljs.core.truth_(and__4119__auto__)){
return cljs.core.every_QMARK_(cljs.core.PersistentHashSet.fromArray([type], true),trimmed);
} else {
return and__4119__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function markdown$transformers$h1_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"=");
});
markdown.transformers.h2_QMARK_ = (function markdown$transformers$h2_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"-");
});
markdown.transformers.empty_line = (function markdown$transformers$empty_line(text,state){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4131__auto__ = markdown.transformers.h1_QMARK_(text);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return markdown.transformers.h2_QMARK_(text);
}
})())?"":text),((clojure.string.blank_QMARK_(text))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$hr,cljs.core.array_seq([cljs.core.cst$kw$heading], 0)):state)], null);
}
});
markdown.transformers.escape_code = (function markdown$transformers$escape_code(s){
return clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.transformers.escape_delimiter = [cljs.core.str(cljs.core.char$((254))),cljs.core.str(cljs.core.char$((491)))].join('');
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.transformers.freeze_string = (function markdown$transformers$freeze_string(var_args){
var args__5196__auto__ = [];
var len__5189__auto___10945 = arguments.length;
var i__5190__auto___10946 = (0);
while(true){
if((i__5190__auto___10946 < len__5189__auto___10945)){
args__5196__auto__.push((arguments[i__5190__auto___10946]));

var G__10947 = (i__5190__auto___10946 + (1));
i__5190__auto___10946 = G__10947;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((0) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((0)),(0))):null);
return markdown.transformers.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__5197__auto__);
});

markdown.transformers.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last(args);
var token = [cljs.core.str(markdown.transformers.escape_delimiter),cljs.core.str(cljs.core.count(cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state))),cljs.core.str(markdown.transformers.escape_delimiter)].join('');
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$frozen_DASH_strings,token], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(args))))], null);
});

markdown.transformers.freeze_string.cljs$lang$maxFixedArity = (0);

markdown.transformers.freeze_string.cljs$lang$applyTo = (function (seq10944){
return markdown.transformers.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10944));
});
/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.transformers.thaw_string = (function markdown$transformers$thaw_string(text,state){
while(true){
var unfrozen_text = clojure.string.replace(text,cljs.core.re_pattern([cljs.core.str(markdown.transformers.escape_delimiter),cljs.core.str("\\d+"),cljs.core.str(markdown.transformers.escape_delimiter)].join('')),((function (text,state){
return (function (p1__10948_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state),p1__10948_SHARP_,p1__10948_SHARP_);
});})(text,state))
);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,unfrozen_text)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [unfrozen_text,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$frozen_DASH_strings)], null);
} else {
var G__10949 = unfrozen_text;
var G__10950 = state;
text = G__10949;
state = G__10950;
continue;
}
break;
}
});
markdown.transformers.escaped_chars = (function markdown$transformers$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
markdown.transformers.separator = (function markdown$transformers$separator(escape_QMARK_,text,open,close,separator__$1,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.first(separator__$1)),cljs.core.seq(text));
var cur_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$found_DASH_token,false);
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$found_DASH_token.cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,separator__$1):out),buf)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cur_state,cljs.core.cst$kw$found_DASH_token)], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$found_DASH_token.cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)){
var G__10951 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.seq(open),cljs.core.array_seq([(cljs.core.truth_(escape_QMARK_)?cljs.core.seq(markdown.transformers.escape_code(clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf))):buf),cljs.core.seq(close)], 0)));
var G__10952 = cljs.core.PersistentVector.EMPTY;
var G__10953 = cljs.core.rest(tokens);
var G__10954 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,cljs.core.cst$kw$found_DASH_token,false);
out = G__10951;
buf = G__10952;
tokens = G__10953;
cur_state = G__10954;
continue;
} else {
var G__10955 = out;
var G__10956 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(tokens));
var G__10957 = cljs.core.rest(tokens);
var G__10958 = cur_state;
out = G__10955;
buf = G__10956;
tokens = G__10957;
cur_state = G__10958;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(tokens),separator__$1)){
var G__10959 = out;
var G__10960 = buf;
var G__10961 = cljs.core.rest(tokens);
var G__10962 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cur_state,cljs.core.cst$kw$found_DASH_token,true);
out = G__10959;
buf = G__10960;
tokens = G__10961;
cur_state = G__10962;
continue;
} else {
var G__10963 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(out,cljs.core.first(tokens));
var G__10964 = buf;
var G__10965 = cljs.core.rest(tokens);
var G__10966 = cur_state;
out = G__10963;
buf = G__10964;
tokens = G__10965;
cur_state = G__10966;
continue;

}
}
}
break;
}
}
});
markdown.transformers.strong = (function markdown$transformers$strong(text,state){
return markdown.transformers.separator(false,text,"<strong>","</strong>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","*"], null),state);
});
markdown.transformers.bold = (function markdown$transformers$bold(text,state){
return markdown.transformers.separator(false,text,"<b>","</b>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_"], null),state);
});
markdown.transformers.em = (function markdown$transformers$em(text,state){
return markdown.transformers.separator(false,text,"<em>","</em>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null),state);
});
markdown.transformers.italics = (function markdown$transformers$italics(text,state){
return markdown.transformers.separator(false,text,"<i>","</i>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_"], null),state);
});
markdown.transformers.inline_code = (function markdown$transformers$inline_code(text,state){
return markdown.transformers.separator(true,text,"<code>","</code>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null),state);
});
markdown.transformers.strikethrough = (function markdown$transformers$strikethrough(text,state){
return markdown.transformers.separator(false,text,"<del>","</del>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","~"], null),state);
});
markdown.transformers.superscript = (function markdown$transformers$superscript(text,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);
var buf = cljs.core.PersistentVector.EMPTY;
var remaining = tokens;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf),state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null))){
var G__10967 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq("<sup>"),cljs.core.second(remaining),cljs.core.array_seq([cljs.core.seq("</sup>")], 0)));
var G__10968 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),remaining);
buf = G__10967;
remaining = G__10968;
continue;
} else {
var G__10969 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(remaining));
var G__10970 = cljs.core.rest(remaining);
buf = G__10969;
remaining = G__10970;
continue;

}
}
break;
}
}
});
markdown.transformers.heading_text = (function markdown$transformers$heading_text(text){
return clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__10972_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__10972_SHARP_);
}),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__10971_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__10971_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__10971_SHARP_));
}),text))));
});
markdown.transformers.heading_level = (function markdown$transformers$heading_level(text){
var num_hashes = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10973_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__10973_SHARP_);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__10974_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",p1__10974_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(" ",p1__10974_SHARP_));
}),cljs.core.seq(text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.transformers.make_heading = (function markdown$transformers$make_heading(text,heading_anchors){
var temp__4423__auto__ = markdown.transformers.heading_level(text);
if(cljs.core.truth_(temp__4423__auto__)){
var heading = temp__4423__auto__;
var text__$1 = markdown.transformers.heading_text(text);
return [cljs.core.str("<h"),cljs.core.str(heading),cljs.core.str(">"),cljs.core.str((cljs.core.truth_(heading_anchors)?[cljs.core.str("<a name=\""),cljs.core.str(clojure.string.replace(clojure.string.lower_case(text__$1)," ","&#95;")),cljs.core.str("\"></a>")].join(''):null)),cljs.core.str(text__$1),cljs.core.str("</h"),cljs.core.str(heading),cljs.core.str(">")].join('');
} else {
return null;
}
});
markdown.transformers.heading = (function markdown$transformers$heading(text,state){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.h1_QMARK_(markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h1>"),cljs.core.str(text),cljs.core.str("</h1>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$heading,true)], null);
} else {
if(cljs.core.truth_(markdown.transformers.h2_QMARK_(markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h2>"),cljs.core.str(text),cljs.core.str("</h2>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$heading,true)], null);
} else {
var temp__4423__auto__ = markdown.transformers.make_heading(text,cljs.core.cst$kw$heading_DASH_anchors.cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__4423__auto__)){
var heading__$1 = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$heading,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.br = (function markdown$transformers$br(text,p__10975){
var map__10978 = p__10975;
var map__10978__$1 = ((((!((map__10978 == null)))?((((map__10978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10978):map__10978);
var state = map__10978__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10978__$1,cljs.core.cst$kw$code);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10978__$1,cljs.core.cst$kw$lists);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),text))) && (cljs.core.not((function (){var or__4131__auto__ = code;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lists;
}
})())))?[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),text))),cljs.core.str("<br />")].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function markdown$transformers$autourl_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))?text:clojure.string.replace(text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,(function (p1__10980_SHARP_){
var url = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__10980_SHARP_,(1),(cljs.core.count(p1__10980_SHARP_) - (1)));
return [cljs.core.str("<a href=\""),cljs.core.str(url),cljs.core.str("\">"),cljs.core.str(url),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.autoemail_transformer = (function markdown$transformers$autoemail_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__10981_SHARP_){
var encoded = (cljs.core.truth_(cljs.core.cst$kw$clojurescript.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__10981_SHARP_,(1),(cljs.core.count(p1__10981_SHARP_) - (1))):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5)){
var G__10984 = "&#x%02x;";
var G__10985 = (c | (0));
return (markdown.transformers.formatter.cljs$core$IFn$_invoke$arity$2 ? markdown.transformers.formatter.cljs$core$IFn$_invoke$arity$2(G__10984,G__10985) : markdown.transformers.formatter.call(null,G__10984,G__10985));
} else {
return c;
}
}),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__10981_SHARP_,(1),(cljs.core.count(p1__10981_SHARP_) - (1))))));
return [cljs.core.str("<a href=\"mailto:"),cljs.core.str(encoded),cljs.core.str("\">"),cljs.core.str(encoded),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.paragraph_text = (function markdown$transformers$paragraph_text(last_line_empty_QMARK_,text){
if(cljs.core.truth_((function (){var and__4119__auto__ = cljs.core.not(last_line_empty_QMARK_);
if(and__4119__auto__){
return cljs.core.not_empty(text);
} else {
return and__4119__auto__;
}
})())){
return [cljs.core.str(" "),cljs.core.str(text)].join('');
} else {
return text;
}
});
markdown.transformers.paragraph = (function markdown$transformers$paragraph(text,p__10986){
var map__10989 = p__10986;
var map__10989__$1 = ((((!((map__10989 == null)))?((((map__10989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10989):map__10989);
var state = map__10989__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10989__$1,cljs.core.cst$kw$eof);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10989__$1,cljs.core.cst$kw$heading);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10989__$1,cljs.core.cst$kw$hr);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10989__$1,cljs.core.cst$kw$code);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10989__$1,cljs.core.cst$kw$lists);
var blockquote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10989__$1,cljs.core.cst$kw$blockquote);
var paragraph__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10989__$1,cljs.core.cst$kw$paragraph);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10989__$1,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_);
if(cljs.core.truth_((function (){var and__4119__auto__ = paragraph__$1;
if(cljs.core.truth_(and__4119__auto__)){
return lists;
} else {
return and__4119__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</p>"),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$paragraph,false)], null);
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = heading;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = hr;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = code;
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var or__4131__auto____$3 = lists;
if(cljs.core.truth_(or__4131__auto____$3)){
return or__4131__auto____$3;
} else {
return blockquote;
}
}
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(paragraph__$1)){
if(cljs.core.truth_((function (){var or__4131__auto__ = eof;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.empty_QMARK_(clojure.string.trim(text));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.paragraph_text(last_line_empty_QMARK_,text)),cljs.core.str("</p>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$paragraph,false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text(last_line_empty_QMARK_,text),state], null);
}
} else {
if(cljs.core.truth_((function (){var and__4119__auto__ = cljs.core.not(eof);
if(and__4119__auto__){
return last_line_empty_QMARK_;
} else {
return and__4119__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<p>"),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$paragraph,true,cljs.core.array_seq([cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.code = (function markdown$transformers$code(text,p__10991){
var map__10994 = p__10991;
var map__10994__$1 = ((((!((map__10994 == null)))?((((map__10994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10994):map__10994);
var state = map__10994__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10994__$1,cljs.core.cst$kw$eof);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10994__$1,cljs.core.cst$kw$lists);
var code__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10994__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10994__$1,cljs.core.cst$kw$codeblock);
if(cljs.core.truth_((function (){var or__4131__auto__ = lists;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(code__$1)){
if(cljs.core.truth_((function (){var or__4131__auto__ = eof;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("    ",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text)));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n</code></pre>"),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,false,cljs.core.array_seq([cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n"),cljs.core.str(markdown.transformers.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),state], null);
}
} else {
if(cljs.core.empty_QMARK_(clojure.string.trim(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var num_spaces = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
if((num_spaces > (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code>"),cljs.core.str(markdown.transformers.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$code,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.codeblock = (function markdown$transformers$codeblock(text,state){
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var and__4119__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),trimmed));
if(and__4119__auto__){
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__4119__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed)))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,false,cljs.core.array_seq([cljs.core.cst$kw$codeblock,false,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
if(cljs.core.truth_((function (){var and__4119__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last((3),trimmed));
if(and__4119__auto__){
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__4119__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),trimmed)))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,false,cljs.core.array_seq([cljs.core.cst$kw$codeblock,false,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),trimmed))){
var vec__10998 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed));
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10998,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10998,(1),null);
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(code));
var formatter = cljs.core.cst$kw$code_DASH_style.cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code"),cljs.core.str((cljs.core.truth_(cljs.core.not_empty(lang))?[cljs.core.str(" "),cljs.core.str((cljs.core.truth_(formatter)?(function (){var G__10999 = clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang);
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(G__10999) : formatter.call(null,G__10999));
})():[cljs.core.str("class=\""),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang)),cljs.core.str("\"")].join('')))].join(''):null)),cljs.core.str(">"),cljs.core.str(markdown.transformers.escape_code(((cljs.core.empty_QMARK_(s))?s:[cljs.core.str(s),cljs.core.str("\n")].join(''))))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,true,cljs.core.array_seq([cljs.core.cst$kw$codeblock,true], 0))], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.escape_code(text)),cljs.core.str("\n")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.hr = (function markdown$transformers$hr(text,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(((cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text)))) && ((cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<hr/>")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$hr,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
markdown.transformers.blockquote = (function markdown$transformers$blockquote(text,p__11000){
var map__11003 = p__11000;
var map__11003__$1 = ((((!((map__11003 == null)))?((((map__11003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11003):map__11003);
var state = map__11003__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11003__$1,cljs.core.cst$kw$eof);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11003__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11003__$1,cljs.core.cst$kw$codeblock);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11003__$1,cljs.core.cst$kw$lists);
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var or__4131__auto__ = code;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = codeblock;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return lists;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$blockquote.cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_((function (){var or__4131__auto__ = eof;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.empty_QMARK_(trimmed);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p></blockquote>",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote,false)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",trimmed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p><p>",state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</p><footer>"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(2))),cljs.core.str("</footer><p>")].join(''),state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1))),cljs.core.str(" ")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(text),cljs.core.str(" ")].join(''),state], null);

}
}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.first(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<blockquote><p>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(text))),cljs.core.str(" ")].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
});
markdown.transformers.href = (function markdown$transformers$href(title,link,state){
return markdown.transformers.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.seq("<a href='"),link,cljs.core.seq("'>"),title,cljs.core.seq("</a>"),state], 0));
});
markdown.transformers.img = (function markdown$transformers$img(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11011 = arguments.length;
var i__5190__auto___11012 = (0);
while(true){
if((i__5190__auto___11012 < len__5189__auto___11011)){
args__5196__auto__.push((arguments[i__5190__auto___11012]));

var G__11013 = (i__5190__auto___11012 + (1));
i__5190__auto___11012 = G__11013;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((3) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((3)),(0))):null);
return markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5197__auto__);
});

markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__11009){
var vec__11010 = p__11009;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11010,(0),null);
return markdown.transformers.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.seq("<img src=\""),url,cljs.core.seq("\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"\" title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)," />")):cljs.core.seq("\" />")),state], 0));
});

markdown.transformers.img.cljs$lang$maxFixedArity = (3);

markdown.transformers.img.cljs$lang$applyTo = (function (seq11005){
var G__11006 = cljs.core.first(seq11005);
var seq11005__$1 = cljs.core.next(seq11005);
var G__11007 = cljs.core.first(seq11005__$1);
var seq11005__$2 = cljs.core.next(seq11005__$1);
var G__11008 = cljs.core.first(seq11005__$2);
var seq11005__$3 = cljs.core.next(seq11005__$2);
return markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic(G__11006,G__11007,G__11008,seq11005__$3);
});
markdown.transformers.handle_img_link = (function markdown$transformers$handle_img_link(xs,state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),xs))){
var xs__$1 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),xs);
var vec__11018 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11018,(0),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11018,(1),null);
var vec__11019 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),xy));
var url_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11019,(0),null);
var zy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11019,(1),null);
var vec__11020 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11020,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11020,(1),null);
var vec__11021 = markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,state,cljs.core.array_seq([cljs.core.not_empty(title)], 0));
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11021,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11021,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("[",new_text,cljs.core.array_seq([cljs.core.rest(zy)], 0)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.transformers.process_link_title = (function markdown$transformers$process_link_title(title,state){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__11023_SHARP_,p2__11022_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p2__11022_SHARP_,p1__11023_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough], null)));
});
markdown.transformers.link = (function markdown$transformers$link(text,p__11024){
var map__11035 = p__11024;
var map__11035__$1 = ((((!((map__11035 == null)))?((((map__11035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11035):map__11035);
var state = map__11035__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11035__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11035__$1,cljs.core.cst$kw$codeblock);
if(cljs.core.truth_((function (){var or__4131__auto__ = code;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq(text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(out),loop_state], null);
} else {
var vec__11037 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11037,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11037,(1),null);
var vec__11038 = markdown.transformers.handle_img_link(xs,loop_state);
var xs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11038,(0),null);
var loop_state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11038,(1),null);
var vec__11039 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11039,(0),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11039,(1),null);
var vec__11040 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11040,(0),null);
var zs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11040,(1),null);
var vec__11041 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11041,(0),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11041,(1),null);
if(((cljs.core.count(link__$1) < (2))) || ((cljs.core.count(tail) < (1))) || ((cljs.core.count(dud) > (1)))){
var G__11045 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.array_seq([markdown.transformers.process_link_title(title,state),dud,link__$1], 0));
var G__11046 = tail;
var G__11047 = loop_state__$1;
out = G__11045;
tokens = G__11046;
loop_state = G__11047;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!")){
var alt = cljs.core.rest(title);
var vec__11042 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.rest(link__$1));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11042,(0),null);
var title__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11042,(1),null);
var title__$2 = markdown.transformers.process_link_title(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title__$1)),loop_state__$1);
var vec__11043 = markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,loop_state__$1,cljs.core.array_seq([title__$2], 0));
var img_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11043,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11043,(1),null);
var G__11048 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(head),img_text);
var G__11049 = cljs.core.rest(tail);
var G__11050 = new_loop_state;
out = G__11048;
tokens = G__11049;
loop_state = G__11050;
continue;
} else {
var vec__11044 = markdown.transformers.href(cljs.core.rest(markdown.transformers.process_link_title(title,state)),cljs.core.rest(link__$1),loop_state__$1);
var link_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11044,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11044,(1),null);
var G__11051 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.array_seq([link_text], 0));
var G__11052 = cljs.core.rest(tail);
var G__11053 = new_loop_state;
out = G__11051;
tokens = G__11052;
loop_state = G__11053;
continue;
}
}
}
break;
}
}
});
markdown.transformers.reference = (function markdown$transformers$reference(text){
return cljs.core.re_find(/^\[[a-zA-Z0-9 ]+\]:/,text);
});
markdown.transformers.parse_reference = (function markdown$transformers$parse_reference(reference,start){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(reference,start)),/\s+/,(2));
});
markdown.transformers.parse_reference_link = (function markdown$transformers$parse_reference_link(line,references){
var trimmed = clojure.string.trim(line);
var temp__4425__auto__ = markdown.transformers.reference(trimmed);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(references,cljs.core.assoc,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1))),markdown.transformers.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.transformers.replace_reference_link = (function markdown$transformers$replace_reference_link(references,reference){
var vec__11056 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(reference,/\]\s*/,(2));
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11056,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11056,(1),null);
var vec__11057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,id);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11057,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11057,(1),null);
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(alt)?[cljs.core.str(" title='"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(alt,(1),(cljs.core.count(alt) - (1)))),cljs.core.str("'")].join(''):null)),cljs.core.str(">"),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(title,(1))),cljs.core.str("</a>")].join('');
});
markdown.transformers.reference_link = (function markdown$transformers$reference_link(text,p__11058){
var map__11061 = p__11058;
var map__11061__$1 = ((((!((map__11061 == null)))?((((map__11061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11061):map__11061);
var state = map__11061__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$codeblock);
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$references);
if(cljs.core.truth_((function (){var or__4131__auto__ = (references == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = code;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.reference(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var replaced = clojure.string.replace(text,/\[[^\]]+\]\s*\[[a-zA-Z0-9 ]+\]/,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(markdown.transformers.replace_reference_link,references));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(replaced,text)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return markdown.transformers.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([replaced,state], 0));
}

}
}
});
markdown.transformers.footnote = (function markdown$transformers$footnote(text){
return cljs.core.re_find(/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.transformers.parse_footnote_link = (function markdown$transformers$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim(line);
var temp__4425__auto__ = markdown.transformers.footnote(trimmed);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unprocessed,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1)))], null),markdown.transformers.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.transformers.replace_footnote_link = (function markdown$transformers$replace_footnote_link(footnotes,footnote){
var next_fn_id = cljs.core.cst$kw$next_DASH_fn_DASH_id.cljs$core$IFn$_invoke$arity$1(footnotes);
var link = [cljs.core.str("#fn-"),cljs.core.str(next_fn_id)].join('');
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("' id='fnref"),cljs.core.str(next_fn_id),cljs.core.str("'><sup>"),cljs.core.str(next_fn_id),cljs.core.str("</sup></a>")].join('');
});
markdown.transformers.replace_all_footnote_links = (function markdown$transformers$replace_all_footnote_links(text,p__11063){
while(true){
var map__11066 = p__11063;
var map__11066__$1 = ((((!((map__11066 == null)))?((((map__11066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11066):map__11066);
var state = map__11066__$1;
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11066__$1,cljs.core.cst$kw$footnotes);
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find(matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first(text,matcher,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(markdown.transformers.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$next_DASH_fn_DASH_id], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$processed,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$next_DASH_fn_DASH_id], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$unprocessed,match], null)));
var G__11068 = next_text;
var G__11069 = next_state;
text = G__11068;
p__11063 = G__11069;
continue;
}
break;
}
});
markdown.transformers.footnote_link = (function markdown$transformers$footnote_link(text,p__11070){
var map__11074 = p__11070;
var map__11074__$1 = ((((!((map__11074 == null)))?((((map__11074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11074):map__11074);
var state = map__11074__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11074__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11074__$1,cljs.core.cst$kw$codeblock);
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11074__$1,cljs.core.cst$kw$footnotes);
if(cljs.core.truth_((function (){var or__4131__auto__ = (cljs.core.cst$kw$unprocessed.cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = code;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.footnote(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__11076 = markdown.transformers.replace_all_footnote_links(text,state);
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11076,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11076,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.transformers.footer = (function markdown$transformers$footer(footnotes){
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$processed.cljs$core$IFn$_invoke$arity$1(footnotes))){
return "";
} else {
return (function (p1__11077_SHARP_){
return [cljs.core.str("<ol>"),cljs.core.str(p1__11077_SHARP_),cljs.core.str("</ol>")].join('');
}).call(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (footnotes__$1,p__11080){
var vec__11081 = p__11080;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11081,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11081,(1),null);
return [cljs.core.str(footnotes__$1),cljs.core.str("<li id='fn-"),cljs.core.str(id),cljs.core.str("'>"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",label))),cljs.core.str("<a href='#fnref"),cljs.core.str(id),cljs.core.str("'>&#8617;</a></li>")].join('');
}),"",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.cst$kw$processed.cljs$core$IFn$_invoke$arity$1(footnotes))));
}
});
markdown.transformers.close_lists = (function markdown$transformers$close_lists(lists){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__4903__auto__ = (function markdown$transformers$close_lists_$_iter__11092(s__11093){
return (new cljs.core.LazySeq(null,(function (){
var s__11093__$1 = s__11093;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11093__$1);
if(temp__4425__auto__){
var s__11093__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11093__$2)){
var c__4901__auto__ = cljs.core.chunk_first(s__11093__$2);
var size__4902__auto__ = cljs.core.count(c__4901__auto__);
var b__11095 = cljs.core.chunk_buffer(size__4902__auto__);
if((function (){var i__11094 = (0);
while(true){
if((i__11094 < size__4902__auto__)){
var vec__11100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4901__auto__,i__11094);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11100,(0),null);
cljs.core.chunk_append(b__11095,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name(list_type)),cljs.core.str(">")].join(''));

var G__11102 = (i__11094 + (1));
i__11094 = G__11102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11095),markdown$transformers$close_lists_$_iter__11092(cljs.core.chunk_rest(s__11093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11095),null);
}
} else {
var vec__11101 = cljs.core.first(s__11093__$2);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11101,(0),null);
return cljs.core.cons([cljs.core.str("</li></"),cljs.core.str(cljs.core.name(list_type)),cljs.core.str(">")].join(''),markdown$transformers$close_lists_$_iter__11092(cljs.core.rest(s__11093__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4903__auto__(lists);
})());
});
markdown.transformers.add_row = (function markdown$transformers$add_row(row_type,list_type,num_indents,indents,content,state){
if(cljs.core.truth_(list_type)){
if((num_indents < indents)){
var lists_to_close = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11103_SHARP_){
return (cljs.core.second(p1__11103_SHARP_) > num_indents);
}),cljs.core.reverse(cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state)));
var remaining_lists = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lists_to_close),cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,markdown.transformers.close_lists(lists_to_close),"</li><li>",content),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$lists,(((num_indents > cljs.core.second(cljs.core.last(remaining_lists))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(remaining_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)):remaining_lists))], null);
} else {
if((num_indents > indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name(row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lists], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_indents,indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</li><li>"),cljs.core.str(content)].join(''),state], null);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name(row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$lists,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)], null))], null);
}
});
markdown.transformers.ul = (function markdown$transformers$ul(text,state){
var vec__11107 = cljs.core.last(cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11107,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11107,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim((function (){var G__11108 = text;
var G__11109 = (num_indents + (1));
return (markdown.transformers._STAR_substring_STAR_.cljs$core$IFn$_invoke$arity$2 ? markdown.transformers._STAR_substring_STAR_.cljs$core$IFn$_invoke$arity$2(G__11108,G__11109) : markdown.transformers._STAR_substring_STAR_.call(null,G__11108,G__11109));
})());
return markdown.transformers.add_row(cljs.core.cst$kw$ul,list_type,num_indents,indents,(function (){var or__4131__auto__ = markdown.transformers.make_heading(content,false);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return content;
}
})(),state);
});
markdown.transformers.ol = (function markdown$transformers$ol(text,state){
var vec__11111 = cljs.core.last(cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11111,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11111,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),clojure.string.trim(text))));
return markdown.transformers.add_row(cljs.core.cst$kw$ol,list_type,num_indents,indents,(function (){var or__4131__auto__ = markdown.transformers.make_heading(content,false);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return content;
}
})(),state);
});
markdown.transformers.li = (function markdown$transformers$li(text,p__11112){
var map__11115 = p__11112;
var map__11115__$1 = ((((!((map__11115 == null)))?((((map__11115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11115):map__11115);
var state = map__11115__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11115__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11115__$1,cljs.core.cst$kw$codeblock);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11115__$1,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11115__$1,cljs.core.cst$kw$eof);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11115__$1,cljs.core.cst$kw$lists);
if(cljs.core.truth_((function (){var and__4119__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(and__4119__auto__)){
return clojure.string.blank_QMARK_(text);
} else {
return and__4119__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists(cljs.core.reverse(lists))),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$lists),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false)], null);
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = code;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return codeblock;
}
})())){
if(cljs.core.truth_((function (){var and__4119__auto__ = lists;
if(cljs.core.truth_(and__4119__auto__)){
var or__4131__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return eof;
}
} else {
return and__4119__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists(cljs.core.reverse(lists))),cljs.core.str(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$lists),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else {
if(cljs.core.truth_((function (){var and__4119__auto__ = cljs.core.not(eof);
if(and__4119__auto__){
var and__4119__auto____$1 = lists;
if(cljs.core.truth_(and__4119__auto____$1)){
return clojure.string.blank_QMARK_(text);
} else {
return and__4119__auto____$1;
}
} else {
return and__4119__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true)], null);
} else {
var indents = (cljs.core.truth_(last_line_empty_QMARK_)?(0):cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text)));
var trimmed = clojure.string.trim(text);
var in_list_QMARK_ = cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.re_find(/^[\*\+-] /,trimmed))){
return markdown.transformers.ul((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if(cljs.core.truth_(cljs.core.re_find(/^[0-9]+\. /,trimmed))){
return markdown.transformers.ol((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if((indents > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__4119__auto__ = (function (){var or__4131__auto__ = eof;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return last_line_empty_QMARK_;
}
})();
if(cljs.core.truth_(and__4119__auto__)){
return cljs.core.not_empty(lists);
} else {
return and__4119__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.close_lists(cljs.core.reverse(lists)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$lists,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.cst$kw$buf,text], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}

}
}
}
});
markdown.transformers.parse_table_row = (function markdown$transformers$parse_table_row(text){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11119_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,p1__11119_SHARP_], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,(function (p1__11118_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__11118_SHARP_,/\|/);
}).call(null,clojure.string.trim((function (p1__11117_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__11117_SHARP_),"|")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(p1__11117_SHARP_));
} else {
return p1__11117_SHARP_;
}
}).call(null,text)))));
});
markdown.transformers.table_row__GT_str = (function markdown$transformers$table_row__GT_str(row_data,is_header_QMARK_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (row,col){
var alignment_str = (cljs.core.truth_(cljs.core.cst$kw$alignment.cljs$core$IFn$_invoke$arity$1(col))?[cljs.core.str(" align='"),cljs.core.str(cljs.core.name(cljs.core.cst$kw$alignment.cljs$core$IFn$_invoke$arity$1(col))),cljs.core.str("'")].join(''):null);
if(cljs.core.truth_(is_header_QMARK_)){
return [cljs.core.str(row),cljs.core.str("<th"),cljs.core.str(alignment_str),cljs.core.str(">"),cljs.core.str(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(col)),cljs.core.str("</th>")].join('');
} else {
return [cljs.core.str(row),cljs.core.str("<td"),cljs.core.str(alignment_str),cljs.core.str(">"),cljs.core.str(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(col)),cljs.core.str("</td>")].join('');
}
}),"",row_data);
});
markdown.transformers.table__GT_str = (function markdown$transformers$table__GT_str(table){
var table_data = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(table));
var alignment_seq = cljs.core.cst$kw$alignment_DASH_seq.cljs$core$IFn$_invoke$arity$1(table);
return [cljs.core.str("<table>"),cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (table_data,alignment_seq){
return (function (table_acc,row){
var row_idx = cljs.core.first(row);
var row_data = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.second(row),alignment_seq);
var is_header_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_idx,(0));
var is_first_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_idx,(1));
var is_last_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_idx,(cljs.core.count(table_data) - (1)));
return [cljs.core.str(table_acc),cljs.core.str(((is_header_QMARK_)?"<thead>":((is_first_row_QMARK_)?"<tbody>":null))),cljs.core.str("<tr>"),cljs.core.str(markdown.transformers.table_row__GT_str(row_data,is_header_QMARK_)),cljs.core.str("</tr>"),cljs.core.str(((is_header_QMARK_)?"</thead>":((is_last_row_QMARK_)?"</tbody>":null)))].join('');
});})(table_data,alignment_seq))
,"",table_data)),cljs.core.str("</table>")].join('');
});
markdown.transformers.divider_seq__GT_alignment = (function markdown$transformers$divider_seq__GT_alignment(divider_seq){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (divider){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/^:-+/,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider)),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alignment,cljs.core.cst$kw$left], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/^-+:/,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider)),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alignment,cljs.core.cst$kw$right], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.re_find(/^:-+:/,cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider)),cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(divider))){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alignment,cljs.core.cst$kw$center], null));
} else {
return null;

}
}
}
}),divider_seq);
});
markdown.transformers.table = (function markdown$transformers$table(text,state){
var table_row_re = cljs.core.re_find(/\|(?: [\S ]+ \|)+/,text);
var table_divider_re = cljs.core.re_find(/\|(?: :?-+:? \|)+/,text);
var is_table_row_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table_row_re,text);
var is_table_header_QMARK_ = (is_table_row_QMARK_) && (cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$in_DASH_table_DASH_body_QMARK_], null))));
var is_table_divider_QMARK_ = (function (){var and__4119__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(table_divider_re,text);
if(and__4119__auto__){
var and__4119__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$in_DASH_table_DASH_body_QMARK_], null));
if(cljs.core.truth_(and__4119__auto____$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$is_DASH_prev_DASH_header_QMARK_], null));
} else {
return and__4119__auto____$1;
}
} else {
return and__4119__auto__;
}
})();
if(is_table_header_QMARK_){
var header_seq = markdown.transformers.parse_table_row(text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$is_DASH_prev_DASH_header_QMARK_], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$in_DASH_table_DASH_body_QMARK_], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$data], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec(header_seq))], null);
} else {
if(cljs.core.truth_(is_table_divider_QMARK_)){
var divider_seq = markdown.transformers.parse_table_row(text);
var table_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$data], null));
var last_idx = (cljs.core.count(table_data) - (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$is_DASH_prev_DASH_header_QMARK_], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$alignment_DASH_seq], null),markdown.transformers.divider_seq__GT_alignment(divider_seq))], null);
} else {
if(is_table_row_QMARK_){
var row_seq = markdown.transformers.parse_table_row(text);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$is_DASH_prev_DASH_header_QMARK_], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$data], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.vec(row_seq))], null);
} else {
var out = ((cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,cljs.core.cst$kw$data], null))))?text:[cljs.core.str(markdown.transformers.table__GT_str(cljs.core.cst$kw$table.cljs$core$IFn$_invoke$arity$1(state))),cljs.core.str(text)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$table)], null);

}
}
}
});
/**
 * Terminally encoded strings are ones that we've determined should no longer be processed or evaluated
 */
markdown.transformers.thaw_strings = (function markdown$transformers$thaw_strings(text,state){
if(cljs.core.truth_(cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state))){
return markdown.transformers.thaw_string(text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
/**
 * Given a line of metadata header text return either a list containing a parsed
 *   and normalizd key and the original text of the value, or if no header is found
 *   (this is a continuation or new value from a pervious header key) simply
 *   return the text. If a blank or invalid line is found return nil.
 */
markdown.transformers.parse_metadata_line = (function markdown$transformers$parse_metadata_line(line){
if(cljs.core.truth_(line)){
var vec__11122 = cljs.core.re_matches(/^([0-9A-Za-z_-]*):(.*)$/,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11122,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11122,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11122,(2),null);
var vec__11123 = cljs.core.re_matches(/^    (.*)$/,line);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11123,(0),null);
var next_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11123,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),"")){
if(cljs.core.truth_(key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(key)),val], null);
} else {
if(cljs.core.truth_(next_val)){
return line;
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given a list of maps which contain a single key/value, flatten them all into
 *   a single map with all the leading spaces removed. If an empty list is provided
 *   then return nil.
 */
markdown.transformers.flatten_metadata = (function markdown$transformers$flatten_metadata(metadata){
if((cljs.core.count(metadata) > (0))){
var acc = cljs.core.PersistentArrayMap.EMPTY;
var remain = metadata;
var prev_key = null;
while(true){
if(!(cljs.core.empty_QMARK_(remain))){
var data = cljs.core.first(remain);
var vec__11125 = ((cljs.core.sequential_QMARK_(data))?data:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_key,data], null));
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11125,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11125,(1),null);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,key,cljs.core.PersistentVector.EMPTY);
var postfix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),val)))?"\n":"");
var norm_val = [cljs.core.str(clojure.string.trim(val)),cljs.core.str(postfix)].join('');
var new_val = ((!(cljs.core.empty_QMARK_(norm_val)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_val,norm_val):prev_val);
var G__11126 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([acc,cljs.core.PersistentArrayMap.fromArray([key,new_val], true, false)], 0));
var G__11127 = cljs.core.rest(remain);
var G__11128 = key;
acc = G__11126;
remain = G__11127;
prev_key = G__11128;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
});
/**
 * Given a sequence of lines from a markdown document, attempt to parse a
 *   metadata header if it exists.
 */
markdown.transformers.parse_metadata_headers = (function markdown$transformers$parse_metadata_headers(lines_seq){
if(cljs.core.sequential_QMARK_(lines_seq)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$sequential_QMARK_,cljs.core.cst$sym$lines_DASH_seq)], 0)))].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,lines_seq)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$every_QMARK_,cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$lines_DASH_seq)], 0)))].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,line){
var temp__4423__auto__ = markdown.transformers.parse_metadata_line(line);
if(cljs.core.truth_(temp__4423__auto__)){
var parsed = temp__4423__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,parsed);
} else {
return cljs.core.reduced(markdown.transformers.flatten_metadata(acc));
}
}),cljs.core.PersistentVector.EMPTY,lines_seq);
});
markdown.transformers.transformer_vector = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.empty_line,markdown.transformers.codeblock,markdown.transformers.code,markdown.transformers.escaped_chars,markdown.transformers.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.transformers.link,markdown.transformers.reference_link,markdown.transformers.footnote_link,markdown.transformers.hr,markdown.transformers.li,markdown.transformers.heading,markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough,markdown.transformers.superscript,markdown.transformers.blockquote,markdown.transformers.table,markdown.transformers.paragraph,markdown.transformers.br,markdown.transformers.thaw_strings], null);
