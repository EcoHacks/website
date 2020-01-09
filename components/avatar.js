import Link from 'next/link'
import { Avatar, Link as A } from '@theme-ui/components'

export default ({ size = 50, light = false, ...props }) => (
  <Link href="https://ecohacks.io">
    <A sx={{ cursor: 'pointer', lineHeight: 0 }}>
      <Avatar
        {...props}
        src="https://ecohacks.io/logo-inverted.png" // always use the URL and not file path
        alt="EcoHacks avatar"
        size={size}
        sx={{
          bg: 'primary',
          ...props.sx
        }}
      />
    </A>
  </Link>
)
