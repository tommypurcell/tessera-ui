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
- [~] (builder-4) Calendar Event Grid — week/day view with time-slotted event blocks, overlap handling, and current-time indicator; the scheduling surface `calendar` (date-picker) doesn't cover.
- [~] (builder-5) Gantt Bar Chart — horizontal project timeline with dependency arrows, milestone diamonds, and today marker; distinct from timelines and timeline-scrubber.
- [ ] Code Editor Block — syntax-highlighted panel with line numbers, gutter, active-line highlight, and language tab; richer than static `terminal-blocks`.
- [~] (builder-3) JSON Tree Viewer — collapsible key/value explorer with type coloring and expand-all/collapse-all; distinct from generic tree-view (data-structure semantics).
- [ ] Log Viewer — virtualized monospace stream with severity coloring, level filter chips, and auto-scroll toggle; debugging staple absent from library.
- [ ] Comment Thread — nested reply chain with avatars, timestamps, reactions, and a composer footer; distinct from flat chat-bubbles.
- [ ] Mention Textarea — composer with @-mention autocomplete popover and inline highlighted tokens; distinct from tag-input and plain textareas.
- [ ] Rich Text Toolbar — WYSIWYG formatting bar (bold/italic/list/link/heading dropdown) with active-state buttons; pairs with editors, not covered by toolbar.
- [ ] Heatmap Calendar — GitHub-style contribution grid with intensity buckets, month labels, and cell tooltips; distinct from charts and calendar.
- [ ] Funnel Chart — stepped conversion visualization with per-stage counts, drop-off percentages, and labels; analytics pattern not in charts set.
- [ ] Map Marker Popup — floating card anchored to a pin with title, thumbnail, meta, and directions CTA; geo-UI primitive absent from library.
- [ ] Cookie Consent Banner — bottom sheet with accept/reject/customize actions and category toggles; compliance staple distinct from announcement-banner.
- [ ] Feature Comparison Matrix — sticky-header table comparing plans/products across feature rows with check/dash/limit cells; distinct from pricing table and tables.
- [ ] Import Wizard — multi-step upload → column-map → preview flow with mapping dropdowns; distinct from stepper-wizard (data-import specific) and file-uploaders.
- [ ] API Key Manager — table of keys with masked values, reveal/copy, scopes badges, last-used, and revoke; distinct from copy-field (management surface).
- [ ] Two-Factor Setup — QR + secret display with segmented code entry and recovery-codes reveal; security-onboarding pattern not covered.
- [x] (builder-6) Usage Meter Card — 2 variants (healthy usage emerald fill, near-limit red threshold shift with upgrade CTA), light+dark, registry+tsx generated, screenshots verified, committed to builder-6-components.
- [~] (builder-10) Diff Stat Bar — added/removed line summary with green/red proportion bar and file-count; distinct from the built diff viewer (summary, not content).
- [ ] Presence Cursor Layer — live multiplayer cursors with name labels and selection highlights over a canvas; collaboration primitive absent from library.
- [ ] Rating Distribution — horizontal bar breakdown of 5→1 star counts with percentages and average summary; distinct from rating input (aggregate view).