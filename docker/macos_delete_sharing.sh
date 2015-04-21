boot2docker stop
VBoxManage sharedfolder remove boot2docker-vm --name "slide_front_end_www" \
&& echo "\n\tDelete slide_front_end_www sharedfolder SUCCESS"
echo "\tRestarting Boot2docker"
boot2docker up
