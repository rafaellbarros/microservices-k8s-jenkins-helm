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

```sh
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
```

```sh
$ kubectl describe sa kubeadmin -n kube-system
```

```sh
$ watch kubectl get all --all-namespaces
```

```sh
$ kubectl expose deployment kubernetes-dashboard --name=kubernetes-dashboard-nodeport --target-port=8443 --port=443 --type=NodePort -n kubernetes-dashboard
```

```sh
$ kubectl describe pod/kubernetes-dashboard-56cf4b97c5-ptxvt -n kubernetes-dashboard
```

```sh
$ kubectl describe sa kubernetes-dashboard -n kubernetes-dashboard
```

```sh
$ kubectl create serviceaccount kubeadmin -n kubernetes-dashboard
```

```sh
$ kubectl describe sa kubeadmin -n kubernetes-dashboard
```

```sh
$ kubectl create clusterrolebinding kubeadmin --clusterrole=cluster-admin --serviceaccount=kubernetes-dashboard:kubeadmin
```

```sh
$ kubectl create token kubeadmin -n kubernetes-dashboard
```

```sh
$ kubectl apply -f kubeadmin-token.yaml
```

```sh
$ kubectl describe secret kubeadmin-token -n kubernetes-dashboard
```

```sh
$ kubectl describe sa kubeadmin -n kubernetes-dashboard
```

```sh
$ kubectl apply -f k8s-dashboard-nodeport.yaml
```

```sh
$ kubectl delete service/kubernetes-dashboard-nodeport -n kubernetes-dashboard
```

```sh
$ kubectl delete service/kubernetes-dashboard -n kubernetes-dashboard
```

```sh
$ kubectl apply -f k8s-ns.yaml
```

```sh
$ kubectl apply -f 02-frontend-deploy.yaml
```

```sh
$ kubectl get all
```

```sh
$ kubectl apply -f 02-frontend-service.yaml
```

```sh
$ kubectl apply -f 03-backend-user-service.yaml --namespace staging
```

```sh
$ kubectl describe service/backend-user -n staging
```

```sh
$ kubectl apply -f 03-backend-user-deploy.yaml -n staging
```

```sh
$ kubectl describe service/backend-user -n staging
```
