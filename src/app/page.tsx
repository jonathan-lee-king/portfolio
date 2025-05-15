import Link from "next/link";
import { getLastCommitDate } from "@/lib/git-utils";

export default async function Home() {
  // Get the last commit date dynamically
  const lastUpdatedDate = await getLastCommitDate();
  return (
    <main className="min-h-screen bg-gray-950 text-white px-8 py-16">
      <header className="mb-20">
        <h1 className="text-5xl font-bold mb-4">Jonathan King</h1>
        <p className="text-lg text-gray-400 max-w-2xl mb-4">
          Software engineer with 10+ years in defense, DevOps, and scenario system design. Passionate about visualizations, architecture, cloud, automation, and secure system development.
        </p>
        <div className="flex gap-4">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            View Resume
          </Link>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-6">📂 Micro Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Work in Progress Message */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 col-span-full">
            <h3 className="text-xl font-bold mb-2">🚧 Under Construction 🚧</h3>
            <p className="text-sm text-gray-400">
              The micro-projects section is currently being updated with real-world examples.
              <br />
              Last updated: {lastUpdatedDate}
            </p>
          </div>

          {/* Commented example projects
          <Link
            href="/projects/k8s-secrets-demo"
            className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 transition-colors border border-gray-700"
          >
            <h3 className="text-xl font-bold mb-2">Kubernetes Secrets Demo</h3>
            <p className="text-sm text-gray-400">
              A minimal containerized app demonstrating secure secrets management in Kubernetes using Sealed Secrets.
            </p>
          </Link>

          <Link
            href="/projects/ci-cd-pipeline"
            className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 transition-colors border border-gray-700"
          >
            <h3 className="text-xl font-bold mb-2">CI/CD Pipeline Example</h3>
            <p className="text-sm text-gray-400">
              End-to-end GitHub Actions pipeline with build, test, and security scanning. Auto-deploys on merge.
            </p>
          </Link>

          <Link
            href="/projects/zero-trust"
            className="bg-gray-800 hover:bg-gray-700 rounded-xl p-6 transition-colors border border-gray-700"
          >
            <h3 className="text-xl font-bold mb-2">Zero Trust Auth API</h3>
            <p className="text-sm text-gray-400">
              A secured API with token-based auth, RBAC, and assumptions of breach. Demonstrates Zero Trust principles.
            </p>
          </Link>
          */}
        </div>
      </section>
    </main>
  );
}
