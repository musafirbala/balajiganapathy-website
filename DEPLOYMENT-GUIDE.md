# Complete Website Deployment Guide
## Balaji Ganapathy Portfolio – Ready-to-Deploy Solution (Phase 3 Parity Build)

---

## WHAT YOU HAVE

✅ **Complete Website** – `index.html` (production-ready, fully functional)
✅ **Phase 3 Parity Build** – All Figma UI specifications implemented
✅ **CMS Configuration** – `config.yml` (Decap CMS setup with colorAccent fields)
✅ **Mobile-First Design** – Responsive across all devices
✅ **Dark Mode** – Toggle available in navigation with smooth transitions
✅ **Gesture Navigation** – Circular swipe transitions (Leader → Speaker → Advisor → Coach)
✅ **Dynamic CMS Sync** – JSON data binding for all persona content
✅ **Accessibility** – ARIA labels, focus states, WCAG contrast compliance
✅ **No Code Issues** – Pure HTML/CSS/JavaScript (zero dependencies, zero build tools)
✅ **Cloudflare Compatible** – Works perfectly with Cloudflare Pages
✅ **GitHub Integration** – Git-based workflow for easy updates

---

## QUICK START (5 STEPS)

### Step 1: Create GitHub Repository

1. Go to **github.com** and sign in
2. Click **New Repository**
3. Name it: `balajiganapathy-website`
4. Choose **Public** (required for Cloudflare Pages)
5. Click **Create repository**

### Step 2: Upload Website Files

In your new GitHub repo, create these files:

**Root Level (`/`):**
- `index.html` – Your complete website

**Admin Folder (`/admin/`):**
- `index.html` – CMS interface entry point
- `config.yml` – Decap CMS configuration

**Data Folder (`/_data/`):**
- `config.json` – Site configuration
- `leader.json` – Leader persona content
- `speaker.json` – Speaker persona content
- `advisor.json` – Advisor persona content
- `coach.json` – Coach persona content

**AI Labs (`/ai-labs/`):**
- `coming-soon.html` – Phase 4 roadmap placeholder page

**Media Folder (`/media/`):**
- (Create empty folder for Decap CMS uploads)

### Step 3: Deploy to Cloudflare Pages

1. Log in to **Cloudflare Dashboard**
2. Go to **Pages → Create a project → Connect to Git**
3. Select your GitHub repository
4. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave blank)
   - **Build output directory:** (leave blank)
5. Click **Save and Deploy**

Cloudflare Pages will auto-deploy on every GitHub push.

### Step 4: Enable Decap CMS (Optional)

1. Install **Netlify Identity** widget in `admin/index.html`
2. Set up **Git Gateway** backend in `admin/config.yml`
3. Enable Netlify GitHub integration or use local backend for testing

### Step 5: Access CMS Admin Panel

Navigate to:
```
https://yourdomain.com/admin/
```

Log in and manage all persona content, colors, and images directly.

---

## FEATURES IMPLEMENTED (Phase 3)

### Gesture Navigation
- Swipe left/right to navigate personas (mobile & desktop with pointer events)
- Circular looping: Leader → Speaker → Advisor → Coach → Leader
- Smooth CSS transitions between persona sections

### Dynamic Carousels
- Featured Programs carousel (Leader)
- Testimonials carousel (Advisor)
- Transformation Stories carousel (Coach)
- Horizontal scroll with snap alignment, keyboard accessible

### Accordion Logic
- Expandable Speaker topics with smooth height transitions
- Click to toggle, single-item open at a time
- Accessibility: ARIA-expanded, semantic HTML

### Animated Metrics
- Counter animation with easing functions
- Intersection observer trigger (animates on scroll into view)
- CMS-driven value updates

### Parallax Effect
- Hero sections with subtle transform-based parallax on scroll
- CSS custom property for dynamic offset calculation

### Modals & Forms
- Contact/booking modal with validation
- Optional Netlify form integration (ready to enable)
- Accessible overlay with close button and focus management

