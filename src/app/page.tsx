import dynamic from 'next/dynamic';

// Server components for initial render
function Shell() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="h-[72px]" /> {/* Navbar placeholder */}
      <main>
        <div className="min-h-[600px]" /> {/* Content placeholder */}
      </main>
    </div>
  );
}

// Client components loaded dynamically
const ClientPage = dynamic(() => import('../components/client-page'), {
  ssr: false,
  loading: () => <Shell />
});

export default function Page() {
  return <ClientPage />;
}
