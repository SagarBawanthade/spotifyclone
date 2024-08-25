#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
docker pull sagarbawanthade/spotify:v1

# Run the Docker image as a container
docker run -d -p 8000:80 sagarbawanthade/spotify:v1
