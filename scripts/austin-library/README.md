# Austin Diamond's Library

Source for `/austin-library`, a three.js model of a friend's bookshelves.

```bash
python3 scripts/austin-library/build.py scripts/austin-library/assets public/austin-library/index.html
```

- `app.js`, `index.tpl.html`: the scene and page.
- `catalog.py`: every book, read from the shelf photos. `build_assets.py` cuts the spines from those photos (not stored here) into `assets/atlas.jpg`.
- `audible.json`, `audible_overrides.json`: Audible product matches, from `audible_lookup.py`.
- `quote_bank.json`: quotes checked word for word against Project Gutenberg, for the weekly email.
