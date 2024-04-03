import { AuthorHeader } from "@/components/author-header"

const projects = [
  {
    name: "WunderDesk",
    href: "https://wunderdesk.app",
    tags: ["SaaS"],
    shortDescription: "The easiest way to build your help center with Notion.",
  },
  {
    name: "Green Walking: Walk & Hike Map",
    href: "https://fabian-rosenthal.com/green-walking/",
    tags: ["AndroidApp", "Flutter"],
    shortDescription: "The map shows all kinds of trails for walking and hiking.",
  },
  {
    name: "Restore Leveling After G28",
    href: "https://plugins.octoprint.org/plugins/restorelevelingafterg28/",
    tags: ["OctoPrintPlugin", "3DPrinting"],
    shortDescription: "Automatically keeps bed leveling on after G28 (Auto Home).",
  },
  {
    name: "Life Clock App",
    href: "https://play.google.com/store/apps/details?id=org.xennis.apps.lifetime_clock",
    tags: ["AndroidApp", "Flutter"],
    shortDescription: "A clock to visualize your life to encourage making the most out of it.",
  },
  {
    name: "Hamburg Stairs Map",
    href: "https://fabian-rosenthal.com/hamburg-stairs-map/",
    tags: ["Mapbox", "OverpassAPI"],
    shortDescription: "A map to visualize the stairs in Hamburg, Germany.",
  },
  {
    name: "EpiDoc Parser",
    href: "https://fabian-rosenthal.com/epidoc-parser/",
    tags: ["PythonLibrary"],
    shortDescription: "Python parser for EpiDoc (epigraphic documents in TEI XML).",
  },
]

function ProjectItem({
  name,
  href,
  tags,
  shortDescription,
}: {
  name: string
  href: string
  tags: Array<string>
  shortDescription: string
}) {
  return (
    <>
      <a href={href} target="_blank">
        {name}
      </a>{" "}
      {tags.map((t, index) => (
        <span className="ps-1" key={index}>
          #{t}
        </span>
      ))}
      <br />
      {shortDescription}
    </>
  )
}

export default function AboutPage() {
  return (
    <>
      <AuthorHeader />
      <h3>Current Projects</h3>
      <ul>
        {projects.map((p, index) => (
          <li key={index}>
            <ProjectItem {...p} />
          </li>
        ))}
      </ul>
    </>
  )
}