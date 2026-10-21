# Njoku International Website

Official web presence for Njoku International — International Business Consulting & Strategic Facilitation.

Built with Vite, React (JavaScript), and plain CSS adhering to strict design tokens defined in `src/styles/variables.css`.

---

## Form Service Setup & Configuration

The contact section features an accessible modal message form sending direct enquiries to `info@njokuinternational.com` through Formspree (or any standard form service) without hardcoding endpoints in the repository.

### 1. Create a Formspree Account
- Sign up at [Formspree](https://formspree.io) using the **client's email address** (`info@njokuinternational.com`).

### 2. Create the Form
Create a new form in your Formspree dashboard:
- **Form Name**: `Njoku International - Contact Form`
- **Send notifications to**: `info@njokuinternational.com`

### 3. Copy the Form Endpoint
Copy the submission endpoint URL provided by Formspree. It has the following format:
`https://formspree.io/f/your-form-id`

### 4. Configure Local Environment (`.env`)
Create a local `.env` file in the project root (note: `.env` is git-ignored):

```bash
cp .env.example .env
```

Set the endpoint variable in `.env`:
```env
VITE_FORM_ENDPOINT_GENERAL=https://formspree.io/f/your-form-id
```

### 5. Configure Production in Vercel
To deploy with the form service active in production:
1. Open your project in the [Vercel Dashboard](https://vercel.com).
2. Navigate to **Project Settings** > **Environment Variables**.
3. Add the environment variable:
   - **Key**: `VITE_FORM_ENDPOINT_GENERAL`
   - **Value**: Your Formspree endpoint URL (`https://formspree.io/f/your-form-id`)
   - **Environments**: Check **Production**, **Preview**, and **Development**.
4. Click **Save**.
5. Go to **Deployments** and click **Redeploy** on the latest production deployment for the new environment variable to take effect.

---

## How to Test the Form

Use this checklist to test the message form, validations, and accessibility:

### 1. Endpoint Unset (Missing Configuration)
- Run the site locally without a `.env` file or with `VITE_FORM_ENDPOINT_GENERAL` empty.
- Fill out the form and click **Send Message**.
- Verify that the app **never pretends to send**.
- Verify the error message appears: *"Your message could not be sent. Please try again."*
- Verify the direct fallback mailto link appears pointing to `info@njokuinternational.com` with pre-filled subject `Business Enquiry - Njoku International` and your entered message.
- Verify in browser dev tools console (development mode only) that a warning is logged stating the endpoint is missing or empty, along with an object showing `{ endpointDefined: false, status: null, body: null }`.

### 2. Client-Side Validation
- **Required Fields**:
  - Open the modal and click **Send Message** with all fields blank.
  - Verify inline validation errors appear under Name, Email, and Message.
  - Verify focus automatically moves to the first invalid field (Name).
  - Verify all invalid inputs have `aria-invalid="true"` and `aria-describedby` set to their respective error message IDs.
- **Email Validation**:
  - Enter an invalid email address (e.g. `invalid-email`).
  - Blur or submit the field.
  - Verify *"Please enter a valid email address."* appears.
- **Minimum Message Length**:
  - Enter fewer than 20 characters in the message textarea.
  - Verify *"Message must be at least 20 characters."* appears.
- **On-Blur Validation**:
  - Tab away from an invalid field to verify that validation executes on blur.

### 3. Keyboard Navigation & Accessibility
- **Card Interaction**:
  - Tab to the "General enquiries" card.
  - Verify the gold `:focus-visible` outline appears around the entire card.
  - Press `Enter` or `Space` to open the modal.
- **Focus Management**:
  - Verify that keyboard focus immediately moves to the first field (Name) without jarring scroll.
  - Tab through fields, the close button, and the submit button; verify focus remains trapped inside the `<dialog>`.
  - Press `Escape`: verify the modal closes immediately, body scrolling is restored, and focus returns directly to the card.
- **Backdrop Click**:
  - Click on the backdrop overlay outside the dialog box to verify the modal closes and focus returns to the card.
- **Screen Reader Support**:
  - Status changes (Sending, Success, Error) are announced in an `aria-live="polite"` region.
  - Errors contain an alert icon and descriptive text.
  - The honeypot field `_gotcha` is hidden from sighted users and screen readers (`aria-hidden="true"`).

### 4. Viewport Responsiveness
- **Mobile (375px)**:
  - Verify 16px side margins (`calc(100% - 32px)`).
  - Verify internal scrolling if needed on small screens (`max-height: calc(100dvh - 32px)`).
  - Verify 16px input font size (`--text-body`) to avoid mobile Safari auto-zoom.
  - Verify full-width primary Send button.
- **Desktop (1440px)**:
  - Verify centered modal dialog, max-width 560px, 8px radius (`--radius-md`), 1px line border, and soft shadow.

---

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```
