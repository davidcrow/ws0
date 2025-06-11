#!/bin/bash

VERSION="01"
PREFIX="ws0-1-fffm"

cd static/files || exit 1

for file in *; do
  echo ""
  echo "Original: $file"

  # Extension
  EXT="${file##*.}"

  # Clean filename (remove emojis, multiple spaces)
  CLEAN_NAME=$(echo "$file" | sed 's/[^[:alnum:][:space:].-]//g' | sed 's/  */ /g')

  # Extract type and section
  if [[ "$CLEAN_NAME" =~ [Mm]odule ]]; then
    TYPE="module"
    SECTION=$(echo "$CLEAN_NAME" | sed -n 's/.*[Mm]odule \([0-9]\+\).*/\1/p')
  elif [[ "$CLEAN_NAME" =~ [Aa]ppendix ]]; then
    TYPE="appendix"
    SECTION=""
  elif [[ "$CLEAN_NAME" =~ [Tt]emplate ]]; then
    TYPE="template"
    SECTION=""
  else
    TYPE="misc"
    SECTION=""
  fi

  # Generate slug
  SLUG=$(echo "$CLEAN_NAME" | sed -E 's/.*(Module|Appendix)[ ]?[0-9]*[ -]*//I' | sed 's/\.[^.]*$//' | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | sed 's/[^a-z0-9-]//g')

  # Collapse multiple hyphens to single
  SLUG=$(echo "$SLUG" | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//')

  SECTION_PART=""
  if [ -n "$SECTION" ]; then
    SECTION_PART="-$SECTION"
  fi

  NEWNAME="${PREFIX}-${VERSION}-${TYPE}${SECTION_PART}-${SLUG}.${EXT}"
  echo "→ Renamed to: $NEWNAME"
  mv "$file" "$NEWNAME"
done