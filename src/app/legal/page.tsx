import { LegalContent } from './components/legal-content';

export default function Legal() {
  return <LegalContent />;
}

// Opt out of static generation for this page
export const dynamic = 'force-dynamic';
