# Tessera UI — Component Build Backlog

Shared work queue for the 10 builder agents. **Coordination rules:**
- Before starting a component, mark it `[~] (builder-N)` in this file so nobody duplicates.
- When done + screenshotted + committed to your branch, mark it `[x] (builder-N)`.
- Each builder OWNS its assigned slice below. Only pull from another slice if yours is fully `[x]` AND that slice has unclaimed `[ ]` items.
- Never edit another builder's `[~]` line.
- The ideator (agent 11) appends fresh ideas to the "Ideator backlog" section at the bottom. Builders may pull from there once their slice is done.

Reference libraries (design inspiration ONLY — adapt to Tessera's native `registry/components/application/<slug>/` structure; do NOT force `npx shadcn add` into this Astro repo):
- shadcn/ui: https://ui.shadcn.com/docs/components (64 official)
- daisyUI: https://daisyui.com/components/ (68)

---

## Slices (non-overlapping)

### builder-1
- [x] (builder-1) Alert — 5 variants, light+dark, registry.json, MDX, screenshot verified
- [x] (builder-1) AlertDialog — 2 variants (destructive, warning), light+dark, registry.json, MDX, screenshot verified
- [x] (builder-1) AspectRatio — 3 variants (16:9, 1:1, 21:9), light+dark, registry.json, MDX, screenshot verified
- [x] (builder-1) Avatar — 3 variants (sizes, initials fallback, presence status), light+dark, registry.json, MDX, screenshot verified. Slice complete.
- [x] (builder-1) Badge — already exists as `badges` (verified)
- [x] (builder-1) Breadcrumb — already exists as `breadcrumbs` (verified)

### builder-2
- [x] (builder-2) Calendar
- [x] (builder-2) Card
- [x] (builder-2) Carousel
- [x] (builder-2) Checkbox — already exists as `checkboxes` (3 variants); no new work needed
- [x] (builder-2) Collapsible
- [x] (builder-2) Combobox — slice complete, 5/5 new components (Calendar, Card, Carousel, Collapsible, Combobox) committed to builder-2-components, light+dark, screenshots verified

### builder-3
- [x] (builder-3) Command
- [x] (builder-3) ContextMenu
- [x] (builder-3) DataTable
- [x] (builder-3) DatePicker
- [x] (builder-3) Dialog
- [x] (builder-3) Drawer — full slice complete, all 6 committed to builder-3-components, light+dark, screenshots verified

### builder-4
- [x] (builder-4) DropdownMenu — already exists as `dropdown` (3 variants, light+dark; verified)
- [x] (builder-4) Empty — already exists as `empty-states` (5 variants, light+dark; verified)
- [x] (builder-4) Field — already exists as `form-row` (label+control+help+error with aria wiring; verified, matches shadcn Field pattern)
- [x] (builder-4) HoverCard — 2 variants (profile preview, link preview), light+dark, registry.json, MDX, screenshot verified
- [x] (builder-4) Input — already exists as `inputs` (4 variants, light+dark; verified)
- [x] (builder-4) InputGroup — 2 variants (icon search, text addon with action), light+dark, registry.json, MDX, screenshot verified. Slice complete.

### builder-5
- [x] (builder-5) InputOTP
- [x] (builder-5) Item
- [x] (builder-5) Kbd
- [x] (builder-5) Label
- [x] (builder-5) Menubar
- [x] (builder-5) NavigationMenu — slice complete, 6/6 components committed to builder-5-components

### builder-6
- [x] (builder-6) Pagination
- [x] (builder-6) Popover
- [x] (builder-6) Progress
- [x] (builder-6) RadioGroup
- [x] (builder-6) Resizable
- [x] (builder-6) ScrollArea

### builder-7
- [x] (builder-7) Select — already exists as `selects` (3 variants, light+dark, verified)
- [x] (builder-7) Separator — already exists as `dividers` (verified)
- [x] (builder-7) Sheet — built new: right-edge slide-in panel, light+dark, registry+tsx+MDX, screenshot verified, committed
- [x] (builder-7) Sidebar — already exists as `dashboard-sidebar` + `side-menu` (verified)
- [x] (builder-7) Skeleton — already exists in building-blocks (8 variants); category is light-only by design (shared preview.css hardcodes color-scheme:light, no dark variant anywhere in building-blocks), so no dark work needed
- [x] (builder-7) Slider — already exists as `range-inputs` (verified)

### builder-8
- [x] Spinner (builder-8) — already existed as `loaders` (spinner + text/inline/dots variants)
- [x] Switch (builder-8) — already existed as `toggles`
- [x] Table (builder-8) — already existed as `tables` (5 variants light+dark)
- [x] Tabs (builder-8) — already existed as `tabs` (5 variants light+dark)
- [x] Textarea (builder-8) — already existed as `textareas` (3 variants light+dark)
- [x] Toast (builder-8) — already existed as `toasts` (6 variants light+dark)
- Pulling from Ideator backlog below (slice complete):
- [x] (builder-8) Segmented Control — registry.json + MDX added; tsx/html sources already existed; screenshot verified light+dark
- [x] (builder-8) Avatar Group — built from scratch (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark; fixed missing rose-* CSS by rebuilding public/component.css
- [x] (builder-8) Toast Stack — stateful queue manager (tsx light+dark w/ auto-dismiss + manual close, html light+dark, registry.json, MDX); screenshot verified light+dark
- [x] (builder-8) Announcement Banner — full-width dismissible top bar, info/success/warning severity + CTA (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark
- [x] (builder-8) Data Filter Bar — active-filter chip bar with per-chip removal, clear-all, Add filter trigger (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark
- [x] (builder-8) Inline Edit Field — click-to-edit text with save/cancel + Enter/Escape shortcuts (tsx light+dark, html light+dark showing display+editing states, registry.json, MDX); screenshot verified light+dark
- [x] (builder-8) Multi-Select Combobox — searchable listbox returning multiple checked values as removable chips (tsx light+dark, html light+dark w/ open listbox state, registry.json, MDX); screenshot verified light+dark

### builder-9
- [x] Toggle (builder-9) — already existed as `toggles`
- [x] (builder-9) ToggleGroup — 3 variants (single-select icon, multi-select formatting, single-select pill) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-9) Tooltip — 3 variants (simple hover, icon button, rich title+description) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-9) Typography — 3 variants (heading scale, body text, utility sizes) light+dark, registry.json, MDX entry, screenshots
- [x] Chat / Bubble (message thread) (builder-9) — already existed as `chat-bubbles`
- [x] Stat (metric tile variant) (builder-9) — already existed as `stats` + `stat-tile`

### builder-10 (daisyUI-flavored extras)
- [x] Timeline (builder-10) — pre-existing in repo (registry/components/application/timelines)
- [x] Steps (builder-10) — pre-existing in repo (registry/components/application/steps)
- [x] (builder-10) Rating — 2 variants (interactive star input + read-only average display), light+dark, registry+tsx generated, screenshots verified
- [x] (builder-10) Countdown — 2 variants (tiled D/H/M/S + compact inline banner), light+dark, registry+tsx generated, screenshots verified
- [x] (builder-10) Diff — 2 variants (split before/after + inline unified with line numbers), light+dark, registry+tsx generated, screenshots verified
- [x] (builder-10) Dock — 2 variants (floating macOS-style icon dock + labeled bottom nav bar), light+dark, registry+tsx generated, screenshots verified

---

## Ideator backlog (agent 11 appends here)
<!-- ideator: add new high-quality component ideas below, one per line as "- [ ] Name — one-line rationale" -->
- [x] (builder-3) Command Palette — duplicate of existing `command` component (builder-3, already ⌘K style grouped/keyboard-navigable); unclaimed by builder-5, no new work needed here
- [x] (builder-7) Notification Center — bell-triggered dropdown, grouped Today/Earlier, read/unread state, mark-all-read, light+dark, registry+tsx+MDX, screenshot verified, committed
- [x] (builder-7) Kanban Column — status header w/ count badge, draggable tag+avatar cards, add-card affordance, light+dark, registry+tsx+MDX, screenshot verified, committed (also regenerated public/component.css for missing amber/opacity-modifier utilities used by dark variant)
- [x] (builder-5) File Tree — nested folder/file explorer, independent folder expand/collapse, active-file link state, indent guides, light+dark, registry+tsx+MDX, screenshot verified, committed
- [x] (builder-1) Pricing Table — duplicate of existing `marketing/pricing` (2-tier cards with highlighted/ring-outlined popular option, feature checklist, CTA); no new work needed here
- [x] (builder-3) Stepper Wizard — 3-step progress header (complete/current/upcoming), form body slot, back/continue actions, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-3-components
- [x] (builder-8) Toast Stack — stacked, auto-dismissing toast queue manager with enter/exit animation and position variants; extends single `toasts` into a real notification system.
- [x] (builder-8) Avatar Group — overlapping avatar cluster with "+N more" overflow chip and hover tooltips; ubiquitous for collaborators/assignees.
- [x] (builder-1) Tag Input — 2 variants (basic chip entry + autocomplete listbox), light+dark, registry.json, MDX, screenshot + live add/remove interaction verified.
- [x] (builder-8) Segmented Control — iOS-style single-select pill toggle group for view/mode switching; distinct from tabs and button-groups in styling and intent.
- [x] (builder-9) Metric Sparkline Card — 2 variants (area sparkline, line sparkline) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-10) Activity Feed — 2 variants (avatar-led actor feed + connected icon-badge timeline), light+dark, registry+tsx generated, screenshots verified
- [x] (builder-5) Keyboard Shortcut Cheatsheet — modal grid of 4 grouped shortcut sections (General/Editing/Navigation/View) with kbd chips, light+dark, registry+tsx+MDX, screenshot verified
- [x] (builder-1) Split Button — 2 variants (primary/Deploy, secondary/Save), light+dark, registry.json, MDX, screenshot verified (menu-open state confirmed interactive).
- [x] (builder-8) Data Filter Bar — horizontal bar of chip/dropdown filters with active-filter pills and a clear-all control; the applied layer above the existing `filters` primitives.
- [x] (builder-10) Comparison Slider — 2 variants (corner-labeled + captioned before/after reveal), light+dark, interactive drag verified, registry+tsx generated (fixed generator's CSS-custom-property mangling by avoiding inline `--var` styles), screenshots verified
- [x] (builder-10) Onboarding Checklist — 2 variants (progress ring card + linear progress bar card), light+dark, registry+tsx generated, screenshots verified
- [x] (builder-5) Command Menu Result Row — role="option" row primitive (icon/avatar, title+meta, trailing kbd hint or badge, selected/disabled states), light+dark, registry+tsx+MDX, screenshot verified, committed
- [x] (builder-8) Multi-Select Combobox — searchable dropdown that returns multiple checked values rendered as inline chips; distinct from single Combobox and Tag Input.
- [x] (builder-3) Date Range Picker — preset rail (Today/Last 7d/Last 30d/MTD/Custom) + month calendar with range fill, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-3-components
- [x] (builder-6) Color Picker — 2 variants (popover swatch grid + hex input, hue/saturation panel with hue+alpha sliders and RGB inputs), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-8) Inline Edit Field — click-to-edit text that swaps to an input with save/cancel affordances; common for settings and table cells.
- [x] (builder-6) Copy-to-Clipboard Field — 2 variants (default state, copied confirmation state), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-9) Bulk Action Bar — 2 variants (floating pill, inline table toolbar) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-3) Tree View — recursive checkbox tree w/ expand/collapse, indeterminate parent state, indent guides, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-3-components
- [x] (builder-10) Timeline Scrubber — 2 variants (media playhead scrubber w/ buffered range + tick marks, dual-handle log-range scrubber over histogram), light+dark, registry+tsx generated, screenshots verified. Recovered from a shared-tree branch mixup where an earlier session instance's commit landed on builder-6-components; content re-applied cleanly onto builder-10-components via plumbing, original branch left untouched.
- [x] (builder-8) Announcement Banner — full-width top-of-page dismissible bar for product news/maintenance with CTA and severity variants; distinct from inline alerts.
- [x] (builder-7) Password Strength Meter — 2 states (strong/fair) w/ segmented bar, live label, requirements checklist, light+dark, registry+tsx+MDX, screenshot verified, committed (also regenerated public/component.css for missing emerald/amber-400 bg utilities)

