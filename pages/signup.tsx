import { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, Center, Stack, Button, Text } from '@chakra-ui/react'
import { PageTransition } from 'components/motion/page-transition'

const Login: NextPage = () => {
  return (
    <Center height="100vh">
      <PageTransition height="100%" display="flex" alignItems="center">
        <Stack
          spacing="4"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          {/* 'Under Development' message */}
          <Text fontSize="2xl" fontWeight="bold">
            Under Development
          </Text>

          {/* Back button to navigate to the home page */}
          <NextLink href="/" passHref>
            <Button as="a" colorScheme="blue">
              Go Back to Home
            </Button>
          </NextLink>
        </Stack>
      </PageTransition>
    </Center>
  )
}

export default Login

export const getStaticProps = () => {
  return {
    props: {
      header: {
        display: 'none',
      },
      footer: {
        borderTopWidth: '1px',
      },
    },
  }
}
