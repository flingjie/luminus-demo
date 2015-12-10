(ns luminus-demo.contact
  (:require [reagent.core :as r :refer [atom]]
            ))

(defn contact-page []
  [:div.container
   [:div [:label "邮箱："]
         [:label "van0229@gmail.com"]
   ]
  ])