<!-- === FRESH WAVE (post-94-clear) — 20 new application/dashboard-grade ideas, verified non-dupe against registry === -->
- [x] (builder-4) Calendar Event Grid — built as `event-calendar`: 3-day week grid, hour rows, side-by-side overlap handling, live now-indicator, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-4-components
- [x] (builder-5) Gantt Bar Chart — task bars on a day/week grid (column-index positioning), dependency arrow, milestone diamond, today-line, light+dark, registry+tsx+MDX, screenshot verified, committed
- [x] (builder-9) Code Editor Block — 2 variants (file-tab bar, file-name + copy action) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-3) JSON Tree Viewer — monospace key/value tree with per-branch expand/collapse, type-coded values (string/number/boolean/null), collapsed item-count summaries, expand-all/collapse-all header actions, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-3-components
- [x] (builder-8) Log Viewer — monospace log stream, toggleable INFO/WARN/ERROR/DEBUG filter chips, auto-scroll toggle (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark
- [x] (builder-2) Comment Thread — nested top-level comment + reply with indent rail, avatars, timestamps, like count, Reply affordance, and a controlled composer footer (disabled submit when empty), light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-8) Mention Textarea — composer with @-mention autocomplete popover, inserts mention token at trigger position (tsx light+dark, html light+dark showing open popover, registry.json, MDX); screenshot verified light+dark
- [x] (builder-2) Rich Text Toolbar — heading select + toggled bold/italic/underline + list buttons + link action, real aria-pressed state, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-4) Heatmap Calendar — GitHub-style 20-week, 5-level contribution grid with month/weekday labels and Less–More legend, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-4-components
- [x] (builder-8) Funnel Chart — 4-stage conversion funnel with computed drop-off percentages (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark
- [x] (builder-6) Map Marker Popup — 2 variants (place card with photo+rating+directions, compact locker/drop-off pin popup), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-7) Cookie Consent Banner — 2 variants (consent banner w/ accept-all/reject/customize, expanded preferences panel w/ per-category toggles), light+dark, registry+tsx+MDX, screenshot verified, committed (also regenerated public/component.css for missing peer-checked:start-6 utility; fixed a toggle-thumb sizing bug found during screenshot review)
- [x] (builder-3) Feature Comparison Matrix — sticky feature column, highlighted "Popular" plan, boolean check/dash cells + value cells for limits, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-3-components
- [x] (builder-9) Import Wizard — 2 variants (map columns step, review step) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-3) API Key Manager — masked-value table with reveal/copy icon buttons, scope badges, last-used column, per-row revoke action, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-3-components
- [x] (builder-5) Two-Factor Setup — 3-step flow (QR+secret w/ copy, 6-digit OTP entry, recovery codes grid w/ download+copy), light+dark, registry+tsx+MDX, screenshot verified, committed
- [x] (builder-6) Usage Meter Card — 2 variants (healthy usage emerald fill, near-limit red threshold shift with upgrade CTA), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-10) Diff Stat Bar — 2 variants (single-file summary bar, multi-file list with per-row bars + totals), light+dark, registry+tsx generated, screenshots verified
- [x] (builder-2) Presence Cursor Layer — 3 named colored cursors over a shared canvas, one with active selection box, sr-only status region listing collaborators, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (also regenerated public/component.css for missing bg-pink-*/bg-emerald-* utilities)
- [x] (builder-10) Rating Distribution — 2 variants (average score + percentage bars, compact bars w/ review counts), light+dark, registry+tsx generated, screenshots verified
- [x] (builder-2) Team Members List — 2 active members w/ per-row role select + 1 pending invitee w/ badge, initials-fallback avatar, Invite member action, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components

<!-- === WAVE 2 (builders back on, post-102) — 24 new application/dashboard-grade ideas, verified non-dupe against registry === -->
- [x] (builder-4) Data Grid Cell Editor — actively-editing ringed cell + dirty-cell highlight w/ unsaved indicator + nav hint footer, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-5) Column Visibility Menu — "Columns" trigger + checklist panel (checkbox toggle, drag handles, locked/disabled required row, reset action), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-9) Saved Views Bar — 2 variants (underline views, pill views with star and options) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-3) Query Builder — top-level AND/OR toggle, field/operator/value condition rows, nested OR sub-group, add condition/group actions, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-2) Faceted Search Sidebar — collapsible Category (checkboxes+counts) and Price (two-thumb range) facets + collapsed Brand group + clear-all, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-4) Rich Tooltip Chart — 2-series line chart + floating tooltip card (color swatches, values, week-over-week delta badge), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-8) Progress Ring Cluster — 3-metric radial dial cluster (CPU/Memory/Disk) computed via SVG stroke-dasharray from real values (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-4) Sankey Flow Diagram — 3-column weighted flow (2 sources → 2 mid-outcomes → 3 final outcomes), proportional ribbons, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [~] (builder-8) Org Chart — hierarchical node tree with avatar cards and connector lines; distinct from tree-view (person/reporting semantics).
- [x] (builder-5) Wizard Progress Rail — connected vertical step circles (complete/current/upcoming), title+description, click-to-jump on completed steps, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-4) Slide-Over Form — right-edge panel, fixed header, scrollable field body (text/email/select/textarea/checkbox), sticky Cancel/primary footer, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-7) Confirmation Input — 2 states (disabled/awaiting, matched/confirmed) w/ live phrase-match validation, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-4) Field Array Editor — repeatable input rows w/ drag handle, remove button, per-row validation, add-another affordance, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-7) Currency Input — 2 variants (default + error state) w/ symbol prefix and currency-code selector, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-4) Phone Number Input — 2 variants (closed flag+dial-code selector, open country listbox w/ checkmark), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-6) Time Picker — 2 variants (scrolling hour/minute/period column picker, compact dropdown listbox), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-6) Duration Input — 2 variants (segmented hour/minute fields, quick-preset chips with disabled custom fields), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-4) Slider Range Histogram — 28-bucket price histogram + dual-thumb ARIA range slider, highlighted buckets match active range, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-10) Toast Action Undo — 2 variants (countdown ring snackbar, linear countdown bar snackbar), light+dark, registry+tsx generated, screenshots verified, pushed
- [x] (builder-3) Status Page Board — overall status header, grouped service rows w/ 6-bar uptime strip + operational/degraded/outage pill, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-3) Changelog Entry — version badge + date, headline, New/Improved/Fixed category badges, grouped bullet lists per category, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-1) Quota Warning Banner — 2 variants (amber approaching-limit + red limit-exceeded), inline role=alert w/ labeled progressbar + upgrade CTA, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #9).
- [x] (builder-3) Split Pane Diff — two-column document comparison, version badges, per-paragraph added/removed highlighting, synced-scroll footer legend, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-2) Emoji / Reaction Picker — search field + category tabs (Recent/Smileys/Gestures/Nature) + emoji grid w/ real search-filter and pick state, per-emoji aria-labels, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components

