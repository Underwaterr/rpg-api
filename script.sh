#!/bin/bash
for i in $(seq 0 445)
do
  echo "<img src='icons/icon-$i.png'>" >> index.html
done
