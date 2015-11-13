(ns luminus-demo.home
  (:require [reagent.core :as r :refer [atom]]
            ))

(defn atom-input [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn home-page []
  (let [val (r/atom "foo")]
    (fn []
      [:div.container
       [:p "The value is now: " @val]
       [:p "Change it here: " [atom-input val]]])))