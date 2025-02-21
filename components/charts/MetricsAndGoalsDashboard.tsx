"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Target,
  Users,
  Brain,
  Database,
  School,
  Heart,
  TrendingUp,
  ArrowUpRight,
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
import { Line, Bar } from 'react-chartjs-2';

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

type TimeframeData = {
  labels: string[];
  websiteTraffic: number[];
  socialMentions: number[];
  activeUsers: number[];
};

const MetricsAndGoalsDashboard = () => {
  const [timeframe, setTimeframe] = useState<'6months' | '18months'>('6months');

  // Data for different timeframes
  const timeframeData: Record<'6months' | '18months', TimeframeData> = {
    '6months': {
      labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
      websiteTraffic: [1000, 1500, 2300, 3200, 4100, 5000],
      socialMentions: [50, 120, 200, 350, 480, 600],
      activeUsers: [500, 1200, 2800, 4500, 7000, 10000],
    },
    '18months': {
      labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M17', 'M18'],
      websiteTraffic: [1000, 1500, 2300, 3200, 4100, 5000, 6200, 7500, 9000, 11000, 13500, 16000, 19000, 22000, 25000, 28000, 31000, 35000],
      socialMentions: [50, 120, 200, 350, 480, 600, 800, 1100, 1500, 2000, 2600, 3300, 4100, 5000, 6000, 7200, 8500, 10000],
      activeUsers: [500, 1200, 2800, 4500, 7000, 10000, 13000, 17000, 22000, 28000, 35000, 43000, 52000, 62000, 73000, 85000, 98000, 112000],
    }
  };

  // Get current timeframe data
  const currentData = timeframeData[timeframe];

  // Data for Brand Awareness Metrics
  const brandAwarenessData = {
    labels: currentData.labels,
    datasets: [
      {
        label: 'Website Traffic Growth',
        data: currentData.websiteTraffic,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
      {
        label: 'Social Media Mentions',
        data: currentData.socialMentions,
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.5)',
        tension: 0.4,
      },
    ],
  };

  // Data for User Engagement Metrics
  const engagementData = {
    labels: currentData.labels,
    datasets: [
      {
        label: 'Active Users',
        data: currentData.activeUsers,
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        borderColor: 'rgb(34, 197, 94)',
        borderWidth: 1,
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

  // Progress metrics based on objectives
  const progressMetrics = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Brand Awareness",
      current: "60%",
      target: "100%",
      growth: "+15%",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "User Base",
      current: "10,000",
      target: "100,000",
      growth: "+25%",
    },
    {
      icon: <Brain className="w-6 h-6 text-green-600" />,
      title: "AI Feature Usage",
      current: "45%",
      target: "70%",
      growth: "+10%",
    },
  ];

  // Secondary metrics based on objectives
  const secondaryMetrics = [
    {
      icon: <Database className="w-6 h-6 text-blue-600" />,
      title: "Data Points Collected",
      value: "250,000",
      growth: "+12%",
    },
    {
      icon: <School className="w-6 h-6 text-purple-600" />,
      title: "School Partnerships",
      value: "15",
      growth: "+5",
    },
    {
      icon: <Heart className="w-6 h-6 text-green-600" />,
      title: "User Retention",
      value: "85%",
      growth: "+8%",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Metrics & Goals Dashboard</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setTimeframe('6months')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              timeframe === '6months'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary/20 dark:hover:bg-secondary/30'
            }`}
          >
            6 Months
          </button>
          <button
            onClick={() => setTimeframe('18months')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              timeframe === '18months'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary/20 dark:hover:bg-secondary/30'
            }`}
          >
            18 Months
          </button>
        </div>
      </div>

      {/* Primary Objectives Progress */}
      <div className="grid grid-cols-3 gap-6">
        {progressMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {metric.icon}
                  <CardTitle className="text-lg">{metric.title}</CardTitle>
                </div>
                <span className="text-green-600 flex items-center text-sm">
                  {metric.growth} <TrendingUp className="w-4 h-4 ml-1" />
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Current</span>
                  <span className="font-bold">{metric.current}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Target</span>
                  <span className="font-bold text-blue-600">{metric.target}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Brand Awareness Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Line data={brandAwarenessData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Engagement Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <Bar data={engagementData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Metrics */}
      <div className="grid grid-cols-3 gap-6">
        {secondaryMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {metric.icon}
                  <CardTitle className="text-lg">{metric.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span className="text-green-600 flex items-center">
                    {metric.growth} <ArrowUpRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MetricsAndGoalsDashboard; 