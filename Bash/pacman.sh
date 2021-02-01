#!/bin/env bash

#SYSTEM MAINTENANCE

#DIRECTORIES & FILES
## Log File
flog=/home/blue/Dropbox/.LogSysMtn
## Explicitly installed packages file
feip=/home/blue/Dropbox/.LogPkgLst
## Git Packages Directory
dgit=/home/blue/Downloads/Builds

#ERROR HANDLING
## Create Log File if it doesn't exist
#[[ -f $flog ]] || touch $flog && date > $flog
## create Explicitly installed packages file if it doesn't exist
#[[ -f $feip ]] || touch $feip

#ARRAY 
##DEFINITION
declare -a array=("Check Arch News" 		"firefox https://archlinux.org/news" 
		"Resolve Missing Files" 	"sudo pacman -Su $(pacman -Qkq | awk '{print $1}' | uniq)"
		"Update All Packages" 		"sudo pacman -Syu"
		"Remove Unused Repositories"	"sudo pacman -Scc"
		"Remove Orphans + Files"	"sudo pacman -Rns $(pacman -Qttdq)"
		"Update Man Pages" 		"sudo mandb 2> /dev/null | tail --lines=4"
		"Export Explicits Installs" 	"sudo pacman -Qqe > $feip" 
		"Upgrade Git Repositories" 	"find $dgit -maxdepth 1 -mindepth 1 -type d -exec bash -c 'echo {}; cd {} && git pull' \;")
##LENGTH
array_length=${#array[@]}

#MAIN

for (( i = 0; i < array_length; i += 2 ))
do
	echo -n "%% ${array[i]} [y/n]: "
	read -r input
	case $input in
		y | Y ) eval "${array[i+1]}" ;;
	esac
done

exit 0
