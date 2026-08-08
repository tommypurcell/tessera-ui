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
- [~] (builder-4) Calendar Heat Legend Chart — month grid with value intensity and axis labels; distinct from heatmap-calendar (chart framing).

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
- [ ] Sidebar Layout Shell — fixed sidebar + topbar + content app frame with collapse; distinct from dashboard-sidebar (full shell).
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
- [~] (builder-1) File Drop Preview List — drop zone plus per-file upload rows with progress and cancel; distinct from file-uploaders (list + progress).

<!-- Theme: Navigation (more) -->
- [x] (builder-7) Breadcrumb Dropdown Overflow — 2 states (collapsed w/ … trigger, expanded dropdown of hidden segments), real segment-count collapse logic, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-7) Sidebar Search Filter — 2 states (highlighted-match results, no-matches empty state), real substring filter + <mark> highlight logic, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [ ] Step Progress Sidebar — vertical numbered nav with completion checks for multi-page flows; distinct from wizard-progress-rail (persistent nav).
- [~] (builder-9) Tab Overflow Scroller — horizontally scrollable tab strip with edge fade and arrows; distinct from tabs.
- [x] (builder-2) Recent / Pinned Switcher — search field + Pinned/Recent sections w/ live filter, active workspace aria-current + checkmark, Create workspace footer action, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components. NOTE: PR #13 was merged mid-session; opened new PR #18 for post-merge commits (Health Check Grid, this component).

