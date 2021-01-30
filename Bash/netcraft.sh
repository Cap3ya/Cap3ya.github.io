#!/bin/bash

function netcraft () 
{
	dns="${1}" # Domain Name Service 
	firefox https://sitereport.netcraft.com/?url=https://www.$dns
	firefox https://searchdns.netcraft.com/?host=$dns
	firefow https://host.io/$dns
	firefox https://$dns.siteindices.com/
}
	netcraft "$1"