<!-- === WAVE 3 (scale-up, deep backlog ≥40) — themed batches, verified non-dupe against ~110-component registry === -->

<!-- Theme: Dashboard widgets -->
- [x] (builder-8) Big Number Delta Tile — oversized KPI (MRR $84,210) w/ direction-derived trend arrow, delta %, and comparison label (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-3) Goal Progress Card — current/target values, progress bar with expected-pace tick mark, pacing badge (ahead/on-pace/behind), projected-finish note, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-8) Leaderboard List — 5-entry ranked list w/ auto top-3 medal badges, avatars, scores, up/down/same movement indicators (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-8) Mini Calendar Widget — read-only August 2026 month grid, today highlighted, 6 event-dotted days (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [~] (builder-9) Weather Widget — condition icon, temp, and hourly strip; canonical dashboard tile absent from library.
- [x] (builder-7) World Clock Row — 4-city timezone list w/ sun/moon day-night icons, light+dark, registry+tsx+MDX, screenshot verified (fixed a day/night icon mismatch found during review), committed + pushed (PR #5)

<!-- Theme: Data entry -->
- [x] (builder-4) Autocomplete Address Field — 2 variants (open ARIA combobox suggestion dropdown, structured street/city/state/ZIP fill-out), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-9) Credit Card Form — 2 variants (standard form, with card preview) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-6) Signature Pad — 2 variants (draw canvas with undo/clear, typed-signature fallback with Draw/Type tabs), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-10) Rating Input Emoji — 2 variants (fieldset scale w/ selected-state label, compact inline scale), light+dark, registry+tsx generated, screenshots verified, pushed
- [x] (builder-7) Toggle Card Group — 3-card plan selector w/ has-checked: styling and checkmark badge, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-7) Range Dual Input — 2 variants (valid + invalid min>max error state) w/ shared alert message, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-4) Markdown Editor — formatting toolbar + raw-markdown textarea + live split preview pane, Split/Preview toggle, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)

<!-- Theme: Navigation -->
- [x] (builder-4) Mega Menu Panel — full-width panel, 3 labeled link-group columns + featured promo card w/ badge and CTA, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-4) Command Bar Breadcrumb — breadcrumb w/ one segment as an open sibling dropdown (role=listbox/option, checkmark), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-4) Bottom Sheet Nav — mobile phone-frame mockup, drag handle, snap-point dots, 4-item icon nav row w/ active state, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-10) Floating Action Menu — 2 variants (labeled stacked FAB, icon-only stacked FAB), light+dark, checkbox-driven (no JS), registry+tsx generated, screenshots verified, pushed
- [x] (builder-7) Anchor Scroll Nav — 5-item sticky section list w/ aria-current active indicator, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-3) Pagination Cursor — "Showing X-Y of total" range, rows-per-page select, disabled-aware prev/next icon buttons, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)

<!-- Theme: Feedback / status -->
- [x] (builder-9) Inline Validation Hint — 2 variants (message below field, trailing icon in field) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-1) Loading Overlay — 2 variants (contained card overlay + full-surface overlay), dimmed/blurred scrim w/ role=status spinner+message, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #9).
- [x] (builder-1) Skeleton Card List — 2 variants (3-card grid + 3-row list), role=status container, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #9).
- [x] (builder-1) Retry Error State — 2 variants (full centered panel + compact inline banner), both role=alert w/ cause message + retry button, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #9).
- [x] (builder-7) Save Status Indicator — 3 states (saving spinner, saved checkmark, failed w/ retry), light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-1) Connection Status Pill — 2 variants (all-states stack + header row), animate-ping pulse ring, role=status, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #9).

<!-- Theme: Data viz -->
- [x] (builder-8) Radar Chart — 5-axis vendor comparison polygon computed via trigonometry (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-8) Bullet Chart — CSAT bullet graph (72 vs 85 target) w/ Poor/Satisfactory/Good bands (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-4) Candlestick Chart — 24-period OHLC candles (wicks + up/down bodies) + matching volume strip, sign-colored % change header, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-7) Choropleth Legend — 2 variants (continuous gradient + 4-bucket stepped), single-hue sequential ramp per dataviz skill, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-3) Stat Comparison Bars — ranked category bars with value labels, proportional fills, one highlighted row with tinted background, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-3) Trend Sparkbar Row — product table w/ inline 7-bar trend series per row, units column, color-coded % change column, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)

<!-- Theme: E-commerce -->
- [x] (builder-2) Product Card — square image w/ hover quick-view overlay + discount badge, title, 5-star rating (role=img aria-label), price w/ strikethrough compare price, icon add-to-cart, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-2) Cart Line Item — thumbnail + variant label, quantity stepper w/ real clamped state + aria-live count, computed line total, remove action, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-2) Checkout Order Summary — itemized subtotal/shipping/tax + promo-code apply w/ real discount state, computed total, checkout CTA, light+dark, registry+tsx+MDX, screenshot verified (math double-checked), committed to builder-2-components
- [x] (builder-2) Variant Selector — color swatch + size button radiogroups, real out-of-stock state (aria-disabled + diagonal strike, non-clickable), selected label echoed as text, light+dark, registry+tsx+MDX, screenshot verified (fixed a dark-mode black-swatch/white-swatch contrast bug found during review), committed to builder-2-components
- [x] (builder-10) Wishlist Heart Toggle — 2 variants (standalone toggle w/ saved-count badge, product-card corner overlay), light+dark, registry+tsx generated, screenshots verified, pushed

<!-- Theme: Auth -->
- [x] (builder-5) Social Login Buttons — Google/GitHub/Apple stacked buttons with brand icons + email divider, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-5) Auth Card Shell — logo+heading+form slot(children)+footer switch-link layout shell, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-5) Magic Link Sent State — envelope icon, email echo, live resend countdown (stated in button text), change-email link, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-5) Session Devices List — current-device badge (no revoke), per-row Revoke, sign-out-all-others footer, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed

<!-- Theme: Empty / error states -->
- [x] (builder-1) First-Run Empty State — duplicate of existing `empty-states` variant 1 "No items found" (icon, title, message, primary Create CTA, secondary hint link); no new work needed here
- [x] (builder-1) 404 / Error Page — 2 variants (404 Not Found + 500 Server Error), real h1, dual actions, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-8) No-Results Search State — zero-result state w/ real query echo + conditional Clear filters action (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-7) Permission Denied State — 2 states (denied w/ request CTA, request-sent confirmation), light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)

<!-- === WAVE 4 (deep-backlog refill, post-145) — themed batches, verified non-dupe against registry === -->

<!-- Theme: Media -->
- [x] (builder-4) Video Player — 16:9 poster frame + full controls bar (play/scrub/time/volume/speed/fullscreen), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-6) Audio Player — 2 variants (waveform bar player with play/mute, podcast player with cover art, skip controls, and speed badge), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-4) Image Gallery Lightbox — 2 variants (thumbnail grid, full-screen viewer w/ prev/next + counter + caption), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #14)
- [x] (builder-4) Image Cropper — draggable crop frame (rule-of-thirds grid + corner handles + mask), aspect presets, zoom slider, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-2) Avatar Uploader — circular drop-zone, hover camera overlay, real file input driving live object-URL preview, Replace/Remove actions, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-2) Media Object Row — 3 podcast-episode rows (thumbnail, truncating title/meta, trailing play button), reusable renderAction slot for custom trailing controls, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-4) PDF Page Thumbnails — scrollable thumbnail rail (nav landmark, aria-current) + main viewer pane w/ page count, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)

<!-- Theme: Collaboration -->
- [x] (builder-2) Reaction Bar — aggregated reaction pills w/ per-emoji count, toggleable reacted-by-you state (aria-pressed, count updates live), dashed add-reaction trigger, light+dark, registry+tsx+MDX, screenshot verified (caught+fixed a wrong-icon-path bug pre-commit), committed to builder-2-components
- [x] (builder-8) Typing Indicator — avatar + staggered bouncing-dot bubble, label pluralizes from real names array (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-6) Assignee Picker — 2 variants (single-select dropdown with search, multi-select checkbox list with stacked-avatar trigger), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-3) Share Dialog — email+role invite row, member list w/ fixed Owner text + editable role selects, copy-link footer, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-1) Comment Composer — 2 variants (full avatar-led composer + compact reply pill), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-10) Live Presence Avatars — 2 variants (overlapping row w/ pulsing dot + overflow, compact online-count pill), light+dark, registry+tsx generated, screenshots verified, pushed

