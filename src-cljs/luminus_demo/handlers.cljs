(ns luminus-demo.handlers
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET POST]]
            [dommy.core :as dommy :refer-macros [sel1]]
            [secretary.core :as secretary :include-macros true]
            [reagent.session :as session]
            [luminus-demo.views :refer [drug-list]]
            ))

(defn data-page []
  (fn []
    [:div
     [:div
      [:label "信息图整理"]
      ]
     ]))
