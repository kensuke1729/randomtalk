# RandomTalk
# container image build
docker build -t randomtalk:1.0 .
# container start
docker run -d --name randomtalk -p 8080:80 randomtalk:1.0
# for debug
docker run --rm --name randomtalk -p 8080:80 randomtalk:1.0
# access
http://localhost:8080/randomtalk
