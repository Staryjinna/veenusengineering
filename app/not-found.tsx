import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <PageHero crumbs={[{ label: 'Page not found' }]} title="Page not found" intro="That page does not exist. Try the services or projects, or message us.">
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Home</Button>
        <Button href="/services/" variant="ghost">Services</Button>
        <Button href="/contact/" variant="ghost">Contact</Button>
      </div>
    </PageHero>
  );
}
