# Knight Moves Chess Academy — Website Project

## Student Information

- **Name:** Rowen Japhta
- **Student Number:** ST10529202
- **Module:** WEDE5020 — Web Development (Introduction)
- **Year:** 2026

**Live website:** https://rowen12-lab.github.io/knightmoveschessacademy/
**GitHub repository:** https://github.com/rowen12-lab/knightmoveschessacademy

---

## Project Overview

Knight Moves Chess Academy is a non-profit chess academy website created to promote chess and make it accessible to people of different ages and skill levels.

The website provides information about the academy, its programmes and services, how users can make an enquiry, and how users can contact the academy.

The website was created as an academic web development project and is hosted using GitHub Pages.

---

## Purpose of the Website

The purpose of the Knight Moves Chess Academy website is to:

- Introduce visitors to the academy.
- Provide information about the academy's mission, vision and values.
- Explain the different chess programmes and services available.
- Allow visitors to make an enquiry about joining the academy.
- Provide contact information and opening hours.
- Promote chess as an educational and community activity.
- Make information about the academy easily accessible online.

---

## Website Goals and Objectives

- Raise awareness of the academy's programmes and increase the number of children enrolled.
- Grow the volunteer coaching base and encourage recurring donations and sponsorships.
- Provide an accessible platform where parents can view programme information and enquire about enrolment, volunteering, or sponsoring a learner.

**Key Performance Indicators (KPIs):** Number of enrolment and volunteer enquiries submitted through the website, number of new learners registered per term, and growth in donor or sponsor sign-ups.

---

## Website Pages

The website consists of five HTML pages.

### 1. Home Page — `index.html`

- Academy introduction
- "Think. Plan. Move. Succeed." section
- Hero chess image
- Academy mission
- Services offered, presented as an interactive accordion (Part 3)
- Call-to-action section linking to the enquiry page

### 2. About Us Page — `about.html`

- About Knight Moves Chess Academy
- Our Story
- Our Vision
- Our Values
- Our Community
- Community gallery with a lightbox image viewer (Part 3)

### 3. Services Page — `services.html`

- Beginner, Junior, Intermediate and Advanced Chess Programmes, and Chess Workshops and Tournaments
- Programmes loaded with JavaScript and shown as cards, with a search box and a level filter (Part 3)

### 4. Enquiry Page — `enquiry.html`

- Enquiry form: full name, email address, phone number, chess experience, programme of interest and message
- JavaScript validation with error messages, and a response about the chosen programme, cost and availability (Part 3)
- Information about volunteering and supporting the academy's mission

### 5. Contact Page — `contact.html`

- Contact information, address, phone number, email address and opening hours
- Contact form with validation that compiles an email to the academy (Part 3)
- Find Us section with an interactive Leaflet map (Part 3)
- Social media section

The contact details used on the academic website are fictional and are included for demonstration purposes.

---

## Website Navigation

All five pages are connected through the navigation menu: Home, About Us, Services, Enquiry, Contact.

---

## Detailed Sitemap

```
                         KNIGHT MOVES CHESS ACADEMY
                                      |
                 +--------------------+--------------------+
                 |         |           |          |         |
               HOME      ABOUT       SERVICES   ENQUIRY   CONTACT
                 |         |           |          |         |
                 |         |           |          |         |
          Introduction   About Us   Beginner    Enquiry   Contact
          Mission        Our Story  Junior      Form      Information
          What We Offer  Our Vision Intermediate Volunteer Contact Form
          Call to Action Our Values Advanced    Support   Opening Hours
                         Community   Workshops            Find Us (Map)
                         Gallery     & Tournaments        Social Media
```

---

## Part 2: CSS Styling and Responsive Design

Part 2 focused on applying visual design to the website and ensuring it adapts correctly across different screen sizes. Completed in this part:

- Applied the Midnight Navy, Gold, and White colour scheme defined in the Website Project Proposal.
- Styled all five pages consistently, including the header, navigation menu, forms, tables, and footer.
- Made all images responsive so they scale correctly without overflowing on smaller screens.
- Added responsive breakpoints so the navigation, layout, and form elements adapt across mobile, tablet, and desktop screen sizes.
- Styled the enquiry form and opening hours table for readability on all devices.

### Screenshot Evidence

**Desktop View**
![Desktop screenshot](images/Screenshot%20desktop%20view.jpeg)

