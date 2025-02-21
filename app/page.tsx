import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Brain, DollarSign, School, Users, TrendingUp, Target } from "lucide-react"
import { InteractiveDashboard } from "../components/charts/InteractiveDashboard"
import MetricsAndGoalsDashboard from "../components/charts/MetricsAndGoalsDashboard"
import { SocialMediaDashboard } from "../components/charts/SocialMediaDashboard"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            ElevatED Dashboard
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Track your college application journey and financial planning progress
          </p>
        </section>

        {/* Feature Cards */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <School className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-lg text-default">Applications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted">
                Track college applications and deadlines
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <DollarSign className="w-6 h-6 text-green-600" />
                <CardTitle className="text-lg text-default">Financial Aid</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted">
                Monitor scholarships and aid opportunities
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Brain className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-lg text-default">AI Guidance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted">
                Personalized recommendations and support
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-red-600" />
                <CardTitle className="text-lg text-default">Community</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted">
                Connect with peers and share experiences
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Interactive Dashboard Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-default">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Progress Overview
          </h2>
          <InteractiveDashboard />
        </section>

        {/* Metrics and Goals Dashboard Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-default">
            <Target className="w-6 h-6 text-blue-600" />
            Strategic Goals & Metrics
          </h2>
          <MetricsAndGoalsDashboard />
        </section>

        {/* Content Marketing Strategy Section */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-default">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Content Marketing Strategy
          </h2>
          <SocialMediaDashboard />
        </section>
      </main>
    </div>
  )
}
