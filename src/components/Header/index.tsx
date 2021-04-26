import Link from 'next/link'

import styles from './styles.module.scss'

type HeaderProps = {
  title: string
  img: string
  url: string
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Ecoleta" />

      <Link href={props.url}>
        <button>
          <img src={props.img} alt="Login" />
          {props.title}
        </button>
      </Link>
    </header>
  )
}