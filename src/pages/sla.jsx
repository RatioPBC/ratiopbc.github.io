import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function SLA()
{
  return (
    <>
      <Head>
        <title>Ratio PBC - Software and data consultancy supporting health and human services organizations.</title>
        <meta
          name="description"
          content="We design, build, and operate mission critical software and data systems for health and human services organizations."
        />
      </Head>
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <table className="table-auto bg-white">
            <thead>
              <tr className="bg-gray-500 text-white">
                <th className="p-8">Severity</th>
                <th className="p-8">Description</th>
                <th className="p-8">Typical Response</th>
                <th className="p-8">SLA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-red-200 font-bold p-8 text-red-400">SEV-1</td>
                <td className="align-top p-8">
                  <strong className="text-blue-400">Critical issue that warrants public notification and liason with
                    executive teams</strong>
                  <ul className="list-disc list-inside">
                    <li>The system is in a critical state and is actively impacting a large number of customers</li>
                    <li>Functionality has been severely impaired for a long time, breaking SLA's</li>
                    <li>Customer-data-exposing security vulnerability has been detected</li>
                  </ul>
                </td>
                <td className="align-top p-8">
                  <strong className="text-yellow-500">Major incident response</strong>
                  <ul className="list-disc list-inside">
                    <li>Page an incident commander</li>
                    <li>Notify internal stakeholders</li>
                    <li>Notify public</li>
                  </ul>
                </td>
                <td className="align-top p-8">
                  <strong>Acknowledgement to stakeholders within 3 hours; resolution ASAP</strong>
                </td>
              </tr>

              <tr>
                <td className="bg-yellow-100 font-bold p-8 text-yellow-400">SEV-2</td>
                <td className="align-top p-8">
                  <strong className="text-blue-400">Critical issue actively impacting ability to use products</strong>
                  <ul className="list-disc list-inside">
                    <li>Notification pipeline is severly impaired</li>
                    <li>Incident response functionality (ack, resolve, etc.) is severely impaired</li>
                    <li>Applications are unavailable or experiencing severe performance degradation for most users</li>
                    <li>Monitoring of systems for major incident conditions is impaired</li>
                    <li>Any other event to which a Ratio employee deems necessary of a response</li>
                  </ul>
                </td>
                <td className="align-top p-8">
                  <strong className="text-yellow-500">Major incident response</strong>
                  <ul className="list-disc list-inside">
                    <li>Page an incident commander</li>
                    <li>Notify internal stakeholders</li>
                  </ul>
                </td>
                <td className="align-top p-8">
                  <strong>Acknowledgement during next business day, recommendation for action, if any, within 1 business
                    day</strong>
                </td>
              </tr>

              <tr>
                <td className="bg-red-100 font-medium p-3 text-red-400" colspan="4">Anything above this line is considered a
                  "Major Incident." The response process should be triggered for any major incident.</td>
              </tr>

              <tr>
                <td className="bg-blue-100 font-bold p-8 text-blue-400">SEV-3</td>
                <td className="align-top p-8">
                  <strong className="text-blue-400">Stability of minor customer-impacting issues that require immediate
                    attention from
                    service owners</strong>
                  <ul className="list-disc list-inside">
                    <li>Partial loss of functionality, not affecting majority of customers</li>
                    <li>An incident that has the likelihood of becoming a SEV-2 if nothing is done</li>
                    <li>No redundancy in a service (failure of 1 of more node will cause a SEV-2 or SEV-1
                      incident)</li>
                  </ul>
                </td>
                <td className="align-top p-8">
                  <strong className="text-yellow-500">High Urgency message to team</strong>
                  <ul className="list-disc list-inside">
                    <li>Work on issue as top priority</li>
                    <li>Work with engineers of affected systems to identify cause</li>
                    <li>If related to recent deployment, roll back</li>
                    <li>Monitor status to detect if/when it escalates</li>
                    <li>Mention in internal communication methods if incident has the potential to escalate</li>
                    <li>Trigger major incident response if necessary</li>
                  </ul>
                </td>
                <td className="align-top p-8">
                  <strong>Acknowledgement during next business day, recommendation for action, if any, within 3 business
                    days</strong>
                </td>
              </tr>

              <tr>
                <td className="bg-gray-100 font-bold p-8 text-gray-400">SEV-4</td>
                <td className="align-top p-8">
                  <strong className="text-blue-400">Minor issues requiring action but not affecting customer ability to use
                    the product/system</strong>
                  <ul className="list-disc list-inside">
                    <li>Performance issues (delayes, etc)</li>
                    <li>Individual host failure (i.e. one node in a cluster)</li>
                    <li>Delayed job failure (not impacting event & notification pipeline)</li>
                    <li>Cron failure (not impacting event & notification pipeline)</li>
                  </ul>
                </td>
                <td className="align-top p-8">
                  <strong className="text-yellow-500">Low Urgency message to team</strong>
                  <ul className="list-disc list-inside">
                    <li>Work on the issue as your first priority but don't necessarily stop working on something
                      in-progress</li>
                    <li>Monitor status to detect if/when it escalates</li>
                  </ul>
                </td>
                <td className="align-top p-8">
                  <strong>Acknowledgement during next business day, recommendation for action, if any, within 5 business
                    days</strong>
                </td>
              </tr>

              <tr>
                <td className="bg-green-100 font-bold p-8 text-green-400">SEV-5</td>
                <td className="align-top p-8">
                  <strong className="text-blue-400">Cosmetic or minor issues or defects not affecting customers ability to
                    use the product/system</strong>
                  <ul className="list-disc list-inside">
                    <li>Defects not impacting the immediate ability to use the product/system</li>
                  </ul>
                </td>
                <td className="align-top p-8">
                  <strong className="text-yellow-500">Create ticket and prioritize with features and other defects</strong>
                  <ul className="list-disc list-inside">
                    <li>Assign both the ownner of the affected system and support</li>
                  </ul>
                </td>
                <td className="align-top p-8">
                  <strong>Acknowledgement during next planning session, recommendation for action</strong>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </main>
      <Footer />
    </>
  )
}
