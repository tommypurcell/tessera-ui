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
- [~] (builder-5) Column Visibility Menu — dropdown of toggleable table columns with show/hide checkboxes and reorder handles; companion control for data tables.
- [~] (builder-9) Saved Views Bar — tab-like row of named filter/sort presets with add/rename/star affordances; distinct from tabs (persisted query state).
- [~] (builder-3) Query Builder — visual AND/OR condition group builder with field/operator/value rows and nesting; power-filter UI absent from library.
- [~] (builder-2) Faceted Search Sidebar — collapsible filter groups with counts, checkboxes, and range facets; e-commerce/search staple distinct from data-filter-bar.
- [~] (builder-4) Rich Tooltip Chart — hover tooltip card showing series color swatches, values, and delta for a chart datapoint; pairs with charts.
- [~] (builder-8) Progress Ring Cluster — grouped radial progress dials with center labels for multi-metric dashboards; distinct from progress-bars (radial, grouped).
- [ ] Sankey Flow Diagram — node-and-flow visualization for conversion/traffic routing with weighted links; distinct from funnel-chart.
- [ ] Org Chart — hierarchical node tree with avatar cards and connector lines; distinct from tree-view (person/reporting semantics).
- [ ] Wizard Progress Rail — vertical stepper with per-step status, descriptions, and click-to-jump; distinct from stepper-wizard (nav rail, not form shell).
- [ ] Slide-Over Form — right-edge panel with scrollable form body and sticky footer actions; distinct from drawer (form-specialized layout).
- [x] (builder-7) Confirmation Input — 2 states (disabled/awaiting, matched/confirmed) w/ live phrase-match validation, light+dark, registry+tsx+MDX, screenshot verified, committed + pushed (PR #5)
- [ ] Field Array Editor — repeatable add/remove form-row group with drag reorder for lists of inputs; common form pattern absent from library.
- [~] (builder-7) Currency Input — masked money field with symbol prefix, thousands grouping, and locale/currency selector; distinct from inputs.
- [ ] Phone Number Input — country-code flag dropdown + formatted national number field; distinct from inputs.
- [x] (builder-6) Time Picker — 2 variants (scrolling hour/minute/period column picker, compact dropdown listbox), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [x] (builder-6) Duration Input — 2 variants (segmented hour/minute fields, quick-preset chips with disabled custom fields), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [ ] Slider Range Histogram — dual-thumb range slider over a value histogram for price/date filtering; distinct from range-inputs and timeline-scrubber.
- [~] (builder-10) Toast Action Undo — snackbar with a countdown ring and inline Undo action for reversible operations; distinct from toast-stack (single actionable pattern).
- [ ] Status Page Board — grouped service list with operational/degraded/outage pills and uptime bars; distinct from stats and activity-feed.
- [ ] Changelog Entry — dated release card with version badge, category tags, and grouped bullet lists; distinct from timelines and activity-feed.
- [ ] Quota Warning Banner — inline threshold-crossing alert with usage bar and upgrade CTA; distinct from usage-meter (alerting) and announcement-banner.
- [ ] Split Pane Diff — side-by-side scroll-synced two-column layout for comparing documents; distinct from diff (framework/layout, not line rendering).
- [ ] Emoji / Reaction Picker — searchable grid popover with category tabs and recents; pairs with comment-thread, absent from library.