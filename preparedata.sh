#!/usr/bin/env sh

for Item in fatesrd dnd5esrd srd awsrd drd2srd ;
  do
    echo $Item
    rm -rf source/$Item
    rsync -rv \
      --include="*/" \
      --include="*.md" \
      --include="*.png" \
      --include="*.jpg" \
      --exclude="*" \
      source_raw/$Item/ source/$Item
  done

find source/ -type f -name "*.md" \
  -exec sed -i -e :a -re 's/<!--.*?-->//g;/<!--/N;//ba' {} \; \
  -exec echo Remove stackedit_data - {}  \;


yarn source:generator
