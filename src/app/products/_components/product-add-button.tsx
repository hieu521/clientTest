'use client'
import { Button } from '@/src/components/ui/button'
import { isClient } from '@/src/lib/http'
import Link from 'next/link'

export default function ProductAddButton() {
  const isAuthenticated =
    isClient() && Boolean(localStorage.getItem('sessionToken'))
  if (!isAuthenticated) return null
  return (
    <Link href={'/products/add'}>
      <Button variant={'secondary'}>Thêm sản phẩm</Button>
    </Link>
  )
}