**Tablet View**
![Tablet screenshot](images/Screenshot%20tab%20view.jpeg)

**Mobile View**
![Mobile screenshot](images/Screenshot%20mobile%20phone%20view.jpeg)

---

## Part 3: Enhancing Functionality and SEO

### 1. Working Through Part 2 Feedback

Part 2 was marked 99/100. The only mark lost was on **CSS Typography Styles (4/5)**, where the feedback described typography as present but with some inconsistencies and room for improvement. All other criteria received full marks.

| Feedback received | Action taken | File changed |
|-------------------|--------------|--------------|
| CSS Typography Styles (4/5): typography present but could be improved; some inconsistencies | Added heading and body font variables (`--font-heading`, `--font-body`). Set a heading size scale for `h1`–`h3` with larger sizes at the 600px and 900px breakpoints. Gave headings a tighter line height. Set bold labels, table header and cell styling, and a smaller footer font. Made form controls (`input`, `select`, `textarea`, `button`) inherit the page font so they match the rest of the text. Limited paragraph and list width to 70 characters for readability. | `css/style.css` |

### 2. JavaScript Functionality

| Requirement | Page | Implementation | File(s) |
|-------------|------|----------------|---------|
| Interactive element: accordion | `index.html` | The "What We Offer" list became an accordion. Each programme is a button that expands and collapses its panel. Buttons use `aria-expanded` and `aria-controls` so the accordion works with a keyboard and screen readers. | `js/script.js`, `css/style.css` |
| Dynamic content | `services.html` | The five programmes are stored in a JavaScript array and rendered as cards. | `js/script.js` |
| Search and filter | `services.html` | A search box and a level dropdown update the cards as the visitor types. Shows a results count, a "no results" message, and a clear filters button. The level dropdown is generated from the programme data. | `js/script.js` |
| Advanced DOM manipulation | `services.html`, `enquiry.html`, `contact.html` | Elements are created with `createElement`, content is inserted with `textContent`, and containers are redrawn with `replaceChildren`. Error messages, validation states, response boxes and the email preview are all built this way. | `js/script.js`, `js/contact.js` |
| Interactive map | `contact.html` | Leaflet map with OpenStreetMap tiles, a marker and a popup, centred on Kimberley. Visitors can zoom and drag the map. | `js/contact.js` |
| Gallery with lightbox | `about.html` | Four community photos open in a larger viewer with a caption, previous and next buttons, a close button, and keyboard support (arrow keys and Escape). Built with the HTML `<dialog>` element. | `js/about.js`, `css/style.css` |
| Animations and transitions | All pages | Accordion panels slide open (CSS transition). Programme cards fade in and lift on hover. Gallery thumbnails zoom on hover. Buttons change colour on hover. The lightbox and response boxes fade in. Animations are switched off for visitors who prefer reduced motion. | `css/style.css` |

### 3. Forms and Validation

**Enquiry form (`enquiry.html`)**

- Checks every field: name (letters, spaces, hyphens and apostrophes), email format, South African phone format (for example `082 123 4567` or `+27 82 123 4567`), experience and programme selections, and message length (10 to 500 characters, with a live character counter).
- Shows an error message beside each invalid field, highlights the field in red, and moves the cursor to the first error.
- Re-checks a field as the visitor corrects it.
- When valid, the form clears and a response appears with the chosen programme, a note about cost and a note about availability. The form handles the response with JavaScript without reloading the page.

**Contact form (`contact.html`)**

- Collects name, email, optional phone number, message type (General enquiry, Volunteering, Sponsorship or donation, Feedback, Other) and a message.
- Uses the same validation and error messages as the enquiry form.
- When valid, it compiles the details into an email addressed to the recipient set in the code (`info@knightmovesacademy.co.za`), shows a preview, and provides an "Open in your email app" button that opens the visitor's email program with the subject and body filled in.

### 4. Search Engine Optimisation (SEO)

**On-page SEO**

- Every page has a unique title tag and a unique meta description.
- Keywords used naturally in headings and text: chess academy, chess lessons, Kimberley, non-profit, beginner, junior, intermediate and advanced chess programmes, tournaments.
- Heading structure: each page has one main `h1` and `h2`/`h3` headings below it.
- Descriptive alt text on all content images.
- Clean, descriptive page names (`about.html`, `services.html`, `enquiry.html`, `contact.html`) and internal links between pages through the navigation menu and calls to action.
- Mobile-friendly responsive layout with the viewport meta tag on every page.

