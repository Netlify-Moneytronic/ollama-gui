#!/bin/bash

echo "$(uname -m)"
echo uname -m
echo "Installing Ollama..."


curl -LO https://github.com/ollama/ollama/releases/latest/download/ollama-linux-amd64.tgz
tar -xzf ollama-linux-amd64.tgz
chmod +x ollama-linux-amd64.tgz
cd ./bin
chmod +x ollama
echo "LISTING BIN"
ls

# mv "ollama" "$BIN_DIR/ollama"
# chmod +x "./ollama-linux-amd64.tgz"

# Add to PATH if not already there
# if [[ ":$PATH:" != *":$BIN_DIR:"* ]]; then
#   echo "export PATH=\"$BIN_DIR:\$PATH\"" >> "$HOME/.bashrc"
#   echo "Added Ollama to your PATH in .bashrc. Reload your shell or run:"
#   echo "  export PATH=\"$BIN_DIR:\$PATH\""
# fi

# source "$HOME/.bashrc"

# ./ollama

# Pull llama3 model'
./ollama serve &

# Start serving
# ./ollama serve &

# ./ollama list

