import { Hero } from '@/components/Hero';
import { ShopByCategory } from '@/components/ShopByCategory';
import { FeaturedCollection } from '@/components/FeaturedCollection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';

const Index = () => {
  return (
    <main>
      <Hero />
      <ShopByCategory />
      <FeaturedCollection />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </main>
  );
};

export default Index;
