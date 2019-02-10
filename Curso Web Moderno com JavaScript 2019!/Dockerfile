FROM node
RUN apt-get update && apt-get install -y sudo
RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo
USER docker
CMD /bin/bash