#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

sbcl --noinform --non-interactive \
  --eval '(unless (find-package :quicklisp) (load "~/quicklisp/setup.lisp"))' \
  --eval "(push (truename \"${ROOT_DIR}/\") asdf:*central-registry*)" \
  --eval '(ql:quickload :hello :silent t)' \
  --eval '(hello:main)'