**Off-page SEO (plan)**

As this is an academic project, the following is a plan for how the academy would grow its visibility.

- **Backlinks:** Ask local schools, community centres and churches in Kimberley to link to the academy's website. Submit the site to provincial and national chess federation websites and local community directories. Offer to run a workshop or tournament with a partner school and ask them to link to the academy in return.
- **Social media:** Maintain Facebook, Instagram and YouTube pages (linked in the Follow Our Journey section). Post tournament results, short chess tips, photos from workshops and enrolment announcements, and always link back to the website.
- **Local SEO:** Create a Google Business Profile for the academy in Kimberley, with address, opening hours and photos. List the academy in local business directories with the same name, address and phone number everywhere. Use local terms such as "chess lessons Kimberley" in page text and ask parents for reviews.

**Additional SEO requests**

- **`robots.txt`:** Added in the main folder. It allows all crawlers and points to the sitemap.
- **`sitemap.xml`:** Added in the main folder. It lists all five pages with their addresses and priorities.
- **Page speed:** Large photographs were compressed and resized to reduce load times. Gallery images use `loading="lazy"` and have width and height set to avoid layout shifts. Scripts load at the end of the page, and the Leaflet library loads only on the contact page.
- **Security:**
  - Visitor input is validated before use and inserted into the page with `textContent`, never as raw HTML.
  - External and social links use `rel="noopener noreferrer"`.
  - Leaflet is loaded from a pinned version with an integrity (SRI) check.
  - The site is served over HTTPS by GitHub Pages.

### 5. Testing

| Test | Result |
|------|--------|
| Accordion opens and closes on the Home page | Passed |
| Services: search, level filter and clear filters | Passed |
| Enquiry form: empty submit, invalid email, invalid phone, short message, valid submit | Passed |
| Contact form: validation and compiled email | Passed |
| Contact page: map loads, zoom and drag | Passed |
| About page: lightbox opens, navigates and closes | Passed |
| `robots.txt` and `sitemap.xml` open in the browser | Passed |
| All five pages checked at phone, tablet and desktop width | 

### 6. Deployment

The website is deployed on GitHub Pages: https://rowen12-lab.github.io/knightmoveschessacademy/

### 7. Known Limitations

- GitHub Pages cannot process form data on a server, so form responses are generated in the browser and nothing is stored. The contact form prepares an email for the visitor to send.
- The address, phone number and email on the site are fictional. The map shows the centre of Kimberley.
- The logo file name is not descriptive and was not renamed.

---

## Timeline and Milestones

| Milestone | Target |
|-----------|--------|
| Part 1: Planning, content research, sitemap, initial HTML | Weeks 1-3 |
| Part 2: CSS styling and responsive design | Weeks 4-6 |
| Part 3: JavaScript functionality, SEO, testing | Weeks 7-9 |

---

## File and Folder Structure

```
knightmoveschessacademy/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── script.js      (accordion, services list and filter, enquiry form)
│   ├── contact.js     (map and contact form)
│   └── about.js       (lightbox gallery)
└── images/
```

---

## Changelog

### Part 1 and Part 2

- **2026-08-14 — v0.1:** Initial repository setup. Created five core HTML pages with semantic structure, content, and full inter-page navigation.
- **2026-08-14 — v0.2:** Expanded thin content sections across all pages for depth and clarity.
- **2026-08-14 — v0.3:** Added images across all pages.
- **2026-08-14 — v0.4:** Added README with student info, goals, timeline, sitemap, and references.
- **2026-09-15 — v0.5:** Added responsive CSS styling with Midnight Navy/Gold colour scheme, mobile/tablet/desktop breakpoints, and Part 2 screenshot evidence.

### Part 3

**Changes from Part 2 feedback**

- **2026-11-01 — v0.6:** Improved typography in `css/style.css` in response to the Part 2 feedback (CSS Typography Styles, 4/5). Added `--font-body` and `--font-heading` variables, set a consistent heading size scale for `h1`–`h3` with responsive increases at 600px and 900px, set line heights for headings, styled labels, table headers and cells and the footer text, made form controls inherit the page font, and limited paragraph and list width to 70 characters.
- **2026-11-01 — v0.6.1:** Fixed the README screenshot image paths by encoding spaces as `%20`, so the Part 2 screenshots display correctly.

