import { bestSells, categories, featured } from '@/mock-data';
import { Header } from './Header';
import { Section } from './Section';
import { SearchBar } from './SearchBar';
import { CardCategory, CardSells } from '@/components';

export const Home = () => {
  return (
    <div className="relative w-full">
      <Header />

      <div className="m-1 p-3">
        <SearchBar className="max-sm:flex" />
      </div>

      <Section title="Categories">
        {
          categories.map((category, i) => (
            <CardCategory key={i} {...category} />
          ))
        }
      </Section>

      <Section title="Featured">
        {
          featured.map((feat, i) => (
            <CardSells key={i} {...feat} />
          ))
        }
      </Section>

      <Section title="Best sell">
        {
          bestSells.map((bestSell, i) => (
            <CardSells key={i} {...bestSell} />
          ))
        }
      </Section>
    </div>
  );
}