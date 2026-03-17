import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

function AppLayout({ children }) {
  return (
    <div className="bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-600 text-gray-900 dark:text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
