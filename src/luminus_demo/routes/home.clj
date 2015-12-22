(ns luminus-demo.routes.home
  (:require [luminus-demo.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :refer [ok]]
            [ring.util.response :refer [response status]]
            [clj-http.util :refer [utf8-bytes]]
            [clj-http.client :as client]
            [cheshire.core :refer [parse-string]]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))

(defn data-page []
  (layout/render "data.html"))

(defn contact-page []
  (layout/render "contact.html"))


(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/data" [] (data-page))
  (GET "/contact" [] (contact-page)))