<!-- Theme: Settings -->
- [x] (builder-7) Settings Nav List — 2 grouped sections (Account/Workspace) w/ icon-labeled items and active-page highlight, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-5) Preference Toggle Row — label+description+switch settings rows, locked/non-interactive row for mandatory settings, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-1) Danger Zone Panel — 2 variants (single action + 3-row panel), red-bordered section w/ native <dialog> confirm guard, light+dark, registry+tsx+MDX, screenshot + live open verified, committed+pushed (PR #9).
- [x] (builder-5) Plan & Billing Card — plan+price+status badge, usage bar w/ counts, renewal date, Manage/Upgrade actions, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-3) Notification Preferences Grid — event×channel checkbox matrix, required always-on cell, unavailable disabled cell, footnote, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-9) Profile Edit Form — 2 variants (standard settings form, public profile with unsaved indicator) light+dark, registry.json, MDX entry, screenshots

<!-- Theme: Mobile -->
- [x] (builder-5) Tab Bar (mobile) — 4-tab bottom bar, active-tab color+aria-current, numeric badge, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-1) Pull-to-Refresh — 2 variants (pull state + refreshing state), role=status/aria-live, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-4) Swipe Action Row — notification row shown mid-swipe revealing archive/delete action strip, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-7) Segmented Page Control — 5-dot indicator w/ elongated active pill, real button/tablist semantics, light+dark, registry+tsx+MDX, screenshot verified (fixed invisible-on-canvas contrast bug found during review), committed + pushed (PR #5)
- [x] (builder-7) Action Sheet — grouped action card w/ destructive item + separated Cancel button, native iOS-style, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)

<!-- Theme: Data-viz (more) -->
- [x] (builder-8) Donut Chart — 4-segment traffic-sources ring, computed center total + legend via SVG stroke-dasharray (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-4) Stacked Area Chart — 3-series cumulative area chart (computed stack), gridlines, toggleable legend w/ aria-pressed, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-6) Gauge Chart — 2 variants (standalone threshold-zone gauge, compact gauge with metric+target), light+dark, registry+tsx generated, screenshots verified (fixed a needle/label overlap found during review), committed to builder-6-components.
- [x] (builder-6) Treemap — 2 variants (single-color intensity scale, multi-category with color-coded legend), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-8) Waterfall Chart — 6-step Q3 revenue bridge, running-total bar positions computed from deltas (tsx light+dark, html light+dark, registry.json, MDX); fixed a flex items-end height bug found during screenshot review; screenshot verified light+dark, pushed to PR #6
- [x] (builder-4) Calendar Heat Legend Chart — single-month grid, correct weekday alignment, day numbers, 5-bucket numeric legend, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)

<!-- Theme: Commerce / finance -->
- [x] (builder-8) Invoice Table — 3-item invoice w/ Pending badge, computed subtotal/8% tax/$9,806.40 total (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-6) Payment Method Card — 2 variants (single saved card, selectable list with add-new affordance), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-2) Discount Code Field — 3-state field (idle input, applied removable savings chip, invalid w/ aria-invalid + role=alert error), real typed state machine, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-2) Order Status Tracker — 4-stage horizontal stepper (Placed/Shipped complete, Out for delivery current w/ pulse ring, Delivered upcoming w/ est. date), state computed from a single currentStepIndex, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-3) Refund Request Panel — order/charge summary, reason select, currency-prefixed amount w/ max-refundable hint, optional note, cancel/issue actions, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)

<!-- Theme: Utility / misc -->
- [x] (builder-1) Copyable Code Snippet — duplicate of existing `code-editor-block` variant 2 "File name with copy action" (file-name header, Copy button, syntax-highlighted numbered lines); no new work needed here
- [x] (builder-5) QR Code Card — QR tile (white bg, always-scannable contrast) + caption + encoded value text + Download/Copy link actions, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-10) Countdown Ring Timer — 2 variants (large radial timer w/ mm:ss center, compact inline ring timer w/ action row), light+dark, registry+tsx generated, screenshots verified (live tick confirmed), pushed
- [x] (builder-5) Feature Flag Toggle Row — flag key + env pills (Dev/Staging/Prod) + rollout % status + enable switch, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-2) Breadcrumb Page Header — 3-level breadcrumb trail (aria-current=page on last), h1 title + description, trailing action-buttons slot, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components, rebased onto origin/main cleanly (PR #13 confirmed mergeable)
- [x] (builder-7) Filter Chip Overflow — 2 states (collapsed w/ +N trigger, expanded popover), each chip individually removable, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)

<!-- === WAVE 5 (deep-backlog refill, post-176) — themed batches, verified non-dupe against registry === -->

<!-- Theme: Layout / structure -->
- [x] (builder-3) Split View Layout — inbox-style master-detail shell, collapsible list pane, resize handle, active-item aria-current, detail content slot, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-10) Sticky Section Header — 2 variants (alphabetical contact list w/ sticky letter headers, settings list w/ sticky category headers), light+dark, sticky pinning verified via actual scroll test, registry+tsx generated, screenshots verified, pushed
- [x] (builder-9) Masonry Grid — 2 variants (image gallery, card masonry) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-4) Sidebar Layout Shell — fixed sidebar (nav+user footer) + topbar (breadcrumb/search/avatar) + scrollable content, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-6) Card Stack — 2 variants (photo profile deck with reject/accept, compact content-recommendation deck with skip/save), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-3) Expandable Detail Row — order table w/ chevron toggle, colSpan detail panel with line items + emphasized total, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)

<!-- Theme: Feedback / status (more) -->
- [x] (builder-7) Progress Steps Toast — 4-step deploy task (done/active/pending) w/ derived progress bar and N-of-M label, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-10) Rate Limit Notice — 2 variants (inline warning banner w/ live countdown, compact card w/ disabled→enabled retry button), light+dark, both dynamic states verified via wait+screenshot, registry+tsx generated, screenshots verified, pushed
- [x] (builder-2) Health Check Grid — 2x2 service tile grid (live-pulse dot on operational, amber degraded, highlighted red outage tile), status conveyed via color+text label together, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-8) Sync Status Row — 3-state row (syncing/synced/failed) w/ spinning icon + disabled-while-syncing Sync now action (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-9) Maintenance Mode Screen — 2 variants (ETA notice, countdown with notify form) light+dark, registry.json, MDX entry, screenshots

<!-- Theme: Data entry (more) -->
- [x] (builder-6) Multi-Step Form Progress — 2 variants (numbered step rail with connectors, percentage bar with step counter), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-3) Inline Add Row — task table w/ always-visible footer inputs (task name + assignee), Add + clear actions, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-9) Slug Input — 2 variants (always-editable slug field, read-only preview with Edit trigger) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-2) Tag Filter Group — 6 independently toggleable tag pills, real multi-select aria-pressed state, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-8) Rating Scale (NPS) — 0-10 scale w/ detractor/passive/promoter zone coloring derived from score (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-1) File Drop Preview List — 2 variants (drop zone + list, list-only), uploading/complete/error states, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).

<!-- Theme: Navigation (more) -->
- [x] (builder-7) Breadcrumb Dropdown Overflow — 2 states (collapsed w/ … trigger, expanded dropdown of hidden segments), real segment-count collapse logic, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-7) Sidebar Search Filter — 2 states (highlighted-match results, no-matches empty state), real substring filter + <mark> highlight logic, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-4) Step Progress Sidebar — vertical step nav (checkmarks, aria-current, muted upcoming) + matching content pane, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-9) Tab Overflow Scroller — 2 variants (with arrow buttons, with edge fade) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-2) Recent / Pinned Switcher — search field + Pinned/Recent sections w/ live filter, active workspace aria-current + checkmark, Create workspace footer action, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components. NOTE: PR #13 was merged mid-session; opened new PR #18 for post-merge commits (Health Check Grid, this component).

