(ns luminus-demo.app
  (:require [luminus-demo.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
