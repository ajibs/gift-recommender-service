#!/usr/bin/env bash

IMAGE_NAME="gift_recommender_web_app"

ROOT="$( pwd )"

npm install

if [[ "$(docker images -q ${IMAGE_NAME}:latest 2> /dev/null)" == "" ]]; then
    echo " ----- Image Does Not Exist. Building Now. -----"
    docker build -t ${IMAGE_NAME} ${ROOT}
else
    echo " ----- Image Available for Use. -----"
fi

PROJECT_NAME="gift_recommender"

CURRENT_DOCKER_COMPOSE_VERSION=$( docker-compose -v | grep -o '[0-9]*[.][0-9]*[.][0-9]' | sed -e 's/[.]//g' )
BREAKING_DOCKER_COMPOSE_VERSION=1210

# Since docker compose version: '1.21.0', the network setup automatically adds a single '_' to the network_name_prefix,
# while version '1.20.0' and below replaces any extra ‘_’ at the end of the network_name_prefix with a single '_'.
# This assumes that at versions below '1.20.0' e.g. '1.9.0', no ‘_’ is added at the end of the network_name_prefix.
if [[ ${CURRENT_DOCKER_COMPOSE_VERSION} -lt ${BREAKING_DOCKER_COMPOSE_VERSION} ]]; then
 PROJECT_NAME="${PROJECT_NAME}_"
fi

echo " ----- Network name prefix is: ${PROJECT_NAME} -----"

echo " ----- Starting Up Infrastructure Containers -----"

docker-compose -p ${PROJECT_NAME} up -d

echo " ----- Run Application in a Disposable Container -----"
docker run \
    -i \
    -t \
    -p 8080 \
    --rm \
    -v ${ROOT}:/src \
    --env-file=${ROOT}/.env \
    --network=gift_recommender_main_network \
    ${IMAGE_NAME} \
    bash

echo " ----- EXITED from Disposable Container -----"
echo " ----- REMOVED Exited Container -----"