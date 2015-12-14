(ns luminus-demo.core
  (:require [reagent.core :as r :refer [atom]]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]]
            )
  (:import goog.History))


(defn handler [reponse]
  (.log js/console (str "result:" reponse)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "error: " status " " status-text)))

(defn query []
  (let [csrf (.-value (.getElementById js/document "token"))
        keyword (.-value (.getElementById js/document "keyword"))]
    (POST "/"
          {:headers {:x-csrf-Token csrf}
           :params {:keyword keyword}
           :handler handler
           :error-handler error-handler})))

(defn debug []
  (let [csrf (.-value (.getElementById js/document "token"))
        keyword (.-value (.getElementById js/document "keyword"))]
    (.log js/console (str "debug: " csrf " " keyword))))

(defn query-div []
  (fn []
    [:div.text-center
     [:form.form-horizontal
      [:input {:type "text" :id "keyword"}]
      [:button.btn-primary {:on-click query} "智能查询" ]
      ]]))

(defn navbar []
  (let [collapsed? (atom true)]
    (fn []
      [:ul
       [:li
        [:a {:href "#/"} "智能查询"]]
       [:li
        [:a {:href "#/contact"} "联系方式"]]
      ])))


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
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          EventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app

(defn mount-components []
  (r/render [#'query-div] (.getElementById js/document "query"))
  (r/render [#'navbar] (.getElementById js/document "navbar"))
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (hook-browser-navigation!)
  (mount-components))
