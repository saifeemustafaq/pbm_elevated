'use client';

import React, { useState } from 'react';
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
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, TrendingUp, Award, Star } from 'lucide-react';

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

export function InteractiveDashboard() {
  const [activeDataset, setActiveDataset] = useState('all');

  // Add new sample data for influencers and ambassadors
  const influencerMetrics = {
    totalInfluencers: 35,
    totalReach: '3.5M',
    totalReferrals: 2720,
    topInfluencers: [
      { name: "Sarah Chen", platform: "YouTube", followers: "250K", referrals: 1250 },
      { name: "Marcus Johnson", platform: "TikTok", followers: "120K", referrals: 850 },
      { name: "Dr. Emily Rivera", platform: "Instagram", followers: "85K", referrals: 620 }
    ]
  };

  const ambassadorMetrics = {
    totalAmbassadors: 25,
    totalReferrals: 3780,
    topPerformers: [
      { name: "Tyler Williams", school: "Stanford University", referrals: 175 },
      { name: "Aisha Patel", school: "UC Berkeley", referrals: 145 },
      { name: "Jordan Lee", school: "MIT", referrals: 210 }
    ]
  };

  // Add marketing campaign metrics
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
        { name: 'Google Search', budget: '$20,000', impressions: '450K', visits: '38K' },
        { name: 'YouTube', budget: '$15,000', impressions: '320K', visits: '28K' },
        { name: 'Instagram', budget: '$10,000', impressions: '180K', visits: '22K' },
        { name: 'Facebook', budget: '$5,000', impressions: '90K', visits: '12K' }
      ],
      totalImpressions: '1.04M',
      totalVisits: '92K'
    }
  };

  const lineChartData = {
    labels: months,
    datasets: [
      {
        label: 'Applications Submitted',
        data: [2, 4, 8, 12, 15, 18],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Scholarships Applied',
        data: [5, 10, 18, 25, 32, 40],
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: months,
    datasets: [
      {
        label: 'Financial Aid Secured ($)',
        data: [5000, 8000, 12000, 15000, 18000, 22000],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1,
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Essays Completed', 'Recommendations', 'Financial Forms'],
    datasets: [
      {
        data: [75, 60, 85],
        backgroundColor: [
          'rgba(59, 130, 246, 0.5)',
          'rgba(147, 51, 234, 0.5)',
          'rgba(34, 197, 94, 0.5)',
        ],
        borderColor: [
          'rgb(59, 130, 246)',
          'rgb(147, 51, 234)',
          'rgb(34, 197, 94)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const baseOptions = {
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
  };

  const lineChartOptions = {
    ...baseOptions,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const barChartOptions = {
    ...baseOptions,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutChartOptions = {
    ...baseOptions,
    cutout: '60%',
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setActiveDataset('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeDataset === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
        >
          All Progress
        </button>
        <button
          onClick={() => setActiveDataset('applications')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeDataset === 'applications'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
        >
          Applications
        </button>
        <button
          onClick={() => setActiveDataset('financial')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeDataset === 'financial'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
        >
          Financial Aid
        </button>
        <button
          onClick={() => setActiveDataset('components')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeDataset === 'components'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
        >
          Application Components
        </button>
        <button
          onClick={() => setActiveDataset('community')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeDataset === 'community'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'
          }`}
        >
          Community Impact
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Application Progress Card */}
        {(activeDataset === 'all' || activeDataset === 'applications') && (
          <Card className="w-full">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl font-semibold">Application Progress</CardTitle>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Submitted</p>
                  <p className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                    18 <ArrowUpRight className="w-4 h-4" />
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Scholarships Applied</p>
                  <p className="text-2xl font-bold text-purple-600 flex items-center gap-2">
                    40 <ArrowUpRight className="w-4 h-4" />
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Financial Aid Card */}
        {(activeDataset === 'all' || activeDataset === 'financial') && (
          <Card className="w-full">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl font-semibold">Financial Aid Progress</CardTitle>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Aid Secured</p>
                  <p className="text-2xl font-bold text-green-600 flex items-center gap-2">
                    $22,000 <ArrowUpRight className="w-4 h-4" />
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Average</p>
                  <p className="text-2xl font-bold text-green-600">$3,667</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Bar data={barChartData} options={barChartOptions} />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Application Components Progress Card */}
        {(activeDataset === 'all' || activeDataset === 'components') && (
          <Card className={`w-full ${activeDataset === 'components' ? 'lg:col-span-2' : ''}`}>
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl font-semibold">Application Components Progress</CardTitle>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Essays Completed</p>
                  <p className="text-2xl font-bold text-blue-600">75%</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Recommendations</p>
                  <p className="text-2xl font-bold text-purple-600">60%</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Financial Forms</p>
                  <p className="text-2xl font-bold text-green-600">85%</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="h-[300px]">
                  <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Average Completion</span>
                      <span className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                        73% <TrendingUp className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Monthly Growth</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Applications Rate</p>
                        <p className="text-green-600">+3 per month</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Scholarship Rate</p>
                        <p className="text-green-600">+7 per month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Community Impact Section */}
        {(activeDataset === 'all' || activeDataset === 'community') && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Influencer Metrics Card */}
            <Card className="w-full">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <Star className="w-5 h-5 text-blue-600" />
                  Influencer Impact
                </CardTitle>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Influencers</p>
                    <p className="text-2xl font-bold text-blue-600">{influencerMetrics.totalInfluencers}</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Reach</p>
                    <p className="text-2xl font-bold text-purple-600">{influencerMetrics.totalReach}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Referrals</p>
                    <p className="text-2xl font-bold text-green-600">{influencerMetrics.totalReferrals}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {influencerMetrics.topInfluencers.map((influencer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full">
                          <Star className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{influencer.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{influencer.platform} • {influencer.followers} followers</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-medium">{influencer.referrals} referrals</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Ambassador Metrics Card */}
            <Card className="w-full">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-semibold flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  Student Ambassadors
                </CardTitle>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Ambassadors</p>
                    <p className="text-2xl font-bold text-purple-600">{ambassadorMetrics.totalAmbassadors}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Referrals</p>
                    <p className="text-2xl font-bold text-green-600">{ambassadorMetrics.totalReferrals}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ambassadorMetrics.topPerformers.map((ambassador, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full">
                          <Award className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-medium">{ambassador.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{ambassador.school}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="font-medium">{ambassador.referrals} referrals</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Marketing Campaign Metrics */}
        {(activeDataset === 'all' || activeDataset === 'community') && (
          <>
            <Card className="w-full col-span-2">
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl font-semibold">Marketing Campaign Overview</CardTitle>
                <div className="grid grid-cols-4 gap-4 mt-4">
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Affiliate Partners</p>
                    <p className="text-2xl font-bold text-teal-600 flex items-center gap-2">
                      {marketingMetrics.affiliateProgram.partners} <TrendingUp className="w-4 h-4" />
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Signups</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {marketingMetrics.affiliateProgram.signups}
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ad Impressions</p>
                    <p className="text-2xl font-bold text-purple-600">
                      {marketingMetrics.digitalAds.totalImpressions}
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Website Visits</p>
                    <p className="text-2xl font-bold text-green-600">
                      {marketingMetrics.digitalAds.totalVisits}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Affiliate Program Goals</h3>
                    <div className="space-y-4">
                      {marketingMetrics.affiliateProgram.goals.map((goal, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm text-gray-600">{goal.metric}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium">{goal.current}</span>
                              <span className="text-sm text-teal-600">/ {goal.target}</span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`rounded-full h-2 ${
                                goal.progress >= 100 ? 'bg-green-500' : 'bg-teal-600'
                              }`}
                              style={{ width: `${Math.min(goal.progress, 100)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Ad Platform Distribution</h3>
                    <div className="space-y-3">
                      {marketingMetrics.digitalAds.platforms.map((platform, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{platform.name}</span>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-600">{platform.budget}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-purple-600">{platform.impressions}</span>
                              <span className="text-sm text-green-600">{platform.visits}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
} 