import dynamic from 'next/dynamic';

// Server component for initial render
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

// Client component loaded dynamically
const ClientLegal = dynamic(() => import('../../components/client-legal'), {
  ssr: false,
  loading: () => <Shell />
});

export default function Legal() {
  return <ClientLegal />;
}
