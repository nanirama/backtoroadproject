#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Illegal number of parameters: Image tag expected.!"
    exit 1
fi


TAG=$1

REPOSITORY="gcr.io/backtoroad-crm/web-frontend"


docker build -t ${REPOSITORY}:${TAG} .
docker push ${REPOSITORY}:${TAG}
