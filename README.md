### Helm Example

### Get a Kubernetes cluster

First install minikube
```sh
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb
sudo dpkg -i minikube_latest_amd64.deb
````

Start your cluster

```sh
minikube start
```

Interact with the cluster

```sh
kubectl get po -A
```

### Get helm 3

If you're using MacOS or Linux simply run the below:

```sh
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
```

Check the installation:

```sh
$ helm version
version.BuildInfo{Version:"v3.5.1", GitCommit:"32c22239423b3b4ba6706d450bd044baffdcf9e6", GitTreeState:"clean", GoVersion:"go1.15.7"}
```

Now install a chart for `postgresql` which is part of the `stable` repo:

View the [Chart README](https://github.com/helm/charts/tree/master/stable/postgresql) to find out what options are available.

```sh
helm upgrade --install postgresql stable/postgresql --set persistence.enabled=false
```
