(ns luminus-demo.routes.home
  (:require [luminus-demo.layout :as layout]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :refer [ok]]
            [clj-http.client :as client]
            [cheshire.core :as json]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))

(defn contact-page []
  (layout/render "contact.html"))

(defn search-drug []
  (fn [req]
    (let [keyword (get (:params req) "keyword")])
    (:body (client/post "http://www.tngou.net/api/drug/classify"
                        {:form-params
                         {:name "drug"
                          :keyword keyword
                          }
                         }
                        :content-type :json))))

(defroutes home-routes
  (GET "/" [] (home-page))
  (POST "/" [] (search-drug))
  (GET "/contact" [] (contact-page)))

