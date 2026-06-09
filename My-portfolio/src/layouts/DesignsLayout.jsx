import DesignsNavbar from '../components/DesignsNavbar';
import Footer from '../components/Footer';

export default function DesignsLayout({ children }) {
  return (
    <div>
      <DesignsNavbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}