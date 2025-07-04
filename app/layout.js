import './globals.css';
import Header from '../components/mainHeader/Header';

export const metadata = {
  title: "NQB8 Job Listing Platform",
  description: 'A platfrom where job could be found.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}