**New Part 3 features**

- **2026-11-01 — v0.7:** Created the `js` folder and `js/script.js`, and linked the script at the end of `index.html`.
- **2026-11-01 — v0.8:** Replaced the "What We Offer" bullet list on `index.html` with an accessible accordion built with buttons using `aria-expanded` and `aria-controls`. Added the behaviour in `js/script.js` and the styling and open/close transition in `css/style.css`.
- **2026-11-01 — v0.8.1:** Added a meta description to `index.html`. Fixed HTML structure issues on the page: restored the viewport meta tag, closed the accordion and section tags correctly, and corrected a missing space in the introduction text.
- **2026-11-02 — v0.9:** Rebuilt the programme content on `services.html` as a JavaScript list in `js/script.js`, rendered as cards with DOM methods. Added a search box, a level filter, a results count, a "no results" message and a clear filters button. Added card styling, a hover effect and a fade-in animation in `css/style.css`. Added a meta description and removed a stray closing `</section>` tag.
- **2026-11-02 — v0.10:** Added JavaScript validation to the enquiry form in `enquiry.html` and `js/script.js`. Checks cover name, email, South African phone format, experience and programme selection, and message length (10 to 500 characters, with a live counter), with inline error messages, red field highlighting, and keyboard focus moved to the first error. After a valid submission the page shows a response about the chosen programme, cost and availability. Replaced `<br>` spacing with field groups, changed the submit input to a styled button, and added a meta description. Added form styles to `css/style.css`.
- **2026-11-02 — v0.10.1:** Restored `css/style.css` after it was accidentally overwritten with only the form styles. Combined the base, typography, accordion, services and form styles into one file.
- **2026-11-02 — v0.11:** Added a contact form to `contact.html` with validation and a compiled email (subject and body built from the form, addressed to the academy, with a preview and an "Open in your email app" link). Added an interactive Leaflet map with OpenStreetMap tiles to the Find Us section, loaded from a pinned Leaflet version with an integrity check. Created `js/contact.js`. Added a meta description and `rel="noopener noreferrer"` on the social links. Added map and email preview styles to `css/style.css`.
- **2026-11-02 — v0.12:** Added a community gallery with a lightbox to `about.html`, built with the `<dialog>` element, with previous and next buttons, a caption, and arrow key and Escape support. Created `js/about.js`. Added a meta description, gallery styling and lightbox styling.
- **2026-11-02 — v0.13:** Added `robots.txt` and `sitemap.xml` to the main folder, and checked that both open on the live site.
- **2026-11-02 — v0.14:** Compressed and resized the large photographs in `images` to improve page loading speed, keeping the same file names so no page links broke.
- **2026-11-02 — v0.15:** Updated this README with Part 3 documentation: functionality, forms, SEO (including the off-page plan), testing, known limitations, the updated folder structure and references.

---

## References

The Independent Institute of Education. (2026) *WEDE5020 Web Development (Introduction) Portfolio of Evidence*. Johannesburg: IIE.

W3Schools. (n.d.) HTML Tutorial. Available at: https://www.w3schools.com/html/ (Accessed: 13 August 2026).

Anthropic. (2026) Claude (Version Sonnet 4.5) [Large language model]. Available at: https://claude.ai (Accessed: 14 August 2026).

Anthropic. (2026) Claude (Version Sonnet 5.5) [Large language model]. Available at: https://claude.ai (Accessed: 2 November 2026). Used in Part 3 for help with JavaScript, CSS, form validation, SEO files and documentation.

OpenAI. (2026) ChatGPT (GPT-4/GPT-5) [Large language model]. Available at: https://chat.openai.com (Accessed: 14 August 2026).

Agafonkin, V. (n.d.) *Leaflet: an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com/ (Accessed: 2 November 2026).

OpenStreetMap contributors. (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 2 November 2026).

Mozilla. (n.d.) *HTML dialog element*. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog (Accessed: 2 November 2026).

Google. (n.d.) *Search Engine Optimization (SEO) Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 2 November 2026).

Sitemaps.org. (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 2 November 2026).

Google. (n.d.) *Squoosh*. Available at: https://squoosh.app/ (Accessed: 2 November 2026).
