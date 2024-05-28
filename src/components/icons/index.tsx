import { IconType } from 'react-icons';
import {
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaReact
} from 'react-icons/fa';
import {
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiPug,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiPrisma,
  SiAzuredevops,
  SiAdobecreativecloud,
  SiFigma
} from 'react-icons/si';
import { TbBrandNextjs, TbBrandVite } from 'react-icons/tb';

export const skillIcons: Record<string, IconType> = {
  AWS: FaAws,
  'Azure DevOps': SiAzuredevops,
  Bootstrap: FaBootstrap,
  CSS: FaCss3Alt,
  Docker: SiDocker,
  Express: SiExpress,
  GraphQL: SiGraphql,
  HTML: FaHtml5,
  JavaScript: SiJavascript,
  Jest: SiJest,
  jQuery: SiJquery,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  NestJS: SiNestjs,
  NodeJS: FaNodeJs,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Pug: SiPug,
  React: FaReact,
  TailwindCSS: SiTailwindcss,
  TypeScript: SiTypescript,
  Vite: TbBrandVite,
  NextJS: TbBrandNextjs,
  'Material-UI': SiMui,
  'Adobe Creative Suite': SiAdobecreativecloud,
  Figma: SiFigma
};

export { default as Logo } from './logo';

export {
  FaGithub as Github,
  FaGithubSquare as GithubSquare,
  FaLinkedin as Linkedin,
  FaSlack as Slack
} from 'react-icons/fa';

export {
  RiMoonClearLine as DarkMode,
  RiSunLine as LightMode
} from 'react-icons/ri';

export { BsCircleFill as Circle } from 'react-icons/bs';

export { FiExternalLink as ExternalLink } from 'react-icons/fi';

export { HiOutlineMail as Email } from 'react-icons/hi';
