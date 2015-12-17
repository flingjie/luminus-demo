(ns luminus-demo.routes
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET POST]]
            [dommy.core :as dommy :refer-macros [sel1]]
            [secretary.core :as secretary :include-macros true]
            [reagent.session :as session]
            [luminus-demo.views :refer [home-page contact-page]]
            ))

(def pages
  {:home #'home-page
   :contact #'contact-page})

(defn page []
  [(pages (session/get :page))])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
                    (session/put! :page :home))

(secretary/defroute "/contact" []
                    (session/put! :page :contact))
