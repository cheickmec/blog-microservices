# Blog Microservices

Very simple microservices applications for making posts and adding comments.
For educational purpose only.

### Technologies:
* NodeJS (v15)
* ReactJS
* Docker
* Kubernetes
* Minikube
* Skaffold
* VirtualBox (add some issues on MacOS with VMware)

### Setup Instructions:

**Prerequisites:** Make sure you have Docker, NodeJS, Minikube, VirtualBox and Skaffold installed.

1. Run Docker
2. Start minikube: `minikube start --vm=true --vm-driver=virtualbox`
3. Run `eval $(minikube docker-env)` so that minikube pulls images locally and not from DockerHub. 
   **Note:** After running this command, make sure to run all following from the same shell session.
4. Run `minikube ip` and use the returned IP address by adding a new entry in your `/etc/hosts` file such that:
`xxx.xxx.xx.xxx posts.com`, where `xxx.xxx.xx.xxx` is the IP address then save the file.
5. From the root folder, run: `skaffold dev`
6. Open a browser and visit the `posts.com` URL or run `open posts.com` from a terminal session
