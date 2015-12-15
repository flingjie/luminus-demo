(ns luminus-demo.drug
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET POST]]
            [dommy.core :refer-macros [sel1]]
            [secretary.core :as secretary :include-macros true]
            [reagent.session :as session]
            ))

(defn drug-info [name img_url detail_url]
  [:div
   [:a {:href detail_url :target "_blank"} name]
   [:a {:href detail_url :target "_blank"}
    [:img {:src img_url}]]])

(defn drug-list [drugs]
  [:div
   (for [drug drugs]
     [drug-info ((:name drug) (:img drug) (:url drug))])])

(defn home-page []
  [:div.container
    [:label "home"]
  ])

(defn contact-page []
  [:div.container
    [:label "contact"]
  ])


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


;; -------------------------
;; Handlers

(defn handler [response]
  (let [items (get response "tngou")]
    (r/render [#'drug-list items] (sel1 :#result))
    ))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "error: " status " " status-text)))

;; -------------------------


(defn query []
  (let [csrf (.-value (sel1 :#token))
        keyword (.-value (sel1 :#keyword))]
    (POST "/"
          {:headers {:x-CSRF-Token csrf}
           :params {:keyword keyword}
           :response-format :json
           :handler handler
           :error-handler error-handler})
     ))

(defn query-div []
  (fn []
    [:div.text-center
     [:input {:type "text" :id "keyword"}]
     [:button.btn-primary {:on-click query} "药物查询" ]]))
