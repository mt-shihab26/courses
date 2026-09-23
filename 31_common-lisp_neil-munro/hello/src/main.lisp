(uiop:define-package hello
  (:use #:cl)
  (:export #:main))
(in-package #:hello)

(defun main ()
  (format t "Hello, World!~%"))
