import { Heading, HeadingProps } from '@chakra-ui/react';

interface Props extends Omit<HeadingProps, 'children'> {
  text: string;
  featured?: boolean;
}

export default function ProjectTitle({
  text,
  featured = false,
  ...props
}: Props) {
  return (
    <Heading as="h4" display="block" size={featured ? 'xl' : 'lg'} {...props}>
      {text.split(/(\s+)/g).map((s, i) =>
        /^\s+$/.test(s) ? (
          '\u00A0'
        ) : (
          <span key={i} className="p-title" style={{ display: 'inline-block' }}>
            {s}
          </span>
        )
      )}
    </Heading>
  );
}
