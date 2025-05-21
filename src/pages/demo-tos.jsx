import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function DemoTos() {
  return (
    <>
      <Head>
        <title>Ratio PBC: Demo Terms of Service</title>
      </Head>
      <Header />
      <section id="terms-of-service" className="container mx-auto px-4 py-8">
        <h1 class="text-text-100 mt-1 text-2xl font-bold" level="1">
          Terms of Service and Privacy Policy for Application Demo
        </h1>
        <h2 class="text-text-100 -mb-0.5 mt-1 text-xl font-bold" level="2">
          Terms of Service
        </h2>
        <p class="whitespace-normal">
          <strong>Last Updated: May 21, 2025</strong>
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          1. Acceptance of Terms
        </h3>
        <p class="whitespace-normal">
          By accessing or using this demo application ("Demo"), you agree to be
          bound by these Terms of Service. If you do not agree to these terms,
          do not use the Demo.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          2. Description of Service
        </h3>
        <p class="whitespace-normal">
          This Demo is provided solely for demonstration purposes at a
          conference event. It is not intended for production use or to provide
          any ongoing services beyond the demonstration period.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          3. Demo Status
        </h3>
        <p class="whitespace-normal">
          This application is a demonstration only. No guarantees are made
          regarding uptime, availability, or continued functionality beyond the
          demonstration period.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          4. Limitations of Use
        </h3>
        <p class="whitespace-normal">
          You agree to use the Demo only for lawful purposes and in accordance
          with these Terms. The Demo may not be used to:
        </p>
        <ul
          class="list-disc space-y-1.5 pl-7 [&:not(:last-child)_ol]:pb-1 [&:not(:last-child)_ul]:pb-1"
          depth="0"
        >
          <li class="whitespace-normal break-words" index="0">
            Violate any applicable laws
          </li>
          <li class="whitespace-normal break-words" index="1">
            Infringe upon the rights of others
          </li>
          <li class="whitespace-normal break-words" index="2">
            Transmit harmful code or interfere with the operation of the Demo
          </li>
        </ul>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          5. Intellectual Property
        </h3>
        <p class="whitespace-normal">
          All content, features, and functionality of the Demo are owned by the
          demonstrator and are protected by intellectual property laws. No
          license is granted to use, reproduce, or distribute any portion of the
          Demo.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          6. Disclaimer of Warranties
        </h3>
        <p class="whitespace-normal">
          THE DEMO IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER
          EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          7. Limitation of Liability
        </h3>
        <p class="whitespace-normal">
          IN NO EVENT SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
          SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATED TO YOUR
          USE OF THE DEMO.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          8. Termination
        </h3>
        <p class="whitespace-normal">
          We reserve the right to terminate access to the Demo at any time
          without notice.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          9. Changes to Terms
        </h3>
        <p class="whitespace-normal">
          We may revise these Terms at any time without notice. By continuing to
          use the Demo after any revisions, you accept the revised terms.
        </p>
        <h2 class="text-text-100 -mb-0.5 mt-1 text-xl font-bold" level="2">
          Privacy Policy
        </h2>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          1. Information Collection
        </h3>
        <p class="whitespace-normal">
          The Demo may collect the following information:
        </p>
        <ul
          class="list-disc space-y-1.5 pl-7 [&:not(:last-child)_ol]:pb-1 [&:not(:last-child)_ul]:pb-1"
          depth="0"
        >
          <li class="whitespace-normal break-words" index="0">
            Information you voluntarily provide (such as phone numbers to enable
            a text messages sent through the Demo)
          </li>
          <li class="whitespace-normal break-words" index="1">
            Technical information necessary for the function of the Demo
          </li>
        </ul>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          2. Use of Information
        </h3>
        <p class="whitespace-normal">
          Any information collected is used solely for:
        </p>
        <ul
          class="list-disc space-y-1.5 pl-7 [&:not(:last-child)_ol]:pb-1 [&:not(:last-child)_ul]:pb-1"
          depth="0"
        >
          <li class="whitespace-normal break-words" index="0">
            Demonstrating the functionality of the application
          </li>
          <li class="whitespace-normal break-words" index="1">
            Improving the Demo experience
          </li>
        </ul>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          3. No Third-Party Sharing
        </h3>
        <p class="whitespace-normal">
          <strong>
            We do not share, sell, rent, or trade any information collected
            through the Demo with third parties.
          </strong>{' '}
          All user-entered information remains within the Demo environment and
          is not transmitted to any third parties.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          4. Data Retention
        </h3>
        <p class="whitespace-normal">
          All information collected during the demonstration will be deleted
          promptly after the conclusion of the demonstration period.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          5. Security
        </h3>
        <p class="whitespace-normal">
          While we implement reasonable security measures to protect your
          information, no method of transmission or storage is 100% secure. We
          cannot guarantee absolute security.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          6. Children's Privacy
        </h3>
        <p class="whitespace-normal">
          The Demo is not intended for use by children under 13 years of age. We
          do not knowingly collect information from children under 13.
        </p>
        <h3 class="text-text-100 -mb-1.5 mt-1 text-lg font-bold" level="3">
          7. Contact Information
        </h3>
        <p class="whitespace-normal">
          For questions about these Terms or Privacy Policy, please contact the
          demonstrator directly at the conference event.
        </p>
        <hr />
        <p class="whitespace-normal">
          By using this Demo application, you acknowledge that you have read,
          understood, and agree to these Terms of Service and Privacy Policy.
        </p>
      </section>
      <Footer />
    </>
  )
}
