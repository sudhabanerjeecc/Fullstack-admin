import PageTitle from '@/components/common/PageTitle'
import ActiveUsers from '@/components/dashboard/ActiveUsers'
import IncomeStatistics from '@/components/dashboard/IncomeStatistics'
import NumberCard from '@/components/dashboard/NumberCard'
import RecentActivity from '@/components/dashboard/RecentActivity'
import RecentOrders from '@/components/dashboard/RecentOrders'
import SalesByTraffic from '@/components/dashboard/SalesByTraffic'
import React from 'react'

export default function page() {
  return (
    <div className="container pb-6">
      <PageTitle title={'Dashboard'} />
      <div className="row g-4 g-xl-5">
        <NumberCard />
        <NumberCard />
        <NumberCard />
        <RecentOrders />
        <ActiveUsers />
        <IncomeStatistics />
        <SalesByTraffic />
        <RecentActivity />

      </div>
    </div>
  )
}
