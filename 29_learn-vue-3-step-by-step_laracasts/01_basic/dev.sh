#!/usr/bin/env bash

bun x concurrently "bun x json-server --watch db.json --port 8000" "bun x serve" --names="server,client" -c "#93c5fd,#c4b5fd"
