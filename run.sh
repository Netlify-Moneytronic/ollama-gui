#!/bin/bash
cd ./bin

sleep 30

launchctl setenv OLLAMA_ORIGINS "*"

./ollama run llama3.2

