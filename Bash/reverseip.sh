#!/bin/bash
function reverseip () 
{
	ip="${1}"
	firefox https://ipinfo.io/account/search?query=$ip
	firefox https://reverseip.domaintools.com/search/?q=$ip 
	firefox https://www.bing.com/search?q=ip%3A$ip
	whois $ip > whois.txt && firefox ./whois.txt && sleep 5 && rm whois.txt
}
reverseip "$1"
