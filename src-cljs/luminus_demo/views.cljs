(ns luminus-demo.views
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET POST]]
            [dommy.core :as dommy :refer-macros [sel1]]
            [secretary.core :as secretary :include-macros true]
            [reagent.session :as session]
            ))

(defn drug-info [drug-name image-url message]
  [:tr
   [:td
    [:img.drug-img {:src image-url}]]
   [:td drug-name]
   [:td message]])

(defn drug-list [drugs]
  [:table.table.table-striped.table-hover
   [:thead
    [:tr
      [:th "图片"]
      [:th "名称"]
      [:th "功效"]]]
   [:tbody
    (for [drug drugs]
     ^{:key (.-id drug)}
     [drug-info (.-name drug) (.-img drug) (.-message drug)])]])


(defn home-page []
  [:div.container
    [:label "home"]
  ])

(defn contact-page []
  [:div.container
    [:label "contact"]
  ])
