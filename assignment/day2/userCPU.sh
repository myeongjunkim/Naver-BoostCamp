#!/bin/bash

head=`cat /proc/stat |head -1`
SPLIT=($(echo ${head} | tr " " "\n"))

all_cpu=$((SPLIT[1]))
user_cpu=$((SPLIT[2]))

let user_cpu_percent=$user_cpu*100/$all_cpu

today=$(date "+%Y%m%d-%H%M%S")
touch "${today}"

export USER_CPU_PERCENT=$((user_cpu_percent))
# echo "${user_cpu_percent}"