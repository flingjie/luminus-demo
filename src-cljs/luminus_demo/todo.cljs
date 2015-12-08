(ns luminus-demo.todo
  (:require [reagent.core :as r :refer [atom]]
            ))

(defn todo-page []
  [:div.container
   [:div.jumbotron
    [:h1 "Big Data"]
    [:p "Collectiong more info"]
   ]
  ])
