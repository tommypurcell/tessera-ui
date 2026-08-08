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
- [~] (builder-2) Calendar
- [ ] Card
- [ ] Carousel
- [x] (builder-2) Checkbox — already exists as `checkboxes` (3 variants); no new work needed
- [ ] Collapsible
- [ ] Combobox

### builder-3
- [~] (builder-3) Command
- [ ] ContextMenu
- [~] (builder-3) DataTable
- [ ] DatePicker
- [ ] Dialog
- [ ] Drawer

### builder-4
- [x] (builder-4) DropdownMenu — already exists as `dropdown` (3 variants, light+dark; verified)
- [x] (builder-4) Empty — already exists as `empty-states` (5 variants, light+dark; verified)
- [x] (builder-4) Field — already exists as `form-row` (label+control+help+error with aria wiring; verified, matches shadcn Field pattern)
- [x] (builder-4) HoverCard — 2 variants (profile preview, link preview), light+dark, registry.json, MDX, screenshot verified
- [x] (builder-4) Input — already exists as `inputs` (4 variants, light+dark; verified)
- [~] (builder-4) InputGroup

### builder-5
- [x] (builder-5) InputOTP
- [x] (builder-5) Item
- [x] (builder-5) Kbd
- [x] (builder-5) Label
- [x] (builder-5) Menubar
- [~] (builder-5) NavigationMenu

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
- [~] (builder-7) Sheet
- [x] (builder-7) Sidebar — already exists as `dashboard-sidebar` + `side-menu` (verified)
- [~] (builder-7) Skeleton — already exists in building-blocks (8 variants) but light-only; adding dark variants
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

### builder-9
- [x] Toggle (builder-9) — already existed as `toggles`
- [~] (builder-9) ToggleGroup
- [ ] Tooltip
- [ ] Typography
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
- [ ] Command Palette — global ⌘K search overlay with grouped results, keyboard nav, and recent actions; core power-user pattern absent from library and slices.
- [ ] Notification Center — dropdown/panel of grouped notifications with read/unread states, timestamps, and mark-all-read; distinct from single toasts.
- [ ] Kanban Column — draggable card column with count badge and add-card affordance; foundational board UI not covered by tables or lists.
- [ ] File Tree — collapsible nested directory/file explorer with indent guides and icons; needed for code/docs/dashboard sidebars, distinct from generic vertical-menu.
- [ ] Pricing Table — multi-tier plan comparison with feature rows, highlighted "popular" tier, and CTA buttons; high-value marketing/settings pattern.
- [ ] Stepper Wizard — multi-step form flow with progress header, back/next controls, and per-step validation shell; richer than the existing static `steps` indicator.
- [~] (builder-8) Toast Stack — stacked, auto-dismissing toast queue manager with enter/exit animation and position variants; extends single `toasts` into a real notification system.
- [x] (builder-8) Avatar Group — overlapping avatar cluster with "+N more" overflow chip and hover tooltips; ubiquitous for collaborators/assignees.
- [ ] Tag Input — token/chip entry field with add-on-enter, backspace-to-remove, and autocomplete suggestions; essential for labels/recipients/filters.
- [x] (builder-8) Segmented Control — iOS-style single-select pill toggle group for view/mode switching; distinct from tabs and button-groups in styling and intent.
- [~] (builder-9) Metric Sparkline Card — KPI tile pairing a big number + delta with an inline sparkline trend; dashboard staple richer than existing `stat-tile`.
- [x] (builder-10) Activity Feed — 2 variants (avatar-led actor feed + connected icon-badge timeline), light+dark, registry+tsx generated, screenshots verified
- [ ] Keyboard Shortcut Cheatsheet — modal grid of grouped ⌘/ctrl shortcuts with `kbd` chips; companion to command palette, boosts perceived polish.
- [~] (builder-1) Split Button — primary action button fused with a dropdown caret for secondary actions; common toolbar pattern not covered by button-groups.
- [ ] Data Filter Bar — horizontal bar of chip/dropdown filters with active-filter pills and a clear-all control; the applied layer above the existing `filters` primitives.
- [ ] Comparison Slider — before/after image reveal with a draggable vertical handle; distinct from the diff component (visual media, not text/rows).
- [~] (builder-10) Onboarding Checklist — dismissible getting-started card with progress ring and step rows that check off; drives activation in SaaS dashboards.
- [ ] Command Menu Result Row — reusable list-item primitive with icon, label, meta, and trailing kbd hint; composes into palettes, comboboxes, and search results.
- [ ] Multi-Select Combobox — searchable dropdown that returns multiple checked values rendered as inline chips; distinct from single Combobox and Tag Input.
- [ ] Date Range Picker — dual-calendar range selector with preset shortcuts (Today, Last 7d, MTD); analytics staple beyond single DatePicker.
- [ ] Color Picker — swatch grid + hue/alpha sliders + hex input popover; needed for theming/design tooling, absent from library.
- [ ] Inline Edit Field — click-to-edit text that swaps to an input with save/cancel affordances; common for settings and table cells.
- [x] (builder-6) Copy-to-Clipboard Field — read-only value box with a trailing copy button and "copied" confirmation; ubiquitous for API keys, invite links, IDs.
- [ ] Bulk Action Bar — contextual toolbar that slides in when table rows are selected, showing count + batch actions; pairs with DataTable.
- [ ] Tree View — expandable hierarchical node list with checkboxes and indent guides (data-oriented); distinct from File Tree's file/folder framing.
- [ ] Timeline Scrubber — horizontal draggable playhead with tick marks and range handles for media/log scrubbing; distinct from progress bars.
- [~] (builder-6) Announcement Banner — full-width top-of-page dismissible bar for product news/maintenance with CTA and severity variants; distinct from inline alerts.