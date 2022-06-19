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
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN npm update -g npm
RUN npm install -g ts-node@10.8.1

# # Java
# RUN wget -O- https://apt.corretto.aws/corretto.key | sudo apt-key add -
# RUN sudo add-apt-repository 'deb https://apt.corretto.aws stable main'
# RUN sudo apt-get update;
# RUN sudo apt-get install -y java-17-amazon-corretto-jdk

# Git
RUN sudo git config --global user.name itf-nakamura-akira
RUN sudo git config --global user.email nakamura.akira@itfllc.co.jp

# ENV DEBIAN_FRONTEND=dialog
