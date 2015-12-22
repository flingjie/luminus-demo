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

(defn drug-page []
  (layout/render "drug.html"))

(defn contact-page []
  (layout/render "contact.html"))

(defn search-drug []
  (fn [req]
    (let [keyword (get (:params req) :keyword)]
      (->
       (client/post "http://www.tngou.net/api/search"
                        {:form-params
                         {:name "drug"
                          :keyword keyword
                          }
                         }
                        :content-type :json)
       (:body)
       (parse-string)
       (println)
       ))))

;; just for debug
(defn search-debug []
  (fn [req]
    (let [keyword (get (:params req) :keyword)]
      (println keyword)
      (response keyword))))
;; just for debug

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/drug" [] (drug-page))
  (POST "/drug" [] (search-drug))
  (GET "/contact" [] (contact-page)))
