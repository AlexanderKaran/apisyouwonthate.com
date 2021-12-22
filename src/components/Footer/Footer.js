import { Box, Stack, Text, useTheme } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

import { GitHubIcon, TwitterIcon } from '../icons';
import { NewsletterForm } from '../NewsletterForm';

const Subtitle = ({ children }) => (
  <Text textTransform={'uppercase'} fontWeight={'bold'}>
    {children}
  </Text>
);

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      as="footer"
      margin="6rem 0 0 0"
      padding="2rem 2rem 6rem 2rem"
      borderTop={`20px solid ${theme.colors.green[400]}`}
      background={theme.colors.green[50]}
    >
      <Stack
        direction={['column', 'column', 'row', 'row']}
        justifyContent={'space-between'}
      >
        <Stack>
          <Subtitle>APIs You Won&apos;t Hate</Subtitle>
          <Link href="/books">
            <a>Books</a>
          </Link>

          <Link href="/blog">
            <a>Blog</a>
          </Link>

          <Link href="/videos">
            <a>Videos</a>
          </Link>

          <Link href="/podcast">
            <a>Podcast</a>
          </Link>
        </Stack>
        <Stack>
          <Subtitle>Community</Subtitle>
          <Stack direction="row" alignItems="center">
            <GitHubIcon />{' '}
            <a
              href="https://github.com/apisyouwonthate"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
          </Stack>
          <Stack direction="row" alignItems="center">
            <TwitterIcon />
            <a
              href="https://twitter.com/apisyouwonthate"
              target="_blank"
              rel="noreferrer noopener me"
            >
              @apisyouwonthate
            </a>
          </Stack>
          <Link href="/community">Join our Slack Community</Link>
          <a href="https://forum.apisyouwonthate.com">Forum</a>
          <Link href="/conduct">Code of Conduct</Link>
        </Stack>
        <Stack>
          <Subtitle>More help</Subtitle>
          <a href="https://calendly.com/philsturgeon">Consulting</a>
        </Stack>
        <Stack>
          <Subtitle>Subscribe to our newsletter</Subtitle>
          <NewsletterForm />
        </Stack>
      </Stack>
      <Stack>
        <p>
          <a
            href="https://www.netlify.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              alt="Deploys by netlify"
              src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
              width="114"
              height="51"
            />
          </a>
        </p>
        <small>
          © {new Date().getFullYear()}
          {` APIs You Won't Hate`}
        </small>
      </Stack>
    </Box>
  );
};

export default Footer;
