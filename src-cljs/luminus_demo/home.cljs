(ns luminus-demo.home
  (:require [reagent.core :as r :refer [atom]]
            ))


(defn home-page []
  [:div.container
    [:a {:href "http://www.datatau.com/"} "DataDau(大数据资讯网站，类似Hacker News)"]
  ])