<!-- Theme: Dashboard widgets (more) -->
- [x] (builder-10) Activity Ring Trio — 2 variants (large concentric ring trio w/ legend, compact inline ring trio w/ summary), light+dark, ring circumference/offset math verified against Python, registry+tsx generated, screenshots verified, pushed
- [x] (builder-4) Metric Trend Grid — 3x2 KPI cell grid w/ computed sparklines, trend-aware color (not just delta sign), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-7) Top Movers List — 4-ticker list (2 gainers/2 losers) w/ derived direction arrow+color from sign, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-10) Live Counter Tile — 2 variants (large tile w/ pulse indicator + ticking number, compact inline live-count row), light+dark, live-tick behavior verified via screenshot, registry+tsx generated, screenshots verified, pushed
- [x] (builder-8) Comparison Stat Pair — This month (1,284, leading) vs Last month (972), winner computed from real values (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6

<!-- Theme: Collaboration / content (more) -->
- [x] (builder-2) Approval Request Card — requester + resource + note + Pending/Approved/Rejected badge (color+text), Approve/Reject actions resolve to real state and disappear, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #18)
- [x] (builder-2) Version History List — 4 revision rows (current w/ badge, 3 prior w/ View diff + Restore actions computed from isCurrent flag), light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #18)
- [x] (builder-8) Task Checklist — flat checkable list w/ computed N/M complete count + Enter-to-add task input (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-8) Poll / Vote Card — click-to-vote poll w/ computed percentage-bar results view, 4-option framework poll demo (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-10) Announcement Feed Item — 2 variants (pinned announcement card w/ reactions, compact starred post row list), light+dark, registry+tsx generated, screenshots verified, pushed

<!-- Theme: Utility (more) -->
- [x] (builder-2) Timezone Picker — search field filters city+offset live, each row shows city/UTC offset/current time, no-results state, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components. NOTE: PR #18 was merged mid-session; opened new PR #19 for this component.
- [x] (builder-2) Language Switcher — 5-locale listbox (flag + native-language label), active locale bolded w/ checkmark, real selection state, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #18)
- [x] (builder-5) Theme Toggle Switch — real radio-group 3-way Light/Dark/System control, icon+label, selected pill background, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-4) Keyboard Focus Ring Demo — numbered tab-order badges + outline-based focus ring + explanatory note, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-2) Copy Share Link Row — read-only link field, Copy button w/ real navigator.clipboard write + "Copied!" text confirmation, permission select, expiry label, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #18)

<!-- === WAVE 6 (deep-backlog refill, post-203) — specialized domains, verified non-dupe against registry === -->

<!-- Theme: Project management -->
- [x] (builder-4) Sprint Burndown Chart — 10-day sprint, dashed ideal line + solid actual line + marker dot + dashed today line, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-4) Board Swimlane — 2 team lanes (color dot + label) spanning 3 shared status columns, strikethrough completed cards, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-8) Task Priority Badge Set — 4-level Urgent/High/Medium/Low badges, icon+color+label bundled per level (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-8) Effort Estimate Chips — Fibonacci story-point radiogroup (1/2/3/5/8/13/?), 5 selected (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-7) Dependency Link Row — 2 groups (Blocks/Blocked by) w/ linked status-dot chips, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-6) Milestone Marker Card — 2 variants (detail card with progress+avatars+task link, compact 3-row list with status icons and percentages), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.

<!-- Theme: CRM / people -->
- [x] (builder-8) Contact Card — initials avatar + name/role/company + conditional call/email/message icon buttons (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-6) Deal Pipeline Stage — 2 variants (single stage column with deal cards+owner avatars+total, two-stage flow with highlighted closed-won stage), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-7) Lead Score Meter — 2 states (Hot/Cold score) w/ 3 qualitative bands, derived marker position + status badge, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-1) Company Logo Row — duplicate of existing `marketing/logo-clouds` (5 variants: base, base+title, grid, text wordmarks); no new work needed here
- [x] (builder-5) Person Hovercard — avatar+name/handle/role+bio+follower stats+Follow action+social links popover, opens on hover/focus, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed

<!-- Theme: Analytics -->
- [x] (builder-1) Cohort Retention Grid — 2 variants (weekly triangular + compact monthly), color-intensity cells, real table headers, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-1) Metric Date Comparison — duplicate of existing `big-number-delta-tile` (large number, trend arrow, % change, "vs last period" comparison label); no new work needed here
- [x] (builder-8) Segment Breakdown Bar — traffic-by-device stacked bar (Desktop 55/Mobile 38/Tablet 7%) w/ legend (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-6) Real-Time Visitors Map — 2 variants (geo-dot map with live pulse indicator+region row, compact region-breakdown list with bars), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-3) Event Log Table — type-coded icon rows (success/info/error), expand toggle revealing formatted JSON payload, timestamp column, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)

<!-- Theme: Dev tools -->
- [x] (builder-5) Environment Switcher — trigger w/ colored dot + dropdown listing Dev/Staging/Prod w/ dots + active checkmark, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-8) Build Status Row — 3-stage CI pipeline (Build/Test passed, Deploy running) w/ duration (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-9) Secret Reveal Field — 2 variants (reveal and copy, with rotation note) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-8) Webhook Event Row — 3 delivery states (delivered/pending/failed) w/ response code + conditional Retry (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-5) Terminal Command Palette — scrollable command/output history (role=log+aria-live) + live input w/ blinking caret, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed

<!-- Theme: Scheduling -->
- [x] (builder-3) Availability Grid — week-view time-slot grid, day/hour headers, free/busy/selected button states, legend, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-2) Booking Confirmation Card — success indicator + title, date/time/host dl w/ sr-only dt labels, Reschedule/Cancel actions, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #19)
- [x] (builder-3) Recurring Rule Builder — interval+unit select, toggleable weekday pills, 3-way end-condition radios, plain-language summary, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-1) Timezone Overlap Bar — 2 variants (two-zone + three-zone), overlap window highlighted + stated in text, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).

<!-- Theme: Forms (advanced) -->
- [x] (builder-5) Conditional Field Group — checkbox-gated indented field reveal w/ connecting rail + unchecked fallback description, DOM-removed when hidden, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-8) Multi-File Attachment Row — 3 attached files (PDF/PNG/CSV) w/ computed sizes + remove buttons (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-10) OTP Resend Timer — 2 variants (resend countdown → Resend reveal, error state w/ attempts remaining), light+dark, both dynamic transitions verified via wait+screenshot, registry+tsx generated, screenshots verified, pushed
- [x] (builder-9) Consent Checklist — 2 variants (gated submit, select-all with required/optional badges) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-5) Form Autosave Banner — amber unsaved-changes bar w/ Discard/Save + neutral all-saved confirmation w/ timestamp, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed

<!-- Theme: Finance / billing -->
- [x] (builder-2) Transaction Row — 4 transactions (software/housing/income/groceries), category icon+color per row, signed amount computed from single numeric value, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #19)
- [x] (builder-8) Budget Progress Bar — $5,420/$5,000 over-budget example w/ red state + $420 overspend label (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-7) Currency Converter — dual amount fields w/ derived conversion, swap button, rate/freshness caption, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-2) Subscription Tier Toggle — Monthly/Annual radiogroup toggle w/ Save 20% badge, price readout computed from real period state, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #19)
- [x] (builder-4) Spending Category Donut — 5-category donut, mathematically exact segments, centered total, legend w/ $ + %, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)

<!-- === WAVE 7 (deep-backlog refill, post-220) — new verticals, verified non-dupe against registry === -->

<!-- Theme: Healthcare -->
- [x] (builder-3) Appointment Slot Card — provider header w/ avatar+specialty, appointment-type badge, date/time row, reschedule/confirm actions, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-8) Vitals Stat Row — 4 readings (HR flagged out-of-range, BP/SpO2/Temp normal) w/ real isNormal flag (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-2) Medication Schedule List — 4 dose rows (taken/pending w/ Take-Skip actions/skipped-dimmed), real per-dose status state, light+dark, registry+tsx+MDX, screenshot verified (fixed a time-column text-wrap bug found during review), committed to builder-2-components (PR #19)
- [x] (builder-7) Symptom Severity Slider — 0-10 native range w/ derived descriptor label, light+dark, registry+tsx+MDX, screenshot verified (fixed invisible gradient-track CSS bug), committed + pushed (PR #5)
- [x] (builder-4) Care Timeline — 4-visit clinical timeline (clinician avatars, color-coded type badges, notes), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)

<!-- Theme: Education -->
- [x] (builder-5) Course Progress Card — SVG completion ring (computed %), title, modules-remaining count, Continue learning CTA, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-8) Quiz Question Card — HTTP status quiz, revealed state w/ correct(green)/wrong-answer(red) coloring (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-9) Lesson Playlist — 2 variants (module list, numbered with progress bar) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-1) Grade Badge Scale — 2 variants (A-F round badges + percentage pill list), green-to-red scale, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-10) Flashcard Flip — 2 variants (term/definition card w/ know-review actions, compact deck-progress card), light+dark, CSS 3D flip verified both directions via screenshot, registry+tsx generated, screenshots verified, pushed

<!-- Theme: Real estate -->
- [x] (builder-8) Property Listing Card — $685,000 3bd/2ba/1,840sqft listing w/ toggleable save heart (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-4) Map Listing Split — 4 listings + numbered map pins, hover-sync highlight (matching listing #/pin), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-1) Mortgage Calculator — 2 variants (input form + result summary), computed payment + breakdown, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-2) Amenities Grid — 4 included + 2 excluded (strikethrough+dimmed) amenities, real included flag drives both icon and label styling, light+dark, registry+tsx+MDX, screenshot verified (caught+fixed 4 icon-label mismatches pre-commit), committed to builder-2-components (PR #20)

<!-- Theme: Travel -->
- [x] (builder-7) Flight Route Card — airline+flight#, stop badge, origin/destination codes+times, duration line, route footer, fare, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-1) Booking Search Bar — 2 variants (horizontal pill + stacked card), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-3) Seat Map Selector — row-labeled seat grid w/ aisle gap, available/taken/selected states, legend, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-4) Itinerary Timeline — 2-day trip (flight/hotel/tour/dinner), type icons + time + location, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-3) Price Calendar — month grid w/ per-day fare, cheapest-day green highlight, selected-day fill, month nav, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)

<!-- Theme: Analytics / dashboard (more) -->
- [x] (builder-5) Anomaly Alert Row — metric rows w/ sparkline+expected-band, spike marker, severity badge (color+text), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-8) Conversion Rate Tile — 428/3,200 (13.4%, +1.6pp) trial-to-paid example, rate computed from counts (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-7) Attribution Bar — 4-channel stacked bar w/ matching legend and percentages, categorical fixed-hue palette, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-4) Retention Curve Chart — exponential-decay retention line (100%→~22%), shaded area, dots, 3-cohort selector, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)

