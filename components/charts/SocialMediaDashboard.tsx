'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Instagram, Youtube, Radio, Video, BarChart3, Play, Users } from 'lucide-react';

export function SocialMediaDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-2 border-pink-200">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Instagram className="w-6 h-6 text-pink-600" />
              <CardTitle>Instagram</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-900/20">
              <h3 className="font-medium mb-2">Posting Strategy</h3>
              <p className="text-sm">Daily posts, 3-5 stories per day</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Goal Progress</h3>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">50,000 followers</span>
                <span className="text-sm">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-pink-600 rounded-full h-2" style={{ width: '65%' }} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-sm font-medium">120</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Posts</div>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-sm font-medium">450</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Stories</div>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-sm font-medium">4.8%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Engagement</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Radio className="w-6 h-6 text-purple-600" />
              <CardTitle>TikTok</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <h3 className="font-medium mb-2">Posting Strategy</h3>
              <p className="text-sm">2-3 videos per day</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Goal Progress</h3>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">1M monthly views</span>
                <span className="text-sm">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 rounded-full h-2" style={{ width: '45%' }} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-sm font-medium">180</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Videos</div>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-sm font-medium">850K</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Views</div>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-sm font-medium">5.2%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Engagement</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-red-200">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Youtube className="w-6 h-6 text-red-600" />
              <CardTitle>YouTube</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
              <h3 className="font-medium mb-2">Posting Strategy</h3>
              <p className="text-sm">Weekly long-form, bi-weekly shorts</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Goal Progress</h3>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">100,000 subscribers</span>
                <span className="text-sm">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 rounded-full h-2" style={{ width: '35%' }} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-sm font-medium">48</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Videos</div>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-sm font-medium">35K</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Subscribers</div>
              </div>
              <div className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="text-sm font-medium">6.5%</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Engagement</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Types Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Content Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Video className="w-5 h-5" />
                <h3 className="font-medium">Short-form Videos</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Success stories and application tips</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 className="w-5 h-5" />
                <h3 className="font-medium">Infographics</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Financial aid and scholarship guides</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Play className="w-5 h-5" />
                <h3 className="font-medium">Live Sessions</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Q&A with admissions experts</p>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Users className="w-5 h-5" />
                <h3 className="font-medium">User Content</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Current student experiences</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 