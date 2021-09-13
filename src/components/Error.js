import Link from 'next/link'
import style from '../../styles/Error.module.scss'

export default function Error({statusCode}) {
  return <div className={style.error_container}>
    <h1>{statusCode} - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </div>
}