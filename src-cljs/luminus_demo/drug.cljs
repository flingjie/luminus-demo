(ns luminus-demo.drug
  (:require [reagent.core :as r :refer [atom]]
            [ajax.core :refer [GET POST]]
            [dommy.core :as dommy :refer-macros [sel1]]
            [secretary.core :as secretary :include-macros true]
            [reagent.session :as session]
            ))

(defn drug-info [name img_url detail_url]
  [:div
   [:a {:href detail_url} name]
   [:a {:href detail_url}
    [:img.drug-img {:src img_url}]]])

(defn drug-list [drugs]
  [:div.col-lg-2
   (for [drug drugs]
     ^{:key (.-id drug)}
     [drug-info (.-name drug) (.-img drug) (.-url drug)])])

(defn drug-debug [drugs]
  (.log js/console "drugs")
  (doseq [drug drugs]
     (.log js/console drug)))

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
(defn reset-btn []
  (dommy/remove-class! (sel1 :#loading-div) :loading)
  (->
    (sel1 :#search-btn)
    (dommy/remove-attr! :disabled)))

(defn show-loading []
  (dommy/add-class! (sel1 :#loading-div) :loading)
  (->
   (sel1 :#search-btn)
   (dommy/set-attr! :disabled)))

(defn handler [response]
  (let [items (.-tngou (clj->js response))]
    (r/render [#'drug-list items] (sel1 :#result))
    (reset-btn)
    ))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "error: " status " " status-text))
  (reset-btn))

;; -------------------------

(defn query []
  (let [csrf (.-value (sel1 :#token))
        search (.-value (sel1 :#keyword))]
    (POST "/"
          {:headers {:x-CSRF-Token csrf}
           :params {:keyword search}
           :response-format :json
           :handler handler
           :error-handler error-handler})
    (show-loading)
    )
  )

(defn query-div []
  (fn []
    [:div.text-center
     [:div.div-beside
      [:input {:type "text" :id "keyword"}]
     [:button#search-btn.btn-primary.btn-search {:on-click query} "药物查询"]]
     [:div#loading-div.div-beside]
     ]))
