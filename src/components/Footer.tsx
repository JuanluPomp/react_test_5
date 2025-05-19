
import type { ProductFilters } from '../types'

export default function Footer({filters}: {filters: ProductFilters | null}) {
  return (
    <footer>
        {JSON.stringify(filters, null, 2)}
    </footer>
  )
}
