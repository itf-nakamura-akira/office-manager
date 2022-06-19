FROM mcr.microsoft.com/vscode/devcontainers/base:ubuntu-21.04

# [Optional] Uncomment this section to install additional packages.
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    apt-utils \
    zip \
    unzip \
    git \
    procps \
    curl \
    software-properties-common \
    gpg-agent \
    mysql-client \
    maven \
    2>&1

# Clean up
RUN apt-get autoremove -y \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

# Nodejs
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN npm update -g npm
RUN npm install -g ts-node@10.8.1

# Rust
RUN curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh -s -- -y
RUN apt-get -y install gcc

# Git
RUN sudo git config --global user.name itf-nakamura-akira
RUN sudo git config --global user.email nakamura.akira@itfllc.co.jp

# ENV DEBIAN_FRONTEND=dialog
