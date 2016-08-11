gulp prod
ssh oceanstar 'mkdir -p ~/www/tabs-vs-spaces'
scp -r ./app/* oceanstar:~/www/tabs-vs-spaces
