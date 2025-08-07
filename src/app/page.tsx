import HeroFuturistic from "@/components/ui/hero-futuristic";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroFuturistic />
      
      {/* ROO-AI Terminal Section */}
      <section className="terminal-section min-h-screen p-8">
        <div className="terminal-content max-w-6xl mx-auto">
          <h2 className="terminal-title">About ROO-AI</h2>
          
          <p className="terminal-subtitle">
            Boomerang distills millions of market signals into one quantified probability-of-success score so you can deploy capital (or sweat-equity) with conviction.
          </p>

          <div className="mb-12">
            <h3>Capabilities</h3>
            
            <div className="space-y-6">
              <div className="terminal-card">
                <h4>Market-Relative Benchmarking</h4>
                <p>We continuously plot each startup&apos;s KPIs against its sector ETF, the S&amp;P 500, and peer exits in real time.</p>
                <p className="highlight">Instantly see whether momentum is founder-alpha or macro tide.</p>
              </div>

              <div className="terminal-card">
                <h4>Influencer Sentiment Engine</h4>
                <p>A neural net ingests commentary from the 10 most influential voices in every vertical, normalizes tone, and corrects for hype bias.</p>
                <p className="highlight">Cuts through noise—only sentiment with proven market-moving power reaches your dashboard.</p>
              </div>

              <div className="terminal-card">
                <h4>CAGR & Competitor Delta Analysis</h4>
                <p>We overlay a venture&apos;s historical growth curve on comparable company trajectories and flag variance beyond one standard deviation.</p>
                <p className="highlight">Spot over- (or under-) performance long before the next funding round.</p>
              </div>

              <div className="terminal-card">
                <h4>Similar-Trajectory Simulation</h4>
                <p>Monte Carlo paths are seeded with look-alike venture data from the past 20 years to expose hidden unicorn potential.</p>
                <p className="highlight">Surfaces non-obvious &quot;Airbnb-in-2009&quot; moments you&apos;d otherwise miss.</p>
              </div>

              <div className="terminal-card">
                <h4>Unified ROO Score</h4>
                <p>Bayesian ensemble forecasting fuses every signal—market, team, tech readiness—into a single 0-100 probability updated daily.</p>
                <p className="highlight">One metric to rank, compare, and track thousands of deals at a glance.</p>
              </div>
            </div>
          </div>

          <div>
            <h3>Inside the ROO-AI Engine</h3>
            
            <div className="terminal-grid">
              <div className="terminal-card">
                <h4>Probabilistic Pattern Recognition</h4>
                <p>Neural networks detect micro-behaviours (code-repo velocity, hiring cadence, product-hunt chatter) invisible to classic DD.</p>
              </div>

              <div className="terminal-card">
                <h4>Alpha-Signal Extraction</h4>
                <p>Our pipeline de-correlates overlapping data streams to isolate true predictive factors, not vanity metrics.</p>
              </div>

              <div className="terminal-card">
                <h4>Bayesian Ensemble Forecasting</h4>
                <p>Multiple base-learners (gradient-boosted trees, temporal GNNs, causal impact models) vote on outcome likelihood; posteriors are recalibrated with every new data point.</p>
              </div>

              <div className="terminal-card">
                <h4>Monte Carlo Scenario Lab</h4>
                <p>10 000+ stress tests per startup model interest-rate shocks, funding-winter droughts, supply-chain crunches, and black-swan virality.</p>
              </div>

              <div className="terminal-card" style={{ gridColumn: 'span 2' }}>
                <h4>Explainability Layer</h4>
                <p>Every score ships with a Shapley-value heat map so investors and founders see which levers move the needle.</p>
              </div>
            </div>
          </div>

          {/* Access ROO-AI Button */}
          <div className="mt-12 text-center">
            <Link href="/access">
              <button className="access-roo-btn">
                Access ROO-AI
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Dotted Gradient Transition */}
      <section className="dotted-gradient h-screen-1-5"></section>

      {/* White Margin Section with Logo */}
      <section className="bg-white h-screen-1-5 relative">
        <div className="absolute bottom-4 right-4">
          <Image
            src="/IMG_0917.jpg"
            alt="ROO Logo"
            width={120}
            height={120}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
