(ns luminus-demo.views
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET POST]]
            [dommy.core :as dommy :refer-macros [sel1]]
            [secretary.core :as secretary :include-macros true]
            [reagent.session :as session]
            ))

(defn drug-info [name img_url detail_url]
  [:div
   [:a {:href detail_url} name]
   [:a {:href detail_url}
    [:img.drug-img {:src img_url}]]])

(defn drug-list [drugs]
  [:div.col-lg-2
   (for [drug drugs]
     ^{:key (.-id drug)}
     [drug-info (.-name drug) (.-img drug) (.-url drug)])])


(defn home-page []
  [:div.container
    [:label "home"]
  ])

(defn contact-page []
  [:div.container
    [:label "contact"]
  ])
