(ns luminus-demo.handlers
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET POST]]
            [dommy.core :as dommy :refer-macros [sel1]]
            [secretary.core :as secretary :include-macros true]
            [reagent.session :as session]
            [luminus-demo.views :refer [drug-list]]
            ))

(defn reset-btn []
  (->
    (sel1 :#loading-div)
    (dommy/set-text! "")))

(defn show-loading []
  (->
   (sel1 :#loading-div)
   (dommy/set-text! "加载中...")))

(defn handler [response]
  (let [items (.-tngou (clj->js response))]
    (r/render [#'drug-list items] (sel1 :#result))
    (reset-btn)
    ))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "error: " status " " status-text))
  (reset-btn))


(defn query []
  (let [csrf (.-value (sel1 :#token))
        search (.-value (sel1 :#keyword))]
    (POST "/drug"
          {:headers {:x-CSRF-Token csrf}
           :params {:keyword search}
           :response-format :json
           :handler handler
           :error-handler error-handler})
    (show-loading)))

(defn query-page []
  (fn []
    [:div
     [:div
      [:input {:type "text" :id "keyword"}]
       [:button#search-btn.btn-primary.btn-search {:on-click query} "药物查询"]
       [:label#loading-div]
      ]
     ]))
