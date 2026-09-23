(defpackage hello/tests/main
  (:use :cl
        :hello
        :rove))
(in-package :hello/tests/main)

;; NOTE: To run this test file, execute `(asdf:test-system :hello)' in your Lisp.

(deftest test-target-1
  (testing "should (= 1 1) to be true"
    (ok (= 1 1))))