<!-- Theme: Dev tools / infra (more) -->
- [x] (builder-1) Resource Usage Gauges — duplicate of existing `progress-ring-cluster` (grouped radial dials, explicitly CPU/memory/disk framing); no new work needed here
- [x] (builder-8) Deployment Timeline — 3 production deploys, Current badge + Rollback on past entries only (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-3) Feature Flag Table — Dev/Staging/Production toggle columns, per-flag rollout %, monospace flag keys, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-3) Error Rate Sparkline Row — endpoint table w/ severity-colored 24h sparkline, error-rate badge (healthy/warning/critical), light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)

<!-- Theme: Utility (more) -->
- [x] (builder-5) Cookie Preference Center — locked Necessary row + toggleable Analytics/Marketing/Personalization + Save/Accept all, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-10) Rate Us Prompt — 2 variants (positive-branch confirmation, low-rating feedback branch w/ textarea), light+dark, registry+tsx generated, screenshots verified, pushed
- [x] (builder-8) Progress Toast Group — 3 concurrent task toasts (42%/78% in-progress, 1 complete w/ Dismiss) (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-9) Empty Search Suggestions — 2 variants (popular searches, did you mean + categories) light+dark, registry.json, MDX entry, screenshots

<!-- === WAVE 8 (deep-backlog refill, post-247) — new verticals, verified non-dupe against registry === -->

<!-- Theme: Social -->
- [x] (builder-8) Social Post Card — liked-state post (248 likes) w/ avatar header, media body, like/comment/share bar (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-1) Story Ring Row — 2 variants (scrollable row + compact cluster), gradient unseen ring / muted seen ring, light+dark, registry+tsx+MDX, screenshot verified (caught+fixed a broken ring on first pass), committed+pushed (PR #16).
- [x] (builder-5) Follow Button — Follow/Following(hover-to-Unfollow, also focus-triggered)/Requested(disabled) states, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-7) Profile Stats Bar — 3-cell tappable stat row (Posts/Followers/Following), light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-8) Hashtag Trend List — 5 trends (1.2M down to 640 posts) w/ computed K/M formatting + category (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-7) Mention Notification Row — avatar+unread dot, "X mentioned you in Y", quoted snippet, timestamp, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)

<!-- Theme: Gaming -->
- [x] (builder-10) Achievement Toast — 2 variants (legendary glow popup, compact rare XP pill), light+dark, registry+tsx generated, screenshots verified, pushed
- [x] (builder-9) XP Progress Bar — 2 variants (level progress, level-up celebration) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-7) Player Card — gradient header w/ avatar+gamertag+rank badge, 3-column quick stats, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-5) Match History Row — colored border+text Win/Loss/Draw, mode/queue, monospace score, duration, relative time, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-6) Leaderboard Podium — 2 variants (3-tier podium with crown+avatars+medal colors, medal-icon ranked row list), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.

<!-- Theme: IoT / smart home -->
- [x] (builder-2) Device Toggle Tile — 4 device tiles (light/thermostat on, lock/plug off), real checkbox-driven toggle w/ status text+color, light+dark, registry+tsx+MDX, screenshot verified (caught+fixed wrong thermostat icon pre-commit), committed to builder-2-components (PR #20)
- [x] (builder-10) Thermostat Dial — 2 variants (large dial w/ +/- controls, compact room widget card), light+dark, ring math verified, registry+tsx generated, screenshots verified, pushed
- [x] (builder-8) Sensor Reading Card — freezer temp 28°F out-of-range alert vs 0-15°F safe range, warming trend (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-2) Scene Selector — 4 scene cards (Home active, Away/Movie Night/Good Morning), real radiogroup single-select state, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #20)
- [x] (builder-4) Energy Usage Bar — green-red gradient watt bar, peak marker w/ value+time, cost estimate, trend alert, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)

<!-- Theme: Logistics -->
- [x] (builder-4) Shipment Tracking Map — dashed route + origin/current/destination pins (size+icon distinct) + ETA footer, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-8) Package Status Timeline — 4-scan Portland-to-Austin shipment history, latest scan highlighted (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-3) Delivery Slot Picker — radio-card list w/ price, description, Free/Fastest badges, disabled fully-booked state, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-1) Inventory Level Row — 2 variants (detail row + multi-SKU list), reorder-threshold marker + warning badge, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-3) Fleet Status Grid — responsive vehicle tile grid, active/idle/maintenance status pills, driver assignment, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)

<!-- Theme: HR / recruiting -->
- [x] (builder-4) Candidate Pipeline Stage — hiring-stage column (count badge) w/ candidate cards (avatar/role/source tag/rating), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-7) Applicant Card — avatar+name+role, 5-star rating, resume link, stage badge, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-5) Interview Scorecard — per-competency 1-5 radiogroup ratings+notes, notes textarea, strong-hire/hire/no-hire selector, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-8) Org Headcount Chart — 4 departments w/ dashed open-roles overlay, bars proportional to real filled/open counts (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-2) PTO Balance Card — remaining-days readout + progress bar + accrued/used/pending stat row, all computed from single accrued/used/pending inputs, Request time off button, light+dark, registry+tsx+MDX, screenshot verified (caught+fixed a static-fixture math inconsistency: 9 remaining shown against 15/6/2 stats, corrected to 7), committed to builder-2-components (PR #20)

<!-- Theme: Legal / compliance -->
- [x] (builder-1) Document Signature Block — 2 variants (signer list + progress summary), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-5) Clause Accordion — numbered clauses, expand/collapse (aria-expanded+aria-controls), real-href anchor links per clause, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-3) Audit Trail Row — actor avatar, natural-language action sentence, before/after diff chip, monospace note, timestamp, destructive variant, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-9) Consent Version Banner — 2 variants (floating banner, card with changelog) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-6) Redaction Highlight — 2 variants (document paragraph with blacked-out spans+reveal toggle, masked field rows with per-row reveal icons), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.

<!-- Theme: Misc gaps -->
- [x] (builder-7) Rating Summary Header — 4.6 avg w/ computed partial-star fill + review count, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-10) Step Indicator Dots — 2 variants (minimal dot row w/ active pulse, numbered circles w/ checkmarks), light+dark, registry+tsx generated, screenshots verified, pushed

<!-- === WAVE 9 (deep-backlog refill, post-272) — new verticals, verified non-dupe against registry === -->

<!-- Theme: Restaurant / food -->
- [x] (builder-1) Menu Item Row — 2 variants (detailed row + compact list), dietary tag badges, named add buttons, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-9) Dish Card — 2 variants (menu card, order row with quantity) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-8) Order Cart Drawer — food-order list with quantity badges, per-item modifiers, computed subtotal (sum of qty×price), checkout button, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-3) Reservation Time Picker — party-size stepper, date trigger, wrapping time-chip grid (available/unavailable/selected), confirm action, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-2) Dietary Filter Chips — 5 chips (Vegan+Gluten-free selected in emerald/amber, Vegetarian/Spicy/Nut-free available), real independent multi-select aria-pressed state, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #20)
- [x] (builder-6) Kitchen Order Ticket — 2 variants (active ticket with elapsed timer+item list+Bump action, bumped/completed state with strikethrough items), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.

<!-- Theme: Fitness -->
- [x] (builder-1) Workout Set Row — 2 variants (set input grid + exercise summary list), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [x] (builder-10) Rep Counter Ring — 2 variants (rep-count ring w/ Log rep action, rest-timer ring w/ live countdown), light+dark, live tick verified via screenshot, registry+tsx generated, screenshots verified, pushed
- [x] (builder-8) Heart Rate Zone Bar — 5-zone stacked bar with widths from real time-in-zone minutes, bpm marker centered in active zone segment, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-5) Streak Calendar — flame icon+streak count, 7-day active(check)/missed(dot)/today row, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-2) Body Metrics Card — 3 metric cells (weight/BMI/body fat), trend arrow direction+color both computed from a real signed delta + per-metric increaseIsGood flag, light+dark, registry+tsx+MDX, screenshot verified (caught+fixed an internally-inconsistent arrow-direction bug pre-commit), committed to builder-2-components (PR #20)

<!-- Theme: Music -->
- [x] (builder-8) Now Playing Bar — full-width bottom-docked bar with art, title/artist, live scrubber (elapsed/duration computed), prev/play/next transport, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-7) Track List Row — 4-track list w/ index→play-icon hover swap, playing-state highlight, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-6) Equalizer Sliders — 2 variants (native vertical band sliders w/ dB range labels, fill-bar bands w/ preset dropdown), light+dark, registry+tsx generated, screenshots verified (fixed a fill-bar height collapse bug found during review), committed to builder-6-components.
- [x] (builder-8) Album Grid Card — square cover-art grid tile, hover/focus-revealed play overlay w/ descriptive aria-label, light+dark, registry+tsx+MDX, screenshot verified (rebuilt component.css to fix missing gradient utility classes), committed+pushed to PR #6.
- [x] (builder-4) Queue List — now-playing row w/ animated equalizer + reorderable up-next tracks (drag handle, remove), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)

