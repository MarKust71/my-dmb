import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'my-dMb App | Product | MRA',
  }
}

const MraPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Analiza Składu Ciała</h1>

      <p className="text-center text-lg font-semibold text-gray-700">
        Cena analizy: <span className="text-red-600">197 zł</span>
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dlaczego warto?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Bezboleśnie</li>
          <li>Komfortowo</li>
          <li>Na Twoją kieszeń</li>
        </ul>
        <p>
          Kwantowa analiza składu ciała to nowoczesna i bezinwazyjna metoda
          monitorowania zdrowia.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Czym jest analiza?</h2>
        <p>
          Kwantowy analizator działa w oparciu o przepływ energii w organizmie
          mierzony bioimpedancją oraz rezonansem magnetycznym. Odczytuje poziom
          witamin, minerałów, aminokwasów, koenzymów i hormonów.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Jak to działa?</h2>
        <p>
          To innowacyjna metoda analizy pozwalająca na kompleksową ocenę stanu
          zdrowia, wskazanie możliwych nieprawidłowości i tendencji w
          funkcjonowaniu organów i układów.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Zakres analizy</h2>
        <p>
          Technologia stworzona na potrzeby badań astronautów. Analizowane
          obszary:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Układ krążenia i naczyń mózgowych</li>
          <li>
            Układ pokarmowy (jelita, wątroba, trzustka, pęcherzyk żółciowy)
          </li>
          <li>Nerki, płuca, mózg</li>
          <li>Układ kostny, gęstość mineralna kości, choroby reumatyczne</li>
          <li>
            Cukier we krwi, pierwiastki śladowe, witaminy, aminokwasy, koenzymy
          </li>
          <li>Układ hormonalny, odpornościowy, tarczyca</li>
          <li>Toksyny, metale ciężkie, alergeny</li>
          <li>Otyłość, funkcje oczu, kolagen, lipidy we krwi</li>
          <li>Ginekologia, piersi, prostata, męskie funkcje rozrodcze</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Co otrzymasz?</h2>
        <p>
          Wyniki porównywalne z ponad 20 badaniami laboratoryjnymi, bez bólu i
          bez promieniowania. Całość testu trwa zaledwie 3 minuty. Cena obejmuje
          omówienie otrzymanych rezultatów i sugestie co do dalszego
          postępowania.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Rejestracja</h2>
        <p>
          Internetowo:{' '}
          <a
            href="https://mydmb.pl/mra/rejestruj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            https://mydmb.pl/mra/rejestruj
          </a>
        </p>
        <p>
          Telefon:{' '}
          <a href="tel:+48729803336" className="text-blue-600 underline">
            +48 729 803 336
          </a>
        </p>
      </section>
    </div>
  )
}

export default MraPage
