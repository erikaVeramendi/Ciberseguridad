import './index.css'
import Header from './components/Header'
import Banner from './components/Banner'
import CatalogSection from './components/CatalogSection'
import SuggestionsForm from './components/SuggestionsForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Banner />
        <CatalogSection />
        <SuggestionsForm />
      </main>
      <Footer />
    </div>
  )
}
