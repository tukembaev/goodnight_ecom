import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

import cls from './index.module.scss'

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <section className={cls.container}>
      <div className={cls.titleWrapper}>
        <h3>Размеры постельного белья</h3>
        <Link href="/products">Показать все</Link>
      </div>

      <div className={cls.list}>
        {categories.map(category => {
          return <CategoryCard key={category.id} category={category} />
        })}
      </div>
    </section>
  )
}

export default Categories
