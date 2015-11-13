(ns luminus-demo.todo
  (:require [reagent.core :as r :refer [atom]]
            ))

(defn todo-page []
  [:div.container
   [:div.jumbotron
    [:h1 "Welcome to luminus"]
    [:p "Time to start building your site!"]
    [:p [:a.btn.btn-primary.btn-lg {:href "http://luminusweb.net"} "Learn more »"]]]
   ])