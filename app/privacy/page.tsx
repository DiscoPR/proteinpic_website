import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/legal-layout";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Protein Pic handles email, meal photos, health and fitness data, and Apple Health.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <LegalLayout title="Privacy Policy" updated="September 4, 2026">
          <p>
            Protein Pic ("the app") is an iOS protein tracker published by{" "}
            {site.seller}. This policy describes the information the app and
            this website may collect, how it is used, and the choices you have.
            It is written in plain language. It is not legal advice.
          </p>

          <h2>Who this covers</h2>
          <p>
            This policy covers the Protein Pic iOS app (App Store ID{" "}
            {site.appStoreId}, bundle ID {site.bundleId}) and the marketing
            site at proteinpic.app, including this Privacy page and the{" "}
            <Link href="/terms">Terms</Link>.
          </p>

          <h2>What we collect</h2>
          <p>Depending on how you use the app, we may process:</p>
          <ul>
            <li>
              <strong>Email and account details.</strong> If you create an
              account or sign in, we use an email address and sign-in
              credentials so you can keep your logs across devices.
            </li>
            <li>
              <strong>Photos of meals.</strong> When you use Photo, Menu Scan,
              or related camera features, the image is sent so the app can
              estimate protein. You can edit the result before you save it.
            </li>
            <li>
              <strong>Health and fitness data you enter.</strong> That includes
              protein logs, daily targets, body weight, water, streaks,
              favorites, and similar progress data you choose to record.
            </li>
            <li>
              <strong>Apple Health data.</strong> If you grant permission,
              Protein Pic can read workouts and active energy from Apple Health
              and use that information to adjust your protein goal on training
              days. We do not write medical diagnoses. You can turn Health
              access off in iOS Settings at any time.
            </li>
            <li>
              <strong>Usage that helps the product work.</strong> Things like
              scan counts, feature use, crash information, and basic device
              data needed to keep the app reliable.
            </li>
          </ul>
          <p>
            Apple's App Store privacy labels also summarize what is linked, or
            not linked, to your identity. Read those labels on the{" "}
            <a href={site.appStoreUrl}>App Store listing</a> as well as this
            page.
          </p>

          <h2>What we do not collect through this website</h2>
          <p>
            This marketing site is static. It does not run an account system,
            waitlist database, or advertising pixel. Visiting / or these legal
            pages does not create an app account.
          </p>

          <h2>How we use the information</h2>
          <ul>
            <li>Estimate protein from a meal photo, barcode, or menu scan.</li>
            <li>Show your daily target, streaks, groups, and coach suggestions.</li>
            <li>
              Adjust goals when you allow Apple Health workout and active
              energy access.
            </li>
            <li>Keep your account signed in and recover it if you ask.</li>
            <li>Fix bugs, prevent abuse, and operate the service.</li>
          </ul>
          <p>
            Protein estimates are estimates. They are not a medical diagnosis,
            lab analysis, or a substitute for advice from a clinician or
            registered dietitian.
          </p>

          <h2>Payments</h2>
          <p>
            Paid access is sold as an Apple in-app purchase. Apple processes
            the payment. Protein Pic does not receive your full card number or
            Apple ID password. Manage or cancel a subscription in your Apple ID
            settings.
          </p>

          <h2>Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with
            service providers who help run the app (for example, hosting,
            analytics that we may add later, or model inference for photo
            analysis), and only as needed to provide the feature. We may also
            share information if the law requires it, or if you ask us to (for
            example, when you join a group and choose to share progress with
            other members).
          </p>
          <p>
            Group features show progress you choose to share with people in
            that group. Do not join a group if you do not want those members to
            see the activity you share there.
          </p>

          <h2>How long we keep data</h2>
          <p>
            Account and log data stay while your account is active so the app
            can show history, streaks, and favorites. Meal photos are processed
            to produce an estimate. We keep them only as long as needed to
            provide the feature, debug issues you report, or meet a legal
            duty. You can delete individual logs in the app. If you want the
            account removed, contact the developer through the App Store
            listing.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>Decline camera, photo library, or Health permissions in iOS.</li>
            <li>Edit or delete a logged meal inside the app.</li>
            <li>Leave a group or stop sharing progress.</li>
            <li>Sign out or request account deletion via the App Store developer.</li>
            <li>Cancel a subscription in Apple ID subscriptions.</li>
          </ul>
          <p>
            If you are in a region with additional privacy rights (for example,
            access, correction, or deletion), contact {site.seller} through the
            Protein Pic App Store page and we will work through the request.
          </p>

          <h2>Children</h2>
          <p>
            Protein Pic is not directed at children under 13, and we do not
            knowingly collect personal information from children under 13.
          </p>

          <h2>Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect
            data in transit and at rest. No method of transmission or storage
            is perfectly secure. Protect your Apple ID and device passcode.
          </p>

          <h2>Changes</h2>
          <p>
            If this policy changes in a material way, we will update the date
            at the top of this page. Continued use of the app after an update
            means you have read the revised policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about privacy: contact {site.seller} through the{" "}
            <a href={site.appStoreUrl}>Protein Pic App Store listing</a>.
            This website is proteinpic.app.
          </p>
        </LegalLayout>
      </main>
      <SiteFooter />
    </>
  );
}