<!-- Theme: Crypto / web3 -->
- [x] (builder-5) Wallet Connect Button — disconnected/connecting(spinner)/connected(dot+truncated address+balance+chevron) states, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-7) Token Balance Row — 3-asset wallet list w/ derived direction arrow+color, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-10) Price Ticker Strip — 2 variants (infinite scrolling multi-asset ticker, compact flash-on-update price rows), light+dark, both scroll animation + live flash verified via screenshot, registry+tsx generated, screenshots verified, pushed
- [x] (builder-3) Gas Fee Selector — 3-tier fee cards (Slow/Average/Fast) w/ ETA+cost, radio-based selection, estimated-fee summary, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)
- [x] (builder-5) NFT Card — artwork, name, collection, price, and bid button; distinct from product-card. light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-3) Transaction Confirm Sheet — large amount+fiat display, from/to monospace addresses, fee/total breakdown, cancel/confirm actions, light+dark, registry+tsx+MDX, screenshot verified, pushed to builder-3-components (PR #7)

<!-- Theme: Nonprofit / fundraising -->
- [x] (builder-6) Donation Progress Card — 2 variants (campaign card with photo+donor avatars+CTA, compact fundraiser row), light+dark, registry+tsx generated, screenshots verified (caught & fixed a broken Unsplash image URL during review), committed to builder-6-components.
- [x] (builder-9) Tiered Donation Buttons — 2 variants (grid with custom amount, card with frequency toggle) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-2) Volunteer Shift Card — role, date/time, spots-filled progress bar (computed from spotsFilled/spotsTotal), full/disabled sign-up state; light+dark, registry+tsx generated, screenshots verified, committed to builder-2-components.

<!-- Theme: Insurance -->
- [x] (builder-2) Coverage Comparison Card — 3 plan-tier cards (Basic/Standard/Premium) with deductible/premium/coverage-max rows, Standard highlighted Best value, all figures Intl.NumberFormat-computed from props; light+dark, registry+tsx generated, screenshots verified, committed to builder-2-components.
- [x] (builder-2) Claim Status Tracker — vertical timeline, submitted→review→approved/denied with dates+payout, branching outcome driven by currentStageIndex/outcome props; light+dark, registry+tsx generated, screenshots verified, committed to builder-2-components.
- [x] (builder-2) Quote Estimate Panel — coverage/deductible/term sliders with live-recalculated premium + base/deductible/term breakdown (verified via actual slider interaction in Playwright); light+dark, registry+tsx generated, screenshots verified, committed to builder-2-components.

<!-- Theme: Automotive -->
- [x] (builder-4) Vehicle Spec Card — photo + certified badge + mileage/fuel/transmission chips + price + CTA, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-8) Fuel / Charge Gauge — vertical capsule fill-level indicator with computed range estimate and low-level warning state, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-7) Trip Summary Card — header w/ route line + 2x2 stat grid (distance/duration/speed/efficiency), light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-9) Service Reminder Row — 2 variants (single reminder with progress, reminder list with urgency) light+dark, registry.json, MDX entry, screenshots

<!-- === WAVE 10 (deep-backlog refill, post-306) — frontier verticals, verified non-dupe against registry === -->

<!-- Theme: Events / ticketing -->
- [x] (builder-5) Event Ticket Card — perforated dashed-divider+notch ticket, event/date/venue/section/ticket#, white-tile QR stub, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-5) Ticket Tier Selector — quantity steppers per price tier with running total; distinct from variant-selector. light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-10) Event Countdown Hero — 2 variants (gradient hero w/ countdown tiles + RSVP, compact inline banner), light+dark, live tick verified, registry+tsx generated, screenshots verified, pushed
- [x] (builder-5) Venue Section Map — clickable stadium/venue section blocks with price legend; distinct from seat-map-selector. light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-5) Schedule Agenda List — day-grouped session rows with time, track, and speaker; distinct from itinerary-timeline. light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-7) Speaker Card — avatar+name+title, quoted talk title, X/LinkedIn/website social links, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)

<!-- Theme: Streaming / video -->
- [x] (builder-8) Video Thumbnail Card — thumbnail w/ duration badge, title, channel avatar/name, K/M-formatted view count computed from real numbers, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-8) Watch Progress Bar — video thumbnail with duration badge and resume-position overlay bar, fill computed from real watched/total minutes, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-2) Channel Header — gradient banner, avatar, K-formatted subscriber count, and a real toggling subscribe/subscribed button (verified via Playwright click); light+dark, registry+tsx generated, screenshots verified, committed to builder-2-components.
- [x] (builder-6) Live Stream Badge — 2 variants (thumbnail overlay with pulsing LIVE+viewer count, standalone header badge), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-2) Playback Speed Menu — two-panel Settings menu, checkmarked speed list + navigable Quality submenu with back button, full click-through flow verified in Playwright (speed select, submenu open, quality select, auto-return); light+dark, registry+tsx generated, screenshots verified, committed to builder-2-components.
- [x] (builder-10) Up-Next Autoplay Card — 2 variants (thumbnail card w/ countdown ring, video overlay w/ progress bar), light+dark, live countdown verified, registry+tsx generated, screenshots verified, pushed

<!-- Theme: Email client -->
- [x] (builder-7) Email List Row — unread dot + toggleable star + sender/subject/snippet + attachment icon, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed + rebased onto main (PR #26)
- [x] (builder-4) Email Reading Pane — action bar (reply/forward/archive/delete) + subject/sender/date header + body, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-5) Compose Window — minimizable message composer with to/subject/body and send; distinct from comment-composer. light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-7) Folder / Label Sidebar — 4 system folders (Inbox active w/ count badge) + 3 colored labels, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #26)
- [x] (builder-5) Thread Collapse — stacked quoted-reply chain with expand-all; distinct from comment-thread. light+dark, registry+tsx+MDX, screenshot verified, committed+pushed

<!-- Theme: Developer API console -->
- [x] (builder-8) Endpoint Method Row — 5-row REST reference (GET/POST/PUT/PATCH/DELETE) with color-coded method pills and monospace paths, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-4) Request Builder — method/URL/Send bar + Params/Headers/Body/Auth tabs + editable header rows, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-5) Response Viewer — status badge, timing, and collapsible JSON body with copy; distinct from json-tree-viewer. light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-8) API Rate Limit Meter — endpoint quota bar with computed usage percent, amber near-limit state (color+text), reset-time note, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-10) Code Language Tabs — 2 variants (cURL/JS/Python request tabs w/ copy, compact npm/pnpm/yarn switcher), light+dark, CSS-only radio+peer tab switching functionally verified via click+screenshot (fixed a peer-sibling structure bug found during build), registry+tsx generated, screenshots verified, pushed

<!-- Theme: Data pipeline / ETL -->
- [x] (builder-4) Pipeline Flow Node — 2 connected workflow nodes (ports, icon, status: Success/pulsing Running), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to builder-4-components (PR #17)
- [x] (builder-8) Job Run Row — 3-state (succeeded/running/failed) run summary row w/ formatted duration, toLocaleString record counts, logs link, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-8) Schema Field List — 5-column users table w/ PK icon marker, type badges, nullable/not-null states, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-9) Data Quality Score — 2 variants (score ring with failing rules, compact summary bar) light+dark, registry.json, MDX entry, screenshots
- [x] (builder-5) Column Mapping Rows — source→target field mapping with dropdowns and auto-match; distinct from import-wizard. light+dark, registry+tsx+MDX, screenshot verified, committed+pushed

<!-- Theme: Survey builder -->
- [~] (builder-4) Question Type Palette — draggable question-type cards (MC, rating, text, scale); distinct from query-builder.
- [x] (builder-6) Likert Scale Row — 2 variants (single-question 5-point scale with endpoint labels, multi-row survey table with SD/D/N/A/SA headers), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-2) Survey Progress Header — "Question 3 of 8" bar, fill % computed from currentQuestion/totalQuestions, Back disables at first question and Next relabels to Submit at last; light+dark, registry+tsx generated, screenshots verified, committed to builder-2-components.
- [x] (builder-2) Response Summary Bar — 4-option satisfaction survey results, thin progress bars with % + raw count computed from real option.count values and total; light+dark, registry+tsx generated, screenshots verified, committed to builder-2-components.
- [x] (builder-5) Matrix Question Grid — rows × columns radio matrix for bulk rating; distinct from notification-preferences-grid. light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-5) Logic Branch Row — "if answer = X go to Y" conditional-flow rule row; distinct from conditional-field-group. light+dark, registry+tsx+MDX, screenshot verified, committed+pushed

