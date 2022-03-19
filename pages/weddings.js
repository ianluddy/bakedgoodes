import Cta from '../components/cta';
import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';

export default function() {
  return (
    <Layout>
      <PageHeader>
        Weddings
      </PageHeader>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie dui at tellus eleifend dapibus. Aenean vitae arcu non sem sagittis consectetur. Praesent sed arcu quis felis dignissim placerat. Nam ultrices metus non justo porttitor lacinia. Aenean a convallis velit. Praesent porttitor urna nec blandit placerat. Aliquam ligula tortor, hendrerit sollicitudin condimentum quis, eleifend id metus.</p>

      <p>Phasellus rutrum ipsum vel tincidunt interdum. Vestibulum metus lorem, dictum vel faucibus nec, tincidunt sed quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet massa ex. Nulla maximus euismod purus. In at justo vitae massa condimentum bibendum. Donec rhoncus eros nibh, vitae tempor libero rutrum quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eu tempor odio, id gravida odio. Suspendisse aliquet sem feugiat eros laoreet eleifend. Aliquam euismod metus eget purus tempor maximus. Praesent eros tellus, rhoncus sit amet urna eget, mattis mattis neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

      <p>Suspendisse facilisis in enim id scelerisque. Praesent interdum lacus lorem, ac sollicitudin nunc viverra auctor. Suspendisse iaculis consequat dolor a volutpat. Morbi sed dui at arcu bibendum iaculis a at quam. Sed a ipsum tincidunt sem elementum auctor eget vel velit. Suspendisse sapien velit, efficitur ac posuere a, venenatis non tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris est felis, malesuada in metus in, rutrum tempor lorem. Etiam pharetra in urna vel bibendum. Aenean erat purus, laoreet vitae elit eget, euismod vestibulum ante. Fusce id mollis justo. Praesent sodales ultricies consequat. Donec nec erat velit. Pellentesque aliquam lorem sit amet orci rhoncus, id ultrices purus convallis. Phasellus semper elementum nulla, in ultricies nulla congue et. Fusce pretium placerat mollis.      </p>
      
      <Cta 
        headline="Weddings" 
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        buttonText="Contact me"
        buttonLink="/contact"
      />
    </Layout>
  );
}