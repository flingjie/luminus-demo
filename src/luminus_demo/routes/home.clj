(ns luminus-demo.routes.home
  (:require [luminus-demo.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [ring.util.http-response :refer [ok]]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))

(defn contact-page []
  (layout/render "contact.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/contact" [] (contact-page)))

