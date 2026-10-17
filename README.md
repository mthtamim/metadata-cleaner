# Metadata Cleaner

**Privacy-first metadata tool that runs 100% in your browser — no file ever leaves your device.**

Scan, remove and *edit* hidden metadata in photos and documents: EXIF/GPS in JPG & PNG, PDF info/XMP/annotations, and Office (DOCX/XLSX/PPTX) properties, comments and tracked changes. Bangla / English UI with dark mode.

**Live app:** https://mthtamim.github.io/metadata-cleaner/

## Features

- **Scan & preview everything** — every EXIF tag (IFD0, Exif, GPS, Interop, thumbnail), XMP, PDF info + annotations + hidden JavaScript, Office core properties, comments & tracked changes. GPS shows on a map (OpenStreetMap / Google Maps) before you clean.
- **Selective removal** — clean by category (GPS, author, comments, dates, device/software, everything else) or use presets: Social Media, Office Share, Maximum Privacy — plus your own saved presets.
- **Edit, don't just delete** — replace or clear Author, Title, Copyright, Description, Keywords, Rating, Software, Subject, Creator, Category, Company, LastModifiedBy. Set or move GPS (custom coordinates, city presets, copy from another photo, random 100 m / 1 km / 10 km shift, precision rounding), shift or set dates, find & replace, per-file inline edits, template copy.
- **Safe workflow** — optional backup ZIP before cleaning, before→after diff preview, post-clean re-scan verification, SHA-256 duplicate detection, per-file privacy risk score.
- **Batch friendly** — multiple files or whole folders (recursive), drag & drop, progress bar, rename templates, metadata export/import (JSON/CSV), session history + downloadable report & log.
- **Desktop / CLI** — the app page includes a downloadable Python version (`metadata_cleaner.py`, ExifTool + ffmpeg based) for video cleaning, folder-watch automation and building a Windows `.exe` with PyInstaller.

## Privacy

All processing happens locally in the browser with JavaScript. Files are never uploaded to any server. Video files are scan-only in the web version; use the Python CLI for video cleaning.

## মেটাডেটা ক্লিনার (বাংলা)

ছবি ও ডকুমেন্টের লুকানো মেটাডেটা (GPS লোকেশন, লেখক, ক্যামেরা তথ্য, মন্তব্য) স্ক্যান, মুছা ও বদলানোর টুল — সম্পূর্ণ ব্রাউজারেই চলে, কোনো ফাইল ডিভাইসের বাইরে যায় না। উপরের লিংকে গেলেই ব্যবহার করা যাবে।