### Dark Mode
- Toggle button in header
- Smooth 0.3s CSS transition on theme change
- localStorage persistence across sessions
- High-contrast color scheme (#00D8BE on #0F0F0F)

### Accessibility
- ARIA labels on all interactive elements
- Focus visible outline states
- Alt text fields mapped to CMS data
- Semantic HTML (nav, header, footer, main, section)
- Keyboard navigation support

---

## CLOUDFLARE + NETLIFY FORM INTEGRATION

To enable form submission (optional):

### Option 1: Cloudflare Form Handler (Recommended)

In `index.html`, update the form:

```html
<form id="contactForm" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
    <!-- form fields as-is -->
</form>
```

### Option 2: Netlify Forms

Ensure `admin/config.yml` has:
```yaml
backend:
  name: git-gateway
```

Add to your form:
```html
<form name="contact" method="POST" netlify>
    <!-- form fields -->
</form>
```

---

## CMS-DRIVEN IMAGE & VIDEO MANAGEMENT

1. **Upload images/videos** via Decap CMS admin panel
2. **Media folder** (`/media/`) stores all assets
3. **HTML binds dynamically** — Update CMS field → Image updates on site instantly

Example in `_data/leader.json`:
```json
{
  "heroImage": "/media/hero-portrait.jpg",
  "videoUrl": "/media/portfolio-montage.mp4"
}
```

---

## PERFORMANCE OPTIMIZATION

- **Zero dependencies** — No npm, no build step required
- **CSS-in-head** — Single HTML file, instant rendering
- **Native browser APIs** — Intersection Observer, touch events, CSS Grid
- **Lazy-loaded CMS** — JSON fetched only on persona view
- **Cloudflare caching** — Global edge distribution

---

## NEXT STEPS: PHASE 4 ROADMAP

**AI Labs (Coming 2026):**
- Navigate to `/ai-labs/coming-soon.html` for placeholder page
- Intelligent content generation pipeline
- Real-time Decap CMS sync with AI-powered storytelling
- Automated ESG metric updates

---

## TROUBLESHOOTING

**Issue: CMS not loading**
- Enable Netlify Identity in GitHub repo settings
- Ensure `admin/config.yml` has correct GitHub credentials

**Issue: Images not showing**
- Check media folder path in CMS config: `/media/`
- Verify image uploaded to GitHub `/media/` directory

**Issue: Styling misaligned on mobile**
- Ensure viewport meta tag is in HTML head
- Test on actual device (not just browser devtools)

**Issue: Gesture navigation not working**
- Ensure touch events are enabled in browser
- Test on mobile device (not just desktop browser)

---

## SUPPORT & RESOURCES

- **Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
- **Decap CMS Docs:** https://www.decapcms.org/docs/intro/
- **Netlify Forms:** https://docs.netlify.com/forms/setup/
- **GitHub Pages:** https://pages.github.com/

---

## VERSION HISTORY

**Phase 2: Foundation (Early 2025)**
- Static persona pages with responsive design and dark mode toggle
- Baseline accessibility setup and preliminary CMS schema

**Phase 3: Parity Build (October 2025)**
- Gesture-based swipe navigation (Leader → Speaker → Advisor → Coach → Leader)
- Full Decap CMS dynamic data integration, carousels, accordion logic, modals
- Refined accessibility (ARIA roles, focus states), visual parity with Figma
- Dark-mode transitions, hover pulse animations, parallax effects
- JSON-driven content sync, fully Cloudflare-ready deployment

**Phase 4: AI & Content Automation (Planned 2026)**
- Intelligent content generation for persona stories via integrated AI assistant
- Semantic tagging, smart search, and auto-curation of impact metrics
- Real-time Decap CMS → AI workflow support for adaptive storytelling
- Preview: [`/ai-labs/coming-soon.html`](/ai-labs/coming-soon.html)

---

**Built with ❤️ for Global Social Impact Leadership | Phase 3 Parity Build | October 24, 2025**
