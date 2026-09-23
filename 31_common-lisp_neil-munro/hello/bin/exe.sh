#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

sbcl --non-interactive \
  --eval '(load "~/quicklisp/setup.lisp")' \
  --eval "(push (truename \"${ROOT_DIR}/\") asdf:*central-registry*)" \
  --eval '(ql:quickload :hello :silent t)' \
  --eval '(hello:main)'
