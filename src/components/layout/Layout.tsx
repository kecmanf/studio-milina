import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import BackToTop from './BackToTop';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export default function Layout() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-cream font-sans text-charcoal">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
