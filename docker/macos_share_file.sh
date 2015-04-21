echo "\nCurrent directory:\t" $PWD
boot2docker stop
VBoxManage sharedfolder add boot2docker-vm --automount --name "slide_front_end_www" --hostpath $PWD \
&& echo "\tSharing slide_front_end_www to VBox SUCCESS"
boot2docker up
echo 'sudo mkdir -p /media/root/slide_front_end_www' | boot2docker ssh
echo 'sudo chmod 777 /media/root/slide_front_end_www' | boot2docker ssh
echo 'sudo mount -t vboxsf slide_front_end_www /media/root/slide_front_end_www' | boot2docker ssh
echo "\tSharing VBox slide_front_end_www to Docker SUCCESS"