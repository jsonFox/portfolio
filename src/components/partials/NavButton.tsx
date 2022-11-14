import { ButtonProps, Button } from '@chakra-ui/react';
import { scrollTo } from '../../utils/helpers';

interface Props extends ButtonProps {
  section: string;
}

export default function NavButton({ section, ...props }: Props) {
  return (
    <li>
      <Button onClick={() => scrollTo(section)} {...props}>
        {section}
      </Button>
    </li>
  );
}
