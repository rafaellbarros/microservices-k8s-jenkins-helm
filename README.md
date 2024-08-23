# microservices-k8s-jenkins-helm

## Comandos Dockercompose

### Rodando os serviços

```sh
$ docker-compose up -d
```

### Listando os serviços

```sh
$ docker-compose ps
```

### Mostrando os logs dos serviços

```sh
$ docker-compose logs
```

### Kubernetes

```sh
$ kubectl cluster-info
```

```sh
$ kubectl get nodes
```

```sh
$ kubectl get all --all-namespaces
```

```sh
$ kubectl create -f https://raw.githubusercontent.com/projectcalico/calico/v3.28.1/manifests/tigera-operator.yaml
```

```sh
$ kubectl create -f https://raw.githubusercontent.com/projectcalico/calico/v3.28.1/manifests/custom-resources.yaml
```

```sh
$ watch kubectl get pods -n calico-system
```

```sh
$ kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

```sh
$ kubectl taint nodes --all node-role.kubernetes.io/control-plane-
```

```sh
$ kubectl create deployment kubernetes-bootcamp --image=gcr.io/google-samples/kubernetes-bootcamp:v1
```

```sh
$ kubectl run kubernetes-bootcamp --image=grc.io/google-samples/kubernetes-bootcamp:v1 --port=8080
```

```sh
$ kubectl get deploy
```

```sh
$ kubectl get pods
```

```sh
$ kubectl logs kubernetes-bootcamp-644c5687f4-crgzd -f
```

```sh
$ kubectl proxy
```

```sh
$ curl http://localhost:8001/api/v1/namespaces/default/pods/kubernetes-bootcamp/proxy/
Hello Kubernetes bootcamp! | Running on: kubernetes-bootcamp | v=1
```

```sh
$ kubectl get deploy kubernetes-bootcamp -o yaml
```
