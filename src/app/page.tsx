import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-8 py-16">
      <header className="mb-20">
        <h1 className="text-5xl font-bold mb-4">Jonathan King</h1>
        <p className="text-lg text-gray-400 max-w-2xl">
          Software engineer with 10+ years in defense, DevOps, and scenario system design. Passionate about visualizations, architecture, cloud, automation, and secure system development.
        </p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-6">📂 Micro Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example project card */}
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
        </div>
      </section>
    </main>
  );
}