<!-- Theme: Dashboard widgets (more) -->
- [x] (builder-10) Activity Ring Trio — 2 variants (large concentric ring trio w/ legend, compact inline ring trio w/ summary), light+dark, ring circumference/offset math verified against Python, registry+tsx generated, screenshots verified, pushed
- [ ] Metric Trend Grid — grid of small KPI + sparkline cells for an at-a-glance board; distinct from metric-sparkline-card (grid).
- [x] (builder-7) Top Movers List — 4-ticker list (2 gainers/2 losers) w/ derived direction arrow+color from sign, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [x] (builder-10) Live Counter Tile — 2 variants (large tile w/ pulse indicator + ticking number, compact inline live-count row), light+dark, live-tick behavior verified via screenshot, registry+tsx generated, screenshots verified, pushed
- [x] (builder-8) Comparison Stat Pair — This month (1,284, leading) vs Last month (972), winner computed from real values (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6

<!-- Theme: Collaboration / content (more) -->
- [x] (builder-2) Approval Request Card — requester + resource + note + Pending/Approved/Rejected badge (color+text), Approve/Reject actions resolve to real state and disappear, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #18)
- [x] (builder-2) Version History List — 4 revision rows (current w/ badge, 3 prior w/ View diff + Restore actions computed from isCurrent flag), light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #18)
- [x] (builder-8) Task Checklist — flat checkable list w/ computed N/M complete count + Enter-to-add task input (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-8) Poll / Vote Card — click-to-vote poll w/ computed percentage-bar results view, 4-option framework poll demo (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [~] (builder-10) Announcement Feed Item — pinned/starred post card with author, body, and reactions; distinct from activity-feed.

<!-- Theme: Utility (more) -->
- [~] (builder-2) Timezone Picker — searchable tz dropdown showing offset and current time; distinct from time-picker.
- [x] (builder-2) Language Switcher — 5-locale listbox (flag + native-language label), active locale bolded w/ checkmark, real selection state, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #18)
- [x] (builder-5) Theme Toggle Switch — real radio-group 3-way Light/Dark/System control, icon+label, selected pill background, light+dark, registry+tsx+MDX, screenshot verified, committed+pushed
- [ ] Keyboard Focus Ring Demo — accessibility focus-order showcase with visible ring states; absent from library.
- [x] (builder-2) Copy Share Link Row — read-only link field, Copy button w/ real navigator.clipboard write + "Copied!" text confirmation, permission select, expiry label, light+dark, registry+tsx+MDX, screenshot verified, committed to builder-2-components (PR #18)

<!-- === WAVE 6 (deep-backlog refill, post-203) — specialized domains, verified non-dupe against registry === -->

<!-- Theme: Project management -->
- [ ] Sprint Burndown Chart — ideal vs actual remaining-work line over a sprint with today marker; absent from library.
- [ ] Board Swimlane — horizontal grouped lane spanning multiple status columns with a lane header; distinct from kanban column.
- [x] (builder-8) Task Priority Badge Set — 4-level Urgent/High/Medium/Low badges, icon+color+label bundled per level (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [x] (builder-8) Effort Estimate Chips — Fibonacci story-point radiogroup (1/2/3/5/8/13/?), 5 selected (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [~] (builder-7) Dependency Link Row — "blocks / blocked by" relationship row with linked-item chips; absent from library.
- [~] (builder-6) Milestone Marker Card — dated goal card with progress and linked-task count; distinct from timelines.

<!-- Theme: CRM / people -->
- [x] (builder-8) Contact Card — initials avatar + name/role/company + conditional call/email/message icon buttons (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [ ] Deal Pipeline Stage — value-weighted column with deal cards and stage total; distinct from kanban (CRM semantics).
- [ ] Lead Score Meter — 0–100 fit/intent score with segmented color bands; distinct from bullet-chart.
- [ ] Company Logo Row — labeled customer/partner logo strip with grayscale hover; absent from library.
- [ ] Person Hovercard — expanded profile popover with stats and social links; distinct from hover-card (person-rich).

<!-- Theme: Analytics -->
- [ ] Cohort Retention Grid — triangular week/day retention heatmap with % cells; distinct from heatmap-calendar.
- [ ] Metric Date Comparison — current vs previous period overlay with % delta callout; distinct from big-number-delta-tile.
- [x] (builder-8) Segment Breakdown Bar — traffic-by-device stacked bar (Desktop 55/Mobile 38/Tablet 7%) w/ legend (tsx light+dark, html light+dark, registry.json, MDX); screenshot verified light+dark, pushed to PR #6
- [ ] Real-Time Visitors Map — live active-user count with a mini geo-dot map; absent from library.
- [~] (builder-3) Event Log Table — timestamped analytics events with type icon and expandable payload; distinct from log-viewer.

<!-- Theme: Dev tools -->
- [~] (builder-5) Environment Switcher — dev/staging/prod dropdown with colored env indicator; distinct from recent/pinned switcher.
- [~] (builder-8) Build Status Row — pipeline stage pills (queued→running→passed/failed) with duration; distinct from status-page-board.
- [ ] Secret Reveal Field — masked value with hold-to-reveal and copy, plus rotation note; distinct from api-key-manager.
- [ ] Webhook Event Row — event name, delivery status, response code, and retry action; absent from library.
- [ ] Terminal Command Palette — inline command runner with history and output pane; distinct from terminal-blocks and command.

<!-- Theme: Scheduling -->
- [ ] Availability Grid — bookable time-slot grid with free/busy/selected states; distinct from event-calendar.
- [ ] Booking Confirmation Card — appointment summary with date/time, host, and reschedule/cancel; absent from library.
- [ ] Recurring Rule Builder — "repeats every N days/weeks on…" schedule editor; distinct from query-builder.
- [ ] Timezone Overlap Bar — visual working-hours overlap across two zones; distinct from timezone picker.

<!-- Theme: Forms (advanced) -->
- [ ] Conditional Field Group — form section that shows/hides based on a controlling input; absent from library.
- [ ] Multi-File Attachment Row — attached-file chips with size, type icon, and remove; distinct from file-uploaders.
- [ ] OTP Resend Timer — code-entry footer with resend countdown and attempt counter; distinct from InputOTP.
- [x] (builder-9) Consent Checklist — 2 variants (gated submit, select-all with required/optional badges) light+dark, registry.json, MDX entry, screenshots
- [ ] Form Autosave Banner — sticky "changes saved / unsaved" bar with save/discard; distinct from save-status-indicator.

<!-- Theme: Finance / billing -->
- [ ] Transaction Row — dated debit/credit row with category icon, merchant, and amount sign color; distinct from tables.
- [ ] Budget Progress Bar — spent vs budget with over-budget red overflow; distinct from progress-bars and usage-meter.
- [ ] Currency Converter — dual amount fields with rate and swap button; distinct from currency-input.
- [ ] Subscription Tier Toggle — monthly/annual billing switch with savings badge; distinct from theme-toggle-switch.
- [ ] Spending Category Donut — expense breakdown donut with legend and total in center; distinct from donut-chart (finance framing).

<!-- === WAVE 7 (deep-backlog refill, post-220) — new verticals, verified non-dupe against registry === -->

<!-- Theme: Healthcare -->
- [ ] Appointment Slot Card — provider + time + type card with book/reschedule; distinct from booking-confirmation (list slot).
- [ ] Vitals Stat Row — labeled vital signs (HR/BP/SpO2) with normal-range coloring; distinct from stats.
- [ ] Medication Schedule List — dose rows with time, quantity, and taken/skip toggle; absent from library.
- [ ] Symptom Severity Slider — labeled 0–10 pain/severity scale with descriptors; distinct from range-inputs.
- [ ] Care Timeline — patient-history events with clinician avatars and visit types; distinct from timelines (clinical framing).

<!-- Theme: Education -->
- [ ] Course Progress Card — lesson completion ring with modules-remaining and continue CTA; distinct from goal-progress-card.
- [ ] Quiz Question Card — prompt with selectable answer options and correct/incorrect reveal; absent from library.
- [ ] Lesson Playlist — ordered lesson rows with duration, lock, and completed checks; distinct from task-checklist.
- [ ] Grade Badge Scale — A–F / percentage grade pill with color scale; distinct from badges.
- [ ] Flashcard Flip — front/back card with flip animation and know/review actions; distinct from card-stack.

<!-- Theme: Real estate -->
- [ ] Property Listing Card — photo, price, beds/baths/sqft specs, and save; distinct from product-card (property specs).
- [ ] Map Listing Split — map pane + scrollable listing list with hover-sync highlight; distinct from split-view-layout.
- [ ] Mortgage Calculator — price/down/rate/term inputs with monthly-payment output; distinct from currency-converter.
- [ ] Amenities Grid — icon+label feature grid with included/excluded states; distinct from grids.

<!-- Theme: Travel -->
- [ ] Flight Route Card — origin→destination with times, duration, stops, and airline; absent from library.
- [ ] Booking Search Bar — location + date-range + guests combined search widget; distinct from data-filter-bar.
- [ ] Seat Map Selector — grid of seats with available/taken/selected and legend; absent from library.
- [ ] Itinerary Timeline — day-grouped trip events with time, location, and type icons; distinct from timelines.
- [ ] Price Calendar — month grid with per-day fare and cheapest-day highlight; distinct from mini-calendar-widget.

<!-- Theme: Analytics / dashboard (more) -->
- [ ] Anomaly Alert Row — metric with expected-band, spike marker, and severity; absent from library.
- [ ] Conversion Rate Tile — rate % with numerator/denominator and trend; distinct from big-number-delta-tile.
- [ ] Attribution Bar — channel contribution stacked bar with % labels; distinct from segment-breakdown-bar.
- [ ] Retention Curve Chart — decaying % line over days-since-signup with cohort selector; distinct from cohort-retention-grid.

<!-- Theme: Dev tools / infra (more) -->
- [ ] Resource Usage Gauges — CPU/memory/disk radial gauges row; distinct from gauge-chart (grouped infra).
- [ ] Deployment Timeline — release events with commit, author, env, and rollback; distinct from version-history-list.
- [ ] Feature Flag Table — flags with environment columns, rollout %, and toggle per env; distinct from feature-flag-toggle-row.
- [ ] Error Rate Sparkline Row — endpoint rows with error % and inline trend; distinct from trend-sparkbar-row (error framing).

<!-- Theme: Utility (more) -->
- [ ] Cookie Preference Center — categorized consent toggles with save/accept-all; distinct from cookie banner.
- [ ] Rate Us Prompt — inline star prompt with dismiss and feedback branch; distinct from rating-input-emoji.
- [ ] Progress Toast Group — multiple concurrent task-progress toasts in a stack; distinct from toast-stack (progress-typed).
- [ ] Empty Search Suggestions — no-results view offering popular/related query chips; distinct from no-results-search-state.