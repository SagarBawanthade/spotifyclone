#!/bin/bash
set -e

# Pull the Docker image from Docker Hub
docker pull sagarbawanthade/spotify

# Run the Docker image as a container
docker run -d -p 8000:80 sagarbawanthade/spotify