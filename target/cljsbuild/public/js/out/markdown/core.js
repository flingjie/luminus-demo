// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__11131){
var map__11138 = p__11131;
var map__11138__$1 = ((((!((map__11138 == null)))?((((map__11138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11138):map__11138);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11138__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11138__$1,cljs.core.cst$kw$custom_DASH_transformers);
return ((function (map__11138,map__11138__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_11140 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__11141 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_next_line_STAR_11140,map__11138,map__11138__$1,replacement_transformers,custom_transformers){
return (function (p__11142,transformer){
var vec__11143 = p__11142;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11143,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11143,(1),null);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(text,state__$1) : transformer.call(null,text,state__$1));
});})(_STAR_next_line_STAR_11140,map__11138,map__11138__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4131__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11141,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11141,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_11140;
}});
;})(map__11138,map__11138__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11146 = arguments.length;
var i__5190__auto___11147 = (0);
while(true){
if((i__5190__auto___11147 < len__5189__auto___11146)){
args__5196__auto__.push((arguments[i__5190__auto___11147]));

var G__11148 = (i__5190__auto___11147 + (1));
i__5190__auto___11147 = G__11148;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq11144){
var G__11145 = cljs.core.first(seq11144);
var seq11144__$1 = cljs.core.next(seq11144);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__11145,seq11144__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = (function (){var G__11154 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11154) : cljs.core.atom.call(null,G__11154));
})();
var seq__11155_11159 = cljs.core.seq(lines);
var chunk__11156_11160 = null;
var count__11157_11161 = (0);
var i__11158_11162 = (0);
while(true){
if((i__11158_11162 < count__11157_11161)){
var line_11163 = chunk__11156_11160.cljs$core$IIndexed$_nth$arity$2(null,i__11158_11162);
markdown.transformers.parse_reference_link(line_11163,references);

var G__11164 = seq__11155_11159;
var G__11165 = chunk__11156_11160;
var G__11166 = count__11157_11161;
var G__11167 = (i__11158_11162 + (1));
seq__11155_11159 = G__11164;
chunk__11156_11160 = G__11165;
count__11157_11161 = G__11166;
i__11158_11162 = G__11167;
continue;
} else {
var temp__4425__auto___11168 = cljs.core.seq(seq__11155_11159);
if(temp__4425__auto___11168){
var seq__11155_11169__$1 = temp__4425__auto___11168;
if(cljs.core.chunked_seq_QMARK_(seq__11155_11169__$1)){
var c__4934__auto___11170 = cljs.core.chunk_first(seq__11155_11169__$1);
var G__11171 = cljs.core.chunk_rest(seq__11155_11169__$1);
var G__11172 = c__4934__auto___11170;
var G__11173 = cljs.core.count(c__4934__auto___11170);
var G__11174 = (0);
seq__11155_11159 = G__11171;
chunk__11156_11160 = G__11172;
count__11157_11161 = G__11173;
i__11158_11162 = G__11174;
continue;
} else {
var line_11175 = cljs.core.first(seq__11155_11169__$1);
markdown.transformers.parse_reference_link(line_11175,references);

var G__11176 = cljs.core.next(seq__11155_11169__$1);
var G__11177 = null;
var G__11178 = (0);
var G__11179 = (0);
seq__11155_11159 = G__11176;
chunk__11156_11160 = G__11177;
count__11157_11161 = G__11178;
i__11158_11162 = G__11179;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(references) : cljs.core.deref.call(null,references));
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = (function (){var G__11185 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$next_DASH_fn_DASH_id,(1),cljs.core.cst$kw$processed,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$unprocessed,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11185) : cljs.core.atom.call(null,G__11185));
})();
var seq__11186_11190 = cljs.core.seq(lines);
var chunk__11187_11191 = null;
var count__11188_11192 = (0);
var i__11189_11193 = (0);
while(true){
if((i__11189_11193 < count__11188_11192)){
var line_11194 = chunk__11187_11191.cljs$core$IIndexed$_nth$arity$2(null,i__11189_11193);
markdown.transformers.parse_footnote_link(line_11194,footnotes);

var G__11195 = seq__11186_11190;
var G__11196 = chunk__11187_11191;
var G__11197 = count__11188_11192;
var G__11198 = (i__11189_11193 + (1));
seq__11186_11190 = G__11195;
chunk__11187_11191 = G__11196;
count__11188_11192 = G__11197;
i__11189_11193 = G__11198;
continue;
} else {
var temp__4425__auto___11199 = cljs.core.seq(seq__11186_11190);
if(temp__4425__auto___11199){
var seq__11186_11200__$1 = temp__4425__auto___11199;
if(cljs.core.chunked_seq_QMARK_(seq__11186_11200__$1)){
var c__4934__auto___11201 = cljs.core.chunk_first(seq__11186_11200__$1);
var G__11202 = cljs.core.chunk_rest(seq__11186_11200__$1);
var G__11203 = c__4934__auto___11201;
var G__11204 = cljs.core.count(c__4934__auto___11201);
var G__11205 = (0);
seq__11186_11190 = G__11202;
chunk__11187_11191 = G__11203;
count__11188_11192 = G__11204;
i__11189_11193 = G__11205;
continue;
} else {
var line_11206 = cljs.core.first(seq__11186_11200__$1);
markdown.transformers.parse_footnote_link(line_11206,footnotes);

var G__11207 = cljs.core.next(seq__11186_11200__$1);
var G__11208 = null;
var G__11209 = (0);
var G__11210 = (0);
seq__11186_11190 = G__11207;
chunk__11187_11191 = G__11208;
count__11188_11192 = G__11209;
i__11189_11193 = G__11210;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(footnotes) : cljs.core.deref.call(null,footnotes));
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__11213 = cljs.core.split_with((function (p1__11211_SHARP_){
return cljs.core.not_empty(p1__11211_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11213,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11213,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_11233 = markdown.transformers._STAR_substring_STAR_;
var formatter11234 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_11233,formatter11234){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_11233,formatter11234))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__11235 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11235,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11235,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__11237_11252 = lines__$1;
var vec__11238_11253 = G__11237_11252;
var line_11254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11238_11253,(0),null);
var more_11255 = cljs.core.nthnext(vec__11238_11253,(1));
var state_11256 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__11237_11257__$1 = G__11237_11252;
var state_11258__$1 = state_11256;
while(true){
var vec__11239_11259 = G__11237_11257__$1;
var line_11260__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11239_11259,(0),null);
var more_11261__$1 = cljs.core.nthnext(vec__11239_11259,(1));
var state_11262__$2 = state_11258__$1;
var state_11263__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_11262__$2))?(function (){var G__11240 = html;
var G__11241 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_11262__$2);
var G__11242 = cljs.core.first(more_11261__$1);
var G__11243 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_11262__$2,cljs.core.cst$kw$buf,cljs.core.array_seq([cljs.core.cst$kw$lists], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__11240,G__11241,G__11242,G__11243) : transformer.call(null,G__11240,G__11241,G__11242,G__11243));
})():state_11262__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_11261__$1))){
var G__11264 = more_11261__$1;
var G__11265 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__11244 = html;
var G__11245 = line_11260__$1;
var G__11246 = cljs.core.first(more_11261__$1);
var G__11247 = state_11263__$3;
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__11244,G__11245,G__11246,G__11247) : transformer.call(null,G__11244,G__11245,G__11246,G__11247));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_11260__$1));
G__11237_11257__$1 = G__11264;
state_11258__$1 = G__11265;
continue;
} else {
var G__11248_11266 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_11263__$3)));
var G__11249_11267 = line_11260__$1;
var G__11250_11268 = "";
var G__11251_11269 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_11263__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__11248_11266,G__11249_11267,G__11250_11268,G__11251_11269) : transformer.call(null,G__11248_11266,G__11249_11267,G__11250_11268,G__11251_11269));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers.formatter = formatter11234;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_11233;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11272 = arguments.length;
var i__5190__auto___11273 = (0);
while(true){
if((i__5190__auto___11273 < len__5189__auto___11272)){
args__5196__auto__.push((arguments[i__5190__auto___11273]));

var G__11274 = (i__5190__auto___11273 + (1));
i__5190__auto___11273 = G__11274;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return cljs.core.cst$kw$html.cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq11270){
var G__11271 = cljs.core.first(seq11270);
var seq11270__$1 = cljs.core.next(seq11270);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__11271,seq11270__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11277 = arguments.length;
var i__5190__auto___11278 = (0);
while(true){
if((i__5190__auto___11278 < len__5189__auto___11277)){
args__5196__auto__.push((arguments[i__5190__auto___11278]));

var G__11279 = (i__5190__auto___11278 + (1));
i__5190__auto___11278 = G__11279;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((1) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5197__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parse_DASH_meta_QMARK_,true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq11275){
var G__11276 = cljs.core.first(seq11275);
var seq11275__$1 = cljs.core.next(seq11275);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__11276,seq11275__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11281 = arguments.length;
var i__5190__auto___11282 = (0);
while(true){
if((i__5190__auto___11282 < len__5189__auto___11281)){
args__5196__auto__.push((arguments[i__5190__auto___11282]));

var G__11283 = (i__5190__auto___11282 + (1));
i__5190__auto___11282 = G__11283;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((0) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__5197__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq11280){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11280));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__5196__auto__ = [];
var len__5189__auto___11285 = arguments.length;
var i__5190__auto___11286 = (0);
while(true){
if((i__5190__auto___11286 < len__5189__auto___11285)){
args__5196__auto__.push((arguments[i__5190__auto___11286]));

var G__11287 = (i__5190__auto___11286 + (1));
i__5190__auto___11286 = G__11287;
continue;
} else {
}
break;
}

var argseq__5197__auto__ = ((((0) < args__5196__auto__.length))?(new cljs.core.IndexedSeq(args__5196__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__5197__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq11284){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11284));
});
