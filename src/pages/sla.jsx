import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

let content = {
  "major": 'Anything above this line is considered a "Major Incident." The response process should be triggered for any major incident.',
  "sev1": {
    "color": "bg-red-200 text-red-400",
    "title": "SEV-1",
    "desc": {
      "title": "Critical issue that warrants public notification and liason with executive teams",
      "points": [
        "The system is in a critical state and is actively impacting a large number of customers",
        "Functionality has been severely impaired for a long time, breaking SLA's",
        "Customer-data-exposing security vulnerability has been detected"
      ]
    },
    "response": {
      "title": "Major incident response",
      "points": [
        "Page an incident commander",
        "Notify internal stakeholders",
        "Notify public",
      ]
    },
    "sla": "Acknowledgement to stakeholders within 3 hours; resolution ASAP"
  },
  "sev2": {
    "color": "bg-yellow-100 text-yellow-400",
    "title": "SEV-2",
    "desc": {
      "title": "Critical issue actively impacting ability to use products",
      "points": [
        "Notification pipeline is severly impaired",
        "Incident response functionality (ack, resolve, etc.) is severely impaired",
        "Applications are unavailable or experiencing severe performance degradation for most users",
        "Monitoring of systems for major incident conditions is impaired",
        "Any other event to which a Ratio employee deems necessary of a response"
      ]
    },
    "response": {
      "title": "Major incident response",
      "points": [
        "Page an incident commander",
        "Notify internal stakeholders",
      ]
    },
    "sla": "Acknowledgement during next business day, recommendation for action, if any, within 1 business day"
  },
  "sev3": {
    "color": "bg-blue-100 text-blue-400",
    "title": "SEV-3",
    "desc": {
      "title": "Stability of minor customer-impacting issues that require immediate attention from service owners",
      "points": [
        "Partial loss of functionality, not affecting majority of customers",
        "An incident that has the likelihood of becoming a SEV-2 if nothing is done",
        "No redundancy in a service (failure of 1 of more node will cause a SEV-2 or SEV-1 incident)"
      ]
    },
    "response": {
      "title": "High Urgency message to team",
      "points": [
        "Work on issue as top priority",
        "Work with engineers of affected systems to identify cause",
        "If related to recent deployment, roll back",
        "Monitor status to detect if/when it escalates",
        "Mention in internal communication methods if incident has the potential to escalate",
        "Trigger major incident response if necessary",
      ]
    },
    "sla": "Acknowledgement during next business day, recommendation for action, if any, within 3 business days"
  },
  "sev4": {
    "color": "bg-gray-100 text-gray-400",
    "title": "SEV-4",
    "desc": {
      "title": "Minor issues requiring action but not affecting customer ability to use the product/system",
      "points": [
        "Performance issues (delayes, etc)",
        "Individual host failure (i.e. one node in a cluster)",
        "Delayed job failure (not impacting event & notification pipeline)",
        "Cron failure (not impacting event & notification pipeline)"
      ]
    },
    "response": {
      "title": "Low Urgency message to team",
      "points": [
        "Work on the issue as your first priority but don't necessarily stop working on something in-progress",
        "Monitor status to detect if/when it escalates",
      ]
    },
    "sla": "Acknowledgement during next business day, recommendation for action, if any, within 5 business days"
  },
  "sev5": {
    "color": "bg-green-100 text-green-400",
    "title": "SEV-5",
    "desc": {
      "title": "Cosmetic or minor issues or defects not affecting customers ability to use the product/system",
      "points": [
        "Defects not impacting the immediate ability to use the product/system",
      ]
    },
    "response": {
      "title": "Create ticket and prioritize with features and other defects",
      "points": [
        "Assign both the ownner of the affected system and support",
      ]
    },
    "sla": "Acknowledgement during next planning session, recommendation for action"
  },
}

function pointsList(points)
{
  return (
    <>
      {
        points.map((point, i) => {
          return (<li key={i}>{ point }</li>)
        })
      }
    </>
  )
}

function tableRow(sev)
{
  let sevClass = `bg-${ sev.color }-200 font-bold p-8 text-${ sev.color }-400`
  return (
    <>
      <tr>
        <td className={ `font-bold p-8 ${ sev.color }` }>{ sev.title }</td>
        <td className="align-top p-8">
          <strong className="text-blue-400">{ sev.desc.title }</strong>
          <ul className="list-disc list-inside">{ pointsList(sev.desc.points) }</ul>
        </td>
        <td className="align-top p-8">
          <strong className="text-yellow-500">{ sev.response.title }</strong>
          <ul className="list-disc list-inside">{ pointsList(sev.response.points) }</ul>
        </td>
        <td className="align-top p-8">
          <strong>{ sev.sla }</strong>
        </td>
      </tr>
    </>
  )
}

function listRow(sev)
{
  return (
    <>
      <div className="m-4">
        <h2 className="font-bold">{ sev.title }</h2>
        <h3 className="font-bold text-blue-400">{ sev.desc.title }</h3>
        <ul className="list-disc list-inside">{ pointsList(sev.desc.points) }</ul>
        <h3 className="font-bold text-yellow-500">{ sev.response.title }</h3>
        <ul className="list-disc list-inside">{ pointsList(sev.response.points) }</ul>
        <strong>{ sev.sla }</strong>
        <hr />
      </div>
    </>
  )
}

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
        <div className="md:hidden lg:hidden mx-auto max-w-7xl px-6 lg:px-8">
          { listRow(content.sev1) }
          { listRow(content.sev2) }
          <p className="bg-red-100 font-medium p-2 text-red-400">{ content.major }</p>
          { listRow(content.sev3) }
          { listRow(content.sev4) }
          { listRow(content.sev5) }
        </div>
        <div className="hidden sm:hidden md:block lg:block mx-auto max-w-7xl px-6 lg:px-8">
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
              { tableRow(content.sev1) }
              { tableRow(content.sev2) }
              <tr>
                <td className="bg-red-100 font-medium p-3 text-red-400" colSpan="4">{ content.major }</td>
              </tr>
              { tableRow(content.sev3) }
              { tableRow(content.sev4) }
              { tableRow(content.sev5) }
            </tbody>
          </table>

        </div>
      </main>
      <Footer />
    </>
  )
}
