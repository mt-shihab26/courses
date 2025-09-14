#!/usr/bin/env bash

bun x concurrently "bun x json-server --watch db.json" "bun x serve"
