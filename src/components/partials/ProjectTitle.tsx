import { Heading } from "@chakra-ui/react"

export default function ProjectTitle({ text, featured }: { text: string, featured?: boolean }) {
  const isSpace = (s: string) => /^\s+$/.test(s);
  return (
    <Heading as='h4' size={featured ? 'xl' : 'lg'} display='block'>
      {text.split(/(\s+)/g).map((s: string, i: number) => (
        isSpace(s) ? '\u00A0' :
          <span key={i} className='p-title' style={{ display: 'inline-block' }}>
            {s}
          </span>
      ))}
    </Heading>
  )
}