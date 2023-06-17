import IndexDoc from "@/docs/index.mdx"
import { DocsPageHeader } from "@/components/page-header"

export default function DocsPage() {
  return (
    <div className="flex-col rounded-lg border p-10 shadow-xl md:flex">
      <DocsPageHeader
        heading="Docs Demo"
        text="This is an example of a doc site built with MDX."
      />
      <IndexDoc />
    </div>
  )
}
