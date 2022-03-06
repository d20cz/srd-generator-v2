#!/usr/bin/env sh

#for Item in fatesrd dnd5esrd srd awsrd drd2srd ;
#  do
#    echo $Item
#    rm -rf source/$Item
#    rsync -rv \
#      --include="*/" \
#      --include="*.md" \
#      --include="*.png" \
#      --include="*.jpg" \
#      --exclude="*" \
#      source_raw/$Item/ source/$Item
#  done

rm -rf source/fatesrd
rsync -rv \
  --include="*/" \
  --include="*.md" \
  --include="*.png" \
  --include="*.jpg" \
  --exclude="*" \
  source_raw/Fate/ source/fatesrd

rm -rf source/dnd5esrd
rsync -rv \
  --include="*/" \
  --include="*.md" \
  --include="*.png" \
  --include="*.jpg" \
  --exclude="*" \
  source_raw/DnD5e/ source/dnd5esrd

rm -rf source/srd
rsync -rv \
  --include="*/" \
  --include="*.md" \
  --include="*.png" \
  --include="*.jpg" \
  --exclude="*" \
  source_raw/Index/ source/srd

rm -rf source/awsrd
rsync -rv \
  --include="*/" \
  --include="*.md" \
  --include="*.png" \
  --include="*.jpg" \
  --exclude="*" \
  source_raw/AW/ source/awsrd

rm -rf source/drd2srd
rsync -rv \
  --include="*/" \
  --include="*.md" \
  --include="*.png" \
  --include="*.jpg" \
  --exclude="*" \
  source_raw/DrD2/ source/drd2srd



find source/ -type f -name "*.md" \
  -exec sed -i -e :a -re 's/<!--.*?-->//g;/<!--/N;//ba' {} \; \
  -exec echo Remove stackedit_data - {}  \;


yarn source:generator
exit 0

cat source/dnd5esrd/pruvodce-pana-jeskyne/7-kapitola-a.md  \
    source/dnd5esrd/pruvodce-pana-jeskyne/7-kapitola-b.md  \
    >> source/dnd5esrd/pruvodce-pana-jeskyne/7-kapitola.md
rm source/dnd5esrd/pruvodce-pana-jeskyne/7-kapitola-a.md source/dnd5esrd/pruvodce-pana-jeskyne/7-kapitola-b.md

cat source/dnd5esrd/prirucka-hrace/3-kapitola-a.md  \
    source/dnd5esrd/prirucka-hrace/3-kapitola-b.md  \
    >> source/dnd5esrd/prirucka-hrace/3-kapitola.md
rm source/dnd5esrd/prirucka-hrace/3-kapitola-a.md source/dnd5esrd/prirucka-hrace/3-kapitola-b.md

cat source/dnd5esrd/prirucka-hrace/11-kapitola-a.md  \
    source/dnd5esrd/prirucka-hrace/11-kapitola-b.md  \
    >> source/dnd5esrd/prirucka-hrace/11-kapitola.md
rm source/dnd5esrd/prirucka-hrace/11-kapitola-a.md source/dnd5esrd/prirucka-hrace/11-kapitola-b.md