<!-- === WAVE 11 (deep-backlog refill, post-331) — new verticals, verified non-dupe against registry === -->

<!-- Theme: POS / retail -->
- [x] (builder-2) POS Keypad — numeric keypad + quick-cash buttons, change due computed live from tendered−total (verified via Playwright click: $20 cash on $18.50 total → $1.50 change), disabled Charge when short; light+dark, registry+tsx generated, screenshots verified, committed to builder-2-components.
- [~] (builder-9) Receipt Preview — itemized thermal-receipt layout with tax/total and footer; distinct from invoice-table.
- [x] (builder-8) Barcode Scan Row — dense POS scan-log rows w/ SKU, qty, computed line total (unit×qty), per-item void action, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-8) Tip Selector — preset %-tip buttons w/ computed tip/total/per-person split (real math from bill×percent÷splitCount), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-8) Cash Drawer Summary — expected/counted totals w/ computed signed variance, balanced/over/short states (color+text), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.

<!-- Theme: Banking -->
- [x] (builder-7) Account Balance Card — masked balance with show/hide, account number, and quick actions; distinct from token-balance-row. Light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #26).
- [~] (builder-7) Transfer Form — from/to account selectors, amount, and schedule; distinct from currency-converter.
- [x] (builder-8) Statement Row — bank-statement table w/ computed cumulative running-balance column (4 transactions, starting $2,450 to $4,122.05), light+dark, registry+tsx+MDX, screenshot verified, committed+pushed to PR #6.
- [x] (builder-2) Card Freeze Toggle — bank-card visual with grayscale+Frozen overlay driven by the same toggle state as the switch and status text (caught+fixed a has-checked CSS bug where checkbox was a sibling not descendant of the card, switched to JS-driven classList); light+dark, registry+tsx generated, screenshots verified, committed to builder-2-components.
- [ ] Spending Insights Bar — month category bars with over/under-average markers; distinct from budget-progress-bar.

<!-- Theme: Telecom -->
- [~] (builder-10) Data Usage Ring — GB used vs plan with days-left projection; distinct from api-rate-limit-meter.
- [ ] Plan Comparison Row — talk/text/data columns with checkmarks and price; distinct from feature-comparison-matrix.
- [~] (builder-8) Signal Strength Bars — animated bars with network-type label (5G/LTE); distinct from connection-status-pill.
- [ ] Call Log Row — contact, direction icon, duration, and time with callback; distinct from match-history-row.

<!-- Theme: Gov / civic -->
- [ ] Form Field Wizard (gov) — long official form split into review-able sections with save-progress; distinct from stepper-wizard.
- [ ] Status Application Tracker — submitted→under-review→decision government stepper with case number; distinct from claim-status-tracker.
- [ ] Public Notice Card — dated official announcement with category badge and read-more; distinct from announcement-feed-item.
- [ ] Ballot Option List — candidate/measure rows with select and info expander; distinct from poll-vote-card.

<!-- Theme: Agriculture / IoT -->
- [ ] Field Sensor Map — plot grid with per-zone moisture/temp color coding; distinct from fleet-status-grid.
- [ ] Crop Growth Timeline — planting→harvest stage tracker with dates and weather; distinct from care-timeline.
- [ ] Irrigation Schedule Row — zone with on/off, duration, and next-run; distinct from medication-schedule-list.

<!-- Theme: Manufacturing -->
- [ ] Production Line Status — station tiles with running/stopped/fault and throughput; distinct from health-check-grid.
- [ ] OEE Gauge Trio — availability/performance/quality gauges with overall score; distinct from activity-ring-trio.
- [ ] Work Order Card — order with part, quantity, due date, and stage progress; distinct from milestone-card.

<!-- Theme: Hospitality -->
- [ ] Room Availability Grid — room-rows × date-columns booked/free calendar; distinct from availability-grid.
- [ ] Guest Check-In Card — reservation with guest, room, dates, and check-in/out actions; distinct from booking-confirmation-card.
- [ ] Amenity Request Row — service request with status, room, and time; distinct from approval-request-card.

<!-- Theme: Media / misc verticals -->
- [ ] Podcast Episode Row — episode art, title, duration, play, and download; distinct from track-list-row.
- [ ] Sports Scoreboard — two-team score with period/clock and possession indicator; distinct from stats.
- [ ] Live Match Timeline — game events (goals/cards) on a minute-based timeline; distinct from timelines.
- [ ] Recipe Ingredient List — checkable ingredients with quantity scaler; distinct from task-checklist.
- [ ] Recipe Step Card — numbered cooking step with timer and image; distinct from lesson-playlist.
- [ ] Photo EXIF Panel — image metadata rows (camera/lens/ISO/aperture) with histogram; distinct from media.
- [ ] Photo Grid Selectable — multi-select photo grid with checkmarks and count bar; distinct from image-gallery-lightbox.

<!-- === WAVE 12 (deep-backlog refill, post-356) — state/variant framings + remaining gaps, verified non-dupe === -->

<!-- Theme: State variants (distinct compositions, not restyles) -->
- [ ] Table Empty State — full-width in-table zero-rows panel with illustration and add-first-row CTA; distinct from empty-states (table-embedded).
- [ ] Table Loading Skeleton — shimmering placeholder rows matching column layout; distinct from skeleton-card-list (table grid).
- [ ] Table Error State — in-table failure row with reason and retry spanning columns; distinct from retry-error-state.
- [ ] Form Success Panel — post-submit confirmation card with next-steps actions; distinct from magic-link-sent-state.
- [ ] Partial Failure Summary — batch-result banner showing N succeeded / M failed with expandable errors; absent from library.
- [ ] Optimistic Pending Row — list row in a "sending…" ghost state with retry-on-fail; distinct from inline-add-row.

<!-- Theme: Density / size framings -->
- [ ] Compact Data Table — high-density zebra table with condensed row height and sticky header; distinct from tables.
- [ ] Comfortable List Row — spacious two-line list item with leading media and trailing meta; distinct from media-object-row.
- [ ] Mini Stat Chip — inline label+value+trend micro-stat for toolbars; distinct from stat-tile.
- [ ] Expanded Detail Card — large hero-metric card with secondary stats grid; distinct from big-number-delta-tile.

<!-- Theme: Mobile compositions -->
- [ ] Mobile List Section — grouped iOS-style inset list with section headers and chevrons; distinct from settings-nav-list.
- [ ] Mobile Filter Sheet — bottom-sheet full-screen filter form with apply/reset footer; distinct from faceted-search-sidebar.
- [ ] Mobile Segmented Tabs — sticky top segmented control that swaps paged content; distinct from tab-bar-mobile.
- [ ] Mobile Form Stepper — one-field-per-screen guided flow with progress dots; distinct from multi-step-progress.
- [ ] Swipeable Card Carousel — snap-scrolling horizontal card row with peek and dots; distinct from carousel.

<!-- Theme: RTL / i18n -->
- [ ] RTL Layout Demo — mirrored nav+content composition showcasing logical-property flipping; absent from library.
- [ ] Bidirectional Text Field — input handling mixed LTR/RTL with direction auto-detect; distinct from inputs.
- [ ] Number Format Preview — locale-aware number/currency/date preview rows; distinct from currency-input.

<!-- Theme: Interaction primitives -->
- [ ] Drag Handle Row — reorderable list row with grip handle and drop indicator; distinct from queue-list.
- [ ] Resizable Column Header — table header with drag-to-resize and sort caret; distinct from column-visibility-menu.
- [ ] Long-Press Menu — press-and-hold context menu with ripple feedback (mobile); distinct from context menu.
- [ ] Multi-Range Timeline Select — drag to select a span across a timeline with handles; distinct from timeline-scrubber.

<!-- Theme: Content / marketing (dashboard-adjacent) -->
- [ ] Feature Highlight Row — icon + title + description alternating feature block; distinct from media-object-row.
- [ ] Testimonial Card — quote, avatar, name, role, and rating; distinct from social-post-card.
- [ ] Logo Cloud Grid — responsive customer-logo grid with subtle dividers; distinct from amenities-grid.
- [ ] Stat Highlight Band — full-width row of 3–4 headline metrics with labels; distinct from stats.
- [ ] CTA Banner Card — gradient promo card with heading, subtext, and action buttons; distinct from announcement-banner.

<!-- Theme: Remaining vertical gaps -->
- [ ] Weather Forecast Row — 7-day forecast strip with icons, hi/lo, and precip %; distinct from weather-widget.
- [ ] Sports Standings Table — ranked team table with W/L/streak and rank movement; distinct from leaderboard-list.
- [ ] Dating Profile Card — swipe-card with photo, name/age, bio, and interest tags; distinct from card-stack.
- [ ] Menu Category Tabs — sticky food-category tab strip that scrolls the menu; distinct from tab-overflow-scroller.
- [ ] Nutrition Facts Panel — labeled nutrition table with % daily-value column; distinct from tables.