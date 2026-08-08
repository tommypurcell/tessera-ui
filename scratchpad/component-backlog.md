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
- [~] (builder-4) Bottom Sheet Nav — mobile draggable sheet with snap points and handle; distinct from drawer (mobile snap behavior).
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
- [ ] Candlestick Chart — OHLC financial chart with volume strip; absent from library.
- [ ] Choropleth Legend — gradient/step map legend with value buckets; pairs with map-marker-popup, absent from library.
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
- [ ] Video Player — custom controls bar (play/scrub/volume/fullscreen/speed) over a poster frame; distinct from timeline-scrubber (full player chrome).
- [x] (builder-6) Audio Player — 2 variants (waveform bar player with play/mute, podcast player with cover art, skip controls, and speed badge), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [ ] Image Gallery Lightbox — thumbnail grid opening a full-screen viewer with prev/next and caption; distinct from carousel and media.
- [ ] Image Cropper — draggable crop frame with aspect presets and zoom slider; absent from library.
- [x] (builder-2) Avatar Uploader — circular drop-zone, hover camera overlay, real file input driving live object-URL preview, Replace/Remove actions, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [x] (builder-2) Media Object Row — 3 podcast-episode rows (thumbnail, truncating title/meta, trailing play button), reusable renderAction slot for custom trailing controls, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [ ] PDF Page Thumbnails — scrollable page-thumbnail rail with active-page highlight; absent from library.

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
- [~] (builder-5) Tab Bar (mobile) — fixed bottom icon+label nav with active indicator and badge; distinct from dock (mobile app bar).
- [x] (builder-1) Pull-to-Refresh — 2 variants (pull state + refreshing state), role=status/aria-live, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed (PR #16).
- [ ] Swipe Action Row — list row revealing archive/delete actions on horizontal swipe; distinct from bulk-action-bar.
- [x] (builder-7) Segmented Page Control — 5-dot indicator w/ elongated active pill, real button/tablist semantics, light+dark, registry+tsx+MDX, screenshot verified (fixed invisible-on-canvas contrast bug found during review), committed + pushed (PR #5)
- [~] (builder-7) Action Sheet — mobile bottom list of grouped actions with cancel; distinct from bottom-sheet-nav (action list).

<!-- Theme: Data-viz (more) -->
- [x] (builder-8) Donut Chart — 4-segment traffic-sources ring, computed center total + legend via SVG stroke-dasharray (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [ ] Stacked Area Chart — multi-series cumulative trend with legend toggle; absent from charts set.
- [ ] Gauge Chart — semicircular needle gauge with threshold zones; distinct from bullet-chart and progress.
- [ ] Treemap — nested proportional rectangles with labels for hierarchical size; absent from library.
- [x] (builder-8) Waterfall Chart — 6-step Q3 revenue bridge, running-total bar positions computed from deltas (tsx light+dark, html light+dark, registry.json, MDX); fixed a flex items-end height bug found during screenshot review; screenshot verified light+dark, pushed to PR #6
- [ ] Calendar Heat Legend Chart — month grid with value intensity and axis labels; distinct from heatmap-calendar (chart framing).

<!-- Theme: Commerce / finance -->
- [~] (builder-8) Invoice Table — line-item table with subtotal/tax/total footer and status badge; distinct from tables (invoice semantics).
- [x] (builder-6) Payment Method Card — 2 variants (single saved card, selectable list with add-new affordance), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [ ] Discount Code Field — promo input with apply button and applied/invalid states; distinct from copy-field.
- [x] (builder-2) Order Status Tracker — 4-stage horizontal stepper (Placed/Shipped complete, Out for delivery current w/ pulse ring, Delivered upcoming w/ est. date), state computed from a single currentStepIndex, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components
- [ ] Refund Request Panel — reason select, amount, and note with submit; absent from library.

<!-- Theme: Utility / misc -->
- [x] (builder-1) Copyable Code Snippet — duplicate of existing `code-editor-block` variant 2 "File name with copy action" (file-name header, Copy button, syntax-highlighted numbered lines); no new work needed here
- [x] (builder-5) QR Code Card — QR tile (white bg, always-scannable contrast) + caption + encoded value text + Download/Copy link actions, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [x] (builder-10) Countdown Ring Timer — 2 variants (large radial timer w/ mm:ss center, compact inline ring timer w/ action row), light+dark, registry+tsx generated, screenshots verified (live tick confirmed), pushed
- [x] (builder-5) Feature Flag Toggle Row — flag key + env pills (Dev/Staging/Prod) + rollout % status + enable switch, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [~] (builder-2) Breadcrumb Page Header — title + breadcrumb + action buttons page-header composite; distinct from breadcrumbs (header block).
- [ ] Filter Chip Overflow — chip row that collapses extras into a "+N" popover on narrow widths; distinct from data-filter-bar.

<!-- === WAVE 5 (deep-backlog refill, post-176) — themed batches, verified non-dupe against registry === -->

<!-- Theme: Layout / structure -->
- [~] (builder-3) Split View Layout — resizable master-detail two-pane shell with a collapsible list side; distinct from resizable (app layout composition).
- [~] (builder-10) Sticky Section Header — list header that pins to the top while its group scrolls; absent from library.
- [ ] Masonry Grid — variable-height card grid with balanced columns; distinct from grids (masonry flow).
- [ ] Sidebar Layout Shell — fixed sidebar + topbar + content app frame with collapse; distinct from dashboard-sidebar (full shell).
- [ ] Card Stack — swipeable stacked-card deck (Tinder-style) with accept/reject; absent from library.
- [ ] Expandable Detail Row — table row that expands inline to reveal a detail panel; distinct from tables and accordions.

<!-- Theme: Feedback / status (more) -->
- [ ] Progress Steps Toast — long-running-task toast showing sub-step progress; distinct from toast-stack.
- [ ] Rate Limit Notice — cooldown banner with countdown to retry availability; distinct from quota-warning-banner.
- [ ] Health Check Grid — service tiles with green/yellow/red status and latency; distinct from status-page-board (compact grid).
- [ ] Sync Status Row — last-synced timestamp with spinning/success/error icon and manual sync; absent from library.
- [ ] Maintenance Mode Screen — full-page scheduled-downtime notice with ETA; distinct from error-page.

<!-- Theme: Data entry (more) -->
- [ ] Multi-Step Form Progress — top progress bar + step labels wrapping a paged form; distinct from stepper-wizard (progress-header variant).
- [ ] Inline Add Row — table footer "add new" row that turns into editable inputs; distinct from data-grid-cell-editor.
- [ ] Slug Input — text field that live-generates a URL slug with editable override; absent from library.
- [ ] Tag Filter Group — toggleable tag pills for multi-facet selection; distinct from tag-input (filter mode).
- [ ] Rating Scale (NPS) — 0–10 numeric scale row with detractor/passive/promoter coloring; distinct from rating-input-emoji.
- [ ] File Drop Preview List — drop zone plus per-file upload rows with progress and cancel; distinct from file-uploaders (list + progress).

<!-- Theme: Navigation (more) -->
- [ ] Breadcrumb Dropdown Overflow — long breadcrumb trail collapsing middle segments into a menu; distinct from breadcrumbs.
- [ ] Sidebar Search Filter — sidebar-top input that live-filters the nav items below; absent from library.
- [ ] Step Progress Sidebar — vertical numbered nav with completion checks for multi-page flows; distinct from wizard-progress-rail (persistent nav).
- [ ] Tab Overflow Scroller — horizontally scrollable tab strip with edge fade and arrows; distinct from tabs.
- [ ] Recent / Pinned Switcher — workspace/project switcher with pinned + recent sections; distinct from dropdown.

<!-- Theme: Dashboard widgets (more) -->
- [ ] Activity Ring Trio — three concentric goal rings (Apple-Fitness style); distinct from progress-ring-cluster (concentric).
- [ ] Metric Trend Grid — grid of small KPI + sparkline cells for an at-a-glance board; distinct from metric-sparkline-card (grid).
- [ ] Top Movers List — gainers/losers rows with % change and direction color; distinct from leaderboard-list.
- [ ] Live Counter Tile — animated ticking number tile for realtime metrics; distinct from big-number-delta-tile.
- [ ] Comparison Stat Pair — two side-by-side metrics with a vs divider and winner highlight; absent from library.

<!-- Theme: Collaboration / content (more) -->
- [ ] Approval Request Card — pending item with approve/reject actions and requester meta; absent from library.
- [ ] Version History List — timestamped revision rows with author, diff link, and restore; distinct from changelog-entry.
- [ ] Task Checklist — nested checkable subtasks with progress count and add-item; distinct from onboarding-checklist.
- [ ] Poll / Vote Card — options with vote bars, counts, and select-to-vote; absent from library.
- [ ] Announcement Feed Item — pinned/starred post card with author, body, and reactions; distinct from activity-feed.

<!-- Theme: Utility (more) -->
- [ ] Timezone Picker — searchable tz dropdown showing offset and current time; distinct from time-picker.
- [ ] Language Switcher — flag/label locale dropdown with checkmark on active; absent from library.
- [ ] Theme Toggle Switch — animated light/dark/system three-way control; distinct from toggles.
- [ ] Keyboard Focus Ring Demo — accessibility focus-order showcase with visible ring states; absent from library.
- [ ] Copy Share Link Row — read-only link with copy + expiry/permission dropdown; distinct from copy-field and share-dialog.