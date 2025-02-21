'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Users,
  TrendingUp,
  Target,
  Award,
  Globe,
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export function MarketingDashboard() {
  const [activeView, setActiveView] = useState('overview');

  // Marketing campaign metrics
  const marketingMetrics = {
    affiliateProgram: {
      partners: 53,
      signups: 4780,
      conversionRate: '15.2%',
      goals: [
        { metric: 'Organization Partnerships', current: 53, target: 50, progress: 106 },
        { metric: 'App Signups', current: 4780, target: 5000, progress: 96 },
        { metric: 'Conversion Rate', current: '15.2%', target: '15%', progress: 101 }
      ]
    },
    digitalAds: {
      budget: '$50,000',
      platforms: [
        { name: 'Google Search', budget: '$20,000', impressions: '450K', visits: '38K', ctr: '8.4%' },
        { name: 'YouTube', budget: '$15,000', impressions: '320K', visits: '28K', ctr: '8.8%' },
        { name: 'Instagram', budget: '$10,000', impressions: '180K', visits: '22K', ctr: '12.2%' },
        { name: 'Facebook', budget: '$5,000', impressions: '90K', visits: '12K', ctr: '13.3%' }
      ],
      totalImpressions: '1.04M',
      totalVisits: '92K'
    }
  };

  // Chart data for campaign performance
  const campaignPerformanceData = {
    labels: months,
    datasets: [
      {
        label: 'Affiliate Signups',
        data: [800, 1200, 1800, 2400, 3500, 4780],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Ad Conversions',
        data: [600, 1000, 1500, 2200, 3000, 4200],
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.5)',
        tension: 0.4,
      },
    ],
  };

  // Chart data for budget allocation
  const budgetAllocationData = {
    labels: marketingMetrics.digitalAds.platforms.map(p => p.name),
    datasets: [
      {
        data: marketingMetrics.digitalAds.platforms.map(p => parseInt(p.budget.replace('$', '').replace(',', ''))),
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(147, 51, 234, 0.5)',
          'rgba(34, 197, 94, 0.5)',
          'rgba(245, 158, 11, 0.5)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(147, 51, 234)',
          'rgb(34, 197, 94)',
          'rgb(245, 158, 11)',
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutOptions = {
    ...chartOptions,
    cutout: '60%',
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setActiveView('overview')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeView === 'overview'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveView('affiliate')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeView === 'affiliate'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
        >
          Affiliate Program
        </button>
        <button
          onClick={() => setActiveView('advertising')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeView === 'advertising'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
        >
          Digital Advertising
        </button>
      </div>

      <div className="grid gap-8">
        {/* Overview Metrics */}
        <Card className="w-full">
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl font-semibold">Marketing Campaign Overview</CardTitle>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Affiliate Partners</p>
                <p className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                  {marketingMetrics.affiliateProgram.partners} <TrendingUp className="w-4 h-4" />
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Signups</p>
                <p className="text-2xl font-bold text-purple-600">
                  {marketingMetrics.affiliateProgram.signups}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Ad Impressions</p>
                <p className="text-2xl font-bold text-green-600">
                  {marketingMetrics.digitalAds.totalImpressions}
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Website Visits</p>
                <p className="text-2xl font-bold text-orange-600">
                  {marketingMetrics.digitalAds.totalVisits}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Line data={campaignPerformanceData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>

        {/* Affiliate Program Section */}
        {(activeView === 'overview' || activeView === 'affiliate') && (
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Affiliate Program Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-blue-600" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">Partners</p>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">{marketingMetrics.affiliateProgram.partners}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-green-600" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">Conversion Rate</p>
                    </div>
                    <p className="text-2xl font-bold text-green-600">{marketingMetrics.affiliateProgram.conversionRate}</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-purple-600" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">Total Signups</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">{marketingMetrics.affiliateProgram.signups}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Program Goals</h3>
                  {marketingMetrics.affiliateProgram.goals.map((goal, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">{goal.metric}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{goal.current}</span>
                          <span className="text-sm text-blue-600">/ {goal.target}</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`rounded-full h-2 ${
                            goal.progress >= 100 ? 'bg-green-500' : 'bg-blue-600'
                          }`}
                          style={{ width: `${Math.min(goal.progress, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Digital Advertising Section */}
        {(activeView === 'overview' || activeView === 'advertising') && (
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Budget Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <Doughnut data={budgetAllocationData} options={doughnutOptions} />
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Platform Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketingMetrics.digitalAds.platforms.map((platform, index) => (
                    <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Globe className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">{platform.name}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-600">{platform.budget}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-2">
                        <div>
                          <p className="text-sm text-gray-600">Impressions</p>
                          <p className="font-medium text-purple-600">{platform.impressions}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Visits</p>
                          <p className="font-medium text-green-600">{platform.visits}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">CTR</p>
                          <p className="font-medium text-orange-600">{platform.ctr}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
} 