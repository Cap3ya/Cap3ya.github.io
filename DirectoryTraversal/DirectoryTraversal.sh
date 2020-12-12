#!/bin/bash
dns="${1}"
paths=paths.txt
<<<<<<< HEAD
file="${2}"
=======
files=$2
>>>>>>> 167bd0da3874caa0ab96ee098a7d1c6bdd11444c
translations=translations.txt

for translation in $(cat $translations)
	do
		for path in $(cat $paths)
		do
			data=$(echo $dns$path$file | sed $translation)
<<<<<<< HEAD
			curl --include $data |& grep -E '\<200\>' >/dev/null && curl --include $dns$path$file | less
=======
			curl --silent --head $data | grep -E '\<200\>' > /dev/null \
			       && curl --inclue $dns$path$file 2> /dev/null
>>>>>>> 167bd0da3874caa0ab96ee098a7d1c6bdd11444c
		done
	done
exit 0
