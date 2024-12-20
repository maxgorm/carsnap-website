import dynamic from 'next/dynamic';

// Server component for initial render
function Shell() {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="fixed top-0 left-0 right-0 h-[72px] bg-transparent z-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <a href="/" className="text-white text-2xl font-bold">CarSnap</a>
        </div>
      </header>
      <main className="pt-[72px]">
        <section className="container mx-auto px-4 py-16">
          <h1 className="text-white text-4xl font-bold text-center">Loading...</h1>
        </section>
      </main>
    </div>
  );
}

// Client component loaded after hydration
const ClientContent = dynamic(
  () => import('../../components/client-legal').then(mod => mod.default),
  {
    ssr: false,
    loading: () => <Shell />
  }
);

export default function Legal() {
  return <ClientContent />;
}
