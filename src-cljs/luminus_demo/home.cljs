(ns luminus-demo.home
  (:require [reagent.core :as r :refer [atom]]
            ))


(defn init-svg []
  (-> js/d3 (.select "svg")
      (.append "circle")
      (.attr "cx" 350)
      (.attr "cy" 200)
      (.attr "r" 200)
      (.attr "class" "left")))

(defn home-page []
  [:div.container
   [:input {:type "button" :value "Try" :class "btn-primary"
            :on-click #(init-svg)}]
   [:svg {:width 600 :height 400}]])